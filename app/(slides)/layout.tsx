import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import '../globals.css';
// Reuses the conference stylesheet so the decks inherit the exact brand
// tokens (colours, General Sans, the .display face) with nothing to drift.
import '../(home5)/home5.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference — Slides',
  // Presenter decks, not pages for the public to find.
  robots: { index: false, follow: false },
};

export default function SlidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} home5-root`} style={{ overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
