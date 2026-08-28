'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { ArrowUpRight, BackToTop, CarouselDots, Footer, Nav, useCarouselActive } from '../_components/shared';
import { SPONSORS_2026, type Logo } from '../_components/sponsors-data';

/* ─────────────────────────── DATA (shared with home page) ─────────────── */

const SPONSORS_2025 = SPONSORS_2026; // same lineup placeholder

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
    title: 'Decision Makers, Not Interns.',
    body:
      'From in-house marketing leads and agency founders to independent SEO consultants, our attendees represent the top tier of both Eastern and Western markets.',
  },
  {
    n: '04',
    title: 'A Brand-Safe Signal.',
    body:
      'Chinese SEO teams use sponsor logos as a shortlist. Being on this stage is a pre-qualification step for procurement in 2027.',
  },
];

const WHAT_WORKS = [
  {
    title: 'Software & Platforms',
    desc: 'SEO, LLM visibility tools, Martech, and link-building platforms.',
  },
  {
    title: 'SEO Agencies',
    desc: 'Marketing agencies serving Chinese or international markets.',
  },
  {
    title: 'Technical Infrastructure',
    desc: 'Domain registrars, web hosting, technical SEO infrastructure.',
  },
  {
    title: 'Cross-Border Services',
    desc: 'Legal, compliance, and market-entry partners.',
  },
];

const WHAT_DOESNT = [
  {
    title: 'Unrelated to SEO',
    desc: 'Strictly PPC platforms or generic affiliate networks.',
  },
  {
    title: 'Reputation Risks',
    desc: 'Super black-hat, spam, or unethical marketing brands.',
  },
  {
    title: 'Attendee Conflicts',
    desc: "Any tool that makes an SEO professional's job harder.",
  },
];

