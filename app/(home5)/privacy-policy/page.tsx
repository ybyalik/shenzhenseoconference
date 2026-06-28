import type { Metadata } from 'next';
import Link from 'next/link';

import { BackToTop, Footer, Nav } from '../_components/shared';

export const metadata: Metadata = {
  title: 'Privacy Policy – Shenzhen SEO Conference 2026',
  description:
    'How the Shenzhen SEO Conference collects, uses, and safeguards your personal information when you visit our website, buy a ticket, or attend the event.',
  openGraph: {
    title: 'Privacy Policy – Shenzhen SEO Conference 2026',
    description:
      'How the Shenzhen SEO Conference collects, uses, and safeguards your personal information.',
    type: 'website',
  },
};

const body = {
  color: '#F9F9F9',
  opacity: 0.8,
  fontFamily: 'General Sans, system-ui, sans-serif',
  fontSize: 16,
  fontWeight: 500 as const,
  lineHeight: '180%',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className="display uppercase text-[22px] md:text-[26px] leading-[130%]"
        style={{ color: '#F9F9F9', fontWeight: 700, letterSpacing: '0.01em' }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3" style={body}>
          <span
            aria-hidden
            className="mt-[10px] shrink-0"
            style={{ width: 7, height: 7, borderRadius: 9999, background: '#5DAEDB' }}
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#03060d] min-h-screen">
      <Nav linkBase="/" />

      {/* Header */}
      <section className="bg-[#03060d]">
        <div className="container pt-[120px] md:pt-[160px] pb-10 md:pb-14">
          <div
            className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
            style={{
              color: '#EB3030',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 700,
              lineHeight: '150%',
            }}
          >
            Legal
          </div>
          <h1
            className="display uppercase text-white"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 600,
              lineHeight: '110%',
              letterSpacing: '-1px',
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="mt-5"
            style={{
              color: '#F9F9F9',
              opacity: 0.6,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Last Updated: June 28, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#03060d]">
        <div className="container pb-20 md:pb-28">
          <div className="max-w-[820px] flex flex-col gap-10 md:gap-12">
            <p style={body}>
              Shenzhen SEO Conference (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you visit our website
              (shenzhenseoconference.com), purchase a ticket, or attend our event.
            </p>

            <Section title="Information We Collect">
              <p style={body}>To facilitate a seamless conference experience, we collect the following:</p>
              <Bullets
                items={[
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>Registration Data:</strong>{' '}
                    Name, email address, job title, company name, and billing information when you
                    purchase a ticket.
                  </>,
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>Event Requirements:</strong>{' '}
                    Dietary restrictions, accessibility needs, and visa letter request information (if
                    applicable).
                  </>,
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>Digital Data:</strong> IP
                    addresses, browser types, and standard cookie data when you interact with our
                    website.
                  </>,
                ]}
              />
            </Section>

            <Section title="How We Use Your Data">
              <p style={body}>We strictly use your information to deliver and improve our event. This includes:</p>
              <Bullets
                items={[
                  'Processing ticket orders and sending registration confirmations.',
                  'Providing essential event updates, schedules, and venue information.',
                  'Facilitating networking opportunities (only with your explicit consent).',
                  'Issuing official visa invitation letters upon request.',
                ]}
              />
            </Section>

            <Section title="Data Sharing & Third Parties">
              <p style={body}>
                We do not sell your personal data. We only share your information with trusted
                partners necessary to run the event:
              </p>
              <Bullets
                items={[
                  'Payment processors (e.g., Stripe, PayPal, WeChat Pay) to handle transactions.',
                  'Venue and catering partners (only sharing anonymized dietary or accessibility data).',
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>Sponsor Sharing:</strong> If
                    you allow your badge to be scanned by a sponsor at the event, you consent to
                    sharing your contact information directly with them.
                  </>,
                ]}
              />
            </Section>

            <Section title="International Data Transfers">
              <p style={body}>
                Because we are a global conference hosted in Shenzhen, your data may be transferred to
                and processed in China and other jurisdictions. By registering, you consent to this
                cross-border transfer. We ensure all data is handled securely and in compliance with
                applicable local and international regulations.
              </p>
            </Section>

            <Section title="Contact">
              <p style={body}>
                You have the right to access, correct, or request the deletion of your personal data
                at any time. To exercise these rights, please contact us{' '}
                <Link href="/#contact" className="underline" style={{ color: '#5DAEDB' }}>
                  here
                </Link>
                .
              </p>

              <div className="mt-4 flex flex-col gap-8 md:flex-row md:gap-12">
                <div className="flex flex-col gap-2">
                  <div
                    className="uppercase"
                    style={{
                      color: '#118BAC',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                    }}
                  >
                    Our US Business &amp; Address
                  </div>
                  <p style={body}>
                    Action Digital Publishing LLC
                    <br />
                    2880 W Oakland Park Blvd, Suite 225C, Oakland Park, Florida 33311
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div
                    className="uppercase"
                    style={{
                      color: '#118BAC',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                    }}
                  >
                    Our Chinese Partner Business &amp; Address
                  </div>
                  <p style={body}>
                    梦泰吉（武汉市）商务咨询有限责任公司
                    <br />
                    湖北省武汉市东西湖区金银湖街道金山大道特8号高尔夫城市花园8803栋26层03室
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
