import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Wordmark from './Wordmark.jsx';
import { navLinks } from './nav.js';
import { hierarchy, social, unit } from '../data/unitData.js';

export default function Footer() {
  const chain = hierarchy.filter((h) => !h.url);
  return (
    <footer className="bg-surface-dark text-white">
      <div className="page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label="SSF Nettur, home"><Wordmark light /></Link>
          <p lang="ml" className="mt-5 text-slate-300">{unit.nameMl}</p>
          <div className="mt-6 flex gap-2">
            <a href={social.instagram.url} target="_blank" rel="noopener" aria-label="Instagram" className="grid size-11 place-items-center rounded-lg border border-white/15 text-slate-300 hover:text-white">
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a href={social.facebook.url} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-11 place-items-center rounded-lg border border-white/15 text-slate-300 hover:text-white">
              <Facebook className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <p className="mb-4 text-sm font-semibold">Pages</p>
          <ul className="grid gap-2 text-sm text-slate-400">
            {navLinks.map((l) => <li key={l.to}><Link className="inline-block py-1 hover:text-white" to={l.to}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <p className="mb-4 text-sm font-semibold">SSF</p>
          <ul className="grid gap-2 text-sm text-slate-400">
            {hierarchy.filter((h) => h.url).map((h) => (
              <li key={h.name}><a className="inline-block py-1 hover:text-white" href={h.url} target="_blank" rel="noopener">{h.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="mb-4 text-sm font-semibold">Unit</p>
          <ul className="grid gap-2 text-sm text-slate-400">
            {chain.slice().reverse().map((h) => <li key={h.level} className="py-1">{h.name} {h.level}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page flex flex-wrap justify-between gap-3 py-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {unit.name}</span>
          <span>Sunni Students' Federation</span>
        </div>
      </div>
    </footer>
  );
}
