import { committee } from '../data/unitData.js';

export const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/updates', label: 'Updates' },
  { to: '/events', label: 'Events' },
  ...(committee.length ? [{ to: '/committee', label: 'Committee' }] : []),
  { to: '/contact', label: 'Contact' },
];
