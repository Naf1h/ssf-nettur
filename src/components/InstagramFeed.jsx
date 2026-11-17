import { useEffect, useState } from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { social } from '../data/unitData.js';

const hasMl = (s) => /[ഀ-ൿ]/.test(s);

// Reads a Behold JSON feed (official Instagram API). Falls back to a link card.
export default function InstagramFeed({ limit = 6 }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!social.instagramFeedUrl) { setPosts([]); return; }
    let live = true;
    fetch(social.instagramFeedUrl)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { if (live) setPosts((Array.isArray(d) ? d : d.posts || []).filter((p) => p.permalink)); })
      .catch(() => live && setPosts([]));
    return () => { live = false; };
  }, []);

  if (posts === null) {
    return (
      <ul className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3" aria-hidden="true">
        {Array.from({ length: limit }).map((_, i) => <li key={i} className="aspect-square animate-pulse bg-surface-alt" />)}
      </ul>
    );
  }

  if (!posts.length) {
    return (
      <div className="grid gap-6 border border-line bg-surface-alt p-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-10">
        <span className="grid size-14 place-items-center rounded-xl bg-white text-brand-blue ring-1 ring-line"><Instagram className="size-7" aria-hidden="true" /></span>
        <div>
          <p lang="ml" className="text-xl font-bold">പുതിയ വിശേഷങ്ങൾ ഇൻസ്റ്റഗ്രാമിൽ</p>
          <p className="mt-1 text-ink-muted">Programme posters, dates and photos are posted on {social.instagram.handle} first.</p>
        </div>
        <a className="btn-dark justify-self-start" href={social.instagram.url} target="_blank" rel="noopener">Open {social.instagram.handle}</a>
      </div>
    );
  }

  const fmt = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
      {posts.slice(0, limit).map((p) => {
        const img = p.sizes?.medium?.mediaUrl || (p.mediaType === 'VIDEO' ? p.thumbnailUrl : p.mediaUrl);
        const cap = (p.prunedCaption || p.caption || '').trim();
        return (
          <li key={p.id || p.permalink} className="bg-white">
            <a href={p.permalink} target="_blank" rel="noopener" className="group flex h-full flex-col">
              <div className="relative aspect-square overflow-hidden bg-surface-alt">
                {img && <img src={img} alt={cap.slice(0, 120) || 'SSF Nettur Instagram post'} loading="lazy" width="400" height="400" className="size-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]" />}
                {p.mediaType !== 'IMAGE' && p.mediaType && (
                  <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold">{p.mediaType === 'VIDEO' ? 'Video' : 'Album'}</span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                {p.timestamp && <time dateTime={p.timestamp} className="label">{fmt.format(new Date(p.timestamp))}</time>}
                <p lang={hasMl(cap) ? 'ml' : undefined} className="line-clamp-3 text-sm font-medium">{cap}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-brand-blue">View post<ArrowUpRight className="size-4" aria-hidden="true" /></span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
