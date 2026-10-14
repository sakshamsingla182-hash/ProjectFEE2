const PHOTO = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`

export const ADVENTURE_CATEGORIES = [
  'All adventures',
  'Mountain',
  'Water',
  'Air',
  'Wildlife',
  'Desert',
  'Outdoor',
]

// These are curated estimates for discovery, not live operator quotations.
// Every destination below already exists in the 75-city Voyage Verse catalogue.
export const ADVENTURES = [
  {
    id: 'manali-paragliding', title: 'Paragliding above Solang Valley', stateId: 'himachal-pradesh', cityId: 'manali', city: 'Manali', state: 'Himachal Pradesh',
    category: 'Air', emoji: '🪂', price: 2500, duration: '15–30 min flight', difficulty: 'Beginner with instructor', season: 'April–June, September–October',
    description: 'Fly tandem above a Himalayan valley with an experienced pilot and sweeping mountain views.',
    image: PHOTO('photo-1755446133356-de5126699e37'), scene: 'mountain',
  },
  {
    id: 'shimla-ridge-hike', title: 'Shimla ridge and forest hike', stateId: 'himachal-pradesh', cityId: 'shimla', city: 'Shimla', state: 'Himachal Pradesh',
    category: 'Mountain', emoji: '🥾', price: 900, duration: '2–3 hours', difficulty: 'Easy to moderate', season: 'March–June, September–November',
    description: 'Follow established hillside paths around Shimla for forest air and mountain views; stay on marked trails in wet weather.',
    image: PHOTO('photo-1551632811-561732d1e306'), scene: 'mountain',
  },
  {
    id: 'dharamshala-triund', title: 'Triund ridge trek', stateId: 'himachal-pradesh', cityId: 'dharamshala', city: 'Dharamshala', state: 'Himachal Pradesh',
    category: 'Mountain', emoji: '🥾', price: 1800, duration: '1–2 days', difficulty: 'Moderate', season: 'March–June, September–November',
    description: 'Climb through oak and rhododendron forest to broad views of the Dhauladhar range.',
    image: PHOTO('photo-1551632811-561732d1e306'), scene: 'mountain',
  },
  {
    id: 'kasol-kheerganga', title: 'Kheerganga forest trek', stateId: 'himachal-pradesh', cityId: 'kasol', city: 'Kasol', state: 'Himachal Pradesh',
    category: 'Mountain', emoji: '🌲', price: 2200, duration: '1–2 days', difficulty: 'Moderate to challenging', season: 'April–June, September–October',
    description: 'Follow the Parvati Valley trail through pine forest and mountain villages with a local guide.',
    image: PHOTO('photo-1464822759023-fed622ff2c3b'), scene: 'valley',
  },
  {
    id: 'spiti-high-altitude-hike', title: 'High-altitude village hike', stateId: 'himachal-pradesh', cityId: 'spiti-valley', city: 'Spiti Valley', state: 'Himachal Pradesh',
    category: 'Mountain', emoji: '🏔️', price: 2500, duration: 'Half day', difficulty: 'Moderate; altitude awareness needed', season: 'June–September',
    description: 'Explore stark cold-desert trails and traditional villages at a measured pace; acclimatise before hiking.',
    image: PHOTO('photo-1519681393784-d120267933ba'), scene: 'mountain',
  },
  {
    id: 'rishikesh-rafting', title: 'Ganga white-water rafting', stateId: 'uttarakhand', cityId: 'rishikesh', city: 'Rishikesh', state: 'Uttarakhand',
    category: 'Water', emoji: '🌊', price: 1500, duration: '2–4 hours', difficulty: 'Beginner to intermediate routes', season: 'Usually September–June; monsoon closures apply',
    description: 'Ride guided rapids on the Ganga with a certified river team and route selected for conditions.',
    image: 'https://c.ndtvimg.com/2025-07/6lq5dc88_travel_625x300_30_July_25.jpg', scene: 'riverside',
  },
  {
    id: 'pahalgam-valley-trek', title: 'Aru Valley guided trek', stateId: 'kashmir', cityId: 'pahalgam', city: 'Pahalgam', state: 'Kashmir',
    category: 'Mountain', emoji: '🥾', price: 1800, duration: '3–5 hours', difficulty: 'Easy to moderate; route dependent', season: 'May–September, weather permitting',
    description: 'Explore green valley trails near Pahalgam with local guidance; check access, weather and trail conditions before departure.',
    image: PHOTO('photo-1464822759023-fed622ff2c3b'), scene: 'mountain',
  },
  {
    id: 'auli-skiing', title: 'Auli ski slopes', stateId: 'uttarakhand', cityId: 'auli', city: 'Auli', state: 'Uttarakhand',
    category: 'Mountain', emoji: '⛷️', price: 3000, duration: 'Half day', difficulty: 'Beginner lessons to advanced runs', season: 'January–March, depending on snowfall',
    description: 'Try a beginner lesson or ski prepared slopes with local instructors and suitable snow gear.',
    image: PHOTO('photo-1517299321609-52687d1bc55a'), scene: 'mountain',
  },
  {
    id: 'jim-corbett-safari', title: 'Corbett jeep wildlife safari', stateId: 'uttarakhand', cityId: 'jim-corbett', city: 'Jim Corbett', state: 'Uttarakhand',
    category: 'Wildlife', emoji: '🐅', price: 3500, duration: '3–4 hours', difficulty: 'Easy; guided vehicle tour', season: 'Zone and permit dependent',
    description: 'Explore permitted forest routes with a registered guide and keep a respectful distance from wildlife.',
    image: PHOTO('photo-1472396961693-142e6e269027'), scene: 'forest',
  },
  {
    id: 'gulmarg-skiing', title: 'Gulmarg snow sports', stateId: 'kashmir', cityId: 'gulmarg', city: 'Gulmarg', state: 'Kashmir',
    category: 'Mountain', emoji: '🏂', price: 4500, duration: 'Half day', difficulty: 'Beginner lessons to expert terrain', season: 'December–March, snow dependent',
    description: 'Enjoy groomed-area skiing or a guided snow experience; off-piste terrain requires qualified guides and extra checks.',
    image: PHOTO('photo-1519681393784-d120267933ba'), scene: 'mountain',
  },
  {
    id: 'lonavala-fort-trek', title: 'Lohagad fort trek', stateId: 'maharashtra', cityId: 'lonavala', city: 'Lonavala', state: 'Maharashtra',
    category: 'Mountain', emoji: '🥾', price: 900, duration: '3–5 hours', difficulty: 'Easy to moderate', season: 'October–February; monsoon only with extra caution',
    description: 'Walk up to a historic hill fort for sweeping Sahyadri views. Check trail and weather conditions before setting out.',
    image: PHOTO('photo-1469474968028-56623f02e42e'), scene: 'mountain',
  },
  {
    id: 'pune-kamshet-paragliding', title: 'Tandem paragliding near Pune', stateId: 'maharashtra', cityId: 'pune', city: 'Pune', state: 'Maharashtra',
    category: 'Air', emoji: '🪂', price: 3000, duration: '15–25 min flight', difficulty: 'Beginner with instructor', season: 'October–May, wind permitting',
    description: 'Head to the Kamshet flying area near Pune for a tandem flight with a trained pilot.',
    image: PHOTO('photo-1755446133356-de5126699e37'), scene: 'mountain',
  },
  {
    id: 'munnar-tea-trail', title: 'Munnar tea-estate hike', stateId: 'kerala', cityId: 'munnar', city: 'Munnar', state: 'Kerala',
    category: 'Mountain', emoji: '🍃', price: 1200, duration: '2–4 hours', difficulty: 'Easy to moderate', season: 'October–March',
    description: 'Walk through the Western Ghats around tea estates and viewpoints with a locally guided route.',
    image: PHOTO('photo-1500530855697-b586d89ba3ee'), scene: 'valley',
  },
  {
    id: 'wayanad-forest-trek', title: 'Wayanad forest trail', stateId: 'kerala', cityId: 'wayanad', city: 'Wayanad', state: 'Kerala',
    category: 'Outdoor', emoji: '🌿', price: 1600, duration: '3–5 hours', difficulty: 'Moderate', season: 'October–May; trail closures possible in monsoon',
    description: 'Explore approved forest trails with a licensed guide; access depends on forest permissions and wildlife advisories.',
    image: PHOTO('photo-1448375240586-882707db888b'), scene: 'forest',
  },
  {
    id: 'alappuzha-kayaking', title: 'Backwater kayaking', stateId: 'kerala', cityId: 'alappuzha', city: 'Alappuzha', state: 'Kerala',
    category: 'Water', emoji: '🛶', price: 1200, duration: '2–3 hours', difficulty: 'Easy; beginner briefing included', season: 'October–March',
    description: 'Paddle quiet canals and palm-lined waterways with a local guide and a properly fitted life jacket.',
    image: PHOTO('photo-1500375592092-40eb2168fd21'), scene: 'riverside',
  },
  {
    id: 'varkala-surfing', title: 'Surf lesson at Varkala', stateId: 'kerala', cityId: 'varkala', city: 'Varkala', state: 'Kerala',
    category: 'Water', emoji: '🏄', price: 1800, duration: '1.5–2 hours', difficulty: 'Beginner lesson available', season: 'October–March, surf conditions vary',
    description: 'Learn the basics with a local surf school on a suitable beach day; lessons depend on wave and weather conditions.',
    image: PHOTO('photo-1502680390469-be75c86b636f'), scene: 'coastal',
  },
  {
    id: 'kaziranga-jeep-safari', title: 'Kaziranga jeep safari', stateId: 'assam', cityId: 'kaziranga', city: 'Kaziranga', state: 'Assam',
    category: 'Wildlife', emoji: '🦏', price: 2800, duration: '2–3 hours', difficulty: 'Easy; guided vehicle tour', season: 'Park-zone and permit dependent; many areas close in monsoon',
    description: 'Visit an authorised safari zone with a park-approved guide and follow all wildlife-viewing rules.',
    image: PHOTO('photo-1472396961693-142e6e269027'), scene: 'forest',
  },
  {
    id: 'reiek-ridge-trek', title: 'Reiek ridge hike', stateId: 'mizoram', cityId: 'reiek', city: 'Reiek', state: 'Mizoram',
    category: 'Mountain', emoji: '⛰️', price: 800, duration: '2–4 hours', difficulty: 'Moderate', season: 'October–April',
    description: 'Hike forested slopes to scenic ridgeline viewpoints near Reiek, ideally with a local guide.',
    image: PHOTO('photo-1470770841072-f978cf4d019e'), scene: 'mountain',
  },
  {
    id: 'calangute-parasailing', title: 'Parasailing off Calangute', stateId: 'goa', cityId: 'calangute', city: 'Calangute', state: 'Goa',
    category: 'Water', emoji: '🪂', price: 1800, duration: '10–15 min flight', difficulty: 'Beginner with operator crew', season: 'October–May, sea conditions permitting',
    description: 'Rise above the Arabian Sea on an operator-led parasailing ride; trips may stop when wind or waves are unsafe.',
    image: PHOTO('photo-1500375592092-40eb2168fd21'), scene: 'coastal',
  },
  {
    id: 'palolem-kayaking', title: 'Palolem coastal kayaking', stateId: 'goa', cityId: 'palolem', city: 'Palolem', state: 'Goa',
    category: 'Water', emoji: '🛶', price: 1000, duration: '1–2 hours', difficulty: 'Easy to moderate', season: 'October–May, sea conditions permitting',
    description: 'Paddle along the sheltered coastline with a guide and safety gear; routes change with tides and conditions.',
    image: PHOTO('photo-1501785888041-af3ef285b470'), scene: 'coastal',
  },
  {
    id: 'yuksom-goechala-trek', title: 'Goechala trail expedition', stateId: 'sikkim', cityId: 'yuksom', city: 'Yuksom', state: 'Sikkim',
    category: 'Mountain', emoji: '🏔️', price: 18000, duration: '8–10 days', difficulty: 'Challenging; altitude and fitness required', season: 'April–May, October–November; permits required',
    description: 'A multi-day Himalayan trek through forests and high viewpoints. Go with an authorised guide and acclimatise properly.',
    image: PHOTO('photo-1464822759023-fed622ff2c3b'), scene: 'mountain',
  },
  {
    id: 'lachung-snow-walk', title: 'Lachung alpine snow walk', stateId: 'sikkim', cityId: 'lachung', city: 'Lachung', state: 'Sikkim',
    category: 'Mountain', emoji: '❄️', price: 2200, duration: '2–4 hours', difficulty: 'Easy to moderate; local guidance advised', season: 'Late autumn to spring, snow and road conditions permitting',
    description: 'Take a guided walk in the alpine landscapes around Lachung where routes are open and local conditions allow.',
    image: PHOTO('photo-1519681393784-d120267933ba'), scene: 'mountain',
  },
  {
    id: 'jaipur-hot-air-balloon', title: 'Hot-air balloon ride near Jaipur', stateId: 'rajasthan', cityId: 'jaipur', city: 'Jaipur', state: 'Rajasthan',
    category: 'Air', emoji: '🎈', price: 12000, duration: '3–4 hours including transfers', difficulty: 'Easy; weather dependent', season: 'Usually October–March, subject to operator schedules',
    description: 'See the Aravalli landscape from above on a sunrise flight operated only when weather and aviation conditions permit.',
    image: PHOTO('photo-1507608616759-54f48f0af0ee'), scene: 'desert',
  },
  {
    id: 'jaisalmer-dune-bashing', title: 'Thar Desert dune safari', stateId: 'rajasthan', cityId: 'jaisalmer', city: 'Jaisalmer', state: 'Rajasthan',
    category: 'Desert', emoji: '🏜️', price: 2500, duration: '1–2 hours', difficulty: 'Moderate thrill; seat-belted guided ride', season: 'October–March',
    description: 'Take a guided 4x4 ride over permitted dunes and combine it with a desert sunset stop where available.',
    image: PHOTO('photo-1653501464423-d443d8d3e2e1'), scene: 'desert',
  },
  {
    id: 'coorg-river-rafting', title: 'Barapole river rafting', stateId: 'karnataka', cityId: 'coorg', city: 'Coorg', state: 'Karnataka',
    category: 'Water', emoji: '🌊', price: 1800, duration: '1–2 hours', difficulty: 'Intermediate; operator requirements apply', season: 'Seasonal flow and official operating windows apply',
    description: 'Ride a guided stretch of the Barapole when rafting is officially open and water levels are judged safe.',
    image: 'https://c.ndtvimg.com/2025-07/6lq5dc88_travel_625x300_30_July_25.jpg', scene: 'riverside',
  },
  {
    id: 'hampi-bouldering', title: 'Hampi bouldering session', stateId: 'karnataka', cityId: 'hampi', city: 'Hampi', state: 'Karnataka',
    category: 'Outdoor', emoji: '🧗', price: 1800, duration: '2–4 hours', difficulty: 'Beginner session to advanced climbs', season: 'October–February',
    description: 'Try a supervised climbing session on suitable boulders with a guide, crash pads and respect for protected sites.',
    image: PHOTO('photo-1522163182402-834f871fd851'), scene: 'mountain',
  },
  {
    id: 'gokarna-coastal-trek', title: 'Gokarna beach-to-beach trek', stateId: 'karnataka', cityId: 'gokarna', city: 'Gokarna', state: 'Karnataka',
    category: 'Outdoor', emoji: '🥾', price: 900, duration: '3–5 hours', difficulty: 'Moderate; rocky and exposed sections', season: 'November–February',
    description: 'Walk the coastal trail between beaches with water, sun protection and a local guide when the path is open.',
    image: PHOTO('photo-1501785888041-af3ef285b470'), scene: 'coastal',
  },
  {
    id: 'kutch-white-rann-safari', title: 'White Rann desert jeep tour', stateId: 'gujarat', cityId: 'kutch', city: 'Kutch', state: 'Gujarat',
    category: 'Desert', emoji: '🚙', price: 2500, duration: '2–4 hours', difficulty: 'Easy; guided vehicle tour', season: 'Festival and access dates vary by year',
    description: 'Explore the vast salt desert with an authorised local operator, respecting permit rules and protected areas.',
    image: PHOTO('photo-1509316785289-025f5b846b35'), scene: 'desert',
  },
  {
    id: 'gir-jeep-safari', title: 'Gir forest wildlife safari', stateId: 'gujarat', cityId: 'gir', city: 'Gir (Sasan Gir)', state: 'Gujarat',
    category: 'Wildlife', emoji: '🦁', price: 3200, duration: '2–3 hours', difficulty: 'Easy; guided vehicle tour', season: 'Safari dates and permits vary by season',
    description: 'Look for Asiatic lions and other wildlife on a permitted route with an authorised guide; sightings are never guaranteed.',
    image: PHOTO('photo-1472396961693-142e6e269027'), scene: 'forest',
  },
  {
    id: 'nainital-bhimtal-paragliding', title: 'Tandem paragliding near Nainital', stateId: 'uttarakhand', cityId: 'nainital', city: 'Nainital', state: 'Uttarakhand',
    category: 'Air', emoji: '🪂', price: 2800, duration: '10–20 min flight', difficulty: 'Beginner with instructor', season: 'October–May, wind permitting',
    description: 'Find tandem flights in the nearby Bhimtal/Naukuchiatal area with a licensed local operator; this is not a lake activity.',
    image: PHOTO('photo-1755446133356-de5126699e37'), scene: 'mountain',
  },
]
