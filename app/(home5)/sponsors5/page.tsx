'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';

/* ─────────────────────────── DATA (placeholder, swap in real list) ─────────────── */

type Logo = { src: string; alt: string; h: number };

// TODO: replace placeholders with real sponsor artwork as it lands.
const SPONSORS_2026: { platinum: Logo[]; gold: Logo[]; silver: Logo[] } = {
  platinum: [
    { src: '/figma-assets/73b861094a7ce5e5553ff2eacca50af9313eddc6.png', alt: 'ecomeXperts', h: 72 },
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'QuickCreator (placeholder)', h: 56 },
  ],
  gold: [
    { src: '/figma-assets/sponsor-swishdm.png', alt: 'whitepress (placeholder)', h: 48 },
    { src: '/figma-assets/sponsor-dynadot.png', alt: '全球搜 (placeholder)', h: 44 },
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'interamplify (placeholder)', h: 44 },
    { src: '/figma-assets/sponsor-swishdm.png', alt: 'eclicktech (placeholder)', h: 44 },
    { src: '/figma-assets/sponsor-dynadot.png', alt: 'OUTREACHER.IO (placeholder)', h: 44 },
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'TalkHeap (placeholder)', h: 44 },
    { src: '/figma-assets/sponsor-swishdm.png', alt: 'One (placeholder)', h: 44 },
    { src: '/figma-assets/sponsor-dynadot.png', alt: 'PLAYSTACK (placeholder)', h: 44 },
  ],
  silver: [
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'jodemand (placeholder)', h: 36 },
    { src: '/figma-assets/8842dd91b89a6d7f26f78f6178e930f87bc16a6b.png', alt: 'CLOOM TECH', h: 36 },
    { src: '/figma-assets/sponsor-swishdm.png', alt: 'enq SEO (placeholder)', h: 36 },
    { src: '/figma-assets/sponsor-dynadot.png', alt: 'Shenzhen partner (placeholder)', h: 36 },
  ],
};

const SPONSORS_2025 = SPONSORS_2026; // same lineup placeholder

const TIERS = [
  {
    name: 'Platinum',
    price: '$25,000',
    bullets: [
      'Everything in Gold',
      '1× Large booth in premium high-traffic location, Day 3 & Day 4',
      '3 VIP tickets, 3 Deluxe, 3 Standard ($5,790 ticket value)',
    ],
    bestFor:
      'Global SaaS / AI / SEO platforms seeking top-level brand authority.',
    active: false,
  },
  {
    name: 'Gold',
    price: '$12,000',
    bullets: [
      'Everything in Silver',
      '1× Medium booth in standard sponsor area, Day 3 & Day 4',
      'Booth production & setup included',
      '2 VIP tickets, 2 Deluxe, 2 Standard ($4,000 ticket value)',
    ],
    bestFor:
      'SEO tools, SaaS, agencies focused on visibility and conversations.',
    active: true,
  },
  {
    name: 'Silver',
    price: '$6,000',
    bullets: [
      'Stage screen logo, all conference days',
      'Website logo (Homepage + Sponsor page)',
      'Onsite sponsor wall',
      '1 VIP ticket ($1,800), 1 Deluxe ($900), 1 Standard ($600)',
    ],
    bestFor: 'Smaller tools or agencies testing brand exposure.',
    active: false,
  },
];

const REASONS = [
  {
    n: '01',
    title: 'First-Mover Advantage.',
    body:
      "China's only international SEO conference. No competing event puts Western tools and agencies in front of Chinese in-house teams at this scale.",
  },
  {
    n: '02',
    title: 'Both Sides of the Market.',
    body:
      '300+ Chinese SEO leaders from brands going global (your TAM in China) + 200+ international agencies and tool buyers (your TAM in the West). Same venue.',
  },
  {
    n: '03',
    title: 'Decision-Makers, Not Analysts.',
    body:
      'JP personally curates the attendee list. ~50% in-house SEO / marketing leads, ~50% agency founders and senior practitioners. No interns.',
  },
  {
    n: '04',
    title: 'A Brand-Safe Signal.',
    body:
      'Chinese SEO teams use sponsor logos as a shortlist. Being on this stage is a pre-qualification step for procurement in 2027.',
  },
];

