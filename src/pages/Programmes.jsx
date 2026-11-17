import { Instagram } from 'lucide-react';
import { posters, social } from '../data/unitData.js';
import { PageIntro, SectionHead, PosterGrid, JoinBand } from '../components/ui.jsx';
import InstagramFeed from '../components/InstagramFeed.jsx';
import usePageTitle from '../components/usePageTitle.js';

const order = { UPCOMING: 0, ONGOING: 1, RECURRING: 2, COMPLETED: 3 };

export default function Programmes() {
  usePageTitle('Programmes & Archive');
  const sorted = [...posters].sort((a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9));
  const current = sorted.filter((p) => p.status !== 'COMPLETED');
  const archive = sorted.filter((p) => p.status === 'COMPLETED').sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PageIntro tag="PROGRAMMES // ARCHIVE" title="Programmes & archive">
        <p>Study circles, Sahityotsav rounds, career clinics and campaigns run by the Nettur unit.</p>
        <a className="btn-ghost-dark self-start" href={social.instagram.url} target="_blank" rel="noopener"><Instagram className="size-4" aria-hidden="true" />{social.instagram.handle}</a>
      </PageIntro>

      <section aria-labelledby="now-title" className="page py-16 md:py-24">
        <SectionHead tag="01 // CURRENT & RECURRING" title="Unit programmes" id="now-title">
          <p>Posters link to the matching post on {social.instagram.handle}.</p>
        </SectionHead>
        <div className="mt-10"><PosterGrid items={current} /></div>
      </section>

      {archive.length > 0 && (
        <section aria-labelledby="archive-title" className="border-t border-line bg-alt py-16 md:py-24">
          <div className="page">
            <SectionHead tag="02 // ARCHIVE" title="Completed programmes" id="archive-title" />
            <div className="mt-10"><PosterGrid items={archive} /></div>
          </div>
        </section>
      )}

      {social.instagramFeedUrl && (
        <section aria-labelledby="feed-title" className="page py-16 md:py-24">
          <SectionHead tag="LIVE // @SSF_NETTUR" title="From Instagram" id="feed-title" />
          <div className="mt-10"><InstagramFeed /></div>
        </section>
      )}

      <JoinBand />
    </>
  );
}
