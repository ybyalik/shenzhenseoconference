import type { Metadata } from 'next';

/**
 * A layout only so this experiment can carry its own metadata: the page itself
 * is a client component and can't export any.
 *
 * A design trial of Day 1 as one list with All / Workshops / City Tours tabs,
 * defaulting to All. Sits alongside the real /agenda so they can be compared.
 * Kept out of search results and out of the sitemap; delete the whole folder
 * once a layout wins.
 */
export const metadata: Metadata = {
  title: 'Agenda (tabbed trial) · Shenzhen SEO Conference 2026',
  robots: { index: false, follow: false },
};

export default function AgendaTabsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
