import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { STATES } from '../data/destinations.js'
import { ADVENTURES, ADVENTURE_CATEGORIES } from '../data/adventures.js'
import { useBucket } from '../context/BucketContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

const ALL_CITIES = STATES.flatMap((state) =>
  state.cities.map((city) => ({
    value: `${state.id}::${city.id}`,
    stateId: state.id,
    stateName: state.name,
    cityId: city.id,
    cityName: city.name,
  }))
).sort((a, b) => a.cityName.localeCompare(b.cityName))

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85'

function AdventureCard({ adventure }) {
  const { addItem, isInBucket } = useBucket()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const bucketId = `adventure-trip-${adventure.id}`
  const wishlistId = `adventure-${adventure.id}`
  const added = isInBucket(bucketId)
  const saved = isWishlisted(wishlistId)

  const handleAddToTrip = () => {
    addItem({
      id: bucketId,
      type: 'adventure',
      title: adventure.title,
      subtitle: `${adventure.city}, ${adventure.state} · ${adventure.duration}`,
      scene: adventure.scene,
      accent: 'saffron',
      cost: adventure.price,
    })
  }

  const handleWishlist = () => {
    toggleWishlist({
      id: wishlistId,
      type: 'adventure',
      title: adventure.title,
      subtitle: `${adventure.city}, ${adventure.state} · ${adventure.category}`,
      scene: adventure.scene,
      accent: 'saffron',
      bestSeason: adventure.season,
      cost: adventure.price,
      link: '/adventure',
    })
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-cream/10 dark:bg-ink-soft">
      <div className="relative h-56 overflow-hidden bg-ink/10">
        <img
          src={adventure.image}
          alt={`${adventure.title} in ${adventure.city}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = FALLBACK_IMAGE
          }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/25 bg-ink/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {adventure.emoji} {adventure.category}
          </span>
        </div>
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={saved ? `Remove ${adventure.title} from wishlist` : `Save ${adventure.title} to wishlist`}
          aria-pressed={saved}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-colors ${saved ? 'bg-maroon-500 text-white' : 'bg-white/90 text-ink hover:bg-white'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-5 right-5 text-white">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/75">{adventure.city}, {adventure.state}</p>
          <h2 className="mt-1 font-display text-2xl font-medium leading-tight">{adventure.title}</h2>
        </div>
      </div>

      <div className="p-5">
        <p className="min-h-[3rem] text-sm leading-6 text-ink/65 dark:text-cream/65">{adventure.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-cream/70 p-3 dark:bg-ink/45">
            <p className="text-[11px] uppercase tracking-wide text-ink/45 dark:text-cream/45">Duration</p>
            <p className="mt-1 text-sm font-semibold text-ink dark:text-cream">{adventure.duration}</p>
          </div>
          <div className="rounded-2xl bg-cream/70 p-3 dark:bg-ink/45">
            <p className="text-[11px] uppercase tracking-wide text-ink/45 dark:text-cream/45">Difficulty</p>
            <p className="mt-1 text-sm font-semibold text-ink dark:text-cream">{adventure.difficulty}</p>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-ink/45 dark:text-cream/45">Best season</p>
            <p className="mt-1 max-w-[220px] text-sm text-ink/75 dark:text-cream/75">{adventure.season}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs text-ink/45 dark:text-cream/45">Estimated from</p>
            <p className="mt-0.5 font-display text-2xl font-semibold text-ink dark:text-cream">₹{adventure.price.toLocaleString('en-IN')}</p>
            <p className="text-[11px] text-ink/45 dark:text-cream/45">per person</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleAddToTrip}
          disabled={added}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/85 disabled:cursor-default disabled:bg-peacock-500 dark:bg-cream dark:text-ink dark:hover:bg-cream/90 dark:disabled:bg-peacock-500 dark:disabled:text-white"
        >
          {added ? '✓ Added to trip bucket' : '＋ Add adventure to trip'}
        </button>
      </div>
    </article>
  )
}

export default function Adventure() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All adventures')
  const [stateFilter, setStateFilter] = useState('all')
  const [cityFilter, setCityFilter] = useState('all')

  const availableCities = useMemo(
    () => ALL_CITIES.filter((city) => stateFilter === 'all' || city.stateId === stateFilter),
    [stateFilter]
  )

  const filteredAdventures = useMemo(() => {
    const query = search.trim().toLowerCase()
    return ADVENTURES.filter((adventure) => {
      const matchesSearch = !query || [
        adventure.title,
        adventure.city,
        adventure.state,
        adventure.category,
        adventure.description,
      ].some((value) => value.toLowerCase().includes(query))
      const matchesCategory = category === 'All adventures' || adventure.category === category
      const matchesState = stateFilter === 'all' || adventure.stateId === stateFilter
      const matchesCity = cityFilter === 'all' || `${adventure.stateId}::${adventure.cityId}` === cityFilter
      return matchesSearch && matchesCategory && matchesState && matchesCity
    })
  }, [search, category, stateFilter, cityFilter])

  const handleStateChange = (value) => {
    setStateFilter(value)
    setCityFilter('all')
  }

  return (
    <div className="pb-16">
      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink">
          <img
            src="https://images.unsplash.com/photo-1755446133356-de5126699e37?auto=format&fit=crop&w=2000&q=90"
            alt="Paraglider floating above a mountain valley"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = FALLBACK_IMAGE
            }}
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
          <div className="relative max-w-3xl px-6 py-16 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
              <span>✦</span> THE ADVENTURE COLLECTION <span className="text-white/65">· {ADVENTURES.length} experiences</span>
            </span>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Find your <span className="italic text-saffron-300">wild side.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              From Himalayan skies and river rapids to forest trails and desert dunes, find an adventure that fits your journey across India.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#adventure-list" className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]">
                Explore adventures <span aria-hidden="true">↓</span>
              </a>
              <span className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm text-white/85 backdrop-blur-sm">🏔️ Mountains · 🌊 Water · 🪂 Air · 🐾 Wildlife</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">Go beyond sightseeing</p>
            <h2 className="mt-2 font-display text-3xl font-medium text-ink dark:text-cream sm:text-4xl">Pick your next rush</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60 dark:text-cream/60">Browse curated activities connected to destinations already in Voyage Verse. Prices are indicative estimates; confirm availability, permits and safety rules with the local operator.</p>
          </div>
          <div className="text-sm text-ink/50 dark:text-cream/50">Showing <span className="font-semibold text-ink dark:text-cream">{filteredAdventures.length}</span> of {ADVENTURES.length} adventures</div>
        </div>

        <div className="mt-7 grid gap-3 rounded-3xl border border-ink/10 bg-white p-4 dark:border-cream/10 dark:bg-ink-soft sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:p-5">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-cream/50">Search adventures</span>
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40 dark:text-cream/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try rafting, trekking, Goa…" className="vv-select pl-10" />
            </div>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-cream/50">State / region</span>
            <select value={stateFilter} onChange={(event) => handleStateChange(event.target.value)} className="vv-select">
              <option value="all">All states and regions</option>
              {STATES.map((state) => <option key={state.id} value={state.id}>{state.name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-cream/50">City</span>
            <select value={cityFilter} onChange={(event) => setCityFilter(event.target.value)} className="vv-select">
              <option value="all">All cities</option>
              {availableCities.map((city) => <option key={city.value} value={city.value}>{city.cityName}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {ADVENTURE_CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${category === item ? 'border-ink bg-ink text-cream dark:border-cream dark:bg-cream dark:text-ink' : 'border-ink/10 bg-white text-ink/65 hover:bg-ink/5 dark:border-cream/15 dark:bg-ink-soft dark:text-cream/65 dark:hover:bg-cream/10'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div id="adventure-list" className="mt-6 grid scroll-mt-28 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredAdventures.map((adventure) => <AdventureCard key={adventure.id} adventure={adventure} />)}
        </div>

        {filteredAdventures.length === 0 && (
          <div className="mt-6 rounded-3xl border border-dashed border-ink/20 px-6 py-14 text-center dark:border-cream/20">
            <div className="text-4xl">🧭</div>
            <h3 className="mt-4 font-display text-2xl text-ink dark:text-cream">No matching adventure yet</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-ink/60 dark:text-cream/60">This city is part of your Voyage Verse destinations, but it does not have a featured adventure in this collection yet. Clear the filters to explore the available activities.</p>
            <button type="button" onClick={() => { setSearch(''); setCategory('All adventures'); setStateFilter('all'); setCityFilter('all') }} className="mt-5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream dark:bg-cream dark:text-ink">Clear all filters</button>
          </div>
        )}

        <div className="mt-12 rounded-3xl border border-ink/10 bg-cream/70 p-5 dark:border-cream/10 dark:bg-ink-soft sm:flex sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="font-display text-xl text-ink dark:text-cream">Found an adventure for your itinerary?</p>
            <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">Add activities to your trip bucket, then continue planning with your existing Voyage Verse tools.</p>
          </div>
          <Link to="/trip-planner" className="mt-4 inline-flex shrink-0 items-center justify-center rounded-full bg-saffron-400 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-saffron-300 sm:ml-6 sm:mt-0">Open Trip Planner ↗</Link>
        </div>
      </section>
    </div>
  )
}
