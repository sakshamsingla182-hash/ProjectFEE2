// All figures here are deliberately simple, transparent, student-budget estimates —
// not real fares. Every consumer of this module must label output as "Estimated".

export const TRANSPORT_MODES = ['Flight', 'Train', 'Bus', 'Car']
export const SERVICE_TIERS = ['Budget', 'Standard', 'Premium']

const TRANSPORT_BASE = {
  Flight: { base: 2400, perRemoteness: 1450 },
  Train: { base: 700, perRemoteness: 480 },
  Bus: { base: 450, perRemoteness: 330 },
  Car: { base: 1100, perRemoteness: 620 },
}

const COMPONENT_RATIO = {
  accommodation: 0.47,
  food: 0.26,
  local: 0.16,
  activities: 0.11,
}

const TIER_KEY = { Budget: 'budget', Standard: 'standard', Premium: 'premium' }

export function dailyComponent(city, tier, key) {
  const tierKey = TIER_KEY[tier] || 'standard'
  const base = city.costPerDay?.[tierKey] ?? 2000
  return Math.round(base * COMPONENT_RATIO[key])
}

/** One-way-equivalent round-trip transport estimate, per traveller. */
export function transportCostPerTraveler(mode, remoteness = 2) {
  const rates = TRANSPORT_BASE[mode] || TRANSPORT_BASE.Train
  return Math.round((rates.base + rates.perRemoteness * remoteness) / 10) * 10
}

export function estimateTrip({
  city,
  transportMode = 'Train',
  accommodationTier = 'Standard',
  foodTier = 'Standard',
  travelers = 1,
  days = 3,
}) {
  const safeTravelers = Math.max(1, Number(travelers) || 1)
  const safeDays = Math.max(1, Number(days) || 1)

  const transportation = transportCostPerTraveler(transportMode, city.remoteness) * safeTravelers
  const accommodation = dailyComponent(city, accommodationTier, 'accommodation') * safeDays * safeTravelers
  const food = dailyComponent(city, foodTier, 'food') * safeDays * safeTravelers
  const localTransport = dailyComponent(city, accommodationTier, 'local') * safeDays * safeTravelers
  const activities = dailyComponent(city, accommodationTier, 'activities') * safeDays * safeTravelers
  const subtotal = transportation + accommodation + food + localTransport + activities
  const miscellaneous = Math.round(subtotal * 0.04)
  const total = subtotal + miscellaneous

  return {
    transportation,
    accommodation,
    food,
    localTransport,
    activities,
    miscellaneous,
    total,
    perPerson: Math.round(total / safeTravelers),
    travelers: safeTravelers,
    days: safeDays,
  }
}

export function cheapestDailyRate(city) {
  return city.costPerDay.budget
}

export function priciestDailyRate(city) {
  return city.costPerDay.premium
}
