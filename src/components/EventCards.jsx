import { useRef, useState } from 'react';
import { CalendarDays, Clock, MapPin, Instagram, ArrowUpRight, Maximize2, X } from 'lucide-react';
import { events, social } from '../data/unitData.js';

const tierStyle = {
  unit: 'bg-brand-green text-white',
  sector: 'bg-brand-blue text-white',
};

function startOfToday() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

export function upcomingEvents() {
  const today = startOfToday();
  return events.filter((e) => new Date(e.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function pastEvents() {
  const today = startOfToday();
  return events.filter((e) => new Date(e.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function longDate(e) {
  const d = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(e.date));
  return e.day ? `${e.day}, ${d}` : d;
}

function PosterLightbox({ event, dialogRef }) {
  return (
    <dialog
      ref={dialogRef}
      aria-label={`Poster: ${event.titleMl || event.title}`}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-navy/90"
      onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
    >
      <div className="relative">
        <img src={event.image} alt={`Poster: ${event.titleMl || event.title}`} className="block h-auto max-h-[90vh] w-auto max-w-[92vw]" />
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-2 top-2 grid size-11 place-items-center bg-white text-navy"
          aria-label="Close poster"
          autoFocus
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

function EventCard({ e }) {
  const dialogRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const open = () => { setOpened(true); requestAnimationFrame(() => dialogRef.current?.showModal()); };
  const rows = [
    { icon: CalendarDays, label: 'Date', value: longDate(e) },
    { icon: Clock, label: 'Time', value: e.time },
    { icon: MapPin, label: 'Venue', value: e.venue },
  ];

  return (
    <article className="grid bg-white sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <div className="bg-alt">
      <button
        type="button"
        onClick={open}
        className="group relative block aspect-[4/5] overflow-hidden bg-alt text-left"
        aria-label={`Open full poster: ${e.titleMl || e.title}`}
      >
        <img src={e.image} alt="" loading="lazy" width="1200" height="1500" className="size-full object-cover object-top" />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-navy transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
          <Maximize2 className="size-3.5" aria-hidden="true" />Full poster
        </span>
      </button>
      </div>

      <div className="flex flex-col gap-5 border-t border-line p-6 sm:border-l sm:border-t-0 md:p-7">
        <span className={`tag self-start px-2.5 py-1.5 ${tierStyle[e.tier] || tierStyle.unit}`}>{e.badge}</span>
        <div>
          {e.titleMl ? (
            <h3 lang="ml" className="ml-title text-[1.65rem] font-bold sm:text-3xl">{e.titleMl}</h3>
          ) : (
            <h3 className="font-head text-3xl font-extrabold tracking-[-0.03em]">{e.title}</h3>
          )}
          <p className="mt-2 text-sm font-semibold text-ink">{e.organizer}</p>
          {e.summary && <p className="mt-1 text-sm text-ink-muted">{e.summary}</p>}
        </div>
        <dl className="border-t border-line">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="grid grid-cols-[20px_64px_1fr] items-center gap-3 border-b border-line py-3">
              <Icon className="size-4 text-brand-blue" aria-hidden="true" />
              <dt className="tag text-ink-muted">{label}</dt>
              <dd className="min-w-0 text-sm font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
        <a
          href={e.url || social.instagram.url}
          target="_blank"
          rel="noopener"
          className="btn-navy mt-auto justify-between self-stretch shadow-[4px_4px_0_#16A34A] transition-transform duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <span className="inline-flex items-center gap-2"><Instagram className="size-4" aria-hidden="true" />View on {social.instagram.handle}</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      {opened && <PosterLightbox event={e} dialogRef={dialogRef} />}
    </article>
  );
}

export default function EventCards() {
  const list = upcomingEvents();
  if (!list.length) return null;
  return (
    <div className={`grid gap-px border border-line bg-line ${list.length > 1 ? 'xl:grid-cols-2' : ''}`}>
      {list.map((e) => <EventCard key={e.id} e={e} />)}
    </div>
  );
}
