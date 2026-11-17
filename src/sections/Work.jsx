import { Feather, GraduationCap, BookOpen, Newspaper, Sparkles, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import { work } from '../data/unitData.js';
import { staggerContainer, scaleInCard, inView, hoverLift } from '../lib/motion.js';

const icons = { Feather, GraduationCap, BookOpen, Newspaper, Sparkles, HandHeart };

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow">What we do</p>
          <h2 id="work-title" className="h2 mt-4">Six wings, one purpose.</h2>
        </div>
        <p className="text-lg leading-relaxed text-ink-muted md:col-span-5">
          Discover how the unit encourages learning, creative expression and meaningful community engagement in Nettur.
        </p>
      </div>

      <motion.ul variants={staggerContainer} {...inView} className="mt-14 grid gap-5 md:grid-cols-12">
        {work.map((w, i) => {
          const Icon = icons[w.icon] || Sparkles;
          const wide = i < 2;
          return (
            <motion.li key={w.id} variants={scaleInCard} whileHover={hoverLift} className={`card-motion relative flex flex-col overflow-hidden p-8 ${wide ? 'md:col-span-6 md:min-h-[300px]' : 'md:col-span-6 lg:col-span-3'}`}>
              {wide && <div className={`glow -right-16 -top-16 size-56 opacity-10 ${i === 0 ? 'bg-emerald-ssf' : 'bg-blue-ssf'}`} aria-hidden="true" />}
              <div className="relative flex items-start justify-between">
                <span className={`grid size-12 place-items-center rounded-2xl ${i % 2 ? 'bg-blue-ssf/10 text-blue-ssf' : 'bg-emerald-ssf/10 text-green-ssf'}`}>
                  <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="pill border border-slate-200/80 px-3 py-1 font-bold text-ink-muted">0{i + 1}</span>
              </div>
              <h3 className={`relative mt-auto pt-10 font-extrabold tracking-[-0.03em] text-navy ${wide ? 'text-3xl' : 'text-xl'}`}>{w.title}</h3>
              <p className={`relative mt-3 leading-relaxed text-ink-muted ${wide ? 'max-w-md text-base' : 'text-sm'}`}>{w.text}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
