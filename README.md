# Voyage Verse

**Explore India. Discover your journey.**

A large, multi-page React + Vite travel-planning single-page app covering 15 Indian
states and 75 cities (5 per state), built with React Router, Context, and
`localStorage` persistence — no backend, no database, no TypeScript.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## What's inside

- **15 states × 5 cities = 75 cities**, each with its own real, distinct content:
  why-visit hook, about, highlights, main attractions, experience tags, history,
  three-season weather, best season, three-tier recommended duration, budget tier,
  per-day cost breakdown, and how to reach / get around.
- **Home** — cinematic hero, animated stat counters, an asymmetric ("bento") states
  showcase, and the ✨ Magic (cheapest trip) / 👑 Luxury (priciest trip) generators.
- **Explore India** (`/explore`) — browse all 15 states, or search and filter across
  all 75 cities at once by experience, budget band and trip length.
- **State → City flow** (`/destination/:stateId`, `/destination/:stateId/:cityId`) —
  clicking a state opens its 5-city selection view before drilling into a full city page.
- **Flights** (`/flights`) — demo fare generator across the 75-city dataset, clearly
  labelled as sample/estimated pricing, not live inventory.
- **Trip Planner** (`/trip-planner`, protected route) — full cost calculator across
  all 75 cities: transportation, accommodation, food, local transport, activities,
  miscellaneous, total and per-person, recalculated live via `useMemo`.
- **Trip Bucket** — slide-out drawer (states, cities, flights, Magic/Luxury trips),
  persisted to `localStorage`, with a running estimated total.
- **Wishlist** (`/wishlist`) — save states, cities and places for later; persisted.
- **Login / Signup** — demo, `localStorage`-backed authentication gating the Trip
  Planner via a `ProtectedRoute` component. No real backend.
- **FAQ**, **About**, and a custom **404**.
- Single light/dark theme toggle, fully responsive, mobile hamburger nav.

## A note on images

The brief calls for zero blank or broken images across all 75 cities. This
environment can't verify licensed, per-city stock photography with confidence, and
hot-linking guessed image URLs risks exactly the broken-image problem the brief
rules out. Rather than take that risk, every destination uses an **original,
generative SVG illustration** (`src/components/common/SceneArt.jsx`) keyed to its
actual landscape type (mountain, desert, backwater, tea estate, heritage, wildlife,
coast, city) and its state's accent color, with a small deterministic per-city
variation so places sharing a landscape type don't render identically. This
guarantees every image always renders, is contextually relevant, and needs no
network access — at the cost of not being real photography.

If you'd like real photos instead, the cleanest path is to drop an `image` URL
field onto each city object in `src/data/destinations.js` and swap `<SceneArt>`
for an `<img>` with the same fallback-on-error pattern; the data shape already
has a slot ready for it (`scene` can stay as a fallback/placeholder value).

## Tech notes

- Tailwind CSS with a custom design system (see `tailwind.config.js`): an
  ink/cream base with saffron, peacock and maroon accents; Fraunces (display) +
  Karla (body) type.
- State: React Context for theme, trip bucket, wishlist and demo auth, each
  backed by a shared `useLocalStorage` hook.
- All cost math lives in `src/utils/costEstimates.js` and is reused identically
  by the Trip Planner, the Magic/Luxury generator, and Flights.
- Search/filter logic lives in `src/utils/filters.js`, memoized at the call site.
