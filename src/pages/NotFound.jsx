import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="section text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="h2 mt-4">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-muted">This page does not exist. It may have moved.</p>
      <Link to="/" className="btn-primary mt-8">Go to home</Link>
    </section>
  );
}
