import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gary Illyes – Speaker – Shenzhen SEO Conference 2026',
  description:
    'Gary Illyes, Analyst at Google Search, speaks at the Shenzhen SEO Conference 2026. Session: Inside Google Search Relations, Tue Sep 15 at The St. Regis Shenzhen.',
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Gary Illyes – Speaker – Shenzhen SEO Conference 2026',
    description:
      'Gary Illyes, Analyst at Google Search, speaks at the Shenzhen SEO Conference 2026.',
    type: 'profile',
  },
};

export default function SpeakerProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
