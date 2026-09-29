/**
 * The conference as a series, its founder, and the 2026 and 2027 editions.
 * Printed on the home page only: Google asks for organisation-level markup on
 * one page, not every page. The 2027 presale page carries its own single
 * event block that points back here through the @id.
 *
 * Plain JSON, kept as data rather than markup so it can be checked and edited
 * without touching the layout.
 */
export const eventSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "@id": "https://shenzhenseoconference.com/#series",
  "name": "Shenzhen SEO Conference",
  "description": "Asia's premier search engine optimization and digital marketing conference series.",
  "url": "https://shenzhenseoconference.com/",
  "image": "https://shenzhenseoconference.com/assets/brand/icon-dark-multicolour.png",
  "sameAs": [
    "https://www.google.com/search?kgmid=/g/11zyz5dfq3",
    "https://profile.google.com/cp/Cg0vZy8xMXp5ejVkZnEz",
    "https://www.wikidata.org/wiki/Q141547012",
    "https://www.facebook.com/shenzhenseoconference",
    "https://www.instagram.com/shenzhenseoconference/",
    "https://www.linkedin.com/company/shenzhen-seo-conference/",
    "https://x.com/shenzhenseoconf"
  ],
  "founder": {
    "@type": "Person",
    "name": "JP Zhang",
    "alternateName": [
      "jiangpeng zhang",
      "john zhang",
      "章江鹏",
      "Jiangpeng (JP) Zhang"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/jiangpengzhang",
      "https://about.me/jiangpengzhang",
      "https://x.com/jiangpengzhang"
    ],
    "subjectOf": {
      "@type": "WebPage",
      "url": "https://www.softwarehow.com/about/"
    }
  },
  "organizer": [
    {
      "@type": "Organization",
      "name": "Shenzhen SEO Conference",
      "url": "https://shenzhenseoconference.com/"
    },
    {
      "@type": "Person",
      "name": "JP Zhang",
      "url": "https://about.me/jiangpengzhang"
    }
  ],
  "subEvent": [
    {
      "@type": "BusinessEvent",
      "name": "Shenzhen SEO Conference 2026",
      "description": "The 2026 edition of the Shenzhen SEO Conference.",
      "url": "https://shenzhenseoconference.com/",
      "sameAs": "https://www.google.com/search?kgmid=/g/11z7_8sq0j",
      "startDate": "2026-09-14T09:00:00+08:00",
      "endDate": "2026-09-18T18:00:00+08:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "The St. Regis Shenzhen",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 5016 Shennan Road East, Luohu District",
          "addressLocality": "Shenzhen",
          "postalCode": "518001",
          "addressRegion": "Guangdong",
          "addressCountry": "CN"
        }
      }
    },
    {
      "@type": "BusinessEvent",
      "name": "Shenzhen SEO Conference 2027",
      "description": "The upcoming 2027 edition of the Shenzhen SEO Conference.",
      "url": "https://shenzhenseoconference.com/",
      "startDate": "2027-09-19T09:00:00+08:00",
      "endDate": "2027-09-24T18:00:00+08:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "The St. Regis Shenzhen",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 5016 Shennan Road East, Luohu District",
          "addressLocality": "Shenzhen",
          "postalCode": "518001",
          "addressRegion": "Guangdong",
          "addressCountry": "CN"
        }
      }
    }
  ]
} as const;
