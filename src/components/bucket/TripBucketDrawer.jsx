import { Link } from 'react-router-dom'
import { useBucket } from '../../context/BucketContext.jsx'
import SceneArt from '../common/SceneArt.jsx'
import { EstimatedPrice, Pill } from '../common/Badges.jsx'

export default function TripBucketDrawer() {
  const { items, isOpen, closeBucket, removeItem, totalCost, clearBucket } = useBucket()

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeBucket}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-md transform flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out dark:bg-ink-soft ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 dark:border-cream/10">
          <div>
            <h2 className="font-display text-xl text-ink dark:text-cream">Trip Bucket</h2>
            <p className="text-xs text-ink/50 dark:text-cream/50">{items.length} item{items.length === 1 ? '' : 's'} saved</p>
          </div>
          <button
            type="button"
            onClick={closeBucket}
            aria-label="Close trip bucket"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink dark:bg-cream/10 dark:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-ink/50 dark:text-cream/50">
              <span className="text-4xl">🧳</span>
              <p className="mt-4 max-w-[220px] text-sm">
                Nothing here yet. Add states, cities, flights or a Magic / Luxury trip to start building your journey.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl border border-ink/10 p-3 dark:border-cream/10">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl text-cream">
                    <SceneArt scene={item.scene} accent={item.accent} seed={item.id} className="h-full w-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate font-display text-sm text-ink dark:text-cream">{item.title}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.title} from bucket`}
                        className="shrink-0 text-ink/40 hover:text-maroon-500 dark:text-cream/40"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-ink/50 dark:text-cream/50">{item.subtitle}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <Pill tone={item.accent}>{item.type}</Pill>
                      {typeof item.cost === 'number' && <EstimatedPrice amount={item.cost} className="text-ink dark:text-cream" />}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5 dark:border-cream/10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink/60 dark:text-cream/60">Total estimated cost</span>
              <EstimatedPrice amount={totalCost} className="text-ink dark:text-cream" />
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={clearBucket}
                className="flex-1 rounded-full border border-ink/15 py-3 text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
              >
                Clear all
              </button>
              <Link
                to="/trip-planner"
                onClick={closeBucket}
                className="flex-1 rounded-full bg-ink py-3 text-center text-sm font-medium text-cream dark:bg-cream dark:text-ink"
              >
                Plan this trip
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
