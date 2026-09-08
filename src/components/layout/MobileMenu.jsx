import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import ThemeToggle from '../common/ThemeToggle.jsx'

export default function MobileMenu({ open, onClose, links }) {
  const { isAuthenticated, logout } = useAuth()

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[82%] max-w-sm transform bg-cream dark:bg-ink-soft shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 dark:border-cream/10">
          <span className="font-display text-lg text-ink dark:text-cream">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink dark:bg-cream/10 dark:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium ${
                  isActive
                    ? 'bg-ink text-cream dark:bg-cream dark:text-ink'
                    : 'text-ink/80 hover:bg-ink/5 dark:text-cream/80 dark:hover:bg-cream/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-2 flex flex-col gap-3 border-t border-ink/10 p-4 dark:border-cream/10">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm text-ink/60 dark:text-cream/60">Theme</span>
            <ThemeToggle />
          </div>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={() => {
                logout()
                onClose()
              }}
              className="rounded-xl border border-ink/15 px-4 py-3 text-center text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
            >
              Sign out
            </button>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/login"
                onClick={onClose}
                className="flex-1 rounded-xl border border-ink/15 px-4 py-3 text-center text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
              >
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                onClick={onClose}
                className="flex-1 rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-cream dark:bg-cream dark:text-ink"
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
