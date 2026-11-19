import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { wings, sahityotsavLinks } from '../data/unitData.js';

const place = ['lg:col-span-7 lg:row-span-2', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-12'];
const accents = ['text-glow-emerald', 'text-glow-gold', 'text-glow-cyan', 'text-glow-emerald', 'text-glow-teal', 'text-glow-gold', 'text-glow-cyan'];

// Full bento grid for /wings.
export function WingsGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
      {wings.map((w, i) => {
        const big = i === 0;
        const wide = i === 6;
        return (
          <li key={w.id} id={w.id} className={`glass glow-card flex scroll-mt-28 flex-col p-6 sm:p-8 ${place[i]} ${big ? 'sm:col-span-2 lg:min-h-[440px]' : ''} ${wide ? 'sm:col-span-2 lg:flex-row lg:items-start lg:justify-between lg:gap-10' : ''}`}>
            <div className={`${big ? 'flex flex-1 flex-col' : ''} ${wide ? 'lg:max-w-md' : ''}`}>
              <p className={`tag ${accents[i]}`}>0{i + 1} // {w.tag}</p>
              <h3 lang="ml" className={`font-extrabold text-white ${big ? 'mt-auto pt-14 text-5xl sm:text-6xl' : 'mt-5 text-3xl'}`}>{w.ml}</h3>
              <p className={`mt-1 font-display font-bold tracking-[-0.02em] text-white/85 ${big ? 'text-2xl' : 'text-lg'}`}>{w.title}</p>
              <p className={`mt-4 leading-relaxed text-white/60 ${big ? 'max-w-md text-base' : 'text-sm'}`}>{w.text}</p>
            </div>
            <div className={`mt-5 ${wide ? 'lg:mt-0 lg:max-w-lg' : ''}`}>
              <ul className="flex flex-wrap gap-2" aria-label={`${w.title} activities`}>
                {w.activities.map((a) => <li key={a} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/75">{a}</li>)}
              </ul>
              {w.links && (
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {sahityotsavLinks.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener" className="link-arrow">{l.stage} Sahityotsav<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
                  ))}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// Compact strip for the home page; each wing links to its card on /wings.
export function WingsPreview() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
      {wings.map((w, i) => (
        <li key={w.id}>
          <Link to={`/wings#${w.id}`} className="glass glow-card flex h-full flex-col p-4">
            <span className={`tag ${accents[i]}`}>0{i + 1}</span>
            <span lang="ml" className="mt-3 block text-lg font-bold text-white">{w.ml}</span>
            <span className="mt-0.5 block text-[13px] font-semibold text-white/60">{w.title}</span>
            <ArrowRight className="mt-auto size-4 self-end pt-0 text-white/35" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
