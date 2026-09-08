import { Link } from 'react-router-dom'
import SceneArt from '../common/SceneArt.jsx'
import { Pill } from '../common/Badges.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'

export default function StateCard({ state, size = 'md' }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishId = `state-${state.id}`
  const saved = isWishlisted(wishId)

  const heights = {
    sm: 'aspect-[4/5]',
    md: 'aspect-[3/4]',
    lg: 'aspect-[4/5] sm:aspect-auto sm:h-full',
  }

  return (
    <div className={`group relative block ${heights[size]} overflow-hidden rounded-3xl shadow-lift transition-transform duration-500 hover:-translate-y-1`}>
      <Link to={`/destination/${state.id}`} className="absolute inset-0">
        <SceneArt scene={state.scene} accent={state.accent} seed={state.id} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />
      </Link>
      <button
        type="button"
        onClick={() =>
          toggleWishlist({
            id: wishId,
            type: 'state',
            title: state.name,
            subtitle: state.region,
            scene: state.scene,
            accent: state.accent,
            bestSeason: null,
            link: `/destination/${state.id}`,
          })
        }
        aria-pressed={saved}
        aria-label={saved ? `Remove ${state.name} from wishlist` : `Add ${state.name} to wishlist`}
        className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-colors ${
          saved ? 'bg-maroon-500 text-cream' : 'bg-cream/20 text-cream hover:bg-cream/30'
        }`}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.7 1.7 6 5 5c2-.6 3.7.3 4.6 1.7L12 9l2.4-2.3C15.3 5.3 17 4.4 19 5c3.3 1 4.2 4.7 2.3 7.9C18.7 16.65 12 21 12 21z" />
        </svg>
      </button>
      <Link to={`/destination/${state.id}`} className="relative flex h-full flex-col justify-end p-5 sm:p-6">
        <Pill tone={state.accent} className="mb-3 w-fit backdrop-blur">{state.region}</Pill>
        <h3 className="font-display text-2xl font-medium text-cream sm:text-3xl">{state.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-cream/70">{state.tagline}</p>
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream/15 px-3.5 py-1.5 text-xs font-medium text-cream backdrop-blur transition-colors group-hover:bg-cream/25">
          {state.cities.length} cities
        </span>
      </Link>
    </div>
  )
}
