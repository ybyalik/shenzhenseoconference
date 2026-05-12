import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import '../globals.css';
import './home5.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 (September 14–18)',
  description:
    'Join 500+ SEO professionals at the premier international conference in Shenzhen. Early bird tickets now available for September 14-18, 2026. Bridge Eastern and Western digital marketing strategies.',
  metadataBase: new URL('https://shenzhenseoconference.com'),
  openGraph: {
    title: 'Shenzhen SEO Conference 2026 (September 14–18)',
    description:
      'Join 500+ SEO professionals at the premier international conference in Shenzhen. September 14-18, 2026.',
    type: 'website',
    url: 'https://shenzhenseoconference.com',
    siteName: 'Shenzhen SEO Conference',
    images: [
      {
        url: 'https://shenzhenseoconference.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shenzhen SEO Conference 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shenzhen SEO Conference 2026 (September 14–18)',
    description:
      'Join 500+ SEO professionals at the premier international conference in Shenzhen. September 14-18, 2026.',
    images: ['https://shenzhenseoconference.com/og-image.jpg'],
  },
};

export default function Home5Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} home5-root`}>{children}</body>
    </html>
  );
}
