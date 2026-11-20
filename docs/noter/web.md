# CTS Web – status og næste skridt

Sidst opdateret: 20-11-2026. Live: https://ctsdk.github.io/cts-web/ (seneste udgivelse `32d5d8e`, grøn).

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
- Øvrige temaer: farvecirkel med forbogstaver, nedtonet, "Coming soon".

**Salgsside 75135 Obi-Wan's Jedi Interceptor** (`src/components/views/LegoSet.astro`, `/lego/75135/`):
- Pris **€60** (sat af Thomas). Stand 9/10, 215 dele, 2016, minifigurer Obi-Wan Kenobi + R4-P17.
- Galleri med 9 fotos fra Drive (261118-75135.01–.09), æskens forside først. Klik på små billeder skifter.
- Salgstekst EN+DE, "What's included", specifikationer, SKU 261118-75135.
- Købsknap er grå: "Buying here – coming soon".
- Kilder: cts-app → Lager/Indkøb (stand, note om æske), "261118 Sortering" (alle dele fundet).

**Andet:** Retro-, Services- og Privatlivssiderne har endnu den simple "coming soon"-opbygning i ny stil.
Kontakt: "CTS mail – coming soon".

## NÆSTE (forslag – kræver Thomas' ja)
1. **Købsknap for 75135:** link til eBay-opslaget (Thomas sender link) eller vent på webshop.
2. **Flere sæt:** tilføj i `src/data/lego.ts` (`sets` + `photo`/`set` på temaet). Når et tema får flere sæt → egen temaside med oversigt.
3. **Egne fotos til tema-cirklerne** (minifigur pr. tema, ensfarvet baggrund) → Drive "CTS - Webpage → Indbakke til Claude".
4. **Retro Design-siden** i samme stil som LEGO (Thomas' fotos af lamper/møbler).
5. **CTS-mail** i kontakt + bund.
6. Senere: Copenhagen Services, eget domæne, webshop (ordrebekræftelse efter sættet er fjernet fra eBay).

## Mangler at blive testet hos Thomas
- iPhone-hjemmeskærmsikonet viste gammel udgave → løsning: slet ikonet og tilføj igen fra Safari.

## Ikke nået i dag
- Noterne i `CTSDK/cts-app` (hovednote + `docs/noter/web.md`) er **ikke** opdateret – denne samtale havde ikke adgang til det repo.
  Næste samtale med adgang til cts-app: kopiér/henvis til denne fil.
