import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Building2, GraduationCap, Feather, Newspaper, Sparkles, HandHeart, Instagram } from 'lucide-react';
import { hierarchy, stats, posters, departments, committee, secretariat, social } from '../data/unitData.js';

const icons = { Building2, GraduationCap, Feather, Newspaper, Sparkles, HandHeart };

export function SectionHead({ tag, title, id, children, dark = false }) {
  return (
    <div className={`grid gap-6 border-b pb-8 md:grid-cols-12 md:items-end ${dark ? 'border-white/10' : 'border-line'}`}>
      <div className="md:col-span-8">
        <p className={`tag mb-4 ${dark ? 'text-white/50' : 'text-brand-blue'}`}>{tag}</p>
        <h2 id={id} className={`h-section ${dark ? 'text-white' : ''}`}>{title}</h2>
      </div>
      {children && <div className={`text-sm md:col-span-4 md:justify-self-end md:text-right ${dark ? 'text-white/70' : 'text-ink-muted'}`}>{children}</div>}
    </div>
  );
}

export function PageIntro({ tag, title, children }) {
  return (
    <section className="bg-navy text-white">
      <div className="page grid border-x border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 px-0 py-14 sm:px-2 md:col-span-8 md:border-b-0 md:border-r md:px-0 md:py-20 md:pr-10">
          <p className="tag mb-5 text-white/50">{tag}</p>
          <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        </div>
        <div className="flex flex-col justify-end gap-5 py-10 text-white/70 md:col-span-4 md:py-20 md:pl-10">{children}</div>
      </div>
      <div className="stripes h-1.5" aria-hidden="true" />
    </section>
  );
}

