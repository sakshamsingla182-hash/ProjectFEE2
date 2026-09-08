export default function Loader({ label = 'Loading' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-ink/60 dark:text-cream/60">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
      <span className="text-sm">{label}…</span>
    </div>
  )
}
//Loader component banata hai; label prop leta hai, default value "Loading" hai.
// Props: label
// Default prop: label = 'Loading'
// Tailwind animation: animate-spin
// Reusable component: Different pages par same loader use ho sakta hai.