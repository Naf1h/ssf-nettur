import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Hero from '../sections/Hero.jsx';
import Marquee from '../sections/Marquee.jsx';
import Honours from '../sections/Honours.jsx';
import { WingsPreview } from '../sections/Wings.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { EventCard, Lightbox, upcomingEvents } from '../components/Posters.jsx';
import { brochure } from '../data/unitData.js';
import { gallery } from '../data/galleryData.js';
import usePageTitle from '../components/usePageTitle.js';

const featured = gallery.filter((g) => g.period === '2024-25' && g.w > g.h).slice(0, 4);

export default function Home() {
  usePageTitle('');
  const upcoming = upcomingEvents();
  const [open, setOpen] = useState(-1);
  return (
    <>
      <Hero />
      <Marquee />

      {upcoming.length > 0 && (
        <section className="frame pt-16 sm:pt-24" aria-label="Upcoming programmes">
          <SectionHead tag="Upcoming • 2026" title="What's next" link="/programmes" linkLabel="All programmes" />
          <div className="grid gap-6 md:grid-cols-2">
            {upcoming.slice(0, 2).map((e) => <EventCard key={e.id} e={e} />)}
          </div>
        </section>
      )}

      <section className="frame pt-24 sm:pt-32" aria-label="Honours">
        <SectionHead tag="Honours • 2024–25" tone="text-glow-gold" title="Recognised for our work" link="/about#honours" linkLabel="Honours cabinet" />
        <Honours compact />
      </section>

      <section className="frame pt-24 sm:pt-32" aria-label="Wings">
        <SectionHead tag="Seven wings" tone="text-glow-cyan" title="How the unit works" link="/wings" linkLabel="Explore the wings" />
        <WingsPreview />
      </section>

      <section className="frame pt-24 sm:pt-32" aria-label="Gallery">
        <SectionHead tag="Gallery • 2024–25 archive" title="Moments from Nettur" link="/gallery" linkLabel="Open the gallery" />
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {featured.map((g, i) => (
            <li key={g.src}>
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${g.caption}`} className="block aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-night-3">
                <img src={g.src} alt="" loading="lazy" decoding="async" className="size-full scale-[1.06] object-cover transition-transform duration-300 hover:scale-[1.1]" />
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6">
          <div>
            <p className="font-display text-lg font-bold text-white">SSF Nettur Unit Brochure 2025</p>
            <p className="text-sm text-white/55">Our 2024–25 year in review: programmes, honours and committee.</p>
          </div>
          <a href={brochure.file} download className="btn-emerald"><Download className="size-4" aria-hidden="true" />Download ({brochure.sizeLabel})</a>
        </div>
      </section>

      <section className="frame pt-24 sm:pt-32">
        <Link to="/connect" className="glass glow-card flex flex-wrap items-center justify-between gap-6 p-8 sm:p-10">
          <span>
            <span lang="ml" className="block text-3xl font-extrabold text-white sm:text-4xl">എസ് എസ് എഫിൽ അംഗമാകാം</span>
            <span className="mt-1 block font-display text-lg font-bold text-white/70">Join SSF Nettur Unit</span>
          </span>
          <span className="btn-emerald">Connect with us<ArrowRight className="size-4" aria-hidden="true" /></span>
        </Link>
      </section>

      {open >= 0 && <Lightbox items={featured} index={open} onClose={() => setOpen(-1)} />}
    </>
  );
}
