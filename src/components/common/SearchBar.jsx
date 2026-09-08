import { useRef, useEffect } from 'react'

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search a state or destination…',
  onSubmit,
  autoFocus = false,
  className = '',
}) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  useEffect(() => {
    function handleSlash(e) {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleSlash)
    return () => window.removeEventListener('keydown', handleSlash)
  }, [])

  return (
    <form
      className={`group relative flex items-center ${className}`}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.(value)
      }}
    >
      <svg
        className="pointer-events-none absolute left-5 h-5 w-5 text-ink/40 dark:text-cream/40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-ink/10 bg-white/90 py-4 pl-12 pr-5 text-ink shadow-lift placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:border-cream/15 dark:bg-ink-soft/90 dark:text-cream dark:placeholder:text-cream/40"
      />
    </form>
  )
}
