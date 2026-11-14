-- Tripp push notifications: phone subscriptions, a trigger for new expenses, and the weekly/daily schedule.
-- Additive: trip_items, trip_pull and trip_push are untouched.
-- ALREADY APPLIED to the "Samui Trip" project on 2026-11-14. Kept here for reference.
-- Not in this file on purpose (they hold secrets): the Vault entries tripp_push_url, tripp_cron_secret,
-- tripp_vapid_public, tripp_vapid_private, the tripp_push_secrets() reader, and the pg_cron jobs:
--   tripp-cheer       0 1 * * 1,3,5   Mon/Wed/Fri 09:00 Ulaanbaatar
--   tripp-daily-utc8  0 0 * * *       08:00 in UTC+8 (China days)
--   tripp-daily-utc7  0 1 * * *       08:00 in UTC+7 (Thailand days)
--   tripp-nye         0 17 31 12 *    00:00 1 Jan in Phuket

create extension if not exists pg_net schema extensions;
create extension if not exists pg_cron;

create table if not exists public.push_subs (
  endpoint   text        primary key,
  trip_code  text        not null,
  person     text,
  p256dh     text        not null,
  auth       text        not null,
  ua         text,
  created_at timestamptz not null default now(),
  last_ok    timestamptz
);
create index if not exists push_subs_code on public.push_subs (trip_code);
alter table public.push_subs enable row level security;
revoke all on public.push_subs from anon, authenticated;

-- A phone turns notifications on (or updates who it belongs to). Needs the trip code from the invite link.
create or replace function public.push_subscribe(p_code text, p_sub jsonb, p_person text default null, p_ua text default null)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if length(p_code) < 16 then raise exception 'trip code too short'; end if;
  if coalesce(p_sub->>'endpoint', '') !~ '^https://' or length(p_sub->>'endpoint') > 1000 then raise exception 'bad endpoint'; end if;
  if (select count(*) from public.push_subs where trip_code = p_code) >= 40
     and not exists (select 1 from public.push_subs where endpoint = p_sub->>'endpoint') then
    raise exception 'too many devices';
  end if;
  insert into public.push_subs (endpoint, trip_code, person, p256dh, auth, ua)
  values (p_sub->>'endpoint', p_code, left(p_person, 64), p_sub->'keys'->>'p256dh', p_sub->'keys'->>'auth', left(p_ua, 200))
  on conflict (endpoint) do update
    set trip_code = excluded.trip_code, person = excluded.person, p256dh = excluded.p256dh, auth = excluded.auth, ua = excluded.ua;
  return true;
end;
$$;

create or replace function public.push_unsubscribe(p_code text, p_endpoint text)
returns boolean
language sql
security definer
set search_path = public
as $$
  with d as (delete from public.push_subs where trip_code = p_code and endpoint = p_endpoint returning 1)
  select exists (select 1 from d);
$$;

revoke all on function public.push_subscribe(text, jsonb, text, text) from public;
revoke all on function public.push_unsubscribe(text, text) from public;
grant execute on function public.push_subscribe(text, jsonb, text, text) to anon, authenticated;
grant execute on function public.push_unsubscribe(text, text) to anon, authenticated;

-- Calls the tripp-push Edge Function. The URL and shared secret live in Vault.
create or replace function public.tripp_push_call(p_body jsonb)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_url text := (select decrypted_secret from vault.decrypted_secrets where name = 'tripp_push_url');
  v_key text := (select decrypted_secret from vault.decrypted_secrets where name = 'tripp_cron_secret');
begin
  if v_url is null or v_key is null then return null; end if;
  return net.http_post(url := v_url, body := p_body,
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-tripp-secret', v_key),
    timeout_milliseconds := 10000);
end;
$$;
revoke all on function public.tripp_push_call(jsonb) from public, anon, authenticated;

-- New shared expense → tell everyone else. Only brand-new rows created in the last 2 days, so an old phone
-- syncing its backlog doesn't flood the group.
create or replace function public.tripp_on_expense()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.kind = 'expenses'
     and coalesce((new.data->>'deleted')::boolean, false) = false
     and coalesce((new.data->>'created')::bigint, 0) > (extract(epoch from now()) * 1000 - 2 * 86400000) then
    perform public.tripp_push_call(jsonb_build_object('type', 'expense', 'code', new.trip_code, 'key', new.key, 'data', new.data));
  end if;
  return new;
end;
$$;
drop trigger if exists tripp_expense_push on public.trip_items;
create trigger tripp_expense_push after insert on public.trip_items
  for each row when (new.kind = 'expenses') execute function public.tripp_on_expense();

-- Added 2026-11-15: sent-message log and Secret Santa (applied).
create table if not exists public.push_log (id bigserial primary key, at timestamptz not null default now(), trip_code text, type text not null, title text, body text, ok int not null default 0, fail int not null default 0, gone int not null default 0);
alter table public.push_log enable row level security;
create table if not exists public.santa (trip_code text not null, giver text not null, receiver text not null, key_hash text, drawn_at timestamptz not null default now(), primary key (trip_code, giver));
alter table public.santa enable row level security;
-- tripp_santa_draw(p_code): one random cycle through the trip's people (service role only).
-- cron: tripp-santa  0 1 28 12 *  (09:00 Shanghai, 28 Dec)
