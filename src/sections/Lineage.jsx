import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { lineage } from '../data/unitData.js';

// Six levels from SSF India to Nettur. Hover, focus or tap a level to read its role.
export default function Lineage() {
  const last = lineage.length - 1;
  const [sel, setSel] = useState(last);
  const node = lineage[sel];

  return (
    <section id="lineage" aria-labelledby="lineage-title" className="frame mt-28 sm:mt-36">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-black/[0.06] pt-6">
        <h2 id="lineage-title" className="text-sm font-semibold text-ink">Where Nettur sits in SSF</h2>
        <p className="idx">Tap a level to see its role</p>
      </div>

      <ol className="mt-8 grid grid-cols-1 sm:mt-12 sm:grid-cols-6">
        {lineage.map((l, i) => {
          const on = sel === i;
          const term = l.current;
          return (
            <li key={l.name} className="relative">
              {i < last && <span className="absolute left-[5px] top-1/2 h-full w-px bg-black/10 sm:hidden" aria-hidden="true" />}
              {i < last && <span className="absolute left-[18px] right-0 top-[33px] hidden h-px bg-black/10 sm:block" aria-hidden="true" />}
              {i < sel && <motion.span layout className="absolute left-[18px] right-0 top-[33px] hidden h-px origin-left bg-ink sm:block" aria-hidden="true" />}
              <button
                type="button"
                onMouseEnter={() => setSel(i)}
                onFocus={() => setSel(i)}
                onClick={() => setSel(i)}
                aria-pressed={on}
                className="group relative grid w-full grid-cols-[12px_30px_1fr] items-center gap-3 rounded-lg py-3 text-left sm:flex sm:flex-col sm:items-start sm:gap-3 sm:py-0 sm:pr-4"
              >
                <span className={`relative size-[11px] rounded-full border transition-colors duration-200 sm:order-2 ${term ? 'dot-live border-flag-green bg-flag-green shadow-[0_0_14px_#10B981]' : on ? 'border-ink bg-ink' : 'border-black/25 bg-alabaster group-hover:border-ink'}`} aria-hidden="true" />
                <span className="idx sm:order-1">0{i + 1}</span>
                <span className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 sm:order-3 ${on || term ? 'text-ink' : 'text-ink-muted group-hover:text-ink'}`}>{l.short}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 grid min-h-[96px] gap-3 border-t border-black/[0.06] pt-6 sm:mt-12 sm:grid-cols-12" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={node.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="contents"
          >
            <p className="flex items-baseline gap-3 sm:col-span-4">
              <span className="idx">0{sel + 1}/06</span>
              <span className="text-xl font-bold tracking-[-0.02em]">{node.name}</span>
            </p>
            <div className="sm:col-span-7 sm:col-start-6">
              <p className="text-lg leading-relaxed text-ink-muted">{node.role}</p>
              {node.url && (
                <a href={node.url} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-ink underline decoration-black/20 underline-offset-4 hover:decoration-ink">
                  Visit {node.name}<ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
