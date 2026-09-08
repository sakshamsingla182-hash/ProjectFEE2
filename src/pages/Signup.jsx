import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import SceneArt from '../components/common/SceneArt.jsx'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 4) {
      setError('Password should be at least 4 characters.')
      return
    }
    const result = signup({ name, email, password })
    if (result.success) {
      navigate('/trip-planner')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className="grid min-h-[calc(100vh-6rem)] lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-medium text-ink dark:text-cream">Create an account</h1>
          <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">
            Demo authentication only — nothing is sent anywhere, it's saved to this browser.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="block">
              <span className="text-xs font-medium text-ink/50 dark:text-cream/50">Full name</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="vv-select mt-1.5"
                placeholder="Ananya Rao"
              />
            </label>
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
              Sign up
            </button>
          </form>

          <p className="mt-6 text-sm text-ink/60 dark:text-cream/60">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-ink underline dark:text-cream">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="relative hidden overflow-hidden lg:block">
        <SceneArt scene="desert" accent="maroon" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute bottom-12 right-10 max-w-sm text-right text-cream">
          <p className="font-display text-3xl font-medium">75 cities are waiting.</p>
          <p className="mt-2 text-cream/70">Sign up to unlock the full Trip Planner and start building an itinerary-free plan.</p>
        </div>
      </div>
    </div>
  )
}
