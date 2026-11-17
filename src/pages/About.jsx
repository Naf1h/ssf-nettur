import { unit, intro, campaign, areas } from '../data/unitData.js';
import { HierarchyList, AreaIcon, JoinBand } from '../components/blocks.jsx';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

function Row({ title, ml, children }) {
  return (
    <section className="grid gap-8 border-t border-line py-14 md:grid-cols-12 md:py-20">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          {ml && <p lang="ml" className="mb-2 font-semibold text-brand-blue">{ml}</p>}
          <h2 className="display text-3xl sm:text-4xl">{title}</h2>
        </div>
      </div>
      <div className="min-w-0 md:col-span-8">{children}</div>
    </section>
  );
}

export default function About() {
  usePageTitle('About');
  return (
    <>
      <PageHeader ml="യൂണിറ്റിനെക്കുറിച്ച്" title="About the unit">
        <p>{unit.place}</p>
      </PageHeader>
      <div className="page">
        <Row title="Who we are" ml={unit.nameMl}>
          <p lang="ml" className="text-xl text-ink">{intro.ml}</p>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">{intro.en}</p>
        </Row>
        <Row title="Our place in SSF" ml="സംഘടനാ ഘടന">
          <p className="mb-8 max-w-2xl text-ink-muted">Every SSF member starts in a unit. Units form a sector, sectors a division, and so on up to the national federation.</p>
          <HierarchyList />
        </Row>
        <Row title="This year's campaign" ml={`${campaign.year} സംസ്ഥാന ക്യാമ്പയിൻ`}>
          <div className="grid gap-6 border border-line p-6 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center sm:p-8">
            <img src="/assets/jeevithamavuka.webp" alt={campaign.ml} width="1400" height="965" loading="lazy" className="h-auto w-full max-w-[240px]" />
            <div>
              <p className="text-2xl font-bold"><span lang="ml">{campaign.ml}</span></p>
              <p className="mt-1 text-lg text-ink-muted">{campaign.en}</p>
              <p className="mt-4 text-sm text-ink-muted">The {campaign.by} for {campaign.year}. The Nettur unit takes part in it alongside every SSF unit in Kerala.</p>
            </div>
          </div>
        </Row>
        <Row title="What we do" ml="പ്രവർത്തനങ്ങൾ">
          <ul className="border-t border-line">
            {areas.map((a) => (
              <li key={a.id} className="grid grid-cols-[40px_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[48px_200px_1fr]">
                <AreaIcon name={a.icon} className="size-6 text-brand-blue" />
                <div>
                  <p lang="ml" className="text-xl font-bold">{a.ml}</p>
                  <p className="text-sm font-semibold text-ink-muted">{a.en}</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <p lang="ml">{a.textMl}</p>
                  <p className="mt-1 text-sm text-ink-muted">{a.textEn}</p>
                </div>
              </li>
            ))}
          </ul>
        </Row>
      </div>
      <JoinBand />
    </>
  );
}
