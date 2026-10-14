export const AIRLINES = [
  { code: 'IN', name: 'IndiGo', tier: 'economy' },
  { code: 'AI', name: 'Air India', tier: 'both' },
  { code: 'VS', name: 'Vistara', tier: 'both' },
  { code: 'SJ', name: 'SpiceJet', tier: 'economy' },
  { code: 'AK', name: 'Akasa Air', tier: 'economy' },
]

export const AIRPORTS = [
  { id: 'del', code: 'DEL', city: 'Delhi', label: 'Delhi (DEL)' },
  { id: 'bom', code: 'BOM', city: 'Mumbai', label: 'Mumbai (BOM)' },
  { id: 'blr', code: 'BLR', city: 'Bengaluru', label: 'Bengaluru (BLR)' },
  { id: 'hyd', code: 'HYD', city: 'Hyderabad', label: 'Hyderabad (HYD)' },
  { id: 'maa', code: 'MAA', city: 'Chennai', label: 'Chennai (MAA)' },
  { id: 'ccu', code: 'CCU', city: 'Kolkata', label: 'Kolkata (CCU)' },
  { id: 'amd', code: 'AMD', city: 'Ahmedabad', label: 'Ahmedabad (AMD)' },
  { id: 'pnq', code: 'PNQ', city: 'Pune', label: 'Pune (PNQ)' },
  { id: 'goi', code: 'GOI', city: 'Goa', label: 'Goa (GOI)' },
  { id: 'cok', code: 'COK', city: 'Kochi', label: 'Kochi (COK)' },
  { id: 'jai', code: 'JAI', city: 'Jaipur', label: 'Jaipur (JAI)' },
  { id: 'lko', code: 'LKO', city: 'Lucknow', label: 'Lucknow (LKO)' },
  { id: 'pat', code: 'PAT', city: 'Patna', label: 'Patna (PAT)' },
  { id: 'gau', code: 'GAU', city: 'Guwahati', label: 'Guwahati (GAU)' },
  { id: 'ixc', code: 'IXC', city: 'Chandigarh', label: 'Chandigarh (IXC)' },
  { id: 'sxr', code: 'SXR', city: 'Srinagar', label: 'Srinagar (SXR)' },
  { id: 'ixb', code: 'IXB', city: 'Bagdogra', label: 'Bagdogra (IXB)' },
  { id: 'vns', code: 'VNS', city: 'Varanasi', label: 'Varanasi (VNS)' },
]

// backward-compatible alias — TripPlanner still imports FLIGHT_ORIGINS
export const FLIGHT_ORIGINS = AIRPORTS

export const SPECIAL_FARES = [
  { id: 'regular',      label: 'Regular',         discount: 0 },
  { id: 'student',      label: 'Student',          discount: 0.10 },
  { id: 'senior',       label: 'Senior Citizen',    discount: 0.12 },
  { id: 'armed-forces', label: 'Armed Forces',      discount: 0.15 },
  { id: 'doctor-nurse', label: 'Doctor / Nurse',    discount: 0.08 },
]

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

export function generateFlights({ fromId, toId, travelClass = 'Economy', fareId = 'regular', count = 5 }) {
  const rand = mulberry32(seedFrom(`${fromId}-${toId}-${travelClass}`))

  // distance factor from airport indices for fare/duration variation
  const fromIdx = AIRPORTS.findIndex((a) => a.id === fromId)
  const toIdx = AIRPORTS.findIndex((a) => a.id === toId)
  const distance = Math.abs(fromIdx - toIdx)
  const remoteness = Math.max(1, Math.min(distance, 6))

  const baseFare = 2400 + remoteness * 1100
  const classMultiplier = travelClass === 'Business' ? 3.4 : 1

  const fare = SPECIAL_FARES.find((f) => f.id === fareId) || SPECIAL_FARES[0]
  const discountMultiplier = 1 - fare.discount

  const results = []
  for (let i = 0; i < count; i++) {
    const airline = AIRLINES[Math.floor(rand() * AIRLINES.length)]
    const stops = rand() > 0.72 ? 1 : 0
    const durationHrs = (1.5 + remoteness * 0.5 + stops * 1.4 + rand() * 0.8).toFixed(1)
    const depHour = 5 + Math.floor(rand() * 17)
    const depMin = rand() > 0.5 ? '00' : '30'
    const arrDate = new Date(2000, 0, 1, depHour, depMin === '00' ? 0 : 30)
    arrDate.setMinutes(arrDate.getMinutes() + Math.round(parseFloat(durationHrs) * 60))
    const fareJitter = 0.85 + rand() * 0.5
    const rawPrice = (baseFare + stops * 900) * classMultiplier * fareJitter
    const price = Math.round((rawPrice * discountMultiplier) / 50) * 50
    results.push({
      id: `${airline.code}-${i}-${fromId}-${toId}`,
      airline: airline.name,
      code: `${airline.code}${100 + Math.floor(rand() * 800)}`,
      departure: `${String(depHour).padStart(2, '0')}:${depMin}`,
      arrival: `${String(arrDate.getHours()).padStart(2, '0')}:${String(arrDate.getMinutes()).padStart(2, '0')}`,
      duration: `${durationHrs}h`,
      stops,
      travelClass,
      fareType: fare.label,
      price,
    })
  }
  return results.sort((a, b) => a.price - b.price)
}

