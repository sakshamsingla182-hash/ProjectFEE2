import { createContext, useContext, useMemo, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [items, setItems] = useLocalStorage('vv-wishlist', [])

  const toggleWishlist = useCallback(
    (item) => {
      setItems((prev) => {
        const exists = prev.some((p) => p.id === item.id)
        if (exists) return prev.filter((p) => p.id !== item.id)
        return [...prev, { ...item, addedAt: Date.now() }]
      })
    },
    [setItems]
  )

  const removeItem = useCallback(
    (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
    [setItems]
  )

  const isWishlisted = useCallback((id) => items.some((p) => p.id === id), [items])

  const value = useMemo(
    () => ({ items, count: items.length, toggleWishlist, removeItem, isWishlisted }),
    [items, toggleWishlist, removeItem, isWishlisted]
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
