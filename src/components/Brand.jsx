export default function Brand({ light = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid size-9 place-items-center bg-white ring-1 ring-line">
        <img src="/assets/ssf-emblem.png" alt="" width="28" height="28" className="size-7" />
      </span>
      <span className="leading-none">
        <span className={`block font-head text-[17px] font-extrabold tracking-[-0.01em] ${light ? 'text-white' : 'text-ink'}`}>SSF NETTUR</span>
        <span className={`tag mt-1 block text-[9.5px] ${light ? 'text-white/60' : 'text-ink-muted'}`}>Dharmadam Sector</span>
      </span>
    </span>
  );
}
