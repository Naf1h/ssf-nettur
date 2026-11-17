import { ArrowUpRight } from 'lucide-react';
import { wings, sahityotsavLinks } from '../data/unitData.js';

// Asymmetric 12-column bento. Placement per wing, in order.
const place = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-12',
];
const accents = ['text-glow-emerald', 'text-glow-gold', 'text-glow-cyan', 'text-glow-emerald', 'text-glow-teal', 'text-glow-gold', 'text-glow-cyan'];

export default function Wings() {
  return (
    <section id="wings" aria-labelledby="wings-title" className="relative">
      <div className="pointer-events-none absolute -left-40 top-20 size-[460px] rounded-full bg-glow-emerald/10 blur-[130px]" aria-hidden="true" />
      <div className="frame relative pt-28 sm:pt-36">
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="tag text-glow-gold">Seven wings</p>
            <h2 id="wings-title" className="h-sec mt-3">How the unit works</h2>
          </div>
          <p className="text-white/55 md:col-span-4">Every programme in Nettur runs through one of these seven wings.</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {wings.map((w, i) => {
            const big = i === 0;
            const wide = i === 6;
            return (
              <li key={w.id} className={`glass glow-card flex flex-col p-6 sm:p-8 ${place[i]} ${big ? 'sm:col-span-2 lg:min-h-[420px]' : ''} ${wide ? 'sm:col-span-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10' : ''}`}>
                <p className={`tag ${accents[i]} ${wide ? 'lg:hidden' : ''}`}>0{i + 1} // {w.tag}</p>
                <div className={`${big ? 'mt-auto pt-16' : ''} ${wide ? 'lg:max-w-xl' : ''}`}>
                  {wide && <p className={`tag hidden lg:block ${accents[i]}`}>0{i + 1} // {w.tag}</p>}
                  <h3 lang="ml" className={`mt-5 font-extrabold text-white ${big ? 'text-5xl sm:text-6xl' : 'text-3xl'}`}>{w.ml}</h3>
                  <p className={`mt-1 font-display font-bold tracking-[-0.02em] text-white/85 ${big ? 'text-2xl' : 'text-lg'}`}>{w.title}</p>
                </div>
                <div className={`${big ? 'mt-5' : 'mt-4'} ${wide ? 'lg:mt-0 lg:max-w-md' : ''}`}>
                  <p className={`leading-relaxed text-white/60 ${big ? 'max-w-md text-base' : 'text-sm'}`}>{w.text}</p>
                  {w.links && (
                    <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                      {sahityotsavLinks.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener" className="link-arrow">{l.stage}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
