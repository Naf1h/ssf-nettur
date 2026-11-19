# SSF Nettur Unit website

React (Vite) + React Router + Tailwind + Framer Motion. Six pages: `/`, `/about`, `/wings`, `/programmes`, `/gallery`, `/connect`. Deployed on Vercel: every push to `main` goes live.

## Update the content

- **`src/data/unitData.js`**: unit details, lineage, wings, upcoming events (from posters), the current committee, social links, and the 2024–25 archive (brochure quotes, honours, past programmes, 2025–26 committee).
- **`src/data/galleryData.js`**: one line per photo. Put the image in `public/photos/` and add a line.
- Upcoming events move to the archive by themselves once their date has passed.

## Rules

- The 2025 brochure is archive only. Current data (2026 events, committee) comes from Instagram posts.
- The children's wing is SMILE and the youth/sports wing is SMART CORE (the brochure's "Mazhavil" is the old name).
- Never retype "SSF" as text in a logo: use the `SSFMark` outlines in `src/components/Wordmark.jsx`.
- Check every page at 390px and 1440px before pushing: no sideways scrolling.
