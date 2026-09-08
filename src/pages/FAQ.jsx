import { FAQS } from '../data/reviewsData.js'
import FAQAccordion from '../components/faq/FAQAccordion.jsx'

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-10 sm:pt-14">
      <p className="text-sm font-medium text-saffron-500">FAQ</p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink dark:text-cream sm:text-5xl">
        View all frequently asked questions
      </h1>
      <p className="mt-3 text-ink/60 dark:text-cream/60">
        Everything about how estimates, accounts and saved trips work on Voyage Verse.
      </p>

      <div className="mt-10">
        <FAQAccordion faqs={FAQS} />
      </div>
    </div>
  )
}
