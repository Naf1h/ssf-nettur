// Tilted theme ribbons under the hero (crossing bands, festival style).
const items = [
  { ml: true, t: 'ജീവിതമാവുക' },
  { t: 'LIVE THE MESSAGE' },
  { t: 'SSF NETTUR UNIT' },
  { t: 'DHARMADAM SECTOR' },
  { t: 'THALASSERY DIVISION' },
];

function Run({ dim = false }) {
  return (
    <span className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          {it.ml ? (
            <span lang="ml" className="px-6 text-2xl font-extrabold">{it.t}</span>
          ) : (
            <span className="px-6 font-display text-lg font-bold tracking-[0.06em]">{it.t}</span>
          )}
          <span className={`size-2 rotate-45 ${dim ? 'bg-white/30' : 'bg-night'}`} aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-10" aria-label="ജീവിതമാവുക: Live the Message. SSF Nettur Unit, Dharmadam Sector, Thalassery Division." role="img">
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2.2deg] border-y border-white/10 bg-white/[0.04] py-2 text-white/40" aria-hidden="true">
        <div className="marquee-track reverse flex w-max"><Run dim /><Run dim /></div>
      </div>
      <div className="relative -mx-[5%] -rotate-[1.6deg] bg-gradient-to-r from-glow-emerald via-glow-teal to-glow-gold py-3 text-night shadow-[0_20px_60px_-20px_rgba(16,185,129,.6)]" aria-hidden="true">
        <div className="marquee-track flex w-max"><Run /><Run /></div>
      </div>
    </div>
  );
}
