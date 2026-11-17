import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { committee, memberGroups, committeeTerm, committeePost, social } from '../data/unitData.js';
import { staggerContainer, scaleInCard, fadeUpItem, inView, hoverLift } from '../lib/motion.js';

function initials(name) {
  // Skip the shared first name so initials tell people apart (e.g. Sahal M -> SM).
  const words = name.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w) && !/^(muhammed|mohammed|muhammad)$/i.test(w));
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export default function Leadership() {
  const named = committee.filter((m) => m.name);
  const allPhotos = named.length > 0 && named.every((m) => m.photo);

  return (
    <section id="leadership" aria-labelledby="leadership-title" className="border-t border-slate-200/70 bg-alabaster">
      <div className="section">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Leadership {committeeTerm}</p>
            <h2 id="leadership-title" className="h2 mt-4">Unit office bearers</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ink-muted">The committee leading SSF Nettur Unit for {committeeTerm}.</p>
            {committeePost && (
              <a href={committeePost} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-ssf hover:underline">
                <Instagram className="size-4" aria-hidden="true" />See the announcement on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <motion.ul variants={staggerContainer} {...inView} className="mt-14 grid gap-5 sm:grid-cols-3">
          {named.map((m) => (
            <motion.li key={m.role} variants={scaleInCard} whileHover={hoverLift} className="card-motion overflow-hidden">
              {allPhotos ? (
                <div className="aspect-[4/5] bg-[#43AFA6]">
                  <img src={m.photo} alt={m.name} loading="lazy" width="480" height="600" className="size-full object-cover object-top" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(15,76,129,.12),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,.14),transparent_55%)] py-10">
                  <span className="grid size-24 place-items-center rounded-full bg-white text-2xl font-extrabold tracking-[-0.02em] text-navy shadow-soft ring-1 ring-slate-200/80" aria-hidden="true">{initials(m.name)}</span>
                </div>
              )}
              <div className="p-6">
                <p className="pill bg-emerald-ssf/10 px-3 py-1 text-green-ssf">{m.role}</p>
                <p className="mt-3 text-xl font-extrabold tracking-[-0.02em] text-navy">{m.name}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {memberGroups.length > 0 && (
          <motion.div variants={staggerContainer} {...inView} className="mt-5 grid gap-5 lg:grid-cols-[2fr_1fr]">
            {memberGroups.map((g) => (
              <motion.div key={g.title} variants={fadeUpItem} className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft">
                <p className="text-sm font-bold text-navy">{g.title}</p>
                <ul className={`mt-4 grid gap-x-6 gap-y-3 ${g.names.length > 3 ? 'sm:grid-cols-2' : ''}`}>
                  {g.names.map((n) => (
                    <li key={n} className="flex items-center gap-3 text-ink">
                      <span className="size-1.5 shrink-0 rounded-full bg-emerald-ssf" aria-hidden="true" />{n}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
