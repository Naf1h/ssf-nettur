// ============================================================
// SSF NETTUR UNIT: ALL SITE CONTENT LIVES IN THIS FILE.
// Rules: English only in the site text (Malayalam stays inside poster images).
// No placeholder text: leave a field empty ('') and the site hides it.
// ============================================================

export const unit = {
  name: 'SSF Nettur Unit',
  short: 'SSF NETTUR UNIT',
  federation: "Sunni Students' Federation",
  place: 'Nettur, Thalassery',
  address: 'Thwaiba Garden, Nettur, Thalassery, Kannur Dt, 670105',
  email: 'ssfnettur121@gmail.com',
  coords: '11.75° N, 75.49° E',
  theme: { year: 2026, name: 'Jeevithamavuka', ml: 'ജീവിതമാവുക', meaning: 'Live the Message' },
  nameMl: 'എസ് എസ് എഫ് നെട്ടൂർ യൂണിറ്റ്',
  region: 'Nettur, Thalassery, Kannur District, Kerala',
  introMl: 'നെട്ടൂരിലെ വിദ്യാർഥികൾ ഒന്നിച്ചിരിക്കുന്ന ഇടം. പഠനവും ആത്മീയതയും സർഗാത്മകതയും സേവനവും ചേർത്തുപിടിച്ച്, എസ് എസ് എഫിന്റെ ആശയങ്ങളെ നാട്ടിലെ ജീവിതമാക്കുകയാണ് യൂണിറ്റിന്റെ ലക്ഷ്യം.',
  intro: "A place for the students of Nettur to come together. Through study, faith, creativity and service, the unit carries SSF's ideas into everyday life in Nettur.",
};

// SSF India down to this unit.
export const lineage = [
  { name: 'SSF India', tier: 'National', role: 'The national federation, with units across 26 states.', url: 'https://www.nationalssf.org/', link: 'nationalssf.org' },
  { name: 'SSF Kerala', tier: 'State', role: 'State committee for every SSF unit in Kerala.', url: 'https://ssfkerala.org/', link: 'ssfkerala.org' },
  { name: 'Kannur District', tier: 'District', role: 'District committee. Runs the Kannur District Sahityotsav.', url: 'https://www.ssfkannur.in/', link: 'ssfkannur.in' },
  { name: 'Thalassery Division', tier: 'Division', role: 'Division committee for the sectors around Thalassery.', url: 'https://www.instagram.com/ssf_thalassery_division', link: '@ssf_thalassery_division' },
  { name: 'Dharmadam Sector', tier: 'Sector', role: 'Sector committee for Nettur and neighbouring units. Holds the Students Council.', anchor: 'events', link: 'See the Sector Council' },
  { name: 'Nettur Unit', tier: 'Unit', role: 'Our unit, for the students of Nettur.', url: 'https://www.instagram.com/ssf_nettur', link: '@ssf_nettur', current: true },
]

// Sahityotsav stages above the unit, linked from the Sahityotsav wing.
export const sahityotsavLinks = [
  { stage: 'District', name: 'Kannur District Sahityotsav', url: 'https://sahityotsav.ssfkannur.in/' },
  { stage: 'State', name: 'Kerala Sahityotsav', url: 'https://keralasahityotsav.com' },
  { stage: 'National', name: 'National Sahityotsav', url: 'https://sahityotsav.nationalssf.org/' },
];

