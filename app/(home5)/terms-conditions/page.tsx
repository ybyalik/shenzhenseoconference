import type { Metadata } from 'next';
import Link from 'next/link';

import { BackToTop, Footer, Nav } from '../_components/shared';

export const metadata: Metadata = {
  title: 'Terms & Conditions – Shenzhen SEO Conference 2026',
  description:
    'The terms and conditions for purchasing a ticket, registering, and attending the Shenzhen SEO Conference 2026.',
  openGraph: {
    title: 'Terms & Conditions – Shenzhen SEO Conference 2026',
    description:
      'Ticketing, refunds, code of conduct, media release, and liability terms for the Shenzhen SEO Conference.',
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

export default function TermsConditionsPage() {
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
            Terms &amp; Conditions
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
              By purchasing a ticket or registering for the Shenzhen SEO Conference, you agree to
              these Terms &amp; Conditions.
            </p>

            <Section title="Ticketing, Refunds, and Transfers">
              <Bullets
                items={[
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>
                      100% Refund Policy (30+ Days):
                    </strong>{' '}
                    We offer a complete, 100% refund for any ticket cancellations made 30 days or
                    more before the official start date of the conference.
                  </>,
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>
                      Strictly Non-Transferable:
                    </strong>{' '}
                    To maintain the security and integrity of the event, tickets cannot be
                    transferred, sold, or reassigned to another individual under any circumstances.
                  </>,
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>
                      On-Site ID Verification:
                    </strong>{' '}
                    A valid government-issued ID or passport matching the exact name on your ticket
                    registration is strictly required to pick up your badge at check-in. If your ID
                    does not match the ticket record, you will be denied entry without a refund.
                  </>,
                  <>
                    <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>
                      Cancellations &amp; Support:
                    </strong>{' '}
                    If you are unable to attend and have missed the 30-day full refund window (e.g.,
                    due to an unexpected visa denial or emergency), please contact our support team
                    immediately to discuss your specific situation and potential options.
                  </>,
                ]}
              />
            </Section>

            <Section title="Event Code of Conduct">
              <p style={body}>
                We bring professionals together to exchange actionable knowledge and build real
                partnerships. We require all attendees, speakers, and sponsors to maintain a
                professional, respectful environment. We reserve the right to revoke the badge of
                anyone engaging in harassment, disruptive behavior, or aggressive, unapproved
                solicitation, without a refund.
              </p>
            </Section>

            <Section title="Media & Photography Release">
              <p style={body}>
                Shenzhen SEO Conference is a heavily documented event. By attending, you grant us
                the right to record, film, and photograph you. We may use this media for future
                marketing, press releases, and promotional materials without additional
                compensation or approval.
              </p>
              <p style={body}>
                If you prefer not to be photographed or recorded, please notify our support team in
                writing at least 7 days prior to the event so we can make the necessary on-site
                arrangements for you.
              </p>
            </Section>

            <Section title="Program Changes & Force Majeure">
              <p style={body}>
                While we strive to deliver the event exactly as advertised, we reserve the right to
                change speakers, schedules, or venue details if necessary.
              </p>
              <p style={body}>
                In the event the conference must be postponed or cancelled due to circumstances
                beyond our control (e.g., natural disasters, global pandemics, government mandates),
                we will roll tickets over to the next year and offer partial or full refunds by
                requests.
              </p>
            </Section>

            <Section title="Liability Waiver">
              <p style={body}>
                Shenzhen SEO Conference and its organizers are not liable for any lost, stolen, or
                damaged personal property, nor are we responsible for any personal injury or illness
                that occurs during travel to or attendance at the event.
              </p>
            </Section>

            <Section title="Contact">
              <p style={body}>
                If you have any questions or concerns about these Terms &amp; Conditions, please
                contact us{' '}
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
