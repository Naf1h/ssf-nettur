import { useState } from 'react';
import { Trophy } from 'lucide-react';
import { honours } from '../data/unitData.js';
import { Lightbox } from '../components/Posters.jsx';

// Honours from the 2025 brochure. compact = the home page strip.
export default function Honours({ compact = false }) {
  const [open, setOpen] = useState(-1);
  const items = honours.map((h) => ({ src: h.image, caption: h.title, date: String(h.year) }));
  return (
    <>
      <ul className={`grid gap-4 ${compact ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'}`}>
        {honours.map((h, i) => (
          <li key={h.title} className="glass glow-card flex flex-col">
            {!compact && (
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${h.title}`} className="block aspect-[16/10] overflow-hidden bg-night-3">
                <img src={h.image} alt="" loading="lazy" decoding="async" className="size-full scale-[1.04] object-cover" />
              </button>
            )}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="tag flex items-center gap-2 text-glow-gold"><Trophy className="size-3.5" aria-hidden="true" />{h.year} • {h.tag}</p>
              <p lang="ml" className="mt-3 text-xl font-bold text-white">{h.titleMl}</p>
              <p className="mt-0.5 font-display text-base font-bold leading-snug text-white/85">{h.title}</p>
              {!compact && <p className="mt-3 text-sm leading-relaxed text-white/60">{h.text}</p>}
            </div>
          </li>
        ))}
      </ul>
      {open >= 0 && <Lightbox items={items} index={open} onClose={() => setOpen(-1)} />}
    </>
  );
}
