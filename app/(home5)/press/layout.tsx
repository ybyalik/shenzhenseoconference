import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Kit – Shenzhen SEO Conference 2026',
  description:
    "Media resources, brand assets, and information about the world's most practitioner-focused SEO conference.",
  openGraph: {
    title: 'Press Kit – Shenzhen SEO Conference 2026',
    description:
      'Media resources, brand assets, and press contact for the Shenzhen SEO Conference.',
    type: 'website',
  },
};

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
