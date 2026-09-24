import type { Metadata } from 'next';

const TITLE = 'Shenzhen SEO Conference 2027 – Super Early Bird';
const DESC =
  'Super Early Bird is open for the 2027 Shenzhen SEO Conference, 19 to 24 September 2027. ' +
  '30% off, strictly 400 tickets, fully refundable until 20 August 2027.';

const OG = 'https://shenzhenseoconference.com/og-2027.jpg';
const OG_ALT =
  'Shenzhen SEO Conference 2027, Super Early Bird 30% off, 19 to 24 September 2027, ' +
  'strictly 400 tickets, ends 30 September.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://shenzhenseoconference.com/2027' },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'website',
    url: 'https://shenzhenseoconference.com/2027',
    siteName: 'Shenzhen SEO Conference',
    // Spelled out here rather than inherited: setting openGraph on a page
    // REPLACES the parent block rather than merging into it, so leaving this
    // out is what left /2027 sharing with no image at all.
    images: [{ url: OG, width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [OG],
  },
};

export default function PresaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
