// GALLERY: one line per photo. Put new images in public/photos/ and add a line.
// category: one or more of 'unit' | 'sahityotsav' | 'smartcore' | 'smile' | 'risala' | 'posters'
// period: '2026' for current, '2024-25' for the brochure archive. w/h keep the layout steady.
export const gallery = [
  { src: '/posters/2026-11-22-dharmadam-students-council.webp', caption: 'Dharmadam Sector Students Council poster', date: '22 Nov 2026', period: '2026', category: ['posters'], w: 1000, h: 1320 },
  { src: '/posters/2026-11-18-bafaqi-anusmarana-sangamam.webp', caption: 'Sayyid Ali Bafaqi Thangal Memorial Gathering poster', date: '18 Nov 2026', period: '2026', category: ['posters', 'unit'], w: 1000, h: 1201 },
  { src: '/photos/2027-28-office-bearers.webp', caption: 'Office bearers, 2027–28', period: '2026', category: ['posters', 'unit'], url: 'https://www.instagram.com/p/DeqdfUHpozV/', w: 1000, h: 1401 },
  { src: '/archive/sahityotsav-2024-champions.webp', caption: 'Champions at the Dharmadam Sector Sahityotsav', date: '2024', period: '2024-25', category: ['sahityotsav'], w: 1000, h: 504 },
  { src: '/archive/students-council-2024-1.webp', caption: 'Students Council 2024: flag handover', date: 'Nov 2024', period: '2024-25', category: ['unit'], w: 871, h: 514 },
  { src: '/archive/students-council-2024-3.webp', caption: 'Students Council 2024', date: 'Nov 2024', period: '2024-25', category: ['unit'], w: 655, h: 519 },
  { src: '/archive/students-council-2024-2.webp', caption: 'Students Council 2024: address', date: 'Nov 2024', period: '2024-25', category: ['unit'], w: 552, h: 313 },
  { src: '/archive/madhurappanthal-1.webp', caption: 'Madhurappanthal children\'s gathering', date: '2024–25', period: '2024-25', category: ['smile'], w: 812, h: 554 },
  { src: '/archive/madhurappanthal-2.webp', caption: 'Madhurappanthal: talk for children', date: '2024–25', period: '2024-25', category: ['smile'], w: 812, h: 582 },
  { src: '/archive/madhurappanthal-3.webp', caption: 'Madhurappanthal: games', date: '2024–25', period: '2024-25', category: ['smile'], w: 804, h: 581 },
  { src: '/archive/students-primary-1.webp', caption: 'Students Primary session', date: '2024–25', period: '2024-25', category: ['smile'], w: 804, h: 568 },
  { src: '/archive/students-primary-2.webp', caption: 'Students Primary session', date: '2024–25', period: '2024-25', category: ['smile'], w: 812, h: 574 },
  { src: '/archive/students-primary-3.webp', caption: 'Students Primary gathering', date: '2024–25', period: '2024-25', category: ['smile'], w: 804, h: 590 },
  { src: '/archive/fly-high-1.webp', caption: 'Fly High programme', date: '2024–25', period: '2024-25', category: ['smile'], w: 1000, h: 599 },
  { src: '/archive/fly-high-2.webp', caption: 'Fly High programme', date: '2024–25', period: '2024-25', category: ['smile'], w: 1000, h: 617 },
  { src: '/archive/fly-high-3.webp', caption: 'Fly High: group session', date: '2024–25', period: '2024-25', category: ['smile'], w: 1000, h: 611 },
  { src: '/archive/unit-prayer.webp', caption: 'Congregational prayer at a unit programme', date: '2024–25', period: '2024-25', category: ['unit'], w: 1000, h: 615 },
  { src: '/archive/study-circle-1.webp', caption: 'Unit study circle', date: '2024–25', period: '2024-25', category: ['unit'], w: 1000, h: 348 },
  { src: '/archive/unit-gathering-1.webp', caption: 'Unit gathering', date: '2024–25', period: '2024-25', category: ['unit'], w: 772, h: 758 },
  { src: '/archive/unit-gathering-2.webp', caption: 'Evening unit gathering', date: '2024–25', period: '2024-25', category: ['unit'], w: 757, h: 758 },
  { src: '/archive/unit-gathering-3.webp', caption: 'Study circle at home', date: '2024–25', period: '2024-25', category: ['unit'], w: 772, h: 758 },
  { src: '/archive/risala-triumph-award.webp', caption: 'Receiving the Risala Triumph Award', date: '2025', period: '2024-25', category: ['risala'], w: 1000, h: 759 },
  { src: '/archive/risala-campaign-1.webp', caption: 'Risala campaign: new subscriber', date: '2025', period: '2024-25', category: ['risala'], w: 690, h: 487 },
  { src: '/archive/risala-campaign-2.webp', caption: 'Risala campaign: new subscriber', date: '2025', period: '2024-25', category: ['risala'], w: 717, h: 487 },
  { src: '/archive/risala-excellence-award-poster.webp', caption: 'SSF Kerala Excellence Award, Risala campaign 2025', date: '2025', period: '2024-25', category: ['risala', 'posters'], w: 893, h: 1109 },
  { src: '/archive/risala-premium-unit-poster.webp', caption: '6th Premium Unit, SSF Kannur, Risala campaign 2025', date: '2025', period: '2024-25', category: ['risala', 'posters'], w: 893, h: 1109 },
  { src: '/archive/flags-street.webp', caption: 'Flags along the road in Nettur', period: '2024-25', category: ['unit'], w: 1000, h: 664 },
  { src: '/archive/flags-nettur.webp', caption: 'SSF flags at a unit programme', date: '2024–25', period: '2024-25', category: ['unit'], w: 1000, h: 475 },
];

export const galleryFilters = [
  { id: 'all', label: 'All Moments' },
  { id: 'unit', label: 'Unit Events' },
  { id: 'sahityotsav', label: 'Sahityotsav' },
  { id: 'smartcore', label: 'SMART CORE & Sports' },
  { id: 'smile', label: 'SMILE' },
  { id: 'risala', label: 'Risala' },
  { id: 'posters', label: 'Posters' },
];
