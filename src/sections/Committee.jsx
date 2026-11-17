import { Instagram, ArrowUpRight } from 'lucide-react';
import { committee, memberGroups, committeeTerm, committeePost, social } from '../data/unitData.js';

// Renders only when names exist, so there are never empty boxes.
export default function Committee() {
  const named = committee.filter((m) => m.name);
  if (!named.length) return null;
  return (
    <section id="committee" aria-labelledby="committee-title" className="relative">
      <div className="pointer-events-none absolute right-0 top-24 size-[420px] rounded-full bg-glow-gold/10 blur-[130px]" aria-hidden="true" />
      <div className="frame relative pt-28 sm:pt-36">
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="tag text-glow-gold">Unit committee • {committeeTerm.replace('-', '–')}</p>
            <h2 id="committee-title" className="h-sec mt-3">Office bearers</h2>
          </div>
          {committeePost && (
            <a href={committeePost} target="_blank" rel="noopener" className="link-arrow md:col-span-4 md:justify-self-end">
              <Instagram className="size-4" aria-hidden="true" />Announced on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {named.map((m) => (
            <li key={m.role} className="glass glow-card flex items-center gap-5 p-5 sm:flex-col sm:items-start sm:p-6">
              {m.photo && (
                <img src={m.photo} alt={`${m.name}, ${m.role}`} width="160" height="160" loading="lazy" className="size-20 shrink-0 rounded-[20px] bg-[#43AFA6] object-cover object-top sm:size-28" />
              )}
              <div className="min-w-0">
                <p className="tag text-glow-emerald">{m.role}</p>
                <p className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-2xl">{m.name}</p>
              </div>
            </li>
          ))}
        </ul>

        {memberGroups.length > 0 && (
          <div className="mt-4 grid gap-4 lg:grid-cols-12">
            {memberGroups.map((g, gi) => (
              <div key={g.title} className={`glass p-6 sm:p-7 ${gi === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}`}>
                <h3 className="tag text-white/45">{g.title}</h3>
                <ul className={`mt-4 grid gap-x-6 gap-y-2.5 text-[15px] text-white/85 ${g.names.length > 3 ? 'sm:grid-cols-2' : ''}`}>
                  {g.names.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
