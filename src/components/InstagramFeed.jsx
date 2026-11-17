import { useEffect, useState } from 'react';
import { social } from '../data/unitData.js';
import { Poster } from './ui.jsx';

// Live @ssf_nettur posts via a Behold JSON feed (official Instagram API), shown as 4:5 posters.
// Renders nothing until social.instagramFeedUrl is set, so the page never shows an empty box.
export default function InstagramFeed({ limit = 9 }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!social.instagramFeedUrl) return;
    let live = true;
    fetch(social.instagramFeedUrl)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { if (live) setPosts((Array.isArray(d) ? d : d.posts || []).filter((p) => p.permalink)); })
      .catch(() => {});
    return () => { live = false; };
  }, []);

  if (!posts.length) return null;
  return (
    <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, limit).map((p) => {
        const cap = (p.prunedCaption || p.caption || '').trim();
        const firstLine = cap.split('\n')[0].slice(0, 90);
        return (
          <li key={p.id || p.permalink} className="bg-white">
            <Poster p={{
              id: p.id,
              tag: 'INSTAGRAM // @SSF_NETTUR',
              titleMl: firstLine,
              status: 'COMPLETED',
              date: p.timestamp,
              image: p.sizes?.large?.mediaUrl || p.sizes?.medium?.mediaUrl || (p.mediaType === 'VIDEO' ? p.thumbnailUrl : p.mediaUrl),
              url: p.permalink,
            }} />
          </li>
        );
      })}
    </ul>
  );
}
