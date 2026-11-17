import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="frame pb-16 pt-44">
      <p className="tag text-glow-emerald">404</p>
      <h1 className="h-sec mt-3">This page does not exist.</h1>
      <p className="mt-5 max-w-md text-lg text-white/60">It may have moved when the site was redesigned.</p>
      <Link to="/" className="btn-emerald mt-10">Go to the home page</Link>
    </section>
  );
}
