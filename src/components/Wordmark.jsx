import { viewBox, paths } from './ssfMarkPaths.js';

// Official "SSF" letterforms as fixed vector outlines. Never re-typeset or restyle.
export function SSFMark({ className = '' }) {
  return (
    <svg viewBox={viewBox} className={`block w-auto shrink-0 ${className}`} role="img" aria-label="SSF" focusable="false">
      <g transform="scale(1 -1)" fill="currentColor" dangerouslySetInnerHTML={{ __html: paths }} />
    </svg>
  );
}

// Institutional lockup: [emblem] | [SSF] NETTUR UNIT, with the sector and division below.
export default function Lockup({ size = 'md', subtitle = true }) {
  const big = size === 'lg';
  return (
    <span className="inline-flex items-center gap-3">
      <img src="/assets/ssf-emblem.png" alt="" width="40" height="40" className={`${big ? 'size-11' : 'size-9'} shrink-0 object-contain`} />
      <span className={`${big ? 'h-9' : 'h-7'} w-px bg-white/15`} aria-hidden="true" />
      <span className="leading-none">
        <span className={`flex items-baseline gap-[0.32em] text-white ${big ? 'text-[19px]' : 'text-[15px]'}`}>
          <SSFMark className="h-[0.74em]" />
          <span className="font-display font-bold tracking-[0.06em]">NETTUR UNIT</span>
        </span>
        {subtitle && <span className={`mt-1.5 block font-medium text-white/50 ${big ? 'text-xs' : 'text-[10.5px]'}`}>Dharmadam Sector • Thalassery Division</span>}
      </span>
    </span>
  );
}
