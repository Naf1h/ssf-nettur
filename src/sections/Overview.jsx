import { overview } from '../data/unitData.js';

export default function Overview() {
  return (
    <section id="about" aria-label="Unit overview" className="border-y border-slate-200/70 bg-alabaster">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((o) => (
            <div key={o.label} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
              <dt className="text-sm font-bold text-navy">{o.label}</dt>
              <dd className="mt-3">
                <span className="block text-4xl font-extrabold tracking-[-0.04em] text-navy tabular-nums">{o.value}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink-muted">{o.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
