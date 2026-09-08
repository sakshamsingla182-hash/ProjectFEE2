import { Link } from 'react-router-dom'
import SceneArt from '../common/SceneArt.jsx'
import { EstimatedPrice, Pill } from '../common/Badges.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { useBucket } from '../../context/BucketContext.jsx'

export default function WishlistCard({ item }) {
  const { removeItem } = useWishlist()
  const { addItem, isInBucket } = useBucket()
  const inBucket = isInBucket(`bucket-${item.id}`)

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm dark:border-cream/10 dark:bg-ink-soft sm:flex-row">
      <div className="relative h-40 shrink-0 sm:h-auto sm:w-56">
        <SceneArt scene={item.scene} accent={item.accent} seed={item.id} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <Pill tone={item.accent}>{item.type}</Pill>
              <h3 className="mt-2 font-display text-xl text-ink dark:text-cream">{item.title}</h3>
              <p className="text-sm text-ink/50 dark:text-cream/50">{item.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.title} from wishlist`}
              className="shrink-0 rounded-full p-2 text-ink/40 hover:bg-ink/5 hover:text-maroon-500 dark:text-cream/40 dark:hover:bg-cream/10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
              </svg>
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/60 dark:text-cream/60">
            {item.bestSeason && <span>Best season: {item.bestSeason}</span>}
            {typeof item.cost === 'number' && (
              <span>
                From <EstimatedPrice amount={item.cost} per="/ day" />
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.link && (
            <Link
              to={item.link}
              className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
            >
              Explore
            </Link>
          )}
          <button
            type="button"
            disabled={inBucket}
            onClick={() =>
              addItem({
                id: `bucket-${item.id}`,
                type: item.type,
                title: item.title,
                subtitle: item.subtitle,
                scene: item.scene,
                accent: item.accent,
                cost: item.cost || 0,
              })
            }
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream disabled:opacity-50 dark:bg-cream dark:text-ink"
          >
            {inBucket ? 'In bucket' : 'Add to Bucket'}
          </button>
        </div>
      </div>
    </div>
  )
}
