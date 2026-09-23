import type { Metadata } from 'next';

const TITLE = 'Shenzhen SEO Conference 2027 – Super Early Bird';
const DESC =
  'Super Early Bird is open for the 2027 Shenzhen SEO Conference, 19 to 24 September 2027. ' +
  '30% off, strictly 400 tickets, fully refundable until 20 August 2027.';

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
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
};

export default function PresaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
