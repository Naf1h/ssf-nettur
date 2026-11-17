import { PageIntro, DepartmentBento, JoinBand } from '../components/ui.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Departments() {
  usePageTitle('Departments & Work');
  return (
    <>
      <PageIntro tag="DEPARTMENTS // 06" title="Departments & work">
        <p>Six areas of work, modeled on SSF's national departments and run at unit level in Nettur.</p>
      </PageIntro>
      <section className="page py-16 md:py-24"><DepartmentBento /></section>
      <JoinBand />
    </>
  );
}
