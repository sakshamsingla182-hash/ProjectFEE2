// Voyage Verse — demo hotel data.
// Illustrative sample stays, not live inventory. Prices are derived from each city's
// own costPerDay figures (same source the Trip Planner uses), so they stay consistent.

import { dailyComponent } from '../utils/costEstimates.js'

export const HOTEL_CATEGORIES = ['Any', 'Budget', 'Standard', 'Premium']

export const ROOM_TYPES = [
  { id: 'standard', label: 'Standard Room', multiplier: 1 },
  { id: 'deluxe', label: 'Deluxe Room', multiplier: 1.35 },
  { id: 'suite', label: 'Suite', multiplier: 2.1 },
]

export const TAX_RATE = 0.12

const HOTEL_TYPES = {
  Budget: ['Stay', 'Lodge', 'Homestay', 'Inn'],
  Standard: ['Residency', 'Grand', 'Boutique Hotel', 'Heritage Stay'],
  Premium: ['Palace', 'Resort & Spa', 'Luxury Retreat', 'Imperial'],
}

const NAME_PREFIXES = ['The', 'Hotel', 'Royal', 'Serene', 'Golden', 'Blue', 'Lotus', 'Kesar', 'Maple', 'Jade']

const AMENITIES = [
  'Free Wi-Fi',
  'Breakfast included',
  'Swimming pool',
  'Spa',
  'Airport pickup',
  'Parking',
  'Restaurant',
  'Mountain / city view',
  'Air conditioning',
  '24h room service',
]

function seedFrom(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h
}

function mulberry32(seed) {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0
  const ms = new Date(checkOut) - new Date(checkIn)
  return Math.max(0, Math.round(ms / 86400000))
}

/** Price breakdown for a stay. Every figure is an estimate. */
export function priceStay({ pricePerNight, roomMultiplier = 1, nights, rooms }) {
  const base = Math.round(pricePerNight * roomMultiplier) * nights * rooms
  const taxes = Math.round(base * TAX_RATE)
  return { base, taxes, total: base + taxes }
}

// Deterministic: the same city + category always returns the same hotels.
export function generateHotels({ city, category = 'Any', count = 6 }) {
  if (!city) return []
  const rand = mulberry32(seedFrom(`hotel-${city.id}-${category}`))
  const tiers = category === 'Any' ? ['Budget', 'Standard', 'Premium'] : [category]
  const results = []

  for (let i = 0; i < count; i++) {
    const tier = tiers[i % tiers.length]
    const typeWord = HOTEL_TYPES[tier][Math.floor(rand() * HOTEL_TYPES[tier].length)]
    const prefix = NAME_PREFIXES[Math.floor(rand() * NAME_PREFIXES.length)]
    const stars = tier === 'Budget' ? 2 + Math.floor(rand() * 2) : tier === 'Standard' ? 3 + Math.floor(rand() * 2) : 4 + Math.floor(rand() * 2)
    const base = dailyComponent(city, tier, 'accommodation')
    const jitter = 0.85 + rand() * 0.4
    const pricePerNight = Math.max(500, Math.round((base * jitter) / 50) * 50)

    const amenityCount = 3 + Math.floor(rand() * 3)
    const pool = [...AMENITIES]
    const amenities = []
    while (amenities.length < amenityCount && pool.length) {
      amenities.push(pool.splice(Math.floor(rand() * pool.length), 1)[0])
    }

    results.push({
      id: `${city.id}-${tier.toLowerCase()}-${i}`,
      name: `${prefix} ${city.name} ${typeWord}`,
      tier,
      stars,
      rating: (3.6 + rand() * 1.3).toFixed(1),
      distance: `${(0.3 + rand() * 5).toFixed(1)} km from centre`,
      amenities,
      pricePerNight,
      freeCancellation: rand() > 0.35,
    })
  }
  return results.sort((a, b) => a.pricePerNight - b.pricePerNight)
}
