import { Link } from 'react-router-dom'
import SceneArt from '../components/common/SceneArt.jsx'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden bg-ink px-6">
      <div className="absolute inset-0 opacity-50">
        <SceneArt scene="desert" accent="maroon" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="relative text-center">
        <p className="font-display text-8xl font-medium text-cream sm:text-9xl">404</p>
        <p className="mt-4 text-lg text-cream/70">This road doesnt lead anywhere on the map yet.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink"
        >
          Back to base camp
        </Link>
      </div>
    </div>
  )
}
