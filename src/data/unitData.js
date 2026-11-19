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
  { name: 'SSF India', tier: 'National', role: 'The national student movement since 1973: 27 states and union territories, 14,700+ units and around one million members, working in education, social welfare and moral leadership.', url: 'https://www.nationalssf.org/', link: 'nationalssf.org' },
  { name: 'SSF Kerala', tier: 'State', role: 'The state headquarters steering intellectual discourse, cultural festivals, WEFI career guidance and campus work across Kerala.', url: 'https://ssfkerala.org/', link: 'ssfkerala.org' },
  { name: 'Kannur District', tier: 'District', role: "The district leadership organising student action, academic gatherings and the District Sahityotsav across Kannur's divisions.", url: 'https://www.ssfkannur.in/', link: 'ssfkannur.in' },
  { name: 'Thalassery Division', tier: 'Division', role: 'Coordinates sector councils, leadership camps and inter-unit initiatives across Thalassery.', url: 'https://www.instagram.com/ssf_thalassery_division', link: '@ssf_thalassery_division' },
  { name: 'Dharmadam Sector', tier: 'Sector', role: 'The bridge between division programmes and the units across Dharmadam. Holds the Students Council.', anchor: '/programmes', link: 'See the Sector Council' },
  { name: 'Nettur Unit', tier: 'Unit', role: "Our ground zero in Nettur: weekly study circles, the student help desk, SMILE children's gatherings, SMART CORE youth events and local welfare, all year round.", url: 'https://www.instagram.com/ssf_nettur', link: '@ssf_nettur', current: true },
];
// Source for the SSF India figures above.
export const lineageSource = { label: 'nationalssf.org unit map', url: 'https://www.nationalssf.org/', checked: 'November 2026' };

// Sahityotsav stages above the unit, linked from the Sahityotsav wing.
export const sahityotsavLinks = [
  { stage: 'District', name: 'Kannur District Sahityotsav', url: 'https://sahityotsav.ssfkannur.in/' },
  { stage: 'State', name: 'Kerala Sahityotsav', url: 'https://keralasahityotsav.com' },
  { stage: 'National', name: 'National Sahityotsav', url: 'https://sahityotsav.nationalssf.org/' },
];

// THE WINGS. rhythm and focus are the short facts shown when a wing opens.
export const wings = [
  { id: 'smartcore', tag: 'Youth & Sports', title: 'SMART CORE', ml: 'സ്മാർട്ട് കോർ', text: "The unit's action hub for students who like to compete, build and play.", activities: ['Sports meets', 'Turf tournaments', 'Ideathons', 'Quizzes', 'Skill challenges'] },
  { id: 'smile', tag: "Children's Wing", title: 'SMILE', ml: 'സ്മൈൽ', text: 'Nurturing school children in Nettur with values, creativity and friendship.', activities: ['Moral learning', 'Creative clubs', 'Student gatherings'] },
  { id: 'sahityotsav', tag: 'Culture & Arts', title: 'Sahityotsav', ml: 'സാഹിത്യോത്സവ്', text: 'A grassroots literary and art festival that starts at home and goes all the way to the national stage.', activities: ['Family Sahityotsav', 'Unit Sahityotsav', 'Sector', 'Division', 'District', 'National'], links: true },
  { id: 'wefi', tag: 'Education & Career', title: 'WEFI', ml: 'വിദ്യാഭ്യാസം', text: 'Guidance for every big education decision a Nettur student faces.', activities: ['SSLC & Plus Two admission desk', 'University admissions', 'Career clinics', 'Scholarships'] },
  { id: 'campus', tag: 'Students Hub', title: 'Campus Wing', ml: 'ക്യാമ്പസ്', text: 'One network for every student from Nettur, wherever they study.', activities: ['High school', 'Higher secondary', 'College & professional'] },
  { id: 'risala', tag: 'Publications', title: 'Risala & Reading', ml: 'വായന • രിസാല', text: 'Building a reading habit in every home in Nettur.', activities: ['Reading circles', 'Risala Weekly distribution'] },
  { id: 'dawa', tag: 'Spiritual & Welfare', title: "Da'wa & Service", ml: 'ആത്മീയം • സേവനം', text: 'Faith that shows up as service to Nettur.', activities: ['Spiritual study circles', 'Sanitation drives', 'Volunteer relief'] },
];


