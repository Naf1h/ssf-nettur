// ============================================================
// SSF NETTUR UNIT: ALL SITE CONTENT LIVES IN THIS FILE.
// Rule: no placeholder text. Leave a field empty ('') instead of
// writing "To be updated"; the site hides empty fields on its own.
// Script rule: English UI and summaries; Malayalam only in titleMl.
// ============================================================

// 1. EXECUTIVE COMMITTEE: copy names from the latest @ssf_nettur committee post.
export const committee = [
  { role: 'President', duty: 'Leads the unit and chairs its meetings.', name: '', photo: '' },
  { role: 'General Secretary', duty: 'Runs unit activities and keeps its records.', name: '', photo: '' },
  { role: 'Finance Secretary', duty: 'Keeps the unit accounts and membership dues.', name: '', photo: '' },
];
// Secretariat members and wing convenors, e.g. { role: 'Convenor, WEFI', name: 'Full Name' }
export const secretariat = [];

// 2. POSTERS: programmes, campaigns and the archive.
// status: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'RECURRING'
// image: a 4:5 Instagram poster saved in public/posters/, e.g. '/posters/sahityotsav-2026.webp'
// url: the Instagram post link. date: 'YYYY-MM-DD' when the programme has one.
export const posters = [
  {
    id: 'membership',
    tag: 'CAMPAIGN // MEMBERSHIP',
    titleMl: 'ജീവിതമാവുക — യൂണിറ്റ് മെമ്പർഷിപ്പ് ക്യാമ്പയിൻ',
    summary: "SSF's 2026 membership campaign, carried to every student in Nettur.",
    status: 'ONGOING', when: '2026', date: '', image: '', url: '', featured: true,
  },
  {
    id: 'sahityotsav',
    tag: 'SAHITYOTSAV // CULTURAL FEST',
    titleMl: 'യൂണിറ്റ് സാഹിത്യോത്സവ്',
    summary: "Competitions that pick Nettur's team for the sector Sahityotsav.",
    status: 'RECURRING', when: 'Annual', date: '', image: '', url: '', featured: true,
  },
  {
    id: 'risala-circle',
    tag: 'RISALA // STUDY CIRCLE',
    titleMl: 'രിസാല സ്റ്റഡി സർക്കിൾ',
    summary: 'Reading and discussing Risala weekly together.',
    status: 'RECURRING', when: 'Regular', date: '', image: '', url: '', featured: true,
  },
  {
    id: 'dars',
    tag: 'DARS // STUDY CIRCLE',
    titleMl: 'ദർസ് & പഠന ക്ലാസ്',
    summary: 'A weekly class on religious texts for unit members.',
    status: 'RECURRING', when: 'Weekly', date: '', image: '', url: '',
  },
  {
    id: 'mazhavil',
    tag: 'MAZHAVIL // CHILDREN',
    titleMl: 'മഴവിൽ സംഗമം',
    summary: 'A monthly gathering for children and school students.',
    status: 'RECURRING', when: 'Monthly', date: '', image: '', url: '',
  },
  {
    id: 'wefi',
    tag: 'WEFI // CAREER CLINIC',
    titleMl: 'കരിയർ & അഡ്മിഷൻ ഡെസ്ക്',
    summary: 'Help with courses, entrance exams and college admissions.',
    status: 'RECURRING', when: 'Ongoing', date: '', image: '', url: '',
  },
];

// 3. DEPARTMENTS (modeled on nationalssf.org's departments)
export const departments = [
  { id: 'campus', tag: 'CAMPUS // HIGHER EDUCATION', titleMl: 'ക്യാമ്പസ്', title: 'Campus', summary: "Support for Nettur students in colleges and universities, linked to SSF's higher education department.", icon: 'Building2' },
  { id: 'wefi', tag: 'WEFI // EDUCATION & CAREER', titleMl: 'വെഫി', title: 'WEFI Education & Career', summary: "Course, entrance exam and admission guidance through WEFI, SSF's education department.", icon: 'GraduationCap' },
  { id: 'sahityotsav', tag: 'SAHITYOTSAV // CULTURE', titleMl: 'സാഹിത്യോത്സവ്', title: 'Sahityotsav & Culture', summary: "The unit round of SSF's arts and literary festival, and training for the sector and division rounds.", icon: 'Feather' },
  { id: 'risala', tag: 'RISALA // PUBLICATIONS', titleMl: 'രിസാല', title: 'Risala Publications', summary: 'Risala weekly delivered to homes in Nettur, and a study circle that reads it together.', icon: 'Newspaper' },
  { id: 'mazhavil', tag: 'MAZHAVIL // CHILDREN', titleMl: 'മഴവിൽ', title: "Mazhavil Children's Wing", summary: 'A monthly Mazhavil Sangamam for children and school students in Nettur.', icon: 'Sparkles' },
  { id: 'service', tag: 'SERVICE // COMMUNITY', titleMl: 'സേവനം', title: 'Social Service', summary: 'A student help desk and service work for families in Nettur.', icon: 'HandHeart' },
];

// 4. UNIT FACTS
export const unit = {
  name: 'SSF Nettur Unit',
  nameMl: 'എസ് എസ് എഫ് നെട്ടൂർ യൂണിറ്റ്',
  federation: "Sunni Students' Federation",
  place: 'Nettur, Thalassery, Kannur, Kerala',
  intro: "SSF Nettur is the Sunni Students' Federation unit for the students of Nettur, Thalassery. It brings students together for study, culture, career guidance and service, as part of Dharmadam Sector, Thalassery Division and Kannur District.",
  campaignMl: 'ജീവിതമാവുക',
  campaign: '2026 SSF Kerala membership campaign',
};

// Top to bottom: national body down to this unit.
export const hierarchy = [
  { tier: 'NATIONAL', name: 'SSF India', url: 'https://www.nationalssf.org/' },
  { tier: 'STATE', name: 'SSF Kerala', url: 'https://ssfkerala.org/' },
  { tier: 'DISTRICT', name: 'Kannur' },
  { tier: 'DIVISION', name: 'Thalassery' },
  { tier: 'SECTOR', name: 'Dharmadam' },
  { tier: 'UNIT', name: 'Nettur', current: true },
];

// Federation figures, with their source. Replace with unit figures when you have them.
export const stats = {
  note: 'Federation figures from nationalssf.org, checked November 2026.',
  items: [
    { value: '1973', label: 'SSF founded' },
    { value: '~10L', label: 'Members across India' },
    { value: '26', label: 'States' },
    { value: '6,370', label: 'Units in Kerala' },
  ],
};

// 5. CONTACT
export const social = {
  instagram: { handle: '@ssf_nettur', url: 'https://www.instagram.com/ssf_nettur' },
  facebook: { handle: 'ssfnettur', url: 'https://www.facebook.com/ssfnettur' },
  // WhatsApp number with country code, digits only, e.g. '919876543210'. Empty hides the button.
  whatsapp: '',
  // Behold JSON feed for @ssf_nettur (https://feeds.behold.so/XXXX). Adds live posts to the archive.
  instagramFeedUrl: '',
};

// Formspree form ID (the part after formspree.io/f/). Empty keeps the form from sending.
export const formspreeId = '';
export const formPurposes = ['Join the unit', 'Risala subscription', 'Student help desk', 'Other'];
