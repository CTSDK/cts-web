// LEGO-afdelingen: temaer og sæt til salg.
// Nyt sæt: tilføj et objekt i `sets` og sæt dets tema til `active: true` i `themes`.
// Kilde for 3845: cts-app → Indkøb (stand 9, æske, vejledning, komplet, "Alt er fint"), DB (Games, 2010),
// ren sorteringsliste (118 dele, ingen minifigurer), æskens fotos (2–4 spillere, 5+, 10–15 min.). Pris €15 sat af Thomas 20-11-2026.
// Kilde for 70783: cts-app → Indkøb (stand 7 pga. kassen, poser nye og ubrudte, vejledning 10/10, kasse repareret), "261118 Sortering" (63 dele). Pris €30 sat af Thomas 22-11-2026.
// Kilde for 75135: cts-app → Lager (stand 9, æske) og "261118 Sortering" (alle dele fundet).
import type { Lang } from '../i18n/ui';

type T = Record<Lang, string>;

export interface Theme {
  slug: string;
  name: T;
  mono: string;      // kort mærke i cirklen (egne cirkler – ingen LEGO-billeder)
  color: string;
  set?: string;      // sættet temaet åbner (indtil der er flere sæt i temaet)
  photo?: string;    // foto i cirklen (ellers farve + mærke)
}

export const themes: Theme[] = [
  { slug: 'castle', name: { en: 'Castle', de: 'Castle' }, mono: 'CA', color: 'var(--red)', photo: 'img/lego/themes/castle.jpg' },
  { slug: 'pirates', name: { en: 'Pirates', de: 'Pirates' }, mono: 'PI', color: 'var(--blue)' },
  { slug: 'space', name: { en: 'Space', de: 'Space' }, mono: 'SP', color: 'var(--navy)' },
  { slug: 'town', name: { en: 'Town', de: 'Town' }, mono: 'TO', color: 'var(--mustard)' },
  { slug: 'star-wars', name: { en: 'Star Wars™', de: 'Star Wars™' }, mono: 'SW', color: '#111', set: '75135', photo: 'img/lego/themes/star-wars.jpg' },
  { slug: 'harry-potter', name: { en: 'Harry Potter™', de: 'Harry Potter™' }, mono: 'HP', color: 'var(--orange)' },
  { slug: 'western', name: { en: 'Western', de: 'Western' }, mono: 'WE', color: '#8a5a32' },
  { slug: 'ninja', name: { en: 'Ninja', de: 'Ninja' }, mono: 'NI', color: 'var(--red)' },
  { slug: 'boats', name: { en: 'Boats', de: 'Boote' }, mono: 'BO', color: 'var(--blue)' },
  { slug: 'train', name: { en: 'Train', de: 'Eisenbahn' }, mono: 'TR', color: 'var(--navy)' },
  { slug: 'aquazone', name: { en: 'Aquazone', de: 'Aquazone' }, mono: 'AQ', color: '#2f7f86' },
  { slug: 'games', name: { en: 'Games', de: 'Spiele' }, mono: 'GA', color: 'var(--mustard)', set: '3845', photo: 'img/lego/themes/games.jpg' },
  { slug: 'bionicle', name: { en: 'Bionicle', de: 'Bionicle' }, mono: 'BI', color: 'var(--orange)', set: '70783', photo: 'img/lego/themes/bionicle.jpg' },
];

export interface LegoSet {
  no: string;
  sku: string;
  name: string;
  theme: string;
  subtheme?: T;
  year: number;
  pieces: number;
  minifigs: string[];
  condition: number; // 1–10
  priceEur?: number;
  photos?: { file: string; thumb: string; w: number; h: number; alt: T }[];
  intro: T;
  text: T;
  included: Record<Lang, string[]>;
}

