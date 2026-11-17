import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { navLinks } from './nav.js';
import Wordmark from './Wordmark.jsx';
import { social } from '../data/unitData.js';

// Floating glass pill dock with a sliding active pill.
export default function Dock() {
  const { pathname } = useLocation();
  const [active, setActive] = useState('index');

  useEffect(() => {
    if (pathname !== '/') return undefined;
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-dock flex justify-center px-3 pt-[env(safe-area-inset-top)] sm:top-6">
      <nav aria-label="Main" className="pointer-events-auto flex items-center gap-1 rounded-full border border-black/[0.08] bg-white/75 px-1.5 py-1.5 shadow-[0_12px_32px_-12px_rgba(9,13,22,.28)] backdrop-blur-xl">
        <Link to="/#index" aria-label="SSF Nettur, back to top" className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 sm:pr-3">
          <img src="/assets/ssf-emblem.png" alt="" width="26" height="26" className="size-[26px]" />
          <Wordmark className="hidden text-[13px] text-ink sm:inline-flex" />
        </Link>
        <ul className="flex items-center">
          {navLinks.map((l) => {
            const on = pathname === '/' && active === l.id;
            return (
              <li key={l.id}>
                <Link
                  to={`/#${l.id}`}
                  aria-current={on ? 'true' : undefined}
                  className={`relative block rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 sm:px-3.5 ${on ? 'text-white' : 'text-ink-muted hover:text-ink'}`}
                >
                  {on && <motion.span layoutId="dock-pill" className="absolute inset-0 rounded-full bg-obsidian" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={social.instagram.url}
          target="_blank"
          rel="noopener"
          aria-label={`${social.instagram.handle} on Instagram`}
          className="ml-1 flex items-center gap-1.5 rounded-full bg-obsidian px-3 py-2 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-black"
        >
          <Instagram className="size-4 sm:hidden" aria-hidden="true" />
          <span className="hidden sm:inline">{social.instagram.handle}</span>
          <ArrowUpRight className="hidden size-3.5 sm:block" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
}
