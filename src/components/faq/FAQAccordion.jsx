import { useState } from 'react'

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white dark:divide-cream/10 dark:border-cream/10 dark:bg-ink-soft">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id
        return (
          <div key={faq.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="font-display text-base text-ink dark:text-cream">{faq.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink transition-transform duration-300 dark:bg-cream/10 dark:text-cream ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-ink/65 dark:text-cream/65 sm:px-6">
                {faq.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