const WHAT_WORKS = [
  'SEO tools, LLM visibility tools, Martech, content and link building platforms',
  'Agencies serving either Chinese or international markets',
  'Domain registrar, web hosting, CDN, technical SEO infrastructure',
  'Legal / compliance partners for cross-border market entry',
];

const WHAT_DOESNT = [
  'PPC-only platforms',
  'Generic affiliate networks',
  'Undisclosed AI content mills',
  "Anyone whose product would make attendees' jobs harder",
];

const TIER_OPTIONS = ['Silver', 'Gold', 'Platinum', 'Not Sure Yet'];

/* ───────────────────────────────── ICONS ──────────────────────────────────── */

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 10l4 4 8-9"
      />
    </svg>
  );
}

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 5l10 10M15 5L5 15"
      />
    </svg>
  );
}

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M3 6h18v12H3V6Zm0 0 9 7 9-7"
      />
    </svg>
  );
}

/* ───────────────────────────── SPONSOR LOGO BOX ───────────────────────────── */

function SponsorLogoBox({
  logo,
  tier,
}: {
  logo: Logo;
  tier: 'platinum' | 'gold' | 'silver';
}) {
  const baseFlatten = 'brightness(0) invert(1)';
  const defaultFilter = baseFlatten;
  const defaultOpacity = 0.5;
  const hoverFilter =
    tier === 'gold'
      ? `${baseFlatten} sepia(1) saturate(4) hue-rotate(-5deg) brightness(0.95)`
      : tier === 'silver'
      ? `${baseFlatten} brightness(0.82)`
      : baseFlatten;

  // All tiers use the same rounded 24px card with red-on-hover; only the
  // fixed height differs per tier. Padding shrinks on mobile so cards don't
  // overflow narrow viewports.
  const heightClass =
    tier === 'gold'
      ? 'h-[140px] md:h-[208px]'
      : tier === 'silver'
      ? 'h-[120px] md:h-[176px]'
      : '';

  return (
    <div
      className={`flex flex-col justify-center items-center group transition-colors self-stretch min-w-0 p-6 md:p-16 ${heightClass}`}
      style={{
        flex: '1 0 0',
        gap: 10,
        borderRadius: 24,
        border: '1px solid rgba(249, 249, 249, 0.10)',
        background: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#EB3030';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(249, 249, 249, 0.10)';
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.alt}
        className="block max-w-full"
        style={{
          height: 'auto',
          maxHeight: logo.h,
          width: 'auto',
          margin: 'auto',
          objectFit: 'contain',
          filter: defaultFilter,
          opacity: defaultOpacity,
          transition: 'filter 0.25s ease, opacity 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = hoverFilter;
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = defaultFilter;
          e.currentTarget.style.opacity = String(defaultOpacity);
        }}
      />
    </div>
  );
}

function TierLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="display uppercase text-center"
      style={{
        color: '#EB3030',
        fontFamily: 'Unbounded, system-ui, sans-serif',
        fontSize: 'clamp(18px, 2.4vw, 24px)',
        fontWeight: 500,
        lineHeight: '140%',
      }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────── HERO ────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/sponsors-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.7 }}
        />
        {/* Mobile overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.55) 0%, rgba(3, 6, 13, 0.92) 55%, #03060D 100%)',
          }}
        />
        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.45) 0%, rgba(3, 6, 13, 0.85) 55%, #03060D 100%)',
          }}
        />
      </div>

      <Nav linkBase="/home5" />

      <div className="container pt-[140px] md:pt-[260px] lg:pt-[340px] pb-12 md:pb-20">
        {/* Date / venue badge */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <span
            className="text-white/80"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '160%',
            }}
          >
            September 14–18, 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-white" aria-hidden />
          <span
            className="text-white/65"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '150%',
            }}
          >
            The St. Regis Shenzhen
          </span>
        </div>

        {/* Headline */}
        <h1 className="display uppercase text-white" style={{ letterSpacing: '-0.01em' }}>
          <span
            className="block gradient-text-brand"
            style={{
              fontSize: 'clamp(28px, 6vw, 64px)',
              fontWeight: 600,
              lineHeight: '120%',
            }}
          >
            Your Brand.
          </span>
          <span
            className="block"
            style={{
              fontSize: 'clamp(28px, 6vw, 64px)',
              fontWeight: 600,
              lineHeight: '120%',
            }}
          >
            In the Room Where
          </span>
          <span
            className="block"
            style={{
              fontSize: 'clamp(28px, 6vw, 64px)',
              fontWeight: 600,
              lineHeight: '120%',
            }}
          >
            East Meets West.
          </span>
        </h1>

        <p
          className="mt-6 md:mt-8 text-white max-w-[720px]"
          style={{
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '170%',
          }}
        >
          600 SEO professionals. 30+ countries. Five days. The only event in the world where
          Chinese and international SEO leaders share a coffee break.
        </p>

        {/* Mobile: solid red pill */}
        <Link
          href="#apply"
          className="md:hidden mt-8 display gradient-cta flex uppercase text-white whitespace-nowrap text-[14px] font-semibold leading-[150%]"
          style={{
            width: '323.728px',
            maxWidth: '100%',
            padding: '12px 32px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
            borderRadius: 1000,
          }}
        >
          Become a 2026 Sponsor
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Desktop: outlined pill */}
        <Link
          href="#apply"
          className="hidden md:inline-flex mt-8 btn-outline-white items-center gap-3 rounded-full uppercase"
          style={{
            padding: '16px 28px',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.18em',
          }}
        >
          Become a 2026 Sponsor
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

