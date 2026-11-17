# SSF Nettur Unit website

React (Vite) + React Router + Tailwind CSS + Lucide. Deployed on Vercel: every push to `main` goes live.

## Update the content

All text, events, committee and stats live in **`src/data/unitData.js`**. Edit that file only.

- `events`: upcoming programmes. Past dates hide on their own. Empty shows an honest "no programmes announced" card.
- `committee`: office bearers. The Committee page drops out of the menu while this is empty.
- `social.instagramFeedUrl`: the Behold JSON feed URL for @ssf_nettur. Empty shows a link card instead of posts.
- `stats`: federation figures, with their source. Never leave a dash or a guess here.

Do not add placeholder text ("To be updated", "Lorem ipsum", sample titles). Leave a list empty instead.

## Develop

```bash
npm install
npm run dev
```

Before pushing, check every page at 390px and 1440px wide.

## Assets

- `public/assets/jeevithamavuka.webp`, `flag.webp`, `crowd.webp`, `procession.webp`: SSF Kerala's 2026 ജീവിതമാവുക campaign artwork.
- `src/components/wordmarkPaths.js`: the "SSF" wordmark as outlines.
