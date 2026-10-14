import { useState, useEffect } from 'react'
import { fetchUnsplashImage } from '../utils/unsplash.js'

// Returns { url, loading } for a given Unsplash search query
export function useUnsplashImage(query) {
const [url, setUrl] = useState(null)
const [loading, setLoading] = useState(Boolean(query))

useEffect(() => {
if (!query) { setLoading(false); return }
let cancelled = false
setLoading(true)
fetchUnsplashImage(query).then((u) => {
if (!cancelled) { setUrl(u); setLoading(false) }
})
return () => { cancelled = true }
}, [query])

return { url, loading }
}