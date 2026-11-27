// Alle tekster på siden – engelsk (en) og tysk (de).
// Nyt sprog: tilføj en blok her + en mappe i src/pages + locales i astro.config.mjs.
export const languages = { en: 'English', de: 'Deutsch' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'site.name': 'Copenhagen Treasures & Services',
    'site.tagline': 'Treasures found, restored and passed on – from Copenhagen, Denmark',
    'nav.home': 'Home',
    'nav.lego': 'LEGO®',
    'nav.retro': 'Retro Design',
    'nav.services': 'Copenhagen Services',
    'home.title': 'Welcome to CTS',
    'home.pre': 'Welcome to',
    'issue.left': 'Copenhagen · Denmark',
    'issue.right': 'Issue No. 01',
    'strap.left': 'Found · Restored · Passed on',
    'intro.a': 'A small Danish business with a fondness for things that were made to last.',
    'intro.b': 'We find them, sort them, restore them and give them a new home.',
    'side.a': 'About CTS',
    'home.intro':
      'A small Danish business with a fondness for things that were made to last. We find them, sort them, restore them and give them a new home.',
    'home.choose': 'Choose a department',
    'door.lego.title': 'LEGO®',
    'door.lego.text': 'Used, complete sets – checked piece by piece.',
    'door.retro.title': 'Retro Design',
    'door.retro.text': 'Lamps, furniture and other Scandinavian classics.',
    'door.services.title': 'Copenhagen Services',
    'door.services.text': 'Something new is on its way.',
    'door.enter': 'Enter',
    'soon': 'Coming soon',
    'lego.title': 'LEGO® – used complete sets',
    'lego.text':
      'Every set is sorted and checked against its parts list before it is offered for sale. Our collection will be shown here soon. Until then you can find our sets on eBay.',
    'lego.themes': 'Themes',
    'lego.lead': 'Used, complete sets. Every set is sorted and checked against its parts list before it is offered for sale.',
    'lego.choose': 'Choose a theme',
    'lego.new': '1 set',
    'lego.sets': 'sets',
    'cond.sealed': 'New, sealed',
    'cond.used': 'Used',
    'cond.sealed.short': 'New',
    'set.sealed': 'Factory sealed – never opened',
    'theme.sets': 'Sets in this theme',
    'set.number': 'Set no.',
    'set.pieces': 'Pieces',
    'set.year': 'Year',
    'set.minifigs': 'Minifigures',
    'set.condition': 'Condition',
    'set.instock': 'In stock – 1 copy',
    'set.price': 'Price',
    'set.price.soon': 'Coming soon',
    'set.buy.soon': 'Buying here – coming soon',
    'set.photo.soon': 'Photos coming soon',
    'set.details': 'About the set',
    'set.included': 'What’s included',
    'set.specs': 'Specifications',
    'set.checked': 'Checked piece by piece',
    'set.back': 'All themes',
    'retro.title': 'Retro Design',
    'retro.text':
      'Raadvad bread slicers, restored lamps, furniture and other well-made things from the past. The collection will be shown here soon.',
    'services.title': 'Copenhagen Services',
    'services.text': 'This part of CTS is still being prepared. Please come back later.',
    'contact.title': 'Contact',
    'contact.text': 'CTS mail – coming soon.',
    'privacy.link': 'Privacy',
    'privacy.title': 'Privacy',
    'privacy.text1':
      'This website does not use cookies, tracking or analytics, and it does not collect any personal data.',
    'privacy.text2': 'Fonts and images are served from this site itself – nothing is loaded from third parties.',
    'privacy.text3': 'If you contact us, we only use your information to answer you.',
    'footer.lego':
      'LEGO® is a trademark of the LEGO Group, which does not sponsor, authorise or endorse this website.',
    'footer.country': 'Denmark',
    'back': 'Back to the front page',
  },
  de: {
    'site.name': 'Copenhagen Treasures & Services',
    'site.tagline': 'Schätze gefunden, aufgearbeitet und weitergegeben – aus Kopenhagen, Dänemark',
    'nav.home': 'Start',
    'nav.lego': 'LEGO®',
    'nav.retro': 'Retro Design',
    'nav.services': 'Copenhagen Services',
    'home.title': 'Willkommen bei CTS',
    'home.pre': 'Willkommen bei',
    'issue.left': 'Kopenhagen · Dänemark',
    'issue.right': 'Ausgabe Nr. 01',
    'strap.left': 'Gefunden · Aufgearbeitet · Weitergegeben',
    'intro.a': 'Ein kleines dänisches Unternehmen mit einer Vorliebe für Dinge, die für die Ewigkeit gemacht wurden.',
    'intro.b': 'Wir finden sie, sortieren sie, arbeiten sie auf und geben ihnen ein neues Zuhause.',
    'side.a': 'Über CTS',
    'home.intro':
      'Ein kleines dänisches Unternehmen mit einer Vorliebe für Dinge, die für die Ewigkeit gemacht wurden. Wir finden sie, sortieren sie, arbeiten sie auf und geben ihnen ein neues Zuhause.',
    'home.choose': 'Wählen Sie eine Abteilung',
    'door.lego.title': 'LEGO®',
    'door.lego.text': 'Gebrauchte, vollständige Sets – Teil für Teil geprüft.',
    'door.retro.title': 'Retro Design',
    'door.retro.text': 'Lampen, Möbel und andere skandinavische Klassiker.',
    'door.services.title': 'Copenhagen Services',
    'door.services.text': 'Etwas Neues ist unterwegs.',
    'door.enter': 'Eintreten',
    'soon': 'Demnächst',
    'lego.title': 'LEGO® – gebrauchte, vollständige Sets',
    'lego.text':
      'Jedes Set wird sortiert und anhand der Teileliste geprüft, bevor es zum Verkauf angeboten wird. Unsere Sammlung wird hier bald gezeigt. Bis dahin finden Sie unsere Sets auf eBay.',
    'lego.themes': 'Themen',
    'lego.lead': 'Gebrauchte, vollständige Sets. Jedes Set wird sortiert und anhand der Teileliste geprüft, bevor es zum Verkauf angeboten wird.',
    'lego.choose': 'Wählen Sie ein Thema',
    'lego.new': '1 Set',
    'lego.sets': 'Sets',
    'cond.sealed': 'Neu & OVP',
    'cond.used': 'Gebraucht',
    'cond.sealed.short': 'Neu',
    'set.sealed': 'Original versiegelt – nie geöffnet',
    'theme.sets': 'Sets in diesem Thema',
    'set.number': 'Set-Nr.',
    'set.pieces': 'Teile',
    'set.year': 'Jahr',
    'set.minifigs': 'Minifiguren',
    'set.condition': 'Zustand',
    'set.instock': 'Auf Lager – 1 Exemplar',
    'set.price': 'Preis',
    'set.price.soon': 'Folgt in Kürze',
    'set.buy.soon': 'Kauf hier – folgt in Kürze',
    'set.photo.soon': 'Fotos folgen in Kürze',
    'set.details': 'Über das Set',
    'set.included': 'Lieferumfang',
    'set.specs': 'Details',
    'set.checked': 'Teil für Teil geprüft',
    'set.back': 'Alle Themen',
    'retro.title': 'Retro Design',
    'retro.text':
      'Raadvad-Brotschneidemaschinen, restaurierte Lampen, Möbel und andere gut gemachte Dinge aus vergangenen Zeiten. Die Sammlung wird hier bald gezeigt.',
    'services.title': 'Copenhagen Services',
    'services.text': 'Dieser Bereich von CTS wird noch vorbereitet. Bitte schauen Sie später wieder vorbei.',
    'contact.title': 'Kontakt',
    'contact.text': 'CTS-Mail – folgt in Kürze.',
    'privacy.link': 'Datenschutz',
    'privacy.title': 'Datenschutz',
    'privacy.text1':
      'Diese Website verwendet keine Cookies, kein Tracking und keine Analysedienste und erhebt keine personenbezogenen Daten.',
    'privacy.text2':
      'Schriften und Bilder werden von dieser Website selbst geladen – nichts wird von Dritten geladen.',
    'privacy.text3': 'Wenn Sie uns kontaktieren, verwenden wir Ihre Angaben nur, um Ihnen zu antworten.',
    'footer.lego':
      'LEGO® ist eine Marke der LEGO Gruppe, die diese Website weder sponsert noch autorisiert oder unterstützt.',
    'footer.country': 'Dänemark',
    'back': 'Zurück zur Startseite',
  },
} as const;

export type Key = keyof (typeof ui)['en'];

export function t(lang: Lang, key: Key): string {
  return ui[lang][key] ?? ui.en[key];
}

// Bygger en adresse med /cts-web/ foran og /de/ for tysk.
export function href(lang: Lang, slug = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const path = slug ? `/${slug}/` : '/';
  return `${base}${prefix}${path}`;
}

export function asset(file: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${file}`;
}
