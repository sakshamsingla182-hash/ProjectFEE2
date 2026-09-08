import { Link } from 'react-router-dom'
import SceneArt from '../components/common/SceneArt.jsx'

const PRINCIPLES = [
  {
    title: 'Real numbers, clearly labelled',
    body: 'Every price on the site is an estimate built from typical regional costs, always marked as such — never a live quote.',
  },
  {
    title: 'Depth over breadth',
    body: 'Fifteen states, five cities each — chosen deliberately rather than an exhaustive, shallow list of everywhere.',
  },
  {
    title: 'Planning, not scheduling',
    body: 'Voyage Verse helps you decide where to go and what it might cost, and stops short of locking you into a day-by-day itinerary.',
  },
]

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-70">
          <SceneArt scene="heritage" accent="peacock" seed="taj-mahal-india" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="text-sm font-medium text-saffron-300">About Voyage Verse</p>
          <h1 className="mt-3 font-display text-4xl font-medium text-cream sm:text-5xl">
            Explore India. Discover your journey.
          </h1>
          <p className="mt-5 text-lg text-cream/70">
            A concept trip-planning project covering 15 Indian states and 75 cities, built to make research and
            budgeting feel less like fifteen open browser tabs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-2xl text-ink dark:text-cream">Why Voyage Verse exists</h2>
        <p className="mt-4 leading-relaxed text-ink/70 dark:text-cream/70">
          Most trip planning in India starts the same way: a dozen browser tabs, a handful of blog posts of wildly
          differing quality, and a spreadsheet nobody quite finishes. Voyage Verse tries to shrink that down to one
          place — a consistent, comparable set of details for 75 cities across 15 states, plus a calculator that
          turns "roughly how much will this cost" into an actual number.
        </p>
        <p className="mt-4 leading-relaxed text-ink/70 dark:text-cream/70">
          It\u2019s not a booking platform. There\u2019s no live inventory, no payment processing, and no itinerary
          builder — deliberately. The goal is the research and budgeting phase of a trip, done well, with a Wishlist
          for the places you\u2019re still deciding on and a Trip Bucket for the ones you\u2019ve settled on.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 dark:border-cream/10">
          <div className="h-64 sm:h-80">
            <SceneArt scene="urban" accent="saffron" seed="india-gate-delhi" className="h-full w-full" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink/10 p-5 dark:border-cream/10">
              <h3 className="font-display text-base text-ink dark:text-cream">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/explore" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream dark:bg-cream dark:text-ink">
            Explore the 15 states
          </Link>
          <Link to="/faq" className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink dark:border-cream/20 dark:text-cream">
            Read the FAQ
          </Link>
        </div>
      </section>
    </div>
  )
}
