import { SPEAKER_PROFILES } from '@/lib/speaker-profiles';

/**
 * The conference as a series, its founder, and the 2026 and 2027 editions.
 * Printed on the home page only: Google asks for organisation-level markup on
 * one page, not every page. The 2027 presale page carries its own single
 * event block that points back here through the @id.
 *
 * Google reads each edition under subEvent as an Event in its own right and
 * warns when the recommended fields are missing, so every edition carries an
 * image, the organiser, who appeared, and (for 2026) the ticket prices that
 * were charged. 2027 has no offers on purpose: nothing is on sale yet, and an
 * invented offer would be worse than one warning.
 */
const SITE = 'https://shenzhenseoconference.com';

const ORGANIZER = { '@type': 'Organization', name: 'Shenzhen SEO Conference', url: `${SITE}/` };

const FOUNDER = {
  '@type': 'Person',
  name: 'JP Zhang',
  alternateName: ['jiangpeng zhang', 'john zhang', '章江鹏', 'Jiangpeng (JP) Zhang'],
  sameAs: [
    'https://www.linkedin.com/in/jiangpengzhang',
    'https://about.me/jiangpengzhang',
    'https://x.com/jiangpengzhang',
  ],
  subjectOf: { '@type': 'WebPage', url: 'https://www.softwarehow.com/about/' },
};

const VENUE = {
  '@type': 'Place',
  name: 'The St. Regis Shenzhen',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 5016 Shennan Road East, Luohu District',
    addressLocality: 'Shenzhen',
    postalCode: '518001',
    addressRegion: 'Guangdong',
    addressCountry: 'CN',
  },
};

const ICON = `${SITE}/assets/brand/icon-dark-multicolour.png`;

// The 2026 prices, as shown on the home page under "For the record".
const PRICES_2026: [string, number][] = [
  ['Standard ticket', 600],
  ['Deluxe ticket', 900],
  ['VIP ticket', 1800],
];

export const eventSeriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  '@id': `${SITE}/#series`,
  name: 'Shenzhen SEO Conference',
  description: "Asia's premier search engine optimization and digital marketing conference series.",
  url: `${SITE}/`,
  image: ICON,
  sameAs: [
    'https://www.google.com/search?kgmid=/g/11zyz5dfq3',
    'https://profile.google.com/cp/Cg0vZy8xMXp5ejVkZnEz',
    'https://www.wikidata.org/wiki/Q141547012',
    'https://www.facebook.com/shenzhenseoconference',
    'https://www.instagram.com/shenzhenseoconference/',
    'https://www.linkedin.com/company/shenzhen-seo-conference/',
    'https://x.com/shenzhenseoconf',
  ],
  founder: FOUNDER,
  organizer: [ORGANIZER, { '@type': 'Person', name: 'JP Zhang', url: 'https://about.me/jiangpengzhang' }],
  subEvent: [
    {
      '@type': 'BusinessEvent',
      name: 'Shenzhen SEO Conference 2026',
      description: 'The 2026 edition of the Shenzhen SEO Conference.',
      url: `${SITE}/`,
      sameAs: 'https://www.google.com/search?kgmid=/g/11z7_8sq0j',
      image: [`${SITE}/og-image.jpg`, ICON],
      startDate: '2026-09-14T09:00:00+08:00',
      endDate: '2026-09-18T18:00:00+08:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: VENUE,
      organizer: ORGANIZER,
      // The 2026 speakers, each pointing at their page on this site.
      performer: SPEAKER_PROFILES.map((s) => ({
        '@type': 'Person',
        name: s.name,
        url: `${SITE}/speakers/${s.slug}`,
      })),
      // The event has happened, so nothing is for sale: the prices stay on the
      // record and are marked as no longer available.
      offers: PRICES_2026.map(([name, price]) => ({
        '@type': 'Offer',
        name,
        price,
        priceCurrency: 'USD',
        url: `${SITE}/#pricing`,
        availability: 'https://schema.org/SoldOut',
      })),
    },
    {
      '@type': 'BusinessEvent',
      name: 'Shenzhen SEO Conference 2027',
      description: 'The upcoming 2027 edition of the Shenzhen SEO Conference.',
      url: `${SITE}/`,
      image: [`${SITE}/og-2027.jpg`, ICON],
      startDate: '2027-09-19T09:00:00+08:00',
      endDate: '2027-09-24T18:00:00+08:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: VENUE,
      organizer: ORGANIZER,
      // The 2027 line-up is not announced; the founder hosts and speaks at
      // every edition.
      performer: { '@type': 'Person', name: 'JP Zhang', url: 'https://about.me/jiangpengzhang' },
    },
  ],
};