export const sets: LegoSet[] = [
  {
    no: '75135',
    sku: '261118-75135',
    name: "Obi-Wan's Jedi Interceptor",
    theme: 'star-wars',
    subtheme: { en: 'Episode III – Revenge of the Sith', de: 'Episode III – Die Rache der Sith' },
    year: 2016,
    pieces: 215,
    minifigs: ['Obi-Wan Kenobi', 'R4‑P17'],
    condition: 9,
    priceEur: 60, // sat af Thomas 20-11-2026
    photos: [
      { file: 'img/lego/75135/02.jpg', thumb: 'img/lego/75135/t-02.jpg', w: 1600, h: 1109, alt: { en: 'The box, front', de: 'Der Karton, Vorderseite' } },
      { file: 'img/lego/75135/01.jpg', thumb: 'img/lego/75135/t-01.jpg', w: 1488, h: 1600, alt: { en: 'Everything included: box, building instructions, minifigures and the sorted bags', de: 'Alles dabei: Karton, Bauanleitung, Minifiguren und die sortierten Beutel' } },
      { file: 'img/lego/75135/03.jpg', thumb: 'img/lego/75135/t-03.jpg', w: 1600, h: 1197, alt: { en: 'The box, back – with the repaired cracks', de: 'Der Karton, Rückseite – mit den reparierten Rissen' } },
      { file: 'img/lego/75135/04.jpg', thumb: 'img/lego/75135/t-04.jpg', w: 1530, h: 1600, alt: { en: 'The box with side', de: 'Der Karton mit Seitenansicht' } },
      { file: 'img/lego/75135/05.jpg', thumb: 'img/lego/75135/t-05.jpg', w: 1595, h: 1600, alt: { en: 'The box with side', de: 'Der Karton mit Seitenansicht' } },
      { file: 'img/lego/75135/06.jpg', thumb: 'img/lego/75135/t-06.jpg', w: 1600, h: 1063, alt: { en: 'The box with side', de: 'Der Karton mit Seitenansicht' } },
      { file: 'img/lego/75135/07.jpg', thumb: 'img/lego/75135/t-07.jpg', w: 1600, h: 1381, alt: { en: 'Building instructions, minifigures and the sorted bags', de: 'Bauanleitung, Minifiguren und die sortierten Beutel' } },
      { file: 'img/lego/75135/08.jpg', thumb: 'img/lego/75135/t-08.jpg', w: 1600, h: 1081, alt: { en: 'The building instructions', de: 'Die Bauanleitung' } },
      { file: 'img/lego/75135/09.jpg', thumb: 'img/lego/75135/t-09.jpg', w: 1284, h: 1600, alt: { en: 'All parts sorted into bags, with Obi-Wan Kenobi and R4‑P17', de: 'Alle Teile in Beuteln sortiert, mit Obi-Wan Kenobi und R4‑P17' } },
    ],
    intro: {
      en: 'Obi-Wan Kenobi’s red and grey Jedi Interceptor – complete, checked piece by piece and with the original box.',
      de: 'Obi-Wan Kenobis rot-grauer Jedi Interceptor – vollständig, Teil für Teil geprüft und mit Originalkarton.',
    },
    text: {
      en: 'Take to the skies of the Clone Wars with Obi-Wan Kenobi’s Jedi Interceptor from Revenge of the Sith. The set from 2016 comes with Obi-Wan Kenobi and his astromech droid R4‑P17 and two spring-loaded shooters.\n\nWe have checked this copy piece by piece against the official parts list – every single part is there. The building instructions, the sticker sheet and the original box are included. The box has a few cracks on the back that have been repaired; apart from that, the set is in fantastic condition.',
      de: 'Flieg mit Obi-Wan Kenobis Jedi Interceptor aus „Die Rache der Sith“ durch die Klonkriege. Das Set von 2016 enthält Obi-Wan Kenobi und seinen Astromech-Droiden R4‑P17 sowie zwei Federshooter.\n\nWir haben dieses Exemplar Teil für Teil anhand der offiziellen Teileliste geprüft – jedes einzelne Teil ist vorhanden. Bauanleitung, Stickerbogen und Originalkarton sind dabei. Der Karton hat auf der Rückseite einige reparierte Risse; ansonsten ist das Set in fantastischem Zustand.',
    },
    included: {
      en: ['All parts – checked against the parts list', 'Minifigures: Obi-Wan Kenobi and R4‑P17', 'Building instructions', 'Sticker sheet', 'Original box (repaired cracks on the back)'],
      de: ['Alle Teile – anhand der Teileliste geprüft', 'Minifiguren: Obi-Wan Kenobi und R4‑P17', 'Bauanleitung', 'Stickerbogen', 'Originalkarton (reparierte Risse auf der Rückseite)'],
    },
  },
  {
    no: '3845',
    sku: '261118-3845',
    name: 'Wild Wool / Shave a Sheep',
    theme: 'games',
    year: 2010,
    pieces: 118,
    minifigs: [],
    condition: 9,
    priceEur: 15, // sat af Thomas 20-11-2026
    photos: [
      { file: 'img/lego/3845/01.jpg', thumb: 'img/lego/3845/t-01.jpg', w: 1200, h: 1600, alt: { en: 'The box, front', de: 'Der Karton, Vorderseite' } },
      { file: 'img/lego/3845/02.jpg', thumb: 'img/lego/3845/t-02.jpg', w: 1201, h: 1600, alt: { en: 'The box, front', de: 'Der Karton, Vorderseite' } },
      { file: 'img/lego/3845/03.jpg', thumb: 'img/lego/3845/t-03.jpg', w: 1382, h: 1600, alt: { en: 'The box with side', de: 'Der Karton mit Seitenansicht' } },
      { file: 'img/lego/3845/04.jpg', thumb: 'img/lego/3845/t-04.jpg', w: 1600, h: 1072, alt: { en: 'Game rules, building instructions and the sorted bags', de: 'Spielregeln, Bauanleitung und die sortierten Beutel' } },
    ],
    intro: {
      en: 'A LEGO board game from 2010 – complete, checked piece by piece and with the original box.',
      de: 'Ein LEGO Brettspiel von 2010 – vollständig, Teil für Teil geprüft und mit Originalkarton.',
    },
    text: {
      en: 'Shave a Sheep is a LEGO board game from 2010 for 2–4 players aged 5 and up; a game takes 10–15 minutes (as stated on the box). You build the game yourself – the sheep, the wolf and the LEGO die – and then play.\n\nWe have checked this copy piece by piece against the official parts list – all 118 parts are there. The building instructions, the game rules and the original box are included. The set is in very good condition.',
      de: 'Shave a Sheep ist ein LEGO Brettspiel von 2010 für 2–4 Spieler ab 5 Jahren; eine Partie dauert 10–15 Minuten (laut Karton). Das Spiel wird selbst gebaut – die Schafe, der Wolf und der LEGO Würfel – und dann wird gespielt.\n\nWir haben dieses Exemplar Teil für Teil anhand der offiziellen Teileliste geprüft – alle 118 Teile sind vorhanden. Bauanleitung, Spielregeln und Originalkarton sind dabei. Das Set ist in sehr gutem Zustand.',
    },
    included: {
      en: ['All 118 parts – checked against the parts list', 'LEGO die', 'Building instructions', 'Game rules', 'Original box'],
      de: ['Alle 118 Teile – anhand der Teileliste geprüft', 'LEGO Würfel', 'Bauanleitung', 'Spielregeln', 'Originalkarton'],
    },
  },
  {
    no: '70783',
    sku: '261118-70783',
    name: 'Protector of Fire',
    theme: 'bionicle',
    year: 2015,
    pieces: 63,
    minifigs: [],
    condition: 7, // kassen trækker ned – dele og vejledning 10/10
    priceEur: 30, // sat af Thomas 22-11-2026
    photos: [
      { file: 'img/lego/70783/01.jpg', thumb: 'img/lego/70783/t-01.jpg', w: 1023, h: 1600, alt: { en: 'The box, front – with the torn corner', de: 'Der Karton, Vorderseite – mit der eingerissenen Ecke' } },
      { file: 'img/lego/70783/02.jpg', thumb: 'img/lego/70783/t-02.jpg', w: 1310, h: 1600, alt: { en: 'Everything included: building instructions and the unopened bags', de: 'Alles dabei: Bauanleitung und die ungeöffneten Beutel' } },
      { file: 'img/lego/70783/03.jpg', thumb: 'img/lego/70783/t-03.jpg', w: 1600, h: 1188, alt: { en: 'The building instructions', de: 'Die Bauanleitung' } },
    ],
    intro: {
      en: 'The fiery Protector of Fire from 2015 – with new, unopened bags, building instructions and the original box.',
      de: 'Der feurige Protector of Fire von 2015 – mit neuen, ungeöffneten Beuteln, Bauanleitung und Originalkarton.',
    },
    text: {
      en: 'The Protector of Fire guards the Region of Fire on the island of Okoto. The figure from 2015 has a rapid shooter that fires six fire balls, flame weapons – and comes with a Skull Spider to battle.\n\nThe parts are in their original bags, new and unopened, and the building instructions are as new. The box has a tear and a hole; we have repaired it as well as we could – which is why we rate the set 7/10.',
      de: 'Der Protector of Fire bewacht die Region des Feuers auf der Insel Okoto. Die Figur von 2015 hat einen Schnellshooter, der sechs Feuerkugeln abfeuert, Flammenwaffen – und eine Skull Spider zum Kämpfen.\n\nDie Teile sind in ihren Originalbeuteln, neu und ungeöffnet, und die Bauanleitung ist wie neu. Der Karton hat einen Riss und ein Loch; wir haben ihn so gut wie möglich repariert – deshalb bewerten wir das Set mit 7/10.',
    },
    included: {
      en: ['All 63 parts in new, unopened bags', 'Skull Spider', 'Building instructions (as new)', 'Original box (torn and repaired)'],
      de: ['Alle 63 Teile in neuen, ungeöffneten Beuteln', 'Skull Spider', 'Bauanleitung (wie neu)', 'Originalkarton (eingerissen und repariert)'],
    },
  },
];

export const getSet = (no: string) => sets.find((s) => s.no === no)!;
export const themeOf = (slug: string) => themes.find((t) => t.slug === slug)!;

// Pris vist som € 45,00 (de) / €45.00 (en)
export const formatPrice = (eur: number, lang: Lang) =>
  new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(eur);
