import { useMemo, useRef, useState } from 'react';
import { CalendarDays, Clock, MapPin, Users, Instagram, ArrowUpRight, Maximize2, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { events, social } from '../data/unitData.js';
import { staggerContainer, scaleInCard, inView, hoverLift } from '../lib/motion.js';

const tierBadge = {
  unit: { label: 'UNIT PROGRAMME • SSF NETTUR', cls: 'bg-emerald-ssf/10 text-green-ssf ring-emerald-ssf/25', dot: 'bg-emerald-ssf' },
  sector: { label: 'SECTOR COUNCIL • DHARMADAM SECTOR', cls: 'bg-blue-ssf/10 text-blue-ssf ring-blue-ssf/25', dot: 'bg-blue-ssf' },
};

function today() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

function fullDate(e) {
  const d = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(e.date));
  return e.day ? `${e.day}, ${d}` : d;
}

function Lightbox({ e, dialogRef }) {
  return (
    <dialog
      ref={dialogRef}
      aria-label={`Poster: ${e.title}`}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-navy/80 backdrop:backdrop-blur-sm"
      onClick={(ev) => { if (ev.target === ev.currentTarget) ev.currentTarget.close(); }}
    >
      <div className="relative">
        <img src={e.image} alt={`Poster: ${e.title}`} className="block h-auto max-h-[90vh] w-auto max-w-[92vw] rounded-2xl" />
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close poster" className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white text-navy shadow-soft">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

function EventCard({ e, past }) {
  const dialogRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const badge = tierBadge[e.tier] || tierBadge.unit;
  const open = () => { setMounted(true); requestAnimationFrame(() => dialogRef.current?.showModal()); };
  const rows = [
    { icon: CalendarDays, label: 'Date', value: fullDate(e) },
    { icon: Clock, label: 'Time', value: e.time },
    { icon: MapPin, label: 'Venue', value: e.venue },
    { icon: Users, label: 'Organizer', value: e.organizer.replace(/^Organized by /, '') },
  ];

  return (
    <motion.article variants={scaleInCard} whileHover={hoverLift} className="card-motion grid overflow-hidden md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <button type="button" onClick={open} aria-label={`Open full poster: ${e.title}`} className="group relative block aspect-[4/5] overflow-hidden bg-alabaster">
        <img src={e.image} alt="" aria-hidden="true" className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-2xl" />
        <img src={e.image} alt="" loading="lazy" className="relative mx-auto h-full w-auto max-w-full object-contain p-5 drop-shadow-[0_20px_30px_rgb(0_0_0/0.18)] transition-transform duration-300 group-hover:scale-[1.02]" />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy shadow-soft backdrop-blur">
          <Maximize2 className="size-3.5" aria-hidden="true" />View full poster
        </span>
      </button>

      <div className="flex flex-col gap-6 p-7 md:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`pill ring-1 ring-inset ${badge.cls}`}><span className={`size-1.5 rounded-full ${badge.dot} ${past ? '' : 'dot-live'}`} aria-hidden="true" />{badge.label}</span>
          {past && <span className="pill bg-slate-100 text-ink-muted">Completed</span>}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-muted">{e.type}</p>
          <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-navy sm:text-3xl">{e.title}</h3>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-alabaster text-blue-ssf ring-1 ring-slate-200/80"><Icon className="size-[18px]" aria-hidden="true" /></span>
              <div className="min-w-0">
                <dt className="text-xs font-semibold text-ink-muted">{label}</dt>
                <dd className="text-sm font-bold text-navy">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
        <a href={e.url || social.instagram.url} target="_blank" rel="noopener" className="btn-secondary mt-auto self-start">
          <Instagram className="size-4" aria-hidden="true" />View Post on {social.instagram.handle}<ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      {mounted && <Lightbox e={e} dialogRef={dialogRef} />}
    </motion.article>
  );
}

export default function Events() {
  const t = today();
  const all = useMemo(
    () => [...events].map((e) => ({ ...e, past: new Date(e.date) < t }))
      .sort((a, b) => (a.past - b.past) || (a.past ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const filters = [
    { id: 'all', label: 'All', match: () => true },
    { id: 'unit', label: 'Unit Programmes', match: (e) => e.tier === 'unit' },
    { id: 'sector', label: 'Sector Council', match: (e) => e.tier === 'sector' },
    { id: 'recent', label: 'Recent Highlights', match: (e) => e.past },
  ].filter((f) => f.id === 'all' || all.some(f.match));
  const [filter, setFilter] = useState('all');
  const active = filters.find((f) => f.id === filter) || filters[0];
  const shown = all.filter(active.match);

  return (
    <section id="events" aria-labelledby="events-title" className="relative overflow-hidden bg-alabaster">
      <div className="glow -left-32 top-24 size-[420px] bg-blue-ssf opacity-15" aria-hidden="true" />
      <div className="glow -right-32 bottom-10 size-[420px] bg-emerald-ssf opacity-15" aria-hidden="true" />
      <div className="section relative">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Programmes</p>
            <h2 id="events-title" className="h2 mt-4">Upcoming & recent programmes</h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-5">Every poster is posted on {social.instagram.handle} first. Tap a poster to see it in full.</p>
        </div>

        <div role="group" aria-label="Filter programmes" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${filter === f.id ? 'bg-navy text-white shadow-soft' : 'border border-slate-200/80 bg-white text-ink-muted hover:text-navy'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div key={filter} variants={staggerContainer} {...inView} className="mt-8 grid gap-6" aria-live="polite">
          {shown.map((e) => <EventCard key={e.id} e={e} past={e.past} />)}
        </motion.div>
      </div>
    </section>
  );
}
