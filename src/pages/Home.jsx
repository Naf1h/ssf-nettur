import Hero from '../sections/Hero.jsx';
import Overview from '../sections/Overview.jsx';
import Work from '../sections/Work.jsx';
import Events from '../sections/Events.jsx';
import Values from '../sections/Values.jsx';
import Leadership from '../sections/Leadership.jsx';
import Contact from '../sections/Contact.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <Overview />
      <Work />
      <Events />
      <Values />
      <Leadership />
      <Contact />
    </>
  );
}
