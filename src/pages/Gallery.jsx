import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';
import { Lightbox } from '../components/Posters.jsx';
import { gallery, galleryFilters } from '../data/galleryData.js';
import usePageTitle from '../components/usePageTitle.js';

export default function Gallery() {
  usePageTitle('Gallery');
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(-1);
  const count = (id) => (id === 'all' ? gallery.length : gallery.filter((g) => g.category.includes(id)).length);
  const tabs = galleryFilters.filter((f) => count(f.id) > 0);
  const items = filter === 'all' ? gallery : gallery.filter((g) => g.category.includes(filter));

  return (
    <>
      <PageHead tag="Gallery" title="Moments from Nettur">
        <p>Photos from our 2024–25 brochure and the latest posters from @ssf_nettur. Tap any photo to see it full screen.</p>
      </PageHead>

      <div className="frame sticky top-[calc(76px+env(safe-area-inset-top))] z-10 -mt-2 bg-night/95 py-3">
        <div role="group" aria-label="Filter photos" className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {tabs.map((f) => (
            <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${filter === f.id ? 'border-glow-emerald bg-glow-emerald text-night' : 'border-white/10 bg-white/[0.03] text-white/70 hover:text-white'}`}>
              {f.label} <span className={filter === f.id ? 'text-night/60' : 'text-white/35'}>{count(f.id)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Masonry via CSS columns: no layout script, steady on phones. */}
      <section className="frame pt-8" aria-live="polite">
        <ul className="columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
          {items.map((g, i) => (
            <li key={g.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${g.caption}`}
                className="group relative block w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-night-3 text-left">
                <img src={g.src} alt={g.caption} width={g.w} height={g.h} loading="lazy" decoding="async"
                  className="block h-auto w-full scale-[1.04] transition-transform duration-300 group-hover:scale-[1.08]" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/70 to-transparent px-3 pb-3 pt-10">
                  <span className="tag block text-glow-gold">{g.period === '2024-25' ? '2024–25 Archive' : g.date}</span>
                  <span className="mt-0.5 line-clamp-2 block text-[13px] font-semibold leading-snug text-white">{g.caption}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {open >= 0 && <Lightbox key={filter} items={items} index={open} onClose={() => setOpen(-1)} />}
    </>
  );
}
