import { Link } from 'react-router-dom'
import { useHotelBookings } from '../context/HotelBookingContext.jsx'
import { EstimatedPrice, Pill } from '../components/common/Badges.jsx'
import SceneArt from '../components/common/SceneArt.jsx'

export default function HotelBookings() {
  const { bookings, activeCount, cancelBooking, removeBooking } = useHotelBookings()

  const activeTotal = bookings
    .filter((b) => b.status === 'Confirmed')
    .reduce((sum, b) => sum + b.total, 0)

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-saffron-500">Hotels</p>
          <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">My hotel bookings</h1>
        </div>
        <Link
          to="/hotels"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream dark:bg-cream dark:text-ink"
        >
          Book another stay
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-ink/15 px-6 py-16 text-center dark:border-cream/20">
          <span className="text-5xl">🏨</span>
          <p className="mt-4 text-ink/60 dark:text-cream/60">You haven't booked any hotels yet.</p>
          <Link to="/hotels" className="mt-5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream dark:bg-cream dark:text-ink">
            Find a hotel
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 p-4 dark:border-cream/10">
              <p className="text-xs text-ink/50 dark:text-cream/50">Active bookings</p>
              <p className="mt-1 font-display text-2xl text-ink dark:text-cream">{activeCount}</p>
            </div>
            <div className="rounded-2xl border border-ink/10 p-4 dark:border-cream/10">
              <p className="text-xs text-ink/50 dark:text-cream/50">Total for active bookings</p>
              <EstimatedPrice amount={activeTotal} className="text-ink dark:text-cream" />
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {bookings.map((b) => {
              const cancelled = b.status === 'Cancelled'
              return (
                <li
                  key={b.id}
                  className={`flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white dark:border-cream/10 dark:bg-ink-soft sm:flex-row ${
                    cancelled ? 'opacity-60' : ''
                  }`}
                >
                  <div className="h-32 shrink-0 text-cream sm:h-auto sm:w-44">
                    <SceneArt scene={b.scene} accent={b.accent} seed={b.hotelId} className="h-full w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Pill tone={cancelled ? 'maroon' : 'peacock'}>{b.status}</Pill>
                        <span className="text-xs text-ink/50 dark:text-cream/50">Ref {b.id}</span>
                      </div>
                      <p className="mt-2 font-display text-lg text-ink dark:text-cream">{b.hotelName}</p>
                      <p className="text-sm text-ink/60 dark:text-cream/60">
                        {b.cityName}, {b.stateName} · {b.roomType}
                      </p>
                      <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">
                        {b.checkIn} → {b.checkOut} · {b.nights} night{b.nights > 1 ? 's' : ''} · {b.rooms} room{b.rooms > 1 ? 's' : ''} · {b.guests} guest{b.guests > 1 ? 's' : ''}
                      </p>
                      <p className="mt-1 text-xs text-ink/40 dark:text-cream/40">
                        Booked for {b.guestName} · {b.email}
                      </p>
                      {b.request && <p className="mt-1 text-xs italic text-ink/40 dark:text-cream/40">“{b.request}”</p>}
                    </div>
                    <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
                      <EstimatedPrice amount={b.total} className="text-ink dark:text-cream" />
                      {cancelled ? (
                        <button
                          type="button"
                          onClick={() => removeBooking(b.id)}
                          className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm('Cancel this booking?')) cancelBooking(b.id)
                          }}
                          className="rounded-full border border-maroon-400 px-4 py-2 text-sm font-medium text-maroon-500 hover:bg-maroon-400/10"
                        >
                          Cancel booking
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
