# Steppe to Samui

Trip planner for our New Year trip, 25 Dec 2026 – 3 Jan 2027:
Ulaanbaatar → Erlian → Hohhot → Shanghai → Koh Samui → Bangkok → Ulaanbaatar.

It has 5 tabs:

- **Trip:** countdown, the route map and the plan, in two views:
  - **Day by day:** open a day and tap **Edit day** to change the title, the travel (from → to, by train, flight, bus or boat), where you sleep, and the steps. You can also add or remove days. The map redraws itself.
  - **What we'll see:** places to visit in each city. Tap **I'm in** on the ones you want, give a place a day so it shows in that day's plan, or add your own.
- **To book:** the checklist, with an owner, booking reference and price for each item.
- **Money:** shared expenses in ₮ / ¥ / ฿ / $, settle-up, budget and a currency converter.
- **Packing:** a list per person.
- **Info:** entry rules, weather, plugs, emergency numbers and phrases.

Tap any city on the map to jump to what's there.

**Live sync:** with Supabase connected, every tick, expense and name change shows up on everyone's phone within a couple of seconds. It also works offline: changes wait on the phone and sync when you're back online.

## 1. Put the app on GitHub Pages

1. github.com → **New repository** → name it e.g. `samui-trip` → **Public** → Create.
2. **uploading an existing file** → drag in every file from this folder → **Commit changes**.
3. **Settings → Pages** → Source **Deploy from a branch**, Branch **main**, **/ (root)** → **Save**.
4. After about a minute the app is at `https://<your-username>.github.io/samui-trip/`.

## 2. Connect the group

Supabase is already set up: the "Samui Trip" project exists, `setup.sql` has been run, and `config.js` holds its address and public key.

1. Open the app → tap the **Not synced** pill → **Create the group's trip**. Everything already on your phone is uploaded.
2. Tap **Invite friends** and send the link to the group chat.
3. Each friend opens the link once and taps **Join the trip**. Their phone stays connected from then on.

Using a different Supabase project? Run `setup.sql` in its SQL Editor and put its URL and anon/publishable key in `config.js`. Never use the service_role or secret key.

## How it's protected

- The database table is locked. The app can only call two functions, and both need the trip code.
- The trip code is a 22-character random secret that exists only inside your invite link.
- So **anyone with the invite link can see and edit the trip**. Only share it with the group.

## How conflicts are handled

Every item is saved separately: each day, place, vote, task, expense, packing list, name and rate. When two people edit the same item, the newer change wins. Deleting an expense syncs too.

The green **Live** pill means everything is saved. **Syncing** means changes are on their way. **Offline** means changes are waiting on the phone. **Sync problem** means tap it to see what's wrong.

## Editing the plan

Day plans, cities and places to see are edited in the app and sync to everyone. The built-in defaults live near the top of the `<script>` in `index.html`: `DAYS` (itinerary), `SIGHTS` (places to see), `TASKS` (checklist), `EST` (budget estimates), `PACK` (packing lists). Changes made in the app always win over the defaults.

New cities come from a built-in list, or are looked up online through Open-Meteo's free city search.

Facts were checked on 4 Nov 2026. Re-check train times, flight days and China entry rules before booking.
