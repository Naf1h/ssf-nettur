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
  theme: { year: 2026, name: 'Jeevithamavuka', meaning: 'Live the Message' },
};

// SSF India down to this unit.
export const lineage = [
  { name: 'SSF India', short: 'SSF India', role: 'National federation, with units across 26 states.', url: 'https://www.nationalssf.org/' },
  { name: 'SSF Kerala', short: 'Kerala', role: 'State committee for every SSF unit in Kerala.', url: 'https://ssfkerala.org/' },
  { name: 'Kannur District', short: 'Kannur', role: 'District committee. Runs the Kannur District Sahityotsav.', url: 'https://www.ssfkannur.in/' },
  { name: 'Thalassery Division', short: 'Thalassery', role: 'Division committee for the sectors around Thalassery.' },
  { name: 'Dharmadam Sector', short: 'Dharmadam', role: 'Sector committee for Nettur and neighbouring units. Holds the Students Council.' },
  { name: 'Nettur Unit', short: 'Nettur Unit', role: 'Our unit. Study circles, Sahityotsav, Risala, Smile, Smart Core and service in Nettur.', current: true },
]



// Sahityotsav stages above the unit, linked from the Sahityotsav card.
export const sahityotsavLinks = [
  { stage: 'District', name: 'Kannur District Sahityotsav', url: 'https://sahityotsav.ssfkannur.in/' },
  { stage: 'State', name: 'Kerala Sahityotsav', url: 'https://keralasahityotsav.com' },
  { stage: 'National', name: 'National Sahityotsav', url: 'https://sahityotsav.nationalssf.org/' },
];

// THE WINGS. rhythm and focus are the short facts shown when a wing opens.
export const wings = [
  { id: 'sahityotsav', title: 'Sahityotsav & Culture', text: 'Grassroots literary and art festivals nurturing student talent from Nettur Unit to Sector, Division, and District stages.', rhythm: 'Annual', focus: 'Unit round to national stage' },
  { id: 'wefi', title: 'WEFI Education', text: 'Career consulting, SSLC, Plus Two and university admission guidance, and academic mentorship for Nettur students.', rhythm: 'Year-round', focus: 'SSLC, Plus Two, university' },
  { id: 'risala', title: 'Risala Reading', text: 'Promoting reading culture and weekly Risala circulation across homes in Nettur.', rhythm: 'Weekly issue', focus: 'Delivered to homes in Nettur' },
  { id: 'smile', title: "Smile Children's Wing", text: 'The unit\'s children\'s wing. Stories, games and creative activities that help school children learn good values and feel at home in the unit.', rhythm: 'Regular gatherings', focus: 'School children' },
  { id: 'smartcore', title: 'Smart Core', text: 'The unit\'s skills and events wing. Sports meets, ideathons and team challenges that build fitness, fresh thinking and teamwork among Nettur\'s students.', rhythm: 'Through the year', focus: 'Sports, ideathons, team challenges' },
  { id: 'spiritual', title: 'Spiritual Study', text: 'Weekly study circles, moral character building, and prophetic values.', rhythm: 'Weekly circle', focus: 'Character and values' },
  { id: 'service', title: 'Social Service', text: 'Volunteer relief drives, environmental sanitation, and community care in Nettur.', rhythm: 'When Nettur needs it', focus: 'Relief, sanitation, care' },
];

// EVENTS: copied from the posters. tier: 'unit' or 'sector'.
// Past dates move to "Recent highlights" on their own.
export const events = [
  {
    id: 'bafaqi-anusmarana-2026',
    tier: 'unit',
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
  // WhatsApp number with country code, digits only, e.g. '919876543210'. Empty hides the button.
  whatsapp: '',
};

// Form: submissions are emailed to unit.email through FormSubmit (no account needed).
// The first submission sends an activation email to that inbox; click "Activate Form" once.
export const formPurposes = ['Join the unit', 'Risala subscription', 'Student help desk', 'Other'];
