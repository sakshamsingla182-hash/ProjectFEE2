import { Link } from 'react-router-dom'
import { STATES } from '../../data/destinations.js'
import StateCard from '../explore/StateCard.jsx'

const FEATURED_IDS = ['himachal-pradesh', 'kerala', 'rajasthan', 'goa', 'kashmir', 'assam', 'karnataka', 'delhi']


export default function StatesShowcase() {
  const featured = FEATURED_IDS.map((id) => STATES.find((s) => s.id === id)).filter(Boolean)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-cream sm:text-4xl">
            Fifteen states, one country
          </h2>
          <p className="mt-2 max-w-md text-ink/60 dark:text-cream/60">
            Each state opens onto five hand-picked cities, complete with costs, weather and how to get there.
          </p>
        </div>
        <Link
          to="/explore"
          className="shrink-0 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:bg-ink/5 dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
        >
          View all 15 states
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((state) => (
          <div key={state.id} className="min-w-0">
            <StateCard state={state} size="md" />
          </div>
        ))}
      </div>
    </section>
  )
}