/* ──────────────────────────── 1. 2026 CONFIRMED ───────────────────────────── */

function Confirmed2026() {
  return (
    <section className="bg-[#03060d]">
      <div
        className="container flex flex-col items-center self-stretch"
        style={{
          paddingTop: 'clamp(48px, 6vw, 96px)',
          paddingBottom: 'clamp(48px, 6vw, 96px)',
          gap: 'clamp(40px, 5vw, 72px)',
        }}
      >
        {/* Heading */}
        <div className="flex flex-col items-start md:items-center self-stretch" style={{ gap: 16 }}>
          <h2
            className="display uppercase text-left md:text-center"
            style={{
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            2026 Confirmed.
          </h2>
          <p
            className="text-left md:text-center"
            style={{
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            The 2026 lineup is closing fast. Announcements roll out monthly.
          </p>
        </div>

        {/* Logo tiers */}
        <div className="flex flex-col items-center self-stretch" style={{ gap: 80 }}>
          <Tier title="Platinum Sponsors" tier="platinum" logos={SPONSORS_2026.platinum} cols="grid-cols-1 sm:grid-cols-2" />
          <Tier title="Gold Sponsors" tier="gold" logos={SPONSORS_2026.gold} cols="grid-cols-2 sm:grid-cols-3" />
          <Tier title="Silver Sponsors" tier="silver" logos={SPONSORS_2026.silver} cols="grid-cols-2 sm:grid-cols-4" />
        </div>
      </div>
    </section>
  );
}

function Tier({
  title,
  tier,
  logos,
  cols,
}: {
  title: string;
  tier: 'platinum' | 'gold' | 'silver';
  logos: Logo[];
  cols: string;
}) {
  return (
    <div className="flex flex-col items-stretch self-stretch" style={{ gap: 24 }}>
      <TierLabel>{title}</TierLabel>
      <div className={`grid ${cols} gap-4 md:gap-5`}>
        {logos.map((l, i) => (
          <SponsorLogoBox key={`${tier}-${i}`} logo={l} tier={tier} />
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────── 2. THREE TIERS ──────────────────────────────── */

function ThreeTiers() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        // Same layered gradient as home5 Pricing: vertical fade-in/out over a
        // 65% black wash over a horizontal teal→red brand gradient.
        background:
          'linear-gradient(180deg, #03060D 0%, rgba(3,6,13,0) 50%, #03060D 100%),' +
          'linear-gradient(0deg, rgba(3,6,13,0.65), rgba(3,6,13,0.65)),' +
          'linear-gradient(90deg, #118BAC 0%, #EB3030 100%)',
      }}
    >
      <div
        className="container relative flex flex-col items-start md:items-center"
        style={{
          paddingTop: 'clamp(48px, 8vw, 128px)',
          paddingBottom: 'clamp(48px, 8vw, 128px)',
          gap: 64,
        }}
      >
        <div className="flex flex-col items-start md:items-center self-stretch" style={{ gap: 16 }}>
          <h2
            className="display uppercase text-left md:text-center"
            style={{
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            Three Tiers. Clear What You Get.
          </h2>
          <p
            className="text-left md:text-center"
            style={{
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            Each tier is built for a different goal. Not just logo placement, but speaking
            slots, warm introductions, and direct access to the room.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 self-stretch">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-7 border border-white/10 flex flex-col"
            >
              <div className="display text-[18px] font-bold uppercase tracking-[0.04em] text-white">
                {t.name}
              </div>
              <div className="mt-4 flex items-end gap-3">
                <span
                  className="display text-[24px] md:text-[40px] font-semibold leading-[160%] md:leading-none text-white uppercase"
                  style={{ opacity: 0.9 }}
                >
                  {t.price}
                </span>
              </div>
              <ul className="mt-7 space-y-3">
                {t.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3"
                    style={{
                      color: '#F9F9F9',
                      fontSize: '14px',
                      fontWeight: 500,
                      lineHeight: '160%',
                      opacity: 0.7,
                    }}
                  >
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      className="mt-1.5 flex-none"
                      aria-hidden="true"
                    >
                      <path
                        d="M17 1L6 12L1 7"
                        stroke="#EB3030"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-auto flex flex-col items-start self-stretch"
                style={{
                  paddingLeft: 24,
                  gap: 4,
                  borderLeft: '2px solid #EB3030',
                  marginTop: 32,
                }}
              >
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-white">
                  Best For
                </div>
                <p className="text-[14px] font-medium leading-[160%] text-white">
                  {t.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#apply"
          className="display btn-outline-white flex uppercase whitespace-nowrap text-[14px] font-semibold leading-[150%] self-stretch md:self-auto md:inline-flex md:-mt-6"
          style={{
            padding: '16px 48px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
            borderRadius: 1000,
          }}
        >
          Talk to Us
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

/* ────────────────────────────── 3. WHY THIS EVENT ──────────────────────────── */

function WhyThisEvent() {
  return (
    <section className="bg-[#03060d]">
      <div
        className="container flex flex-col"
        style={{ padding: 'clamp(48px, 6vw, 96px) 24px', gap: 'clamp(48px, 7vw, 96px)' }}
      >
        <div className="flex flex-col gap-4 max-w-[860px]">
          <h2
            className="display uppercase"
            style={{
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            <span className="block">Why This Event.</span>
            <span className="block">Not Another One.</span>
          </h2>
          <p
            style={{
              color: 'rgba(249, 249, 249, 0.65)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            Most SEO sponsorships buy you a logo wall. Here&apos;s what makes this different.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.n}
              className="flex flex-col items-start self-stretch gap-4 md:gap-3 p-4 md:p-0 rounded-3xl md:rounded-none border-[1.5px] border-white/15 md:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-center self-stretch" style={{ gap: 16 }}>
                <div
                  className="uppercase shrink-0"
                  style={{
                    width: 58,
                    color: '#118BAC',
                    fontFamily: 'Unbounded, system-ui, sans-serif',
                    fontSize: 'clamp(24px, 3.5vw, 32px)',
                    fontWeight: 700,
                    lineHeight: '120%',
                  }}
                >
                  {r.n}
                </div>
                <h3
                  className="display uppercase"
                  style={{
                    color: '#F9F9F9',
                    fontFamily: 'Unbounded, system-ui, sans-serif',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    fontWeight: 700,
                    lineHeight: '160%',
                  }}
                >
                  {r.title}
                </h3>
              </div>
              <p
                style={{
                  color: 'rgba(249, 249, 249, 0.50)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  lineHeight: '20px',
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── 4. QUOTE ───────────────────────────────── */

const SPONSOR_QUOTES = [
  {
    text:
      "There are very few opportunities for Western and Chinese to get together in one event like this. It's very unique.",
    name: 'Zack Franklin',
    role: 'SEO agency owner, 9 years in Shenzhen',
    img: '/figma-assets/Zack-Franklin1.jpg',
  },
  {
    text:
      'I got to tour around a little bit and it kind of reminded me, this is like the US. Super developed. Very quiet, very organized.',
    name: 'Stewart Vickers',
    role: '2025 Speaker',
    img: '/figma-assets/Mike-Dee1.jpg',
  },
  {
    text:
      'The clearest business ROI of any conference I have attended. I should have tapped this market years ago.',
    name: 'Mike Dee',
    role: '2025 Speaker',
    img: '/figma-assets/Mike-Dee1.jpg',
  },
];

function QuoteBlock() {
  const [idx, setIdx] = useState(0);
  const total = SPONSOR_QUOTES.length;
  const q = SPONSOR_QUOTES[idx];

  return (
    <section className="bg-[#03060d]">
      <div
        className="container flex flex-col self-stretch"
        style={{ padding: 'clamp(48px, 6vw, 96px) 24px', gap: 24 }}
      >
        <div
          className="flex flex-col items-center self-stretch text-center"
          style={{
            padding: 'clamp(40px, 6vw, 64px) clamp(24px, 8vw, 96px)',
            gap: 24,
            borderRadius: 32,
            border: '1px solid rgba(249, 249, 249, 0.20)',
            background:
              'linear-gradient(160deg, #114555 0%, #0a3142 35%, #06222d 70%, #051820 100%)',
          }}
        >
          <svg
            viewBox="0 0 64 50"
            aria-hidden="true"
            style={{ width: 53.169, height: 48.741, color: '#eb3030' }}
          >
            <path
              fill="currentColor"
              d="M0 50V28C0 12 9 2 24 0l3 7c-7 2-12 8-12 14h12v29H0Zm37 0V28c0-16 9-26 24-28l3 7c-7 2-12 8-12 14h12v29H37Z"
            />
          </svg>
          <p
            className="display text-white max-w-[900px]"
            style={{
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 700,
              lineHeight: '140%',
              textTransform: 'uppercase',
            }}
          >
            {q.text}
          </p>
          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={q.img}
              alt={q.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col items-start text-left">
              <span
                className="display"
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'Unbounded, system-ui, sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '160%',
                }}
              >
                {q.name}
              </span>
              <span
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: '160%',
                }}
              >
                {q.role}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel controls — dashes left, arrows right (below the box) */}
        <div className="flex items-center justify-between self-stretch gap-4">
          <div className="flex items-center gap-1.5">
            {SPONSOR_QUOTES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show quote ${i + 1}`}
                onClick={() => setIdx(i)}
                className="h-[2px] transition-all"
                style={{
                  width: 28,
                  background: i === idx ? '#eb3030' : 'rgba(249,249,249,0.18)',
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous quote"
              onClick={() => setIdx((i) => (i - 1 + total) % total)}
              className="flex items-center justify-center hover:bg-white/5 transition-colors"
              style={{
                padding: 16,
                gap: 8,
                borderRadius: 100,
                border: '1px solid rgba(249, 249, 249, 0.20)',
                background: 'transparent',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma-assets/arrow-left.svg" alt="" className="w-6 h-6" />
            </button>
            <button
              type="button"
              aria-label="Next quote"
              onClick={() => setIdx((i) => (i + 1) % total)}
              className="flex items-center justify-center hover:bg-white/5 transition-colors"
              style={{
                padding: 16,
                gap: 8,
                borderRadius: 100,
                border: '1px solid rgba(249, 249, 249, 0.20)',
                background: 'transparent',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma-assets/arrow-right.svg" alt="" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 5. WHO WE LET IN ───────────────────────────── */

function WhoWeLetIn() {
  return (
    <section className="bg-[#03060d]">
      <div
        className="container flex flex-col"
        style={{ padding: 'clamp(48px, 6vw, 96px) 24px', gap: 64 }}
      >
        <div className="flex flex-col gap-3">
          <span
            className="uppercase"
            style={{
              color: '#F9F9F9',
              opacity: 0.43,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '0.7px',
            }}
          >
            How We Pick Sponsors
          </span>
          <h2
            className="display uppercase"
            style={{
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            Who We Let In. Who We Don&apos;t.
          </h2>
          <p
            style={{
              color: 'rgba(249, 249, 249, 0.65)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            Sponsorship here is not a credit card transaction. We review every application.
          </p>
        </div>

        <div className="flex flex-col md:flex-row self-stretch" style={{ gap: 24 }}>
          {/* What works — grows to fill remaining width */}
          <div
            className="flex flex-col items-start"
            style={{
              flex: '1 0 0',
              padding: 'clamp(24px, 4vw, 48px)',
              gap: 32,
              borderRadius: 32,
              border: '1px solid #118BAC',
              background: '#0D1017',
            }}
          >
            <div
              className="display uppercase"
              style={{
                color: '#118BAC',
                fontFamily: 'Unbounded, system-ui, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 600,
                lineHeight: '120%',
              }}
            >
              What Works
            </div>
            <ul className="flex flex-col self-stretch" style={{ gap: 16 }}>
              {WHAT_WORKS.map((item) => (
                <li
                  key={item}
                  className="flex items-start"
                  style={{
                    gap: 12,
                    color: '#F9F9F9',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: '22px',
                  }}
                >
                  <CheckIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#118bac]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What doesn't — fixed 480px */}
          <div
            className="flex flex-col items-start"
            style={{
              width: 480,
              maxWidth: '100%',
              padding: 'clamp(24px, 4vw, 48px)',
              gap: 32,
              borderRadius: 32,
              border: '1px solid rgba(249, 249, 249, 0.30)',
            }}
          >
            <div
              className="display uppercase"
              style={{
                color: '#EB3030',
                fontFamily: 'Unbounded, system-ui, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 600,
                lineHeight: '120%',
              }}
            >
              What Doesn&apos;t
            </div>
            <ul className="flex flex-col self-stretch" style={{ gap: 16 }}>
              {WHAT_DOESNT.map((item) => (
                <li
                  key={item}
                  className="flex items-start"
                  style={{
                    gap: 12,
                    color: '#F9F9F9',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: '22px',
                  }}
                >
                  <XIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#eb3030]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why we say no */}
        <div className="self-stretch max-w-[860px]" style={{ borderLeft: '2px solid #EB3030', paddingLeft: 16 }}>
          <div
            className="uppercase mb-2 self-stretch"
            style={{
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 700,
              lineHeight: '170%',
              letterSpacing: '0.8px',
            }}
          >
            Why We Say No.
          </div>
          <p
            style={{
              color: 'rgba(249, 249, 249, 0.65)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '20px',
            }}
          >
            The attendee list is the product. If a sponsor conflicts with attendee interests,
            say a scraping tool when 40% of the room owns websites getting scraped, we pass.
            Your ROI and their trust stay intact.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── 6. APPLY TO SPONSOR ─────────────────────────── */

function ApplyToSponsor() {
  const [tier, setTier] = useState('Silver');

  return (
    <section id="apply" className="bg-[#03060d]">
      <div
        className="container"
        style={{ padding: 'clamp(48px, 6vw, 96px) 24px' }}
      >
        <div
          className="flex flex-col md:flex-row md:items-stretch self-stretch"
          style={{
            padding: 'clamp(24px, 5vw, 64px)',
            gap: 'clamp(16px, 2.5vw, 32px)',
            justifyContent: 'space-between',
            borderRadius: 48,
            border: '1px solid rgba(249, 249, 249, 0.20)',
            background: '#03060D',
          }}
        >
          {/* Left copy */}
          <div className="flex flex-col gap-6 md:max-w-[540px] md:flex-1">
            <span
              className="uppercase"
              style={{
                color: '#EB3030',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '0.9px',
              }}
            >
              Get the Deck
            </span>
            <h2
              className="display uppercase"
              style={{
                color: '#F9F9F9',
                fontFamily: 'Unbounded, system-ui, sans-serif',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 600,
                lineHeight: '120%',
                letterSpacing: '-2px',
              }}
            >
              Apply to Sponsor
            </h2>
            <p
              style={{
                color: '#F9F9F9',
                opacity: 0.56,
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: '160%',
              }}
            >
              Fill the form. We send the full 2026 sponsorship deck (tiers, audience data,
              past-year stats). If there&apos;s a fit, JP follows up personally within 48 hours.
            </p>
            <a
              href="mailto:sponsor@shenzhenseoconference.com"
              className="inline-flex items-center gap-2 hover:underline text-[14px] md:text-[18px]"
              style={{
                color: '#F9F9F9',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontWeight: 500,
                lineHeight: '160%',
              }}
            >
              <MailIcon className="w-5 h-5" />
              sponsor@shenzhenseoconference.com
            </a>
          </div>

          {/* Right form */}
          <form
            className="flex flex-col gap-4 md:flex-1 md:max-w-[560px]"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire up to /api/sponsor-apply
            }}
          >
            <Input name="company" placeholder="Company Name" />
            <div className="flex flex-col md:flex-row gap-4">
              <Input name="contact" placeholder="Contact Name" />
              <Input name="role" placeholder="Role" />
            </div>
            <Input name="email" type="email" placeholder="E-mail Address" />
            <Input name="phone" placeholder="Phone (Optional)" />

            {/* Target tier chips */}
            <div
              className="flex flex-col items-start self-stretch"
              style={{
                padding: '22px 24px',
                justifyContent: 'flex-end',
                gap: 16,
                borderRadius: 20,
                border: '1px solid rgba(249, 249, 249, 0.10)',
                background: '#03060D',
              }}
            >
              <span
                className="uppercase"
                style={{
                  color: 'rgba(249, 249, 249, 0.50)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                }}
              >
                Target Tier
              </span>
              <div className="flex flex-wrap gap-2">
                {TIER_OPTIONS.map((opt) => {
                  const active = tier === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTier(opt)}
                      className="rounded-full transition-colors"
                      style={{
                        padding: '8px 18px',
                        border: active ? '1px solid #EB3030' : '1px solid rgba(249,249,249,0.20)',
                        background: active ? '#EB3030' : 'transparent',
                        color: active ? '#F9F9F9' : 'rgba(249,249,249,0.65)',
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message (Optional)"
              rows={4}
              className="text-[16px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] text-white resize-none"
              style={{
                padding: '16px 20px',
                borderRadius: 20,
                border: '1px solid rgba(249, 249, 249, 0.10)',
                background: 'transparent',
              }}
            />

            <button
              type="submit"
              className="display gradient-cta rounded-full uppercase mt-2"
              style={{
                display: 'flex',
                padding: '16px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                color: '#F9F9F9',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 16,
                fontWeight: 600,
                lineHeight: '24px',
              }}
            >
              Send Message
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`text-[15px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] text-white ${props.className ?? ''}`}
      style={{
        flex: '1 1 0',
        height: 56,
        padding: '14px 20px',
        gap: 8,
        borderRadius: 20,
        border: '1px solid rgba(249, 249, 249, 0.10)',
        background: 'transparent',
        ...(props.style ?? {}),
      }}
    />
  );
}

/* ──────────────────────────── 7. 2025 YEAR ONE ────────────────────────────── */

function YearOne2025() {
  return (
    <section className="bg-[#03060d]">
      <div
        className="container flex flex-col self-stretch"
        style={{ padding: 'clamp(48px, 6vw, 96px) 24px', gap: 64 }}
      >
        <div className="flex flex-col gap-3 max-w-[860px]">
          <span
            className="uppercase"
            style={{
              color: 'rgba(249, 249, 249, 0.65)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
            }}
          >
            2025 Partners
          </span>
          <h2
            className="display uppercase"
            style={{
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            2025 — Who Bet on Year One.
          </h2>
          <p
            style={{
              color: 'rgba(249, 249, 249, 0.50)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            Thank you to the sponsors who made the first international edition possible.
          </p>
          <a
            href="#apply"
            className="md:hidden display btn-outline-white flex uppercase whitespace-nowrap text-[14px] font-semibold leading-[150%] self-stretch mt-6"
            style={{
              padding: '16px 48px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
              borderRadius: 1000,
            }}
          >
            Become a 2026 Sponsor
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col self-stretch" style={{ gap: 48 }}>
          <YearOneRow label={['Platinum', 'Sponsors']} logos={SPONSORS_2025.platinum} tier="platinum" />
          <div
            className="hidden md:block self-stretch"
            style={{ height: 1, background: 'rgba(249, 249, 249, 0.10)' }}
            aria-hidden
          />
          <YearOneRow label={['Gold', 'Sponsors']} logos={SPONSORS_2025.gold} tier="gold" />
          <div
            className="hidden md:block self-stretch"
            style={{ height: 1, background: 'rgba(249, 249, 249, 0.10)' }}
            aria-hidden
          />
          <YearOneRow label={['Silver', 'Sponsors']} logos={SPONSORS_2025.silver} tier="silver" />
        </div>
      </div>
    </section>
  );
}

function YearOneRow({
  label,
  logos,
  tier,
}: {
  label: [string, string];
  logos: Logo[];
  tier: 'platinum' | 'gold' | 'silver';
}) {
  // 4 columns per spec; >4 logos means there's a second row, in which case
  // the heading should align with the top row instead of centering across both.
  const hasTwoRows = logos.length > 4;
  return (
    <div
      className={`flex flex-col md:flex-row items-start self-stretch gap-6 md:gap-12 ${
        hasTwoRows ? 'md:items-start' : 'md:items-center'
      }`}
    >
      <div
        className="display uppercase shrink-0 w-full md:w-[417px] text-center md:text-left text-[16px] md:text-[18px] opacity-80 md:opacity-100"
        style={{
          color: '#F9F9F9',
          fontFamily: 'Unbounded, system-ui, sans-serif',
          fontWeight: 500,
          lineHeight: '140%',
        }}
      >
        {label[0]}{' '}
        <br className="hidden md:block" />
        {label[1]}
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 self-stretch md:flex-1"
        style={{
          rowGap: 32,
          columnGap: 24,
          opacity: 0.65,
          alignItems: 'center',
        }}
      >
        {logos.map((l, i) => (
          <div key={`year-one-${tier}-${i}`} className="flex items-center justify-center min-w-0">
            <BareLogo logo={l} tier={tier} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BareLogo({ logo, tier }: { logo: Logo; tier: 'platinum' | 'gold' | 'silver' }) {
  const baseFlatten = 'brightness(0) invert(1)';
  const hoverFilter =
    tier === 'gold'
      ? `${baseFlatten} sepia(1) saturate(4) hue-rotate(-5deg) brightness(0.95)`
      : tier === 'silver'
      ? `${baseFlatten} brightness(0.82)`
      : baseFlatten;

  return (
    <div className="flex items-center justify-center w-[120px] md:w-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-w-full max-h-9 md:max-h-none"
        style={{
          height: logo.h,
          width: 'auto',
          objectFit: 'contain',
          filter: baseFlatten,
          opacity: 0.5,
          transition: 'filter 0.25s ease, opacity 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = hoverFilter;
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = baseFlatten;
          e.currentTarget.style.opacity = '0.5';
        }}
      />
    </div>
  );
}

/* ──────────────────────────────────── PAGE ────────────────────────────────── */

export default function Sponsors5Page() {
  return (
    <main className="home5-root">
      <Hero />
      <Confirmed2026 />
      <ThreeTiers />
      <WhyThisEvent />
      <QuoteBlock />
      <WhoWeLetIn />
      <ApplyToSponsor />
      <YearOne2025 />
      <Footer linkBase="/home5" />
      <BackToTop />
    </main>
  );
}
