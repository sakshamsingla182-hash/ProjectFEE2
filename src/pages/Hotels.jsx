import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { STATES, getCity } from '../data/destinations.js'
import { HOTEL_CATEGORIES, generateHotels, nightsBetween, priceStay } from '../data/hotelsData.js'
import { useBucket } from '../context/BucketContext.jsx'
import { useHotelBookings } from '../context/HotelBookingContext.jsx'
import { EstimatedPrice, Pill } from '../components/common/Badges.jsx'
import SceneArt from '../components/common/SceneArt.jsx'
import HotelBookingModal from '../components/hotels/HotelBookingModal.jsx'

const todayPlus = (days) => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export default function Hotels() {
  const [stateId, setStateId] = useState(STATES[0].id)
  const [cityId, setCityId] = useState(STATES[0].cities[0].id)
  const [checkIn, setCheckIn] = useState(todayPlus(14))
  const [checkOut, setCheckOut] = useState(todayPlus(17))
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)
  const [category, setCategory] = useState('Any')
  const [searched, setSearched] = useState(false)
  const [dateError, setDateError] = useState('')
  const [selected, setSelected] = useState(null)

  const { addItem, isInBucket } = useBucket()
  const { activeCount } = useHotelBookings()

  const state = STATES.find((s) => s.id === stateId)
  const city = getCity(stateId, cityId)
  const nights = nightsBetween(checkIn, checkOut)

  const hotels = useMemo(() => {
    if (!searched || !city) return []
    return generateHotels({ city, category })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched, cityId, category])

  const handleStateChange = (id) => {
    setStateId(id)
    setCityId(STATES.find((s) => s.id === id).cities[0].id)
    setSearched(false)
  }

  const handleCheckInChange = (value) => {
    setCheckIn(value)
    // keep check-out after check-in
    if (nightsBetween(value, checkOut) < 1) {
      const next = new Date(value)
      next.setDate(next.getDate() + 1)
      setCheckOut(next.toISOString().slice(0, 10))
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (nights < 1) {
      setDateError('Check-out must be after check-in.')
      return
    }
    setDateError('')
    setSearched(true)
  }

  const stay = { checkIn, checkOut, nights, guests, rooms }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-saffron-500">Hotels</p>
          <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
            Find a stay, book it in a minute
          </h1>
        </div>
        <Link
          to="/hotel-bookings"
          className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:bg-ink/5 dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
        >
          My bookings{activeCount > 0 ? ` (${activeCount})` : ''}
        </Link>
      </div>
      <p className="mt-3 max-w-xl text-ink/60 dark:text-cream/60">
        Sample stays across all 75 cities with estimated rates — bookings are demo-only and saved on this device.
      </p>

      <form
        onSubmit={handleSearch}
        className="mt-8 rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink-soft sm:p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="State">
            <select value={stateId} onChange={(e) => handleStateChange(e.target.value)} className="vv-select">
              {STATES.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </Field>

          <Field label="City">
            <select
              value={cityId}
              onChange={(e) => {
                setCityId(e.target.value)
                setSearched(false)
              }}
              className="vv-select"
            >
              {state.cities.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Hotel category">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="vv-select">
              {HOTEL_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="Check-in">
            <input type="date" value={checkIn} min={todayPlus(0)} onChange={(e) => handleCheckInChange(e.target.value)} className="vv-select" />
          </Field>

          <Field label="Check-out">
            <input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} className="vv-select" />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Guests">
              <input
                type="number"
                min={1}
                max={12}
                value={guests}
                onChange={(e) => setGuests(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
                className="vv-select"
              />
            </Field>
            <Field label="Rooms">
              <input
                type="number"
                min={1}
                max={6}
                value={rooms}
                onChange={(e) => setRooms(Math.max(1, Math.min(6, Number(e.target.value) || 1)))}
                className="vv-select"
              />
            </Field>
          </div>
        </div>

        {dateError && <p className="mt-4 text-sm text-maroon-500">{dateError}</p>}

        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-cream dark:bg-cream dark:text-ink sm:w-auto sm:px-8"
        >
          Search hotels
        </button>
      </form>

      {searched && city && (
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-xl text-ink dark:text-cream">Stays in {city.name}</h2>
            <span className="text-sm text-ink/50 dark:text-cream/50">
              {new Date(checkIn).toDateString()} → {new Date(checkOut).toDateString()} · {nights} night{nights > 1 ? 's' : ''}
            </span>
          </div>

          {hotels.length === 0 ? (
            <p className="mt-6 text-ink/60 dark:text-cream/60">No sample hotels generated — try another category.</p>
          ) : (
            <ul className="mt-5 space-y-4">
              {hotels.map((hotel) => {
                const bucketId = `hotel-${hotel.id}-${checkIn}-${nights}-${rooms}`
                const inBucket = isInBucket(bucketId)
                const { total } = priceStay({ pricePerNight: hotel.pricePerNight, nights, rooms })
                return (
                  <li
                    key={hotel.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white dark:border-cream/10 dark:bg-ink-soft sm:flex-row"
                  >
                    <div className="h-36 shrink-0 text-cream sm:h-auto sm:w-48">
                      <SceneArt scene={city.scene} accent={city.stateAccent} seed={hotel.id} className="h-full w-full" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <Pill tone="saffron">{'★'.repeat(hotel.stars)}</Pill>
                          <Pill tone="peacock">{hotel.tier}</Pill>
                          <span className="text-xs text-ink/50 dark:text-cream/50">⭐ {hotel.rating} · {hotel.distance}</span>
                        </div>
                        <p className="mt-2 font-display text-lg text-ink dark:text-cream">{hotel.name}</p>
                        <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">{hotel.amenities.join(' · ')}</p>
                        <p className="mt-1 text-xs text-peacock-500 dark:text-peacock-200">
                          {hotel.freeCancellation ? 'Free cancellation' : 'Non-refundable rate'}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
                        <div className="sm:text-right">
                          <EstimatedPrice amount={total} per={`${nights} night${nights > 1 ? 's' : ''}`} className="text-ink dark:text-cream" />
                          <p className="text-[11px] text-ink/40 dark:text-cream/40">
                            ₹{hotel.pricePerNight.toLocaleString('en-IN')}/night · incl. taxes
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setSelected(hotel)}
                            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream dark:bg-cream dark:text-ink"
                          >
                            Book now
                          </button>
                          <button
                            type="button"
                            disabled={inBucket}
                            onClick={() =>
                              addItem({
                                id: bucketId,
                                type: 'hotel',
                                title: hotel.name,
                                subtitle: `${city.name} · ${nights} night${nights > 1 ? 's' : ''} · ${rooms} room${rooms > 1 ? 's' : ''}`,
                                scene: city.scene,
                                accent: 'saffron',
                                cost: total,
                              })
                            }
                            className="rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium text-ink disabled:opacity-50 dark:border-cream/20 dark:text-cream"
                          >
                            {inBucket ? 'Added' : 'Add to Bucket'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}

      {selected && (
        <HotelBookingModal hotel={selected} city={city} stay={stay} onClose={() => setSelected(null)} />
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
