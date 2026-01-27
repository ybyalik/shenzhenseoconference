import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Shenzhen SEO Conference 2026',
  description: 'Get in touch with the Shenzhen SEO Conference team. Request business invitation letters for visa applications or send us your questions and inquiries.',
  openGraph: {
    title: 'Contact Us - Shenzhen SEO Conference 2026',
    description: 'Get in touch with us for inquiries, visa invitation letters, and general questions.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
