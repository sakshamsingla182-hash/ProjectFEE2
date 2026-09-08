// Voyage Verse — demo flight data.
// These are illustrative sample fares, not live inventory. See Flights page for the disclaimer shown to users.

export const AIRLINES = [
  { code: 'IN', name: 'IndiGo', tier: 'economy' },
  { code: 'AI', name: 'Air India', tier: 'both' },
  { code: 'VS', name: 'Vistara', tier: 'both' },
  { code: 'SJ', name: 'SpiceJet', tier: 'economy' },
  { code: 'AK', name: 'Akasa Air', tier: 'economy' },
]

const HUBS = [
  { id: 'delhi', label: 'Delhi (DEL)' },
  { id: 'mumbai', label: 'Mumbai (BOM)' },
  { id: 'bengaluru', label: 'Bengaluru (BLR)' },
  { id: 'kolkata', label: 'Kolkata (CCU)' },
  { id: 'chennai', label: 'Chennai (MAA)' },
  { id: 'ahmedabad', label: 'Ahmedabad (AMD)' },
]

export const FLIGHT_ORIGINS = HUBS

// deterministic pseudo-random generator so results are stable per query, not random on every render
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

export function generateFlights({ fromLabel, city, remoteness = 2, travelClass = 'Economy', count = 4 }) {
  const rand = mulberry32(seedFrom(`${fromLabel}-${city?.id}-${travelClass}`))
  const baseFare = 2600 + remoteness * 1300
  const classMultiplier = travelClass === 'Business' ? 3.4 : 1
  const results = []
  for (let i = 0; i < count; i++) {
    const airline = AIRLINES[Math.floor(rand() * AIRLINES.length)]
    const stops = rand() > 0.72 ? 1 : 0
    const durationHrs = (1.5 + remoteness * 0.6 + stops * 1.4 + rand() * 0.8).toFixed(1)
    const depHour = 5 + Math.floor(rand() * 17)
    const depMin = rand() > 0.5 ? '00' : '30'
    const arrDate = new Date(2000, 0, 1, depHour, depMin === '00' ? 0 : 30)
    arrDate.setMinutes(arrDate.getMinutes() + Math.round(parseFloat(durationHrs) * 60))
    const fareJitter = 0.85 + rand() * 0.5
    const price = Math.round(((baseFare + stops * 900) * classMultiplier * fareJitter) / 50) * 50
    results.push({
      id: `${airline.code}-${i}-${city?.id}`,
      airline: airline.name,
      code: `${airline.code}${100 + Math.floor(rand() * 800)}`,
      departure: `${String(depHour).padStart(2, '0')}:${depMin}`,
      arrival: `${String(arrDate.getHours()).padStart(2, '0')}:${String(arrDate.getMinutes()).padStart(2, '0')}`,
      duration: `${durationHrs}h`,
      stops,
      travelClass,
      price,
    })
  }
  return results.sort((a, b) => a.price - b.price)
}
