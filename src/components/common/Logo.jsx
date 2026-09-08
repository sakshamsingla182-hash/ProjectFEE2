export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 2 L18 12 L26 14 L18 16 L14 26 L10 16 L2 14 L10 12 Z"
          fill="currentColor"
        />
      </svg>
      <span className="tracking-tight">
        Voyage<span className="italic font-medium"> Verse</span>
      </span>
    </span>
  )
}
//Logo.jsx ek reusable component hai, mainly Navbar.jsx jaise components mein use hoga: