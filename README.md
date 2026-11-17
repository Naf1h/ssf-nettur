# SSF Nettur Unit website

Static site for SSF Nettur Unit (Dharmadam Sector, Thalassery Division, Kannur District). Deployed on Vercel; every push to `main` goes live.

## Updating content

Open `index.html` and edit the block at the top of the `<script>` near the end of the file:

- `INSTAGRAM_FEED_URL`: the Behold JSON feed URL for @ssf_nettur. Empty shows the Instagram card.
- `EVENTS`: upcoming programmes, e.g. `{date:'2026-12-06', title:'യൂണിറ്റ് സാഹിത്യോത്സവ്', place:'Nettur', time:'9:00 AM'}`. Past dates hide on their own.
- `COMMITTEE`: office bearers, e.g. `{name:'Name', role:'President', photo:'assets/team/president.webp'}`. The section stays hidden while empty.

## Assets

- `assets/rachana-*.woff2`: RIT Rachana (SIL Open Font License), subset to Malayalam.
- Hero artwork (`jeevithamavuka.webp`, `flag.webp`, `crowd.webp`, `procession.webp`): SSF Kerala's ജീവിതമാവുക campaign artwork.
