import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { lineage } from '../data/unitData.js';

// Compact 6-level chain under the hero. Every level opens its official platform.
export default function LineageStrip() {
  return (
    <nav aria-label="SSF structure" className="mt-14">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {lineage.map((l, i) => {
          const inner = (
            <>
              <span className={`tag ${l.current ? 'text-night/70' : 'text-glow-emerald/80'}`}>0{i + 1}</span>
              {l.current && <span className="dot-live size-1.5 rounded-full bg-night" aria-hidden="true" />}
              <span>{l.name}</span>
            </>
          );
          const cls = `inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
            l.current ? 'bg-glow-emerald text-night' : 'border border-white/[0.08] bg-white/[0.03] text-white/75 hover:border-white/20 hover:text-white'
          }`;
          return (
            <li key={l.name} className="flex items-center gap-1">
              {l.anchor ? (
                <Link to={`/#${l.anchor}`} className={cls}>{inner}</Link>
              ) : (
                <a href={l.url} target="_blank" rel="noopener" className={cls}>{inner}</a>
              )}
              {i < lineage.length - 1 && <ChevronRight className="size-3.5 text-white/25" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
