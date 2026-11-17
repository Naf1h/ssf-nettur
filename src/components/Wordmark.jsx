import { viewBox, paths } from './ssfMarkPaths.js';

// Official "SSF" letterforms (fixed, never re-typeset) + a paired name in heavy tight caps,
// the way SSF posters set "SSF NETTUR".
export function SSFMark({ className = '' }) {
  return (
    <svg viewBox={viewBox} className={`block w-auto shrink-0 ${className}`} role="img" aria-label="SSF" focusable="false">
      <g transform="scale(1 -1)" fill="currentColor" dangerouslySetInnerHTML={{ __html: paths }} />
    </svg>
  );
}

export default function Wordmark({ name = 'NETTUR', className = '', markClass = 'h-[0.76em]' }) {
  return (
    <span className={`inline-flex items-baseline gap-[0.28em] leading-none ${className}`}>
      <SSFMark className={`${markClass} translate-y-[0.06em]`} />
      <span className="font-extrabold tracking-[-0.01em]">{name}</span>
    </span>
  );
}
