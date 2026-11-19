import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { unit } from '../data/unitData.js';
import LineageStrip from './LineageStrip.jsx';

const ease = [0.22, 1, 0.36, 1];
const small = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
const dur = small ? 0.3 : 0.7;
const rise = { hidden: { opacity: 0, y: 18 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: dur, ease, delay: small ? 0 : 0.1 + i * 0.08 } }) };

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-[calc(76px+3.5rem)] sm:pt-[calc(76px+5rem)]">
      {/* Atmosphere: glows and architectural grid lines */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="aura aura-emerald -left-56 -top-48 size-[760px]" />
        <div className="aura aura-gold -right-48 top-0 size-[680px]" />
        <div className="aura aura-teal bottom-[-320px] left-1/3 size-[700px]" />
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,#000_20%,transparent_75%)]" />
      </div>

      <div className="frame relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div initial="hidden" animate="show" className="lg:col-span-7">
            <motion.p variants={rise} custom={0} className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/75">
              <span className="size-1.5 rounded-full bg-glow-gold shadow-[0_0_10px_#F5B544]" aria-hidden="true" />
              <span className="tracking-[0.1em]">{unit.theme.year} CAMPAIGN •</span>
              <span lang="ml" className="text-sm font-bold text-white">{unit.theme.ml}</span>
              <span className="text-white/55">({unit.theme.meaning})</span>
            </motion.p>
            <motion.p variants={rise} custom={1} lang="ml" className="mt-8 text-xl font-bold text-glow-emerald sm:text-2xl">{unit.nameMl}</motion.p>
            <motion.h1 variants={rise} custom={2} id="hero-title" className="mt-1 font-display text-[clamp(2.9rem,7.4vw,6.4rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
              Empowering Minds.<br />Strengthening Nettur.
            </motion.h1>
            <motion.p variants={rise} custom={3} className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
              The Sunni Students' Federation unit for the students of Nettur, under Dharmadam Sector and Thalassery Division, Kannur District.
            </motion.p>
            <motion.div variants={rise} custom={4} className="mt-9 flex flex-wrap gap-3">
              <Link to="/programmes" className="btn-emerald">Explore Programmes<ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link to="/wings" className="btn-glass">Our 7 Wings<ArrowDown className="size-4" aria-hidden="true" /></Link>
            </motion.div>
          </motion.div>

          {/* Glass prism: layered panes around the emblem and campaign word */}
          <motion.div
            initial={{ opacity: 0, y: small ? 12 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: small ? 0.3 : 0.9, ease, delay: small ? 0 : 0.25 }}
            className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:mr-0"
          >
            <div className="absolute inset-0 rotate-[7deg] rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-glow-gold/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 -rotate-[4deg] rounded-[32px] border border-white/[0.06] bg-gradient-to-tr from-glow-teal/10 to-transparent" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-8 text-center sm:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />
              <div className="mx-auto grid size-40 place-items-center rounded-full bg-white shadow-[0_0_80px_rgba(16,185,129,.35)] sm:size-48">
                <img src="/assets/ssf-emblem.png" alt="SSF emblem" width="180" height="180" fetchpriority="high" className="size-[62%] object-contain" />
              </div>
              <p lang="ml" className="mt-8 text-[2.6rem] font-extrabold text-white sm:text-5xl">{unit.theme.ml}</p>
              <p className="mt-1 text-sm font-medium tracking-[0.08em] text-white/55">LIVE THE MESSAGE</p>
            </div>
          </motion.div>
        </div>

        <LineageStrip />
      </div>
    </section>
  );
}
