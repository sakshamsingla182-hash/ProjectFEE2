
// Unsplash image fetcher with module-level cache so we never fetch the same query twice
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
const cache = new Map()

export async function fetchUnsplashImage(query) {
  if (!query || !ACCESS_KEY) return null
  if (cache.has(query)) return cache.get(query)

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&client_id=${ACCESS_KEY}`
    )
    if (!res.ok) { cache.set(query, null); return null }
    const data = await res.json()
    const url = data.results?.[0]?.urls?.regular || null
    cache.set(query, url)
    return url
  } catch {
    cache.set(query, null)
    return null
  }
}