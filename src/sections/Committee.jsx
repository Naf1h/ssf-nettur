import { useState } from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { committee, memberGroups, committeeTerm, committeePost, pastCommittee, social } from '../data/unitData.js';

const dash = (t) => t.replace('-', '–');

function Names({ groups }) {
  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-12">
      {groups.map((g, gi) => (
        <div key={g.title} className={`glass p-6 sm:p-7 ${gi === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}`}>
          <h3 className="tag text-white/45">{g.title}</h3>
          <ul className={`mt-4 grid gap-x-6 gap-y-2.5 text-[15px] text-white/85 ${g.names.length > 3 ? 'sm:grid-cols-2' : ''}`}>
            {g.names.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Current committee plus the archived 2025-26 term, each on its own clearly labelled tab.
export default function Committee() {
  const named = committee.filter((m) => m.name);
  const terms = [
    named.length && { id: 'current', label: `${dash(committeeTerm)} Term`, note: 'Current' },
    pastCommittee && { id: 'past', label: `${dash(pastCommittee.term)} Term`, note: 'Archive' },
  ].filter(Boolean);
  const [tab, setTab] = useState(terms[0]?.id);
  if (!terms.length) return null;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Committee term" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
          {terms.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} aria-controls={`term-${t.id}`} onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${tab === t.id ? 'bg-glow-emerald text-night' : 'text-white/65 hover:text-white'}`}>
              {t.label} <span className={tab === t.id ? 'text-night/60' : 'text-white/35'}>· {t.note}</span>
            </button>
          ))}
        </div>
        {tab === 'current' && committeePost && (
          <a href={committeePost} target="_blank" rel="noopener" className="link-arrow">
            <Instagram className="size-4" aria-hidden="true" />Announced on {social.instagram.handle}<ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        )}
        {tab === 'past' && <p className="text-sm text-white/45">From the 2025 unit brochure</p>}
      </div>

      {tab === 'current' && (
        <div id="term-current" role="tabpanel" className="mt-6">
          <ul className="grid gap-4 sm:grid-cols-3">
            {named.map((m) => (
              <li key={m.role} className="glass glow-card flex items-center gap-5 p-5 sm:flex-col sm:items-start sm:p-6">
                {m.photo && <img src={m.photo} alt={`${m.name}, ${m.role}`} width="160" height="160" loading="lazy" decoding="async" className="size-20 shrink-0 rounded-[20px] bg-[#43AFA6] object-cover object-top sm:size-28" />}
                <div className="min-w-0">
                  <p className="tag text-glow-emerald">{m.role}</p>
                  <p className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-2xl">{m.name}</p>
                </div>
              </li>
            ))}
          </ul>
          <Names groups={memberGroups} />
        </div>
      )}

      {tab === 'past' && (
        <div id="term-past" role="tabpanel" className="mt-6">
          <ul className="grid gap-4 sm:grid-cols-3">
            {pastCommittee.officers.map((m) => (
              <li key={m.role} className="glass p-5 sm:p-6">
                <p className="tag text-glow-gold">{m.role}</p>
                <p className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-2xl">{m.name}</p>
              </li>
            ))}
          </ul>
          <Names groups={pastCommittee.groups} />
        </div>
      )}
    </div>
  );
}
