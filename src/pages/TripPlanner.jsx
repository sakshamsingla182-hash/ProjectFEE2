import { useState, useMemo } from 'react'
import { STATES } from '../data/destinations.js'
import { FLIGHT_ORIGINS } from '../data/flightsData.js'
import { TRANSPORT_MODES, SERVICE_TIERS, estimateTrip } from '../utils/costEstimates.js'
import { useBucket } from '../context/BucketContext.jsx'
import { EstimatedPrice } from '../components/common/Badges.jsx'
import SceneArt from '../components/common/SceneArt.jsx'

const todayPlus = (days) => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export default function TripPlanner() {
  const [startCity, setStartCity] = useState(FLIGHT_ORIGINS[0].id)
  const [stateId, setStateId] = useState(STATES[0].id)
  const [cityId, setCityId] = useState(STATES[0].cities[0].id)
  const [date, setDate] = useState(todayPlus(21))
  const [travelers, setTravelers] = useState(2)
  const [days, setDays] = useState(4)
  const [transportMode, setTransportMode] = useState('Train')
  const [accommodationTier, setAccommodationTier] = useState('Standard')
  const [foodTier, setFoodTier] = useState('Standard')

  const { addItem, isInBucket } = useBucket()

  const state = STATES.find((s) => s.id === stateId)
  const city = state.cities.find((c) => c.id === cityId)
  const originLabel = FLIGHT_ORIGINS.find((o) => o.id === startCity)?.label

  // useMemo: the cost breakdown only needs to recompute when an actual input changes.
  const estimate = useMemo(
    () =>
      estimateTrip({
        city,
        transportMode,
        accommodationTier,
        foodTier,
        travelers,
        days,
      }),
    [city, transportMode, accommodationTier, foodTier, travelers, days]
  )

  const handleStateChange = (id) => {
    setStateId(id)
    setCityId(STATES.find((s) => s.id === id).cities[0].id)
  }

  const bucketId = `plan-${stateId}-${cityId}-${transportMode}-${accommodationTier}-${foodTier}-${travelers}-${days}`
  const inBucket = isInBucket(bucketId)

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pt-14">
      <p className="text-sm font-medium text-saffron-500">Trip Planner</p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
        Build the trip, see the number
      </h1>
      <p className="mt-3 max-w-xl text-ink/60 dark:text-cream/60">
        Every one of the 75 cities is available here. Change any input and the estimate updates instantly.
      </p>

      <div className="mt-7 overflow-hidden rounded-3xl border border-ink/10 dark:border-cream/10">
        <div className="h-44 sm:h-60">
          <SceneArt scene="mountain" accent="peacock" seed="manali" className="h-full w-full" />
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5 rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink-soft sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Starting city">
              <select value={startCity} onChange={(e) => setStartCity(e.target.value)} className="vv-select">
                {FLIGHT_ORIGINS.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
            </Field>
            <Field label="Travel date">
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="vv-select" />
            </Field>
            <Field label="Destination state">
              <select value={stateId} onChange={(e) => handleStateChange(e.target.value)} className="vv-select">
                {STATES.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Destination city">
              <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="vv-select">
                {state.cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Travelers">
              <input
                type="number"
                min={1}
                max={12}
                value={travelers}
                onChange={(e) => setTravelers(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
                className="vv-select"
              />
            </Field>
            <Field label="Days">
              <input
                type="number"
                min={1}
                max={30}
                value={days}
                onChange={(e) => setDays(Math.max(1, Math.min(30, Number(e.target.value) || 1)))}
                className="vv-select"
              />
            </Field>
          </div>

          <div>
            <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Transportation</p>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {TRANSPORT_MODES.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setTransportMode(mode)}
                  aria-pressed={transportMode === mode}
                  className={`rounded-xl border py-2.5 text-sm font-medium transition-colors ${
                    transportMode === mode
                      ? 'border-ink bg-ink text-cream dark:border-cream dark:bg-cream dark:text-ink'
                      : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Accommodation</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {SERVICE_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setAccommodationTier(tier)}
                    aria-pressed={accommodationTier === tier}
                    className={`rounded-xl border py-2.5 text-xs font-medium transition-colors ${
                      accommodationTier === tier
                        ? 'border-peacock-400 bg-peacock-100 text-peacock-700 dark:bg-peacock-700/30 dark:text-peacock-200'
                        : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Food</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {SERVICE_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFoodTier(tier)}
                    aria-pressed={foodTier === tier}
                    className={`rounded-xl border py-2.5 text-xs font-medium transition-colors ${
                      foodTier === tier
                        ? 'border-saffron-400 bg-saffron-100 text-saffron-700 dark:bg-saffron-700/30 dark:text-saffron-200'
                        : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-cream/10">
          <div className="relative h-40">
            <SceneArt scene={city.scene} accent={state.accent} seed={city.id} className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="text-xs text-cream/70">{originLabel.split(' (')[0]} → {state.name}</p>
              <p className="font-display text-2xl font-medium text-cream">{city.name}</p>
            </div>
          </div>

          <div className="bg-white p-6 dark:bg-ink-soft">
            <h2 className="font-display text-lg text-ink dark:text-cream">Estimated cost breakdown</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <Row label="Transportation" amount={estimate.transportation} />
              <Row label="Accommodation" amount={estimate.accommodation} />
              <Row label="Food" amount={estimate.food} />
              <Row label="Local transport" amount={estimate.localTransport} />
              <Row label="Activities" amount={estimate.activities} />
              <Row label="Miscellaneous" amount={estimate.miscellaneous} />
            </dl>

            <div className="mt-5 space-y-2 border-t border-ink/10 pt-4 dark:border-cream/10">
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink dark:text-cream">Total estimated cost</span>
                <EstimatedPrice amount={estimate.total} className="text-ink dark:text-cream" />
              </div>
              <div className="flex items-center justify-between text-ink/60 dark:text-cream/60">
                <span>Estimated cost per person</span>
                <EstimatedPrice amount={estimate.perPerson} className="text-ink/80 dark:text-cream/80" />
              </div>
            </div>

            <button
              type="button"
              disabled={inBucket}
              onClick={() =>
                addItem({
                  id: bucketId,
                  type: 'planned trip',
                  title: `${city.name} trip plan`,
                  subtitle: `${days} days · ${travelers} traveler${travelers > 1 ? 's' : ''} · ${transportMode}`,
                  scene: city.scene,
                  accent: state.accent,
                  cost: estimate.total,
                })
              }
              className="mt-5 w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-cream disabled:opacity-50 dark:bg-cream dark:text-ink"
            >
              {inBucket ? 'Added to Bucket' : 'Add trip to Bucket'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink/50 dark:text-cream/50">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

function Row({ label, amount }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink/60 dark:text-cream/60">{label}</dt>
      <dd className="font-medium text-ink dark:text-cream">₹{amount.toLocaleString('en-IN')}</dd>
    </div>
  )
}
