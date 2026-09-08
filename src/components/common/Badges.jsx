export function Pill({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'bg-ink/5 text-ink dark:bg-cream/10 dark:text-cream',
    saffron: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-700/30 dark:text-saffron-200',
    peacock: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-700/30 dark:text-peacock-200',
    maroon: 'bg-maroon-400/15 text-maroon-600 dark:text-maroon-400',
  }
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone] || tones.default} ${className}`}>
      {children}
    </span>
  )
}

export function EstimatedPrice({ amount, per = '', className = '' }) {
  return (
    <span className={className}>
      <span className="font-display text-lg font-medium">
        ₹{Number(amount).toLocaleString('en-IN')}
      </span>
      {per && <span className="text-xs text-ink/50 dark:text-cream/50"> {per}</span>}
      <span className="ml-1.5 text-[11px] text-ink/40 dark:text-cream/40">(estimated)</span>
    </span>
  )
}
