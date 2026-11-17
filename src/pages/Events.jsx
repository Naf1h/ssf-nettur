import { EventList, JoinBand } from '../components/blocks.jsx';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Events() {
  usePageTitle('Events');
  return (
    <>
      <PageHeader ml="പരിപാടികൾ" title="Upcoming events">
        <p>Unit programmes, Sahityotsav rounds and meetings in Nettur.</p>
      </PageHeader>
      <section className="page py-16 md:py-24"><EventList /></section>
      <JoinBand />
    </>
  );
}
