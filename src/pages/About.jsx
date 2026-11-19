import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Download } from 'lucide-react';
import PageHead from '../components/PageHead.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Honours from '../sections/Honours.jsx';
import { lineage, lineageSource, unit, brochure } from '../data/unitData.js';
import usePageTitle from '../components/usePageTitle.js';

export default function About() {
  usePageTitle('About');
  return (
    <>
      <PageHead tag="About the unit" ml={unit.nameMl} title="From SSF India to Nettur">
        <p lang="ml" className="text-xl font-semibold text-white/85">{unit.introMl}</p>
        <p className="mt-3">{unit.intro}</p>
      </PageHead>

      {/* Manifesto quote from the 2025 brochure */}
      <section className="frame pt-12 sm:pt-16" aria-labelledby="manifesto">
        <figure className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-12 lg:p-16">
          <div className="aura aura-gold -right-40 -top-40 size-[520px]" aria-hidden="true" />
          <p className="tag relative text-glow-gold">Our idea</p>
          <h2 id="manifesto" lang="ml" className="relative mt-4 text-5xl font-extrabold text-white sm:text-6xl">{brochure.manifesto.titleMl}</h2>
          <p className="relative mt-1 font-display text-lg font-bold text-white/60">{brochure.manifesto.title}</p>
          <blockquote lang="ml" className="relative mt-8 max-w-3xl border-l-2 border-glow-gold pl-6 text-xl font-semibold text-white/90 sm:text-2xl">{brochure.manifesto.ml}</blockquote>
          <figcaption className="relative mt-6 text-sm text-white/45">From the SSF Nettur Unit Brochure 2025</figcaption>
        </figure>
      </section>

      <section className="frame pt-24 sm:pt-32" aria-label="Six levels of SSF">
        <SectionHead tag="Six levels, one federation" tone="text-glow-cyan" title="Where Nettur sits in SSF" />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lineage.map((l, i) => {
            const body = (
              <>
                <span className="flex items-center justify-between">
                  <span className={`tag ${l.current ? 'text-glow-emerald' : 'text-white/45'}`}>0{i + 1} • {l.tier}</span>
                  {l.current && <span className="dot-live size-2 rounded-full bg-glow-emerald shadow-[0_0_12px_#10B981]" aria-hidden="true" />}
                </span>
                <span className="mt-4 block font-display text-2xl font-bold tracking-[-0.02em] text-white">{l.name}</span>
                <span className="mt-3 block text-[15px] leading-relaxed text-white/60">{l.role}</span>
                <span className="mt-auto flex items-center gap-1.5 pt-6 text-[13px] font-semibold text-white/80">
                  <span className="min-w-0 truncate">{l.link}</span>{l.anchor ? <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" /> : <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />}
                </span>
              </>
            );
            const cls = `glass glow-card flex h-full flex-col p-6 ${l.current ? 'border-glow-emerald/40 bg-glow-emerald/[0.06]' : ''}`;
            return (
              <li key={l.name}>
                {l.anchor ? <Link to={l.anchor} className={cls}>{body}</Link> : <a href={l.url} target="_blank" rel="noopener" className={cls}>{body}</a>}
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-xs text-white/40">SSF India figures from the <a href={lineageSource.url} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white">{lineageSource.label}</a>, checked {lineageSource.checked}.</p>
      </section>

      <section id="honours" className="frame scroll-mt-28 pt-24 sm:pt-32" aria-label="Honours and awards">
        <SectionHead tag="Honours cabinet • 2024–25" tone="text-glow-gold" title="Honours & awards" />
        <Honours />
      </section>

      <section className="frame pt-24 sm:pt-32" aria-label="Support SSF">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[32px] border border-glow-emerald/25 bg-gradient-to-r from-glow-emerald/15 to-transparent p-8 sm:p-12">
          <div className="max-w-2xl">
            <p lang="ml" className="text-2xl font-bold text-white/90 sm:text-3xl">{brochure.support.ml}</p>
            <p lang="ml" className="mt-2 text-3xl font-extrabold text-glow-emerald sm:text-4xl">{brochure.support.callMl}</p>
          </div>
          <a href={brochure.file} download className="btn-emerald"><Download className="size-4" aria-hidden="true" />2025 brochure ({brochure.sizeLabel})</a>
        </div>
      </section>
    </>
  );
}
