import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit Shenzhen – Shenzhen SEO Conference 2026',
  description:
    'First time in Shenzhen? Everything you need to plan the trip and explore the city: visa, flights, payments, connection, neighborhoods, food, nature, and side trips.',
  openGraph: {
    title: 'Visit Shenzhen – Shenzhen SEO Conference 2026',
    description:
      'Visa, flights, payments, connection, and what to see while you are in Shenzhen for the 2026 conference.',
    type: 'website',
  },
};

export default function VisitShenzhenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
