import { Instagram } from 'lucide-react';
import { social } from '../data/unitData.js';
import InstagramFeed from '../components/InstagramFeed.jsx';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Updates() {
  usePageTitle('Updates');
  return (
    <>
      <PageHeader ml="പുതിയ വിശേഷങ്ങൾ" title="Latest updates">
        <p>Every programme poster, announcement and photo, straight from Instagram.</p>
        <a className="btn-dark mt-5" href={social.instagram.url} target="_blank" rel="noopener"><Instagram className="size-4" aria-hidden="true" />Follow {social.instagram.handle}</a>
      </PageHeader>
      <section className="page py-16 md:py-24"><InstagramFeed limit={12} /></section>
    </>
  );
}
