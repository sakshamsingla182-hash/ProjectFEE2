import { useParams, Link, Navigate } from 'react-router-dom'
import { getCity, getState } from '../data/destinations.js'
import SceneArt from '../components/common/SceneArt.jsx'
import WeatherPanel from '../components/destination/WeatherPanel.jsx'
import { Pill, EstimatedPrice } from '../components/common/Badges.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useBucket } from '../context/BucketContext.jsx'

export default function CityDetail() {
  const { stateId, cityId } = useParams()
  const city = getCity(stateId, cityId)
  const state = getState(stateId)

  if (!city || !state) return <Navigate to="/404" replace />

  const { isWishlisted, toggleWishlist } = useWishlist()
  const { addItem, isInBucket } = useBucket()

  const wishId = `city-${stateId}-${cityId}`
  const bucketId = `city-trip-${stateId}-${cityId}`
  const saved = isWishlisted(wishId)
  const inBucket = isInBucket(bucketId)

  const handleWishlist = () =>
    toggleWishlist({
      id: wishId,
      type: 'city',
      title: city.name,
      subtitle: `City in ${state.name}`,
      scene: city.scene,
      accent: state.accent,
      bestSeason: city.bestSeason,
      budgetTier: city.budgetTier,
      cost: city.costPerDay.standard,
      link: `/destination/${stateId}/${cityId}`,
    })

  const handleAddToBucket = () =>
    addItem({
      id: bucketId,
      type: 'city',
      title: city.name,
      subtitle: `${state.name} · 3-day estimate, standard tier`,
      scene: city.scene,
      accent: state.accent,
      cost: city.costPerDay.standard * 3,
    })

  return (
    <div>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-85">
          <SceneArt scene={city.scene} accent={state.accent} seed={city.id} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="flex flex-wrap items-center gap-2 text-sm text-cream/70">
            <Link to="/explore" className="hover:text-cream">Explore India</Link>
            <span>/</span>
            <Link to={`/destination/${stateId}`} className="hover:text-cream">{state.name}</Link>
            <span>/</span>
            <span className="text-cream">{city.name}</span>
          </div>

          <Pill tone={state.accent} className="mt-5 w-fit backdrop-blur">{state.name}</Pill>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium text-cream sm:text-6xl">{city.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-cream/75">{city.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleAddToBucket}
              disabled={inBucket}
              className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60"
            >
              {inBucket ? 'Added to Bucket' : 'Add to Bucket'}
            </button>
            <button
              type="button"
              onClick={handleWishlist}
              aria-pressed={saved}
              className={`flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium backdrop-blur ${
                saved ? 'border-maroon-400 bg-maroon-500/20 text-cream' : 'border-cream/30 bg-cream/10 text-cream hover:bg-cream/20'
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.7 1.7 6 5 5c2-.6 3.7.3 4.6 1.7L12 9l2.4-2.3C15.3 5.3 17 4.4 19 5c3.3 1 4.2 4.7 2.3 7.9C18.7 16.65 12 21 12 21z" />
              </svg>
              {saved ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">Why visit</h2>
            <p className="mt-3 text-ink/70 dark:text-cream/70">{city.whyVisit}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">About {city.name}</h2>
            <p className="mt-3 leading-relaxed text-ink/70 dark:text-cream/70">{city.about}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">Highlights</h2>
            <ul className="mt-4 space-y-2.5">
              {city.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-ink/70 dark:text-cream/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">Main attractions</h2>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {city.attractions.map((a) => (
                <div key={a} className="rounded-xl border border-ink/10 px-4 py-3 text-sm text-ink/75 dark:border-cream/10 dark:text-cream/75">
                  {a}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">Key experiences</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {city.experiences.map((exp) => (
                <Pill key={exp} tone={state.accent}>{exp}</Pill>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">History &amp; cultural significance</h2>
            <p className="mt-3 leading-relaxed text-ink/70 dark:text-cream/70">{city.history}</p>
          </div>

          <WeatherPanel weather={city.weather} />

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-cream">Getting there and around</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <InfoCard label="By air" value={city.howToReach.air} />
              <InfoCard label="By rail" value={city.howToReach.rail} />
              <InfoCard label="By road" value={city.howToReach.road} />
              <InfoCard label="Getting around" value={city.gettingAround} />
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink-soft">
            <h3 className="font-display text-lg text-ink dark:text-cream">Best time to visit</h3>
            <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">{city.bestSeason}</p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink-soft">
            <h3 className="font-display text-lg text-ink dark:text-cream">Recommended duration</h3>
            <div className="mt-3 space-y-2 text-sm">
              <DurationRow label="Quick" value={city.duration.quick} />
              <DurationRow label="Standard" value={city.duration.standard} />
              <DurationRow label="Complete" value={city.duration.complete} />
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink-soft">
            <h3 className="font-display text-lg text-ink dark:text-cream">Estimated cost, per day</h3>
            <div className="mt-3 space-y-2.5 text-sm">
              <BudgetRow label="Budget" amount={city.costPerDay.budget} />
              <BudgetRow label="Standard" amount={city.costPerDay.standard} />
              <BudgetRow label="Premium" amount={city.costPerDay.premium} />
            </div>
            <Link
              to="/trip-planner"
              className="mt-4 block rounded-full bg-ink py-2.5 text-center text-sm font-medium text-cream dark:bg-cream dark:text-ink"
            >
              Plan a full trip
            </Link>
          </div>
        </aside>
      </section>
    </div>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-ink/10 p-4 dark:border-cream/10">
      <p className="text-xs font-medium text-ink/50 dark:text-cream/50">{label}</p>
      <p className="mt-1.5 text-sm text-ink/75 dark:text-cream/75">{value}</p>
    </div>
  )
}

function DurationRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink/60 dark:text-cream/60">{label}</span>
      <span className="font-medium text-ink dark:text-cream">{value}</span>
    </div>
  )
}

function BudgetRow({ label, amount }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink/60 dark:text-cream/60">{label}</span>
      <EstimatedPrice amount={amount} className="text-ink dark:text-cream" />
    </div>
  )
}
