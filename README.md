# Steppe to Samui

Trip planner for our New Year trip, 25 Dec 2026 – 3 Jan 2027:
Ulaanbaatar → Erlian → Hohhot → Shanghai → Koh Samui → Bangkok → Ulaanbaatar.

It has 5 tabs:

- **Trip:** countdown, the route map and a day-by-day plan.
- **To book:** the checklist, with an owner, booking reference and price for each item.
- **Money:** shared expenses in ₮ / ¥ / ฿ / $, settle-up, budget and a currency converter.
- **Packing:** a list per person.
- **Info:** entry rules, weather, plugs, emergency numbers and phrases.

**Live sync:** with Supabase connected, every tick, expense and name change shows up on everyone's phone within a couple of seconds. It also works offline: changes wait on the phone and sync when you're back online.

## 1. Put the app on GitHub Pages

1. github.com → **New repository** → name it e.g. `samui-trip` → **Public** → Create.
2. **uploading an existing file** → drag in every file from this folder → **Commit changes**.
3. **Settings → Pages** → Source **Deploy from a branch**, Branch **main**, **/ (root)** → **Save**.
4. After about a minute the app is at `https://<your-username>.github.io/samui-trip/`.

## 2. Set up Supabase (free, once, about 5 minutes; only one person does this)

1. Go to **supabase.com** → sign up → **New project**.
   - Use any name and a database password (you won't need the password again).
   - Region: **Singapore** or **Tokyo** are closest to Mongolia.
2. When the project is ready, open **SQL Editor** → **New query**. Paste the whole of `setup.sql` → **Run**. It should say *Success*.
3. Find two values: the **Project URL** (looks like `https://abcd1234.supabase.co`) and the public key (**anon** or **publishable**, starts with `eyJ…` or `sb_publishable_…`).
   - They're under the project's **Connect** button, or **Project Settings → API Keys**.
   - Never use the **service_role** or **secret** key.

## 3. Connect the group

1. Open the app → tap the **Not synced** pill (or ⚙) → paste the URL and key → **Create the group's trip**.
   Everything you've already entered on your phone is uploaded.
2. Tap **Invite friends** and send the link to the group chat.
3. Each friend opens the link once and taps **Join the trip**. Done: their phone stays connected from then on.

Optional: put the URL and key in `config.js` so they're pre-filled for anyone setting up.

## How it's protected

- The database table is locked. The app can only call two functions, and both need the trip code.
- The trip code is a 22-character random secret that exists only inside your invite link.
- So **anyone with the invite link can see and edit the trip**. Only share it with the group.

## How conflicts are handled

Every item is saved separately: each task, expense, packing list, name and rate. When two people edit the same item, the newer change wins. Deleting an expense syncs too.

The green **Live** pill means everything is saved. **Syncing** means changes are on their way. **Offline** means changes are waiting on the phone. **Sync problem** means tap it to see what's wrong. The most common cause is that `setup.sql` hasn't been run.

## Editing the plan

All trip content is near the top of the `<script>` in `index.html`:
`DAYS` (itinerary), `TASKS` (checklist), `EST` (budget estimates), `PACK` (packing lists).
Commit the change and everyone gets the new version next time they open the app with signal.

Facts were checked on 4 Nov 2026. Re-check train times, flight days and China entry rules before booking.

