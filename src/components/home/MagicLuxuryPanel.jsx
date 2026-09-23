import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ALL_CITIES } from '../../data/destinations.js'
import { estimateTrip } from '../../utils/costEstimates.js'
import { useBucket } from '../../context/BucketContext.jsx'
import SceneArt from '../common/SceneArt.jsx'
import { EstimatedPrice, Pill } from '../common/Badges.jsx'

const CONFIG = {
  magic: {
    label: 'Magic',
    icon: '✨',
    tone: 'saffron',
    days: 3,
    travelers: 1,
    transportMode: 'Bus',
    accommodationTier: 'Budget',
    foodTier: 'Budget',
    pick: 'min',
    heading: 'Cheapest suitable trip, found automatically',
    body: 'Voyage Verse scanned every one of the 75 cities and matched the lowest realistic total for a short, budget-friendly getaway.',
  },
  luxury: {
    label: 'Luxury',
    icon: '👑',
    tone: 'maroon',
    days: 5,
    travelers: 2,
    transportMode: 'Flight',
    accommodationTier: 'Premium',
    foodTier: 'Premium',
    pick: 'max',
    heading: 'Most premium trip, found automatically',
    body: 'The same 75 cities, this time matched for the highest-end flight-and-stay experience Voyage Verse can estimate.',
  },
}

export default function MagicLuxuryPanel({ mode, open, onClose }) {
  const config = CONFIG[mode]
  const { addItem } = useBucket()

  // useMemo: only recompute the automatic pick when the mode changes, not on every render.
  const result = useMemo(() => {
    let best = null
    for (const city of ALL_CITIES) {
      const estimate = estimateTrip({
        city,
        transportMode: config.transportMode,
        accommodationTier: config.accommodationTier,
        foodTier: config.foodTier,
        travelers: config.travelers,
        days: config.days,
      })
      if (
        !best ||
        (config.pick === 'min' && estimate.total < best.estimate.total) ||
        (config.pick === 'max' && estimate.total > best.estimate.total)
      ) {
        best = { city, estimate }
      }
    }
    return best
  }, [mode])

  if (!open || !result) return null
  const { city, estimate } = result
  const handleAdd = () => {
    addItem({
      id: `${mode}-trip-${city.stateId}-${city.id}`,
      type: `${config.label} trip`,
      title: `${config.icon} ${config.label} trip · ${city.name}`,
      subtitle: `${city.stateName} · ${config.days} days · ${config.travelers} traveler${config.travelers > 1 ? 's' : ''}`,
      scene: city.scene,
      accent: city.stateAccent,
      cost: estimate.total,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div className="animate-fade-up relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream shadow-2xl dark:bg-ink-soft sm:rounded-3xl">
        <div className="relative h-40 overflow-hidden sm:h-48">
          <SceneArt scene={city.scene} accent={city.stateAccent} seed={city.id} className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 text-cream backdrop-blur"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-6">
            <Pill tone={config.tone}>{config.icon} {config.label} pick</Pill>
            <h3 className="mt-2 font-display text-3xl font-medium text-cream">{city.name}</h3>
            <p className="text-sm text-cream/70">{city.stateName}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h4 className="font-display text-lg text-ink dark:text-cream">{config.heading}</h4>
          <p className="mt-1.5 text-sm text-ink/60 dark:text-cream/60">{config.body}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="Duration" value={`${estimate.days} days`} />
            <Stat label="Travelers" value={estimate.travelers} />
            <Stat label="Transport mode" value={config.transportMode} />
            <Stat label="Transportation" value={`₹${estimate.transportation.toLocaleString('en-IN')}`} />
            <Stat label="Accommodation" value={`₹${estimate.accommodation.toLocaleString('en-IN')}`} />
            <Stat label="Food" value={`₹${estimate.food.toLocaleString('en-IN')}`} />
            <Stat label="Local transport" value={`₹${estimate.localTransport.toLocaleString('en-IN')}`} />
            <Stat label="Activities" value={`₹${estimate.activities.toLocaleString('en-IN')}`} />
            <Stat label="Miscellaneous" value={`₹${estimate.miscellaneous.toLocaleString('en-IN')}`} />
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-ink/5 px-5 py-4 dark:bg-cream/10">
            <span className="text-sm text-ink/70 dark:text-cream/70">Total estimated cost</span>
            <EstimatedPrice amount={estimate.total} per={`for ${estimate.travelers}`} className="text-ink dark:text-cream" />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 rounded-full bg-ink py-3.5 text-sm font-semibold text-cream dark:bg-cream dark:text-ink"
            >
              Add {config.label} Trip to Bucket
            </button>
            <Link
              to={`/destination/${city.stateId}/${city.id}`}
              onClick={onClose}
              className="flex-1 rounded-full border border-ink/15 py-3.5 text-center text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
            >
              View {city.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-ink/10 p-3 dark:border-cream/10">
      <div className="text-[11px] text-ink/50 dark:text-cream/50">{label}</div>
      <div className="mt-0.5 font-display text-sm font-medium text-ink dark:text-cream">{value}</div>
    </div>
  )
}
