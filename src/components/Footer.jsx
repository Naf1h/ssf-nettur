import { Link } from 'react-router-dom';
import Lockup from './Wordmark.jsx';
import { navLinks } from './nav.js';
import { lineage, social, unit } from '../data/unitData.js';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.08] bg-night-2">
      <div className="h-[3px] bg-[linear-gradient(90deg,#10B981,#22D3EE,#F5B544)]" aria-hidden="true" />
      <div className="frame grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Lockup size="lg" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">{unit.region}</p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/40">{unit.address}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <p className="tag mb-4 text-white/40">Explore</p>
          <ul className="grid gap-1 text-sm">
            {navLinks.map((l) => <li key={l.id}><Link to={`/#${l.id}`} className="inline-block py-1.5 text-white/70 hover:text-white">{l.label}</Link></li>)}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <p className="tag mb-4 text-white/40">Follow</p>
          <ul className="grid gap-1 text-sm">
            <li><a href={social.instagram.url} target="_blank" rel="noopener" className="inline-block py-1.5 text-white/70 hover:text-white">Instagram</a></li>
            <li><a href={social.facebook.url} target="_blank" rel="noopener" className="inline-block py-1.5 text-white/70 hover:text-white">Facebook</a></li>
            <li><a href={`mailto:${unit.email}`} className="inline-block py-1.5 text-white/70 hover:text-white">Email</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="tag mb-4 text-white/40">SSF network</p>
          <ul className="grid gap-1 text-sm">
            {lineage.filter((l) => l.url && !l.current).map((l) => (
              <li key={l.name}><a href={l.url} target="_blank" rel="noopener" className="inline-block py-1.5 text-white/70 hover:text-white">{l.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="frame flex flex-wrap justify-between gap-3 py-6 text-xs text-white/40">
          <span>© {new Date().getFullYear()} SSF Nettur Unit</span>
          <span>Sunni Students' Federation</span>
        </div>
      </div>
    </footer>
  );
}
