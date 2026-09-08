import { EXPERIENCES, BUDGET_BANDS } from '../../data/destinations.js'
import { DURATION_BUCKETS } from '../../utils/filters.js'

export default function FilterBar({
  activeExperiences,
  onToggleExperience,
  budgetId,
  onSetBudget,
  durationId,
  onSetDuration,
  onReset,
  resultCount,
}) {
  const hasFilters = activeExperiences.length > 0 || budgetId || durationId

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink-soft sm:p-6">
      <div>
        <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Experience</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {EXPERIENCES.map((exp) => {
            const active = activeExperiences.includes(exp)
            return (
              <button
                key={exp}
                type="button"
                onClick={() => onToggleExperience(exp)}
                aria-pressed={active}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? 'border-ink bg-ink text-cream dark:border-cream dark:bg-cream dark:text-ink'
                    : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70 dark:hover:bg-cream/10'
                }`}
              >
                {exp}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Budget</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {BUDGET_BANDS.map((band) => (
              <button
                key={band.id}
                type="button"
                onClick={() => onSetBudget(budgetId === band.id ? null : band.id)}
                aria-pressed={budgetId === band.id}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  budgetId === band.id
                    ? 'border-peacock-400 bg-peacock-100 text-peacock-700 dark:bg-peacock-700/30 dark:text-peacock-200'
                    : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70 dark:hover:bg-cream/10'
                }`}
              >
                {band.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-ink/50 dark:text-cream/50">Duration</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {DURATION_BUCKETS.map((bucket) => (
              <button
                key={bucket.id}
                type="button"
                onClick={() => onSetDuration(durationId === bucket.id ? null : bucket.id)}
                aria-pressed={durationId === bucket.id}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  durationId === bucket.id
                    ? 'border-saffron-400 bg-saffron-100 text-saffron-700 dark:bg-saffron-700/30 dark:text-saffron-200'
                    : 'border-ink/15 text-ink/70 hover:bg-ink/5 dark:border-cream/20 dark:text-cream/70 dark:hover:bg-cream/10'
                }`}
              >
                {bucket.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 dark:border-cream/10">
        <span className="text-sm text-ink/50 dark:text-cream/50">
          {resultCount} {resultCount === 1 ? 'city' : 'cities'} match
        </span>
        {hasFilters && (
          <button type="button" onClick={onReset} className="text-sm font-medium text-maroon-500 hover:underline">
            Reset filters
          </button>
        )}
      </div>
    </div>
  )
}