// THE WINGS. rhythm and focus are the short facts shown when a wing opens.
export const wings = [
  { id: 'smartcore', tag: 'Youth & Sports', title: 'Smart Core', ml: 'സ്മാർട്ട് കോർ', text: "The unit's action hub for sports meets, turf tournaments, ideathons, quizzes and skill challenges in Nettur." },
  { id: 'smile', tag: "Children's Wing", title: 'Smile', ml: 'സ്മൈൽ', text: 'Nurturing school children in Nettur through moral learning, creative clubs and student gatherings.' },
  { id: 'sahityotsav', tag: 'Culture & Arts', title: 'Sahityotsav', ml: 'സാഹിത്യോത്സവ്', text: 'A grassroots literary and art festival, from Family and Unit Sahityotsav up to Sector, Division, District and National stages.', links: true },
  { id: 'wefi', tag: 'Education & Career', title: 'WEFI', ml: 'വിദ്യാഭ്യാസം', text: 'Academic mentoring, an SSLC, Plus Two and university admission help desk, and scholarship guidance.' },
  { id: 'campus', tag: 'Students Hub', title: 'Campus Wing', ml: 'ക്യാമ്പസ്', text: 'Connecting high school, higher secondary and professional college students from Nettur.' },
  { id: 'risala', tag: 'Publications', title: 'Risala & Reading', ml: 'വായന • രിസാല', text: 'Cultivating reading habits, weekly study circles and Risala Weekly circulation across Nettur homes.' },
  { id: 'dawa', tag: 'Spiritual & Welfare', title: "Da'wa & Service", ml: 'ആത്മീയം • സേവനം', text: 'Weekly spiritual study circles, environmental care and volunteer community relief in Nettur.' },
]

// EVENTS: copied from the posters. tier: 'unit' or 'sector'.
// Past dates move to "Recent highlights" on their own.
export const events = [
  {
    id: 'bafaqi-anusmarana-2026',
    tier: 'unit',
    titleMl: 'അമീനുശ്ശരീഅ സയ്യിദ് അലി ബാഫഖി തങ്ങൾ അനുസ്മരണ സംഗമം',
    title: 'Ameenu Shareea Sayyid Ali Bafaqi Thangal Memorial Gathering',
    type: 'Anusmarana Sangamam',
    organizer: 'Organized by SSF Nettur Unit',
    date: '2026-11-18',
    day: 'Wednesday',
    time: '6:30 PM',
    venue: 'Thwaiba Garden, Nettur',
    image: '/posters/2026-11-18-bafaqi-anusmarana-sangamam.webp',
    url: '',
  },
  {
    id: 'dharmadam-students-council-2026',
    tier: 'sector',
    title: 'Students Council',
    type: 'Dharmadam Sector Council',
    organizer: 'Organized by SSF Dharmadam Sector Committee',
    date: '2026-11-22',
    day: 'Sunday',
    time: '2:30 PM',
    venue: 'Ozhayil Bhagam',
    image: '/posters/2026-11-22-dharmadam-students-council.webp',
    url: '',
  },
];


// LEADERSHIP: from the @ssf_nettur office bearers post. Photos go in public/team/.
export const committeeTerm = '2027-28';
export const committeePost = 'https://www.instagram.com/p/DeqdfUHpozV/';
export const committee = [
  { role: 'President', name: 'Muhammed Sahal M', photo: '/team/president.webp' },
  { role: 'General Secretary', name: 'Muhammed Fardeen A', photo: '/team/general-secretary.webp' },
  { role: 'Executive Secretary', name: 'Muhammed Mubashir V.U', photo: '/team/executive-secretary.webp' },
];
// The rest of the committee, names only, grouped as on the announcement post.
export const memberGroups = [
  {
    title: 'Secretaries',
    names: ['Muhammed Zayan P.K', 'Muhammed Misbah N.P', 'Muhammed Quais B.C', 'Abdul Hadhi Sajeer', 'Yamin Shameer', 'Najad Bin Naseer'],
  },
  {
    title: 'Secretariat Members',
    names: ['Muhammed Hamdan M', 'Muhammed Nashwan'],
  },
];

export const social = {
  instagram: { handle: '@ssf_nettur', url: 'https://www.instagram.com/ssf_nettur' },
  facebook: { handle: 'ssfnettur', url: 'https://www.facebook.com/ssfnettur' },
  thalassery: { handle: '@ssf_thalassery_division', url: 'https://www.instagram.com/ssf_thalassery_division' },
  // Opens a direct message to @ssf_nettur.
  dm: 'https://ig.me/m/ssf_nettur',
  // WhatsApp number with country code, digits only, e.g. '919876543210'. Empty hides the button.
  whatsapp: '',
};

