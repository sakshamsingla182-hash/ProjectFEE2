import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBucket } from '../../context/BucketContext.jsx'
import SceneArt from '../common/SceneArt.jsx'
import { EstimatedPrice, Pill } from '../common/Badges.jsx'

// Added: discount categories and coupon offers for the Trip Bucket.
const DISCOUNT_CATEGORIES = [
  { value: 'student', label: 'Students', discount: 30 },
  { value: 'senior', label: 'Senior citizens', discount: 15 },
  { value: 'business', label: 'Business trips', discount: 10 },
]

const COUPON_OFFERS = [
  { code: 'VOYAGE30', label: 'Student offer', description: '30% off for students', discount: 30 },
  { code: 'HDFC10', label: 'HDFC Credit Card', description: '10% off with HDFC Credit Card', discount: 10 },
  { code: 'SBI10', label: 'SBI Credit Card', description: '10% off with SBI Credit Card', discount: 10 },
  { code: 'AXIS10', label: 'Axis Credit Card', description: '10% off with Axis Credit Card', discount: 10 },
  { code: 'PAYTM5', label: 'Paytm offer', description: '5% off with Paytm', discount: 5 },
]

// Accepts common variants such as "voyage30%" and "HDFC credit card".
const normalizeCouponCode = (value) => value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
const COUPON_ALIASES = {
  VOYAGE30: 'VOYAGE30',
  VOYAGE30FORSTUDENTS: 'VOYAGE30',
  HDFC: 'HDFC10',
  HDFC10: 'HDFC10',
  HDFCCREDITCARD: 'HDFC10',
  SBI: 'SBI10',
  SBI10: 'SBI10',
  SBICREDITCARD: 'SBI10',
  AXIS: 'AXIS10',
  AXIS10: 'AXIS10',
  AXISCREDITCARD: 'AXIS10',
  PAYTM: 'PAYTM5',
  PAYTM5: 'PAYTM5',
}

