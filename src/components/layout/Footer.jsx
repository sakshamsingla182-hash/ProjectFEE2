import { Link } from 'react-router-dom'
import Logo from '../common/Logo.jsx'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-cream dark:border-cream/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-cream" />
            <p className="mt-4 max-w-xs text-sm text-cream/60">
              Explore India. Discover your journey. A planning companion for 15 states and 75 cities across the country.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm text-cream/80">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li><Link to="/explore" className="hover:text-cream">Explore India</Link></li>
              <li><Link to="/flights" className="hover:text-cream">Flights</Link></li>
              <li><Link to="/trip-planner" className="hover:text-cream">Trip Planner</Link></li>
              <li><Link to="/wishlist" className="hover:text-cream">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm text-cream/80">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li><Link to="/about" className="hover:text-cream">About</Link></li>
              <li><Link to="/faq" className="hover:text-cream">FAQ</Link></li>
              <li><Link to="/login" className="hover:text-cream">Log in</Link></li>
              <li><Link to="/signup" className="hover:text-cream">Sign up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm text-cream/80">A note on estimates</h4>
            <p className="mt-4 text-sm text-cream/60">
              All prices across Voyage Verse — flights, stays, food and trip totals — are estimates for planning
              purposes only, not live bookings.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Voyage Verse. A concept travel-planning project.</span>
          <span>Built with React, Vite &amp; React Router</span>
        </div>
      </div>
    </footer>
  )
}
