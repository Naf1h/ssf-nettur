import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from './nav.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const { pathname, hash } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname, hash]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Highlight the section in view.
  useEffect(() => {
    if (pathname !== '/') return undefined;
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
    <header className="sticky top-0 z-header border-b border-slate-200/60 bg-white/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/#top" aria-label="SSF Nettur Unit, home"><Logo /></Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const on = pathname === '/' && active === l.id;
            return (
              <Link
                key={l.id}
                to={`/#${l.id}`}
                aria-current={on ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${on ? 'text-green-ssf' : 'text-ink-muted hover:text-navy'}`}
              >
                {l.label}
                {on && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-green-ssf" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/#contact" className="hidden rounded-full bg-blue-ssf px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-deep sm:inline-flex">
            Connect With Us
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="fixed inset-x-0 bottom-0 top-[calc(76px+env(safe-area-inset-top))] z-menu overflow-auto bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((l) => (
              <Link key={l.id} to={`/#${l.id}`} className="border-b border-slate-100 py-4 text-2xl font-bold tracking-[-0.02em] text-navy">{l.label}</Link>
            ))}
            <Link to="/#contact" className="btn-primary mt-6">Connect With Us</Link>
          </div>
        </nav>
      )}
    </>
  );
}
