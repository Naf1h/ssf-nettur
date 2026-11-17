import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Lockup from './Wordmark.jsx';
import { navLinks } from './nav.js';

export default function Header() {
  const { pathname, hash } = useLocation();
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname, hash]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
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
    <>
      <header className={`fixed inset-x-0 top-0 z-header pt-[env(safe-area-inset-top)] transition-colors duration-300 ${scrolled || open ? 'border-b border-white/[0.06] bg-night/80 backdrop-blur-xl' : ''}`}>
        <div className="frame flex h-[76px] items-center justify-between gap-6">
          <Link to="/#top" aria-label="SSF Nettur Unit, home"><Lockup /></Link>

          <nav aria-label="Main" className="hidden rounded-full border border-white/[0.08] bg-white/[0.04] p-1 backdrop-blur-xl lg:block">
            <ul className="flex">
              {navLinks.map((l) => {
                const on = pathname === '/' && active === l.id;
                return (
                  <li key={l.id}>
                    <Link to={`/#${l.id}`} aria-current={on ? 'true' : undefined} className={`relative block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${on ? 'text-night' : 'text-white/65 hover:text-white'}`}>
                      {on && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-glow-emerald" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                      <span className="relative">{l.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/#connect" className="btn-emerald hidden min-h-[42px] px-5 sm:inline-flex">Join the unit</Link>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] lg:hidden">
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="fixed inset-x-0 bottom-0 top-[calc(76px+env(safe-area-inset-top))] z-menu overflow-auto bg-night lg:hidden">
          <div className="frame flex flex-col py-4">
            {navLinks.map((l, i) => (
              <Link key={l.id} to={`/#${l.id}`} className="flex items-baseline gap-4 border-b border-white/[0.08] py-5 font-display text-3xl font-bold tracking-[-0.02em]">
                <span className="tag text-glow-emerald">0{i + 1}</span>{l.label}
              </Link>
            ))}
            <Link to="/#connect" className="btn-emerald mt-8">Join the unit</Link>
          </div>
        </nav>
      )}
    </>
  );
}
