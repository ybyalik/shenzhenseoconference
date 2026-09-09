import type { Metadata } from 'next';

/**
 * A layout only so this experiment can carry its own metadata: the page itself
 * is a client component and can't export any.
 *
 * A design trial of Day 1 as two columns, sitting alongside the real /agenda so
 * the two can be compared side by side. It lives at /agenda-2col rather than
 * /agenda2 because (home3) already owns that path. Kept out of search results
 * and out of the sitemap; delete the whole folder once a layout wins.
 */
export const metadata: Metadata = {
  title: 'Agenda (two-column trial) · Shenzhen SEO Conference 2026',
  robots: { index: false, follow: false },
};

export default function AgendaTwoColumnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
