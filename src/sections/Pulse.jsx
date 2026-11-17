import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { events, social } from '../data/unitData.js';

const tier = {
  unit: { label: 'Unit event • SSF Nettur', text: 'text-emerald-700', dot: 'bg-flag-green', bar: 'bg-flag-green' },
  sector: { label: 'Sector council • Dharmadam', text: 'text-sky-700', dot: 'bg-flag-blue', bar: 'bg-flag-blue' },
};

function when(e) {
  const d = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(e.date));
  return `${e.day ? `${e.day} ` : ''}${d}, ${e.time.toLowerCase()}`;
}

function Zoom({ e, dialogRef }) {
  return (
    <dialog
      ref={dialogRef}
      aria-label={`Poster: ${e.title}`}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-obsidian/85 backdrop:backdrop-blur-sm"
      onClick={(ev) => { if (ev.target === ev.currentTarget) ev.currentTarget.close(); }}
    >
      <div className="relative">
        <img src={e.image} alt={`Poster: ${e.title}`} className="block h-auto max-h-[90vh] w-auto max-w-[92vw] rounded-xl" />
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close poster" className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white text-ink">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

// Split-screen poster deck: pick an event on the left, its poster crossfades in on the right.
export default function Pulse() {
  const list = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return [...events]
      .map((e) => ({ ...e, past: new Date(e.date) < today }))
      .sort((a, b) => (a.past - b.past) || new Date(a.date) - new Date(b.date));
  }, []);
  const [activeId, setActiveId] = useState(list[0]?.id);
  const active = list.find((e) => e.id === activeId) || list[0];
  const dialogRef = useRef(null);
  const stageRef = useRef(null);
  if (!active) return null;
  // On one-column layouts the poster sits above the list, so bring it into view after a tap.
  const pick = (id) => {
    setActiveId(id);
    if (window.matchMedia('(max-width: 1023px)').matches) stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const t = tier[active.tier] || tier.unit;

  return (
    <section id="pulse" aria-labelledby="pulse-title" className="frame mt-40 sm:mt-56">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 id="pulse-title" className="h-section md:col-span-7">What's on in Nettur</h2>
        <p className="max-w-sm text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9">Posters from {social.instagram.handle}. Pick an event to see its poster.</p>
      </div>

      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <ol className="order-2 border-t border-black/[0.06] lg:order-1 lg:col-span-5">
          {list.map((e, i) => {
            const on = e.id === active.id;
            const tt = tier[e.tier] || tier.unit;
            return (
              <li key={e.id} className="relative border-b border-black/[0.06]">
                {on && <motion.span layoutId="pulse-bar" className={`absolute -left-px bottom-0 top-0 w-[3px] ${tt.bar}`} aria-hidden="true" transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => pick(e.id)}
                  onMouseEnter={() => setActiveId(e.id)}
                  onFocus={() => setActiveId(e.id)}
                  className="grid w-full grid-cols-[44px_1fr] gap-x-2 py-8 pl-5 pr-2 text-left"
                >
                  <span className="idx pt-1">0{i + 1}</span>
                  <span className="min-w-0">
                    <span className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] ${tt.text}`}>
                      <span className="inline-flex items-center gap-2"><span className={`size-1.5 rounded-full ${tt.dot}`} aria-hidden="true" />{tt.label}</span>
                      {e.past && <span className="text-ink-muted">Completed</span>}
                    </span>
                    <span className={`mt-3 block text-[1.55rem] font-bold leading-[1.12] tracking-[-0.03em] transition-colors duration-200 sm:text-[1.75rem] ${on ? 'text-ink' : 'text-ink/40'}`}>{e.title}</span>
                    <span className="mt-3 block text-[15px] text-ink-muted">{when(e)}</span>
                    <span className="block text-[15px] text-ink-muted">{e.venue}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div ref={stageRef} className="scroll-mt-28 lg:sticky lg:top-28 lg:ml-auto lg:max-w-[calc((100vh-10rem)*0.8)]">
            <div className="relative">
              <AnimatePresence initial={false}>
                <motion.img
                  key={`aura-${active.id}`}
                  src={active.image}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="pointer-events-none absolute -inset-6 size-[calc(100%+3rem)] object-cover blur-3xl saturate-150"
                />
              </AnimatePresence>
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                aria-label={`Open full poster: ${active.title}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white/60 bg-white/40 shadow-[0_40px_80px_-40px_rgba(9,13,22,.45)] backdrop-blur-xl"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={active.id}
                    src={active.image}
                    alt=""
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 size-full object-contain p-5 drop-shadow-[0_24px_30px_rgba(9,13,22,.22)] sm:p-8"
                  />
                </AnimatePresence>
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur transition-transform duration-200 group-hover:-translate-y-0.5">
                  <Maximize2 className="size-3.5" aria-hidden="true" />Full poster
                </span>
              </button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="text-ink-muted">{active.organizer}</span>
              <a href={active.url || social.instagram.url} target="_blank" rel="noopener" className={`inline-flex items-center gap-1 font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-ink ${t.text}`}>
                View post on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Zoom e={active} dialogRef={dialogRef} />
    </section>
  );
}
