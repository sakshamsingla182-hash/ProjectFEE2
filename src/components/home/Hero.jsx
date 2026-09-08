import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SceneArt from '../common/SceneArt.jsx'
import SearchBar from '../common/SearchBar.jsx'
import StatCounter from '../common/StatCounter.jsx'

export default function Hero({ onMagic, onLuxury }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (value) => {
    navigate(value ? `/explore?q=${encodeURIComponent(value)}` : '/explore')
  }

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-70">
        <SceneArt scene="heritage" accent="peacock" seed="india-gateway-mumbai" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-saffron-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-peacock-300/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-24 text-center sm:pt-32">
        <span className="animate-fade-up rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-medium text-cream/80 backdrop-blur">
          15 states · 75 cities, hand-picked
        </span>

        <h1 className="animate-fade-up mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-cream sm:text-7xl [animation-delay:100ms]">
          India is <span className="italic text-saffron-300">extraordinary.</span>
        </h1>

        <p className="animate-fade-up mt-5 max-w-xl text-balance text-lg text-cream/70 [animation-delay:200ms]">
          Voyage Verse maps out the states, the cities, and what a real trip between them actually costs — so the
          only thing left to do is go.
        </p>

        <div className="animate-fade-up mt-9 w-full max-w-xl [animation-delay:300ms]">
          <SearchBar value={query} onChange={setQuery} onSubmit={handleSubmit} />
        </div>

        <div className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-3 [animation-delay:400ms]">
          <button
            type="button"
            onClick={() => navigate('/explore')}
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Explore India
          </button>
          <button
            type="button"
            onClick={onMagic}
            className="rounded-full border border-cream/30 bg-cream/10 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur transition-colors hover:bg-cream/20"
          >
            ✨ Magic trip
          </button>
          <button
            type="button"
            onClick={onLuxury}
            className="rounded-full border border-cream/30 bg-cream/10 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur transition-colors hover:bg-cream/20"
          >
            👑 Luxury trip
          </button>
        </div>

        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-y-8 border-t border-cream/15 pt-10 sm:grid-cols-4">
          <StatCounter value={15} label="Destinations" />
          <StatCounter value={75} label="Cities" />
          <StatCounter value={100} suffix="+" label="Places" />
          <div className="text-center sm:text-left">
            <div className="font-display text-4xl font-medium text-cream sm:text-5xl">One</div>
            <div className="mt-1 text-sm text-cream/60">Incredible journey</div>
          </div>
        </div>
      </div>
    </section>
  )
}
