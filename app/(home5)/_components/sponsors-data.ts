// Single source of truth for the 2026 sponsor lineup, shared by the /sponsors
// page and the home page sponsors section so they stay in sync (same sponsors,
// same order). Update logos/order here and both pages reflect it.
//
// About `h`: it is the rendered height in px, and it is NOT the same number for
// every logo in a tier. Logos are drawn at different scales inside their own
// files (some are cropped tight, some carry a lot of empty margin) and their
// letterforms differ in weight, so giving them all the same height makes some
// shout and others disappear. These values were set by measuring how much
// visible ink each logo actually puts on screen and scaling each one until the
// logos within a tier carry the same visual weight: platinum heaviest, then
// gold, then silver, then bronze. Re-measure rather than eyeball if a logo is
// swapped for a new file.

export type Logo = { src: string; alt: string; h: number; href?: string };

export const SPONSORS_2026: {
  platinum: Logo[];
  gold: Logo[];
  silver: Logo[];
  bronze: Logo[];
} = {
  platinum: [
    { src: '/assets/presswhiz.webp', alt: 'PressWhiz', h: 52, href: 'https://presswhizz.com/' },
  ],
  gold: [
    { src: '/assets/ahrefs-logo.webp', alt: 'Ahrefs', h: 42, href: 'https://ahrefs.com/' },
    { src: '/assets/swishdm.webp', alt: 'Swish', h: 37, href: 'https://swishdm.com/' },
    { src: '/assets/topgus.svg', alt: 'TopGus', h: 28, href: 'https://topgus.com/' },
  ],
  silver: [
    { src: '/assets/semrush-logo.webp', alt: 'Semrush', h: 22, href: 'https://www.semrush.com/' },
    { src: '/assets/serpapi-logo.webp', alt: 'SerpApi', h: 34, href: 'https://serpapi.com/' },
    { src: '/assets/notta-logo.webp', alt: 'Notta', h: 40, href: 'https://www.notta.ai/' },
    { src: '/figma-assets/sponsor-dynadot.png', alt: 'Dynadot', h: 35, href: 'https://www.dynadot.com/' },
    { src: '/assets/odys.png', alt: 'Odys', h: 34, href: 'https://odys.global/' },
    // Held below its balanced size (29) because the source file is only 100x20;
    // scaling it further just makes it blurry. Ask ProDENT for a larger logo.
    { src: '/assets/prodent.webp', alt: 'ProDENT', h: 24, href: 'https://www.prodentshop.com/' },
    { src: '/assets/meup.png', alt: 'MeUP', h: 25, href: 'https://meup.com/' },
    { src: '/assets/ecomexperts.webp', alt: 'EcomExperts', h: 31, href: 'https://ecomexperts.au/' },
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'Convert Better', h: 42, href: 'https://convertbetter.co/' },
    { src: '/assets/cloom-tech.webp', alt: 'Cloom Tech', h: 44, href: 'https://cloomtech.com/' },
  ],
  bronze: [
    { src: '/assets/advanced-web-ranking.webp', alt: 'Advanced Web Rankings', h: 29, href: 'https://www.advancedwebranking.com/' },
    { src: '/assets/outreacher-io.webp', alt: 'Outreacher.io', h: 32, href: 'https://outreacher.io/' },
    { src: '/assets/presshero-logo.webp', alt: 'PressHERO', h: 24, href: 'https://presshero.io/' },
  ],
};
