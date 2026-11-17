import Hero from '../sections/Hero.jsx';
import Marquee from '../sections/Marquee.jsx';
import Programmes from '../sections/Programmes.jsx';
import Wings from '../sections/Wings.jsx';
import About from '../sections/About.jsx';
import Committee from '../sections/Committee.jsx';
import Connect from '../sections/Connect.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <Marquee />
      <Programmes />
      <Wings />
      <About />
      <Committee />
      <Connect />
    </>
  );
}
