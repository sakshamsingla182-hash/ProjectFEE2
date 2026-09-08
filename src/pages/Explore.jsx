import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { STATES, ALL_CITIES } from '../data/destinations.js'
import { filterCities, filterStates } from '../utils/filters.js'
import SearchBar from '../components/common/SearchBar.jsx'
import FilterBar from '../components/explore/FilterBar.jsx'
import StateCard from '../components/explore/StateCard.jsx'
import CityCard from '../components/destination/CityCard.jsx'

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [experiences, setExperiences] = useState([])
  const [budgetId, setBudgetId] = useState(null)
  const [durationId, setDurationId] = useState(null)

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setQuery(q)
  }, [searchParams])

  const filtersActive = Boolean(query) || experiences.length > 0 || Boolean(budgetId) || Boolean(durationId)

  const filteredStates = useMemo(() => filterStates(STATES, query), [query])

  const filteredCities = useMemo(
    () => filterCities(ALL_CITIES, { query, experiences, budgetId, durationId }),
    [query, experiences, budgetId, durationId]
  )

  const toggleExperience = (exp) => {
    setExperiences((prev) => (prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]))
  }

  const resetFilters = () => {
    setExperiences([])
    setBudgetId(null)
    setDurationId(null)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-14">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-saffron-500">Explore India</p>
        <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
          Fifteen states, seventy-five cities
        </h1>
        <p className="mt-3 text-ink/60 dark:text-cream/60">
          Browse by state, or search and filter across every city at once by experience, budget and trip length.
        </p>
      </div>

      <div className="mt-8">
        <SearchBar
          value={query}
          onChange={(v) => {
            setQuery(v)
            setSearchParams(v ? { q: v } : {})
          }}
        />
      </div>

      <div className="mt-5">
        <FilterBar
          activeExperiences={experiences}
          onToggleExperience={toggleExperience}
          budgetId={budgetId}
          onSetBudget={setBudgetId}
          durationId={durationId}
          onSetDuration={setDurationId}
          onReset={resetFilters}
          resultCount={filteredCities.length}
        />
      </div>

      {experiences.length > 0 || budgetId || durationId ? (
        <CityResults cities={filteredCities} />
      ) : (
        <>
          {query && (
            <p className="mt-10 text-sm text-ink/50 dark:text-cream/50">
              {filteredStates.length + filteredCities.length === 0
                ? `No matches for "${query}" yet — try a state, city or experience.`
                : `Showing results for "${query}"`}
            </p>
          )}

          {query ? (
            <div className="mt-6 space-y-12">
              {filteredStates.length > 0 && (
                <div>
                  <h2 className="font-display text-xl text-ink dark:text-cream">States</h2>
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {filteredStates.map((state) => (
                      <StateCard key={state.id} state={state} size="sm" />
                    ))}
                  </div>
                </div>
              )}
              {filteredCities.length > 0 && <CityResults cities={filteredCities} title="Cities" />}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {STATES.map((state) => (
                <StateCard key={state.id} state={state} size="sm" />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

function CityResults({ cities, title }) {
  if (cities.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border border-dashed border-ink/15 p-10 text-center text-ink/50 dark:border-cream/15 dark:text-cream/50">
        No cities match these filters yet. Try loosening one.
      </div>
    )
  }

  return (
    <div className="mt-10">
      {title && <h2 className="mb-4 font-display text-xl text-ink dark:text-cream">{title}</h2>}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <CityCard key={`${city.stateId}-${city.id}`} city={city} stateId={city.stateId} accent={city.stateAccent} />
        ))}
      </div>
    </div>
  )
}
