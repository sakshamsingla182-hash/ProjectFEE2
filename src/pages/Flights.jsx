import { useState, useMemo } from 'react'
import { AIRPORTS, SPECIAL_FARES, generateFlights } from '../data/flightsData.js'
import { useBucket } from '../context/BucketContext.jsx'
import { EstimatedPrice, Pill } from '../components/common/Badges.jsx'

const todayPlus = (days) => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export default function Flights() {
  const [fromId, setFromId] = useState(AIRPORTS[0].id)
  const [toId, setToId] = useState(AIRPORTS[1].id)
  const [date, setDate] = useState(todayPlus(14))
  const [passengers, setPassengers] = useState(1)
  const [travelClass, setTravelClass] = useState('Economy')
  const [fareId, setFareId] = useState('regular')
  const [searched, setSearched] = useState(false)

  const { addItem, isInBucket } = useBucket()

  // derived values
  const originLabel = AIRPORTS.find((a) => a.id === fromId)?.label
  const destLabel = AIRPORTS.find((a) => a.id === toId)?.label

  // "To" list filters out the selected "From" airport
  const toAirports = AIRPORTS.filter((a) => a.id !== fromId)

  // if user picks same airport for both, auto-fix "To"
  const handleFromChange = (id) => {
    setFromId(id)
    if (id === toId) {
      const fallback = AIRPORTS.find((a) => a.id !== id)
      if (fallback) setToId(fallback.id)
    }
    setSearched(false)
  }

  const flights = useMemo(() => {
    if (!searched) return []
    return generateFlights({ fromId, toId, travelClass, fareId })
  }, [searched, fromId, toId, travelClass, fareId])

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-14">
      <p className="text-sm font-medium text-saffron-500">Flights</p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
        Search sample fares
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
          {/* From airport */}
          <Field label="From">
            <select value={fromId} onChange={(e) => handleFromChange(e.target.value)} className="vv-select">
              {AIRPORTS.map((a) => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </Field>

          {/* To airport */}
          <Field label="To">
            <select value={toId} onChange={(e) => { setToId(e.target.value); setSearched(false) }} className="vv-select">
              {toAirports.map((a) => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </Field>

          {/* Date */}
          <Field label="Date">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="vv-select" />
          </Field>

          {/* Passengers */}
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

          {/* Class */}
          <Field label="Class">
            <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)} className="vv-select">
              <option>Economy</option>
              <option>Business</option>
            </select>
          </Field>

          {/* Special Fare */}
          <Field label="Special Fare">
            <select value={fareId} onChange={(e) => setFareId(e.target.value)} className="vv-select">
              {SPECIAL_FARES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}{f.discount > 0 ? ` (${Math.round(f.discount * 100)}% off)` : ''}
                </option>
              ))}
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

      {searched && (
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink dark:text-cream">
              {originLabel} → {destLabel}
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
                        <div className="mt-0.5 flex gap-1.5 justify-end">
                          <Pill tone="peacock">{flight.travelClass}</Pill>
                          {flight.fareType !== 'Regular' && (
                            <Pill tone="saffron">{flight.fareType}</Pill>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled={inBucket}
                        onClick={() =>
                          addItem({
                            id: bucketId,
                            type: 'flight',
                            title: `${originLabel.split(' (')[0]} → ${destLabel.split(' (')[0]}`,
                            subtitle: `${flight.airline} ${flight.code} · ${flight.travelClass}${flight.fareType !== 'Regular' ? ' · ' + flight.fareType : ''} · ${passengers} pax`,
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




