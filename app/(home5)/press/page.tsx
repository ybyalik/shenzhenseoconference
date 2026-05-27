'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, BackToTop, Footer, LinkedInIcon, Nav } from '../_components/shared';

/* ────────────────────────────────── HERO ─────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="bg-[#03060d]">
      <div className="grid md:grid-cols-2 pt-[72px] lg:pt-[88px] min-h-[600px] md:min-h-[640px] lg:min-h-[720px]">
        {/* Left: full-bleed image */}
        <div className="relative h-[280px] sm:h-[360px] md:h-auto">
          <Image
            src="/assets/press-hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* Right: content */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-16">
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
            Media resources, brand assets, and information about the world&apos;s most
            practitioner-focused SEO conference.
          </p>

          <div className="mt-8">
            <Link
              href="#press-contact"
              className="display gradient-cta inline-flex items-center gap-3 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
            >
              Reach Our Press Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
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
          <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-center">
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
                <span className="block">East meets West.</span>
                <span className="block">In SEO.</span>
                <span className="block">In one room.</span>
                <span className="block">Over multiple days.</span>
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
                  Built in Shenzhen, China&apos;s fastest-growing tech city, we bring
                  together SEO professionals, global brands, and international agencies to
                  learn from each other, forge real partnerships, and grow beyond borders.
                </p>
                <p>
                  The Shenzhen SEO Conference is Asia&apos;s premier gathering of search
                  engine optimization practitioners, bringing together 40+ speakers and
                  500+ attendees from across the globe. Unlike traditional conferences
                  filled with theory and speculation, every speaker has shipped real work
                  and generated measurable results.
                </p>
                <p>
                  Set in the heart of Shenzhen, China&apos;s innovation capital, the
                  conference features five days of intensive learning, networking, and
                  knowledge sharing. From technical SEO to content strategy, from local
                  search to international expansion, we cover the full spectrum of modern
                  SEO practice.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative w-full aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-[18px]">
              <Image
                src="/assets/press-venue.webp"
                alt="The St. Regis Shenzhen main hall"
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
    { kind: 'fact', label: 'Location', value: 'The St. Regis Shenzhen, China' },
    { kind: 'fact', label: 'Expected Attendance', value: '500+ SEO practitioners' },
    { kind: 'fact', label: 'Speakers', value: '40+ industry leaders' },
    { kind: 'fact', label: 'Countries Represented', value: '25+' },
    { kind: 'fact', label: 'Founded', value: '2021' },
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
  paragraphs: string[];
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
          {paragraphs.map((p, i) => (
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
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 auto-rows-fr">
          <PrincipleCard
            heading="Our Vision"
            paragraphs={[
              'A world where SEO professionals from every corner of the globe learn from each other, work together, and build businesses without borders.',
              'We are building toward a conference that sells itself.',
              'Where the community is so strong, the knowledge so actionable, and the experience so memorable that showing up in Shenzhen becomes the obvious move for anyone serious about global organic growth.',
            ]}
          />
          <PrincipleCard
            heading="Our Mission"
            paragraphs={[
              'To bridge Eastern and Western SEO professionals through an intentional, in-person conference in Shenzhen, where real knowledge is exchanged, real partnerships are formed, and a truly global SEO community is built.',
            ]}
          />
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
      className="inline-flex items-center gap-3 group"
    >
      <span
        className="grid place-items-center w-9 h-9 rounded-md text-white"
        style={{ background: '#118bac' }}
      >
        {icon}
      </span>
      <span
        className="display uppercase text-center group-hover:text-[#EB3030] transition-colors"
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
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[18px]">
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
                JP/John Zhang
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
                Founder &amp; Conference Director
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
                  JP Zhang spent a decade building SEO teams at fast-growing startups across
                  Asia before founding the Shenzhen SEO Conference in 2024. Frustrated by
                  conferences that prioritized entertainment over education, JP created an
                  event focused entirely on practitioner-to-practitioner knowledge transfer.
                </p>
                <p>
                  Prior to launching the conference, JP led SEO strategy for three
                  successful exits in the e-commerce and SaaS sectors, managing teams across
                  China, Singapore, and the United States. JP holds a degree in Computer
                  Science from Tsinghua University.
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
                podcasts, speaking engagements
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-7">
                <ContactChip
                  icon={<MailIcon className="w-4 h-4" />}
                  label="jp@shenzhenseo.com"
                  href="mailto:jp@shenzhenseo.com"
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

function FileDownloadIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M14 3h-4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2-2-4-4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 12v6m0 0l-2-2m2 2l2-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LogoVariant = {
  name: string;
  description: string;
  background: 'dark' | 'light';
  invert?: boolean;
  buttonLabel: string;
  href: string;
};

const LOGO_VARIANTS: LogoVariant[] = [
  {
    name: 'Colour Logo',
    description: 'Scalable SVG file',
    background: 'dark',
    buttonLabel: 'Download SVG',
    href: '/logo-white.webp',
  },
  {
    name: 'Inverse Logo',
    description: 'White on black background',
    background: 'light',
    invert: true,
    buttonLabel: 'Download PNG',
    href: '/logo-white.webp',
  },
  {
    name: 'Black Logo',
    description: 'Black on white background',
    background: 'dark',
    buttonLabel: 'Download PNG',
    href: '/logo-white.webp',
  },
  {
    name: 'White Logo',
    description: 'Black on white background',
    background: 'light',
    invert: true,
    buttonLabel: 'Download PNG',
    href: '/logo-white.webp',
  },
];

function LogoCard({ variant }: { variant: LogoVariant }) {
  const tileBg = variant.background === 'light' ? '#F9F9F9' : '#0a0d14';
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-7">
      <div
        className="grid place-items-center w-full aspect-square rounded-[18px]"
        style={{ background: tileBg }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.webp"
          alt={`${variant.name} preview`}
          className="w-[60%] max-w-[160px] h-auto"
          style={variant.invert ? { filter: 'invert(1)' } : undefined}
        />
      </div>
      <div
        className="display uppercase text-white mt-6"
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: '0.16em',
        }}
      >
        {variant.name}
      </div>
      <div
        className="mt-2 text-white/65"
        style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '150%',
        }}
      >
        {variant.description}
      </div>

      <a
        href={variant.href}
        download
        className="btn-outline-white display mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40"
      >
        <FileDownloadIcon className="w-4 h-4" />
        {variant.buttonLabel}
      </a>
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
          Logo Assets
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
          Download official logos in various formats. Please maintain proper spacing and do
          not modify the logo colors or proportions.
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {LOGO_VARIANTS.map((v) => (
            <LogoCard key={v.name} variant={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── KEY PHOTOS ──────────────────────────────── */

type Photo = {
  title: string;
  credit: string;
  img: string;
  href: string;
};

const KEY_PHOTOS: Photo[] = [
  { title: 'Founder', credit: 'Photo by Name', img: '/assets/press-founder.webp', href: '/assets/press-founder.webp' },
  { title: 'Morning Workshop', credit: 'Photo by Name', img: '/assets/visit-szx.webp', href: '/assets/visit-szx.webp' },
  { title: 'Breakout Sessions', credit: 'Photo by Name', img: '/assets/visit-hkg.webp', href: '/assets/visit-hkg.webp' },
  { title: 'Main Stage Talks', credit: 'Photo by Name', img: '/assets/press-venue.webp', href: '/assets/press-venue.webp' },
  { title: 'VIP Evening', credit: 'Photo by Name', img: '/assets/visit-dimsum.webp', href: '/assets/visit-dimsum.webp' },
  { title: 'Main Stage Talks', credit: 'Photo by Name', img: '/assets/agenda-venue.webp', href: '/assets/agenda-venue.webp' },
  { title: 'Speaker Session', credit: 'Photo by Name', img: '/assets/press-hero.webp', href: '/assets/press-hero.webp' },
  { title: 'Opening Party', credit: 'Photo by Name', img: '/assets/visit-streetfood.webp', href: '/assets/visit-streetfood.webp' },
  { title: 'Closing Party', credit: 'Photo by Name', img: '/assets/visit-hongkong.webp', href: '/assets/visit-hongkong.webp' },
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
      <div
        className="mt-1.5 text-white/55"
        style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        {photo.credit}
      </div>

      <a
        href={photo.href}
        download
        className="btn-outline-white display mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40"
      >
        <FileDownloadIcon className="w-4 h-4" />
        Download
      </a>
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
          High-resolution images for media use. All photos are approved for editorial use
          with proper attribution.
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {KEY_PHOTOS.map((p, i) => (
            <PhotoCard key={`${p.title}-${i}`} photo={p} />
          ))}
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
            <span className="block">Additional</span>
            <span className="block">Resources</span>
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
                  Sarah Chen
                </li>
                <li>
                  <strong className="text-white font-semibold">Email:</strong>{' '}
                  <a
                    href="mailto:press@shenzhenseoconference.com"
                    className="hover:text-[#EB3030] transition-colors"
                  >
                    press@shenzhenseoconference.com
                  </a>
                </li>
                <li>
                  <strong className="text-white font-semibold">Phone:</strong>{' '}
                  <a
                    href="tel:+8675512345678"
                    className="hover:text-[#EB3030] transition-colors"
                  >
                    +86 755 1234 5678
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
                For urgent media inquiries during the event, please contact our on-site
                press liaison.
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
                <em>within 24 hours during business hours.</em>
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
