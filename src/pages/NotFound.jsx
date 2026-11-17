import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <PageHeader ml="പേജ് കണ്ടെത്തിയില്ല" title="Page not found">
      <p>This page does not exist. It may have moved.</p>
      <Link to="/" className="btn-dark mt-5">Go to home</Link>
    </PageHeader>
  );
}
