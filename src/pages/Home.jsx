import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { unit } from '../data/unitData.js';
import { SectionHead, HierarchyStrip, StatsGrid, FeaturedPosters, DepartmentBento, JoinBand } from '../components/ui.jsx';
import usePageTitle from '../components/usePageTitle.js';

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-navy text-white">
      <div className="page grid border-x border-white/10 lg:grid-cols-12">
        <div className="flex flex-col border-b border-white/10 py-14 sm:py-20 lg:col-span-8 lg:border-b-0 lg:border-r lg:pr-12">
          <p className="tag text-white/50">{unit.federation.toUpperCase()} // EST. 1973</p>
          <h1 id="hero-title" className="h-display mt-8 text-[3.4rem] sm:text-7xl lg:text-[6.5rem]">SSF Nettur<br />Unit</h1>
          <p className="mt-8 max-w-xl text-lg text-white/70">{unit.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/join" className="btn-green">Become a member<ArrowRight className="size-4" aria-hidden="true" /></Link>
            <Link to="/programmes" className="btn-ghost-dark">See programmes</Link>
          </div>
        </div>
        <div className="grid grid-rows-[1fr_auto] lg:col-span-4">
          <div className="relative grid min-h-[300px] place-items-center overflow-hidden py-12 lg:py-0">
            <div className="absolute inset-y-0 left-1/2 flex w-[180px] -translate-x-1/2 sm:w-[220px]" aria-hidden="true">
              <span className="flex-1 bg-brand-blue" />
              <span className="flex-1 bg-white" />
              <span className="flex-1 bg-brand-green" />
            </div>
            <div className="relative grid size-[150px] place-items-center bg-white ring-1 ring-line sm:size-[176px]">
              <img src="/assets/ssf-emblem.png" alt="SSF emblem" width="180" height="180" className="size-[110px] sm:size-[128px]" />
            </div>
          </div>
          <div className="border-t border-white/10 py-6 lg:pl-10">
            <p className="tag text-white/50">2026 // STATE CAMPAIGN</p>
            <p lang="ml" className="ml-title mt-2 text-4xl font-extrabold">{unit.campaignMl}</p>
          </div>
        </div>
      </div>
      <div className="page border-x border-t border-white/10 px-0 sm:px-0">
        <HierarchyStrip dark />
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <section aria-labelledby="stats-title" className="page py-16 md:py-24">
        <h2 id="stats-title" className="tag mb-6 text-brand-blue">SSF // IN NUMBERS</h2>
        <StatsGrid />
      </section>
      <section aria-labelledby="featured-title" className="border-t border-line bg-alt py-16 md:py-24">
        <div className="page">
          <SectionHead tag="FEATURED // INITIATIVES" title="Now in Nettur" id="featured-title">
            <Link to="/programmes" className="btn-line">All programmes<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </SectionHead>
          <div className="mt-10"><FeaturedPosters /></div>
        </div>
      </section>
      <section aria-labelledby="dept-title" className="page py-16 md:py-24">
        <SectionHead tag="DEPARTMENTS // 06" title="How the unit works" id="dept-title">
          <Link to="/departments" className="btn-line">All departments<ArrowRight className="size-4" aria-hidden="true" /></Link>
        </SectionHead>
        <div className="mt-10"><DepartmentBento compact /></div>
      </section>
      <JoinBand />
    </>
  );
}
