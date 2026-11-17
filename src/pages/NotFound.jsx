import { Link } from 'react-router-dom';
import { PageIntro } from '../components/ui.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <PageIntro tag="ERROR // 404" title="Page not found">
      <p>This page does not exist. It may have moved.</p>
      <Link to="/" className="btn-green self-start">Go to home</Link>
    </PageIntro>
  );
}
