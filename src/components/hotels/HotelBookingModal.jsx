import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROOM_TYPES, priceStay } from '../../data/hotelsData.js'
import { useHotelBookings } from '../../context/HotelBookingContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { EstimatedPrice, Pill } from '../common/Badges.jsx'

export default function HotelBookingModal({ hotel, city, stay, onClose }) {
  const { addBooking } = useHotelBookings()
  const { currentUser } = useAuth()

  const [roomId, setRoomId] = useState(ROOM_TYPES[0].id)
  const [name, setName] = useState(currentUser?.name || '')
  const [email, setEmail] = useState(currentUser?.email || '')
  const [phone, setPhone] = useState('')
  const [request, setRequest] = useState('')
  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(null)

  const room = ROOM_TYPES.find((r) => r.id === roomId)
  const price = priceStay({
    pricePerNight: hotel.pricePerNight,
    roomMultiplier: room.multiplier,
    nights: stay.nights,
    rooms: stay.rooms,
  })

  const handleConfirm = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in your name, email and phone number.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    const record = addBooking({
      hotelId: hotel.id,
      hotelName: hotel.name,
      stars: hotel.stars,
      cityId: city.id,
      cityName: city.name,
      stateId: city.stateId,
      stateName: city.stateName,
      scene: city.scene,
      accent: city.stateAccent,
      roomType: room.label,
      checkIn: stay.checkIn,
      checkOut: stay.checkOut,
      nights: stay.nights,
      rooms: stay.rooms,
      guests: stay.guests,
      guestName: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      request: request.trim(),
      total: price.total,
    })
    setConfirmed(record)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div className="animate-fade-up relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl dark:bg-ink-soft sm:rounded-3xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink dark:bg-cream/10 dark:text-cream"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {confirmed ? (
          <div className="text-center">
            <span className="text-5xl">✅</span>
            <h3 className="mt-4 font-display text-2xl text-ink dark:text-cream">Booking confirmed</h3>
            <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">
              Reference <span className="font-semibold text-ink dark:text-cream">{confirmed.id}</span>
            </p>
            <p className="mt-4 text-sm text-ink/70 dark:text-cream/70">
              {hotel.name}, {city.name} · {stay.nights} night{stay.nights > 1 ? 's' : ''} · {room.label}
            </p>
            <p className="mt-1 text-xs text-ink/40 dark:text-cream/40">
              This is a demo booking saved on this device. No payment was taken.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/hotel-bookings"
                onClick={onClose}
                className="flex-1 rounded-full bg-ink py-3.5 text-center text-sm font-semibold text-cream dark:bg-cream dark:text-ink"
              >
                View my bookings
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-full border border-ink/15 py-3.5 text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
              >
                Keep browsing
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleConfirm}>
            <Pill tone="saffron">{'★'.repeat(hotel.stars)} {hotel.tier}</Pill>
            <h3 className="mt-2 font-display text-2xl text-ink dark:text-cream">{hotel.name}</h3>
            <p className="text-sm text-ink/50 dark:text-cream/50">
              {city.name}, {city.stateName} · {stay.checkIn} → {stay.checkOut} · {stay.nights} night{stay.nights > 1 ? 's' : ''} · {stay.rooms} room{stay.rooms > 1 ? 's' : ''} · {stay.guests} guest{stay.guests > 1 ? 's' : ''}
            </p>

            <div className="mt-5">
              <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Room type</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {ROOM_TYPES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRoomId(r.id)}
                    aria-pressed={roomId === r.id}
                    className={`rounded-xl border py-2.5 text-xs font-medium transition-colors ${
                      roomId === r.id
                        ? 'border-peacock-400 bg-peacock-100 text-peacock-700 dark:bg-peacock-700/30 dark:text-peacock-200'
                        : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Guest name">
                <input value={name} onChange={(e) => setName(e.target.value)} className="vv-select" placeholder="Full name" />
              </Field>
              <Field label="Phone">
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="vv-select" placeholder="+91 98765 43210" inputMode="tel" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="vv-select" placeholder="you@example.com" />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Special request (optional)">
                  <textarea value={request} onChange={(e) => setRequest(e.target.value)} rows={2} className="vv-select" placeholder="Late check-in, extra bed…" />
                </Field>
              </div>
            </div>

            <dl className="mt-5 space-y-2 border-t border-ink/10 pt-4 text-sm dark:border-cream/10">
              <div className="flex justify-between">
                <dt className="text-ink/60 dark:text-cream/60">Room charges</dt>
                <dd className="font-medium text-ink dark:text-cream">₹{price.base.toLocaleString('en-IN')}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60 dark:text-cream/60">Taxes &amp; fees (12%)</dt>
                <dd className="font-medium text-ink dark:text-cream">₹{price.taxes.toLocaleString('en-IN')}</dd>
              </div>
              <div className="flex items-center justify-between pt-1">
                <dt className="font-medium text-ink dark:text-cream">Total</dt>
                <dd><EstimatedPrice amount={price.total} className="text-ink dark:text-cream" /></dd>
              </div>
            </dl>

            {error && <p className="mt-4 text-sm text-maroon-500">{error}</p>}

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-cream dark:bg-cream dark:text-ink"
            >
              Confirm booking
            </button>
            <p className="mt-3 text-center text-[11px] text-ink/40 dark:text-cream/40">
              Demo booking — saved on this device only, no payment is processed.
            </p>
          </form>
        )}
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
