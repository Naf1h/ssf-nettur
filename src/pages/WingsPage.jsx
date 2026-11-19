import PageHead from '../components/PageHead.jsx';
import { WingsGrid } from '../sections/Wings.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function WingsPage() {
  usePageTitle('Wings');
  return (
    <>
      <PageHead tag="Seven wings • 2026" title="How the unit works" tone="text-glow-gold">
        <p>Every programme in Nettur runs through one of these seven wings.</p>
      </PageHead>
      <section className="frame pt-10">
        <WingsGrid />
      </section>
    </>
  );
}
