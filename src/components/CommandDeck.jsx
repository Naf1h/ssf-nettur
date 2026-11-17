import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SSFMark } from './Wordmark.jsx';
import { navLinks } from './nav.js';
import { lineage, sahityotsavLinks, social, unit } from '../data/unitData.js';

// Obsidian footer: links, coordinates, and the oversized SSF NETTUR watermark.
export default function CommandDeck() {
  const links = [
    { label: 'Instagram', value: social.instagram.handle, href: social.instagram.url },
    { label: 'Facebook', value: `/${social.facebook.handle}`, href: social.facebook.url },
    social.whatsapp && { label: 'WhatsApp', value: 'Chat with the unit', href: `https://wa.me/${social.whatsapp}` },
    { label: 'Email', value: unit.email, href: `mailto:${unit.email}` },
  ].filter(Boolean);
  const chain = lineage.slice(2).reverse();

  return (
    <footer className="relative mt-8 overflow-hidden rounded-t-[36px] bg-obsidian text-white sm:rounded-t-[48px]">
      <div className="tricolor mx-auto w-40 rounded-b-full" aria-hidden="true" />
      <div className="frame relative grid gap-14 pb-10 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-5">
          <p className="text-[2rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-4xl">Nettur, Thalassery.<br /><span className="text-white/45">Find the unit here.</span></p>
          <ul className="mt-10 border-t border-white/10">
            {links.map((l) => (
              <li key={l.label} className="border-b border-white/10">
                <a href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener" className="group flex items-center justify-between gap-4 py-4">
                  <span className="text-white/50">{l.label}</span>
                  <span className="flex min-w-0 items-center gap-2 font-medium">
                    <span className="truncate">{l.value}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-white/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 md:col-start-7">
          <p className="idx text-white/40">{unit.coords}</p>
          <dl className="mt-6 grid gap-4 text-sm">
            {chain.map((c) => (
              <div key={c.name} className="flex justify-between gap-6 border-b border-white/10 pb-4">
                <dt className="text-white/50">{c.current ? 'Unit' : c.name.split(' ').pop()}</dt>
                <dd className="text-right font-medium">{c.current ? 'Nettur' : c.name.replace(/ (Sector|Division|District)$/, '')}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-white/50">{unit.address}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2 md:col-start-11">
          <ul className="grid gap-2 text-sm">
            {navLinks.map((l) => <li key={l.id}><Link to={`/#${l.id}`} className="inline-block py-1 text-white/60 hover:text-white">{l.label}</Link></li>)}
            {sahityotsavLinks.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener" className="inline-block py-1 text-white/60 hover:text-white">{l.stage} Sahityotsav</a></li>)}
          </ul>
        </nav>
      </div>

      <div className="frame relative select-none pb-6" aria-hidden="true">
        <div className="flex items-baseline gap-[0.22em] text-[14.5vw] leading-[0.8] text-white/[0.06] sm:text-[15vw] xl:text-[13.5rem]">
          <SSFMark className="h-[0.74em] translate-y-[0.02em]" />
          <span className="font-extrabold tracking-[-0.03em]">NETTUR</span>
        </div>
      </div>
      <div className="frame relative flex flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40">
        <span>© {new Date().getFullYear()} SSF Nettur Unit</span>
        <span>Sunni Students' Federation · Dharmadam Sector · Thalassery Division</span>
      </div>
    </footer>
  );
}
