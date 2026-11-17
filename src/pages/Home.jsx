import Hero from '../sections/Hero.jsx';
import Lineage from '../sections/Lineage.jsx';
import Pulse from '../sections/Pulse.jsx';
import Wings from '../sections/Wings.jsx';
import People from '../sections/People.jsx';
import Write from '../sections/Write.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <Lineage />
      <Pulse />
      <Wings />
      <People />
      <Write />
    </>
  );
}
