import { Link } from 'react-router-dom';
import { BookOpen, Feather, GraduationCap, Newspaper, HandHeart, ArrowUpRight, CalendarDays, MapPin, Instagram } from 'lucide-react';
import { campaign, hierarchy, stats, social, events } from '../data/unitData.js';

const icons = { BookOpen, Feather, GraduationCap, Newspaper, HandHeart };
export function AreaIcon({ name, className }) {
  const Icon = icons[name] || BookOpen;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />;
}

export function CampaignHero() {
  return (
    <section aria-label={`${campaign.by}: ${campaign.ml}`} className="hero-sky overflow-hidden pt-10 md:pt-14">
      <img
        src="/assets/jeevithamavuka.webp"
        alt={campaign.ml}
        width="1400"
        height="965"
        fetchpriority="high"
        className="relative z-[4] mx-auto h-auto w-[min(80vw,420px)] md:w-[clamp(280px,36vw,520px)]"
      />
      <div className="hero-scene -mt-[14vw] md:-mt-[clamp(60px,9vw,150px)]" aria-hidden="true">
        <img className="hero-flag" src="/assets/flag.webp" alt="" width="652" height="466" />
        <img className="hero-proc" src="/assets/procession.webp" alt="" width="1920" height="672" />
        <img className="hero-crowd" src="/assets/crowd.webp" alt="" width="1278" height="578" />
      </div>
    </section>
  );
}

export function SectionHead({ ml, title, children, id }) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        {ml && <p lang="ml" className="mb-3 text-base font-semibold text-brand-blue">{ml}</p>}
        <h2 id={id} className="display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      </div>
      {children && <div className="md:col-span-5 md:justify-self-end">{children}</div>}
    </div>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="SSF in numbers" className="border-y border-line bg-white">
      <dl className="page grid grid-cols-2 md:grid-cols-4">
        {stats.items.map((s, i) => (
          <div key={s.label} className={`flex flex-col-reverse gap-1 py-7 ${i % 2 ? 'pl-5 md:pl-8' : 'pr-5 md:pr-8'} ${i > 0 ? 'md:border-l md:border-line md:pl-8' : ''} ${i % 2 ? 'border-l border-line' : ''} ${i > 1 ? 'border-t border-line md:border-t-0' : ''}`}>
            <dt className="text-sm text-ink-muted">{s.label}</dt>
            <dd className="text-3xl font-extrabold tracking-tight tabular-nums md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
      <p className="page border-t border-line py-3 text-xs text-ink-muted">
        Federation figures from <a className="underline underline-offset-2 hover:text-ink" href={stats.sourceUrl} target="_blank" rel="noopener">{stats.source}</a>, checked {stats.checked}.
      </p>
    </section>
  );
}

export function HierarchyList({ compact = false }) {
  return (
    <ol className="border-t border-line">
      {hierarchy.map((h) => (
        <li key={h.level} className={`grid grid-cols-[96px_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[120px_1fr_auto] ${h.current ? 'relative' : ''}`}>
          <span lang="ml" className={`text-sm ${h.current ? 'font-semibold text-brand-green' : 'text-ink-muted'}`}>{h.levelMl}</span>
          <span className="min-w-0">
            {h.url ? (
              <a href={h.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-bold hover:text-brand-blue">{h.name}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
            ) : (
              <span lang="ml" className={`font-bold ${h.current ? 'text-xl' : 'text-lg'}`}>{h.nameMl}</span>
            )}
          </span>
          {!compact && <span className="hidden text-xs text-ink-muted sm:block">{h.url ? h.level : `${h.name} ${h.level}`}</span>}
          {h.current && <span className="absolute -left-3 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-brand-green" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export function upcomingEvents(limit) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const list = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return limit ? list.slice(0, limit) : list;
}

export function EventList({ limit }) {
  const list = upcomingEvents(limit);
  const mon = new Intl.DateTimeFormat('en-IN', { month: 'short' });
  if (!list.length) {
    return (
      <div className="grid justify-items-start gap-3 border border-line bg-surface-alt p-8 sm:p-10">
        <CalendarDays className="size-6 text-brand-blue" aria-hidden="true" />
        <p lang="ml" className="text-xl font-bold">പുതിയ പരിപാടികൾ ഉടൻ പ്രഖ്യാപിക്കും</p>
        <p className="max-w-prose text-ink-muted">No programmes are announced right now. New programmes are posted on Instagram first.</p>
        <a className="btn-line mt-2" href={social.instagram.url} target="_blank" rel="noopener">
          <Instagram className="size-4" aria-hidden="true" />Follow {social.instagram.handle}
        </a>
      </div>
    );
  }
  return (
    <ul className="border-t border-line">
      {list.map((e) => {
        const d = new Date(e.date);
        return (
          <li key={e.date + e.title} className="grid grid-cols-[72px_1fr] gap-5 border-b border-line py-6 sm:grid-cols-[96px_1fr_auto] sm:items-center">
            <div className="text-center">
              <span className="block text-3xl font-extrabold tabular-nums">{d.getDate()}</span>
              <span className="label">{mon.format(d)} {d.getFullYear()}</span>
            </div>
            <div className="min-w-0">
              {e.titleMl && <p lang="ml" className="text-lg font-bold">{e.titleMl}</p>}
              <p className={e.titleMl ? 'text-sm text-ink-muted' : 'text-lg font-bold'}>{e.title}</p>
            </div>
            <p className="col-start-2 flex items-center gap-2 text-sm text-ink-muted sm:col-start-auto">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />{[e.time, e.place].filter(Boolean).join(' · ')}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export function JoinBand() {
  return (
    <section className="bg-surface-dark text-white">
      <div className="page grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-8">
          <p lang="ml" className="text-3xl font-bold sm:text-4xl">എസ് എസ് എഫിൽ അംഗമാകാം</p>
          <p className="mt-3 max-w-xl text-slate-300">Students of Nettur can join the unit. Message us on Instagram and a unit member will reply.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          <a className="btn-light" href={social.instagram.url} target="_blank" rel="noopener"><Instagram className="size-4" aria-hidden="true" />Message us</a>
          <Link className="btn border border-white/20 text-white hover:border-white" to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  );
}
