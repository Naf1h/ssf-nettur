import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Lockup from './Wordmark.jsx';
import { navLinks } from './nav.js';

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
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

  return (
    <>
      {/* The navbar is the only element that uses backdrop blur. */}
      <header className={`fixed inset-x-0 top-0 z-header pt-[env(safe-area-inset-top)] transition-colors duration-300 ${scrolled || open ? 'border-b border-white/[0.06] bg-night/85 backdrop-blur-xl' : ''}`}>
        <div className="frame flex h-[76px] items-center justify-between gap-6">
          <Link to="/" aria-label="SSF Nettur Unit, home"><Lockup /></Link>

          <nav aria-label="Main" className="hidden rounded-full border border-white/[0.08] bg-night-2/80 p-1 lg:block">
            <ul className="flex">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} className={({ isActive }) => `relative block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${isActive ? 'text-night' : 'text-white/65 hover:text-white'}`}>
                    {({ isActive }) => (
                      <>
                        {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-glow-emerald" transition={{ type: 'tween', duration: 0.25 }} />}
                        <span className="relative">{l.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/connect" className="btn-emerald hidden min-h-[42px] px-5 sm:inline-flex">Join the unit</Link>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] lg:hidden">
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="fixed inset-x-0 bottom-0 top-[calc(76px+env(safe-area-inset-top))] z-menu overflow-y-auto bg-night lg:hidden">
          <div className="frame flex flex-col py-4">
            {navLinks.map((l, i) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `flex items-baseline gap-4 border-b border-white/[0.08] py-5 font-display text-3xl font-bold tracking-[-0.02em] ${isActive ? 'text-glow-emerald' : 'text-white'}`}>
                <span className="tag text-white/40">0{i + 1}</span>{l.label}
              </NavLink>
            ))}
            <Link to="/connect" className="btn-emerald mt-8">Join the unit</Link>
          </div>
        </nav>
      )}
    </>
  );
}
