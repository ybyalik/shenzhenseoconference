'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, BackToTop, Footer, LinkedInIcon, Nav } from '../_components/shared';

/* ────────────────────────────────── HERO ─────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="bg-[#03060d]">
      <div className="container pt-[120px] md:pt-[140px] lg:pt-[160px] pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: image (contained, rounded, 3:2) */}
          <div className="relative w-full aspect-[3/2] rounded-[24px] overflow-hidden">
            <Image
              src="/assets/presskit-hero.webp"
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col justify-center md:pl-4 lg:pl-8">
          <h1
            className="display uppercase text-white"
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 600,
              lineHeight: '110%',
              letterSpacing: '-1.5px',
            }}
          >
            Press Kit
          </h1>

          <div
            className="gradient-brand mt-6 mb-6"
            style={{ width: 72, height: 3, borderRadius: 2 }}
          />

          <p
            className="max-w-[520px] text-white/80"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '170%',
            }}
          >
            Press assets, media resources, and foundational information for the Shenzhen SEO
            Conference.
          </p>

          <div className="mt-8">
            <Link
              href="#press-contact"
              className="display gradient-cta inline-flex items-center gap-3 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
            >
              Media Inquiries
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── ABOUT THE EVENT ────────────────────────────── */

function AboutEvent() {
  return (
    <section className="bg-[#03060d]">
      <div className="container py-16 md:py-24">
        <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-12">
          <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-start md:items-stretch">
            <div className="order-2 md:order-1">
              <div
                className="uppercase text-[#EB3030] mb-4"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                }}
              >
                About the Event
              </div>
              <h2
                className="display uppercase"
                style={{
                  color: '#F9F9F9',
                  fontSize: 24,
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: 'normal',
                }}
              >
                The Only SEO Conference Where East Truly Meets West.
              </h2>

              <div
                className="mt-6 space-y-5 text-white/75"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: '170%',
                }}
              >
                <p>
                  Built in Shenzhen, China&apos;s fastest-growing tech city, the Shenzhen SEO
                  Conference brings together SEO professionals and entrepreneurs from East Asia
                  with global peers from the West. We provide the bridge for both sides to learn
                  from each other, forge real partnerships, and grow beyond borders.
                </p>
                <p>
                  Unlike SEO events that stay local or hyper-focus on single search aspects, we are
                  built on cross-border partnership and SEO entrepreneurship. We prioritize the
                  actionable over the theoretical. Every speaker on our stage has a global vision
                  and is vetted for having shipped real SEO work.
                </p>
                <p>
                  The 2026 edition features five days of intensive knowledge sharing and networking
                  – starting with city tours and SEO masterminds, moving into two full days of
                  conference talks, and concluding with a full day of VIP networking. More than a
                  standard business conference, it is a blended experience designed for global
                  brands and entrepreneurs serious about organic growth.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] overflow-hidden rounded-[18px]">
              <Image
                src="/assets/press-about-event.webp"
                alt="Shenzhen skyline at dusk"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── QUICK FACTS TABLE ──────────────────────────── */

function FactCell({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="p-6 md:p-8 w-full">
      <div
        className="uppercase mb-3"
        style={{
          color: '#F9F9F9',
          opacity: 0.4,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 12,
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: '0.6px',
        }}
      >
        {label}
      </div>
      <div
        className="display"
        style={{
          color: '#F9F9F9',
          fontSize: 14,
          fontWeight: 600,
          lineHeight: '140%',
        }}
      >
        {value}
      </div>
    </div>
  );
}