export default function TripBucketDrawer() {
  const { items, isOpen, closeBucket, removeItem, totalCost, clearBucket } = useBucket()
  const [couponInput, setCouponInput] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [discountCategory, setDiscountCategory] = useState('')
  const [couponMessage, setCouponMessage] = useState('')
  const [couponMessageType, setCouponMessageType] = useState('success')

  // Added: reset offers when the bucket becomes empty so they don't carry over.
  useEffect(() => {
    if (items.length === 0) {
      setCouponInput('')
      setAppliedCoupon(null)
      setDiscountCategory('')
      setCouponMessage('')
    }
  }, [items.length])

  const selectedCategory = DISCOUNT_CATEGORIES.find((category) => category.value === discountCategory)
  const categoryDiscount = selectedCategory?.discount ?? 0
  const couponDiscount = appliedCoupon?.discount ?? 0
  const discountRate = Math.max(categoryDiscount, couponDiscount)
  const discountAmount = Math.round((totalCost * discountRate) / 100)
  const discountedTotal = Math.max(0, totalCost - discountAmount)
  const activeDiscountLabel = categoryDiscount >= couponDiscount
    ? selectedCategory?.label
    : appliedCoupon?.label

  const handleApplyCoupon = (event) => {
    event.preventDefault()
    const normalizedCode = normalizeCouponCode(couponInput)
    const canonicalCode = COUPON_ALIASES[normalizedCode]
    const coupon = COUPON_OFFERS.find((offer) => offer.code === canonicalCode)

    if (!normalizedCode || !coupon) {
      setAppliedCoupon(null)
      setCouponMessage('Please enter a valid code from the available offers.')
      setCouponMessageType('error')
      return
    }

    if (coupon.code === 'VOYAGE30' && discountCategory !== 'student') {
      setAppliedCoupon(null)
      setCouponMessage('VOYAGE30 is for students. Select “Students” in the offer category first.')
      setCouponMessageType('error')
      return
    }

    setAppliedCoupon(coupon)
    setCouponInput(coupon.code)
    setCouponMessage(`${coupon.code} accepted. Only the highest eligible discount is applied; offers cannot be combined.`)
    setCouponMessageType('success')
  }

  // Added: clicking a displayed coupon applies it immediately.
  const handleCouponSelect = (coupon) => {
    if (coupon.code === 'VOYAGE30') setDiscountCategory('student')
    setAppliedCoupon(coupon)
    setCouponInput(coupon.code)
    setCouponMessage(`${coupon.code} accepted. Only the highest eligible discount is applied; offers cannot be combined.`)
    setCouponMessageType('success')
  }

  const handleCategoryChange = (value) => {
    setDiscountCategory(value)
    if (appliedCoupon?.code === 'VOYAGE30' && value !== 'student') {
      setAppliedCoupon(null)
      setCouponMessage('VOYAGE30 was removed because it is a student-only offer.')
      setCouponMessageType('error')
    }
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeBucket}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-md transform flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out dark:bg-ink-soft ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 dark:border-cream/10">
          <div>
            <h2 className="font-display text-xl text-ink dark:text-cream">Trip Bucket</h2>
            <p className="text-xs text-ink/50 dark:text-cream/50">{items.length} item{items.length === 1 ? '' : 's'} saved</p>
          </div>
          <button
            type="button"
            onClick={closeBucket}
            aria-label="Close trip bucket"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink dark:bg-cream/10 dark:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-ink/50 dark:text-cream/50">
              <span className="text-4xl">🧳</span>
              <p className="mt-4 max-w-[220px] text-sm">
                Nothing here yet. Add states, cities, flights or a Magic / Luxury trip to start building your journey.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl border border-ink/10 p-3 dark:border-cream/10">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl text-cream">
                    <SceneArt scene={item.scene} accent={item.accent} seed={item.id} className="h-full w-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate font-display text-sm text-ink dark:text-cream">{item.title}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.title} from bucket`}
                        className="shrink-0 text-ink/40 hover:text-maroon-500 dark:text-cream/40"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-ink/50 dark:text-cream/50">{item.subtitle}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <Pill tone={item.accent}>{item.type}</Pill>
                      {typeof item.cost === 'number' && <EstimatedPrice amount={item.cost} className="text-ink dark:text-cream" />}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Added: discount category dropdown, coupon entry, and clickable offers. */}
          {items.length > 0 && (
            <section className="mt-6 rounded-2xl border border-ink/10 bg-white/70 p-4 dark:border-cream/10 dark:bg-ink/5">
              <h3 className="font-display text-base text-ink dark:text-cream">Discounts &amp; coupons</h3>
              <p className="mt-1 text-xs leading-5 text-ink/55 dark:text-cream/55">
                Choose an eligible category or enter a coupon code. Offers cannot be combined.
              </p>

              <label className="mt-4 block">
                <span className="text-xs font-medium text-ink/60 dark:text-cream/60">Discount category</span>
                <select
                  value={discountCategory}
                  onChange={(event) => handleCategoryChange(event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-peacock-400 dark:border-cream/20 dark:bg-ink-soft dark:text-cream"
                >
                  <option value="">No category offer</option>
                  {DISCOUNT_CATEGORIES.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label} — {category.discount}% off
                    </option>
                  ))}
                </select>
              </label>

              <form onSubmit={handleApplyCoupon} className="mt-4">
                <label htmlFor="trip-bucket-coupon" className="block text-xs font-medium text-ink/60 dark:text-cream/60">
                  Coupon code
                </label>
                <div className="mt-1.5 flex gap-2">
                  <input
                    id="trip-bucket-coupon"
                    type="text"
                    value={couponInput}
                    onChange={(event) => {
                      setCouponInput(event.target.value)
                      setCouponMessage('')
                    }}
                    placeholder="Enter coupon code"
                    autoComplete="off"
                    className="min-w-0 flex-1 rounded-xl border border-ink/15 bg-white px-3 py-2.5 text-sm uppercase text-ink outline-none placeholder:normal-case placeholder:text-ink/35 focus:border-peacock-400 dark:border-cream/20 dark:bg-ink-soft dark:text-cream dark:placeholder:text-cream/35"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-opacity hover:opacity-90 dark:bg-cream dark:text-ink"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <div className="mt-4">
                <p className="text-xs font-medium text-ink/60 dark:text-cream/60">Available coupons · tap to apply</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {COUPON_OFFERS.map((coupon) => (
                    <button
                      key={coupon.code}
                      type="button"
                      onClick={() => handleCouponSelect(coupon)}
                      title={coupon.description}
                      aria-label={`Apply ${coupon.code}: ${coupon.description}`}
                      className={`rounded-xl border px-3 py-2 text-left transition-colors ${
                        appliedCoupon?.code === coupon.code
                          ? 'border-peacock-400 bg-peacock-100 text-peacock-700 dark:bg-peacock-700/30 dark:text-peacock-200'
                          : 'border-ink/10 bg-white text-ink hover:border-peacock-400 dark:border-cream/10 dark:bg-ink-soft dark:text-cream'
                      }`}
                    >
                      <span className="block text-xs font-bold tracking-wide">{coupon.code}</span>
                      <span className="mt-0.5 block text-[11px] opacity-75">{coupon.label}</span>
                      <span className="mt-0.5 block text-[11px] font-semibold">{coupon.discount}% off</span>
                    </button>
                  ))}
                </div>
              </div>

              {couponMessage && (
                <p
                  role="status"
                  className={`mt-3 text-xs leading-5 ${
                    couponMessageType === 'error'
                      ? 'text-maroon-500 dark:text-maroon-400'
                      : 'text-peacock-600 dark:text-peacock-300'
                  }`}
                >
                  {couponMessage}
                </p>
              )}
            </section>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5 dark:border-cream/10">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-ink/60 dark:text-cream/60">Total estimated cost</span>
              <div className="text-right">
                {discountRate > 0 && (
                  <p className="text-xs text-ink/40 line-through dark:text-cream/40">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </p>
                )}
                <EstimatedPrice amount={discountedTotal} className="text-ink dark:text-cream" />
              </div>
            </div>
            {discountRate > 0 && (
              <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                <span className="text-peacock-600 dark:text-peacock-300">
                  {activeDiscountLabel || appliedCoupon?.code} discount ({discountRate}%)
                </span>
                <span className="font-semibold text-peacock-600 dark:text-peacock-300">
                  −₹{discountAmount.toLocaleString('en-IN')}
                </span>
              </div>
            )}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={clearBucket}
                className="flex-1 rounded-full border border-ink/15 py-3 text-sm font-medium text-ink dark:border-cream/20 dark:text-cream"
              >
                Clear all
              </button>
              <Link
                to="/trip-planner"
                onClick={closeBucket}
                className="flex-1 rounded-full bg-ink py-3 text-center text-sm font-medium text-cream dark:bg-cream dark:text-ink"
              >
                Plan this trip
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
