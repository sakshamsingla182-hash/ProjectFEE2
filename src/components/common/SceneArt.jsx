import { getDestinationImage } from '../../data/destinationImages.js'
import { useEffect, useState } from 'react'
//Ye file destination ke liye image/illustration generate aur display karti hai. Isme pehle Wikimedia se real image fetch karne ki try hoti hai; agar image fail/missing ho, to SVG illustration fallback milta hai.
// SceneArt renders a layered, illustrative visual for a destination based on its
// landscape "scene" type (mountain, desert, backwater, etc). This is a deliberate
// choice, not a placeholder: Voyage Verse cannot verify licensed, per-city stock
// photography from this environment, so rather than risk broken or mismatched
// images (which the brief explicitly forbids), every destination gets an original,
// on-brand illustration keyed to its actual landscape and state accent colour.

const ACCENTS = {
  saffron: { a: '#E29B34', b: '#7E4F14', c: '#FBE6C2' },
  peacock: { a: '#0F6E67', b: '#062E2B', c: '#BCE0DB' },
  maroon: { a: '#9C3159', b: '#3E0E24', c: '#F5CC85' },
}

function grad(id, accent) {
  const { a, b } = ACCENTS[accent] || ACCENTS.saffron
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={a} stopOpacity="0.9" />
      <stop offset="100%" stopColor={b} stopOpacity="0.95" />
    </linearGradient>
  )
}

function Grain({ id }) {
  return (
    <filter id={id}>
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.035 0" />
    </filter>
  )
}

const FAMILY = {
  mountain: 'mountain',
  valley: 'mountain',
  lake: 'water',
  riverside: 'water',
  backwater: 'water',
  desert: 'desert',
  beach: 'beach',
  'coastal-cliff': 'beach',
  heritage: 'heritage',
  spiritual: 'heritage',
  wildlife: 'wildlife',
  tea: 'tea',
  urban: 'urban',
}

function MountainScene({ gid, sun }) {
  return (
    <>
      <circle cx="320" cy="70" r="34" fill={sun} opacity="0.85" />
      <path d="M0,230 L70,120 L120,180 L190,80 L260,190 L320,140 L400,230 Z" fill="currentColor" opacity="0.55" />
      <path d="M0,260 L90,160 L150,210 L230,110 L300,220 L400,170 L400,300 L0,300 Z" fill="currentColor" opacity="0.85" />
      <path d="M0,300 L60,240 L140,280 L220,220 L310,270 L400,230 L400,300 Z" fill="currentColor" />
    </>
  )
}

function WaterScene({ gid, sun }) {
  return (
    <>
      <circle cx="90" cy="70" r="30" fill={sun} opacity="0.85" />
      <path d="M0,150 L60,110 L130,150 L210,100 L290,150 L400,115 L400,300 L0,300 Z" fill="currentColor" opacity="0.5" />
      <path d="M0,190 Q50,170 100,190 T200,190 T300,190 T400,190 L400,300 L0,300 Z" fill="currentColor" opacity="0.85" />
      <path d="M0,235 Q60,215 120,235 T240,235 T360,235 L400,235 L400,300 L0,300 Z" fill="currentColor" />
      <path d="M0,260 Q50,250 100,260 T200,260 T300,260 T400,260" stroke={sun} strokeOpacity="0.25" strokeWidth="2" fill="none" />
    </>
  )
}

function DesertScene({ gid, sun }) {
  return (
    <>
      <circle cx="330" cy="80" r="38" fill={sun} opacity="0.9" />
      <path d="M0,220 Q80,160 170,210 T400,190 L400,300 L0,300 Z" fill="currentColor" opacity="0.55" />
      <path d="M0,250 Q100,190 200,240 T400,230 L400,300 L0,300 Z" fill="currentColor" opacity="0.8" />
      <path d="M0,280 Q90,235 190,270 T400,260 L400,300 L0,300 Z" fill="currentColor" />
    </>
  )
}

function BeachScene({ gid, sun }) {
  return (
    <>
      <circle cx="310" cy="90" r="32" fill={sun} opacity="0.85" />
      <rect x="0" y="0" width="400" height="170" fill="currentColor" opacity="0.25" />
      <path d="M0,190 Q60,170 120,190 T240,190 T360,190 L400,190 L400,300 L0,300 Z" fill="currentColor" opacity="0.7" />
      <path d="M0,230 Q70,205 140,230 T280,230 T400,222 L400,300 L0,300 Z" fill="currentColor" opacity="0.9" />
      <path d="M0,265 L400,255 L400,300 L0,300 Z" fill="currentColor" />
    </>
  )
}

function HeritageScene({ gid, sun }) {
  return (
    <>
      <circle cx="200" cy="60" r="26" fill={sun} opacity="0.8" />
      <path d="M120,300 L120,180 Q160,120 200,120 Q240,120 280,180 L280,300 Z" fill="currentColor" opacity="0.7" />
      <rect x="60" y="230" width="40" height="70" fill="currentColor" opacity="0.55" />
      <rect x="300" y="230" width="40" height="70" fill="currentColor" opacity="0.55" />
      <rect x="0" y="290" width="400" height="10" fill="currentColor" />
      <path d="M170,300 L170,220 A30,30 0 0 1 230,220 L230,300 Z" fill={sun} opacity="0.2" />
    </>
  )
}

