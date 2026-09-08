import { REVIEWS } from '../../data/reviewsData.js'

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-cream sm:text-4xl">
            Planned with Voyage Verse
          </h2>
          <p className="mt-2 max-w-md text-ink/60 dark:text-cream/60">
            A handful of trips people put together using the planner and cost calculator.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <figure
            key={review.id}
            className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink-soft"
          >
            <div>
              <div className="flex gap-0.5 text-saffron-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < review.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/80 dark:text-cream/80">
                "{review.quote}"
              </blockquote>
            </div>
            <figcaption className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-xs dark:border-cream/10">
              <span className="font-medium text-ink dark:text-cream">{review.name}</span>
              <span className="text-ink/50 dark:text-cream/50">{review.trip}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
