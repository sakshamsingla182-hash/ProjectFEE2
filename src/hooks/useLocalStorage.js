import { useState, useEffect, useCallback } from 'react'

/**
 * Persists a piece of state to localStorage under `key`.
 * Falls back to `initialValue` when nothing is stored yet or JSON parsing fails.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // storage unavailable (e.g. private browsing quota) — fail silently
    }
  }, [key, value])

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      // ignore
    }
    setValue(initialValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return [value, setValue, remove]
}
