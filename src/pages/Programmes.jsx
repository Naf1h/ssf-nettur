import { useState } from 'react';
import { Instagram } from 'lucide-react';
import PageHead from '../components/PageHead.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { EventCard, ArchiveCard, upcomingEvents, pastEvents } from '../components/Posters.jsx';
import { archive, social } from '../data/unitData.js';
import usePageTitle from '../components/usePageTitle.js';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'archive', label: '2024–25 Archive' },
  { id: 'sahityotsav', label: 'Sahityotsav' },
  { id: 'smartcore', label: 'SMART CORE' },
  { id: 'smile', label: 'SMILE' },
  { id: 'risala', label: 'Risala' },
];

export default function Programmes() {
  usePageTitle('Programmes');
  const upcoming = upcomingEvents();
  // Past 2026 events join the archive with a photo of their poster.
  const past = pastEvents().map((e) => ({ id: e.id, category: e.category, titleMl: e.titleMl, title: e.title, image: e.image, label: 'Completed • 2026' }));
  const items = [...past, ...archive.map((a) => ({ ...a, label: '2024–25 Archive' }))];
  const count = (id) => {
    if (id === 'all') return upcoming.length + items.length;
    if (id === 'upcoming') return upcoming.length;
    if (id === 'archive') return archive.length;
    return items.filter((a) => a.category === id).length;
  };
  const shown = filters.filter((f) => count(f.id) > 0);
  const [filter, setFilter] = useState('all');
  const showUpcoming = filter === 'all' || filter === 'upcoming';
  const list = filter === 'all' ? items : filter === 'archive' ? items.filter((a) => a.label === '2024–25 Archive') : items.filter((a) => a.category === filter);

  return (
    <>
      <PageHead tag="Programmes" title="What's on, and what's been">
        <p>Live 2026 posters first, then highlights from our 2024–25 archive. Every poster is posted on {social.instagram.handle} first.</p>
      </PageHead>

      <div className="frame sticky top-[calc(76px+env(safe-area-inset-top))] z-10 -mt-2 bg-night/95 py-3">
        <div role="group" aria-label="Filter programmes" className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {shown.map((f) => (
            <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${filter === f.id ? 'border-glow-emerald bg-glow-emerald text-night' : 'border-white/10 bg-white/[0.03] text-white/70 hover:text-white'}`}>
              {f.label} <span className={filter === f.id ? 'text-night/60' : 'text-white/35'}>{count(f.id)}</span>
            </button>
          ))}
        </div>
      </div>

      {showUpcoming && upcoming.length > 0 && (
        <section className="frame pt-10" aria-label="Upcoming">
          <SectionHead tag="Upcoming • 2026" title="Live posters">
            <p>Tap a poster to see it in full.</p>
          </SectionHead>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {upcoming.map((e) => <EventCard key={e.id} e={e} />)}
          </div>
        </section>
      )}

      {filter !== 'upcoming' && list.length > 0 && (
        <section className="frame pt-20" aria-label="Archive">
          <SectionHead tag="Past programmes" tone="text-glow-gold" title="Archive highlights" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => <ArchiveCard key={a.id} a={a} label={a.label} />)}
          </div>
        </section>
      )}

      <p className="frame pt-10 text-sm text-white/45">
        <a href={social.instagram.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-white"><Instagram className="size-4" aria-hidden="true" />More on {social.instagram.handle}</a>
      </p>
    </>
  );
}
