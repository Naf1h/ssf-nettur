// All site content lives here. Edit this file to update the website.
// Rule: no placeholder text. Leave a list empty instead of filling it with dummy entries;
// the site hides or explains empty sections on its own.

export const unit = {
  name: 'SSF Nettur Unit',
  nameMl: 'എസ് എസ് എഫ് നെട്ടൂർ യൂണിറ്റ്',
  shortMl: 'നെട്ടൂർ',
  place: 'Nettur, Thalassery, Kannur, Kerala',
  placeMl: 'നെട്ടൂർ, തലശ്ശേരി',
};

export const campaign = {
  ml: 'ജീവിതമാവുക',
  en: 'Live the Message',
  year: 2026,
  by: 'SSF Kerala state campaign',
};

// Top to bottom: national body down to this unit.
export const hierarchy = [
  { level: 'National', levelMl: 'ദേശീയം', name: 'SSF India', nameMl: 'എസ് എസ് എഫ് ഇന്ത്യ', url: 'https://www.nationalssf.org/' },
  { level: 'State', levelMl: 'സംസ്ഥാനം', name: 'SSF Kerala', nameMl: 'എസ് എസ് എഫ് കേരള', url: 'https://ssfkerala.org/' },
  { level: 'District', levelMl: 'ജില്ല', name: 'Kannur', nameMl: 'കണ്ണൂർ' },
  { level: 'Division', levelMl: 'ഡിവിഷൻ', name: 'Thalassery', nameMl: 'തലശ്ശേരി' },
  { level: 'Sector', levelMl: 'സെക്ടർ', name: 'Dharmadam', nameMl: 'ധർമ്മടം' },
  { level: 'Unit', levelMl: 'യൂണിറ്റ്', name: 'Nettur', nameMl: 'നെട്ടൂർ', current: true },
];

export const intro = {
  ml: 'നെട്ടൂരിലെ വിദ്യാർഥികൾ ഒന്നിച്ചിരിക്കുന്ന ഇടം. പഠനവും ആത്മീയതയും സർഗാത്മകതയും സേവനവും ചേർത്തുപിടിച്ച്, എസ് എസ് എഫിന്റെ ആശയങ്ങളെ നാട്ടിലെ ജീവിതമാക്കുകയാണ് യൂണിറ്റിന്റെ ലക്ഷ്യം.',
  en: "SSF Nettur is the Sunni Students' Federation unit for the students of Nettur, Thalassery. We are part of Dharmadam Sector, Thalassery Division and Kannur District.",
};

// Federation-wide figures, with their source. Update when nationalssf.org changes them.
export const stats = {
  source: 'nationalssf.org',
  sourceUrl: 'https://www.nationalssf.org/',
  checked: 'November 2026',
  items: [
    { value: '1973', label: 'SSF founded' },
    { value: '~10 lakh', label: 'Members across India' },
    { value: '26', label: 'States' },
    { value: '6,370', label: 'Units in Kerala' },
  ],
};

// icon: any lucide-react icon name used in src/components/AreaIcon.jsx
export const areas = [
  { id: 'faith', icon: 'BookOpen', ml: 'ആത്മീയം', en: 'Faith', textMl: 'വിശ്വാസവും ജീവിതവും ചേർത്തുവെക്കുന്ന പഠന സദസ്സുകൾ.', textEn: 'Study gatherings that join belief with daily life.' },
  { id: 'culture', icon: 'Feather', ml: 'സാംസ്കാരികം', en: 'Sahityotsav', textMl: 'യൂണിറ്റ് സാഹിത്യോത്സവ് മുതൽ മേൽഘടകങ്ങൾ വരെ സർഗശേഷിക്ക് വേദി.', textEn: 'A stage for talent, from the unit Sahityotsav up to sector and division rounds.' },
  { id: 'education', icon: 'GraduationCap', ml: 'വിദ്യാഭ്യാസം', en: 'Education', textMl: 'പഠനത്തിലും കരിയർ തിരഞ്ഞെടുപ്പിലും വഴികാട്ടൽ.', textEn: 'Guidance on studies and career choices.' },
  { id: 'reading', icon: 'Newspaper', ml: 'വായന', en: 'Risala', textMl: 'രിസാല വാരികയിലൂടെ വായനയുടെ ശീലം.', textEn: 'Building a reading habit through Risala weekly.' },
  { id: 'service', icon: 'HandHeart', ml: 'സേവനം', en: 'Service', textMl: 'നാടിന്റെ ആവശ്യങ്ങളിൽ ഒപ്പം നിൽക്കുന്ന പ്രവർത്തനങ്ങൾ.', textEn: 'Standing with Nettur when it needs help.' },
];

// Upcoming programmes. Past dates are hidden automatically.
// Example: { date: '2026-12-06', time: '9:00 AM', titleMl: 'യൂണിറ്റ് സാഹിത്യോത്സവ്', title: 'Unit Sahityotsav', place: 'Nettur' }
export const events = [];

// Unit committee. The Committee page and menu link stay hidden while this is empty.
// Example: { name: 'Full Name', role: 'President', photo: '/assets/team/president.webp' }
export const committee = [];

export const social = {
  instagram: { handle: '@ssf_nettur', url: 'https://www.instagram.com/ssf_nettur' },
  facebook: { label: 'SSF Nettur', url: 'https://www.facebook.com/share/19qNzpWRzc/' },
  // Behold JSON feed for @ssf_nettur (https://feeds.behold.so/XXXX). Empty shows a link card instead of posts.
  instagramFeedUrl: '',
};

export const joinCopy = {
  ml: 'എസ് എസ് എഫിൽ അംഗമാകാം',
  en: 'Students of Nettur can join the unit. Message us on Instagram and a unit member will reply.',
};