const TIER_OPTIONS = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Not Sure Yet'];

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
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
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
      : tier === 'bronze'
      ? 'h-[100px] md:h-[150px]'
      : 'h-[140px] md:h-[208px]';

  const As = (logo.href ? 'a' : 'div') as 'a';
  return (
    <As
      href={logo.href}
      target={logo.href ? '_blank' : undefined}
      rel={logo.href ? 'noopener noreferrer' : undefined}
      aria-label={logo.href ? logo.alt : undefined}
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
    </As>
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
          src="/assets/sponsors-hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-90 md:opacity-85"
          sizes="100vw"
        />
        {/* Mobile overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.40) 0%, rgba(3, 6, 13, 0.78) 55%, #03060D 100%)',
          }}
        />
        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.30) 0%, rgba(3, 6, 13, 0.68) 55%, #03060D 100%)',
          }}
        />
      </div>

      <div className="container pt-[140px] md:pt-[260px] lg:pt-[340px] pb-12 md:pb-20">
        {/* Date / venue badge */}
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2 mb-6 md:mb-8">
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
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white" aria-hidden />
          <span
            className="text-white/65"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '150%',
            }}
          >
            The St. Regis Shenzhen + MGM Shenzhen
          </span>
        </div>

        {/* Headline */}
        <h1
          className="display uppercase text-white text-[24px] leading-[140%] md:text-[48px] md:leading-[150%]"
          style={{ letterSpacing: '-0.01em', fontWeight: 600 }}
        >
          <span
            className="gradient-text-brand"
            style={{
              display: 'table',
              background: 'linear-gradient(90deg, #118BAC 0%, #FD4C4C 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your Brand.
          </span>
          <span className="block">In the Room Where</span>
          <span className="block">East Meets West.</span>
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
          <Tier title="Platinum Sponsors" tier="platinum" logos={SPONSORS_2026.platinum} cols="grid-cols-1 max-w-[372px] mx-auto" />
          <Tier title="Gold Sponsors" tier="gold" logos={SPONSORS_2026.gold} cols="grid-cols-1 sm:grid-cols-3 max-w-[1140px] mx-auto" />
          <Tier title="Silver Sponsors" tier="silver" logos={SPONSORS_2026.silver} cols="grid-cols-2 sm:grid-cols-4" />
          <Tier title="Bronze Sponsors" tier="bronze" logos={SPONSORS_2026.bronze} cols="grid-cols-2 sm:grid-cols-4" />
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
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
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

/* ─────────────────────── 2b. TIER COMPARISON TABLE (variation) ─────────────── */

function TierComparisonTable() {
  const COLUMNS = [
    { name: 'Platinum', price: '$25,000', popular: false },
    { name: 'Gold', price: '$12,000', popular: true },
    { name: 'Silver', price: '$7,500', popular: false },
    { name: 'Bronze', price: '$4,500', popular: false },
  ];

  const ROWS: { label: string; values: [string, string, string, string] }[] = [
    { label: 'Total slots', values: ['2', '5', '10', 'Unlimited'] },
    {
      label: 'Brand visibility',
      values: ['Top brand visibility', 'Strong presence', 'General presence', 'Limited exposure'],
    },
    { label: 'Booth', values: ['1× Large', '1× Medium', '1× Small', 'No booth'] },
    {
      label: 'Booth location',
      values: ['Premium, high traffic', 'Centrally located area', 'General sponsor area', 'N/A'],
    },
    {
      label: 'Website logo',
      values: ['Home + Sponsor page', 'Home + Sponsor page', 'Home + Sponsor page', 'Sponsor page only'],
    },
    { label: '# of VIP tickets ($1,800 value)', values: ['3', '2', '1', '1'] },
    { label: '# of Deluxe tickets ($900 value)', values: ['2', '2', '1', '0'] },
    { label: '# of Standard tickets ($600 value)', values: ['2', '1', '1', '0'] },
    {
      label: 'Best for',
      values: [
        'Global SaaS / AI / SEO platforms seeking top-level brand authority',
        'SEO agencies, tools, SaaS, focused on visibility and conversations',
        'Growing brands wanting a physical presence at a mid-tier cost',
        'Smaller brands or startups seeking brand exposure without a booth',
      ],
    },
  ];

  // Values that read as "not included" get a dimmed treatment for hierarchy.
  const muted = (v: string) => v === 'N/A' || v === 'No booth' || v === '0';
  const popular = (i: number) => COLUMNS[i].popular;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const active = useCarouselActive(trackRef);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        // Same layered gradient as the Three Tiers section above.
        background:
          'linear-gradient(180deg, #03060D 0%, rgba(3,6,13,0) 50%, #03060D 100%),' +
          'linear-gradient(0deg, rgba(3,6,13,0.65), rgba(3,6,13,0.65)),' +
          'linear-gradient(90deg, #118BAC 0%, #EB3030 100%)',
      }}
    >
      <div
        className="container relative flex flex-col items-start md:items-center"
        style={{ padding: 'clamp(48px, 6vw, 96px) 24px', gap: 48 }}
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
            Four Tiers. Clear What You Get.
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

        {/* Mobile: one slide per tier, same swipe slider as the cards above */}
        <div className="md:hidden self-stretch">
          <div
            ref={trackRef}
            className="-mx-6 px-6 pt-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            <div className="flex gap-4 pb-2 items-stretch">
              {COLUMNS.map((c, ci) => (
                <div key={c.name} data-card-idx={ci} className="flex-none w-[85%] snap-start">
                  <div
                    className={`relative h-full rounded-2xl border p-6 flex flex-col ${
                      c.popular ? 'border-[var(--red)]/45' : 'border-white/10'
                    }`}
                    style={
                      c.popular
                        ? {
                            background:
                              'linear-gradient(180deg, rgba(235,48,48,0.10) 0%, rgba(235,48,48,0.02) 100%)',
                          }
                        : undefined
                    }
                  >
                    {c.popular && (
                      <span className="gradient-brand absolute -top-3 left-6 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        Most Popular
                      </span>
                    )}
                    <div className="display uppercase text-[18px] font-bold tracking-[0.04em] text-white">
                      {c.name}
                    </div>
                    <div className="mt-1 display text-[26px] font-semibold text-white" style={{ opacity: 0.95 }}>
                      {c.price}
                    </div>
                    <dl className="mt-6 space-y-3">
                      {ROWS.map((row) => (
                        <div key={row.label} className="flex flex-col gap-0.5 border-t border-white/[0.08] pt-3">
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/45">
                            {row.label}
                          </dt>
                          <dd
                            className={`text-[14px] leading-[150%] ${
                              muted(row.values[ci]) ? 'text-white/35' : 'text-white/90'
                            }`}
                          >
                            {row.values[ci]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CarouselDots count={COLUMNS.length} active={active} />
        </div>

        {/* Desktop: full comparison table — each tier is a bordered, shaded column */}
        {/* pt-4 gives the "Most Popular" badge room; overflow-x-auto clips vertical overflow. */}
        <div className="hidden md:block w-full overflow-x-auto self-stretch pt-4">
          <table
            className="w-full min-w-[860px] text-left"
            style={{ borderCollapse: 'separate', borderSpacing: '12px 0' }}
          >
            <thead>
              <tr>
                <th className="sticky left-0 z-10 p-4 align-bottom w-[210px]" />
                {COLUMNS.map((c, i) => {
                  const side = popular(i) ? 'rgba(235,48,48,0.45)' : 'rgba(255,255,255,0.10)';
                  return (
                    <th
                      key={c.name}
                      className="relative p-5 md:p-6 align-bottom text-center"
                      style={{
                        borderTop: `1px solid ${side}`,
                        borderLeft: `1px solid ${side}`,
                        borderRight: `1px solid ${side}`,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        background: popular(i)
                          ? 'linear-gradient(180deg, rgba(235,48,48,0.16) 0%, rgba(235,48,48,0.03) 100%)'
                          : 'rgba(255,255,255,0.02)',
                      }}
                    >
                      {popular(i) && (
                        <span className="gradient-brand absolute -top-3 left-1/2 -translate-x-1/2 inline-block whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                          Most Popular
                        </span>
                      )}
                      <span className="block display uppercase text-[16px] md:text-[20px] font-bold tracking-[0.04em] text-white">
                        {c.name}
                      </span>
                      <span
                        className="mt-1 block display text-[22px] md:text-[28px] font-semibold text-white"
                        style={{ opacity: 0.95 }}
                      >
                        {c.price}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, r) => {
                const last = r === ROWS.length - 1;
                return (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="sticky left-0 z-10 p-4 text-left align-middle text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.08em] text-white/55"
                    >
                      {row.label}
                    </th>
                    {row.values.map((v, i) => {
                      const side = popular(i) ? 'rgba(235,48,48,0.45)' : 'rgba(255,255,255,0.10)';
                      return (
                        <td
                          key={i}
                          className={`p-4 align-middle text-center text-[14px] leading-[160%] ${
                            muted(v) ? 'text-white/35' : 'text-white/85'
                          }`}
                          style={{
                            borderLeft: `1px solid ${side}`,
                            borderRight: `1px solid ${side}`,
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            ...(last
                              ? {
                                  borderBottom: `1px solid ${side}`,
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                }
                              : {}),
                            background: popular(i) ? 'rgba(235,48,48,0.05)' : 'rgba(255,255,255,0.02)',
                          }}
                        >
                          {v}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="self-stretch flex flex-col gap-4 max-w-[860px] md:mx-auto text-left">
          {[
            {
              label: 'Booth Schedule:',
              text:
                'Booths are active exclusively on Day 3 and Day 4. Booth spaces will not be available on other conference days.',
            },
            {
              label: 'Production & Assembly:',
              text:
                'Complimentary printing and on-site setup are included (design files must be submitted in advance).',
            },
            {
              label: 'Equipment Add-ons:',
              text: 'Monitors and screens are available upon request, subject to availability.',
            },
          ].map((n) => (
            <p
              key={n.label}
              className="text-[13px] md:text-[14px] leading-[170%]"
              style={{
                color: '#F9F9F9',
                opacity: 0.8,
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              <span className="font-semibold">{n.label}</span> {n.text}
            </p>
          ))}
        </div>

        <Link
          href="#apply"
          className="display gradient-cta flex uppercase whitespace-nowrap text-[14px] font-semibold leading-[150%] text-white self-stretch md:self-auto md:inline-flex"
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
            Why This Event. Not Another One.
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
                className="md:pl-[74px]"
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
      "Sponsoring the Shenzhen SEO Conference delivered real business results. Our SEO agency gained new SEO clients I'm still working with today. The direct access to a highly engaged, decision-ready audience made it one of the best sponsorship opportunities I came across.",
    name: 'Marc Möller',
    role: 'Founder of Ecomexperts',
    img: '/assets/marc-moeller.jpg',
  },
  {
    text:
      '深圳SEO大会是一个非常有价值的平台，让我有机会接触优秀的人、优秀的公司，以及关于 SEO 和 GEO 的新想法 … 我也是 John 的粉丝，也真心希望这个大会能够持续成长、越办越好。',
    name: 'Hommer Zhao',
    role: 'CEO at Cloom Tech',
    img: '/assets/hommer-zhao.jpg',
  },
];

function QuoteBlock() {
  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
          What did the previous attendees say
        </div>
        <h2
          className="display uppercase self-stretch mb-12 max-w-[900px]"
          style={{
            color: '#F9F9F9',
            fontFamily: 'Unbounded, system-ui, sans-serif',
            fontSize: 28,
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '-2px',
          }}
        >
          What 2025 Attendees Told Us.
        </h2>

        {/* Mobile: snap-x carousel */}
        <div className="md:hidden -mx-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex gap-4 pb-2 px-8">
            {SPONSOR_QUOTES.map((q) => (
              <figure
                key={q.name}
                className="flex-none w-[85%] snap-start rounded-2xl border border-white/10 p-6 bg-[#06101a]/40 flex flex-col"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma-assets/quote-red.png" alt="" className="w-9 h-auto mb-4" />
                <blockquote className="text-[15px] text-white/85 leading-[1.55] flex-1">
                  {q.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/15">
                    <Image src={q.img} alt={q.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white leading-tight">{q.name}</div>
                    <div className="text-[12px] text-white/55 leading-tight mt-0.5">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid gap-5 md:grid-cols-2">
          {SPONSOR_QUOTES.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-white/10 p-6 md:p-7 bg-[#06101a]/40 flex flex-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma-assets/quote-red.png" alt="" className="w-9 h-auto mb-4" />
              <blockquote className="text-[15px] md:text-[16px] text-white/85 leading-[1.55] flex-1">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/15">
                  <Image src={q.img} alt={q.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white leading-tight">{q.name}</div>
                  <div className="text-[12px] text-white/55 leading-tight mt-0.5">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
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
            Sponsorship at this conference is not a credit card transaction. We manually review every application to protect the room.
          </p>
        </div>

        <div className="flex flex-col md:flex-row self-stretch" style={{ gap: 24 }}>
          {/* What works — ~60% width */}
          <div
            className="flex flex-col items-start"
            style={{
              flex: '3 1 0%',
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
                  key={item.title}
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
                  <span>
                    <span style={{ fontWeight: 600 }}>{item.title}:</span> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What doesn't — ~40% width */}
          <div
            className="flex flex-col items-start"
            style={{
              flex: '2 1 0%',
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
                  key={item.title}
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
                  <span>
                    <span style={{ fontWeight: 600 }}>{item.title}:</span> {item.desc}
                  </span>
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
            The quality of our attendee list is the foundation of this conference. If a
            prospective sponsor&apos;s product misaligns with our audience, we politely decline.
            We filter out the noise to ensure attendee trust and your ROI stay completely intact.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── 6. APPLY TO SPONSOR ─────────────────────────── */

function ApplyToSponsor() {
  const [tier, setTier] = useState('Not Sure Yet');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus('submitting');
    try {
      const res = await fetch('/api/sponsorship-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactName: fd.get('contact'),
          email: fd.get('email'),
          tier,
          message: (fd.get('message') as string) || undefined,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

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
              Contact us via email or fill out the inquiry form.
              <br />
              <br />
              We will reply within 48 hours with our full 2026 sponsorship deck (with detailed
              tiers and attendee data) and discuss potential partnership opportunities.
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
          {status === 'success' ? (
            <div
              className="flex flex-col gap-4 md:flex-1 md:max-w-[560px] justify-center self-stretch"
              style={{
                padding: 'clamp(24px, 4vw, 40px)',
                borderRadius: 20,
                border: '1px solid #118BAC',
                background: '#0D1017',
              }}
              role="status"
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
                Success.
              </div>
              <p
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
              >
                Expect the 2026 sponsorship deck and next steps in your inbox within 48 hours.
              </p>
            </div>
          ) : (
          <form
            className="flex flex-col gap-4 md:flex-1 md:max-w-[560px]"
            onSubmit={handleSubmit}
          >
            <Input name="contact" placeholder="Contact Name" required />
            <Input name="email" type="email" placeholder="E-mail Address" required />

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
              disabled={status === 'submitting'}
              className="display gradient-cta rounded-full uppercase mt-2 disabled:opacity-60"
              style={{
                display: 'inline-flex',
                padding: '14px 32px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                width: 'auto',
                alignSelf: 'flex-start',
                color: '#F9F9F9',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 16,
                fontWeight: 600,
                lineHeight: '24px',
              }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {status === 'error' && (
              <p
                role="alert"
                style={{
                  color: '#EB3030',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  lineHeight: '20px',
                }}
              >
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
          )}
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
      <Nav linkBase="/" />
      <Hero />
      <Confirmed2026 />
      <TierComparisonTable />
      <WhyThisEvent />
      <QuoteBlock />
      <WhoWeLetIn />
      <ApplyToSponsor />
      {/* 2025 Partners section temporarily hidden */}
      {/* <YearOne2025 /> */}
      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
