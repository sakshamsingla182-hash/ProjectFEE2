import { useParams, Link, Navigate } from 'react-router-dom'
import { getState } from '../data/destinations.js'
import SceneArt from '../components/common/SceneArt.jsx'
import CityCard from '../components/destination/CityCard.jsx'
import { Pill } from '../components/common/Badges.jsx'

export default function StateCities() {
  const { stateId } = useParams()
  const state = getState(stateId)

  if (!state) return <Navigate to="/404" replace />

  return (
    <div>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-80">
          <SceneArt scene={state.scene} accent={state.accent} seed={state.id} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
          <Link to="/explore" className="text-sm text-cream/70 hover:text-cream">
            ← Back to Explore India
          </Link>
          <Pill tone={state.accent} className="mt-5 w-fit backdrop-blur">{state.region}</Pill>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium text-cream sm:text-6xl">{state.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-cream/70">{state.tagline}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60">{state.blurb}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl text-ink dark:text-cream sm:text-3xl">
            Five cities worth the trip
          </h2>
          <span className="text-sm text-ink/50 dark:text-cream/50">{state.cities.length} of {state.cities.length}</span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {state.cities.map((city) => (
            <CityCard
              key={city.id}
              city={{ ...city, stateName: state.name }}
              stateId={state.id}
              accent={state.accent}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