export function HierarchyStrip({ dark = false }) {
  return (
    <ol className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ${dark ? 'border-white/10' : 'border-line'} border-l border-t`}>
      {hierarchy.map((h, i) => (
        <li key={h.tier} className={`relative border-b border-r p-5 ${dark ? 'border-white/10' : 'border-line'} ${h.current ? (dark ? 'bg-white text-navy' : 'bg-navy text-white') : ''}`}>
          <span className={`tag block ${h.current ? (dark ? 'text-brand-blue' : 'text-white/60') : dark ? 'text-white/45' : 'text-ink-muted'}`}>0{i + 1} / {h.tier}</span>
          {h.url ? (
            <a href={h.url} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1 font-head text-lg font-bold tracking-[-0.01em] hover:underline">
              {h.name}<ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="mt-3 block font-head text-lg font-bold tracking-[-0.01em]">{h.name}</span>
          )}
          {h.current && <span className="stripes absolute inset-x-0 bottom-0 h-1" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export function StatsGrid() {
  return (
    <div>
      <dl className="grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
        {stats.items.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-2 border-b border-r border-line p-6 md:p-8">
            <dt className="tag text-ink-muted">{s.label}</dt>
            <dd className="font-head text-4xl font-extrabold tracking-[-0.03em] tabular-nums md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
      <p className="tag mt-3 normal-case tracking-normal text-ink-muted">{stats.note}</p>
    </div>
  );
}

const statusStyle = {
  UPCOMING: 'bg-brand-green text-white',
  ONGOING: 'bg-white text-navy',
  RECURRING: 'bg-white/10 text-white ring-1 ring-inset ring-white/25',
  COMPLETED: 'bg-black/60 text-white',
};

function formatDate(d) {
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(d)).toUpperCase();
}

export function Poster({ p, large = false }) {
  const href = p.url || social.instagram.url;
  const when = p.date ? formatDate(p.date) : p.when?.toUpperCase();
  return (
    <article className="group relative flex aspect-[4/5] flex-col overflow-hidden bg-navy text-white">
      {p.image ? (
        <img src={p.image} alt={p.titleMl} loading="lazy" className="absolute inset-0 size-full object-cover" />
      ) : (
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:25%_20%]" />
          <div className="stripes-v absolute bottom-0 right-0 top-0 w-3" />
        </div>
      )}
      <div className="relative flex items-start justify-between gap-3 p-5">
        <span className="tag text-white/70">{p.tag}</span>
        <span className={`tag shrink-0 px-2 py-1 ${statusStyle[p.status] || statusStyle.RECURRING}`}>{p.status}</span>
      </div>
      <div className={`relative mt-auto p-5 pr-8 ${p.image ? 'bg-gradient-to-t from-navy via-navy/90 to-transparent pt-16' : ''}`}>
        <h3 className={`ml-title ${large ? 'text-4xl sm:text-5xl' : 'text-[28px]'} font-extrabold`} lang="ml">{p.titleMl}</h3>
        {p.summary && <p className="mt-3 text-sm text-white/70">{p.summary}</p>}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
          {when && <span className="tag text-white/60">{when}</span>}
          <a href={href} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline">
            {p.url ? 'Open post on @ssf_nettur' : 'Follow on @ssf_nettur'}<ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function PosterGrid({ items = posters }) {
  return (
    <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => <li key={p.id} className="bg-white"><Poster p={p} /></li>)}
    </ul>
  );
}

export function FeaturedPosters() {
  const [first, ...rest] = posters.filter((p) => p.featured).slice(0, 3);
  if (!first) return null;
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-12">
      <div className="bg-white md:col-span-7"><Poster p={first} large /></div>
      <div className="grid gap-px bg-line sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
        {rest.map((p) => (
          <article key={p.id} className="flex flex-col gap-4 bg-white p-6 md:p-8">
            <div className="flex items-start justify-between gap-3">
              <span className="tag text-brand-blue">{p.tag}</span>
              <span className="tag border border-line px-2 py-1 text-ink-muted">{p.status}</span>
            </div>
            <h3 lang="ml" className="ml-title text-3xl font-extrabold">{p.titleMl}</h3>
            <p className="text-sm text-ink-muted">{p.summary}</p>
            <Link to="/programmes" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline">All programmes<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </article>
        ))}
      </div>
    </div>
  );
}

// Asymmetric bento: spans per position on a 12-column grid.
const bento = ['md:col-span-7 md:row-span-2', 'md:col-span-5', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4'];
export function DepartmentBento({ compact = false }) {
  return (
    <ul className="grid gap-px border border-line bg-line md:grid-cols-12">
      {departments.map((d, i) => {
        const Icon = icons[d.icon] || Sparkles;
        const big = i === 0;
        return (
          <li key={d.id} className={`flex flex-col gap-5 p-6 md:p-8 ${bento[i]} ${big ? 'bg-navy text-white' : 'bg-white'}`}>
            <div className="flex items-start justify-between gap-4">
              <span className={`tag ${big ? 'text-white/60' : 'text-brand-blue'}`}>{d.tag}</span>
              <Icon className={`size-6 shrink-0 ${big ? 'text-brand-green' : 'text-ink'}`} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div className={big ? 'mt-auto' : ''}>
              <h3 lang="ml" className={`ml-title font-extrabold ${big ? 'text-5xl sm:text-6xl' : 'text-3xl'}`}>{d.titleMl}</h3>
              <p className={`mt-1 font-head text-base font-bold tracking-[-0.01em] ${big ? 'text-white/80' : 'text-ink'}`}>{d.title}</p>
            </div>
            {!compact && <p className={`text-sm ${big ? 'text-white/70' : 'text-ink-muted'}`}>{d.summary}</p>}
            {big && <span className="stripes h-1 w-24" aria-hidden="true" />}
          </li>
        );
      })}
    </ul>
  );
}

function initials(role) {
  return role.split(/[ ,]+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
}

export function CommitteeGrid() {
  return (
    <div>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-3">
        {committee.map((m, i) => (
          <li key={m.role} className="flex flex-col bg-white">
            <div className="relative aspect-[4/3] bg-alt">
              {m.photo ? (
                <img src={m.photo} alt={m.name || m.role} loading="lazy" className="size-full object-cover" />
              ) : (
                <span className="absolute inset-0 grid place-items-center font-head text-5xl font-extrabold tracking-[-0.03em] text-line" aria-hidden="true">{initials(m.role)}</span>
              )}
              <span className="tag absolute left-4 top-4 bg-white px-2 py-1 text-ink-muted ring-1 ring-line">0{i + 1}</span>
            </div>
            <div className="flex flex-1 flex-col gap-2 border-t border-line p-6">
              <p className="tag text-brand-blue">{m.role}</p>
              {m.name && <p className="font-head text-xl font-bold tracking-[-0.01em]">{m.name}</p>}
              <p className="text-sm text-ink-muted">{m.duty}</p>
            </div>
          </li>
        ))}
      </ul>
      {secretariat.length > 0 && (
        <ul className="grid border-x border-b border-line sm:grid-cols-2 lg:grid-cols-4">
          {secretariat.map((m) => (
            <li key={m.role + m.name} className="border-b border-r border-line p-5 last:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
              <p className="tag text-ink-muted">{m.role}</p>
              <p className="mt-2 font-head font-bold">{m.name}</p>
            </li>
          ))}
        </ul>
      )}
      {!committee.some((m) => m.name) && (
        <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
          <Instagram className="size-4" aria-hidden="true" />
          The current office bearers are announced on <a className="font-semibold text-ink underline underline-offset-2" href={social.instagram.url} target="_blank" rel="noopener">{social.instagram.handle}</a>.
        </p>
      )}
    </div>
  );
}

export function JoinBand() {
  return (
    <section className="bg-navy text-white">
      <div className="page grid border-x border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 py-14 md:col-span-8 md:border-b-0 md:border-r md:py-20 md:pr-10">
          <p className="tag mb-5 text-white/50">MEMBERSHIP // 2026</p>
          <h2 className="h-section text-white">Join SSF Nettur.</h2>
          <p className="mt-5 max-w-xl text-white/70">Any student in Nettur can become a member. Register online or message the unit and a member of the committee will reply.</p>
        </div>
        <div className="flex flex-col justify-center gap-3 py-10 md:col-span-4 md:pl-10">
          <Link to="/join" className="btn-green justify-between">Register as a member<ArrowRight className="size-4" aria-hidden="true" /></Link>
          <a href={social.instagram.url} target="_blank" rel="noopener" className="btn-ghost-dark justify-between">Message {social.instagram.handle}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
