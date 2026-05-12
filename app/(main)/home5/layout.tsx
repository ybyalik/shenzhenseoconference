import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 (legacy preview)',
  robots: { index: false, follow: false },
};

export default function Home5LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
