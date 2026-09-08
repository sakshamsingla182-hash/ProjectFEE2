import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ value, suffix = '', label, duration = 1400 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display text-4xl sm:text-5xl font-medium text-cream">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-cream/60">{label}</div>
    </div>
  )
}
