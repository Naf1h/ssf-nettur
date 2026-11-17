import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Brand from './Brand.jsx';
import { navLinks } from './nav.js';
import { hierarchy, social, unit } from '../data/unitData.js';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="stripes h-1" aria-hidden="true" />
      <div className="page grid border-x border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 p-6 py-10 md:col-span-5 md:border-b-0 md:border-r md:p-10">
          <Link to="/" aria-label="SSF Nettur Unit, home"><Brand light /></Link>
          <p className="mt-6 max-w-sm text-sm text-white/60">{unit.federation}, Nettur Unit. {unit.place}.</p>
          <div className="mt-6 flex gap-2">
            <a href={social.instagram.url} target="_blank" rel="noopener" aria-label="Instagram" className="grid size-11 place-items-center border border-white/15 text-white/70 hover:text-white"><Instagram className="size-5" aria-hidden="true" /></a>
            <a href={social.facebook.url} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-11 place-items-center border border-white/15 text-white/70 hover:text-white"><Facebook className="size-5" aria-hidden="true" /></a>
          </div>
        </div>
        <nav aria-label="Footer" className="border-b border-white/10 p-6 py-10 md:col-span-3 md:border-b-0 md:border-r md:p-10">
          <p className="tag mb-4 text-white/50">Pages</p>
          <ul className="grid gap-1 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link className="inline-block py-1.5 text-white/80 hover:text-white" to={l.to}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <div className="p-6 py-10 md:col-span-4 md:p-10">
          <p className="tag mb-4 text-white/50">Structure</p>
          <ol className="grid gap-1 text-sm">
            {hierarchy.map((h) => (
              <li key={h.tier} className="flex justify-between gap-4 py-1.5">
                {h.url ? <a href={h.url} target="_blank" rel="noopener" className="text-white/80 hover:text-white">{h.name}</a> : <span className={h.current ? 'font-semibold text-white' : 'text-white/80'}>{h.name}</span>}
                <span className="tag text-white/40">{h.tier}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page flex flex-wrap justify-between gap-3 py-5">
          <span className="tag text-white/40">© {new Date().getFullYear()} SSF Nettur Unit</span>
          <span className="tag text-white/40">{unit.federation}</span>
        </div>
      </div>
    </footer>
  );
}
