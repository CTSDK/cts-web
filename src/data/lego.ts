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
}

export const themes: Theme[] = [
  { slug: 'castle', name: { en: 'Castle', de: 'Castle' }, mono: 'CA', color: 'var(--red)' },
  { slug: 'pirates', name: { en: 'Pirates', de: 'Pirates' }, mono: 'PI', color: 'var(--blue)' },
  { slug: 'space', name: { en: 'Space', de: 'Space' }, mono: 'SP', color: 'var(--navy)' },
  { slug: 'town', name: { en: 'Town', de: 'Town' }, mono: 'TO', color: 'var(--mustard)' },
  { slug: 'star-wars', name: { en: 'Star Wars™', de: 'Star Wars™' }, mono: 'SW', color: '#111', set: '75135' },
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
