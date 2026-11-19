import { useCallback, useEffect, useRef, useState } from 'react';
import { Instagram, ArrowUpRight, Maximize2, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { events, social } from '../data/unitData.js';

export const tiers = {
  unit: { label: 'Unit Programme • SSF Nettur', text: 'text-glow-emerald', ring: 'border-glow-emerald/40 bg-glow-emerald/10', dot: 'bg-glow-emerald' },
  sector: { label: 'Sector Council • Dharmadam Sector', text: 'text-glow-cyan', ring: 'border-glow-cyan/40 bg-glow-cyan/10', dot: 'bg-glow-cyan' },
};

function today() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}
export const upcomingEvents = () => events.filter((e) => new Date(e.date) >= today()).sort((a, b) => new Date(a.date) - new Date(b.date));
export const pastEvents = () => events.filter((e) => new Date(e.date) < today()).sort((a, b) => new Date(b.date) - new Date(a.date));

function dateLine(e) {
  const d = new Date(e.date);
  const wd = new Intl.DateTimeFormat('en-IN', { weekday: 'short' }).format(d);
  const dm = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
  return `${wd}, ${dm} • ${e.time}`.toUpperCase();
}

// Full-screen viewer. Pass several items to get previous/next, arrow keys and swipe.
export function Lightbox({ items, index, onClose }) {
  const ref = useRef(null);
  const [i, setI] = useState(index);
  const touch = useRef(null);
  const many = items.length > 1;
  const go = useCallback((d) => setI((v) => (v + d + items.length) % items.length), [items.length]);
  const item = items[i];

  useEffect(() => {
    const el = ref.current;
    if (el && !el.open) el.showModal();
    const onKey = (e) => {
      if (!many) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, many]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(ev) => { if (ev.target === ev.currentTarget) ev.currentTarget.close(); }}
      aria-label={item.caption}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/90"
    >
      <div
        className="flex h-full flex-col items-center justify-center gap-4 px-3 py-6"
        onClick={(ev) => { if (ev.target === ev.currentTarget) ref.current?.close(); }}
        onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touch.current == null || !many) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        <img key={item.src} src={item.src} alt={item.caption} decoding="async" className="block max-h-[78dvh] w-auto max-w-full rounded-2xl object-contain" />
        <div className="flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 text-white">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold leading-snug">{item.caption}</p>
            {item.date && <p className="tag mt-1 text-white/50">{item.date}{item.period === '2024-25' ? ' • 2024–25 archive' : ''}</p>}
          </div>
          <a href={item.url || social.instagram.url} target="_blank" rel="noopener" className="btn-glass min-h-[40px] px-4">
            <Instagram className="size-4" aria-hidden="true" />Open on {social.instagram.handle}
          </a>
        </div>
      </div>
      <button type="button" autoFocus onClick={() => ref.current?.close()} aria-label="Close" className="fixed right-3 top-3 grid size-11 place-items-center rounded-full bg-white text-night">
        <X className="size-5" aria-hidden="true" />
      </button>
      {many && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="fixed left-3 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:grid"><ChevronLeft className="size-6" aria-hidden="true" /></button>
          <button type="button" onClick={() => go(1)} aria-label="Next photo" className="fixed right-3 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:grid"><ChevronRight className="size-6" aria-hidden="true" /></button>
          <p className="tag fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50">{i + 1} / {items.length}</p>
        </>
      )}
    </dialog>
  );
}

function PosterFrame({ e, onOpen }) {
  return (
    <button type="button" onClick={onOpen} aria-label={`Open full poster: ${e.title}`} className="group relative block aspect-[4/5] w-full overflow-hidden bg-night-3">
      {/* Blurred backdrop only on larger screens: filters are costly on phones. */}
      <img src={e.image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 hidden size-full scale-110 object-cover opacity-50 blur-2xl saturate-150 md:block" />
      <img src={e.image} alt="" loading="lazy" decoding="async" className="relative mx-auto size-full object-contain p-4 sm:p-5" />
      <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-night/85 px-3 py-1.5 text-xs font-semibold text-white">
        <Maximize2 className="size-3.5" aria-hidden="true" />Full poster
      </span>
    </button>
  );
}

export function EventCard({ e }) {
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
        <div className="mt-auto pt-7">
          <a href={e.url || social.instagram.url} target="_blank" rel="noopener" className="btn-glass min-h-[44px] px-5">
            <Instagram className="size-4" aria-hidden="true" />View on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      {open && <Lightbox items={[{ src: e.image, caption: e.title, date: dateLine(e), url: e.url }]} index={0} onClose={() => setOpen(false)} />}
    </article>
  );
}

// Card for a past programme: photo, coloured year tag, Malayalam title, English line.
export function ArchiveCard({ a, label = '2024–25 Archive' }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="glass glow-card flex flex-col">
      <button type="button" onClick={() => setOpen(true)} aria-label={`Open photo: ${a.title}`} className="relative block aspect-[4/3] overflow-hidden bg-night-3">
        <img src={a.image} alt="" loading="lazy" decoding="async" className="size-full scale-[1.06] object-cover" />
      </button>
      <div className="p-5 sm:p-6">
        <p className="tag text-glow-gold">{label}</p>
        {a.titleMl ? (
          <>
            <h3 lang="ml" className="mt-1 text-xl font-bold text-white sm:text-2xl">{a.titleMl}</h3>
            <p className="mt-1 text-sm text-white/60">{a.title}</p>
          </>
        ) : (
          <>
            <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">{a.title}</h3>
            {a.subtitle && <p className="mt-1 text-sm text-white/60">{a.subtitle}</p>}
          </>
        )}
      </div>
      {open && <Lightbox items={[{ src: a.image, caption: a.title, date: label }]} index={0} onClose={() => setOpen(false)} />}
    </article>
  );
}
