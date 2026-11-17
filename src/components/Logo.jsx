import { unit } from '../data/unitData.js';

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid size-11 place-items-center rounded-2xl border border-slate-200/80 bg-white shadow-soft">
        <img src="/assets/ssf-emblem.png" alt="" width="28" height="28" className="size-7" />
      </span>
      <span className="leading-tight">
        <span className={`block text-[15px] font-extrabold tracking-[-0.01em] ${light ? 'text-white' : 'text-navy'}`}>{unit.short}</span>
        <span className={`block text-xs font-medium ${light ? 'text-white/60' : 'text-ink-muted'}`}>{unit.federation}</span>
      </span>
    </span>
  );
}
