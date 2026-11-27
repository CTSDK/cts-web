# CTS Web – status og næste skridt

Sidst opdateret: 27-11-2026. Live: https://ctsdk.github.io/cts-web/ (seneste udgivelse `a068662`, grøn). Den fulde, opdaterede note: `CTSDK/cts-app` → `docs/noter/web.md`.

**27-11:** 54 nye, forseglede sæt (lagernumre N-sætnr, data `src/data/nyt.ts`, sider `src/pages/lego/[no].astro`) uden pris/fotos;
stand-mærke New, sealed / Used på alle sider; 25 tema-cirkler; temaside `/lego/theme/<slug>/` ved flere sæt. Thomas har set det live.
Den fulde note (regler, teknik, fast måde for nyt sæt) ligger i `CTSDK/cts-app` → `docs/noter/web.md`.

## Sådan er siden NU (bygget, testet og lagt ud)

**Stil:** hvid/creme baggrund, marineblå menubjælke og bund med farvestriber (blå, sennep, rød, orange).
Skrift: Anton (overskrifter), Oswald (etiketter), Courier Prime (brødtekst), Playfair Display (magasin-overskrift).
Inspiration: Stone Groove (stil), rejsemagasin (cover-linjer), LEGO.com (runde ikoner, produktside).
Farver/skrift: `src/styles/global.css`. Tekster EN+DE: `src/i18n/ui.ts`.

**Forside** (`src/components/views/Home.astro`, `src/components/Doors.astro`):
- Magasinlinje øverst: "Copenhagen · Denmark ——— Issue No. 01 · 2026".
- Seglet (400 px) i midten med to tekstfelter på hver side (stor, fed tekst):
  venstre "About CTS · N°01 – A small Danish business…", højre "Found · Restored · Passed on – We find them…".
- Rombe, symmetrisk (370 px fra midten alle veje): LEGO venstre, Retro højre, "Welcome to C T S." + farvestriber i midten, Copenhagen Services nederst.
- Runde billedvinduer med "+"-knap: LEGO = foto af borg 375 (Thomas' foto), Retro = Thomas' teak-lampe (vindue retoucheret til tapet), Services = marineblå med by-ikon.
- Retro-tekst: "Lamps, furniture and other Scandinavian classics." (brødskærere fjernet).
- Ingen "Choose a department"-overskrift (fjernet efter ønske).

**LEGO-siden** (`src/components/views/Lego.astro`, data i `src/data/lego.ts`):
- Grå boks "Themes" med 11 runde tema-ikoner (som LEGO.com, men egne cirkler).
- Star Wars: Thomas' foto af Obi-Wan i cockpittet, "1 SET", fører til 75135.
- Castle: foto af borg 375, "Coming soon" (intet Castle-sæt endnu).
- Games (DE "Spiele", 12. cirkel): Thomas' foto af Shave a Sheep-æsken (uden LEGO-logo), "1 SET", fører til 3845.
- Bionicle (13. cirkel): Thomas' foto af vejledningens forside (IMG_9704), beskåret om masken – uden Bionicle-logo. "1 SET", fører til 70783.
- Øvrige temaer: farvecirkel med forbogstaver, nedtonet, "Coming soon".

**Salgsside 75135 Obi-Wan's Jedi Interceptor** (`src/components/views/LegoSet.astro`, `/lego/75135/`):
- Pris **€60** (sat af Thomas). Stand 9/10, 215 dele, 2016, minifigurer Obi-Wan Kenobi + R4-P17.
- Galleri med 9 fotos fra Drive (261118-75135.01–.09), æskens forside først. Klik på små billeder skifter.
- Salgstekst EN+DE, "What's included", specifikationer, SKU 261118-75135.
- Købsknap er grå: "Buying here – coming soon".
- Kilder: cts-app → Lager/Indkøb (stand, note om æske), "261118 Sortering" (alle dele fundet).

**Salgsside 3845 Wild Wool / Shave a Sheep** (`/lego/3845/`, lagt ud 20-11): pris **€15** (Thomas), stand 9/10, 118 dele, 2010, ingen minifigurer ("–").
Galleri 4 fotos (Thomas' forside-foto + Drive 261118-3845.01–.03). Tekst EN+DE (brætspil 2–4 spillere, 5+, 10–15 min. fra æsken). Købsknap grå.
Ikke set live (Claudes miljø kan ikke åbne github.io) – Thomas tjekker.

**Salgsside 70783 Protector of Fire** (`/lego/70783/`, lagt ud 22-11): pris **€30** (Thomas), stand 7/10 (kun pga. kassen: revnet, hul, repareret), 63 dele, 2015, ingen minifigurer.
Poser nye og uåbnede, vejledning som ny, Skull Spider med. Galleri 3 fotos fra Drive (261118-70783.01–.03, kassens forside først). Tekst EN+DE. Købsknap grå.
"Checked piece by piece" står fast på alle salgssider – Thomas har sagt, det er fint (også for 70783).

**Andet:** Retro-, Services- og Privatlivssiderne har endnu den simple "coming soon"-opbygning i ny stil.
Kontakt: "CTS mail – coming soon".

## NÆSTE (forslag – kræver Thomas' ja)
1. Fotos af kasserne til de nye sæt (Thomas tager dem i appen) → galleri. Priser først når sættene er udgået (mål ≥ vejl. +30 %).
2. Købsknapper (eBay-links eller webshop). Evt. ny tekst øverst på LEGO-siden ("Used, complete sets…" – nu også nye sæt).
3. Antal på lager: regenerér `src/data/nyt.ts`, når der sælges (senere automatisk fra arket).
4. Retro Design-siden, CTS-mail, egne tema-fotos, Copenhagen Services, eget domæne, webshop.

## Noter til cts-app
cts-app's `docs/noter/web.md` er opdateret 27-11 (inkl. 70783 og de nye sæt).

## Mangler at blive testet hos Thomas
- iPhone-hjemmeskærmsikonet viste gammel udgave → løsning: slet ikonet og tilføj igen fra Safari.

