import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { unit, intro, campaign, areas } from '../data/unitData.js';
import { CampaignHero, StatsStrip, SectionHead, EventList, JoinBand, AreaIcon } from '../components/blocks.jsx';
import InstagramFeed from '../components/InstagramFeed.jsx';
import usePageTitle from '../components/usePageTitle.js';

// Bento placement for the five work areas (asymmetric on purpose).
const bento = [
  'md:col-span-3 md:row-span-2 bg-surface-dark text-white',
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-2',
  'md:col-span-4',
];

export default function Home() {
  usePageTitle('');
  return (
    <>
      <CampaignHero />

      <section aria-labelledby="unit-title" className="page grid gap-10 pb-16 pt-4 md:grid-cols-12 md:pb-20">
        <div className="md:col-span-7">
          <p lang="ml" className="text-lg font-semibold text-brand-blue">{unit.nameMl}</p>
          <h1 id="unit-title" className="display mt-2 text-5xl sm:text-6xl lg:text-7xl">{unit.name}</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{intro.en}</p>
        </div>
        <div className="md:col-span-5 md:pt-10">
          <p lang="ml" className="text-lg text-ink">{intro.ml}</p>
          <div className="mt-8 flex items-center justify-between gap-4 border border-line p-5">
            <div>
              <p className="label">{campaign.year} {campaign.by}</p>
              <p className="mt-1 font-bold"><span lang="ml">{campaign.ml}</span> <span className="font-medium text-ink-muted">· {campaign.en}</span></p>
            </div>
            <Link to="/about" className="grid size-11 shrink-0 place-items-center rounded-lg border border-line hover:border-ink" aria-label="About the unit">
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section aria-labelledby="work-title" className="bg-surface-alt py-20 md:py-28">
        <div className="page">
          <SectionHead ml="പ്രവർത്തനങ്ങൾ" title="What we do" id="work-title">
            <p className="max-w-sm text-ink-muted">Our work follows SSF's areas of work, brought down to the students and families of Nettur.</p>
          </SectionHead>
          <ul className="grid gap-px border border-line bg-line md:grid-cols-6">
            {areas.map((a, i) => (
              <li key={a.id} className={`flex flex-col gap-4 p-7 sm:p-8 ${i === 0 ? '' : 'bg-white'} ${bento[i]}`}>
                <AreaIcon name={a.icon} className={`size-7 ${i === 0 ? 'text-brand-green' : 'text-brand-blue'}`} />
                <div className={i === 0 ? 'mt-auto' : ''}>
                  <p lang="ml" className={`font-bold ${i === 0 ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>{a.ml}</p>
                  <p className={`mt-1 text-sm font-semibold ${i === 0 ? 'text-slate-400' : 'text-ink-muted'}`}>{a.en}</p>
                </div>
                <p lang="ml" className={i === 0 ? 'text-lg text-slate-200' : 'text-ink'}>{a.textMl}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="updates-title" className="page grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p lang="ml" className="mb-3 text-base font-semibold text-brand-blue">പുതിയ വിശേഷങ്ങൾ</p>
            <h2 id="updates-title" className="display text-4xl sm:text-5xl">Latest updates</h2>
            <p className="mt-4 text-ink-muted">Straight from our Instagram.</p>
            <Link to="/updates" className="btn-line mt-6">All updates<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="md:col-span-8"><InstagramFeed limit={6} /></div>
      </section>

      <section aria-labelledby="events-title" className="border-t border-line bg-surface-alt py-20 md:py-28">
        <div className="page">
          <SectionHead ml="പരിപാടികൾ" title="Upcoming events" id="events-title">
            <Link to="/events" className="btn-line">All events<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </SectionHead>
          <EventList limit={3} />
        </div>
      </section>

      <JoinBand />
    </>
  );
}
