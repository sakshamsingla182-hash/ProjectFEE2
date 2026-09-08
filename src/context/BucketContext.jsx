import { createContext, useContext, useMemo, useCallback, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const BucketContext = createContext(null)

export function BucketProvider({ children }) {
  const [items, setItems] = useLocalStorage('vv-trip-bucket', [])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback(
    (item) => {
      setItems((prev) => {
        if (prev.some((p) => p.id === item.id)) return prev
        return [...prev, { travelers: 1, days: 1, ...item, addedAt: Date.now() }]
      })
      setIsOpen(true)
    },
    [setItems]
  )

  const removeItem = useCallback(
    (id) => {
      setItems((prev) => prev.filter((p) => p.id !== id))
    },
    [setItems]
  )

  const clearBucket = useCallback(() => setItems([]), [setItems])

  const isInBucket = useCallback((id) => items.some((p) => p.id === id), [items])

  const openBucket = useCallback(() => setIsOpen(true), [])
  const closeBucket = useCallback(() => setIsOpen(false), [])
  const toggleBucket = useCallback(() => setIsOpen((o) => !o), [])

  const totalCost = useMemo(
    () => items.reduce((sum, item) => sum + (item.cost || 0), 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      totalCost,
      addItem,
      removeItem,
      clearBucket,
      isInBucket,
      isOpen,
      openBucket,
      closeBucket,
      toggleBucket,
    }),
    [items, totalCost, addItem, removeItem, clearBucket, isInBucket, isOpen, openBucket, closeBucket, toggleBucket]
  )

  return <BucketContext.Provider value={value}>{children}</BucketContext.Provider>
}

export function useBucket() {
  const ctx = useContext(BucketContext)
  if (!ctx) throw new Error('useBucket must be used within BucketProvider')
  return ctx
}
