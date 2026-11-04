-- Steppe to Samui: live sync storage.
-- Paste this whole file into Supabase → SQL Editor → New query → Run. Safe to run again.
--
-- How it's protected: the table is locked (no direct reads or writes from the app's public key).
-- The app can only call the two functions below, and both require the trip code, a long random
-- secret that is only inside your invite link. Without the code nobody can see or change your trip.

create table if not exists public.trip_items (
  trip_code  text        not null,
  kind       text        not null,
  key        text        not null,
  data       jsonb       not null,
  ts         bigint      not null default 0,          -- when the change was made (sender's clock)
  updated_at timestamptz not null default now(),      -- when the server received it
  primary key (trip_code, kind, key)
);

create index if not exists trip_items_code_updated on public.trip_items (trip_code, updated_at);

alter table public.trip_items enable row level security;
-- No policies on purpose: the public key cannot touch the table directly.
revoke all on public.trip_items from anon, authenticated;

-- Read every item changed since a point in time (milliseconds since 1970, server clock).
create or replace function public.trip_pull(p_code text, p_since bigint default 0)
returns table (kind text, key text, data jsonb, ts bigint, updated_ms bigint)
language sql
security definer
set search_path = public
stable
as $$
  select t.kind, t.key, t.data, t.ts,
         (extract(epoch from t.updated_at) * 1000)::bigint as updated_ms
  from public.trip_items t
  where length(p_code) >= 16
    and t.trip_code = p_code
    and t.updated_at > to_timestamp(greatest(p_since, 0) / 1000.0)
  order by t.updated_at;
$$;

-- Save a batch of items. An item is only replaced when the incoming copy is newer,
-- so an old phone coming back online can never overwrite a friend's newer change.
create or replace function public.trip_push(p_code text, p_items jsonb)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  n integer;
begin
  if length(p_code) < 16 then
    raise exception 'trip code too short';
  end if;
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) > 500 then
    raise exception 'send between 1 and 500 items at a time';
  end if;

  insert into public.trip_items (trip_code, kind, key, data, ts, updated_at)
  select p_code, i->>'kind', i->>'key', i->'data', coalesce((i->>'ts')::bigint, 0), now()
  from jsonb_array_elements(p_items) as i
  where i->>'kind' in ('people', 'rates', 'tasks', 'expenses', 'actuals', 'pack', 'extraPack',
                         'days', 'places', 'sights', 'votes')
    and length(i->>'key') between 1 and 64
    and pg_column_size(i->'data') < 20000
  on conflict (trip_code, kind, key) do update
    set data = excluded.data, ts = excluded.ts, updated_at = now()
    where public.trip_items.ts < excluded.ts;

  get diagnostics n = row_count;
  return n;
end;
$$;

revoke all on function public.trip_pull(text, bigint) from public;
revoke all on function public.trip_push(text, jsonb) from public;
grant execute on function public.trip_pull(text, bigint) to anon, authenticated;
grant execute on function public.trip_push(text, jsonb) to anon, authenticated;
