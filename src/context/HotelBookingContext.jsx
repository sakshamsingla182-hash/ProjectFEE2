import { createContext, useContext, useMemo, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const HotelBookingContext = createContext(null)

// Demo-only: bookings are saved in localStorage on this device. No payment, no server.
export function HotelBookingProvider({ children }) {
  const [bookings, setBookings] = useLocalStorage('vv-hotel-bookings', [])
  const addBooking = useCallback(
    (booking) => {
      const reference = `VVH-${Date.now().toString(36).toUpperCase().slice(-6)}`
      const record = { ...booking, id: reference, status: 'Confirmed', bookedAt: Date.now() }
      setBookings((prev) => [record, ...prev])
      return record
    },
    [setBookings]
  )

  const cancelBooking = useCallback(
    (id) => {
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: 'Cancelled' } : b)))
    },
    [setBookings]
  )

  const removeBooking = useCallback(
    (id) => {
      setBookings((prev) => prev.filter((b) => b.id !== id))
    },
    [setBookings]
  )

  const activeCount = useMemo(() => bookings.filter((b) => b.status === 'Confirmed').length, [bookings])

  const value = useMemo(
    () => ({ bookings, activeCount, addBooking, cancelBooking, removeBooking }),
    [bookings, activeCount, addBooking, cancelBooking, removeBooking]
  )

  return <HotelBookingContext.Provider value={value}>{children}</HotelBookingContext.Provider>
}

export function useHotelBookings() {
  const ctx = useContext(HotelBookingContext)
  if (!ctx) throw new Error('useHotelBookings must be used within HotelBookingProvider')
  return ctx
}
