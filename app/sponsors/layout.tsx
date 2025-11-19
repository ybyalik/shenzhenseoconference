import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors - Shenzhen SEO Conference 2026',
  description: 'Become a sponsor of the Shenzhen SEO Conference 2026. Connect with 500+ SEO professionals and showcase your brand at the premier international SEO event.',
  openGraph: {
    title: 'Sponsors - Shenzhen SEO Conference 2026',
    description: 'Sponsorship opportunities for the premier international SEO conference in Shenzhen.',
    type: 'website',
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
