import { Instagram, ArrowUpRight, UserRound } from 'lucide-react';
import { committee, members, committeeTerm, committeePost, social } from '../data/unitData.js';

export default function Leadership() {
  const named = committee.filter((m) => m.name);
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="border-t border-slate-200/70 bg-alabaster">
      <div className="section">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Leadership {committeeTerm}</p>
            <h2 id="leadership-title" className="h2 mt-4">Unit office bearers</h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-5">The executive committee leading SSF Nettur Unit for {committeeTerm}.</p>
        </div>

        {named.length > 0 ? (
          <>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {named.map((m) => (
                <li key={m.role} className="card overflow-hidden">
                  <div className="aspect-[4/5] bg-[radial-gradient(circle_at_30%_20%,rgba(15,76,129,.12),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,.14),transparent_55%)]">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} loading="lazy" className="size-full object-cover" />
                    ) : (
                      <span className="grid size-full place-items-center text-slate-300"><UserRound className="size-20" strokeWidth={1.2} aria-hidden="true" /></span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="pill bg-emerald-ssf/10 px-3 py-1 text-green-ssf">{m.role}</p>
                    <p className="mt-3 text-xl font-extrabold tracking-[-0.02em] text-navy">{m.name}</p>
                  </div>
                </li>
              ))}
            </ul>
            {members.length > 0 && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((m) => (
                  <li key={m.role + m.name} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
                    <p className="text-xs font-semibold text-ink-muted">{m.role}</p>
                    <p className="mt-1 font-bold text-navy">{m.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div className="card mt-14 flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-xl font-extrabold tracking-[-0.02em] text-navy">Meet the {committeeTerm} office bearers</p>
              <p className="mt-2 max-w-xl text-ink-muted">The President, General Secretary, Executive Secretary and the full committee were announced on {social.instagram.handle}.</p>
            </div>
            <a href={committeePost || social.instagram.url} target="_blank" rel="noopener" className="btn-primary shrink-0">
              <Instagram className="size-4" aria-hidden="true" />View the announcement<ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
