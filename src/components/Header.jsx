import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Wordmark from './Wordmark.jsx';
import { navLinks } from './nav.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-header border-b border-line bg-white pt-[env(safe-area-inset-top)]">
      <div className="page flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="SSF Nettur, home"><Wordmark /></Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors ${isActive ? 'text-ink after:absolute after:inset-x-0 after:-bottom-[13px] after:h-0.5 after:bg-brand-blue' : 'text-ink-muted hover:text-ink'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-dark min-h-[40px] px-4">Join the unit</Link>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top))] z-menu overflow-auto border-t border-line bg-white md:hidden">
          <div className="page flex flex-col py-4">
            <NavLink to="/" end className="border-b border-line py-4 text-2xl font-bold tracking-tight">Home</NavLink>
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `border-b border-line py-4 text-2xl font-bold tracking-tight ${isActive ? 'text-brand-blue' : ''}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-dark mt-6 justify-center">Join the unit</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
