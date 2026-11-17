import { Check } from 'lucide-react';
import { values } from '../data/unitData.js';

export default function Values() {
  return (
    <section aria-labelledby="values-title" className="section">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Our identity</p>
          <h2 id="values-title" className="h2 mt-4">Driven by purpose. Connected by values.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            SSF Nettur Unit brings the students of Nettur together through education, cultural engagement, social responsibility and shared initiatives, as part of SSF's Dharmadam Sector.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className="card flex gap-4 p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-ssf/10 text-green-ssf"><Check className="size-5" strokeWidth={2.5} aria-hidden="true" /></span>
              <div>
                <p className="text-lg font-extrabold tracking-[-0.02em] text-navy">{v.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{v.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
