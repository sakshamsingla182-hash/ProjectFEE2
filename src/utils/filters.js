export const DURATION_BUCKETS = [
  { id: 'quick', label: 'Quick (1–2 days)', max: 2 },
  { id: 'standard', label: 'Standard (3–4 days)', max: 4 },
  { id: 'complete', label: 'Complete (5+ days)', max: Infinity },
]

export function typicalDays(city) {
  const match = city.duration?.standard?.match(/\d+/)
  return match ? parseInt(match[0], 10) : 3
}

export function durationBucketId(city) {
  const days = typicalDays(city)
  return DURATION_BUCKETS.find((b) => days <= b.max)?.id || 'standard'
}

export function matchesQuery(city, stateName, query) {
  if (!query) return true
  const q = query.toLowerCase()
  return (
    city.name.toLowerCase().includes(q) ||
    stateName.toLowerCase().includes(q) ||
    city.tagline.toLowerCase().includes(q) ||
    city.experiences.some((e) => e.toLowerCase().includes(q))
  )
}

export function filterCities(cities, { query = '', experiences = [], budgetId = null, durationId = null } = {}) {
  return cities.filter((city) => {
    if (!matchesQuery(city, city.stateName, query)) return false
    if (experiences.length && !experiences.every((e) => city.experiences.includes(e))) return false
    if (budgetId && city.budgetTier !== budgetId) return false
    if (durationId && durationBucketId(city) !== durationId) return false
    return true
  })
}

export function filterStates(states, query) {
  if (!query) return states
  const q = query.toLowerCase()
  return states.filter(
    (state) =>
      state.name.toLowerCase().includes(q) ||
      state.tagline.toLowerCase().includes(q) ||
      state.cities.some((c) => c.name.toLowerCase().includes(q))
  )
}
