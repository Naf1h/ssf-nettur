import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Dock from './Dock.jsx';
import CommandDeck from './CommandDeck.jsx';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="fixed left-3 top-[-60px] z-skip rounded-full bg-obsidian px-4 py-2.5 text-sm font-medium text-white focus:top-3">
        Skip to content
      </a>
      <Dock />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <CommandDeck />
    </>
  );
}
