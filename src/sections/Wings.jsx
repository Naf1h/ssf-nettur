import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';
import { wings, sahityotsavLinks } from '../data/unitData.js';

const ease = [0.22, 1, 0.36, 1];

function Facts({ w, dark = false }) {
  return (
    <>
      <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-black/[0.06] pt-5 text-sm">
        <div><dt className="idx">Rhythm</dt><dd className="mt-1 font-semibold text-ink">{w.rhythm}</dd></div>
        <div><dt className="idx">Focus</dt><dd className="mt-1 font-semibold text-ink">{w.focus}</dd></div>
      </dl>
      {w.id === 'sahityotsav' && (
        <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {sahityotsavLinks.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener" className={`inline-flex items-center gap-1 font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-ink ${dark ? '' : 'text-ink'}`}>
              {l.stage}<ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </p>
      )}
    </>
  );
}

// Desktop: a horizontal deck of panels; the hovered or focused wing widens to show its details.
function Deck() {
  const [open, setOpen] = useState(0);
  return (
    <div className="hidden h-[540px] border-y border-black/[0.06] lg:flex">
      {wings.map((w, i) => {
        const on = open === i;
        return (
          <motion.div
            key={w.id}
            onMouseEnter={() => setOpen(i)}
            onFocusCapture={() => setOpen(i)}
            animate={{ flexGrow: on ? 5 : 1 }}
            transition={{ duration: 0.55, ease }}
            className={`relative min-w-0 basis-0 overflow-hidden ${i ? 'border-l border-black/[0.06]' : ''}`}
          >
            <button type="button" aria-expanded={on} onClick={() => setOpen(i)} className="absolute inset-0 z-0" aria-label={`${w.title}: show details`} />
            <div className="pointer-events-none relative flex h-full flex-col p-6">
              <div className="flex items-center gap-2">
                <span className="idx">0{i + 1}</span>
                <span className={`size-1.5 rounded-full ${i % 2 ? 'bg-flag-blue' : 'bg-flag-green'} ${on ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} aria-hidden="true" />
              </div>
              <AnimatePresence mode="wait" initial={false}>
                {on ? (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.18, ease } }}
                    exit={{ opacity: 0, transition: { duration: 0.12 } }}
                    className="pointer-events-auto mt-auto w-[min(440px,100%)]"
                  >
                    <h3 className="text-4xl font-bold leading-[1] tracking-[-0.04em]">{w.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted">{w.text}</p>
                    <Facts w={w} />
                  </motion.div>
                ) : (
                  <motion.h3
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="mt-auto whitespace-nowrap text-lg font-semibold tracking-[-0.02em] text-ink/70 [writing-mode:vertical-rl] rotate-180"
                  >
                    {w.title}
                  </motion.h3>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Mobile and tablet: an accordion.
function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <ol className="border-t border-black/[0.06] lg:hidden">
      {wings.map((w, i) => {
        const on = open === i;
        return (
          <li key={w.id} className="border-b border-black/[0.06]">
            <h3>
              <button type="button" aria-expanded={on} aria-controls={`wing-${w.id}`} onClick={() => setOpen(on ? -1 : i)} className="flex w-full items-center gap-4 py-6 text-left">
                <span className="idx w-6">0{i + 1}</span>
                <span className={`flex-1 text-2xl font-bold tracking-[-0.03em] transition-colors ${on ? 'text-ink' : 'text-ink/55'}`}>{w.title}</span>
                <Plus className={`size-5 shrink-0 text-ink-muted transition-transform duration-300 ${on ? 'rotate-45' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={`wing-${w.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-10">
                    <p className="text-[17px] leading-relaxed text-ink-muted">{w.text}</p>
                    <Facts w={w} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}

export default function Wings() {
  return (
    <section id="wings" aria-labelledby="wings-title" className="frame mt-40 sm:mt-56">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 id="wings-title" className="h-section md:col-span-7">Seven wings, one unit</h2>
        <p className="max-w-sm text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9">How the unit's work is shared out. Open a wing to see what it does.</p>
      </div>
      <div className="mt-14 lg:mt-20">
        <Deck />
        <Accordion />
      </div>
    </section>
  );
}
