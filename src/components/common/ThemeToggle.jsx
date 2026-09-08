import { useTheme } from '../../context/ThemeContext.jsx'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={`relative flex h-9 w-16 items-center rounded-full border border-ink/15 dark:border-cream/20 bg-cream-soft dark:bg-ink-softer transition-colors ${className}`}
    >
      <span
        className={`absolute top-1 h-7 w-7 rounded-full bg-ink dark:bg-saffron-300 shadow transition-transform duration-300 ease-out flex items-center justify-center text-[11px] ${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
