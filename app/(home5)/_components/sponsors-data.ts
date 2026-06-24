// Single source of truth for the 2026 sponsor lineup, shared by the /sponsors
// page and the home page sponsors section so they stay in sync (same sponsors,
// same order). Update logos/order here and both pages reflect it.

export type Logo = { src: string; alt: string; h: number };

export const SPONSORS_2026: {
  platinum: Logo[];
  gold: Logo[];
  silver: Logo[];
  bronze: Logo[];
} = {
  platinum: [
    { src: '/assets/presswhiz.webp', alt: 'PressWhiz', h: 56 },
  ],
  gold: [
    { src: '/assets/swishdm.webp', alt: 'Swish', h: 48 },
    { src: '/assets/topgus.svg', alt: 'TopGus', h: 44 },
  ],
  silver: [
    { src: '/figma-assets/sponsor-dynadot.png', alt: 'Dynadot', h: 36 },
    { src: '/assets/odys.png', alt: 'Odys', h: 36 },
    { src: '/assets/prodent.webp', alt: 'ProDENT', h: 36 },
    { src: '/assets/ecomexperts.webp', alt: 'EcomExperts', h: 36 },
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'Convert Better', h: 36 },
  ],
  bronze: [
    { src: '/assets/advanced-web-ranking.webp', alt: 'Advanced Web Rankings', h: 32 },
    { src: '/assets/cloom-tech.webp', alt: 'Cloom Tech', h: 32 },
  ],
};
