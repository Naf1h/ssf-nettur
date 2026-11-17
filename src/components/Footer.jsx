import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from './nav.js';
import { lineage, social, unit } from '../data/unitData.js';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            A student platform in Nettur, Thalassery, for learning, culture, career guidance and service.
          </p>
          <div className="mt-6 flex gap-2">
            <a href={social.instagram.url} target="_blank" rel="noopener" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:bg-white/10 hover:text-white"><Instagram className="size-5" aria-hidden="true" /></a>
            <a href={social.facebook.url} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-11 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:bg-white/10 hover:text-white"><Facebook className="size-5" aria-hidden="true" /></a>
          </div>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">Quick links</p>
          <ul className="grid gap-1 text-sm">
            {navLinks.map((l) => <li key={l.id}><Link className="inline-block py-1.5 text-white/75 hover:text-white" to={`/#${l.id}`}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">Contact</p>
          <ul className="grid gap-3 text-sm text-white/75">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span>{unit.address}</span></li>
            <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><a className="break-all hover:text-white" href={`mailto:${unit.email}`}>{unit.email}</a></li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-white/45">{lineage.map((l) => l.name).join(' → ')}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-6 text-xs text-white/45">
          <span>© {new Date().getFullYear()} SSF Nettur Unit. All rights reserved.</span>
          <span>Knowledge · Service · Unity</span>
        </div>
      </div>
    </footer>
  );
}
