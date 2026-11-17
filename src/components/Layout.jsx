import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <a href="#main" className="fixed left-3 top-[-60px] z-skip bg-navy px-4 py-2.5 text-sm font-semibold text-white focus:top-3">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
