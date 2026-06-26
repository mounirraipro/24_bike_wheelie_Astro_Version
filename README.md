# Bike Wheelie Astro

Standalone Astro site for `bikewheelie.online`.

The main playable game is the Playgama `Wheelie Bike` export:

```text
https://playgama.com/export/game/wheelie-bike?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666
```

## Included

- Static Astro pages for Bike Wheelie, guides, support, and legal content.
- Required `/public/game/index.html` Playgama iframe wrapper.
- Reusable `/games/` directory and `/games/[slug]/` related game pages.
- Real Playgama related game titles, thumbnails, categories, and export URLs.
- Bike Wheelie fallback SVG favicon, apple-touch icon, and Open Graph image.

## Setup

```bash
npm install
npm run dev
```

Production URL:

```bash
SITE_URL=https://bikewheelie.online
```

This project does not have a GTM ID yet. Leave `PUBLIC_GTM_ID` unset until one is provided.
