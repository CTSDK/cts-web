// LEGO-afdelingen: temaer og sæt til salg.
// Nyt sæt: tilføj et objekt i `sets` og sæt dets tema til `active: true` i `themes`.
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
  { slug: 'castle', name: { en: 'Castle', de: 'Castle' }, mono: 'CA', color: 'var(--red)' },
  { slug: 'pirates', name: { en: 'Pirates', de: 'Pirates' }, mono: 'PI', color: 'var(--blue)' },
  { slug: 'space', name: { en: 'Space', de: 'Space' }, mono: 'SP', color: 'var(--navy)' },
  { slug: 'town', name: { en: 'Town', de: 'Town' }, mono: 'TO', color: 'var(--mustard)' },
  { slug: 'star-wars', name: { en: 'Star Wars™', de: 'Star Wars™' }, mono: 'SW', color: '#111', set: '75135', photo: 'img/lego/75135/t-02.jpg' },
  { slug: 'harry-potter', name: { en: 'Harry Potter™', de: 'Harry Potter™' }, mono: 'HP', color: 'var(--orange)' },
  { slug: 'western', name: { en: 'Western', de: 'Western' }, mono: 'WE', color: '#8a5a32' },
  { slug: 'ninja', name: { en: 'Ninja', de: 'Ninja' }, mono: 'NI', color: 'var(--red)' },
  { slug: 'boats', name: { en: 'Boats', de: 'Boote' }, mono: 'BO', color: 'var(--blue)' },
  { slug: 'train', name: { en: 'Train', de: 'Eisenbahn' }, mono: 'TR', color: 'var(--navy)' },
  { slug: 'aquazone', name: { en: 'Aquazone', de: 'Aquazone' }, mono: 'AQ', color: '#2f7f86' },
];

export interface LegoSet {
  no: string;
  sku: string;
  name: string;
  theme: string;
  subtheme: T;
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
];

export const getSet = (no: string) => sets.find((s) => s.no === no)!;
export const themeOf = (slug: string) => themes.find((t) => t.slug === slug)!;

// Pris vist som € 45,00 (de) / €45.00 (en)
export const formatPrice = (eur: number, lang: Lang) =>
  new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(eur);
