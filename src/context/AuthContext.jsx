import { createContext, useContext, useMemo, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const AuthContext = createContext(null)

// Demo-only authentication. Accounts are stored in localStorage on this device;
// nothing is sent to a server. Good enough to gate the Trip Planner for the syllabus demo.
export function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage('vv-users', [])
  const [currentUser, setCurrentUser] = useLocalStorage('vv-current-user', null)

  const signup = useCallback(
    ({ name, email, password }) => {
      const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
      if (existing) return { success: false, error: 'An account with this email already exists.' }
      const newUser = { name, email, password }
      setUsers((prev) => [...prev, newUser])
      setCurrentUser({ name, email })
      return { success: true }
    },
    [users, setUsers, setCurrentUser]
  )

  const login = useCallback(
    ({ email, password }) => {
      const match = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      )
      if (!match) return { success: false, error: 'Incorrect email or password.' }
      setCurrentUser({ name: match.name, email: match.email })
      return { success: true }
    },
    [users, setCurrentUser]
  )

  const logout = useCallback(() => setCurrentUser(null), [setCurrentUser])

  const value = useMemo(
    () => ({ currentUser, isAuthenticated: Boolean(currentUser), signup, login, logout }),
    [currentUser, signup, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
