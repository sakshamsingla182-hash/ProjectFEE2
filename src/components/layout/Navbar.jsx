import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../common/Logo.jsx'
import ThemeToggle from '../common/ThemeToggle.jsx'
import { useBucket } from '../../context/BucketContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import MobileMenu from './MobileMenu.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore India' },
  { to: '/flights', label: 'Flights' },
  { to: '/trip-planner', label: 'Trip Planner' },
  { to: '/wishlist', label: 'Wishlist' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, toggleBucket } = useBucket()
  const { isAuthenticated, currentUser, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'border-ink/10 bg-cream/90 shadow-lift backdrop-blur-md dark:border-cream/10 dark:bg-ink/85'
            : 'border-transparent bg-cream/60 backdrop-blur-sm dark:bg-ink/50'
        }`}
      >
        <Link to="/" className="text-ink dark:text-cream shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-ink text-cream dark:bg-cream dark:text-ink'
                    : 'text-ink/70 hover:bg-ink/5 dark:text-cream/70 dark:hover:bg-cream/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:flex" />

          <button
            type="button"
            onClick={toggleBucket}
            aria-label="Open trip bucket"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10 dark:bg-cream/10 dark:text-cream dark:hover:bg-cream/20"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-13z" />
              <path d="M6 6 4.5 3H2" />
              <circle cx="9" cy="20" r="1.4" fill="currentColor" />
              <circle cx="18" cy="20" r="1.4" fill="currentColor" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-maroon-500 px-1 text-[11px] font-semibold text-cream">
                {count}
              </span>
            )}
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5 dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
              >
                Sign out{currentUser?.name ? ` · ${currentUser.name.split(' ')[0]}` : ''}
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 hover:bg-ink/5 dark:text-cream/80 dark:hover:bg-cream/10"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:bg-ink/90 dark:bg-cream dark:text-ink dark:hover:bg-cream/90"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink dark:bg-cream/10 dark:text-cream lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={LINKS} />
    </header>
  )
}
