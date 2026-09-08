// Voyage Verse — destination data
// 15 states x 5 cities = 75 cities. All content is original descriptive copy.
// sceneType drives the generated (non-photographic) visual motif for each place —
// see components/common/SceneArt.jsx.

const W = (summer, monsoon, winter) => ({ summer, monsoon, winter })

export const EXPERIENCES = [
  'Adventure',
  'Beaches',
  'Mountains',
  'History',
  'Culture',
  'Wildlife',
  'Spiritual',
  'Food',
]

export const BUDGET_BANDS = [
  { id: 'under-10k', label: 'Under \u20B910K', min: 0, max: 10000 },
  { id: '10k-20k', label: '\u20B910K\u2013\u20B920K', min: 10000, max: 20000 },
  { id: '20k-40k', label: '\u20B920K\u2013\u20B940K', min: 20000, max: 40000 },
  { id: '40k-plus', label: '\u20B940K+', min: 40000, max: Infinity },
]

// per-person-per-day baseline (accommodation + food + local transport blended), in INR
const COST = (budget, standard, premium) => ({ budget, standard, premium })

export const STATES = [
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    region: 'North · Himalaya',
    tagline: 'Pine-scented valleys and snow-lit ridgelines',
    accent: 'peacock',
    scene: 'mountain',
    blurb:
      'Himachal strings hill stations, apple orchards and high passes along the western Himalaya — a state built for slow mornings in the mountains and long drives through pine forest.',
    cities: [
      {
        id: 'shimla',
        name: 'Shimla',
        scene: 'mountain',
        tagline: 'The old summer capital, still unhurried',
        whyVisit:
          'A former British hill capital where colonial architecture, a walkable ridge and mountain air still set the pace of the day.',
        about:
          'Shimla was the summer seat of the British Raj, and the town still carries that legacy in its half-timbered buildings, church spires and the pedestrian Mall Road that runs along the ridge. Below the tourist strip, narrow bazaar lanes tumble downhill, and the toy train from Kalka remains one of the great slow approaches to any Indian hill town.',
        highlights: ['Pedestrian-only Ridge and Mall Road', 'UNESCO-listed Kalka–Shimla toy train', 'Colonial-era architecture throughout the town'],
        attractions: ['The Ridge', 'Christ Church', 'Jakhoo Temple', 'Viceregal Lodge', 'Kufri (day trip)'],
        experiences: ['History', 'Culture', 'Mountains'],
        history:
          'Built up by the British from the 1830s as an escape from the summer heat of the plains, Shimla served as the summer capital of British India and later of Punjab, leaving behind a dense cluster of Gothic and Tudor-style buildings unusual for the Himalaya.',
        weather: W('15°–28°C, pleasant and clear', '18°–24°C, frequent showers and mist', '-2°–10°C, cold with occasional snow'),
        bestSeason: 'March to June, and December for snow',
        duration: { quick: '2 days', standard: '3–4 days', complete: '5 days with Kufri' },
        budgetTier: '10k-20k',
        remoteness: 2,
        costPerDay: COST(1400, 2600, 5200),
        howToReach: {
          air: 'Shimla Airport (Jubbarhatti) has limited flights; most travellers fly into Chandigarh, 2.5–3 hours away.',
          rail: 'The narrow-gauge toy train runs from Kalka, itself well connected by broad-gauge rail from Delhi.',
          road: 'Regular Volvo and HRTC buses run from Delhi (7–8 hrs) and Chandigarh (3 hrs).',
        },
        gettingAround: 'The Mall and Ridge are pedestrian-only; local taxis and a lift connect the lower cart road to the ridge.',
      },
      {
        id: 'manali',
        name: 'Manali',
        scene: 'mountain',
        tagline: 'Base camp for the high passes',
        whyVisit:
          'The launchpad for Rohtang and Solang, with a river-side old town that keeps a slower, café-lined pace of its own.',
        about:
          'Manali sits where the Kullu Valley narrows toward the high Himalaya, and it plays two roles at once: the last proper town before Rohtang Pass and Ladakh, and a laid-back riverside retreat in Old Manali\'s orchards and cafés. Snow sports, river rafting and short treks all run out of here for much of the year.',
        highlights: ['Old Manali\'s café and orchard lanes', 'Access point for Rohtang Pass and Solang Valley', 'Beas riverside walks'],
        attractions: ['Hadimba Temple', 'Solang Valley', 'Old Manali', 'Vashisht hot springs', 'Rohtang Pass (seasonal)'],
        experiences: ['Adventure', 'Mountains', 'Culture'],
        history:
          'A modest apple-farming town until the 1980s, Manali grew quickly as overland travellers and later domestic tourism discovered it as the gateway to Lahaul-Spiti and Ladakh, and it now anchors Himachal\'s adventure-tourism economy.',
        weather: W('10°–25°C, warm days and cool evenings', '15°–22°C, wet with landslide risk on the highway', '-7°–10°C, snow common above town'),
        bestSeason: 'March to June, and October–February for snow',
        duration: { quick: '2 days', standard: '4 days', complete: '6 days with Spiti approach' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1500, 2800, 5800),
        howToReach: {
          air: 'Nearest airport is Bhuntar (Kullu), about 50 minutes by road.',
          rail: 'No rail line; nearest broad-gauge station is Chandigarh, roughly 8–9 hours by road.',
          road: 'Overnight Volvo buses run from Delhi (12–14 hrs) and Chandigarh (8 hrs).',
        },
        gettingAround: 'Taxis and rented scooters cover Old Manali and Solang easily; shared cabs run to Rohtang in season.',
      },
      {
        id: 'dharamshala',
        name: 'Dharamshala',
        scene: 'spiritual',
        tagline: 'Home in exile, wrapped in pine forest',
        whyVisit:
          'McLeod Ganj holds the Dalai Lama\'s residence and a working Tibetan community, with the Dhauladhar ridgeline rising straight up behind it.',
        about:
          'Dharamshala\'s upper town, McLeod Ganj, has been the seat of the Tibetan government-in-exile since 1960, and its monasteries, prayer wheels and Tibetan kitchens sit against the sudden wall of the Dhauladhar range. The Triund ridge trek starts a short walk from the main square and is one of the more accessible high-altitude day hikes in the state.',
        highlights: ['Tsuglagkhang temple complex and the Dalai Lama\'s residence', 'Triund ridge, a doable day trek from town', 'Tibetan food and craft markets'],
        attractions: ['Tsuglagkhang Complex', 'Bhagsu Waterfall', 'Triund Trek', 'Norbulingka Institute', 'Kangra Fort (day trip)'],
        experiences: ['Spiritual', 'Culture', 'Mountains', 'Adventure'],
        history:
          'The Dalai Lama and thousands of Tibetan refugees settled in McLeod Ganj after 1959, turning a quiet colonial cantonment town into the de facto capital of Tibetan culture outside Tibet.',
        weather: W('18°–30°C, humid lower town, cooler on the ridge', '20°–26°C, heavy monsoon rainfall', '2°–14°C, occasional snow on Triund'),
        bestSeason: 'March–June and September–November',
        duration: { quick: '2 days', standard: '3–4 days', complete: '5 days with Triund' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1200, 2400, 4800),
        howToReach: {
          air: 'Kangra Airport (Gaggal) is about 20 km from McLeod Ganj.',
          rail: 'A narrow-gauge line reaches Kangra town; most travellers use road from Pathankot instead.',
          road: 'Buses and taxis run from Delhi (11–12 hrs) and Chandigarh (7 hrs).',
        },
        gettingAround: 'McLeod Ganj\'s core is walkable; shared taxis connect it to lower Dharamshala and the airport.',
      },
      {
        id: 'kasol',
        name: 'Kasol',
        scene: 'valley',
        tagline: 'Parvati Valley\'s riverside backpacker village',
        whyVisit:
          'A small village on the Parvati River that became the region\'s backpacker hub, with trailheads to Kheerganga and Chalal right outside town.',
        about:
          'Kasol grew from a handful of houses into a strip of guesthouses and Israeli-run cafés for travellers heading deeper into the Parvati Valley. The pull is less the village itself than what surrounds it — pine forest, the Parvati River, and trails to Chalal, Rasol and the hot springs at Kheerganga.',
        highlights: ['Riverside cafés along the Parvati', 'Walking trail to Chalal village across the river', 'Trailhead for the Kheerganga hot-springs trek'],
        attractions: ['Parvati River banks', 'Chalal Trail', 'Kheerganga Trek', 'Manikaran Sahib (nearby)', 'Tosh village day trip'],
        experiences: ['Adventure', 'Mountains', 'Food'],
        history:
          'Once a stop for the Malana hydel project workforce, Kasol was reshaped from the 1990s onward by backpackers travelling the Parvati Valley, and it now runs almost entirely on small-scale trekking and café tourism.',
        weather: W('12°–24°C, mild and green', '15°–20°C, prone to landslides on the valley road', '-2°–8°C, cold and often snowbound'),
        bestSeason: 'March–June and September–November',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Kheerganga' },
        budgetTier: 'under-10k',
        remoteness: 4,
        costPerDay: COST(900, 1800, 3600),
        howToReach: {
          air: 'Bhuntar (Kullu) airport is roughly 1.5 hours away.',
          rail: 'No rail access; nearest station is Joginder Nagar, still a long drive.',
          road: 'Buses run from Delhi (13–14 hrs) via Bhuntar, or shared taxis from Manali (2.5 hrs).',
        },
        gettingAround: 'The village is walkable end to end; shared taxis run up-valley to Manikaran and Barshaini.',
      },
      {
        id: 'spiti-valley',
        name: 'Spiti Valley',
        scene: 'valley',
        tagline: 'A cold desert of monasteries and moonscape ridges',
        whyVisit:
          'A high-altitude Buddhist valley of bare ochre mountains, turquoise streams and centuries-old monasteries, reached by some of the more dramatic roads in the Himalaya.',
        about:
          'Sitting in the rain shadow of the Himalaya, Spiti is closer in landscape and culture to Tibet than to the green valleys further south — treeless ridgelines, mud-brick villages and monasteries that have stood for close to a thousand years. Kaza is the valley\'s small hub, with Key Monastery and Chandratal Lake among the highlights within reach.',
        highlights: ['Key Monastery perched above the Spiti River', 'Chandratal, a high-altitude moon lake', 'Some of the highest motorable villages in the world'],
        attractions: ['Key Monastery', 'Chandratal Lake', 'Dhankar Monastery and village', 'Kaza bazaar', 'Pin Valley'],
        experiences: ['Adventure', 'Spiritual', 'Mountains'],
        history:
          'Spiti was historically a semi-independent Buddhist kingdom linked closely to Tibet, and its monasteries, including Tabo (founded 996 CE), preserve some of the oldest continuously used Buddhist art and manuscripts in the Indian Himalaya.',
        weather: W('4°–20°C, dry and intensely sunny', 'Largely rain-shadowed; occasional light showers', '-20°–-5°C, valley often snowbound and cut off'),
        bestSeason: 'Mid-June to early October (roads close in winter)',
        duration: { quick: '3 days', standard: '5 days', complete: '7 days looping via Kinnaur' },
        budgetTier: '20k-40k',
        remoteness: 5,
        costPerDay: COST(1800, 3200, 6000),
        howToReach: {
          air: 'Nearest airport is Bhuntar (Kullu) or Chandigarh, both followed by a long mountain drive.',
          rail: 'No rail access anywhere in the valley.',
          road: 'Reached via Manali (12 hrs, summer only) or the longer Shimla–Kinnaur route (2 days), which stays open later.',
        },
        gettingAround: 'Shared taxis and infrequent buses link villages; most visitors hire a vehicle for the whole loop.',
      },
    ],
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    region: 'North · Himalaya',
    tagline: 'The land of the gods, from river ghats to ski slopes',
    accent: 'peacock',
    scene: 'mountain',
    blurb:
      'Uttarakhand carries both the source of the Ganga and some of the Himalaya\'s best-known hill stations, pairing pilgrimage towns with lakes, ski runs and one of India\'s oldest tiger reserves.',
    cities: [
      {
        id: 'rishikesh',
        name: 'Rishikesh',
        scene: 'riverside',
        tagline: 'Yoga capital on the banks of the Ganga',
        whyVisit:
          'Ashrams, riverside ghats and a nightly Ganga aarti sit alongside white-water rafting and a growing café scene, right where the Ganga leaves the mountains.',
        about:
          'Rishikesh has drawn spiritual seekers since well before the Beatles famously visited in 1968, and it remains a working centre of yoga and meditation study, not just a backdrop for it. The same stretch of river that hosts the evening aarti at Triveni Ghat also runs the rapids used for rafting trips upstream toward Shivpuri.',
        highlights: ['Evening Ganga aarti at Triveni and Parmarth ghats', 'Laxman Jhula and Ram Jhula suspension bridges', 'White-water rafting on the Ganga'],
        attractions: ['Triveni Ghat', 'Laxman Jhula', 'Beatles Ashram (Chaurasi Kutia)', 'Neelkanth Mahadev Temple', 'Shivpuri rafting stretch'],
        experiences: ['Spiritual', 'Adventure', 'Culture'],
        history:
          'Long referenced in Hindu scripture as a place of meditation, Rishikesh grew as a yoga centre through the 20th century and gained international attention after the Beatles studied transcendental meditation here in 1968.',
        weather: W('24°–40°C, hot in the lower town', '25°–33°C, high river flow, rafting often paused', '8°–22°C, mild and pleasant'),
        bestSeason: 'September to April',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with a yoga course' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(1000, 2000, 4200),
        howToReach: {
          air: 'Jolly Grant Airport, Dehradun, is about 35 km away.',
          rail: 'Rishikesh has its own railway station, well connected to Delhi and Haridwar.',
          road: 'Buses and shared taxis run frequently from Delhi (5–6 hrs) and Haridwar (45 min).',
        },
        gettingAround: 'The ghat area is walkable; auto-rickshaws and e-rickshaws cover the wider town.',
      },
      {
        id: 'nainital',
        name: 'Nainital',
        scene: 'lake',
        tagline: 'A crescent lake ringed by seven hills',
        whyVisit:
          'A colonial hill town built directly around a lake, with boating on the water and viewpoints on the ridges above it.',
        about:
          'Nainital grew up around Naini Lake, believed in local legend to be one of the spots where Sati\'s eye fell, and the town still wraps tightly around the water\'s edge. The Mall Road runs along one side of the lake, while cable cars and short hikes lead up to viewpoints like Snow View and Naina Peak.',
        highlights: ['Boating on Naini Lake', 'Naina Devi Temple by the lake shore', 'Snow View cable car and Himalayan viewpoint'],
        attractions: ['Naini Lake', 'Naina Devi Temple', 'Snow View Point', 'Mall Road', 'Naina Peak'],
        experiences: ['Mountains', 'Culture', 'Adventure'],
        history:
          'Established by the British in the 1840s after a trader spotted the lake, Nainital quickly became a preferred summer retreat for colonial administrators from the plains, and its lakeside layout still reflects that planning.',
        weather: W('14°–28°C, warm days, cool lake breeze', '17°–24°C, heavy rain, occasional landslides', '0°–12°C, cold with light snow some years'),
        bestSeason: 'March–June and September–November',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Bhimtal/Sattal' },
        budgetTier: '10k-20k',
        remoteness: 2,
        costPerDay: COST(1300, 2500, 5000),
        howToReach: {
          air: 'Nearest airport is Pantnagar, about 65 km away.',
          rail: 'Kathgodam, roughly 35 km away, is the nearest railhead.',
          road: 'Buses run from Delhi (7–8 hrs) and Kathgodam (1.5 hrs).',
        },
        gettingAround: 'The Mall is walkable; shared taxis handle trips up to the viewpoints.',
      },
      {
        id: 'mussoorie',
        name: 'Mussoorie',
        scene: 'mountain',
        tagline: 'The Queen of the Hills, above the Doon Valley',
        whyVisit:
          'A ridge-top town with sweeping views of the Doon Valley on one side and the snow line on the other, plus a Mall Road built for evening strolls.',
        about:
          'Mussoorie has held its nickname since colonial days, and its Camel\'s Back Road and Mall still fill with evening walkers looking out over the Doon Valley. Landour, the quieter cantonment area just above the main bazaar, keeps a slower pace with its old bakeries and writers\' cafés.',
        highlights: ['Camel\'s Back Road sunset walk', 'Landour\'s quiet lanes and old bakeries', 'Views over the Doon Valley from Lal Tibba'],
        attractions: ['Mall Road', 'Kempty Falls', 'Gun Hill', 'Lal Tibba', 'Landour'],
        experiences: ['Mountains', 'Culture'],
        history:
          'Founded in 1825 as a British garrison outpost, Mussoorie developed into one of colonial India\'s most popular hill retreats and later became a hub for Tibetan settlement and, through Woodstock School, international education.',
        weather: W('12°–25°C, cool and clear', '15°–21°C, dense fog and rain', '-1°–10°C, occasional snowfall'),
        bestSeason: 'March–June and December for snow',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Dhanaulti' },
        budgetTier: '10k-20k',
        remoteness: 2,
        costPerDay: COST(1400, 2700, 5400),
        howToReach: {
          air: 'Jolly Grant Airport, Dehradun, is about 55 km away.',
          rail: 'Dehradun railway station is the nearest, roughly 35 km away.',
          road: 'Buses and taxis run from Dehradun (1.5 hrs) and Delhi (7 hrs).',
        },
        gettingAround: 'The Mall and Landour are best explored on foot; taxis cover Kempty Falls and Gun Hill.',
      },
      {
        id: 'auli',
        name: 'Auli',
        scene: 'mountain',
        tagline: 'Skiing under Nanda Devi',
        whyVisit:
          'Uttarakhand\'s main ski destination, with wide open slopes, a long cable car and clear views of Nanda Devi on good days.',
        about:
          'Auli sits above Joshimath as a stretch of open meadow (bugyal) that turns into a ski slope each winter and a wildflower-lined trekking base the rest of the year. The Auli cable car, one of Asia\'s longer ropeways, gives an easy, non-hiking route up to the same views.',
        highlights: ['Skiing and snowboarding runs, December–March', 'Cable car ride up from Joshimath', 'Gorson Bugyal meadow, a gentle day hike'],
        attractions: ['Auli Ski Slopes', 'Auli Cable Car', 'Gorson Bugyal', 'Chenab Lake (Kwari)', 'Joshimath'],
        experiences: ['Adventure', 'Mountains'],
        history:
          'Once used by the Garhwal Rifles for training on snow, Auli was developed for winter sports from the 1980s onward and has since hosted national skiing championships, becoming India\'s primary Himalayan ski resort.',
        weather: W('10°–22°C, clear meadow trekking weather', '12°–18°C, misty, trails often slippery', '-8°–5°C, heavy snow, ski season'),
        bestSeason: 'December–February for skiing, May–June for meadows',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Joshimath and Valley of Flowers approach' },
        budgetTier: '20k-40k',
        remoteness: 4,
        costPerDay: COST(1700, 3400, 6800),
        howToReach: {
          air: 'Jolly Grant Airport, Dehradun, is about 280 km away.',
          rail: 'Rishikesh is the nearest railhead, roughly 250 km away.',
          road: 'Shared taxis and buses reach Joshimath from Rishikesh (9–10 hrs); the cable car covers the final stretch to Auli.',
        },
        gettingAround: 'The cable car and short walking trails cover most of Auli; a vehicle is needed for Joshimath.',
      },
      {
        id: 'jim-corbett',
        name: 'Jim Corbett',
        scene: 'wildlife',
        tagline: 'India\'s oldest national park',
        whyVisit:
          'Dense sal forest and grassland along the Ramganga River, with a real chance of a tiger sighting on an early jeep safari.',
        about:
          'Established in 1936 as India\'s first national park, Corbett spreads across the Ramganga river valley in a mix of forest, grassland and riverbed that also supports elephants, leopards and a long list of birdlife. Ramnagar town, just outside the park boundary, serves as the base for safari bookings and resort stays.',
        highlights: ['Dawn jeep safaris into the Dhikala and Bijrani zones', 'Ramganga riverside forest', 'One of India\'s best-documented tiger populations'],
        attractions: ['Dhikala Zone', 'Bijrani Zone', 'Corbett Museum', 'Garjiya Devi Temple', 'Kosi River'],
        experiences: ['Wildlife', 'Adventure'],
        history:
          'Named after hunter-turned-conservationist Jim Corbett, the park was founded as Hailey National Park in 1936 and became the first reserve under Project Tiger in 1973, making it a founding site of India\'s tiger-conservation programme.',
        weather: W('25°–40°C, hot, good visibility at waterholes', '25°–32°C, park largely closed (monsoon)', '5°–22°C, cold mornings, best safari light'),
        bestSeason: 'November to June (closed mid-June to mid-November)',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with two safari zones' },
        budgetTier: '20k-40k',
        remoteness: 3,
        costPerDay: COST(2000, 3800, 7500),
        howToReach: {
          air: 'Pantnagar Airport is about 80 km from Ramnagar.',
          rail: 'Ramnagar has its own railway station, linked to Delhi by an overnight train.',
          road: 'Buses and taxis from Delhi take around 5–6 hours.',
        },
        gettingAround: 'Safaris run in permitted forest-department jeeps only; Ramnagar town is small enough to walk.',
      },
    ],
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    region: 'North · Himalaya',
    tagline: 'Alpine meadows around the Kashmir Valley',
    accent: 'peacock',
    scene: 'lake',
    blurb:
      'The Kashmir Valley pairs Srinagar\'s lakes and gardens with a ring of high meadows and passes — Gulmarg, Pahalgam and Sonmarg — each built around a different Himalayan landscape.',
    cities: [
      {
        id: 'srinagar',
        name: 'Srinagar',
        scene: 'lake',
        tagline: 'Houseboats on Dal Lake, gardens on its shore',
        whyVisit:
          'A lake-centred city where houseboat stays, shikara rides and Mughal-era gardens define a slower, water-level way of seeing Kashmir.',
        about:
          'Srinagar has grown up around Dal and Nigeen lakes for centuries, and staying on a houseboat — a Kashmir institution since the British era — remains the classic way to experience it. The Mughal emperors laid out formal terraced gardens along the lake shore, and the old city\'s wooden mosques and markets sit a short walk from the water.',
        highlights: ['Shikara rides and houseboat stays on Dal Lake', 'Mughal Gardens: Shalimar Bagh and Nishat Bagh', 'Old city wooden mosques and floating vegetable market'],
        attractions: ['Dal Lake', 'Shalimar Bagh', 'Nishat Bagh', 'Jama Masjid', 'Shankaracharya Temple'],
        experiences: ['Culture', 'History', 'Spiritual'],
        history:
          'Srinagar has served as Kashmir\'s political and cultural centre since antiquity, and its Mughal gardens, laid out in the 16th and 17th centuries, reflect the valley\'s long role as a favoured retreat of the Mughal court.',
        weather: W('15°–30°C, warm days, cool lake evenings', '18°–28°C, moderate rainfall', '-2°–10°C, occasional snow, lake can partly freeze'),
        bestSeason: 'April to October',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days including gardens' },
        budgetTier: '20k-40k',
        remoteness: 3,
        costPerDay: COST(1800, 3600, 7500),
        howToReach: {
          air: 'Srinagar Airport has regular flights from Delhi, Mumbai and other major cities.',
          rail: 'Rail connectivity is limited within the valley; most travellers fly in.',
          road: 'The Jammu–Srinagar highway takes around 8–9 hours by road.',
        },
        gettingAround: 'Shikaras cover the lake; auto-rickshaws and taxis handle the rest of the city.',
      },
      {
        id: 'gulmarg',
        name: 'Gulmarg',
        scene: 'mountain',
        tagline: 'The meadow of flowers, under snow half the year',
        whyVisit:
          'Kashmir\'s ski resort, with one of the world\'s highest cable cars and a summer meadow that turns into some of India\'s best snow slopes each winter.',
        about:
          'Gulmarg means "meadow of flowers," a name that fits its summer look far more than its winter one, when the town becomes a serious ski destination served by the Gulmarg Gondola. The cable car\'s upper station opens onto views of Nanga Parbat on clear days, making it a draw even for visitors who never put on skis.',
        highlights: ['Gulmarg Gondola, one of the highest cable cars in the world', 'Skiing and snowboarding, December–March', 'A quiet Himalayan golf course in summer'],
        attractions: ['Gulmarg Gondola', 'Ski Slopes', 'Alpather Lake (summer trek)', 'Golf Course', 'Khilanmarg meadow'],
        experiences: ['Adventure', 'Mountains'],
        history:
          'Developed by the British in the 19th century as a summer retreat and golf destination, Gulmarg was later built up as a ski resort from the 1980s and now hosts Asia\'s highest green-golf-course-turned-ski-slope combination.',
        weather: W('10°–22°C, cool alpine meadow air', '12°–18°C, misty and wet', '-15°–2°C, heavy snowfall, ski season'),
        bestSeason: 'December–February for skiing, April–June for meadows',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days combined with Srinagar' },
        budgetTier: '20k-40k',
        remoteness: 4,
        costPerDay: COST(2000, 4000, 8500),
        howToReach: {
          air: 'Srinagar Airport is about 50 km away.',
          rail: 'No rail access; road from Srinagar is the only route.',
          road: 'Taxis from Srinagar take roughly 1.5–2 hours.',
        },
        gettingAround: 'The gondola covers most of the elevation gain; the village itself is walkable.',
      },
      {
        id: 'pahalgam',
        name: 'Pahalgam',
        scene: 'valley',
        tagline: 'The valley of shepherds, along the Lidder River',
        whyVisit:
          'Pine forest, a fast mountain river and a cluster of side valleys make Pahalgam the easiest base for short walks and pony rides into the high Kashmir landscape.',
        about:
          'Pahalgam sits where the Lidder River runs through pine forest at the edge of several side valleys, including Betaab Valley and Aru, both popular for short outings by car or pony. It also serves as the traditional starting point for the annual Amarnath Yatra pilgrimage into the high mountains.',
        highlights: ['Lidder River walks through pine forest', 'Betaab Valley and Aru Valley day trips', 'Base camp for the Amarnath Yatra'],
        attractions: ['Betaab Valley', 'Aru Valley', 'Chandanwari', 'Lidder River', 'Baisaran meadow'],
        experiences: ['Mountains', 'Adventure', 'Spiritual'],
        history:
          'Once a modest shepherd\'s village (its name translates roughly to "valley of shepherds"), Pahalgam grew into a tourism base through the 20th century while retaining its role as the launch point for the Amarnath pilgrimage.',
        weather: W('12°–24°C, mild forested air', '14°–20°C, wet, some road closures', '-5°–8°C, snow common'),
        bestSeason: 'April to October',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days with Aru and Betaab' },
        budgetTier: '20k-40k',
        remoteness: 3,
        costPerDay: COST(1700, 3300, 6800),
        howToReach: {
          air: 'Srinagar Airport is about 90 km away.',
          rail: 'No rail access; road from Srinagar is standard.',
          road: 'Taxis from Srinagar take around 2.5 hours.',
        },
        gettingAround: 'Ponies and local taxis cover the side valleys; the main town is walkable.',
      },
      {
        id: 'sonmarg',
        name: 'Sonmarg',
        scene: 'mountain',
        tagline: 'The meadow of gold, gateway to Ladakh',
        whyVisit:
          'A glacier-fed meadow on the road to Ladakh, with Thajiwas Glacier an easy pony ride from town and the Sindh River running alongside the highway.',
        about:
          'Sonmarg marks the last major stop in the Kashmir Valley before the Zoji La pass carries the highway into Ladakh, and its name — "meadow of gold" — refers to the wildflowers that cover the valley floor in season. Thajiwas Glacier, reachable by a short pony trek, is the town\'s best-known short excursion.',
        highlights: ['Thajiwas Glacier, an easy pony or walking trip', 'Sindh River valley scenery', 'Last town before the Zoji La pass into Ladakh'],
        attractions: ['Thajiwas Glacier', 'Sindh River', 'Zoji La viewpoint', 'Baltal (Amarnath base camp)', 'Nilagrad River'],
        experiences: ['Adventure', 'Mountains'],
        history:
          'A traditional stop along the historic trade route between Kashmir and Ladakh, Sonmarg\'s role as a gateway town predates modern tourism and continues today with the Srinagar–Leh highway passing directly through it.',
        weather: W('8°–20°C, cool glacier-valley air', '10°–16°C, wet and often foggy', '-10°–2°C, heavy snow, road closed'),
        bestSeason: 'May to September',
        duration: { quick: '1–2 days', standard: '2 days', complete: '2 days combined with Srinagar or Pahalgam' },
        budgetTier: '20k-40k',
        remoteness: 4,
        costPerDay: COST(1700, 3300, 6800),
        howToReach: {
          air: 'Srinagar Airport is about 85 km away.',
          rail: 'No rail access.',
          road: 'Taxis from Srinagar take around 2.5–3 hours.',
        },
        gettingAround: 'Ponies handle the glacier approach; taxis cover the rest.',
      },
      {
        id: 'yusmarg',
        name: 'Yusmarg',
        scene: 'valley',
        tagline: 'A quiet pine meadow, away from the main circuit',
        whyVisit:
          'A smaller, far less crowded alternative to Gulmarg, with open meadow, pine forest and the short walk to Nilnag Lake.',
        about:
          'Yusmarg stays mostly off the standard Kashmir itinerary, which is exactly its appeal — a broad, flat meadow ringed by pine and deodar forest, with horse rides available to Nilnag Lake and Sang-e-Safed. It makes an easy, low-key day trip from Srinagar for travellers who\'d rather skip the crowds at Gulmarg.',
        highlights: ['Open meadow ringed by deodar forest', 'Horse ride to Nilnag Lake', 'Far quieter than Gulmarg or Pahalgam'],
        attractions: ['Yusmarg Meadow', 'Nilnag Lake', 'Sang-e-Safed', 'Doodh Ganga River', 'Charar-e-Sharief Shrine (en route)'],
        experiences: ['Mountains', 'Adventure'],
        history:
          'Long used by local shepherd communities for summer grazing, Yusmarg has remained comparatively undeveloped even as neighbouring meadows became major resorts, keeping much of its pastoral character intact.',
        weather: W('10°–22°C, cool meadow air', '12°–18°C, wet, forest paths muddy', '-8°–3°C, snow-covered'),
        bestSeason: 'April to October',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days combined with Srinagar' },
        budgetTier: '10k-20k',
        remoteness: 4,
        costPerDay: COST(1300, 2600, 5200),
        howToReach: {
          air: 'Srinagar Airport is about 50 km away.',
          rail: 'No rail access.',
          road: 'Taxis from Srinagar take around 1.5–2 hours.',
        },
        gettingAround: 'Horses cover the meadow-to-lake stretch; the village itself is small and walkable.',
      },
    ],
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    region: 'West',
    tagline: 'From Deccan forts to the Arabian Sea',
    accent: 'saffron',
    scene: 'urban',
    blurb:
      'Maharashtra runs from Mumbai\'s coastline through the Sahyadri hill stations to the rock-cut caves of the Deccan plateau, mixing a fast-moving metro with slower monsoon retreats.',
    cities: [
      {
        id: 'mumbai',
        name: 'Mumbai',
        scene: 'urban',
        tagline: 'The city that never quite slows down',
        whyVisit:
          'India\'s financial and film capital, with colonial-era waterfront architecture, street food culture and an energy that runs late into the night.',
        about:
          'Mumbai grew from seven fishing islands into India\'s largest city, and its layered history still shows — Gothic and Art Deco buildings along the waterfront, Bollywood studios, and street-food lanes that have fed the city for generations. The Gateway of India and the ferries that leave from beside it are usually the first and last stops on any visit.',
        highlights: ['Gateway of India and Colaba waterfront', 'Marine Drive at sunset', 'Street food across Mohammed Ali Road and Juhu'],
        attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Maharaj Terminus', 'Juhu Beach'],
        experiences: ['Culture', 'History', 'Food'],
        history:
          'Originally a cluster of islands controlled by various regional powers, Mumbai passed to the Portuguese and then the British East India Company in the 17th century, and land reclamation over the following two centuries fused the islands into the city\'s current form.',
        weather: W('27°–35°C, hot and humid', '25°–30°C, heavy monsoon rain, flooding risk', '18°–30°C, warm and dry, best season'),
        bestSeason: 'November to February',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Elephanta Caves' },
        budgetTier: '20k-40k',
        remoteness: 1,
        costPerDay: COST(1800, 3800, 8500),
        howToReach: {
          air: 'Chhatrapati Shivaji Maharaj International Airport is well connected to every major city.',
          rail: 'Mumbai is a major national rail hub with direct trains from across India.',
          road: 'Expressways and national highways connect Mumbai to Pune, Nashik and Goa.',
        },
        gettingAround: 'Local trains, the Metro and app-based cabs cover the city; South Mumbai is walkable in patches.',
      },
      {
        id: 'pune',
        name: 'Pune',
        scene: 'heritage',
        tagline: 'Maratha history in a fast-growing college town',
        whyVisit:
          'Shaniwar Wada\'s ruins sit a short ride from Pune\'s tech parks and student cafés, making it an easy mix of history and everyday city life.',
        about:
          'Pune was the seat of the Peshwas, the Maratha Empire\'s prime ministers, and the ruined gate and walls of Shaniwar Wada still anchor the old city centre. Today it\'s better known as an education and IT hub, with a large student population keeping its café and live-music scene busy.',
        highlights: ['Shaniwar Wada\'s fortified gates and ruins', 'Aga Khan Palace, linked to Gandhi\'s imprisonment', 'A large student-driven café and food scene'],
        attractions: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort', 'Osho Ashram', 'Dagdusheth Halwai Ganpati Temple'],
        experiences: ['History', 'Culture', 'Food'],
        history:
          'Pune served as the political capital of the Maratha Empire under the Peshwas in the 18th century, and Shaniwar Wada, built in 1732, remained their seat of power until it was gutted by fire in 1828.',
        weather: W('24°–37°C, hot and dry', '22°–29°C, moderate rainfall, greener surrounds', '12°–29°C, pleasant and dry'),
        bestSeason: 'October to February',
        duration: { quick: '1–2 days', standard: '2–3 days', complete: '3 days with Sinhagad Fort' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1300, 2600, 5500),
        howToReach: {
          air: 'Pune Airport has regular domestic flights.',
          rail: 'Pune Junction is a major stop on the Mumbai–Chennai/Bengaluru lines.',
          road: 'The Mumbai–Pune Expressway makes the drive around 3 hours.',
        },
        gettingAround: 'Auto-rickshaws and app cabs are the standard way to get around.',
      },
      {
        id: 'lonavala',
        name: 'Lonavala',
        scene: 'mountain',
        tagline: 'Monsoon waterfalls in the Sahyadris',
        whyVisit:
          'A Sahyadri hill town best known for its monsoon waterfalls, rock-cut caves and the chikki sweets sold along its main road.',
        about:
          'Lonavala and its twin town Khandala sit on the Mumbai–Pune highway route through the Sahyadri range, and the whole area turns a deep green during the monsoon, when Bhushi Dam and the surrounding waterfalls are at their busiest. The nearby Karla and Bhaja caves add a Buddhist rock-cut heritage layer to what\'s otherwise a weekend nature escape.',
        highlights: ['Bhushi Dam and monsoon waterfalls', 'Karla and Bhaja rock-cut Buddhist caves', 'Locally made chikki sold along the main road'],
        attractions: ['Bhushi Dam', 'Karla Caves', 'Tiger\'s Leap Viewpoint', 'Lohagad Fort', 'Rajmachi Point'],
        experiences: ['Mountains', 'Food', 'Adventure'],
        history:
          'Developed as a hill retreat after the British built the Mumbai–Pune rail line through the ghats in the 1860s, Lonavala later became a favoured weekend escape for Mumbai and Pune residents, a role it still plays today.',
        weather: W('22°–33°C, warm', '20°–26°C, heavy rain, waterfalls at their fullest', '12°–28°C, cool and dry'),
        bestSeason: 'June to September for waterfalls, October–February for cooler weather',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with the caves and forts' },
        budgetTier: '10k-20k',
        remoteness: 2,
        costPerDay: COST(1200, 2400, 4800),
        howToReach: {
          air: 'Pune Airport is about 65 km away; Mumbai Airport around 100 km.',
          rail: 'Lonavala railway station sits on the Mumbai–Pune main line.',
          road: 'The Mumbai–Pune Expressway connects directly to Lonavala.',
        },
        gettingAround: 'Auto-rickshaws and rented two-wheelers cover the town and nearby viewpoints.',
      },
      {
        id: 'sambhajinagar',
        name: 'Sambhajinagar',
        scene: 'heritage',
        tagline: 'Gateway to the Ajanta and Ellora caves',
        whyVisit:
          'The closest base to two of India\'s greatest rock-cut cave complexes, with its own Mughal-era monuments to fill the days in between.',
        about:
          'Formerly known as Aurangabad, the city sits within reach of both the Ajanta and Ellora cave complexes — UNESCO World Heritage sites carved over centuries by Buddhist, Hindu and Jain communities. Bibi Ka Maqbara, a smaller echo of the Taj Mahal built by Aurangzeb\'s son, sits within the city itself.',
        highlights: ['Day trips to the Ajanta and Ellora cave complexes', 'Bibi Ka Maqbara, modelled on the Taj Mahal', 'Panchakki, a 17th-century water-mill complex'],
        attractions: ['Ellora Caves', 'Ajanta Caves', 'Bibi Ka Maqbara', 'Panchakki', 'Daulatabad Fort'],
        experiences: ['History', 'Culture'],
        history:
          'Founded in the 17th century and later renamed by Mughal emperor Aurangzeb, who made it his capital, the city sits amid a much older landscape of rock-cut architecture: the Ajanta caves date to roughly the 2nd century BCE, and Ellora spans Buddhist, Hindu and Jain excavation from the 6th to 10th centuries CE.',
        weather: W('26°–40°C, hot and dry', '24°–30°C, moderate rainfall', '12°–30°C, dry and pleasant'),
        bestSeason: 'November to February',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days covering both cave sites' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1300, 2600, 5400),
        howToReach: {
          air: 'Chhatrapati Sambhajinagar Airport has regular domestic flights.',
          rail: 'The city is well connected by rail to Mumbai, Pune and Hyderabad.',
          road: 'State highways connect it to Pune (about 4–5 hrs) and Mumbai (around 7 hrs).',
        },
        gettingAround: 'Taxis are the standard way to reach Ajanta (a 2-hour drive) and Ellora (30 minutes).',
      },
      {
        id: 'mahabaleshwar',
        name: 'Mahabaleshwar',
        scene: 'mountain',
        tagline: 'Strawberry fields above the Western Ghats',
        whyVisit:
          'A cool, forested plateau known for its strawberry farms, viewpoints over the Sahyadris, and the source of the Krishna River.',
        about:
          'Mahabaleshwar sits on a plateau in the Western Ghats, cool enough to support the strawberry farms it\'s best known for and ringed by viewpoints looking out over the surrounding valleys. Panchganga Temple marks the traditional source of the Krishna River, one of peninsular India\'s major waterways.',
        highlights: ['Strawberry farms and roadside stalls', 'Arthur\'s Seat and other Ghat-edge viewpoints', 'Boating on Venna Lake'],
        attractions: ['Venna Lake', 'Arthur\'s Seat', 'Panchganga Temple', 'Elephant\'s Head Point', 'Pratapgad Fort (day trip)'],
        experiences: ['Mountains', 'Food'],
        history:
          'Developed by the British in the 1820s as the summer capital of the Bombay Presidency, Mahabaleshwar\'s colonial-era bungalows and market still frame a town that later became known nationwide for its strawberry cultivation.',
        weather: W('20°–32°C, warm days', '18°–24°C, very heavy rainfall, thick mist', '8°–26°C, cool and clear'),
        bestSeason: 'October to June',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days with Pratapgad Fort' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1300, 2600, 5400),
        howToReach: {
          air: 'Pune Airport is about 120 km away.',
          rail: 'Satara, roughly 45 km away, is the nearest railhead.',
          road: 'Buses and taxis run from Pune (3.5 hrs) and Mumbai (5.5 hrs).',
        },
        gettingAround: 'Shared jeeps and taxis cover the viewpoints spread around the plateau.',
      },
    ],
  },
  {
    id: 'kerala',
    name: 'Kerala',
    region: 'South',
    tagline: 'Backwaters, tea hills and a long green coast',
    accent: 'peacock',
    scene: 'backwater',
    blurb:
      'Kerala runs from Arabian Sea beaches through palm-lined backwaters to the tea hills of the Western Ghats, with food and festivals that shift character every hundred kilometres.',
    cities: [
      {
        id: 'kochi',
        name: 'Kochi',
        scene: 'heritage',
        tagline: 'Chinese fishing nets and Dutch-era streets',
        whyVisit:
          'A trading-port city where Portuguese, Dutch and British history sit layered along the same waterfront, best explored slowly on foot.',
        about:
          'Kochi\'s Fort Kochi and Mattancherry districts hold onto centuries of overlapping colonial and trading history — the cantilevered Chinese fishing nets, a 16th-century Portuguese church, Jew Town\'s synagogue and spice warehouses, and Kathakali performances staged most evenings. Its natural harbour has made it a major spice-trade port since well before the Europeans arrived.',
        highlights: ['Chinese fishing nets along the Fort Kochi shoreline', 'Mattancherry Palace and Jew Town\'s spice markets', 'Evening Kathakali and Kalaripayattu performances'],
        attractions: ['Fort Kochi Beach', 'Mattancherry Palace', 'Chinese Fishing Nets', 'St. Francis Church', 'Jew Town'],
        experiences: ['Culture', 'History', 'Food'],
        history:
          'A major spice-trade port for over a millennium, Kochi passed through Portuguese, Dutch and British colonial control between the 16th and 20th centuries, each leaving behind distinct architecture that still defines Fort Kochi today.',
        weather: W('26°–34°C, hot and humid', '24°–30°C, heavy monsoon rainfall', '22°–32°C, warm and relatively dry'),
        bestSeason: 'October to March',
        duration: { quick: '2 days', standard: '3 days', complete: '3–4 days including a backwater side trip' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1400, 2800, 6000),
        howToReach: {
          air: 'Cochin International Airport is well connected domestically and internationally.',
          rail: 'Ernakulam Junction is a major rail hub on the south-western line.',
          road: 'National highways connect Kochi to the rest of Kerala and neighbouring states.',
        },
        gettingAround: 'Ferries cross between Fort Kochi, Mattancherry and Ernakulam; auto-rickshaws cover the rest.',
      },
      {
        id: 'munnar',
        name: 'Munnar',
        scene: 'tea',
        tagline: 'Rolling tea estates in the Western Ghats',
        whyVisit:
          'A hill station wrapped almost entirely in tea plantations, with wildlife-rich grassland at Eravikulam and south India\'s highest peak nearby.',
        about:
          'Munnar\'s hillsides have been under tea cultivation since the British planted the first estates in the 1870s, and the neat, rounded rows of tea bushes now define the landscape as much as the mountains do. Eravikulam National Park, just outside town, protects the endangered Nilgiri tahr and the slopes of Anamudi, the highest peak in peninsular India.',
        highlights: ['Tea estate walks and the Tata Tea Museum', 'Eravikulam National Park and the Nilgiri tahr', 'Views of Anamudi, south India\'s highest peak'],
        attractions: ['Eravikulam National Park', 'Tea Museum', 'Mattupetty Dam', 'Top Station viewpoint', 'Anamudi'],
        experiences: ['Mountains', 'Wildlife'],
        history:
          'British planters established Munnar\'s first tea estates in the 1870s after acquiring land from the local Poonjar rulers, and the town remains one of India\'s major tea-producing regions, now run largely by the Tata Group\'s plantation arm.',
        weather: W('15°–25°C, cool and misty', '18°–22°C, heavy rain, landslide risk', '10°–20°C, cold mornings, clear days'),
        bestSeason: 'September to May',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Top Station and Eravikulam' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1500, 3000, 6200),
        howToReach: {
          air: 'Cochin International Airport is about 110 km away.',
          rail: 'Aluva, roughly 100 km away, is the nearest railhead.',
          road: 'Taxis and buses from Kochi take around 4 hours.',
        },
        gettingAround: 'Taxis and autos cover the estate roads; several viewpoints require a short walk.',
      },
      {
        id: 'alappuzha',
        name: 'Alappuzha',
        scene: 'backwater',
        tagline: 'Houseboats through the backwater canals',
        whyVisit:
          'The heart of Kerala\'s backwater network, where multi-day houseboat cruises drift past paddy fields, coir villages and narrow canal-side homes.',
        about:
          'Alappuzha, often called the "Venice of the East," sits at the centre of Kerala\'s backwater system — a network of lakes, canals and lagoons running parallel to the coast. Traditional rice barges, converted into houseboats, are the main way to experience it, drifting past coconut groves, paddy fields below sea level, and villages built along the water\'s edge.',
        highlights: ['Overnight houseboat cruises through the backwaters', 'The annual Nehru Trophy snake boat race', 'Coir-making villages along the canals'],
        attractions: ['Backwater Houseboat Cruise', 'Alappuzha Beach', 'Kuttanad paddy fields', 'Marari Beach (nearby)', 'Krishnapuram Palace'],
        experiences: ['Culture', 'Food'],
        history:
          'Developed as a planned port town in the late 18th century under the Kingdom of Travancore, Alappuzha became a major coir- and spice-export hub, and its historic canal network — built for cargo transport — is now the basis of its backwater tourism.',
        weather: W('27°–34°C, hot and humid', '24°–29°C, very heavy rainfall', '23°–33°C, warm, relatively dry'),
        bestSeason: 'November to February',
        duration: { quick: '1 day', standard: '1–2 days (overnight houseboat)', complete: '2–3 days with Kuttanad' },
        budgetTier: '20k-40k',
        remoteness: 2,
        costPerDay: COST(1800, 3600, 8000),
        howToReach: {
          air: 'Cochin International Airport is about 85 km away.',
          rail: 'Alappuzha has its own railway station on the Kochi–Kollam line.',
          road: 'Buses and taxis from Kochi take around 1.5–2 hours.',
        },
        gettingAround: 'Houseboats and canoes are the main way to see the backwaters; auto-rickshaws cover the town.',
      },
      {
        id: 'wayanad',
        name: 'Wayanad',
        scene: 'wildlife',
        tagline: 'Western Ghats forest and spice-scented hills',
        whyVisit:
          'A forested plateau of wildlife sanctuaries, spice plantations and ancient rock carvings, quieter and greener than Kerala\'s better-known hill stations.',
        about:
          'Wayanad sits at a higher, cooler elevation than the Kerala coast, covered in dense Western Ghats forest that hosts elephants, tigers and a long list of birdlife within its wildlife sanctuary. The Edakkal Caves, actually a rock shelter, hold petroglyphs estimated at several thousand years old, while spice plantation tours cover the region\'s cardamom, pepper and coffee.',
        highlights: ['Wildlife safaris through Wayanad Wildlife Sanctuary', 'Edakkal Caves\' prehistoric rock carvings', 'Spice plantation walks'],
        attractions: ['Wayanad Wildlife Sanctuary', 'Edakkal Caves', 'Chembra Peak', 'Banasura Sagar Dam', 'Soochipara Falls'],
        experiences: ['Wildlife', 'Adventure', 'Mountains'],
        history:
          'Wayanad\'s name derives from "Vayal Nadu," or land of paddy fields, and the region has long been home to several indigenous tribal communities whose settlements predate the tea, coffee and spice plantations introduced under British rule.',
        weather: W('20°–32°C, warm, cooler than the coast', '18°–24°C, very heavy rainfall', '12°–28°C, cool and pleasant'),
        bestSeason: 'October to May',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with a wildlife safari' },
        budgetTier: '10k-20k',
        remoteness: 4,
        costPerDay: COST(1400, 2800, 5800),
        howToReach: {
          air: 'Kozhikode (Calicut) Airport is about 95 km away.',
          rail: 'Kozhikode is the nearest major railhead.',
          road: 'Buses and taxis from Kozhikode take roughly 2.5–3 hours.',
        },
        gettingAround: 'A rented vehicle is the easiest way to cover the spread-out attractions.',
      },
      {
        id: 'varkala',
        name: 'Varkala',
        scene: 'coastal-cliff',
        tagline: 'A red cliff above a temple beach',
        whyVisit:
          'One of the few places in India where a laterite cliff runs directly above the beach, lined with cafés and yoga studios overlooking the Arabian Sea.',
        about:
          'Varkala\'s defining feature is its cliff — a red sedimentary ledge running along Papanasam Beach, topped with a walkway of cafés, guesthouses and yoga studios looking straight out to sea. The beach below is considered sacred, tied to the adjoining Janardanaswamy Temple, and is a pilgrimage as well as a beach destination.',
        highlights: ['Clifftop walkway overlooking Papanasam Beach', 'Sunset views from the cliff cafés', 'Janardanaswamy Temple and its ritual bathing ghat'],
        attractions: ['Papanasam Beach', 'Varkala Cliff', 'Janardanaswamy Temple', 'Sivagiri Mutt', 'Kappil Lake'],
        experiences: ['Beaches', 'Spiritual'],
        history:
          'Long a pilgrimage site for its temple and believed-sacred beach, Varkala grew into a beach-tourism destination from the 1990s onward as travellers discovered the cliff, which distinguishes it from Kerala\'s otherwise flat coastline.',
        weather: W('27°–33°C, hot and humid', '24°–29°C, heavy rain, strong undertow', '23°–32°C, warm, calmer seas'),
        bestSeason: 'November to March',
        duration: { quick: '2 days', standard: '3 days', complete: '3–4 days combined with Kollam backwaters' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(1100, 2200, 4800),
        howToReach: {
          air: 'Trivandrum International Airport is about 50 km away.',
          rail: 'Varkala has its own railway station.',
          road: 'Buses and taxis from Trivandrum take around 1 hour.',
        },
        gettingAround: 'The cliff and beach areas are entirely walkable; autos handle trips further out.',
      },
    ],
  },
  {
    id: 'assam',
    name: 'Assam',
    region: 'Northeast',
    tagline: 'Tea gardens and the Brahmaputra floodplain',
    accent: 'saffron',
    scene: 'tea',
    blurb:
      'Assam runs along the Brahmaputra, mixing tea-estate towns with wildlife reserves and river islands, and serves as the usual gateway into India\'s northeast.',
    cities: [
      {
        id: 'guwahati',
        name: 'Guwahati',
        scene: 'spiritual',
        tagline: 'Temple hills above the Brahmaputra',
        whyVisit:
          'Assam\'s largest city and the northeast\'s main gateway, anchored by the hilltop Kamakhya Temple and river cruises on the Brahmaputra.',
        about:
          'Guwahati sits along the Brahmaputra, one of Asia\'s great rivers, and the Kamakhya Temple on Nilachal Hill above the city is among the most significant Shakti Peethas in Hindu tradition, drawing pilgrims year-round. Sunset river cruises past Umananda, a small island temple in the middle of the Brahmaputra, are a popular way to end the day.',
        highlights: ['Kamakhya Temple on Nilachal Hill', 'Sunset cruises on the Brahmaputra', 'Umananda, a temple island in the river'],
        attractions: ['Kamakhya Temple', 'Umananda Island', 'Assam State Museum', 'Brahmaputra Riverfront', 'Pobitora Wildlife Sanctuary (day trip)'],
        experiences: ['Spiritual', 'Culture'],
        history:
          'Guwahati has been a centre of trade and pilgrimage since ancient times, referenced under the name Pragjyotishpura in early Hindu texts, and the Kamakhya Temple in its current form dates to a 16th-century reconstruction after earlier destruction.',
        weather: W('25°–35°C, hot and humid', '26°–32°C, very heavy monsoon rainfall', '10°–25°C, mild and dry'),
        bestSeason: 'October to April',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with Pobitora' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1300, 2600, 5500),
        howToReach: {
          air: 'Lokpriya Gopinath Bordoloi International Airport connects Guwahati to major Indian cities.',
          rail: 'Guwahati is the main rail hub for the entire northeast.',
          road: 'National highways connect it to the rest of Assam and neighbouring states.',
        },
        gettingAround: 'App cabs and auto-rickshaws are the standard way to get around the city.',
      },
      {
        id: 'kaziranga',
        name: 'Kaziranga',
        scene: 'wildlife',
        tagline: 'Grasslands built for the one-horned rhino',
        whyVisit:
          'A UNESCO World Heritage grassland that holds the largest population of the greater one-horned rhinoceros anywhere in the world.',
        about:
          'Kaziranga\'s tall elephant grass and marshland along the Brahmaputra floodplain support the world\'s largest population of the greater one-horned rhinoceros, alongside wild elephants, tigers and swamp deer. Both elephant-back and jeep safaris run through its different ranges, offering different vantage points on the same grassland.',
        highlights: ['Jeep and elephant-back safaris in search of the one-horned rhino', 'Brahmaputra floodplain grassland scenery', 'One of India\'s highest tiger densities'],
        attractions: ['Central Range (Kohora)', 'Western Range (Bagori)', 'Eastern Range (Agaratoli)', 'Kaziranga National Orchid Park', 'Brahmaputra riverbank'],
        experiences: ['Wildlife', 'Adventure'],
        history:
          'Established as a reserve forest in 1905 after Mary Curzon, wife of the then-Viceroy, was reportedly unable to spot a rhino on a visit, Kaziranga became a national park in 1974 and a UNESCO World Heritage Site in 1985.',
        weather: W('25°–35°C, hot and humid', 'Park closed for most of the monsoon', '8°–24°C, cool, clearest safari conditions'),
        bestSeason: 'November to April (closed roughly May–October)',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days covering all three ranges' },
        budgetTier: '10k-20k',
        remoteness: 4,
        costPerDay: COST(1600, 3200, 6800),
        howToReach: {
          air: 'Jorhat Airport is about 95 km away; Guwahati Airport around 200 km.',
          rail: 'Furkating, roughly 75 km away, is the nearest railhead.',
          road: 'Buses and taxis from Guwahati take around 5–6 hours.',
        },
        gettingAround: 'Safaris run in permitted jeeps or on elephant-back within the park; the surrounding area is best covered by car.',
      },
      {
        id: 'majuli',
        name: 'Majuli',
        scene: 'riverside',
        tagline: 'The world\'s largest river island',
        whyVisit:
          'A shifting Brahmaputra river island that holds centuries-old Vaishnavite monasteries and a distinct mask-making and pottery craft tradition.',
        about:
          'Majuli sits in the middle of the Brahmaputra and is widely cited as the world\'s largest river island, though erosion has steadily shrunk it over the decades. Its satras — Vaishnavite monasteries founded in the 15th and 16th centuries by the reformer Srimanta Sankardev — remain centres of dance, music and the island\'s distinctive mask-making craft.',
        highlights: ['Neo-Vaishnavite satras practising centuries-old dance and music traditions', 'Traditional mask-making workshops', 'Mising tribal villages on stilts'],
        attractions: ['Kamalabari Satra', 'Auniati Satra', 'Mask-Making Villages', 'Mising Tribal Hamlets', 'Brahmaputra riverbank sunsets'],
        experiences: ['Culture', 'Spiritual'],
        history:
          'Founded in the 15th–16th centuries by the Vaishnavite saint Srimanta Sankardev, Majuli\'s satras became the seat of the Neo-Vaishnavite movement in Assam, and the island\'s ongoing erosion has made its preservation a recognised cultural priority.',
        weather: W('25°–34°C, hot and humid', '25°–31°C, heavy flooding common', '10°–24°C, mild and pleasant'),
        bestSeason: 'October to March',
        duration: { quick: '2 days', standard: '2 days', complete: '3 days including outlying satras' },
        budgetTier: 'under-10k',
        remoteness: 5,
        costPerDay: COST(900, 1900, 4200),
        howToReach: {
          air: 'Jorhat Airport is the nearest, followed by a ferry crossing.',
          rail: 'Jorhat Town railway station connects to the ferry point.',
          road: 'A ferry from Nimati Ghat, near Jorhat, is the only way to reach the island.',
        },
        gettingAround: 'Cycles and shared autos are the main way to get between satras and villages.',
      },
      {
        id: 'jorhat',
        name: 'Jorhat',
        scene: 'tea',
        tagline: 'Assam\'s tea capital',
        whyVisit:
          'A working tea-estate town that doubles as the launch point for ferries to Majuli, with plantation stays and a genuine look at how Assam tea is grown and made.',
        about:
          'Jorhat sits at the centre of Assam\'s tea industry, ringed by working estates that date back to the 19th century, several of which now offer plantation-bungalow stays and factory tours through the plucking and processing process. It also serves as the mainland ferry point for Majuli island.',
        highlights: ['Working tea-estate tours and bungalow stays', 'Ferry departure point for Majuli', 'Cha Bagan (tea garden) landscapes at dawn'],
        attractions: ['Tea Estate Tours', 'Nimati Ghat (Majuli ferry point)', 'Kaziranga (day trip)', 'Raja Maidam (Ahom royal tombs)', 'Cinnamara Tea Estate'],
        experiences: ['Food', 'Culture'],
        history:
          'Jorhat rose to prominence as the last capital of the Ahom kingdom before British annexation in 1826, and its surrounding tea estates, planted from the 1850s onward, later made it central to Assam\'s tea economy.',
        weather: W('25°–34°C, hot and humid', '25°–30°C, heavy rain', '10°–24°C, mild and clear'),
        bestSeason: 'October to April',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days combined with Majuli' },
        budgetTier: 'under-10k',
        remoteness: 3,
        costPerDay: COST(1100, 2200, 4600),
        howToReach: {
          air: 'Jorhat Airport has regular domestic flights.',
          rail: 'Jorhat Town railway station is well connected to Guwahati.',
          road: 'Buses and taxis from Guwahati take around 5 hours.',
        },
        gettingAround: 'Auto-rickshaws and taxis cover the town and nearby estates.',
      },
      {
        id: 'sivasagar',
        name: 'Sivasagar',
        scene: 'heritage',
        tagline: 'Capital ruins of the six-century Ahom dynasty',
        whyVisit:
          'The former Ahom capital, with a massive amphitheatre, palace ruins and temple tank left behind by the dynasty that ruled Assam for 600 years.',
        about:
          'Sivasagar was the capital of the Ahom kingdom, which ruled Assam for roughly six centuries before British annexation, and the town still holds the dynasty\'s largest surviving monuments: Rang Ghar, believed to be one of the oldest amphitheatres in Asia, the fortified Talatal Ghar palace, and the vast Sivasagar tank with its temple complex.',
        highlights: ['Rang Ghar, an Ahom-era amphitheatre', 'Talatal Ghar\'s multi-storeyed underground palace', 'Sivasagar tank and its riverside Shiva temple'],
        attractions: ['Rang Ghar', 'Talatal Ghar', 'Sivasagar Tank', 'Shiva Dol Temple', 'Kareng Ghar (Garhgaon Palace)'],
        experiences: ['History', 'Culture'],
        history:
          'Serving as the Ahom capital for much of the dynasty\'s 600-year rule, Sivasagar\'s monuments span the 17th and 18th centuries, built under successive Ahom kings before the kingdom\'s eventual annexation by the British in 1826.',
        weather: W('25°–35°C, hot and humid', '25°–31°C, heavy rain', '9°–24°C, mild and dry'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days covering all major ruins' },
        budgetTier: 'under-10k',
        remoteness: 4,
        costPerDay: COST(900, 1900, 4000),
        howToReach: {
          air: 'Jorhat Airport is about 60 km away.',
          rail: 'Simaluguri Junction is the nearest major railhead.',
          road: 'Buses and taxis from Jorhat take around 1.5 hours.',
        },
        gettingAround: 'Auto-rickshaws cover the spread-out monuments; some visitors hire a car for the day.',
      },
    ],
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    region: 'Northeast',
    tagline: 'Ridge-top hills folded into Myanmar\'s border',
    accent: 'peacock',
    scene: 'mountain',
    blurb:
      'Mizoram\'s hills fold in tight, green ridges toward the Myanmar border, holding onto Mizo village traditions and some of the northeast\'s least-visited trekking country.',
    cities: [
      {
        id: 'aizawl',
        name: 'Aizawl',
        scene: 'mountain',
        tagline: 'A capital built along a ridge',
        whyVisit:
          'Mizoram\'s hillside capital, spread along a narrow ridge with steep streets, a lively central bazaar and sweeping valley views from almost every corner.',
        about:
          'Aizawl sits at over 1,100 metres, built along a ridge so narrow that the city essentially runs in a single line with the valley dropping away on both sides. Bara Bazar, the central market, is largely run by women traders under a long-standing local tradition, and the city\'s churches and community halls reflect Mizoram\'s predominantly Christian culture.',
        highlights: ['Bara Bazar, a market run largely by women traders', 'Ridge-top valley views across the city', 'A strong local music and choral tradition'],
        attractions: ['Bara Bazar', 'Solomon\'s Temple', 'Durtlang Hills viewpoint', 'Mizoram State Museum', 'Reiek Peak (day trip)'],
        experiences: ['Culture', 'Mountains'],
        history:
          'Aizawl grew from a British administrative outpost established in 1890 into the capital of Mizoram after statehood in 1987, and the city\'s Mizo cultural identity — shaped by 19th-century Christian missionary activity — still defines much of daily life.',
        weather: W('20°–30°C, warm and humid', '22°–27°C, very heavy rainfall', '11°–22°C, mild and clear'),
        bestSeason: 'October to April',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with Reiek' },
        budgetTier: '10k-20k',
        remoteness: 4,
        costPerDay: COST(1300, 2600, 5400),
        howToReach: {
          air: 'Lengpui Airport is about 35 km from Aizawl.',
          rail: 'No rail access; Silchar in Assam is the nearest major railhead.',
          road: 'Buses and taxis from Silchar take around 6 hours.',
        },
        gettingAround: 'Shared sumos (taxis) and local buses handle the steep, narrow streets.',
      },
      {
        id: 'champhai',
        name: 'Champhai',
        scene: 'valley',
        tagline: 'The rice bowl on the Myanmar border',
        whyVisit:
          'A quiet border town of terraced paddy fields, trade with Myanmar just across the frontier, and access to Murlen National Park.',
        about:
          'Known locally as the "rice bowl of Mizoram" for its extensive terraced paddy fields, Champhai sits directly on the Myanmar border, with a functioning border trade point at Zokhawthar. The surrounding hills hold Murlen National Park, home to a range of Himalayan and southeast Asian bird and mammal species rarely seen elsewhere in India.',
        highlights: ['Terraced paddy fields across the valley', 'Cross-border trade point at Zokhawthar', 'Murlen National Park\'s mixed subtropical wildlife'],
        attractions: ['Zokhawthar Border Trade Point', 'Murlen National Park', 'Rung Dil Pond', 'Farkawn (historic Mizo village)', 'Lianpui'],
        experiences: ['Culture', 'Mountains'],
        history:
          'Champhai has long served as a trade corridor between the Mizo hills and what is now Myanmar, a role formalised with a designated border trade point that continues cross-border commerce with Chin State today.',
        weather: W('20°–29°C, warm and humid', '21°–26°C, heavy rainfall', '9°–21°C, cool and clear'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with Murlen National Park' },
        budgetTier: 'under-10k',
        remoteness: 5,
        costPerDay: COST(1000, 2000, 4200),
        howToReach: {
          air: 'Lengpui Airport (Aizawl) is about 190 km away.',
          rail: 'No rail access.',
          road: 'Shared taxis from Aizawl take around 5–6 hours.',
        },
        gettingAround: 'Local taxis are the standard way to reach outlying villages and the border point.',
      },
      {
        id: 'reiek',
        name: 'Reiek',
        scene: 'mountain',
        tagline: 'A peak and a village frozen in Mizo tradition',
        whyVisit:
          'A dramatic ridge-top peak with a heritage village recreating traditional Mizo houses and customs, plus one of the state\'s more rewarding short treks.',
        about:
          'Reiek Tlang rises sharply above the surrounding hills, and the short trek to its summit is among the more popular hikes near Aizawl. At its base, a heritage village reconstructs traditional Mizo houses from several tribal sub-groups, giving a compact introduction to the state\'s pre-modern village architecture and customs.',
        highlights: ['Short summit trek up Reiek Tlang', 'Heritage village with traditional Mizo tribal houses', 'Panoramic ridge views toward Myanmar'],
        attractions: ['Reiek Tlang Peak', 'Reiek Heritage Village', 'Sunset viewpoint', 'Reiek Tourist Lodge grounds', 'Local orchid nursery'],
        experiences: ['Adventure', 'Culture', 'Mountains'],
        history:
          'The heritage village at Reiek was developed by the state tourism department to preserve and display the distinct house styles and customs of Mizoram\'s different tribal sub-groups, several of which have converged culturally since the mid-20th century.',
        weather: W('19°–28°C, mild and humid', '20°–25°C, heavy rainfall', '8°–20°C, cool and clear'),
        bestSeason: 'October to April',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days with the summit trek' },
        budgetTier: 'under-10k',
        remoteness: 4,
        costPerDay: COST(1000, 2000, 4200),
        howToReach: {
          air: 'Lengpui Airport is about 20 km away.',
          rail: 'No rail access.',
          road: 'Taxis from Aizawl take around 1.5 hours.',
        },
        gettingAround: 'The village and trailhead are walkable from the drop-off point.',
      },
      {
        id: 'thenzawl',
        name: 'Thenzawl',
        scene: 'valley',
        tagline: 'A weaving town on the way to Mizoram\'s tallest falls',
        whyVisit:
          'A quiet handloom-weaving village that serves as the usual base for visiting Vantawng Falls, Mizoram\'s highest waterfall.',
        about:
          'Thenzawl is known locally for its handloom weaving, particularly the puanchei and other traditional Mizo textiles produced by home-based weavers, and it sits along the road toward Vantawng Falls, a multi-tiered drop considered the tallest in the state. Golf enthusiasts also know the town for a nine-hole course built on rolling grassland at its edge.',
        highlights: ['Handloom weaving workshops producing traditional Mizo textiles', 'Nearby Vantawng Falls, the state\'s tallest waterfall', 'A rolling nine-hole golf course on the town\'s edge'],
        attractions: ['Handloom Weaving Villages', 'Vantawng Falls (via Serchhip)', 'Thenzawl Golf Course', 'Tuirial River views', 'Local weekly market'],
        experiences: ['Culture', 'Adventure'],
        history:
          'Thenzawl grew as a centre of Mizo handloom weaving, a craft traditionally practised by women on backstrap looms, producing textiles that remain central to Mizo cultural dress at festivals and ceremonies.',
        weather: W('19°–28°C, mild and humid', '20°–25°C, very heavy rainfall', '8°–20°C, cool and clear'),
        bestSeason: 'October to April',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days combined with Serchhip' },
        budgetTier: 'under-10k',
        remoteness: 5,
        costPerDay: COST(950, 1900, 4000),
        howToReach: {
          air: 'Lengpui Airport (Aizawl) is about 65 km away.',
          rail: 'No rail access.',
          road: 'Taxis from Aizawl take around 2 hours.',
        },
        gettingAround: 'Local taxis cover the weaving villages and onward routes to Serchhip.',
      },
      {
        id: 'serchhip',
        name: 'Serchhip',
        scene: 'mountain',
        tagline: 'The viewing base for Vantawng Falls',
        whyVisit:
          'A small district town best known as the closest base for viewing Vantawng Falls, and for a lightly visited limestone cave nearby.',
        about:
          'Serchhip is the practical base for reaching Vantawng Falls, whose multi-tiered drop is best seen from a dedicated viewpoint just outside town. The district is otherwise quiet even by Mizoram\'s standards, with the Lung Kawlh Puk limestone cave and rolling hill scenery offering a slower, off-circuit stop.',
        highlights: ['Viewpoint over Vantawng Falls', 'Lung Kawlh Puk limestone cave', 'Quiet hill-district scenery with few other visitors'],
        attractions: ['Vantawng Falls Viewpoint', 'Lung Kawlh Puk Cave', 'Chhingpuii Grave (local legend site)', 'Serchhip Town Bazaar', 'Hmuifang Hills (day trip)'],
        experiences: ['Mountains', 'Adventure'],
        history:
          'Serchhip developed as a district administrative centre after Mizoram\'s reorganisation into separate districts, and its main draw, Vantawng Falls, remains one of the state\'s least commercially developed natural landmarks.',
        weather: W('19°–28°C, mild and humid', '20°–25°C, heavy rainfall', '7°–19°C, cool and clear'),
        bestSeason: 'October to April',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days combined with Thenzawl' },
        budgetTier: 'under-10k',
        remoteness: 5,
        costPerDay: COST(950, 1900, 4000),
        howToReach: {
          air: 'Lengpui Airport (Aizawl) is about 100 km away.',
          rail: 'No rail access.',
          road: 'Taxis from Aizawl take around 2.5–3 hours.',
        },
        gettingAround: 'Local taxis are needed for the falls viewpoint and the cave.',
      },
    ],
  },
  {
    id: 'goa',
    name: 'Goa',
    region: 'West · Coast',
    tagline: 'Portuguese-era churches and a long coastline',
    accent: 'saffron',
    scene: 'beach',
    blurb:
      'Goa packs beach towns, colonial churches and a laid-back food-and-nightlife scene into India\'s smallest state, split between a busier north coast and a quieter south.',
    cities: [
      {
        id: 'panaji',
        name: 'Panaji',
        scene: 'heritage',
        tagline: 'Portuguese-era streets on the Mandovi',
        whyVisit:
          'Goa\'s capital, where the pastel-coloured Fontainhas quarter and a riverfront promenade give the most concentrated dose of Goan-Portuguese architecture.',
        about:
          'Panaji sits on the banks of the Mandovi River, and its Fontainhas neighbourhood — a grid of narrow lanes lined with tiled, pastel-painted houses — remains one of the best-preserved Portuguese-era quarters in India. The riverfront itself is lined with casino boats and evening promenades, a modern layer over the old-town core.',
        highlights: ['Fontainhas\' pastel Portuguese-era lanes', 'Mandovi riverfront promenade', 'Panaji\'s Latin-quarter café culture'],
        attractions: ['Fontainhas', 'Our Lady of the Immaculate Conception Church', 'Mandovi Riverfront', 'Miramar Beach', 'Goa State Museum'],
        experiences: ['Culture', 'History', 'Food'],
        history:
          'Panaji grew from a small Portuguese administrative outpost into the colonial capital of Goa in 1843, replacing Old Goa after repeated epidemics there, and it retained that role after Goa\'s 1961 integration into India.',
        weather: W('27°–35°C, hot and humid', '25°–29°C, very heavy monsoon rain', '18°–32°C, warm and dry, peak season'),
        bestSeason: 'November to February',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days including Old Goa' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1400, 3000, 6500),
        howToReach: {
          air: 'Goa International Airport (Dabolim/Mopa) connects to most major Indian cities.',
          rail: 'Karmali, about 12 km away, is the nearest railway station.',
          road: 'National highways connect Goa to Mumbai (about 10–11 hrs) and Pune (7–8 hrs).',
        },
        gettingAround: 'Rented scooters and taxis are the standard way to get around Goa.',
      },
      {
        id: 'calangute',
        name: 'Calangute',
        scene: 'beach',
        tagline: 'North Goa\'s busiest stretch of sand',
        whyVisit:
          'Goa\'s original mass-tourism beach, still the busiest for water sports, beach shacks and nightlife on the north coast.',
        about:
          'Long nicknamed the "Queen of Beaches," Calangute was among the first stretches of Goan coast to develop for tourism and remains the most crowded, with a wide beach lined by shacks, water-sports operators and a busy market strip just inland. It sits within easy reach of the quieter Baga and Candolim beaches on either side.',
        highlights: ['Water sports: parasailing, jet-skiing and banana boats', 'A long strip of beach shacks and seafood restaurants', 'Easy access to Baga and Candolim beaches nearby'],
        attractions: ['Calangute Beach', 'Baga Beach (nearby)', 'Saturday Night Market', 'Chapora Fort (day trip)', 'Anjuna Flea Market (day trip)'],
        experiences: ['Beaches', 'Adventure'],
        history:
          'Calangute developed as Goa\'s first major beach resort from the 1960s and 70s, drawing early hippie travellers before growing into the state\'s busiest mainstream tourist beach through the following decades.',
        weather: W('27°–34°C, hot and humid', '25°–29°C, rough seas, most shacks close', '19°–32°C, warm, peak beach season'),
        bestSeason: 'November to February',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days covering the north-coast beaches' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1400, 3000, 6800),
        howToReach: {
          air: 'Goa International Airport is about 16 km away.',
          rail: 'Thivim, roughly 20 km away, is the nearest railway station.',
          road: 'Taxis from Panaji take about 30–40 minutes.',
        },
        gettingAround: 'Rented scooters are the easiest way to move between the north-coast beaches.',
      },
      {
        id: 'anjuna',
        name: 'Anjuna',
        scene: 'beach',
        tagline: 'Flea markets and cliffside cafés',
        whyVisit:
          'Goa\'s original trance-music beach, still known for its Wednesday flea market and a more bohemian, cliff-edge café scene.',
        about:
          'Anjuna became a magnet for overland travellers in the 1960s and 70s and later for the trance-music scene of the 1990s, a reputation it still trades on alongside a long-running Wednesday flea market that draws vendors from across India. Its northern end, backed by low cliffs, has a quieter, more café-driven character than the beach itself.',
        highlights: ['The long-running Wednesday flea market', 'Cliffside cafés at the beach\'s northern end', 'Nearby Chapora Fort, overlooking the Chapora River mouth'],
        attractions: ['Anjuna Flea Market', 'Anjuna Beach', 'Chapora Fort', 'Vagator Beach (nearby)', 'De Mello Bungalow ruins'],
        experiences: ['Beaches', 'Culture'],
        history:
          'Anjuna\'s beach culture traces back to the hippie trail of the 1960s and 70s, and its flea market, started informally by traveller communities, has run continuously for decades, evolving into a major draw in its own right.',
        weather: W('27°–34°C, hot and humid', '25°–29°C, rough seas', '19°–32°C, warm, best conditions'),
        bestSeason: 'November to February',
        duration: { quick: '2 days', standard: '3 days', complete: '3–4 days covering nearby beaches' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1300, 2800, 6200),
        howToReach: {
          air: 'Goa International Airport is about 25 km away.',
          rail: 'Thivim, roughly 12 km away, is the nearest railway station.',
          road: 'Taxis from Panaji take about 45 minutes.',
        },
        gettingAround: 'Rented scooters are the standard way to reach nearby beaches and the flea market.',
      },
      {
        id: 'palolem',
        name: 'Palolem',
        scene: 'beach',
        tagline: 'A quiet crescent beach in the south',
        whyVisit:
          'South Goa\'s best-known beach, calmer and more low-key than the north coast, with palm-hut stays right on the sand.',
        about:
          'Palolem\'s crescent-shaped bay is calm enough for swimming most of the year, and the town has grown around simple palm-thatched hut accommodation rather than large resorts, keeping its pace noticeably slower than Calangute or Anjuna. Dolphin-spotting boat trips and "silent discos" (headphone-based parties, in deference to noise rules) are the local specialties.',
        highlights: ['A calm, swimmable crescent bay', 'Palm-hut beach accommodation directly on the sand', 'Dolphin-spotting boat trips at dawn'],
        attractions: ['Palolem Beach', 'Butterfly Beach (boat access)', 'Cotigao Wildlife Sanctuary (day trip)', 'Agonda Beach (nearby)', 'Cabo de Rama Fort'],
        experiences: ['Beaches'],
        history:
          'Palolem developed later than Goa\'s northern beaches, growing through the 1990s and 2000s as travellers sought a quieter alternative, and local noise ordinances have since shaped its low-key, hut-based tourism model.',
        weather: W('27°–34°C, hot and humid', '25°–29°C, rough seas', '19°–32°C, warm and calm'),
        bestSeason: 'November to February',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days including Cotigao Wildlife Sanctuary' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(1100, 2400, 5200),
        howToReach: {
          air: 'Goa International Airport is about 40 km away.',
          rail: 'Canacona, about 3 km away, is the nearest railway station.',
          road: 'Taxis from Margao take around 45 minutes.',
        },
        gettingAround: 'The beach town is walkable; scooters cover nearby beaches and Cotigao.',
      },
      {
        id: 'old-goa',
        name: 'Old Goa',
        scene: 'heritage',
        tagline: 'UNESCO churches from Goa\'s first capital',
        whyVisit:
          'The former Portuguese capital, now a cluster of UNESCO-listed churches and cathedrals that once made it one of the grandest cities in the colonial world.',
        about:
          'Before repeated epidemics forced the capital to move to Panaji, Old Goa was among the largest and richest cities in Asia under Portuguese rule, and its surviving churches — including the Basilica of Bom Jesus, which holds the remains of St. Francis Xavier — reflect that former scale. The site is now a UNESCO World Heritage complex rather than a living town.',
        highlights: ['Basilica of Bom Jesus, holding the relics of St. Francis Xavier', 'Sé Cathedral, one of Asia\'s largest churches', 'A cluster of UNESCO-listed colonial-era religious architecture'],
        attractions: ['Basilica of Bom Jesus', 'Sé Cathedral', 'Church of St. Francis of Assisi', 'Archaeological Museum', 'Chapel of St. Catherine'],
        experiences: ['History', 'Culture', 'Spiritual'],
        history:
          'Old Goa served as the capital of Portuguese India from the 16th century, growing into a city rivalling Lisbon in wealth before repeated cholera and malaria epidemics from the 17th century onward led to its gradual abandonment in favour of Panaji.',
        weather: W('27°–35°C, hot and humid', '25°–29°C, heavy rain', '18°–32°C, warm and dry'),
        bestSeason: 'November to February',
        duration: { quick: '1 day', standard: '1 day', complete: '2 days combined with Panaji' },
        budgetTier: 'under-10k',
        remoteness: 1,
        costPerDay: COST(1000, 2200, 4800),
        howToReach: {
          air: 'Goa International Airport is about 30 km away.',
          rail: 'Karmali, about 4 km away, is the nearest railway station.',
          road: 'Taxis from Panaji take about 20 minutes.',
        },
        gettingAround: 'The church complex is compact and entirely walkable.',
      },
    ],
  },
  {
    id: 'delhi',
    name: 'Delhi',
    region: 'North',
    tagline: 'Seven cities of history, layered into one capital',
    accent: 'maroon',
    scene: 'heritage',
    blurb:
      'Delhi has been rebuilt as a capital city more times than almost anywhere else in India, and its Mughal, colonial and modern layers still sit within a few kilometres of each other.',
    cities: [
      {
        id: 'new-delhi',
        name: 'New Delhi',
        scene: 'heritage',
        tagline: 'Lutyens\' planned capital core',
        whyVisit:
          'The wide, tree-lined avenues and government architecture built by the British as India\'s 20th-century capital, centred on India Gate.',
        about:
          'New Delhi was designed from scratch in the early 20th century by British architects Edwin Lutyens and Herbert Baker as the new capital of the Raj, and its broad avenues, roundabouts and sandstone government buildings remain the seat of India\'s government today. India Gate, a war memorial at the eastern end of Kartavya Path, is the area\'s most recognisable landmark.',
        highlights: ['India Gate and the ceremonial Kartavya Path', 'Rashtrapati Bhavan, the presidential residence', 'Wide, planned colonial-era boulevards'],
        attractions: ['India Gate', 'Rashtrapati Bhavan', 'Parliament House', 'National Museum', 'Lodhi Garden'],
        experiences: ['History', 'Culture'],
        history:
          'Built between 1911 and 1931 to replace Calcutta as the capital of British India, New Delhi was planned by Edwin Lutyens and Herbert Baker as a deliberate statement of imperial authority, and it became the capital of independent India in 1947 with little structural change to the core layout.',
        weather: W('30°–43°C, very hot and dry', '28°–35°C, humid with heavy spells', '4°–20°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2 days', complete: '2–3 days with the museums' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1500, 3200, 7000),
        howToReach: {
          air: 'Indira Gandhi International Airport connects Delhi to the world.',
          rail: 'New Delhi Railway Station is one of India\'s busiest rail hubs.',
          road: 'National highways connect Delhi to every major northern city.',
        },
        gettingAround: 'The Delhi Metro covers the city extensively; app cabs and autos fill the gaps.',
      },
      {
        id: 'old-delhi',
        name: 'Old Delhi',
        scene: 'heritage',
        tagline: 'Mughal Delhi\'s walled-city bazaars',
        whyVisit:
          'The 17th-century Mughal capital of Shahjahanabad, still packed with the Red Fort, Jama Masjid and the narrow trading lanes of Chandni Chowk.',
        about:
          'Old Delhi was built as Shahjahanabad, the walled capital founded by Mughal emperor Shah Jahan in 1639, and its core — the Red Fort, Jama Masjid and the dense bazaar lanes of Chandni Chowk — still functions as a working trading district rather than a museum piece. Cycle-rickshaw rides through the narrower lanes and stops for street food are the standard way to see it.',
        highlights: ['Red Fort, the former Mughal seat of power', 'Chandni Chowk\'s dense trading and food lanes', 'Jama Masjid, one of India\'s largest mosques'],
        attractions: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Paranthe Wali Gali', 'Fatehpuri Masjid'],
        experiences: ['History', 'Culture', 'Food'],
        history:
          'Founded in 1639 as Shahjahanabad by Mughal emperor Shah Jahan, Old Delhi served as the Mughal capital for over two centuries and remained the city\'s commercial heart even after the British shifted political power to New Delhi in the 20th century.',
        weather: W('30°–43°C, very hot and dry', '28°–35°C, humid, crowded covered lanes help', '4°–20°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days with a food walk' },
        budgetTier: 'under-10k',
        remoteness: 1,
        costPerDay: COST(1000, 2200, 5000),
        howToReach: {
          air: 'Indira Gandhi International Airport is about 25 km away.',
          rail: 'Old Delhi Railway Station sits at the edge of Chandni Chowk.',
          road: 'Well connected by Delhi Metro and road from anywhere in the city.',
        },
        gettingAround: 'Cycle-rickshaws and walking are the only practical way through the narrowest lanes.',
      },
      {
        id: 'hauz-khas',
        name: 'Hauz Khas',
        scene: 'urban',
        tagline: 'A 13th-century ruin ringed by cafés',
        whyVisit:
          'A design-district village built directly around a medieval reservoir and madrasa complex, mixing boutiques and rooftop cafés with genuine 700-year-old ruins.',
        about:
          'Hauz Khas Village grew up alongside a reservoir built by Sultan Alauddin Khilji in the 13th century and the madrasa and tombs later added by Firoz Shah Tughlaq beside it. Today the ruins share the space with a dense cluster of independent boutiques, galleries and rooftop restaurants, with a deer park adjoining the medieval complex.',
        highlights: ['Firoz Shah Tughlaq\'s 14th-century madrasa and tomb complex', 'Rooftop cafés overlooking the reservoir ruins', 'Deer Park, adjoining the historic complex'],
        attractions: ['Hauz Khas Complex', 'Deer Park', 'Hauz Khas Village boutiques', 'Rajon ki Baoli (nearby stepwell)', 'Green Park'],
        experiences: ['Culture', 'Food', 'History'],
        history:
          'Built as a royal reservoir under Alauddin Khilji around 1290, Hauz Khas was expanded with a madrasa, mosque and tombs by Firoz Shah Tughlaq in the 14th century, and the surrounding urban village later developed into one of Delhi\'s design and nightlife hubs from the 1980s onward.',
        weather: W('30°–43°C, very hot and dry', '28°–34°C, humid', '4°–20°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1 day', complete: '2 days including nearby Mehrauli' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1300, 2800, 6200),
        howToReach: {
          air: 'Indira Gandhi International Airport is about 15 km away.',
          rail: 'New Delhi Railway Station is roughly 12 km away.',
          road: 'Well connected by Delhi Metro (Hauz Khas station) and road.',
        },
        gettingAround: 'The village and ruins are entirely walkable.',
      },
      {
        id: 'mehrauli',
        name: 'Mehrauli',
        scene: 'heritage',
        tagline: 'Delhi\'s oldest continuously inhabited quarter',
        whyVisit:
          'Home to the Qutub Minar and a sprawling archaeological park of ruins spanning nearly a thousand years of Delhi\'s history.',
        about:
          'Mehrauli is considered the oldest of Delhi\'s "seven cities," continuously inhabited since at least the 12th century, and the Qutub Minar — the tallest brick minaret in the world — anchors a UNESCO World Heritage complex here. Beyond the ticketed monument, the surrounding Mehrauli Archaeological Park holds dozens of lesser-visited tombs and step-wells scattered through forest.',
        highlights: ['Qutub Minar, the world\'s tallest brick minaret', 'Mehrauli Archaeological Park\'s scattered, lesser-visited ruins', 'The Iron Pillar, rust-resistant after 1,600 years'],
        attractions: ['Qutub Minar', 'Mehrauli Archaeological Park', 'Iron Pillar', 'Jamali Kamali Mosque and Tomb', 'Adham Khan\'s Tomb'],
        experiences: ['History', 'Culture'],
        history:
          'Mehrauli takes its name from the Mihrauli settlement that grew around the Qutub complex, begun in 1193 by Qutb al-Din Aibak to mark the start of Muslim rule in Delhi, and the area has remained inhabited through every subsequent dynasty that ruled the city.',
        weather: W('30°–43°C, very hot and dry', '28°–34°C, humid', '4°–20°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1 day', complete: '2 days including the archaeological park' },
        budgetTier: 'under-10k',
        remoteness: 1,
        costPerDay: COST(1000, 2200, 5000),
        howToReach: {
          air: 'Indira Gandhi International Airport is about 15 km away.',
          rail: 'New Delhi Railway Station is roughly 18 km away.',
          road: 'Well connected by Delhi Metro (Qutub Minar station) and road.',
        },
        gettingAround: 'The complex and archaeological park are walkable, though shade is limited.',
      },
      {
        id: 'connaught-place',
        name: 'Connaught Place',
        scene: 'urban',
        tagline: 'A colonial-era circular market, still Delhi\'s centre',
        whyVisit:
          'A Georgian-style circular commercial hub built by the British, still functioning as one of Delhi\'s busiest shopping and dining districts.',
        about:
          'Laid out in the 1930s as New Delhi\'s central business district, Connaught Place\'s white colonnaded blocks are arranged in concentric circles around a central park, a layout that has stayed intact even as the shops and restaurants inside it have modernised many times over. It remains one of the most centrally located and easily reached parts of the city.',
        highlights: ['Georgian-style colonnaded shopping blocks', 'Central Park, a green core in the middle of the circle', 'A dense concentration of restaurants and bars'],
        attractions: ['Central Park', 'Janpath Market', 'Agrasen ki Baoli (nearby stepwell)', 'Jantar Mantar (nearby)', 'Palika Bazaar'],
        experiences: ['Culture', 'Food'],
        history:
          'Designed by Robert Tor Russell and built in the 1930s, Connaught Place was named after Prince Arthur, Duke of Connaught, and was conceived as New Delhi\'s primary commercial hub, a role it has kept for close to a century despite the city\'s growth outward.',
        weather: W('30°–43°C, very hot and dry', '28°–34°C, humid', '4°–20°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1 day', complete: '2 days combined with New Delhi\'s core' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1400, 3000, 6800),
        howToReach: {
          air: 'Indira Gandhi International Airport is about 16 km away.',
          rail: 'New Delhi Railway Station is roughly 2 km away.',
          road: 'Directly served by the Delhi Metro (Rajiv Chowk station).',
        },
        gettingAround: 'The circular market is entirely walkable; the Metro connects it to the rest of the city.',
      },
    ],
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    region: 'Northeast · Himalaya',
    tagline: 'Buddhist monasteries under Kangchenjunga',
    accent: 'peacock',
    scene: 'mountain',
    blurb:
      'Sikkim rises from subtropical valleys to some of the highest peaks in the world, holding a dense concentration of Buddhist monasteries and alpine valleys within a small, tightly permitted state.',
    cities: [
      {
        id: 'gangtok',
        name: 'Gangtok',
        scene: 'mountain',
        tagline: 'A capital under Kangchenjunga\'s shadow',
        whyVisit:
          'Sikkim\'s capital, with a pedestrian market street, a major Kagyu monastery just outside town, and clear-day views of the world\'s third-highest peak.',
        about:
          'Gangtok serves as the entry point for most of Sikkim, its MG Marg pedestrian street lined with cafés and shops at the town\'s centre. Rumtek Monastery, one of the largest and most significant Kagyu Buddhist monasteries outside Tibet, sits a short drive away, and day trips run up to the high-altitude Tsomgo Lake and, with a permit, Nathula Pass on the Chinese border.',
        highlights: ['MG Marg, a pedestrian-only market street', 'Rumtek Monastery, a major seat of the Karmapa lineage', 'Day trips to Tsomgo Lake and Nathula Pass'],
        attractions: ['MG Marg', 'Rumtek Monastery', 'Tsomgo Lake', 'Nathula Pass', 'Ganesh Tok viewpoint'],
        experiences: ['Culture', 'Mountains', 'Spiritual'],
        history:
          'Gangtok grew from a small hamlet around a 1840s monastery into the capital of the Kingdom of Sikkim in 1894, and it retained that role after Sikkim merged with India in 1975, developing since then into the state\'s main urban and administrative centre.',
        weather: W('15°–28°C, mild and humid', '17°–23°C, heavy rainfall, frequent landslides', '2°–14°C, cold, clear mountain views'),
        bestSeason: 'March to June, and October to December',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days with Tsomgo Lake and Nathula' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1400, 2900, 6200),
        howToReach: {
          air: 'Pakyong Airport is about 30 km from Gangtok; Bagdogra, further away, has more flight options.',
          rail: 'New Jalpaiguri, roughly 125 km away, is the nearest major railhead.',
          road: 'Shared taxis and buses run from Siliguri/NJP (4–5 hrs).',
        },
        gettingAround: 'Shared taxis are the standard way to reach viewpoints and monasteries around the city.',
      },
      {
        id: 'pelling',
        name: 'Pelling',
        scene: 'mountain',
        tagline: 'Sunrise over Kangchenjunga',
        whyVisit:
          'One of the clearest, closest views of Kangchenjunga anywhere in Sikkim, paired with a historic monastery and a glass-floored skywalk.',
        about:
          'Pelling sits at an elevation that puts Kangchenjunga, the world\'s third-highest peak, directly in view on clear mornings, making sunrise the town\'s main event. Pemayangtse Monastery, one of Sikkim\'s oldest and most important Nyingma monasteries, sits nearby, and a glass-floored skywalk beside the Chenrezig statue has become a newer draw.',
        highlights: ['Sunrise views of Kangchenjunga from town', 'Pemayangtse Monastery, one of Sikkim\'s oldest', 'The Pelling Skywalk glass viewing bridge'],
        attractions: ['Pemayangtse Monastery', 'Pelling Skywalk', 'Khecheopalri Lake', 'Rabdentse Ruins', 'Kanchenjunga Falls'],
        experiences: ['Mountains', 'Spiritual'],
        history:
          'Pemayangtse Monastery, founded in the 17th century, was historically reserved for monks of pure Tibetan lineage and remains one of the premier monasteries of the Nyingma order, closely tied to the nearby ruins of Rabdentse, once Sikkim\'s second capital.',
        weather: W('14°–25°C, mild', '16°–22°C, heavy rainfall, clouds often block the peak', '0°–12°C, cold, clearest mountain views'),
        bestSeason: 'October to December, and March to May',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days with Khecheopalri Lake' },
        budgetTier: '10k-20k',
        remoteness: 4,
        costPerDay: COST(1300, 2700, 5800),
        howToReach: {
          air: 'Pakyong Airport is about 75 km away; Bagdogra around 130 km.',
          rail: 'New Jalpaiguri is the nearest major railhead, about 160 km away.',
          road: 'Shared taxis run from Gangtok (4–5 hrs) or directly from Siliguri/NJP (6–7 hrs).',
        },
        gettingAround: 'Shared and private taxis cover the surrounding viewpoints and monasteries.',
      },
      {
        id: 'lachung',
        name: 'Lachung',
        scene: 'valley',
        tagline: 'Apple-orchard gateway to the Yumthang Valley',
        whyVisit:
          'A remote North Sikkim village that opens onto Yumthang, the "Valley of Flowers," and the high-altitude Zero Point close to the Tibetan border.',
        about:
          'Lachung is a small village of wooden houses and apple orchards that serves as the overnight base for visiting Yumthang Valley, known for its rhododendron blooms each spring, and Zero Point, a snowline viewpoint near the edge of restricted border territory. A permit is required for the whole North Sikkim circuit.',
        highlights: ['Overnight base for Yumthang Valley\'s rhododendron blooms', 'Zero Point, a high-altitude snowline viewpoint', 'A traditional wooden-house village with working apple orchards'],
        attractions: ['Yumthang Valley', 'Zero Point', 'Lachung Monastery', 'Hot Springs (Yumthang)', 'Bhim Nala Waterfall'],
        experiences: ['Adventure', 'Mountains'],
        history:
          'Lachung has traditionally been home to the Lachungpa community, who follow a distinct local self-governance system called Dzumsa, and its position along the historic trade route toward Tibet shaped its role as a stopover village long before tourism arrived.',
        weather: W('8°–20°C, cool valley air', '10°–16°C, wet, roads prone to blockage', '-10°–2°C, heavy snow, often cut off'),
        bestSeason: 'April to June, and October to December',
        duration: { quick: '2 days', standard: '2 days', complete: '3 days combined with Lachen and Gurudongmar' },
        budgetTier: '20k-40k',
        remoteness: 5,
        costPerDay: COST(2000, 4000, 7800),
        howToReach: {
          air: 'Bagdogra is the nearest airport, followed by a long mountain drive.',
          rail: 'New Jalpaiguri is the nearest railhead.',
          road: 'Reached via Gangtok (roughly 6–7 hours), with an Inner Line Permit required.',
        },
        gettingAround: 'Shared jeeps organised through registered tour operators are the only way to visit, due to permit rules.',
      },
      {
        id: 'yuksom',
        name: 'Yuksom',
        scene: 'mountain',
        tagline: 'Sikkim\'s first capital, now a trekker\'s base',
        whyVisit:
          'The village where Sikkim\'s first Chogyal was consecrated in the 17th century, now the starting point for the state\'s major Himalayan treks.',
        about:
          'Yuksom was the site of Sikkim\'s founding as a kingdom, where the first Chogyal (king) was crowned in 1642, and Dubdi Monastery above the village is considered the oldest in Sikkim. Today it\'s better known as the trailhead for treks toward Dzongri, Goecha La and Kangchenjunga base-camp routes.',
        highlights: ['Trailhead for the Dzongri and Goecha La treks', 'Dubdi Monastery, Sikkim\'s oldest', 'Norbugang Chorten, the coronation site of Sikkim\'s first king'],
        attractions: ['Dubdi Monastery', 'Norbugang Coronation Throne', 'Khecheopalri Lake (day trip)', 'Kathok Lake', 'Trekking Trailhead'],
        experiences: ['Adventure', 'History', 'Spiritual'],
        history:
          'In 1642, Yuksom was the site where Sikkim\'s first Chogyal, Phuntsog Namgyal, was consecrated by three revered lamas, making it the founding capital of the Kingdom of Sikkim before the seat later moved elsewhere.',
        weather: W('14°–24°C, mild', '16°–21°C, heavy rainfall', '0°–12°C, cold, trekking season ends'),
        bestSeason: 'March–June and September–November',
        duration: { quick: '1–2 days', standard: '2 days', complete: '5+ days for the Goecha La trek' },
        budgetTier: '10k-20k',
        remoteness: 5,
        costPerDay: COST(1400, 2900, 6000),
        howToReach: {
          air: 'Pakyong Airport is about 90 km away.',
          rail: 'New Jalpaiguri is the nearest railhead, roughly 170 km away.',
          road: 'Shared taxis run from Gangtok or Pelling, taking around 5–6 hours.',
        },
        gettingAround: 'The village is walkable; treks beyond it require registered guides.',
      },
      {
        id: 'namchi',
        name: 'Namchi',
        scene: 'spiritual',
        tagline: 'Giant statues on a South Sikkim ridge',
        whyVisit:
          'A pilgrimage-focused hill town built around a Char Dham replica complex and one of the tallest seated statues of Guru Padmasambhava in the world.',
        about:
          'Namchi has developed two major pilgrimage complexes on the ridges above town: Samdruptse, home to a 45-metre statue of Guru Padmasambhava overlooking the valley, and the Char Dham complex, which recreates replicas of India\'s four major Hindu pilgrimage sites alongside a large statue of Lord Shiva.',
        highlights: ['The 45-metre Guru Padmasambhava statue at Samdruptse', 'The Char Dham replica pilgrimage complex', 'Wide Himalayan views from the Solophok ridge'],
        attractions: ['Samdruptse Hill', 'Char Dham Complex', 'Namchi Rock Garden', 'Tendong Hill', 'Ngadak Monastery'],
        experiences: ['Spiritual', 'Culture'],
        history:
          'Namchi\'s major statues and religious complexes were largely developed by the Sikkim state government from the 2000s onward, transforming a modest South Sikkim town into a significant pilgrimage destination for both Buddhist and Hindu visitors.',
        weather: W('16°–28°C, mild and humid', '18°–24°C, heavy rainfall', '4°–16°C, cool and clear'),
        bestSeason: 'October to May',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days with Tendong Hill' },
        budgetTier: 'under-10k',
        remoteness: 3,
        costPerDay: COST(1100, 2300, 4800),
        howToReach: {
          air: 'Pakyong Airport is about 45 km away.',
          rail: 'New Jalpaiguri is the nearest railhead, roughly 100 km away.',
          road: 'Shared taxis run from Gangtok, taking around 3 hours.',
        },
        gettingAround: 'Taxis cover the hilltop complexes, which sit a short drive from the town centre.',
      },
    ],
  },
  {
    id: 'punjab',
    name: 'Punjab',
    region: 'North',
    tagline: 'Golden fields, Sikh heritage and border ceremony',
    accent: 'saffron',
    scene: 'spiritual',
    blurb:
      'Punjab centres on Sikh faith and Punjabi food culture, from the Golden Temple\'s langar halls to the planned modernism of Chandigarh and the royal legacy of Patiala.',
    cities: [
      {
        id: 'amritsar',
        name: 'Amritsar',
        scene: 'spiritual',
        tagline: 'The Golden Temple and its endless free kitchen',
        whyVisit:
          'Sikhism\'s holiest site, where the gold-plated Harmandir Sahib sits in a sacred pool and a volunteer-run kitchen feeds tens of thousands of visitors a day, regardless of faith.',
        about:
          'The Golden Temple complex draws pilgrims and visitors of every background, both for the shrine itself — its lower half in white marble, its upper structure gilded in gold — and for the langar, a free community kitchen that has served meals around the clock for centuries. Jallianwala Bagh, the site of the 1919 massacre, sits a short walk away, and the nightly flag-lowering ceremony at Wagah border draws crowds most evenings.',
        highlights: ['Harmandir Sahib (Golden Temple) and its sacred pool', 'The langar community kitchen, open to all visitors', 'The evening Beating Retreat ceremony at Wagah border'],
        attractions: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum', 'Gobindgarh Fort'],
        experiences: ['Spiritual', 'Culture', 'History', 'Food'],
        history:
          'Built around a sacred pool excavated in the 16th century by the fourth Sikh Guru, Guru Ram Das, the Golden Temple was completed in its current gilded form in the early 19th century under Maharaja Ranjit Singh, and the surrounding city later became the site of the 1919 Jallianwala Bagh massacre.',
        weather: W('28°–42°C, very hot and dry', '28°–35°C, humid with heavy spells', '4°–18°C, cold, dense winter fog'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days including the Wagah ceremony' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1100, 2400, 5200),
        howToReach: {
          air: 'Sri Guru Ram Dass Jee International Airport connects Amritsar to major Indian and some international cities.',
          rail: 'Amritsar Junction is a major stop on the Delhi–Amritsar line.',
          road: 'National highways connect Amritsar to Delhi (around 6 hrs) and Chandigarh (4–5 hrs).',
        },
        gettingAround: 'Auto-rickshaws and app cabs cover the city; the temple complex itself is walkable and shoeless.',
      },
      {
        id: 'chandigarh',
        name: 'Chandigarh',
        scene: 'urban',
        tagline: 'Le Corbusier\'s planned modernist capital',
        whyVisit:
          'India\'s first fully planned post-independence city, designed by Le Corbusier, with an outsider-art Rock Garden built entirely from recycled waste.',
        about:
          'Chandigarh was designed from the ground up in the 1950s by the Swiss-French architect Le Corbusier as the shared capital of Punjab and Haryana, and its grid of numbered sectors, wide roads and Brutalist government buildings remain a rare example of a fully realised modernist master plan in India. The Rock Garden, built secretly over decades by a government official from industrial and household waste, sits at the opposite aesthetic extreme just outside the planned core.',
        highlights: ['The Capitol Complex\'s Le Corbusier-designed government buildings', 'Nek Chand\'s Rock Garden, built entirely from recycled waste', 'Sukhna Lake, a planned reservoir at the city\'s edge'],
        attractions: ['Rock Garden', 'Sukhna Lake', 'Capitol Complex', 'Rose Garden', 'Chandigarh Museum'],
        experiences: ['Culture'],
        history:
          'Commissioned by Jawaharlal Nehru after Partition left Punjab without a capital, Chandigarh was designed by Le Corbusier from 1951 onward as a symbol of a modern, planned India, and it remains one of the few cities in the world built from a single architect\'s master plan.',
        weather: W('28°–41°C, hot and dry', '27°–33°C, humid, moderate rain', '4°–19°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2 days', complete: '2–3 days including Sukhna Lake' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1300, 2800, 6000),
        howToReach: {
          air: 'Chandigarh Airport connects to major Indian cities.',
          rail: 'Chandigarh Junction is well connected to Delhi and Amritsar.',
          road: 'National highways connect it to Delhi (around 4–5 hrs) and Amritsar (4–5 hrs).',
        },
        gettingAround: 'The sector-based grid makes app cabs and autos the easiest way to get around.',
      },
      {
        id: 'ludhiana',
        name: 'Ludhiana',
        scene: 'urban',
        tagline: 'Punjab\'s industrial and food capital',
        whyVisit:
          'Punjab\'s largest city and a genuine food destination, known for its textile and hosiery industry as much as its street food.',
        about:
          'Ludhiana grew into Punjab\'s largest industrial city on the back of its textile, hosiery and bicycle manufacturing, and while it draws fewer sightseers than Amritsar or Chandigarh, it\'s a serious food city — from stuffed parathas to Punjabi-style tandoori dishes served in the old city\'s bazaars. Punjab Agricultural University\'s campus and museum offer a quieter counterpoint to the market districts.',
        highlights: ['A serious Punjabi street-food scene across the old city', 'Punjab Agricultural University\'s campus and rural-life museum', 'Working textile and hosiery markets'],
        attractions: ['Punjab Agricultural University Museum', 'Phillaur Fort (day trip)', 'Rakh Bagh Park', 'Sarabha Nagar Market', 'Nehru Rose Garden'],
        experiences: ['Food', 'Culture'],
        history:
          'Ludhiana takes its name from the Lodi dynasty, which founded the settlement in the late 15th century, and the city grew into Punjab\'s largest industrial and manufacturing hub through the 20th century, particularly after Partition brought an influx of skilled labour.',
        weather: W('28°–41°C, hot and dry', '27°–33°C, humid, moderate rain', '3°–18°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days with a food-focused itinerary' },
        budgetTier: 'under-10k',
        remoteness: 1,
        costPerDay: COST(1000, 2100, 4600),
        howToReach: {
          air: 'Sahnewal Airport has limited flights; Chandigarh Airport, about 100 km away, has more options.',
          rail: 'Ludhiana Junction is a major stop between Delhi and Amritsar.',
          road: 'National highways connect it to Chandigarh (2 hrs) and Amritsar (2.5 hrs).',
        },
        gettingAround: 'Auto-rickshaws and app cabs are the standard way to get around.',
      },
      {
        id: 'patiala',
        name: 'Patiala',
        scene: 'heritage',
        tagline: 'Royal Punjab, from turbans to peg measures',
        whyVisit:
          'A former princely capital whose royal legacy still shapes everyday Punjabi culture, from the Patiala salwar to the "Patiala peg" measure of whisky.',
        about:
          'Patiala was the seat of a Sikh princely state whose maharajas left behind a distinctive architectural and cultural legacy — the fortified Qila Mubarak, the mirror-work Sheesh Mahal, and gardens laid out for royal leisure. Several everyday Punjabi terms, including the Patiala salwar and the oversized "Patiala peg," trace directly back to the city\'s royal court culture.',
        highlights: ['Qila Mubarak, the fortified royal seat', 'Sheesh Mahal\'s mirror-work interiors', 'Baradari Gardens, once the maharaja\'s private grounds'],
        attractions: ['Qila Mubarak', 'Sheesh Mahal', 'Baradari Gardens', 'Moti Bagh Palace', 'Kali Devi Temple'],
        experiences: ['History', 'Culture'],
        history:
          'Founded in 1763 by Baba Ala Singh as the capital of the Patiala princely state, the city grew under successive Sikh maharajas into one of the wealthiest and most architecturally ambitious courts in pre-independence Punjab.',
        weather: W('28°–41°C, hot and dry', '27°–33°C, humid, moderate rain', '3°–18°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days including Sheesh Mahal' },
        budgetTier: 'under-10k',
        remoteness: 1,
        costPerDay: COST(1000, 2200, 4800),
        howToReach: {
          air: 'Chandigarh Airport is about 65 km away.',
          rail: 'Patiala railway station is connected to the broader Punjab rail network.',
          road: 'National highways connect it to Chandigarh (1.5–2 hrs) and Delhi (5–6 hrs).',
        },
        gettingAround: 'Auto-rickshaws cover the old city and palace complexes.',
      },
      {
        id: 'anandpur-sahib',
        name: 'Anandpur Sahib',
        scene: 'spiritual',
        tagline: 'Where the Khalsa was founded',
        whyVisit:
          'The town where Guru Gobind Singh founded the Khalsa in 1699, home to one of Sikhism\'s five Takhts and a striking modern museum on Sikh history.',
        about:
          'Anandpur Sahib holds deep significance in Sikh history as the site where the tenth Guru, Gobind Singh, founded the Khalsa order in 1699, and Takht Sri Kesgarh Sahib, one of the religion\'s five Takhts (seats of authority), stands here as a result. The Virasat-e-Khalsa museum, a striking modern building, traces the broader sweep of Sikh history and the Khalsa\'s founding.',
        highlights: ['Takht Sri Kesgarh Sahib, one of Sikhism\'s five Takhts', 'Virasat-e-Khalsa, a large modern museum on Sikh history', 'The town\'s role as the founding site of the Khalsa'],
        attractions: ['Takht Sri Kesgarh Sahib', 'Virasat-e-Khalsa Museum', 'Anandgarh Fort', 'Gurdwara Bhaisora Sahib', 'Charan Ganga River'],
        experiences: ['Spiritual', 'History'],
        history:
          'Guru Gobind Singh founded the Khalsa Panth here on Baisakhi day in 1699, an event considered a turning point in Sikh history, and Anandpur Sahib remains one of the most sacred sites in Sikhism as a result, marked each year by a major Hola Mohalla festival.',
        weather: W('27°–39°C, hot and dry', '26°–31°C, moderate rain', '4°–18°C, cold, clear'),
        bestSeason: 'October to March, and during Hola Mohalla (March)',
        duration: { quick: '1 day', standard: '1 day', complete: '2 days including the museum' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(900, 1900, 4200),
        howToReach: {
          air: 'Chandigarh Airport is about 90 km away.',
          rail: 'Anandpur Sahib has its own railway station.',
          road: 'Taxis and buses from Chandigarh take around 2–2.5 hours.',
        },
        gettingAround: 'The town\'s religious sites are within walking distance of each other.',
      },
    ],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    region: 'North · Desert',
    tagline: 'Desert forts and lake palaces',
    accent: 'maroon',
    scene: 'desert',
    blurb:
      'Rajasthan\'s hilltop forts, walled cities and lake palaces trace centuries of Rajput history across the Thar desert, each city built around a different stone — pink, blue, golden or white.',
    cities: [
      {
        id: 'jaipur',
        name: 'Jaipur',
        scene: 'heritage',
        tagline: 'The Pink City, planned by a king-astronomer',
        whyVisit:
          'A deliberately planned 18th-century capital, painted pink for a royal visit and still centred on a working observatory of giant stone instruments.',
        about:
          'Jaipur was laid out in 1727 by Maharaja Sawai Jai Singh II according to Vastu Shastra planning principles, giving it a rare geometric regularity for a city of its age. The Hawa Mahal\'s honeycomb façade, Amber Fort\'s hilltop ramparts and the Jantar Mantar\'s giant astronomical instruments all date from the same royal building programme.',
        highlights: ['Hawa Mahal\'s honeycomb sandstone façade', 'Amber Fort, reached by a short hilltop drive or elephant ride', 'Jantar Mantar\'s giant stone astronomical instruments'],
        attractions: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort'],
        experiences: ['History', 'Culture'],
        history:
          'Founded in 1727 by Maharaja Sawai Jai Singh II as a planned replacement for the older capital at Amber, Jaipur was painted pink in 1876 to welcome the Prince of Wales, a colour scheme the city has maintained ever since as its defining visual identity.',
        weather: W('26°–41°C, hot and dry', '27°–34°C, moderate rain', '8°–24°C, cool and clear'),
        bestSeason: 'October to March',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days including Nahargarh sunset' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1400, 2900, 6200),
        howToReach: {
          air: 'Jaipur International Airport connects to major Indian and some international cities.',
          rail: 'Jaipur Junction is well connected to Delhi, Agra and Mumbai.',
          road: 'National highways connect it to Delhi (around 5–6 hrs) and Agra (4–5 hrs).',
        },
        gettingAround: 'Auto-rickshaws, app cabs and a small metro line cover the city.',
      },
      {
        id: 'jaisalmer',
        name: 'Jaisalmer',
        scene: 'desert',
        tagline: 'A living fort rising from the Thar sand',
        whyVisit:
          'The Golden City, built almost entirely from honey-coloured sandstone, with a fort that\'s still inhabited and dunes just outside town for a night under the desert sky.',
        about:
          'Jaisalmer Fort is one of the few "living forts" in the world, with a quarter of the old city\'s population still residing within its walls among temples, havelis and shops. Outside town, the Sam sand dunes offer camel and jeep safaris culminating in overnight desert camps, a well-established Rajasthan tradition.',
        highlights: ['Jaisalmer Fort, still inhabited after 800 years', 'Ornately carved havelis in the old city', 'Camel safaris and overnight camps at the Sam dunes'],
        attractions: ['Jaisalmer Fort', 'Patwon ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake', 'Kuldhara (abandoned village)'],
        experiences: ['Adventure', 'History', 'Culture'],
        history:
          'Founded in 1156 by Rawal Jaisal, Jaisalmer grew wealthy as a stop on the caravan trade routes between India and Central Asia, and its fort and merchant havelis, carved from local golden sandstone, reflect that trading-era prosperity.',
        weather: W('25°–42°C, extreme desert heat', '28°–36°C, light and irregular rain', '6°–24°C, cool days, cold desert nights'),
        bestSeason: 'October to March',
        duration: { quick: '2 days', standard: '3 days', complete: '3–4 days including a desert camp' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1300, 2800, 6000),
        howToReach: {
          air: 'Jaisalmer Airport has limited seasonal flights from Delhi and Jaipur.',
          rail: 'Jaisalmer railway station connects to Jaipur and Delhi.',
          road: 'Buses and taxis from Jodhpur take around 5–6 hours.',
        },
        gettingAround: 'Auto-rickshaws cover the town; jeeps or camels handle the dunes.',
      },
      {
        id: 'udaipur',
        name: 'Udaipur',
        scene: 'lake',
        tagline: 'The City of Lakes, palace-ringed',
        whyVisit:
          'Rajasthan\'s most romantic city, with a palace that seems to float on Lake Pichola and a skyline of white marble reflected in the water.',
        about:
          'Udaipur was built around a series of artificial lakes, and the City Palace complex, along with the smaller Jag Mandir island palace, still dominate the shoreline of Lake Pichola much as they did when the Mewar dynasty ruled from here. Boat rides across the lake at sunset remain the city\'s signature experience.',
        highlights: ['Sunset boat rides across Lake Pichola', 'The City Palace complex overlooking the water', 'Jag Mandir, a palace built on its own island'],
        attractions: ['Lake Pichola', 'City Palace', 'Jag Mandir', 'Saheliyon ki Bari', 'Fateh Sagar Lake'],
        experiences: ['History', 'Culture'],
        history:
          'Founded in 1559 by Maharana Udai Singh II after the sacking of the previous Mewar capital at Chittorgarh, Udaipur was built deliberately around defensible lakes and hills, and it remained the Mewar dynasty\'s capital until India\'s independence.',
        weather: W('25°–38°C, hot and dry', '26°–32°C, moderate rain, lakes at their fullest', '9°–26°C, mild and pleasant'),
        bestSeason: 'September to March',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days including Fateh Sagar' },
        budgetTier: '10k-20k',
        remoteness: 2,
        costPerDay: COST(1500, 3200, 7000),
        howToReach: {
          air: 'Maharana Pratap Airport connects to major Indian cities.',
          rail: 'Udaipur City railway station connects to Delhi, Jaipur and Ahmedabad.',
          road: 'National highways connect it to Jaipur (around 6 hrs) and Ahmedabad (4–5 hrs).',
        },
        gettingAround: 'Boats cross the lake; auto-rickshaws and app cabs cover the city.',
      },
      {
        id: 'jodhpur',
        name: 'Jodhpur',
        scene: 'desert',
        tagline: 'The Blue City, guarded by a hilltop fort',
        whyVisit:
          'A sea of blue-painted houses beneath one of Rajasthan\'s most imposing forts, with panoramic desert views from the ramparts.',
        about:
          'Jodhpur\'s old city is famous for its indigo-blue-washed houses, originally a Brahmin-caste marker that spread more widely over time, seen best from the ramparts of Mehrangarh Fort towering above the city. Umaid Bhawan Palace, one of the largest private residences in the world, adds a 20th-century Art Deco layer to the older Rajput architecture.',
        highlights: ['Panoramic city views from Mehrangarh Fort', 'The blue-washed old city below the ramparts', 'Umaid Bhawan Palace, a 20th-century Art Deco palace'],
        attractions: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Blue City old town', 'Clock Tower Market'],
        experiences: ['History', 'Culture'],
        history:
          'Founded in 1459 by Rao Jodha, chief of the Rathore clan, Jodhpur served as the capital of the Kingdom of Marwar, and Mehrangarh Fort, begun the same year, still stands as one of the largest and best-preserved forts in India.',
        weather: W('26°–42°C, very hot and dry', '28°–35°C, light rain', '8°–25°C, mild and dry'),
        bestSeason: 'October to March',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3–4 days including the old city bazaars' },
        budgetTier: '10k-20k',
        remoteness: 2,
        costPerDay: COST(1400, 2900, 6200),
        howToReach: {
          air: 'Jodhpur Airport connects to major Indian cities.',
          rail: 'Jodhpur Junction is well connected to Jaipur, Delhi and Udaipur.',
          road: 'National highways connect it to Jaipur (around 5–6 hrs) and Udaipur (4–5 hrs).',
        },
        gettingAround: 'Auto-rickshaws cover the old city; the fort is a short uphill walk or ride from the clock tower.',
      },
      {
        id: 'pushkar',
        name: 'Pushkar',
        scene: 'spiritual',
        tagline: 'A sacred lake ringed by fifty-two ghats',
        whyVisit:
          'A pilgrimage town built around a lake said to have been formed by a fallen lotus petal, home to one of the only Brahma temples in the world.',
        about:
          'Pushkar Lake is ringed by 52 bathing ghats and considered one of Hinduism\'s most sacred pilgrimage sites, with the adjoining Brahma Temple among the very few temples anywhere dedicated to the creator god. The town\'s laid-back café strip and camel fair — one of the world\'s largest camel and livestock markets — give it a very different, more bohemian energy than Rajasthan\'s bigger cities.',
        highlights: ['The 52 sacred ghats around Pushkar Lake', 'Brahma Temple, one of the world\'s few dedicated to the creator god', 'The annual Pushkar Camel Fair each November'],
        attractions: ['Pushkar Lake', 'Brahma Temple', 'Savitri Temple viewpoint', 'Camel Fairgrounds', 'Rose Garden'],
        experiences: ['Spiritual', 'Culture'],
        history:
          'According to Hindu mythology, Pushkar Lake formed where a lotus petal fell from the hand of Brahma, and the town has functioned as a major pilgrimage centre for centuries, with the annual camel fair adding a large commercial and cultural gathering to its religious calendar.',
        weather: W('25°–40°C, hot and dry', '27°–33°C, light rain', '7°–24°C, cool and clear'),
        bestSeason: 'October to March, especially during the November Camel Fair',
        duration: { quick: '1–2 days', standard: '2 days', complete: '2–3 days during the Camel Fair' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(900, 2000, 4400),
        howToReach: {
          air: 'Jaipur International Airport is about 145 km away.',
          rail: 'Ajmer Junction, about 15 km away, is the nearest railhead.',
          road: 'Buses and taxis from Jaipur take around 3 hours.',
        },
        gettingAround: 'The town is compact and entirely walkable around the lake.',
      },
    ],
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    region: 'South',
    tagline: 'From Deccan ruins to coffee-scented hills',
    accent: 'peacock',
    scene: 'heritage',
    blurb:
      'Karnataka pairs Bengaluru\'s tech-driven pace with royal Mysuru, the boulder-strewn ruins of Hampi, misty Coorg coffee country and a quiet Konkan coastline.',
    cities: [
      {
        id: 'bengaluru',
        name: 'Bengaluru',
        scene: 'urban',
        tagline: 'India\'s Garden City, now its tech capital',
        whyVisit:
          'A green, park-filled city that grew into India\'s technology hub without entirely losing its older colonial-era gardens and market streets.',
        about:
          'Bengaluru earned its "Garden City" nickname from parks like Lalbagh and Cubbon Park, laid out under Mysore rule and the British respectively, and it has since grown into India\'s largest technology and start-up hub. The mix shows in the city itself — glass office parks a short drive from centuries-old markets and a long-running pub and live-music culture.',
        highlights: ['Lalbagh Botanical Garden\'s glasshouse and lake', 'Cubbon Park, a green core through the city centre', 'A long-established live-music and craft-beer scene'],
        attractions: ['Lalbagh Botanical Garden', 'Cubbon Park', 'Bangalore Palace', 'Vidhana Soudha', 'ISKCON Temple'],
        experiences: ['Culture', 'Food'],
        history:
          'Founded in 1537 by Kempe Gowda I as a fortified town, Bengaluru grew steadily under Mysore and later British rule, before India\'s post-liberalisation IT boom from the 1990s onward transformed it into the country\'s best-known technology hub.',
        weather: W('20°–33°C, warm days, mild evenings', '20°–28°C, moderate rain, generally pleasant', '15°–28°C, cool and dry, best season'),
        bestSeason: 'October to February',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with day trips nearby' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1400, 3000, 6800),
        howToReach: {
          air: 'Kempegowda International Airport connects Bengaluru to the world.',
          rail: 'Bengaluru City Junction is a major southern rail hub.',
          road: 'National highways connect it to Mysuru (3 hrs) and Chennai (6 hrs).',
        },
        gettingAround: 'The Namma Metro, app cabs and autos cover most of the city.',
      },
      {
        id: 'mysuru',
        name: 'Mysuru',
        scene: 'heritage',
        tagline: 'A royal palace lit up every night',
        whyVisit:
          'The former seat of the Wadiyar dynasty, with an Indo-Saracenic palace that\'s illuminated with close to 100,000 bulbs on Sundays and during Dasara.',
        about:
          'Mysuru Palace, rebuilt in its current Indo-Saracenic form in the early 20th century after a fire destroyed the previous wooden structure, remains the city\'s centrepiece and one of India\'s most-visited monuments outside the major metros. The city also anchors Karnataka\'s Dasara festival, a ten-day celebration with royal processions dating back centuries, and is known nationally for its silk and sandalwood.',
        highlights: ['Mysuru Palace illuminated with tens of thousands of lights', 'The ten-day Dasara festival and its royal procession', 'A long-running silk-weaving and sandalwood-craft tradition'],
        attractions: ['Mysuru Palace', 'Chamundi Hills', 'Devaraja Market', 'St. Philomena\'s Church', 'Jaganmohan Palace'],
        experiences: ['History', 'Culture'],
        history:
          'Mysuru was the capital of the Kingdom of Mysore under the Wadiyar dynasty for close to five centuries, and the current palace, completed in 1912 after a fire destroyed its wooden predecessor, remains one of India\'s largest royal residences.',
        weather: W('22°–34°C, warm', '21°–28°C, moderate rain', '14°–28°C, cool and dry'),
        bestSeason: 'October to February, especially during Dasara',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days including Chamundi Hills' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1200, 2600, 5600),
        howToReach: {
          air: 'Mysuru Airport has limited flights; Bengaluru Airport, about 170 km away, has far more options.',
          rail: 'Mysuru Junction is well connected to Bengaluru and Chennai.',
          road: 'National highways connect it to Bengaluru (around 3 hrs).',
        },
        gettingAround: 'Auto-rickshaws and app cabs cover the city easily.',
      },
      {
        id: 'coorg',
        name: 'Coorg',
        scene: 'tea',
        tagline: 'Misty coffee country in the Western Ghats',
        whyVisit:
          'Karnataka\'s coffee-growing highlands, wrapped in mist and forest, with a distinct Kodava culture and cuisine found nowhere else in India.',
        about:
          'Coorg (officially Kodagu), centred on the town of Madikeri, grows much of Karnataka\'s coffee under a canopy of shade trees across its hilly landscape, giving it a cooler, greener character than most of the state. The Kodava community here has a distinct language, martial history and cuisine, including its own style of pork curry rarely found elsewhere in India.',
        highlights: ['Coffee plantation walks and estate stays', 'Abbey Falls, a short walk from Madikeri', 'Distinct Kodava culture and cuisine'],
        attractions: ['Abbey Falls', 'Raja\'s Seat viewpoint', 'Madikeri Fort', 'Dubare Elephant Camp', 'Talakaveri (Kaveri River source)'],
        experiences: ['Mountains', 'Food', 'Adventure'],
        history:
          'Historically an independent Kodava kingdom until its annexation by the British in 1834, Coorg has retained a distinct regional identity, language and martial tradition even as it became one of India\'s major coffee-producing regions under colonial-era plantation development.',
        weather: W('20°–30°C, warm, cooler in the hills', '18°–24°C, very heavy rainfall', '12°–26°C, cool and misty'),
        bestSeason: 'October to May',
        duration: { quick: '2 days', standard: '3 days', complete: '4 days including Talakaveri and Dubare' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1400, 2900, 6200),
        howToReach: {
          air: 'Mangaluru Airport is about 135 km away; Bengaluru around 260 km.',
          rail: 'Mysuru Junction, roughly 120 km away, is the nearest major railhead.',
          road: 'Buses and taxis from Mysuru take around 3 hours.',
        },
        gettingAround: 'A rented vehicle is the easiest way to cover the spread-out plantations and viewpoints.',
      },
      {
        id: 'hampi',
        name: 'Hampi',
        scene: 'heritage',
        tagline: 'Boulder-strewn ruins of a vanished empire',
        whyVisit:
          'The sprawling ruins of Vijayanagara, once one of the richest cities in the world, scattered across a surreal landscape of giant granite boulders.',
        about:
          'Hampi\'s ruins spread across several square kilometres of boulder-strewn ground along the Tungabhadra River, all that remains of Vijayanagara, capital of one of medieval India\'s largest empires before its destruction in 1565. The stone chariot at Vijaya Vittala Temple and the still-active Virupaksha Temple are the best-known landmarks among hundreds of temples, market streets and royal structures.',
        highlights: ['Vijaya Vittala Temple\'s iconic stone chariot', 'Bouldering and rock-climbing among the giant granite formations', 'Virupaksha Temple, still active after 700+ years'],
        attractions: ['Vijaya Vittala Temple', 'Virupaksha Temple', 'Hampi Bazaar', 'Matanga Hill viewpoint', 'Lotus Mahal'],
        experiences: ['History', 'Culture', 'Adventure'],
        history:
          'Hampi was the capital of the Vijayanagara Empire, one of the wealthiest cities in the world during the 14th to 16th centuries, before it was sacked and largely destroyed by a coalition of Deccan sultanates in 1565, leaving the ruins that make up today\'s UNESCO World Heritage Site.',
        weather: W('25°–40°C, very hot and dry', '27°–34°C, light and irregular rain', '15°–30°C, warm days, cool nights'),
        bestSeason: 'October to February',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days including sunrise at Matanga Hill' },
        budgetTier: 'under-10k',
        remoteness: 3,
        costPerDay: COST(900, 2000, 4400),
        howToReach: {
          air: 'Hubli Airport is about 165 km away; Bengaluru around 350 km.',
          rail: 'Hospet Junction, about 13 km away, is the nearest railhead.',
          road: 'Buses and taxis from Hospet take around 30 minutes.',
        },
        gettingAround: 'Bicycles and mopeds are the standard way to cover the wide-spread ruins.',
      },
      {
        id: 'gokarna',
        name: 'Gokarna',
        scene: 'beach',
        tagline: 'A temple town with a beach on the side',
        whyVisit:
          'A pilgrimage town with a string of quieter, less commercial beaches than Goa, connected by a coastal walking trail over headlands.',
        about:
          'Gokarna functions first as a Hindu pilgrimage town, home to the Mahabaleshwar Temple and its sacred Shiva linga, and second as a laid-back beach destination reached by walking trails that link Om Beach, Kudle Beach and Half Moon Beach over rocky headlands. The mix keeps it calmer and less built-up than the Goan coast further north.',
        highlights: ['A walking trail linking Om, Kudle and Half Moon beaches', 'Mahabaleshwar Temple, an active pilgrimage site', 'Quieter, less developed beaches than nearby Goa'],
        attractions: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple', 'Half Moon Beach', 'Gokarna Main Beach'],
        experiences: ['Beaches', 'Spiritual'],
        history:
          'Gokarna has been a pilgrimage centre for well over a thousand years, referenced in Hindu scripture as one of seven sacred Muktikshetras, and its beaches developed as a low-key travellers\' destination only from the 1990s onward, in the shadow of Goa\'s larger tourism industry.',
        weather: W('26°–33°C, hot and humid', '24°–29°C, very heavy rain, rough seas', '20°–31°C, warm and calm'),
        bestSeason: 'October to March',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days covering all the beaches' },
        budgetTier: 'under-10k',
        remoteness: 3,
        costPerDay: COST(900, 2000, 4400),
        howToReach: {
          air: 'Goa\'s Dabolim Airport is about 145 km away.',
          rail: 'Gokarna Road railway station is a short drive from town.',
          road: 'Buses and taxis from Goa take around 3–4 hours.',
        },
        gettingAround: 'The beaches are linked by walking trails; autos cover the town itself.',
      },
    ],
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    region: 'North',
    tagline: 'The Taj, the Ganga and the Nawabs',
    accent: 'maroon',
    scene: 'heritage',
    blurb:
      'Uttar Pradesh holds the Taj Mahal, the sacred Ganga ghats of Varanasi and the Nawabi refinement of Lucknow, making it one of the densest concentrations of Indian heritage anywhere.',
    cities: [
      {
        id: 'agra',
        name: 'Agra',
        scene: 'heritage',
        tagline: 'Home to the Taj Mahal',
        whyVisit:
          'The white-marble mausoleum that needs no introduction, alongside a red-sandstone Mughal fort and a ghost city built and abandoned within 15 years.',
        about:
          'The Taj Mahal, built by Shah Jahan as a mausoleum for his wife Mumtaz Mahal, remains Agra\'s reason for being on almost every visitor\'s itinerary, best seen at sunrise when the marble shifts colour with the early light. Agra Fort, a short distance away, was the primary Mughal residence before Delhi, and Fatehpur Sikri, a full sandstone capital abandoned after just 15 years due to water shortages, sits a short drive outside the city.',
        highlights: ['Sunrise at the Taj Mahal, when the marble changes colour', 'Agra Fort\'s red-sandstone Mughal palaces', 'Fatehpur Sikri, an abandoned Mughal capital nearby'],
        attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Itmad-ud-Daulah (Baby Taj)', 'Mehtab Bagh'],
        experiences: ['History', 'Culture'],
        history:
          'Commissioned in 1632 by Mughal emperor Shah Jahan as a mausoleum for his wife Mumtaz Mahal, the Taj Mahal took roughly two decades to complete and stands today as one of the most recognised structures in the world and a UNESCO World Heritage Site.',
        weather: W('27°–43°C, very hot and dry', '28°–35°C, humid with heavy spells', '5°–21°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days including Fatehpur Sikri' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1300, 2800, 6200),
        howToReach: {
          air: 'Agra Airport has limited flights; Delhi, about 230 km away, is the usual entry point.',
          rail: 'Agra Cantonment station is well connected, including by high-speed rail from Delhi.',
          road: 'The Yamuna Expressway connects Delhi to Agra in around 3–3.5 hours.',
        },
        gettingAround: 'Auto-rickshaws and app cabs cover the city; electric vehicles are required near the Taj itself.',
      },
      {
        id: 'varanasi',
        name: 'Varanasi',
        scene: 'spiritual',
        tagline: 'Ganga ghats in one of the world\'s oldest living cities',
        whyVisit:
          'A city built directly onto the Ganga\'s banks, where dawn boat rides and the nightly Ganga aarti are as central to daily life as they are to any visitor\'s itinerary.',
        about:
          'Varanasi is among the oldest continuously inhabited cities in the world, and its identity is inseparable from the Ganga — dozens of stone ghats line the riverbank, used for everything from ritual bathing to cremation, and the Kashi Vishwanath Temple, one of Hinduism\'s twelve Jyotirlinga shrines, sits a short walk from the water. Dawn boat rides past the ghats and the elaborate evening Ganga aarti ceremony are the city\'s two signature experiences.',
        highlights: ['Dawn boat rides along the Ganga ghats', 'The nightly Ganga aarti at Dashashwamedh Ghat', 'Kashi Vishwanath Temple, one of twelve Jyotirlingas'],
        attractions: ['Dashashwamedh Ghat', 'Kashi Vishwanath Temple', 'Manikarnika Ghat', 'Sarnath (Buddhist site, day trip)', 'Assi Ghat'],
        experiences: ['Spiritual', 'Culture', 'History'],
        history:
          'Referenced in texts dating back over 3,000 years, Varanasi has been a centre of Hindu pilgrimage, learning and the arts for most of recorded Indian history, and nearby Sarnath, where the Buddha delivered his first sermon, adds a major Buddhist heritage layer to the same region.',
        weather: W('27°–42°C, very hot and dry', '27°–33°C, humid, occasional flooding of lower ghats', '6°–22°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2–3 days', complete: '3 days including Sarnath' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(1000, 2200, 5000),
        howToReach: {
          air: 'Lal Bahadur Shastri Airport connects Varanasi to major Indian cities.',
          rail: 'Varanasi Junction is a major stop on multiple national rail lines.',
          road: 'National highways connect it to Lucknow (around 4–5 hrs) and Prayagraj (2.5 hrs).',
        },
        gettingAround: 'Boats cover the riverfront; cycle-rickshaws and walking handle the narrow old-city lanes.',
      },
      {
        id: 'lucknow',
        name: 'Lucknow',
        scene: 'heritage',
        tagline: 'Nawabi refinement and kebab culture',
        whyVisit:
          'The former seat of the Nawabs of Awadh, known for its unhurried courtly manners, delicate chikankari embroidery and some of North India\'s best kebabs.',
        about:
          'Lucknow carries the legacy of the Nawabs of Awadh in its architecture — the vast Bara Imambara, the Roman-inspired Chota Imambara, and the ruined Residency, site of a major 1857 siege — as much as in its culture of tehzeeb, a courtly emphasis on manners and hospitality that still shapes the city. The kebabs of Tunday and the chikankari embroidery sold across its markets are two of its most tangible everyday exports.',
        highlights: ['Bara Imambara\'s vast unsupported hall and maze', 'Chikankari embroidery workshops and markets', 'Melt-in-the-mouth Lucknowi kebabs, especially around Chowk'],
        attractions: ['Bara Imambara', 'Chota Imambara', 'The Residency', 'Rumi Darwaza', 'Hazratganj Market'],
        experiences: ['History', 'Culture', 'Food'],
        history:
          'Lucknow rose to prominence as the capital of the Nawabs of Awadh from the mid-18th century, who cultivated the city\'s distinctive arts, cuisine and architecture, and it later became a major site of the 1857 uprising against British rule, commemorated at the ruined Residency.',
        weather: W('27°–43°C, very hot and dry', '28°–34°C, humid with heavy spells', '6°–21°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with a dedicated food trail' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1200, 2600, 5600),
        howToReach: {
          air: 'Chaudhary Charan Singh International Airport connects Lucknow to major cities.',
          rail: 'Lucknow Charbagh is a major rail hub on multiple lines.',
          road: 'The Lucknow–Agra Expressway and national highways connect it to Agra (around 5–6 hrs) and Delhi (7–8 hrs).',
        },
        gettingAround: 'The Lucknow Metro, auto-rickshaws and app cabs cover the city.',
      },
      {
        id: 'ayodhya',
        name: 'Ayodhya',
        scene: 'spiritual',
        tagline: 'A pilgrimage town on the banks of the Saryu',
        whyVisit:
          'A significant Hindu pilgrimage town on the Saryu River, centred on the Ram Janmabhoomi temple complex and its ghats.',
        about:
          'Ayodhya is regarded in Hindu tradition as the birthplace of Lord Rama, and the Ram Janmabhoomi temple complex has become the city\'s central pilgrimage site, drawing large numbers of visitors alongside older temples and the ghats lining the Saryu River. Evening river ceremonies and a growing network of temples and dharamshalas now shape much of the town\'s daily rhythm.',
        highlights: ['Ram Janmabhoomi temple complex', 'Evening aarti along the Saryu River ghats', 'A dense concentration of older temples across the old town'],
        attractions: ['Ram Janmabhoomi Temple', 'Saryu Ghat', 'Hanuman Garhi', 'Kanak Bhawan', 'Treta Ke Thakur'],
        experiences: ['Spiritual', 'History'],
        history:
          'Ayodhya is described in the Ramayana as the capital of the ancient kingdom of Kosala and the birthplace of Lord Rama, and the city has functioned as a major Hindu pilgrimage site for centuries, with the Ram Janmabhoomi temple\'s consecration in 2024 marking a significant recent chapter in its long religious history.',
        weather: W('27°–42°C, very hot and dry', '27°–33°C, humid, river can flood the lower ghats', '6°–21°C, cold, foggy mornings'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days including the older temples' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(900, 2000, 4400),
        howToReach: {
          air: 'Maharishi Valmiki International Airport, Ayodhya, connects to several major cities.',
          rail: 'Ayodhya Junction and Ayodhya Cantt are both well connected.',
          road: 'National highways connect it to Lucknow (around 2.5 hrs) and Varanasi (4–5 hrs).',
        },
        gettingAround: 'Cycle-rickshaws and e-rickshaws are the standard way to reach the temple complex and ghats.',
      },
      {
        id: 'mathura',
        name: 'Mathura',
        scene: 'spiritual',
        tagline: 'Krishna\'s birthplace on the Yamuna',
        whyVisit:
          'The traditional birthplace of Lord Krishna, paired with neighbouring Vrindavan\'s temples and famous for its exuberant Holi celebrations.',
        about:
          'Mathura is regarded as the birthplace of Lord Krishna, and the Krishna Janmabhoomi temple complex marks the traditional site, while nearby Vrindavan holds dozens of temples associated with Krishna\'s childhood, most famously the Banke Bihari and ISKCON temples. The region is also known nationally for its especially large and colourful Holi celebrations, which run for several days each spring.',
        highlights: ['Krishna Janmabhoomi temple complex', 'Vrindavan\'s dense cluster of Krishna temples', 'Extended, large-scale Holi celebrations each spring'],
        attractions: ['Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Banke Bihari Temple (Vrindavan)', 'ISKCON Temple (Vrindavan)', 'Vishram Ghat'],
        experiences: ['Spiritual', 'Culture'],
        history:
          'One of the seven sacred cities of Hinduism, Mathura is traditionally identified as the birthplace of Lord Krishna, and the surrounding Braj region, including Vrindavan, has been a centre of Krishna devotion and temple-building for well over a thousand years.',
        weather: W('27°–43°C, very hot and dry', '28°–34°C, humid', '6°–21°C, cold, foggy mornings'),
        bestSeason: 'October to March, especially around Holi and Janmashtami',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days including Vrindavan' },
        budgetTier: 'under-10k',
        remoteness: 1,
        costPerDay: COST(900, 2000, 4400),
        howToReach: {
          air: 'Agra\'s airport, about 60 km away, is the nearest with regular flights.',
          rail: 'Mathura Junction is well connected to Delhi and Agra.',
          road: 'National highways connect it to Delhi (around 3.5 hrs) and Agra (1.5 hrs).',
        },
        gettingAround: 'Auto-rickshaws and e-rickshaws cover both Mathura and Vrindavan.',
      },
    ],
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    region: 'West',
    tagline: 'White salt desert, temples and a lion\'s last home',
    accent: 'saffron',
    scene: 'desert',
    blurb:
      'Gujarat runs from the stepwells and heritage lanes of Ahmedabad to the blinding white expanse of the Rann of Kutch and the only wild home of the Asiatic lion.',
    cities: [
      {
        id: 'ahmedabad',
        name: 'Ahmedabad',
        scene: 'heritage',
        tagline: 'A UNESCO heritage city of pols and stepwells',
        whyVisit:
          'India\'s first UNESCO World Heritage City, with a historic core of dense residential pols, carved stepwells and Gandhi\'s riverside ashram.',
        about:
          'Ahmedabad\'s walled old city is threaded with pols — densely packed residential clusters with elaborately carved wooden facades — and step-wells like Adalaj that combine architecture with practical water storage in a way distinct to the region. Sabarmati Ashram, where Gandhi lived and planned the Salt March, sits along the river that now anchors the city\'s modern riverfront promenade.',
        highlights: ['Ahmedabad\'s historic pols and carved wooden facades', 'Adalaj Stepwell\'s intricate multi-storey carving', 'Sabarmati Ashram, Gandhi\'s riverside home'],
        attractions: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Jama Masjid', 'Sabarmati Riverfront', 'Kankaria Lake'],
        experiences: ['History', 'Culture', 'Food'],
        history:
          'Founded in 1411 by Sultan Ahmed Shah, Ahmedabad grew into a major trading and textile centre, and its old city\'s pols and mosques, combined with its later role as the base for Gandhi\'s independence movement, led UNESCO to designate it India\'s first Heritage City in 2017.',
        weather: W('28°–42°C, very hot and dry', '28°–34°C, moderate rain', '10°–29°C, dry and pleasant'),
        bestSeason: 'November to February',
        duration: { quick: '1–2 days', standard: '2 days', complete: '3 days with a heritage-walk focus' },
        budgetTier: '10k-20k',
        remoteness: 1,
        costPerDay: COST(1200, 2600, 5600),
        howToReach: {
          air: 'Sardar Vallabhbhai Patel International Airport connects to major Indian and some international cities.',
          rail: 'Ahmedabad Junction is a major western-India rail hub.',
          road: 'National highways connect it to Mumbai (around 8–9 hrs) and Udaipur (4–5 hrs).',
        },
        gettingAround: 'The BRTS bus system, auto-rickshaws and app cabs cover the city.',
      },
      {
        id: 'kutch',
        name: 'Kutch',
        scene: 'desert',
        tagline: 'A white salt desert stretching to the horizon',
        whyVisit:
          'The Great Rann of Kutch, a seasonal salt marsh that turns into a blinding white desert, ringed by handicraft villages and a lively winter festival.',
        about:
          'The Rann of Kutch is a vast seasonal salt marsh that dries into a stark white expanse each winter, when the annual Rann Utsav sets up tented camps for visitors on its edge near Dhordo. The surrounding villages of the Kutch region are known for distinct embroidery, block-printing and leatherwork traditions practised by several different artisan communities.',
        highlights: ['The White Rann\'s vast salt-desert horizon, especially near full moon', 'The winter Rann Utsav tented festival camp', 'Kutchi handicraft villages practising embroidery and block printing'],
        attractions: ['White Rann of Kutch', 'Kutch Museum (Bhuj)', 'Kalo Dungar viewpoint', 'Handicraft villages (Bhujodi, Nirona)', 'Aina Mahal (Bhuj)'],
        experiences: ['Adventure', 'Culture'],
        history:
          'Once a shallow sea inlet, the Rann of Kutch became a seasonal salt marsh over geological time, and the surrounding princely state of Kutch, ruled by the Jadeja dynasty until 1948, left behind the palaces and museums that survive in Bhuj today.',
        weather: W('28°–42°C, extreme desert heat', '30°–36°C, flooded marsh, mostly inaccessible', '8°–26°C, cool days, cold nights, festival season'),
        bestSeason: 'November to February, during the Rann Utsav',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days including handicraft villages' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1500, 3200, 7000),
        howToReach: {
          air: 'Bhuj Airport has regular domestic flights.',
          rail: 'Bhuj railway station connects to Ahmedabad.',
          road: 'National highways connect Bhuj to Ahmedabad (around 6–7 hrs).',
        },
        gettingAround: 'A rented vehicle is needed to cover the Rann, viewpoints and handicraft villages.',
      },
      {
        id: 'gir',
        name: 'Gir (Sasan Gir)',
        scene: 'wildlife',
        tagline: 'The last wild home of the Asiatic lion',
        whyVisit:
          'The only place in the world where the Asiatic lion still roams wild, seen on jeep safaris through dry deciduous forest.',
        about:
          'Gir National Park is the sole surviving wild habitat of the Asiatic lion, a subspecies that once ranged across the Middle East and South Asia but now survives only here after decades of conservation effort. Jeep safaris through the park\'s dry deciduous forest also turn up leopards, striped hyenas and a long list of birdlife alongside the lions.',
        highlights: ['Jeep safaris in search of the Asiatic lion', 'One of India\'s most successful single-species conservation stories', 'Dry deciduous forest and open scrubland scenery'],
        attractions: ['Gir National Park Safari', 'Devalia Safari Park (easier sighting odds)', 'Kamleshwar Dam', 'Gir Interpretation Zone', 'Somnath (day trip)'],
        experiences: ['Wildlife', 'Adventure'],
        history:
          'The Asiatic lion population, once widespread, dwindled to a few dozen individuals by the early 20th century before conservation efforts led by the Nawab of Junagadh and later the Gujarat government brought it back to a stable, protected population confined to Gir.',
        weather: W('27°–42°C, hot and dry', 'Park closed for the monsoon', '10°–29°C, cool mornings, best safari visibility'),
        bestSeason: 'December to March (closed mid-June to mid-October)',
        duration: { quick: '2 days', standard: '2–3 days', complete: '3 days with two safari sessions' },
        budgetTier: '10k-20k',
        remoteness: 3,
        costPerDay: COST(1600, 3400, 7200),
        howToReach: {
          air: 'Diu Airport is about 95 km away; Rajkot around 160 km.',
          rail: 'Junagadh, roughly 60 km away, is the nearest major railhead.',
          road: 'Buses and taxis from Junagadh take around 1.5 hours.',
        },
        gettingAround: 'Safaris run in permitted forest-department jeeps only.',
      },
      {
        id: 'dwarka',
        name: 'Dwarka',
        scene: 'spiritual',
        tagline: 'One of Hinduism\'s four sacred Dhams',
        whyVisit:
          'A coastal pilgrimage town built around the Dwarkadhish Temple, believed to mark the site of Krishna\'s legendary kingdom.',
        about:
          'Dwarka is one of India\'s four Char Dham pilgrimage sites and is traditionally identified as the site of Krishna\'s ancient kingdom, much of which local tradition holds was later submerged by the sea. The Dwarkadhish Temple, with its towering five-storey shikara, anchors the town, and boat trips run out to Bet Dwarka, a small island also linked to Krishna in local legend.',
        highlights: ['Dwarkadhish Temple\'s towering five-storey shikara', 'Boat trips to Bet Dwarka island', 'One of Hinduism\'s four Char Dham pilgrimage sites'],
        attractions: ['Dwarkadhish Temple', 'Bet Dwarka', 'Rukmini Devi Temple', 'Nageshvara Jyotirlinga', 'Gomti Ghat'],
        experiences: ['Spiritual', 'Culture'],
        history:
          'Dwarka is described in Hindu tradition as the ancient capital of Krishna\'s kingdom, and while the current Dwarkadhish Temple dates largely from the 16th century, marine archaeological surveys off the coast have explored submerged structures that some link to the legendary older city.',
        weather: W('27°–38°C, hot, coastal humidity', '28°–33°C, moderate rain', '14°–29°C, warm and dry'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days including Bet Dwarka' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(1000, 2200, 4800),
        howToReach: {
          air: 'Jamnagar Airport is about 145 km away.',
          rail: 'Dwarka railway station is well connected to Ahmedabad.',
          road: 'National highways connect it to Rajkot (around 4 hrs).',
        },
        gettingAround: 'Auto-rickshaws cover the town; boats run out to Bet Dwarka.',
      },
      {
        id: 'somnath',
        name: 'Somnath',
        scene: 'spiritual',
        tagline: 'The first among the twelve Jyotirlingas',
        whyVisit:
          'A coastal temple town holding the first of Hinduism\'s twelve Jyotirlinga shrines, rebuilt several times across a long and turbulent history.',
        about:
          'The Somnath Temple, regarded as the first of the twelve Jyotirlingas dedicated to Shiva, sits directly on the Arabian Sea coast and has been destroyed and rebuilt multiple times over its history, with the current structure completed in 1951. An evening sound-and-light show recounts that history against the temple\'s illuminated silhouette.',
        highlights: ['Somnath Temple, first of the twelve Jyotirlingas', 'An evening sound-and-light show on the temple\'s history', 'Triveni Sangam, where three rivers meet the sea'],
        attractions: ['Somnath Temple', 'Triveni Sangam', 'Bhalka Tirth', 'Somnath Beach', 'Junagadh (day trip)'],
        experiences: ['Spiritual', 'History'],
        history:
          'The Somnath Temple has been destroyed and rebuilt numerous times since antiquity, most notably following a 1024 raid by Mahmud of Ghazni, and the current structure was reconstructed after independence under the direction of Sardar Vallabhbhai Patel, completed in 1951.',
        weather: W('27°–38°C, hot, coastal humidity', '28°–33°C, moderate rain', '14°–29°C, warm and dry'),
        bestSeason: 'October to March',
        duration: { quick: '1 day', standard: '1–2 days', complete: '2 days including Junagadh' },
        budgetTier: 'under-10k',
        remoteness: 2,
        costPerDay: COST(1000, 2200, 4800),
        howToReach: {
          air: 'Diu Airport is about 65 km away.',
          rail: 'Somnath railway station connects to Ahmedabad.',
          road: 'National highways connect it to Junagadh (around 1.5 hrs).',
        },
        gettingAround: 'The temple and beach area are walkable; autos cover the wider town.',
      },
    ],
  },
]

export const ALL_CITIES = STATES.flatMap((state) =>
  state.cities.map((city) => ({
    ...city,
    stateId: state.id,
    stateName: state.name,
    stateAccent: state.accent,
  }))
)

export function getState(stateId) {
  return STATES.find((s) => s.id === stateId)
}

export function getCity(stateId, cityId) {
  const state = getState(stateId)
  if (!state) return null
  const city = state.cities.find((c) => c.id === cityId)
  if (!city) return null
  return { ...city, stateId: state.id, stateName: state.name, stateAccent: state.accent }
}

export function getCityBudgetValue(city, tier = 'standard') {
  return city.costPerDay[tier]
}

export function budgetBandFor(amount) {
  return BUDGET_BANDS.find((b) => amount >= b.min && amount < b.max) || BUDGET_BANDS[0]
}
