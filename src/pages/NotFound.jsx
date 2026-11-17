import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="frame pb-24 pt-44">
      <p className="idx">404</p>
      <h1 className="h-section mt-4">This page does not exist.</h1>
      <p className="mt-6 max-w-md text-lg text-ink-muted">It may have moved when the site was redesigned.</p>
      <Link to="/" className="mt-10 inline-block rounded-full bg-obsidian px-6 py-3.5 text-sm font-semibold text-white">Go to the home page</Link>
    </section>
  );
}