function QuickFacts() {
  const cells: { kind: 'logo' | 'fact'; label?: string; value?: React.ReactNode }[] = [
    { kind: 'logo' },
    { kind: 'fact', label: 'Event Name', value: 'Shenzhen SEO Conference 2026' },
    { kind: 'fact', label: 'Dates', value: 'September 14–18, 2026' },
    {
      kind: 'fact',
      label: 'Location',
      value: (
        <span style={{ fontSize: 13 }}>
          The St. Regis Shenzhen{' '}
          <span style={{ fontSize: 11, fontWeight: 500, opacity: 0.6 }}>(Day 1-4)</span>
          <br />
          MGM Shenzhen{' '}
          <span style={{ fontSize: 11, fontWeight: 500, opacity: 0.6 }}>(Day 5)</span>
        </span>
      ),
    },
    { kind: 'fact', label: 'Expected Attendance', value: '500+ global attendees' },
    { kind: 'fact', label: 'Speakers', value: '50+ industry leaders' },
    { kind: 'fact', label: 'Countries Represented', value: '30+' },
    { kind: 'fact', label: 'Founded', value: '2025' },
  ];

  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="rounded-[32px] border border-white/10 bg-[#03060d] overflow-hidden">
          {/* Negative offset hides the outer border of edge cells; cells each draw their
              own top + left borders so the grid lines stay clean at every breakpoint. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mt-px -ml-px">
            {cells.map((c, i) => (
              <div
                key={i}
                className="border-t border-l border-white/10 min-h-[112px] flex items-center"
              >
                {c.kind === 'logo' ? (
                  <div className="px-6 md:px-8 py-6 flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo-white.webp"
                      alt="Shenzhen SEO Conference"
                      className="h-[30px] md:h-[34px] w-auto"
                    />
                  </div>
                ) : (
                  <FactCell label={c.label!} value={c.value} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── VISION & MISSION ───────────────────────────── */

function PrincipleCard({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs?: string[];
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-7 md:p-10 flex flex-col">
      <h3
        className="display uppercase"
        style={{
          color: '#F9F9F9',
          fontSize: 24,
          fontWeight: 600,
          lineHeight: '120%',
        }}
      >
        {heading}
      </h3>
      <div
        className="mt-7 flex-1"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 32,
          alignSelf: 'stretch',
        }}
      >
        <div
          style={{
            width: 4,
            background: '#118BAC',
            alignSelf: 'stretch',
            flexShrink: 0,
          }}
        />
        <div className="flex flex-col gap-5 flex-1">
          {paragraphs?.map((p, i) => (
            <p
              key={i}
              style={{
                color: '#F9F9F9',
                opacity: 0.8,
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: '180%',
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisionMission() {
  const themes = ['Global Organic Growth', 'SEO Entrepreneurship', 'Cross-Border Partnership'];
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 auto-rows-fr">
          <PrincipleCard
            heading="Our Vision"
            paragraphs={[
              'A world where SEO professionals, organic growth marketers, and global entrepreneurs learn from each other, work together, and build businesses without borders.',
            ]}
          />
          <PrincipleCard
            heading="Our Mission"
            paragraphs={[
              'We bridge Eastern and Western SEO professionals, marketers, and entrepreneurs in Shenzhen. Through this in-person event, we exchange actionable knowledge and build real cross-border partnerships.',
            ]}
          />
        </div>

        {/* Core themes band */}
        <div
          className="mt-6 md:mt-8 rounded-[32px] border border-white/10 bg-[#03060d] p-7 md:p-10 flex flex-col gap-6"
        >
          <h3
            className="display uppercase"
            style={{ color: '#F9F9F9', fontSize: 18, fontWeight: 600, lineHeight: '130%', letterSpacing: '0.02em' }}
          >
            Keywords / Core Themes
          </h3>
          <div className="flex flex-wrap gap-3">
            {themes.map((t) => (
              <span
                key={t}
                className="display uppercase inline-flex items-center gap-2.5"
                style={{
                  padding: '12px 20px',
                  borderRadius: 9999,
                  border: '1px solid rgba(17, 139, 172, 0.45)',
                  background: 'rgba(17, 139, 172, 0.10)',
                  color: '#F9F9F9',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  lineHeight: '130%',
                }}
              >
                <span
                  aria-hidden
                  style={{ width: 7, height: 7, borderRadius: 9999, background: '#5DAEDB', flexShrink: 0 }}
                />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── FOUNDER ─────────────────────────────────── */

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3 6.5h18v11H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3 7l9 6 9-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactChip({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 group max-w-full min-w-0"
    >
      <span
        className="grid place-items-center w-9 h-9 rounded-md text-white shrink-0"
        style={{ background: '#118bac' }}
      >
        {icon}
      </span>
      <span
        className="display uppercase break-all group-hover:text-[#EB3030] transition-colors"
        style={{
          color: '#F9F9F9',
          fontSize: 12,
          fontWeight: 600,
          lineHeight: '150%',
        }}
      >
        {label}
      </span>
    </a>
  );
}

function Founder() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <h2
          className="display uppercase mb-10 md:mb-14"
          style={{
            color: '#F9F9F9',
            fontSize: 36,
            fontWeight: 600,
            lineHeight: '120%',
          }}
        >
          Meet the Founder
        </h2>

        <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-7 md:p-12">
          <div className="grid gap-10 md:gap-14 md:grid-cols-[5fr_7fr] items-start">
            <div className="relative w-full aspect-square overflow-hidden rounded-[18px] md:self-center">
              <Image
                src="/assets/press-founder.webp"
                alt="JP Zhang"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>

            <div>
              <h3
                className="display uppercase"
                style={{
                  color: '#EB3030',
                  opacity: 0.8,
                  fontSize: 28,
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '1.4px',
                }}
              >
                JP Zhang
              </h3>
              <div
                className="mt-2"
                style={{
                  color: '#F9F9F9',
                  opacity: 0.6,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: '150%',
                }}
              >
                Founder &amp; Host, Shenzhen SEO Conference
              </div>

              <div
                className="mt-6 space-y-5"
                style={{
                  color: '#F9F9F9',
                  opacity: 0.8,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '170%',
                }}
              >
                <p>
                  With 16 years of hands-on experience, JP Zhang (also known as John in China) has
                  led SEO for global tech companies, scaled a successful affiliate portfolio, and
                  educated the Chinese market on actionable Google search strategies through his
                  brand,{' '}
                  <a
                    href="https://www.seoactionblog.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: '#5DAEDB' }}
                  >
                    英文SEO实战派
                  </a>
                  .
                </p>
                <p>
                  In 2019, JP tested his &quot;East Meets West&quot; concept with a 300-person event
                  in Shenzhen. Following a global pause, the conference returned in 2025 with a major
                  shift in scale: four days, 500 attendees, and a full English track. With 35% flying
                  in internationally, his vision was validated as Western and East Asian SEO
                  entrepreneurs sat side-by-side to build real, cross-border partnerships.
                </p>
                <p>
                  Beyond the conference, JP runs SEO Connector, a service matching Chinese companies
                  with overseas marketing partners, and{' '}
                  <a
                    href="https://seoactionschool.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: '#5DAEDB' }}
                  >
                    SEO Action School
                  </a>
                  , a community for Chinese SEOs and marketers. He holds dual bachelor&apos;s degrees
                  from China and dual master&apos;s degrees from the US.
                </p>
              </div>

              <p
                className="mt-6"
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  fontStyle: 'italic',
                  fontWeight: 600,
                  lineHeight: '20px',
                }}
              >
                <strong style={{ fontWeight: 600 }}>Available for:</strong> Interviews,
                podcasts, guest posts, and speaking engagements.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                <ContactChip
                  icon={<MailIcon className="w-4 h-4" />}
                  label="jp@shenzhenseoconference.com"
                  href="mailto:jp@shenzhenseoconference.com"
                />
                <ContactChip
                  icon={<LinkedInIcon className="w-4 h-4" />}
                  label="jiangpengzhang"
                  href="https://www.linkedin.com/in/jiangpengzhang"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────── BRAND COLORS ─────────────────────────────── */

type Swatch = { name: string; hex: string; usage: string; bg: string; ring?: boolean };

const SWATCHES: Swatch[] = [
  {
    name: 'Carbon',
    hex: '#03060D',
    usage: 'Backgrounds, negative space',
    bg: '#03060D',
    ring: true,
  },
  {
    name: 'Pure White',
    hex: '#F9F9F9',
    usage: 'Headlines, body text, borders',
    bg: '#F9F9F9',
  },
  {
    name: 'Flare',
    hex: '#EB3030',
    usage: 'Primary actions, accent text color',
    bg: '#EB3030',
  },
  {
    name: 'Electric',
    hex: '#118BAC',
    usage: 'Subtle backgrounds, dividers',
    bg: '#118BAC',
  },
];

function BrandColors() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <h2
          className="display uppercase mb-10 md:mb-14"
          style={{
            color: '#F9F9F9',
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '40px',
          }}
        >
          Brand Colors
        </h2>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SWATCHES.map((s) => (
            <div key={s.name}>
              <div
                className="w-full aspect-[16/9] rounded-[18px]"
                style={{
                  background: s.bg,
                  border: s.ring ? '1px solid rgba(249, 249, 249, 0.18)' : undefined,
                }}
              />
              <div className="mt-5 flex items-center justify-between gap-4">
                <div
                  className="display uppercase text-white"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.name}
                </div>
                <div
                  className="text-white/55"
                  style={{
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.hex}
                </div>
              </div>
              <div
                className="mt-3 text-white/65"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: '150%',
                }}
              >
                {s.usage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── LOGO ASSETS ─────────────────────────────── */

type LogoVariant = {
  name: string;
  src: string;
  background: 'dark' | 'light';
};

const LOGO_VARIANTS: LogoVariant[] = [
  { name: 'Logo · Gradient', src: '/assets/brand/logo-dark-gradient.png', background: 'dark' },
  { name: 'Logo · Multicolour', src: '/assets/brand/logo-dark-multicolour.png', background: 'dark' },
  { name: 'Logo · Blue', src: '/assets/brand/logo-dark-blue.png', background: 'dark' },
  { name: 'Logo · Coral', src: '/assets/brand/logo-dark-coral.png', background: 'dark' },
  { name: 'Logo · White', src: '/assets/brand/logo-dark-white.png', background: 'dark' },
  { name: 'Logo · Gradient', src: '/assets/brand/logo-light-gradient.png', background: 'light' },
  { name: 'Logo · Multicolour', src: '/assets/brand/logo-light-multicolour.png', background: 'light' },
  { name: 'Logo · Blue', src: '/assets/brand/logo-light-blue.png', background: 'light' },
  { name: 'Logo · Coral', src: '/assets/brand/logo-light-coral.png', background: 'light' },
  { name: 'Logo · Black', src: '/assets/brand/logo-light-black.png', background: 'light' },
  { name: 'Icon · Gradient', src: '/assets/brand/icon-gradient.png', background: 'dark' },
  { name: 'Icon · Multicolour', src: '/assets/brand/icon-dark-multicolour.png', background: 'dark' },
  { name: 'Icon · Blue', src: '/assets/brand/icon-blue.png', background: 'dark' },
  { name: 'Icon · Coral', src: '/assets/brand/icon-coral.png', background: 'dark' },
  { name: 'Icon · White', src: '/assets/brand/icon-white.png', background: 'dark' },
  { name: 'Icon · Multicolour', src: '/assets/brand/icon-light-multicolour.png', background: 'light' },
  { name: 'Icon · Black', src: '/assets/brand/icon-black.png', background: 'light' },
];

function LogoCard({ variant }: { variant: LogoVariant }) {
  const tileBg = variant.background === 'light' ? '#F9F9F9' : '#0a0d14';
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#03060d] p-4 md:p-5">
      <div
        className="grid place-items-center w-full rounded-[14px] h-[104px] md:h-[120px] p-5"
        style={{ background: tileBg }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={variant.src}
          alt={`${variant.name} preview`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div
        className="display uppercase text-white mt-4 text-center"
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.12em',
        }}
      >
        {variant.name}
      </div>
    </div>
  );
}

function LogoAssets() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <h2
          className="display uppercase"
          style={{
            color: '#F9F9F9',
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '40px',
          }}
        >
          Brand Assets
        </h2>
        <p
          className="mt-4 max-w-[820px]"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '180%',
          }}
        >
          Download our primary logos and official icons in scalable and transparent formats.
          Please maintain original colors, proportions, and clear space.
        </p>

        {/* Logos */}
        <div
          className="display uppercase mt-10 md:mt-14 mb-5 md:mb-6"
          style={{
            color: '#118BAC',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.16em',
          }}
        >
          Logos
        </div>
        <div className="grid gap-4 md:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {LOGO_VARIANTS.filter((v) => v.name.startsWith('Logo')).map((v) => (
            <LogoCard key={`${v.name}-${v.src}`} variant={v} />
          ))}
        </div>

        {/* Icons */}
        <div
          className="display uppercase mt-10 md:mt-12 mb-5 md:mb-6"
          style={{
            color: '#118BAC',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.16em',
          }}
        >
          Icons
        </div>
        <div className="grid gap-4 md:gap-5 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {LOGO_VARIANTS.filter((v) => v.name.startsWith('Icon')).map((v) => (
            <LogoCard key={`${v.name}-${v.src}`} variant={v} />
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/Shenzhen_SEO_Conference_Brand_Assets.zip"
            download
            className="gradient-cta display inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
          >
            Download All Assets (.zip)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1NtIu7kvIB6pzenAiIbyweSWQ8H3b59f7?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white display inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white border border-white/40"
          >
            View on Google Drive
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── KEY PHOTOS ──────────────────────────────── */

type Photo = {
  title: string;
  img: string;
};

const KEY_PHOTOS: Photo[] = [
  { title: 'Founder Headshot', img: '/assets/press-founder-headshot.webp' },
  { title: 'City Tour (Visit DJI)', img: '/assets/press-city-dji.webp' },
  { title: 'City Tour (Splendid China)', img: '/assets/press-city-splendid-china.webp' },
  { title: 'City Tour (Lianhuashan Park)', img: '/assets/press-city-lianhuashan.webp' },
  { title: 'Main Stage Talk (Gary Illyes)', img: '/assets/press-gary-illyes.webp' },
  { title: 'Main Stage Talk (Aleyda Solis)', img: '/assets/press-aleyda-solis.webp' },
  { title: 'Main Stage Panel', img: '/assets/press-main-panel.webp' },
  { title: 'VIP Networking (Roundtable)', img: '/assets/press-vip-roundtable.webp' },
  { title: 'Attendee Photo', img: '/assets/press-attendee-photo.webp' },
  { title: 'Attendee Networking', img: '/assets/press-attendee-networking.webp' },
  { title: 'Attendee Group Photo', img: '/assets/press-attendee-group.webp' },
  { title: 'Opening Party', img: '/assets/press-opening-party.webp' },
];

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-7 flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[16px]">
        <Image
          src={photo.img}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div
        className="display uppercase text-white mt-5"
        style={{
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: '0.16em',
        }}
      >
        {photo.title}
      </div>
    </div>
  );
}

function KeyPhotos() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <h2
          className="display uppercase"
          style={{
            color: '#F9F9F9',
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '40px',
          }}
        >
          Key Photos
        </h2>
        <p
          className="mt-4 max-w-[820px]"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '180%',
          }}
        >
          High-resolution images for media use. All photos are approved for editorial use.
          Please credit all images to:{' '}
          <Link href="/" className="underline" style={{ color: '#5DAEDB' }}>
            Shenzhen SEO Conference
          </Link>
          .
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {KEY_PHOTOS.map((p, i) => (
            <PhotoCard key={`${p.title}-${i}`} photo={p} />
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1MJpmmzNEPrXPqO_Gouw7H2FM1Bk21fB2"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta display inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
          >
            Browse High-Res Images
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ADDITIONAL RESOURCES ────────────────────────── */

function PressContact() {
  return (
    <section id="press-contact" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-[64px]">
          <h2
            className="display uppercase shrink-0"
            style={{
              color: '#F9F9F9',
              fontSize: 36,
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            <span className="block">Media</span>
            <span className="block">Contact</span>
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 flex-1 min-w-0"
            style={{
              padding: '48px 40px',
              borderRadius: 32,
              border: '1px solid rgba(249, 249, 249, 0.20)',
            }}
          >
            <div className="w-full">
              <div
                className="uppercase text-[#EB3030] mb-5"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                }}
              >
                Press Contact
              </div>
              <ul
                className="flex flex-col gap-3 text-white/85"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: '160%',
                }}
              >
                <li>
                  <strong className="text-white font-semibold">Media Relations:</strong>{' '}
                  Rahile Adil
                </li>
                <li>
                  <strong className="text-white font-semibold">Email:</strong>{' '}
                  <a
                    href="mailto:rahile@shenzhenseoconference.com"
                    className="hover:text-[#EB3030] transition-colors"
                  >
                    rahile@shenzhenseoconference.com
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="w-full self-center"
              style={{
                display: 'flex',
                paddingLeft: 16,
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 8,
                borderLeft: '2px solid #118BAC',
              }}
            >
              <p
                className="text-white/80"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: '170%',
                }}
              >
                Please direct all interview requests, media pass applications, and general
                coverage inquiries to our press team via email.
              </p>
              <p
                className="text-white/80"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: '170%',
                }}
              >
                <strong className="text-white italic font-semibold">Response time:</strong>{' '}
                <em>Within 24 business hours.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── PAGE ───────────────────────────────────── */

export default function PressPage() {
  return (
    <main className="home5-root">
      <Nav linkBase="/" />
      <Hero />
      <AboutEvent />
      <QuickFacts />
      <VisionMission />
      <Founder />
      <BrandColors />
      <LogoAssets />
      <KeyPhotos />
      <PressContact />
      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
