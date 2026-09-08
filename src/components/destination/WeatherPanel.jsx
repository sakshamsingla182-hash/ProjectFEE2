const SEASONS = [
  { key: 'summer', label: 'Summer', icon: '☀️' },
  { key: 'monsoon', label: 'Monsoon', icon: '🌧️' },
  { key: 'winter', label: 'Winter', icon: '❄️' },
]

export default function WeatherPanel({ weather }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink-soft sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-ink dark:text-cream">Typical weather</h3>
        <span className="text-xs text-ink/40 dark:text-cream/40">Average / typical, not live data</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {SEASONS.map((season) => (
          <div key={season.key} className="rounded-xl bg-ink/5 p-4 dark:bg-cream/5">
            <span className="text-xl">{season.icon}</span>
            <p className="mt-2 text-sm font-medium text-ink dark:text-cream">{season.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink/60 dark:text-cream/60">{weather[season.key]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
