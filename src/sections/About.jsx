import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { lineage, unit } from '../data/unitData.js';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative">
      <div className="frame pt-28 sm:pt-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="tag text-glow-cyan">About the unit</p>
            <h2 id="about-title" className="h-sec mt-3">From SSF India to Nettur</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p lang="ml" className="text-2xl font-semibold text-white sm:text-[1.7rem]">{unit.introMl}</p>
            <p className="mt-4 text-[17px] leading-relaxed text-white/60">{unit.intro}</p>
          </div>
        </div>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {lineage.map((l, i) => {
            const Icon = l.anchor ? ArrowDown : ArrowUpRight;
            const body = (
              <>
                <span className="flex items-center justify-between">
                  <span className={`tag ${l.current ? 'text-glow-emerald' : 'text-white/45'}`}>0{i + 1} • {l.tier}</span>
                  {l.current && <span className="dot-live size-2 rounded-full bg-glow-emerald shadow-[0_0_12px_#10B981]" aria-hidden="true" />}
                </span>
                <span className="mt-4 block font-display text-xl font-bold tracking-[-0.02em] text-white">{l.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-white/55">{l.role}</span>
                <span className="mt-auto flex items-start gap-1.5 pt-5 text-[13px] font-semibold text-white/80">
                  <span className="min-w-0">{l.link.split('_').map((part, k) => (k ? <span key={k}><wbr />_{part}</span> : part))}</span><Icon className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                </span>
              </>
            );
            const cls = `glass glow-card flex h-full flex-col p-5 ${l.current ? 'border-glow-emerald/40 bg-glow-emerald/[0.06]' : ''}`;
            return (
              <li key={l.name}>
                {l.anchor ? (
                  <Link to={`/#${l.anchor}`} className={cls}>{body}</Link>
                ) : (
                  <a href={l.url} target="_blank" rel="noopener" className={cls} aria-label={`${l.name}: ${l.link} (opens in a new tab)`}>{body}</a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
