import PageHead from '../components/PageHead.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Connect from '../sections/Connect.jsx';
import Committee from '../sections/Committee.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function ConnectPage() {
  usePageTitle('Connect');
  return (
    <>
      <PageHead tag="Connect" title="Join the unit">
        <p>Follow along, or message us to join, subscribe to Risala or ask the student help desk.</p>
      </PageHead>
      <section className="frame pt-10" aria-label="Contact">
        <Connect />
      </section>
      <section id="committee" className="frame scroll-mt-28 pt-24 sm:pt-32" aria-label="Committee">
        <SectionHead tag="Unit committee" tone="text-glow-gold" title="Office bearers" />
        <Committee />
      </section>
    </>
  );
}