function WildlifeScene({ gid, sun }) {
  return (
    <>
      <circle cx="330" cy="70" r="30" fill={sun} opacity="0.8" />
      <path d="M0,300 L0,190 Q40,150 80,190 Q100,150 140,190 Q170,140 210,190 Q240,150 280,190 Q320,150 360,190 Q380,170 400,190 L400,300 Z" fill="currentColor" opacity="0.55" />
      <path d="M0,300 L0,230 Q50,190 100,230 Q140,195 190,230 Q230,195 280,230 Q330,195 400,225 L400,300 Z" fill="currentColor" opacity="0.85" />
      <path d="M0,300 L0,265 Q60,240 130,265 Q200,240 270,265 Q330,245 400,262 L400,300 Z" fill="currentColor" />
    </>
  )
}

function TeaScene({ gid, sun }) {
  const rows = []
  for (let i = 0; i < 7; i++) {
    const y = 150 + i * 22
    rows.push(
      <path
        key={i}
        d={`M0,${y} Q50,${y - 14} 100,${y} T200,${y} T300,${y} T400,${y} L400,${y + 16} Q350,${y + 2} 300,${y + 16} T200,${y + 16} T100,${y + 16} T0,${y + 16} Z`}
        fill="currentColor"
        opacity={0.35 + i * 0.08}
      />
    )
  }
  return (
    <>
      <circle cx="90" cy="65" r="28" fill={sun} opacity="0.85" />
      {rows}
    </>
  )
}

function UrbanScene({ gid, sun }) {
  const bldgs = [
    [10, 150, 34], [54, 110, 40], [104, 170, 30], [144, 90, 46], [200, 140, 32],
    [242, 180, 28], [280, 100, 44], [334, 160, 30], [374, 120, 26],
  ]
  return (
    <>
      <circle cx="60" cy="60" r="24" fill={sun} opacity="0.75" />
      {bldgs.map(([x, h, w], i) => (
        <rect key={i} x={x} y={300 - h} width={w} height={h} fill="currentColor" opacity={0.55 + (i % 3) * 0.15} />
      ))}
    </>
  )
}

const RENDERERS = {
  mountain: MountainScene,
  water: WaterScene,
  desert: DesertScene,
  beach: BeachScene,
  heritage: HeritageScene,
  wildlife: WildlifeScene,
  tea: TeaScene,
  urban: UrbanScene,
}

const imageCache = new Map()

async function findWikimediaImage(query) {
  if (!query) return null
  if (query.startsWith('http://') || query.startsWith('https://')) return query
  if (imageCache.has(query)) return imageCache.get(query)

  const promise = fetch(
    `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url|mime&iiurlwidth=1200&format=json&origin=*`
  )
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      const pages = data?.query?.pages
      const page = pages ? Object.values(pages)[0] : null
      const info = page?.imageinfo?.[0]
      return info?.thumburl || info?.url || null
    })
    .catch(() => null)

  imageCache.set(query, promise)
  return promise
}

export default function SceneArt({ scene = 'mountain', accent = 'saffron', seed = '', className = '' }) {
  const query = getDestinationImage(seed)
  const [photoUrl, setPhotoUrl] = useState(null)
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    let active = true
    setPhotoUrl(null)
    setPhotoFailed(false)
    findWikimediaImage(query).then((url) => {
      if (active) setPhotoUrl(url)
    })
    return () => { active = false }
  }, [query])

  if (photoUrl && !photoFailed) {
    return (
      <img
        src={photoUrl}
        alt={`Travel photo of ${seed.replaceAll('-', ' ')}`}
        loading="lazy"
        decoding="async"
        className={`${className} object-cover`}
        onError={() => setPhotoFailed(true)}
      />
    )
  }

  const family = FAMILY[scene] || 'mountain'
  const Renderer = RENDERERS[family] || MountainScene
  const key = `${seed}-${scene}-${accent}`
  const h = seedFrom(key)
  const gid = `vv-grad-${accent}-${family}-${h}`
  const nid = `vv-noise-${accent}-${family}-${h}`
  const { c } = ACCENTS[accent] || ACCENTS.saffron
  const dx = (h % 61) - 30
  const scaleY = 0.94 + ((h >> 3) % 13) / 100

  return (
    <div className={`${className} relative overflow-hidden`}>
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Illustration of ${seed.replaceAll('-', ' ')}`}
      >
        <defs>
          {grad(gid, accent)}
          <Grain id={nid} />
        </defs>
        <rect width="400" height="300" fill={`url(#${gid})`} />
        <g
          style={{ color: c, transformOrigin: '200px 300px' }}
          transform={`translate(${dx}, 0) scale(1, ${scaleY})`}
        >
          <Renderer gid={gid} sun={c} />
        </g>
        <rect width="400" height="300" filter={`url(#${nid})`} opacity="0.5" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-3 pb-2 pt-8 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
        {seed.replaceAll('-', ' ')}
      </div>
    </div>
  )
}

function seedFrom(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h
}
