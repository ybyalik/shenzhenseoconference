import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './home5.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 — East Meets West',
  description:
    'September 14–18, 2026 at The St. Regis Shenzhen. The premier SEO event connecting Eastern and Western digital markets.',
};

export default function Home5Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${unbounded.variable} home5-root`}>{children}</div>;
}
