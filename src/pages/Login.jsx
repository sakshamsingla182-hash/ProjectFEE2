import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import SceneArt from '../components/common/SceneArt.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login({ email, password })
    if (result.success) {
      navigate(location.state?.from || '/trip-planner')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className="grid min-h-[calc(100vh-6rem)] lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <SceneArt scene="mountain" accent="peacock" seed="rishikesh" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute bottom-12 left-10 max-w-sm text-cream">
          <p className="font-display text-3xl font-medium">Welcome back.</p>
          <p className="mt-2 text-cream/70">Your Trip Bucket and Wishlist pick up right where you left them.</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-medium text-ink dark:text-cream">Log in</h1>
          <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">
            Demo authentication only — your account lives in this browser's storage.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="block">
              <span className="text-xs font-medium text-ink/50 dark:text-cream/50">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="vv-select mt-1.5"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-ink/50 dark:text-cream/50">Password</span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="vv-select mt-1.5"
                placeholder="••••••••"
              />
            </label>

            {error && <p className="text-sm text-maroon-500">{error}</p>}

            <button type="submit" className="w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-cream dark:bg-cream dark:text-ink">
              Log in
            </button>
          </form>

          <p className="mt-6 text-sm text-ink/60 dark:text-cream/60">
            New here?{' '}
            <Link to="/signup" className="font-medium text-ink underline dark:text-cream">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
