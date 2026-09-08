import { useState } from 'react'
import Hero from '../components/home/Hero.jsx'
import MagicLuxuryPanel from '../components/home/MagicLuxuryPanel.jsx'
import StatesShowcase from '../components/home/StatesShowcase.jsx'
import ReviewsSection from '../components/home/ReviewsSection.jsx'
import { Link } from 'react-router-dom'
import SceneArt from '../components/common/SceneArt.jsx'

export default function Home() {
  const [panel, setPanel] = useState(null) // 'magic' | 'luxury' | null

  return (
    <div>
      <Hero onMagic={() => setPanel('magic')} onLuxury={() => setPanel('luxury')} />

      <StatesShowcase />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureTile
            scene="mountain"
            accent="peacock"
            imageSeed="manali"
            title="Real cost estimates"
            body="Every city carries budget, standard and premium daily rates, so the numbers change as your plan does."
          />
          <FeatureTile
            scene="desert"
            accent="saffron"
            imageSeed="jaisalmer"
            title="75 cities, fully detailed"
            body="Attractions, history, weather by season, how to reach and how to get around — for every single city."
          />
          <FeatureTile
            scene="backwater"
            accent="maroon"
            imageSeed="alappuzha"
            title="One bucket for everything"
            body="States, cities, flights, and your Magic or Luxury pick, all in one running trip total."
          />
        </div>
      </section>

      <ReviewsSection />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-ink px-8 py-14 text-center text-cream sm:px-14">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Ready to see where this goes?</h2>
          <p className="max-w-md text-cream/70">
            Start with a state, a city, or let the Magic trip generator pick a starting point for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/explore" className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink">
              Explore India
            </Link>
            <Link
              to="/trip-planner"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10"
            >
              Open Trip Planner
            </Link>
          </div>
        </div>
      </section>

      <MagicLuxuryPanel mode="magic" open={panel === 'magic'} onClose={() => setPanel(null)} />
      <MagicLuxuryPanel mode="luxury" open={panel === 'luxury'} onClose={() => setPanel(null)} />
    </div>
  )
}

function FeatureTile({ scene, accent, imageSeed, title, body }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-cream/10">
      <div className="h-28 w-full">
        <SceneArt scene={scene} accent={accent} seed={imageSeed} className="h-full w-full" />
      </div>
      <div className="bg-white p-5 dark:bg-ink-soft">
        <h3 className="font-display text-lg text-ink dark:text-cream">{title}</h3>
        <p className="mt-1.5 text-sm text-ink/60 dark:text-cream/60">{body}</p>
      </div>
    </div>
  )
}
