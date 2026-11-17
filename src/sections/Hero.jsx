import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { lineage, unit } from '../data/unitData.js';
import { staggerContainer, fadeUpItem, ease } from '../lib/motion.js';

function LineagePill() {
  return (
    <nav aria-label="SSF structure" className="max-w-full">
      <ol className="inline-flex flex-wrap items-center gap-1 whitespace-nowrap rounded-3xl border sm:rounded-full sm:flex-nowrap border-slate-200/80 bg-white/80 p-1.5 text-xs font-semibold shadow-soft backdrop-blur">
        {lineage.map((l, i) => (
          <li key={l.name} className="flex items-center gap-1">
            {l.current ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1.5 text-white">
                <span className="dot-live size-2 rounded-full bg-emerald-ssf" aria-hidden="true" />{l.name}
              </span>
            ) : l.url ? (
              <a href={l.url} target="_blank" rel="noopener" className="rounded-full px-3 py-1.5 text-ink-muted transition-colors hover:bg-alabaster hover:text-navy">{l.name}</a>
            ) : (
              <span className="rounded-full px-3 py-1.5 text-ink-muted">{l.name}</span>
            )}
            {i < lineage.length - 1 && <ChevronRight className="size-3.5 text-slate-300" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const float = (delay) => (reduce ? {} : { animate: { y: [0, -6, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay } });
  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="glow -left-40 top-10 size-[520px] bg-blue-ssf opacity-15" aria-hidden="true" />
      <div className="glow -right-24 top-40 size-[460px] bg-emerald-ssf opacity-15" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,45,74,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,45,74,.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(180deg,#000,transparent_80%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-28">
        <div className="grid items-center gap-x-14 gap-y-14 lg:grid-cols-2">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div variants={fadeUpItem} className="mb-12"><LineagePill /></motion.div>
            <motion.p variants={fadeUpItem} className="pill border border-slate-200/80 bg-white text-ink-muted shadow-soft">
              <span className="size-1.5 rounded-full bg-green-ssf" aria-hidden="true" />{unit.federation} • Dharmadam Sector
            </motion.p>
            <motion.h1 variants={fadeUpItem} id="hero-title" className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-navy sm:text-6xl xl:text-7xl">
              Shaping Minds.<br /><span className="text-blue-ssf">Strengthening</span> <span className="text-emerald-ssf">Nettur.</span>
            </motion.h1>
            <motion.p variants={fadeUpItem} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Welcome to the official digital space of SSF Nettur Unit — bringing together knowledge, moral grounding, creative expression, and community service across Nettur.
            </motion.p>
            <motion.div variants={fadeUpItem} className="mt-9 flex flex-wrap gap-3">
              <Link to="/#events" className="btn-primary">Explore Programmes<ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link to="/#about" className="btn-secondary">Discover Our Unit<ArrowDown className="size-4" aria-hidden="true" /></Link>
            </motion.div>
            <motion.div variants={fadeUpItem} className="mt-10 flex items-center gap-3 text-sm font-medium text-ink-muted">
              <span className="flex" aria-hidden="true">
                <span className="size-7 rounded-full border-2 border-white bg-blue-ssf" />
                <span className="-ml-2 size-7 rounded-full border-2 border-white bg-emerald-ssf" />
                <span className="-ml-2 size-7 rounded-full border-2 border-white bg-navy" />
              </span>
              Knowledge · Service · Unity — {unit.place}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[520px] lg:mr-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_30px_80px_rgb(15_76_129/0.14)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,76,129,.16),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(16,185,129,.18),transparent_55%)]" aria-hidden="true" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,45,74,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,45,74,.04)_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true" />
              <div className="relative grid size-full place-items-center">
                <div className="grid size-[58%] place-items-center rounded-full bg-white/70 shadow-[0_0_80px_rgb(16_185_129/0.25)] ring-1 ring-white backdrop-blur">
                  <img src="/assets/ssf-emblem.png" alt="SSF emblem" width="240" height="240" className="w-[62%]" />
                </div>
              </div>
            </div>
            <motion.div {...float(0)} className="absolute -right-2 -top-5 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl sm:-right-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-ssf">{unit.theme.year} Theme</p>
              <p className="mt-0.5 text-sm font-bold text-navy">{unit.theme.name} <span className="font-medium text-ink-muted">({unit.theme.meaning})</span></p>
            </motion.div>
            <motion.div {...float(1.6)} className="absolute -bottom-5 -left-2 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl sm:-left-6">
              <p className="flex items-center gap-2 text-sm font-bold text-navy">
                <span className="dot-live size-2 rounded-full bg-emerald-ssf" aria-hidden="true" />Nettur Unit • Dharmadam Sector
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
