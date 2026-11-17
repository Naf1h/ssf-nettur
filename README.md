# SSF Nettur Unit website

React (Vite) + React Router + Tailwind CSS + Lucide. Deployed on Vercel: every push to `main` goes live.

## Update the content

Everything lives in **`src/data/unitData.js`**, in this order:

1. `committee` / `secretariat`: office bearer names from the latest @ssf_nettur committee post. Empty names are simply not shown.
2. `posters`: programmes and the archive. Put 4:5 Instagram posters in `public/posters/` and set `image`, `url`, `date` and `status` (`UPCOMING`, `ONGOING`, `COMPLETED`, `RECURRING`). `COMPLETED` posters move to the archive.
3. `departments`: the six departments.
4. `unit`, `hierarchy`, `stats`: unit facts and federation figures (with source).
5. `social.whatsapp`, `formspreeId`: the WhatsApp button and the registration form switch on once these are set.

Script rule: English for UI, tags, dates and summaries. Malayalam only in `titleMl` fields. Never mix both in one paragraph.

## Develop

```bash
npm install
npm run dev
```

Before pushing, check every page at 390px and 1440px wide.

## Type

Inter Tight (headings), Inter (body), JetBrains Mono (tags), Anek Malayalam (Malayalam titles), all from Google Fonts.
