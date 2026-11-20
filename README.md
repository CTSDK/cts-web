# CTS – hjemmeside

Hjemmeside for **Copenhagen Treasures & Services (CTS)**, Danmark. Bygget med [Astro](https://astro.build),
udgivet gratis på GitHub Pages: https://ctsdk.github.io/cts-web/

- Engelsk er hovedsprog (`/`), tysk ligger under `/de/`. Tekster: `src/i18n/ui.ts`.
- Farver og skrift (retro-stil): `src/styles/global.css` (øverst, under `:root`).
- Hver gang der lægges noget på `main`, bygger GitHub siden og lægger den ud (`.github/workflows/deploy.yml`).
- Ingen data, nøgler eller regneark her. Ingen sporing eller cookies.

Lokalt: `npm install` → `npm run dev`.
