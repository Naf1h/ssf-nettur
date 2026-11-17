import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { unit, committeeTerm } from '../data/unitData.js';
import { PageIntro, SectionHead, HierarchyStrip, CommitteeGrid, JoinBand } from '../components/ui.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function About() {
  usePageTitle('About & Hierarchy');
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <PageIntro tag="ABOUT // NETTUR UNIT" title="About & hierarchy">
        <p>{unit.place}</p>
      </PageIntro>

      <section aria-labelledby="who-title" className="page grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <p className="tag mb-4 text-brand-blue">01 // THE UNIT</p>
          <h2 id="who-title" className="font-head text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Who we are</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl leading-relaxed">{unit.intro}</p>
          <dl className="mt-10 grid border-l border-t border-line sm:grid-cols-2">
            {[
              ['Federation', unit.federation],
              ['Unit', 'Nettur'],
              ['Location', 'Nettur, Thalassery, Kannur'],
              ['2026 campaign', unit.campaign],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-r border-line p-5">
                <dt className="tag text-ink-muted">{k}</dt>
                <dd className="mt-2 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="chain-title" className="border-t border-line bg-alt py-16 md:py-24">
        <div className="page">
          <SectionHead tag="02 // STRUCTURE" title="Six tiers, one federation" id="chain-title">
            <p>Every member starts in a unit. Units form a sector, sectors a division, and so on up to SSF India.</p>
          </SectionHead>
          <div className="mt-10"><HierarchyStrip /></div>
        </div>
      </section>

      <section id="committee" aria-labelledby="committee-title" className="page scroll-mt-24 py-16 md:py-24">
        <SectionHead tag={`03 // EXECUTIVE COMMITTEE ${committeeTerm}`} title="Unit executive committee" id="committee-title">
          <p>Office bearers for {committeeTerm}.</p>
        </SectionHead>
        <div className="mt-10"><CommitteeGrid /></div>
      </section>

      <JoinBand />
    </>
  );
}
