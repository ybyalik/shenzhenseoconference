import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 – Meet the Industry Leaders',
  description:
    'Meet the expert speakers from the 2025 Shenzhen SEO Conference. Industry leaders sharing insights on international SEO, digital marketing, and cross-border strategies.',
  openGraph: {
    title: 'Shenzhen SEO Conference 2026 – Meet the Industry Leaders',
    description: 'Meet the expert speakers from the 2025 Shenzhen SEO Conference.',
    type: 'website',
  },
};

export default function Speakers5Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
