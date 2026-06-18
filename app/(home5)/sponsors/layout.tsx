import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 – Sponsorship Opportunities',
  description:
    "Sponsor China's largest international SEO conference. Reach 600+ SEO leaders from East and West with platinum, gold, and silver sponsorship tiers at The St. Regis Shenzhen, September 14-18, 2026.",
  openGraph: {
    title: 'Shenzhen SEO Conference 2026 – Sponsorship Opportunities',
    description:
      "Sponsor China's largest international SEO conference. Reach 600+ SEO leaders from East and West, September 14-18, 2026.",
    type: 'website',
  },
};

export default function Sponsors5Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
