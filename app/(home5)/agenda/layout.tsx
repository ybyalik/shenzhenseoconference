import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agenda – Shenzhen SEO Conference 2026',
  description:
    'Five days. Pick your depth. Workshops, masterminds, main stage talks, and VIP networking across the full week of the 2026 Shenzhen SEO Conference.',
  openGraph: {
    title: 'Agenda – Shenzhen SEO Conference 2026',
    description:
      'Workshops, masterminds, main stage, VIP networking. Filter by your ticket tier.',
    type: 'website',
  },
};

export default function AgendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
