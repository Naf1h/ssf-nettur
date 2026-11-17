import { useRef, useState } from 'react';
import { Instagram, ArrowUpRight, Maximize2, MapPin, X } from 'lucide-react';
import { events, social } from '../data/unitData.js';

const tiers = {
  unit: { label: 'Unit Programme • SSF Nettur', text: 'text-glow-emerald', ring: 'border-glow-emerald/40 bg-glow-emerald/10', dot: 'bg-glow-emerald' },
  sector: { label: 'Sector Council • Dharmadam Sector', text: 'text-glow-cyan', ring: 'border-glow-cyan/40 bg-glow-cyan/10', dot: 'bg-glow-cyan' },
};

function dateLine(e) {
  const d = new Date(e.date);
  const wd = new Intl.DateTimeFormat('en-IN', { weekday: 'short' }).format(d);
  const dm = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
  return `${wd}, ${dm} • ${e.time}`.toUpperCase();
}

function Lightbox({ e, onClose }) {
  const ref = useRef(null);
  return (
    <dialog
      ref={(el) => { ref.current = el; if (el && !el.open) el.showModal(); }}
      onClose={onClose}
      onClick={(ev) => { if (ev.target === ev.currentTarget) ev.currentTarget.close(); }}
      aria-label={`Poster: ${e.title}`}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <img src={e.image} alt={`Poster: ${e.title}`} className="block h-auto max-h-[90vh] w-auto max-w-[92vw] rounded-2xl" />
        <button type="button" autoFocus onClick={() => ref.current?.close()} aria-label="Close poster" className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white text-night">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

function PosterFrame({ e, onOpen, compact = false }) {
  return (
    <button type="button" onClick={onOpen} aria-label={`Open full poster: ${e.title}`} className="group relative block aspect-[4/5] w-full overflow-hidden bg-night-3">
      <img src={e.image} alt="" aria-hidden="true" className="absolute inset-0 size-full scale-110 object-cover opacity-50 blur-2xl saturate-150" />
      <img src={e.image} alt="" loading="lazy" className={`relative mx-auto size-full object-contain ${compact ? 'p-3' : 'p-5'} drop-shadow-[0_24px_40px_rgba(0,0,0,.55)] transition-transform duration-300 group-hover:scale-[1.015]`} />
      <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-night/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
        <Maximize2 className="size-3.5" aria-hidden="true" />Full poster
      </span>
    </button>
  );
}

function EventCard({ e }) {
  const [open, setOpen] = useState(false);
  const t = tiers[e.tier] || tiers.unit;
  return (
    <article className="glass glow-card flex flex-col">
      <PosterFrame e={e} onOpen={() => setOpen(true)} />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className={`tag inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 ${t.ring} ${t.text}`}>
          <span className={`dot-live size-1.5 rounded-full ${t.dot}`} aria-hidden="true" />{t.label}
        </span>
        <p className={`tag mt-6 ${t.text}`}>{dateLine(e)}</p>
        {e.titleMl ? (
          <>
            <h3 lang="ml" className="mt-1 text-[1.65rem] font-bold text-white sm:text-[2rem]">{e.titleMl}</h3>
            <p className="mt-1 text-[15px] text-white/60">{e.title}</p>
          </>
        ) : (
          <>
            <h3 className="mt-1 font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-[2.2rem]">{e.title}</h3>
            <p className="mt-1 text-[15px] text-white/60">{e.type}</p>
          </>
        )}
        <p className="mt-5 flex items-center gap-2 text-sm text-white/75"><MapPin className="size-4 shrink-0 text-white/45" aria-hidden="true" />{e.venue}</p>
        <p className="mt-2 text-sm font-semibold text-white">{e.organizer}</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <a href={e.url || social.instagram.url} target="_blank" rel="noopener" className="btn-glass min-h-[44px] px-5">
            <Instagram className="size-4" aria-hidden="true" />View on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      {open && <Lightbox e={e} onClose={() => setOpen(false)} />}
    </article>
  );
}

function ArchiveCard({ e }) {
  const [open, setOpen] = useState(false);
  const t = tiers[e.tier] || tiers.unit;
  return (
    <article className="glass glow-card">
      <PosterFrame e={e} onOpen={() => setOpen(true)} compact />
      <div className="p-5">
        <p className={`tag ${t.text}`}>Completed • {new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(e.date)).toUpperCase()}</p>
        {e.titleMl ? <h3 lang="ml" className="mt-1 text-xl font-bold text-white">{e.titleMl}</h3> : <h3 className="mt-1 font-display text-xl font-bold text-white">{e.title}</h3>}
      </div>
      {open && <Lightbox e={e} onClose={() => setOpen(false)} />}
    </article>
  );
}

export default function Programmes() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = events.filter((e) => new Date(e.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
  const past = events.filter((e) => new Date(e.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section id="events" aria-labelledby="events-title" className="relative">
      <div className="pointer-events-none absolute right-0 top-40 size-[480px] rounded-full bg-glow-cyan/10 blur-[130px]" aria-hidden="true" />
      <div className="frame relative pt-16 sm:pt-24">
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="tag text-glow-emerald">Living archive</p>
            <h2 id="events-title" className="h-sec mt-3">Programmes</h2>
          </div>
          <p className="text-white/55 md:col-span-4">Every poster is posted on {social.instagram.handle} first. Tap a poster to see it in full.</p>
        </div>

        {upcoming.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {upcoming.map((e) => <EventCard key={e.id} e={e} />)}
          </div>
        )}

        {past.length > 0 && (
          <div className="mt-20">
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-white">Recent highlights</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((e) => <ArchiveCard key={e.id} e={e} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
