import { motion } from 'framer-motion';
import { overview } from '../data/unitData.js';
import { staggerContainer, scaleInCard, inView, hoverLift } from '../lib/motion.js';

export default function Overview() {
  return (
    <section id="about" aria-label="Unit overview" className="border-y border-slate-200/70 bg-alabaster">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <motion.dl variants={staggerContainer} {...inView} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((o) => (
            <motion.div key={o.label} variants={scaleInCard} whileHover={hoverLift} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <dt className="text-sm font-bold text-navy">{o.label}</dt>
              <dd className="mt-3">
                <span className="block text-4xl font-extrabold tracking-[-0.04em] text-navy tabular-nums">{o.value}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink-muted">{o.note}</span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