// UPCOMING EVENTS: copied exactly from the posters. Past dates move to the archive by themselves.
export const events = [
  {
    id: 'bafaqi-anusmarana-2026',
    tier: 'unit',
    category: 'unit',
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
    category: 'sector',
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

// 2024-25 ARCHIVE, from the SSF Nettur Unit Brochure 2025 (public/brochure/).
// Archive only: past programmes, honours and the 2025-26 committee. Not current data.
export const brochure = {
  file: '/brochure/ssf-nettur-brochure-2025.pdf',
  sizeLabel: 'PDF, 3.7 MB',
  manifesto: {
    titleMl: 'ധാർമിക വിപ്ലവം',
    title: 'A moral revolution',
    ml: 'തെറ്റായ വ്യവസ്ഥിതികളോടുള്ള കലഹമാണ് വിപ്ലവം. പുറത്തേക്ക് ചിതറി തെറിക്കുന്ന നിണ കണങ്ങളല്ല, അതിമർദ്ദത്തിൽ അകത്ത് നുരയുന്ന ആശയങ്ങളാണ് വിപ്ലവകാരിയുടെ മൂലധനം. ഒരിറ്റു ചോര പോലുമൊഴുക്കാതെ സാധിക്കുന്ന പരിവർത്തനങ്ങളാണ് മഹാ വിപ്ലവം.',
  },
  support: {
    ml: 'നേരിന്റെ ഭ്രമണ പഥത്തിൽ ഒരു യുവതയെ കാക്കുന്നുണ്ടീ സംഘം',
    callMl: 'എസ് എസ് എഫിനെ സഹായിക്കുക',
  },
};

// HONOURS, as printed in the 2025 brochure.
export const honours = [
  { year: 2025, tag: 'Risala campaign', titleMl: 'എക്സലൻസ് അവാർഡ്', title: 'SSF Kerala Excellence Award', text: 'Awarded by the SSF Kerala state committee for enrolling 100 Risala subscribers in the 2025 campaign.', image: '/archive/risala-excellence-award-poster.webp' },
  { year: 2025, tag: 'Risala campaign', titleMl: 'പ്രീമിയം യൂണിറ്റ്', title: '6th Premium Unit, Kannur District', text: 'Named the sixth Premium Unit in SSF Kannur in the 2025 Risala campaign.', image: '/archive/risala-premium-unit-poster.webp' },
  { year: 2025, tag: 'Risala', titleMl: 'രിസാല ട്രയംഫ് അവാർഡ്', title: 'Risala Triumph Award', text: "Received for the unit's Risala work in 2025.", image: '/archive/risala-triumph-award.webp' },
  { year: 2024, tag: 'Sahityotsav', titleMl: 'ഒന്നാം സ്ഥാനം', title: 'Champions, Dharmadam Sector Sahityotsav 2024', text: 'First place at the 2024 Dharmadam Sector Sahityotsav.', image: '/archive/sahityotsav-2024-champions.webp' },
];

// PAST PROGRAMMES (2024-25 archive). category: sahityotsav | smile | risala | unit | smartcore
export const archive = [
  { id: 'sahityotsav-2024', category: 'sahityotsav', titleMl: 'ധർമടം സെക്ടർ സാഹിത്യോത്സവ് 2024', title: 'Dharmadam Sector Sahityotsav 2024: first place', image: '/archive/sahityotsav-2024-champions.webp' },
  { id: 'students-council-2024', category: 'unit', titleMl: 'സ്റ്റുഡന്റ്സ് കൗൺസിൽ 2024', title: 'Unit Students Council, November 2024', image: '/archive/students-council-2024-1.webp' },
  { id: 'madhurappanthal', category: 'smile', titleMl: 'മധുരപ്പന്തൽ', title: "Children's gathering", image: '/archive/madhurappanthal-1.webp' },
  { id: 'fly-high', category: 'smile', titleMl: '', title: 'Fly High', subtitle: 'Students Primary programme', image: '/archive/fly-high-2.webp' },
  { id: 'risala-2025', category: 'risala', titleMl: 'രിസാല ക്യാമ്പയിൻ 2025', title: 'Risala campaign: 100 new subscribers', image: '/archive/risala-campaign-1.webp' },
  { id: 'signature-projects', category: 'unit', titleMl: 'സിഗ്നേച്ചർ പ്രൊജക്ട്സ്', title: 'Unit study circles and gatherings', image: '/archive/unit-gathering-1.webp' },
];

// 2025-26 committee, from the 2025 brochure (page 5). Archive only.
export const pastCommittee = {
  term: '2025-26',
  officers: [
    { role: 'President', name: 'Muhammed Miqdad N.P' },
    { role: 'General Secretary', name: 'Abdullah Yaseen V.U' },
    { role: 'Finance Secretary', name: 'Muhammed Safwan V.U' },
  ],
  groups: [
    { title: 'Secretaries', names: ['Muhammed Sahal M', 'Muhammed Mubashir V.U', 'Muhammed Nafih B.C', 'Muhammed Fardeen A', 'Muhammed Hamdan M'] },
    { title: 'Secretariat Members', names: ['Raihan Nizar N', 'Muhammed Afnan K.P'] },
  ],
};

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

