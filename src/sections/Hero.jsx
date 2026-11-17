import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { unit } from '../data/unitData.js';

const lines = [['Shaping', 'minds.'], ['Strengthening', 'Nettur.']];
const ease = [0.22, 1, 0.36, 1];

// The page's one orchestrated moment: the headline rises word by word.
const word = {
  hidden: { y: '108%' },
  show: (i) => ({ y: '0%', transition: { duration: 0.9, ease, delay: 0.15 + i * 0.09 } }),
};

export default function Hero() {
  let n = 0;
  return (
    <section id="index" aria-labelledby="hero-title" className="frame pt-32 sm:pt-44">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-black/[0.06] pb-5 font-mono text-[11px] uppercase tracking-[0.08em]">
        <span className="flex items-center gap-2.5 text-ink">
          <span className="dot-live size-1.5 rounded-full bg-flag-green shadow-[0_0_10px_#10B981]" aria-hidden="true" />
          Active unit — Nettur, Thalassery
        </span>
        <span className="text-ink-muted">{unit.theme.year} campaign: {unit.theme.name}</span>
      </div>

      <h1 id="hero-title" aria-label="Shaping minds. Strengthening Nettur." className="mt-14 text-[clamp(3.1rem,11.6vw,11.25rem)] font-extrabold leading-[0.86] tracking-[-0.055em] sm:mt-20">
        <motion.span initial="hidden" animate="show" className="block" aria-hidden="true">
          {lines.map((line) => (
            <span key={line.join(' ')} className="block">
              {line.map((w) => {
                const i = n++;
                return (
                  <span key={w} className="mr-[0.16em] inline-block overflow-hidden pb-[0.07em] align-top last:mr-0">
                    <motion.span custom={i} variants={word} className="inline-block">{w}</motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </motion.span>
      </h1>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="tricolor tricolor-light w-14 rounded-full" aria-hidden="true" />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            The Sunni Students' Federation unit for the students of Nettur. Study circles, Sahityotsav, career guidance and service, under Dharmadam Sector and Thalassery Division.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 md:col-span-5 md:col-start-8 md:items-end md:justify-end">
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/#pulse" className="rounded-full bg-obsidian px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black">See what's on</Link>
            <Link to="/#write" className="text-sm font-semibold text-ink underline decoration-black/20 underline-offset-[6px] transition-colors hover:decoration-ink">Write to the unit</Link>
          </div>
          <p className="idx">{unit.coords}</p>
        </div>
      </div>
    </section>
  );
}
