import { Link } from 'react-router-dom'
import SceneArt from '../common/SceneArt.jsx'
import { Pill } from '../common/Badges.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'

export default function CityCard({ city, stateId, accent, compact = false }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishId = `city-${stateId}-${city.id}`
  const saved = isWishlisted(wishId)

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-shadow hover:shadow-lift dark:border-cream/10 dark:bg-ink-soft">
      <Link to={`/destination/${stateId}/${city.id}`} className="block">
        <div className={`relative overflow-hidden ${compact ? 'aspect-[4/3]' : 'aspect-[16/11]'}`}>
          <SceneArt scene={city.scene} accent={accent} seed={city.id} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-4 font-display text-lg font-medium text-cream">{city.name}</span>
        </div>
      </Link>
      <div className="p-4">
        <p className="line-clamp-2 text-sm text-ink/60 dark:text-cream/60">{city.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {city.experiences.slice(0, 3).map((exp) => (
            <Pill key={exp} tone={accent}>{exp}</Pill>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link
            to={`/destination/${stateId}/${city.id}`}
            className="text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink dark:text-cream dark:decoration-cream/30 dark:hover:decoration-cream"
          >
            View city
          </Link>
          <button
            type="button"
            onClick={() =>
              toggleWishlist({
                id: wishId,
                type: 'city',
                title: city.name,
                subtitle: `City in ${city.stateName || ''}`.trim(),
                scene: city.scene,
                accent,
                bestSeason: city.bestSeason,
                budgetTier: city.budgetTier,
                cost: city.costPerDay?.standard,
                link: `/destination/${stateId}/${city.id}`,
              })
            }
            aria-pressed={saved}
            aria-label={saved ? `Remove ${city.name} from wishlist` : `Add ${city.name} to wishlist`}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              saved ? 'bg-maroon-500 text-cream' : 'bg-ink/5 text-ink/60 hover:bg-ink/10 dark:bg-cream/10 dark:text-cream/60'
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.7 1.7 6 5 5c2-.6 3.7.3 4.6 1.7L12 9l2.4-2.3C15.3 5.3 17 4.4 19 5c3.3 1 4.2 4.7 2.3 7.9C18.7 16.65 12 21 12 21z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
