import { viewBox, paths } from './wordmarkPaths.js';

// "SSF" in Cooper Black outlines (as on the official SSF sites) + unit name.
export default function Wordmark({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${light ? 'text-white' : 'text-ink'} ${className}`}>
      <svg viewBox={viewBox} className="h-[19px] w-auto" aria-hidden="true" focusable="false">
        <g transform="scale(1 -1)" fill="currentColor" dangerouslySetInnerHTML={{ __html: paths }} />
      </svg>
      <span className="text-[19px] font-bold leading-none tracking-[0.06em]">NETTUR</span>
    </span>
  );
}
