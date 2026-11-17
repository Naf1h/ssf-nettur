import { ArrowUpRight } from 'lucide-react';
import { committee, memberGroups, committeeTerm, committeePost, social } from '../data/unitData.js';

// Office bearers set as type; photos appear beside names once added to the data file.
export default function People() {
  const named = committee.filter((m) => m.name);
  if (!named.length) return null;
  return (
    <section id="people" aria-labelledby="people-title" className="frame mt-40 sm:mt-56">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 id="people-title" className="h-section md:col-span-7">Office bearers, {committeeTerm.replace('-', '–')}</h2>
        {committeePost && (
          <p className="md:col-span-4 md:col-start-9">
            <a href={committeePost} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-ink">
              Announced on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </p>
        )}
      </div>

      <ul className="mt-14 border-t border-black/[0.06] lg:mt-20">
        {named.map((m) => (
          <li key={m.role} className="grid items-center gap-x-6 gap-y-2 border-b border-black/[0.06] py-7 sm:grid-cols-12 sm:py-9">
            <p className="idx sm:col-span-3">{m.role}</p>
            <div className="flex items-center gap-5 sm:col-span-9">
              {m.photo && <img src={m.photo} alt="" width="72" height="72" loading="lazy" className="size-14 shrink-0 rounded-full object-cover object-top ring-1 ring-black/[0.06] sm:size-[72px]" />}
              <p className="text-[2rem] font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl">{m.name}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 sm:grid-cols-12">
        {memberGroups.map((g, gi) => (
          <div key={g.title} className={gi === 0 ? 'sm:col-span-7' : 'sm:col-span-4 sm:col-start-9'}>
            <h3 className="idx">{g.title}</h3>
            <ul className={`mt-4 grid gap-x-8 gap-y-2.5 text-[17px] ${g.names.length > 3 ? 'sm:grid-cols-2' : ''}`}>
              {g.names.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
