import { useState, useMemo } from 'react'
import { STATES } from '../data/destinations.js'
import { FLIGHT_ORIGINS, generateFlights } from '../data/flightsData.js'
import { useBucket } from '../context/BucketContext.jsx'
import { EstimatedPrice, Pill } from '../components/common/Badges.jsx'

const todayPlus = (days) => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export default function Flights() {
  const [origin, setOrigin] = useState(FLIGHT_ORIGINS[0].id)
  const [stateId, setStateId] = useState(STATES[0].id)
  const [cityId, setCityId] = useState(STATES[0].cities[0].id)
  const [date, setDate] = useState(todayPlus(14))
  const [passengers, setPassengers] = useState(1)
  const [travelClass, setTravelClass] = useState('Economy')
  const [searched, setSearched] = useState(false)

  const { addItem, isInBucket } = useBucket()

  const state = STATES.find((s) => s.id === stateId)
  const city = state?.cities.find((c) => c.id === cityId)
  const originLabel = FLIGHT_ORIGINS.find((o) => o.id === origin)?.label

  const flights = useMemo(() => {
    if (!searched || !city) return []
    return generateFlights({ fromLabel: origin, city, remoteness: city.remoteness, travelClass })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched, origin, cityId, travelClass])

  const handleStateChange = (id) => {
    setStateId(id)
    const next = STATES.find((s) => s.id === id)
    setCityId(next.cities[0].id)
    setSearched(false)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-14">
      <p className="text-sm font-medium text-saffron-500">Flights</p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
        Sample fares, city to city
      </h1>
      <p className="mt-3 max-w-xl text-ink/60 dark:text-cream/60">
        These are illustrative, estimated fares for planning purposes — not a live booking system.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSearched(true)
        }}
        className="mt-8 rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink-soft sm:p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="From">
            <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="vv-select">
              {FLIGHT_ORIGINS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </Field>

          <Field label="State">
            <select value={stateId} onChange={(e) => handleStateChange(e.target.value)} className="vv-select">
              {STATES.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </Field>

          <Field label="City">
            <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="vv-select">
              {state.cities.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Date">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="vv-select" />
          </Field>

          <Field label="Passengers">
            <input
              type="number"
              min={1}
              max={9}
              value={passengers}
              onChange={(e) => setPassengers(Math.max(1, Math.min(9, Number(e.target.value) || 1)))}
              className="vv-select"
            />
          </Field>

          <Field label="Class">
            <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)} className="vv-select">
              <option>Economy</option>
              <option>Business</option>
            </select>
          </Field>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-cream dark:bg-cream dark:text-ink sm:w-auto sm:px-8"
        >
          Search flights
        </button>
      </form>

      {searched && city && (
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink dark:text-cream">
              {originLabel} → {city.name}
            </h2>
            <span className="text-sm text-ink/50 dark:text-cream/50">{new Date(date).toDateString()}</span>
          </div>

          {flights.length === 0 ? (
            <p className="mt-6 text-ink/60 dark:text-cream/60">No sample flights generated — try adjusting your search.</p>
          ) : (
            <ul className="mt-5 space-y-3">
              {flights.map((flight) => {
                const bucketId = `flight-${flight.id}`
                const inBucket = isInBucket(bucketId)
                const totalPrice = flight.price * passengers
                return (
                  <li
                    key={flight.id}
                    className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink-soft sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-peacock-100 text-sm font-semibold text-peacock-700 dark:bg-peacock-700/30 dark:text-peacock-200">
                        {flight.airline.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-ink dark:text-cream">{flight.airline} · {flight.code}</p>
                        <p className="text-sm text-ink/50 dark:text-cream/50">
                          {flight.departure} → {flight.arrival} · {flight.duration} · {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="text-right">
                        <EstimatedPrice amount={totalPrice} per={passengers > 1 ? `for ${passengers}` : ''} className="text-ink dark:text-cream" />
                        <div className="mt-0.5"><Pill tone="peacock">{flight.travelClass}</Pill></div>
                      </div>
                      <button
                        type="button"
                        disabled={inBucket}
                        onClick={() =>
                          addItem({
                            id: bucketId,
                            type: 'flight',
                            title: `${originLabel.split(' (')[0]} → ${city.name}`,
                            subtitle: `${flight.airline} ${flight.code} · ${flight.travelClass} · ${passengers} pax`,
                            scene: city.scene,
                            accent: 'peacock',
                            cost: totalPrice,
                          })
                        }
                        className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream disabled:opacity-50 dark:bg-cream dark:text-ink"
                      >
                        {inBucket ? 'Added' : 'Add to Bucket'}
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
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
