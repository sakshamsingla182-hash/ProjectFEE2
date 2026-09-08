import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import WishlistCard from '../components/wishlist/WishlistCard.jsx'

export default function Wishlist() {
  const { items } = useWishlist()

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-10 sm:pt-14">
      <p className="text-sm font-medium text-saffron-500">Wishlist</p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
        Places you're still deciding on
      </h1>
      <p className="mt-3 max-w-xl text-ink/60 dark:text-cream/60">
        States, cities and places you've saved for later. Move any of them into your Trip Bucket when you're ready.
      </p>

      {items.length === 0 ? (
        <div className="mt-12 flex flex-col items-center rounded-3xl border border-dashed border-ink/15 py-20 text-center dark:border-cream/15">
          <span className="text-4xl">💫</span>
          <p className="mt-4 text-ink/60 dark:text-cream/60">Nothing wishlisted yet.</p>
          <Link
            to="/explore"
            className="mt-5 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream dark:bg-cream dark:text-ink"
          >
            Start exploring
          </Link>
        </div>
      ) : (
        <div className="mt-10 space-y-4">
          {items
            .slice()
            .reverse()
            .map((item) => (
              <WishlistCard key={item.id} item={item} />
            ))}
        </div>
      )}
    </div>
  )
}
