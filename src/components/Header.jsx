import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Brand from './Brand.jsx';
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
      <div className="stripes h-1" aria-hidden="true" />
      <div className="page flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="SSF Nettur Unit, home"><Brand /></Link>

        <nav aria-label="Main" className="hidden items-stretch self-stretch lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `flex items-center border-l border-line px-5 text-sm font-medium last:border-r ${isActive ? 'bg-alt text-ink shadow-[inset_0_-2px_0_#0F4C81]' : 'text-ink-muted hover:text-ink'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/join" className="btn-navy my-auto ml-5 min-h-[40px]">Become a member</Link>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="fixed inset-x-0 bottom-0 top-[calc(4.25rem+env(safe-area-inset-top))] z-menu overflow-auto border-t border-line bg-white lg:hidden">
          <div className="page flex flex-col py-2">
            {[{ to: '/', label: 'Home' }, ...navLinks].map((l, i) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `flex items-baseline gap-4 border-b border-line py-5 font-head text-2xl font-extrabold tracking-[-0.02em] ${isActive ? 'text-brand-blue' : ''}`}>
                <span className="tag text-ink-muted">0{i + 1}</span>{l.label}
              </NavLink>
            ))}
            <Link to="/join" className="btn-navy mt-6 justify-center">Become a member</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
