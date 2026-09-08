// Location-targeted photography for Voyage Verse destinations.
// The search terms intentionally pair each city with a recognisable local
// landmark/landscape so the returned photo is destination-specific rather than generic.

const hash = (value) => {
  let h = 0
  for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) >>> 0
  return h % 997
}

const photo = (query) => query

export const DESTINATION_IMAGES = {
  // States
  'himachal-pradesh': photo('Himachal Pradesh Himalayas India landscape', 'himachal-pradesh'),
  uttarakhand: photo('Uttarakhand Himalayas Ganga India landscape', 'uttarakhand'),
  kashmir: photo('Kashmir India mountains lake landscape', 'kashmir'),
  maharashtra: photo('Maharashtra India Mumbai Western Ghats landscape', 'maharashtra'),
  kerala: photo('Kerala India backwaters tropical landscape', 'kerala'),
  assam: photo('Assam India Brahmaputra tea landscape', 'assam'),
  mizoram: photo('Mizoram India hills landscape', 'mizoram'),
  goa: photo('https://commons.wikimedia.org/wiki/Special:FilePath/Goa_Beach_IND.jpg?width=1200'),
  delhi: photo('Delhi India Red Fort city heritage', 'delhi'),
  sikkim: photo('Sikkim India Himalayas monastery landscape', 'sikkim'),
  punjab: photo('https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Temple_.jpg?width=1200'),
  rajasthan: photo('Rajasthan India desert forts palace landscape', 'rajasthan'),
  karnataka: photo('Karnataka India Hampi Western Ghats landscape', 'karnataka'),
  'uttar-pradesh': photo('Uttar Pradesh India Taj Mahal Ganga heritage', 'uttar-pradesh'),
  'india-gateway-mumbai': photo('Gateway of India Mumbai India', 'india-gateway-mumbai'),
  'taj-mahal-india': photo('Taj Mahal Agra India sunrise', 'taj-mahal-india'),
  'india-gate-delhi': photo('India Gate Delhi India evening', 'india-gate-delhi'),
  gujarat: photo('https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Unity%2C_Kevadiya%2C_Gujrat.jpg?width=1200'),

  // Himachal Pradesh
  shimla: photo('Shimla India The Ridge Himalayan town', 'shimla'),
  manali: photo('Manali India Hadimba Temple Himalayas', 'manali'),
  dharamshala: photo('Dharamshala India Tsuglagkhang Dhauladhar', 'dharamshala'),
  kasol: photo('Kasol India Parvati River valley', 'kasol'),
  'spiti-valley': photo('Spiti Valley India Key Monastery cold desert', 'spiti-valley'),

  // Uttarakhand
  rishikesh: photo('Rishikesh India Triveni Ghat Ganges', 'rishikesh'),
  nainital: photo('Nainital India Naini Lake Himalayas', 'nainital'),
  mussoorie: photo('Mussoorie India Mall Road Himalayas', 'mussoorie'),
  auli: photo('Auli India ski slopes Himalayas', 'auli'),
  'jim-corbett': photo('Jim Corbett India Dhikala wildlife', 'jim-corbett'),

  // Kashmir
  srinagar: photo('Srinagar India Dal Lake shikara', 'srinagar'),
  gulmarg: photo('Gulmarg India Gondola snow mountains', 'gulmarg'),
  pahalgam: photo('Pahalgam India Betaab Valley mountains', 'pahalgam'),
  sonmarg: photo('Sonmarg India Thajiwas Glacier mountains', 'sonmarg'),
  yusmarg: photo('Yusmarg India meadow Kashmir mountains', 'yusmarg'),

  // Maharashtra
  mumbai: photo('Mumbai India Gateway of India Arabian Sea', 'mumbai'),
  pune: photo('Pune India Shaniwar Wada heritage', 'pune'),
  lonavala: photo('Lonavala India Bhushi Dam Western Ghats', 'lonavala'),
  sambhajinagar: photo('Sambhajinagar India Ellora Caves', 'sambhajinagar'),
  mahabaleshwar: photo('Mahabaleshwar India Venna Lake Western Ghats', 'mahabaleshwar'),

  // Kerala
  kochi: photo('Kochi India Fort Kochi Chinese fishing nets', 'kochi'),
  munnar: photo('Munnar India tea plantations Eravikulam', 'munnar'),
  alappuzha: photo('Alappuzha India Kerala backwater houseboat', 'alappuzha'),
  wayanad: photo('Wayanad India wildlife forest hills', 'wayanad'),
  varkala: photo('Varkala India cliff Papanasam Beach', 'varkala'),

  // Assam
  guwahati: photo('Guwahati India Kamakhya Temple Brahmaputra', 'guwahati'),
  kaziranga: photo('Kaziranga India one horned rhinoceros grassland', 'kaziranga'),
  majuli: photo('Majuli India Brahmaputra island satra', 'majuli'),
  jorhat: photo('Jorhat India Assam tea estate', 'jorhat'),
  sivasagar: photo('Sivasagar Assam India Rang Ghar', 'sivasagar'),

  // Mizoram
  aizawl: photo('Aizawl Mizoram India city hills', 'aizawl'),
  champhai: photo('Champhai Mizoram India hills rice fields', 'champhai'),
  reiek: photo('Reiek Tlang Mizoram India peak', 'reiek'),
  thenzawl: photo('Thenzawl Mizoram India handloom village hills', 'thenzawl'),
  serchhip: photo('Serchhip Mizoram India Vantawng Falls', 'serchhip'),

  // Goa
  panaji: photo('Panaji Goa India Fontainhas Portuguese streets', 'panaji'),
  calangute: photo('Calangute Goa India beach', 'calangute'),
  anjuna: photo('Anjuna Goa India flea market beach', 'anjuna'),
  palolem: photo('Palolem Goa India beach palm trees', 'palolem'),
  'old-goa': photo('Old Goa India Basilica of Bom Jesus', 'old-goa'),

  // Delhi
  'new-delhi': photo('New Delhi India India Gate', 'new-delhi'),
  'old-delhi': photo('Old Delhi India Red Fort Chandni Chowk', 'old-delhi'),
  'hauz-khas': photo('Hauz Khas Delhi India monument lake', 'hauz-khas'),
  mehrauli: photo('Mehrauli Delhi India Qutub Minar', 'mehrauli'),
  'connaught-place': photo('Connaught Place Delhi India colonial circle', 'connaught-place'),

  // Sikkim
  gangtok: photo('Gangtok Sikkim India MG Marg Himalayas', 'gangtok'),
  pelling: photo('Pelling Sikkim India Pemayangtse monastery', 'pelling'),
  lachung: photo('Lachung Sikkim India Yumthang Valley', 'lachung'),
  yuksom: photo('Yuksom Sikkim India Dubdi Monastery', 'yuksom'),
  namchi: photo('Namchi Sikkim India Samdruptse Hill', 'namchi'),

  // Punjab
  amritsar: photo('Amritsar India Golden Temple', 'amritsar'),
  chandigarh: photo('Chandigarh India Rock Garden', 'chandigarh'),
  ludhiana: photo('Ludhiana Punjab India university campus', 'ludhiana'),
  patiala: photo('Patiala India Qila Mubarak palace', 'patiala'),
  'anandpur-sahib': photo('Anandpur Sahib India Takht Sri Kesgarh Sahib', 'anandpur-sahib'),

  // Rajasthan
  jaipur: photo('Jaipur India Hawa Mahal', 'jaipur'),
  jaisalmer: photo('Jaisalmer India fort desert', 'jaisalmer'),
  udaipur: photo('Udaipur India Lake Pichola City Palace', 'udaipur'),
  jodhpur: photo('Jodhpur India Mehrangarh Fort blue city', 'jodhpur'),
  pushkar: photo('Pushkar India lake ghats temple', 'pushkar'),

  // Karnataka
  bengaluru: photo('Bengaluru India Lalbagh Botanical Garden', 'bengaluru'),
  mysuru: photo('Mysuru India Mysore Palace', 'mysuru'),
  coorg: photo('Coorg Karnataka India Abbey Falls coffee hills', 'coorg'),
  hampi: photo('Hampi India Vijaya Vittala Temple ruins', 'hampi'),
  gokarna: photo('Gokarna India Om Beach', 'gokarna'),

  // Uttar Pradesh
  agra: photo('Agra India Taj Mahal', 'agra'),
  varanasi: photo('Varanasi India Dashashwamedh Ghat Ganges', 'varanasi'),
  lucknow: photo('Lucknow India Bara Imambara', 'lucknow'),
  ayodhya: photo('Ayodhya India Ram Janmabhoomi temple', 'ayodhya'),
  mathura: photo('Mathura India Krishna Janmabhoomi temple', 'mathura'),

  // Gujarat
  ahmedabad: photo('Ahmedabad India Sabarmati Ashram', 'ahmedabad'),
  kutch: photo('Kutch Gujarat India White Rann salt desert', 'kutch'),
  gir: photo('Gir Gujarat India Asiatic lion wildlife', 'gir'),
  dwarka: photo('Dwarka Gujarat India Dwarkadhish Temple', 'dwarka'),
  somnath: photo('Somnath Gujarat India temple Arabian Sea', 'somnath'),
}

export function getDestinationImage(seed) {
  return DESTINATION_IMAGES[seed] || null
}
