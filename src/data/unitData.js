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
  theme: { year: 2026, name: 'Jeevithamavuka', meaning: 'Live the Message' },
};

// SSF India down to this unit.
export const lineage = [
  { name: 'SSF India', url: 'https://www.nationalssf.org/' },
  { name: 'SSF Kerala', url: 'https://ssfkerala.org/' },
  { name: 'Kannur' },
  { name: 'Thalassery' },
  { name: 'Dharmadam' },
  { name: 'Nettur Unit', current: true },
];

export const overview = [
  { value: '1973', label: 'Movement legacy', note: 'Founded under Samastha' },
  { value: '06', label: 'Active unit wings', note: 'Campus, WEFI, Sahityotsav, Risala, Mazhavil, Service' },
  { value: 'Dharmadam', label: 'Sector jurisdiction', note: 'Under Thalassery Division, Kannur' },
  { value: '100%', label: 'Student & volunteer driven', note: 'Community impact led by students' },
];

// "What we do": first two are the wide feature cards.
export const work = [
  { id: 'sahityotsav', icon: 'Feather', title: 'Culture & Sahityotsav', text: 'Grassroots literary and art festivals nurturing student talent from Nettur Unit to Sector, Division, and District stages.' },
  { id: 'wefi', icon: 'GraduationCap', title: 'Education & WEFI', text: 'Career consulting, SSLC, Plus Two and university admission guidance, and academic mentorship for Nettur students.' },
  { id: 'spiritual', icon: 'BookOpen', title: 'Spiritual Grounding', text: 'Weekly study circles, moral character building, and prophetic values.' },
  { id: 'risala', icon: 'Newspaper', title: 'Risala & Reading Room', text: 'Promoting reading culture and weekly Risala circulation across homes in Nettur.' },
  { id: 'mazhavil', icon: 'Sparkles', title: "Mazhavil (Children's Wing)", text: 'Creative gatherings and moral learning sessions for school children.' },
  { id: 'social', icon: 'HandHeart', title: 'Social Commitment', text: 'Volunteer relief drives, environmental sanitation, and community care in Nettur.' },
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

export const values = [
  { title: 'Knowledge', text: 'Learning that shapes character and clear thinking.' },
  { title: 'Service', text: 'Showing up for the people of Nettur.' },
  { title: 'Leadership', text: 'Responsible, humble and forward-looking.' },
  { title: 'Togetherness', text: 'Growing stronger as one community.' },
];

// LEADERSHIP: from the @ssf_nettur office bearers post. Photos go in public/team/.
export const committeeTerm = '2027-28';
export const committeePost = 'https://www.instagram.com/p/DeqdfUHpozV/';
export const committee = [
  { role: 'President', name: '', photo: '' },
  { role: 'General Secretary', name: '', photo: '' },
  { role: 'Executive Secretary', name: '', photo: '' },
];
// Other committee members: names only, e.g. { role: 'Secretary', name: 'Full Name' }
export const members = [];

export const social = {
  instagram: { handle: '@ssf_nettur', url: 'https://www.instagram.com/ssf_nettur' },
  facebook: { handle: 'ssfnettur', url: 'https://www.facebook.com/ssfnettur' },
  // WhatsApp number with country code, digits only, e.g. '919876543210'. Empty hides the button.
  whatsapp: '',
};

// Form: submissions are emailed to unit.email through FormSubmit (no account needed).
// The first submission sends an activation email to that inbox; click "Activate Form" once.
export const formPurposes = ['Join the unit', 'Risala subscription', 'Student help desk', 'Other'];
