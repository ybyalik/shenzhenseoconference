'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';

/* ────────────────────── DATA (placeholder — swap with real list) ─────────────────── */

type Speaker = {
  name: string;
  country: string;
  title: string;
  img: string;
};

const KEYNOTES: Speaker[] = [
  {
    name: 'Gary Illyes',
    country: 'United States',
    title: 'Search Relations, Google',
    img: '/figma-assets/gary-illyes.jpg',
  },
  {
    name: 'Lily Ray',
    country: 'United States',
    title: 'VP SEO Strategy & Research',
    img: '/figma-assets/Lily-Ray1.jpg',
  },
  {
    name: 'Eli Schwartz',
    country: 'United States',
    title: 'Growth Advisor, Author of Product-Led SEO',
    img: '/figma-assets/Eli-Schwartz1.jpg',
  },
  {
    name: 'Lars Lofgren',
    country: 'United States',
    title: 'CEO, Stone Press',
    img: '/figma-assets/Lars-Lofgren1.jpg',
  },
  {
    name: 'Aleyda Solis',
    country: 'Spain',
    title: 'Founder, Orainti',
    img: '/figma-assets/a98cc2407eac3ef826ce296466a19c22b89a4777.jpg',
  },
];

const WORKSHOPS: Speaker[] = [
  { name: 'Bernard Huang', country: 'United States', title: 'Co-founder, Clearscope', img: '/figma-assets/Bernard-Huang1.jpg' },
  { name: 'Doug Pierce', country: 'United States', title: 'SEO Consultant', img: '/figma-assets/Doug-Pierce1.jpg' },
  { name: 'Loki Yan', country: 'China', title: 'SEO Practitioner', img: '/figma-assets/Loki-Yan1.jpg' },
  { name: 'Mads Singers', country: 'Denmark', title: 'Management Consultant', img: '/figma-assets/Mads-Singers1.jpg' },
  { name: 'Megan Gougeon', country: 'United States', title: 'SEO Strategist', img: '/figma-assets/Megan-Gougeon1.jpg' },
  { name: 'Mike Dee', country: 'United States', title: 'SEO Consultant', img: '/figma-assets/Mike-Dee1.jpg' },
  { name: 'Nick Drewe', country: 'United Kingdom', title: 'Founder, WeThrift', img: '/figma-assets/Nick-Drewe1.jpg' },
  { name: 'Owain Lloyd-Williams', country: 'United Kingdom', title: 'SEO Practitioner', img: '/figma-assets/Owain-Lloyd-Williams1.jpg' },
  { name: 'Victor Huynh', country: 'United States', title: 'SEO Consultant', img: '/figma-assets/Victor-Huynh1.jpg' },
  { name: 'Zack Franklin', country: 'United States', title: 'SEO agency owner, 7-figures', img: '/figma-assets/Zack-Franklin1.jpg' },
  { name: 'Gael Breton', country: 'France', title: 'Co-founder, Authority Hacker', img: '/figma-assets/4b767e80b2b757091a90554414ca31841996deeb.jpg' },
  { name: 'Charles Floate', country: 'United Kingdom', title: 'SEO Practitioner', img: '/figma-assets/a1bad36616537f10b8dfb095a790d57f0a93de74.jpg' },
];

const WHO_TOOK_STAGE = [
  { name: 'Terry Kyle', country: 'IE', title: 'Ex-eBay, WPX.net', img: '/figma-assets/jp-avatar.png' },
  { name: 'Stewart Vickers', country: 'CN', title: 'SEO Practitioner', img: '/figma-assets/Mike-Dee1.jpg' },
  { name: 'Nathan Witczyk', country: 'US', title: 'Technical SEO Audits', img: '/figma-assets/Mads-Singers1.jpg' },
  { name: 'Charles Floate', country: 'UK', title: 'SEO Consultant', img: '/figma-assets/Zack-Franklin1.jpg' },
];

const BENEFITS = [
  {
    title: 'Full Logistics, Handled.',
    body: 'Visa invitation letters. Airport pick-up and drop-off. Hotel. Interpreters if you need one. You land and focus on the talk.',
    img: '/assets/full-logistics.png',
  },
  {
    title: '1 Full Day of Guided Shenzhen.',
    body: 'Huaqiangbei, Nantou walled city, tech companies, the bay, the factories. Not a tourist loop — the working city.',
    img: '/assets/guided-shenzhen.png',
  },
  {
    title: "A Chinese Audience You Won't Find at Brighton or Pubcon.",
    body: "300+ in-house SEO decision makers from brands going global. They don't travel to London or San Diego.",
    img: '/assets/chinese-audience.png',
  },
  {
    title: 'Speakers Talk, Then They Stay.',
    body: 'Most stay through the week. The actual conversations happen on Day 3 and Day 5 — after the stage.',
    img: '/assets/speakers-talk.png',
  },
];

const LOOK_FOR = [
  {
    n: 1,
    title: 'A Real Case Study',
    body:
      'Ranked #1 for something that mattered. Scaled a site. Fixed a penalty. Moved revenue. Show the numbers or show the before/after.',
  },
  {
    n: 2,
    title: 'One Tactic the Room Can Run Monday',
    body: 'We vet for "what did you ship," not "what do you believe."',
  },
  {
    n: 3,
    title: 'Willingness to Take Hard Questions',
    body: 'No slide-and-leave. You stay for the Q&A and you stay for the week.',
  },
  {
    n: 4,
    title: 'A Position on Where SEO Is Going',
    body: 'Google, LLMs, Baidu, WeChat. We want people who can talk both sides.',
  },
];

const DONT_WANT = [
  { n: 1, body: 'Theorists without case studies' },
  { n: 2, body: 'AI-generated talks' },
  { n: 3, body: 'Sales pitches dressed as talks' },
  { n: 4, body: "Anyone who won't share numbers" },
];

const DAYS = [
  { label: 'Day 1 of 4', a: '/assets/day1a.png', b: '/assets/day1b.png', c: '/assets/day1c.png' },
  { label: 'Day 2 of 4', a: '/assets/day2a.png', b: '/assets/day2b.png', c: '/assets/day2c.png' },
  { label: 'Day 3 of 4', a: '/assets/day3a.png', b: '/assets/day3b.png', c: '/assets/day3c.png' },
  { label: 'Day 4 of 4', a: '/assets/day4a.png', b: '/assets/day4b.png', c: '/assets/day4c.png' },
];

const SPEAKER_QUOTES = [
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
  {
    text:
      'There are very few opportunities for Western and Chinese SEOs to be in the same room in real life. This one is unique.',
    name: 'Zack Franklin',
    role: '2025 Speaker',
    img: '/figma-assets/Zack-Franklin1.jpg',
  },
];

/* ────────────────────────────────── ICONS ──────────────────────────────────── */

function CheckCircleIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10l3 3 5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 6l-6 6 6 6"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6l6 6-6 6"
      />
    </svg>
  );
}

/* ─────────────────────────────── SPEAKER CARD ─────────────────────────────── */

function SpeakerCard({ s }: { s: Speaker }) {
  return (
    <div className="rounded-2xl bg-[#06101a]/60 p-4 md:p-6 border border-white/[0.06] hover:border-[var(--red)] transition-colors">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
        <Image
          src={s.img}
          alt={s.name}
          fill
          className="object-cover grayscale-[12%]"
          sizes="(max-width: 768px) 50vw, 320px"
        />
      </div>
      <div className="mt-5 text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase">
        {s.country}
      </div>
      <div className="mt-3 text-[16px] md:text-[20px] font-bold text-white leading-tight">
        {s.name}
      </div>
      <div className="mt-1.5 text-[12px] md:text-[14px] text-white/55 leading-snug line-clamp-2">
        {s.title}
      </div>
    </div>
  );
}

/* ──────────────────────────────────── HERO ────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/speakers-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-80 md:opacity-70"
          sizes="100vw"
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

      <div className="container pt-[220px] md:pt-[260px] lg:pt-[340px] pb-12 md:pb-20">
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
        <h1
          className="display uppercase text-white text-[24px] leading-[140%] md:text-[clamp(40px,7vw,64px)] md:leading-[120%]"
          style={{ letterSpacing: '-0.01em', fontWeight: 600 }}
        >
          <span className="block">40+ Practitioners.</span>
          <span className="block gradient-text-brand">One Stage.</span>
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-[640px] text-[14px] leading-[160%] md:text-[18px] md:leading-[170%]"
          style={{
            color: '#F9F9F9',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 500,
            opacity: 0.7,
          }}
        >
          Every speaker has shipped real work. No theorists. No professional keynoters.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── LINEUP ───────────────────────────────── */

function Lineup() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? WORKSHOPS : WORKSHOPS.slice(0, 10);

  return (
    <section id="speakers" className="bg-[#03060d]">
      <div className="container py-12 md:py-24 lg:py-[96px] flex flex-col" style={{ gap: 16 }}>
        <h2
          className="display uppercase text-white"
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '-2px',
          }}
        >
          2026 Lineup
        </h2>

        <div className="flex flex-col items-start" style={{ gap: 48 }}>
          <p
            className="text-white/80 max-w-[640px]"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '150%',
            }}
          >
            Each speaker is vetted for three things: a real case study, one concrete tactic
            attendees can run Monday morning, and willingness to take hard questions from the floor.
          </p>

          <div className="flex flex-col items-start self-stretch" style={{ gap: 48 }}>
            {/* Keynotes */}
            <div className="flex flex-col gap-6 self-stretch">
              <h3
                className="display uppercase text-white"
                style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, lineHeight: '100%' }}
              >
                Keynotes
              </h3>
              <div className="grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {KEYNOTES.map((s) => (
                  <SpeakerCard key={s.name} s={s} />
                ))}
              </div>
            </div>

            {/* Workshops & Talks */}
            <div className="flex flex-col gap-6 self-stretch">
              <h3
                className="display uppercase text-white"
                style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, lineHeight: '100%' }}
              >
                Workshops & Talks
              </h3>
              <div className="grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {visible.map((s, i) => (
                  <SpeakerCard key={`${s.name}-${i}`} s={s} />
                ))}
              </div>

              {WORKSHOPS.length > 10 && (
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={() => setShowAll((v) => !v)}
                    className="display btn-outline-white inline-flex uppercase"
                    style={{
                      padding: '16px 48px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 12,
                      borderRadius: 1000,
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: '150%',
                    }}
                  >
                    {showAll ? 'Show Less' : 'Load More'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── ROOM IN 2025 ────────────────────────────── */

function Room2025() {
  const [day, setDay] = useState(2); // Day 3 of 4 active in screenshot

  return (
    <section className="bg-[#03060d]">
      <div className="container py-12 md:py-24 lg:py-[96px] flex flex-col gap-12 lg:gap-16">
        {/* Heading + side blurb */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
          <h2
            className="display uppercase text-white"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            <span className="block">What the Room</span>
            <span className="block">Looked Like in 2025</span>
          </h2>
          <p
            className="text-white/60 md:max-w-[480px]"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '160%',
            }}
          >
            38 speakers, 1,200 SEOs, one stage in Shenzhen. Here&apos;s a glimpse of last
            year&apos;s room and a few of the names that filled it.
          </p>
        </div>

        {/* Day slider header — single day shown, arrows cycle through */}
        <div className="flex items-end justify-between gap-4 flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-start gap-1 text-left">
            <span
              className="uppercase"
              style={{
                color: '#eb3030',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              {DAYS[day].label}
            </span>
            <span
              className="display uppercase"
              style={{
                color: '#F9F9F9',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 700,
                lineHeight: '120%',
              }}
            >
              Main Stage Talks
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous day"
              onClick={() => setDay((d) => (d - 1 + DAYS.length) % DAYS.length)}
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
              aria-label="Next day"
              onClick={() => setDay((d) => (d + 1) % DAYS.length)}
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

        {/* Gallery: 1 large + 2 stacked, swapped per active day */}
        <div className="grid gap-4 md:grid-cols-[1.6fr_1fr] md:auto-rows-[210px]">
          <div className="relative md:row-span-2 rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={DAYS[day].a}
              alt={`${DAYS[day].label} main`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden h-[180px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={DAYS[day].b}
              alt={`${DAYS[day].label} top right`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden h-[180px] md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={DAYS[day].c}
              alt={`${DAYS[day].label} bottom right`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Who took that stage */}
        <div
          className="flex flex-col items-start self-stretch mt-4"
          style={{
            padding: 'clamp(24px, 4vw, 48px)',
            gap: 'clamp(24px, 4vw, 48px)',
            borderRadius: 40,
            border: '1px solid rgba(249, 249, 249, 0.15)',
          }}
        >
          <div className="flex flex-col gap-2 self-stretch">
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
              A Few of the Names · 2025
            </span>
            <h3
              className="display uppercase text-white"
              style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 800, lineHeight: '120%' }}
            >
              Who Took That Stage.
            </h3>
          </div>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 self-stretch">
            {WHO_TOOK_STAGE.map((p) => (
              <div
                key={p.name}
                className="flex items-start transition-all"
                style={{
                  flex: '1 0 0',
                  padding: 18,
                  gap: 16,
                  borderRadius: 16,
                  border: '1px solid rgba(249, 249, 249, 0.15)',
                  background: 'rgba(249, 249, 249, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderRadius = '24px';
                  e.currentTarget.style.border = '1px solid #EB3030';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderRadius = '16px';
                  e.currentTarget.style.border = '1px solid rgba(249, 249, 249, 0.15)';
                }}
              >
                <div
                  aria-label={p.name}
                  role="img"
                  className="shrink-0"
                  style={{
                    width: 72,
                    height: 72,
                    aspectRatio: '1 / 1',
                    borderRadius: 1000,
                    background: `url('${p.img}') #d3d3d3 50% / cover no-repeat`,
                  }}
                />
                <div className="flex flex-col gap-3 justify-center self-stretch">
                  <span
                    className="uppercase text-white/50"
                    style={{
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: 1,
                      lineHeight: '100%',
                    }}
                  >
                    {p.country}
                  </span>
                  <span
                    className="display text-white"
                    style={{ fontSize: 14, fontWeight: 500, lineHeight: '100%' }}
                  >
                    {p.name}
                  </span>
                  <span
                    className="text-white/50"
                    style={{
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 12,
                      lineHeight: '100%',
                    }}
                  >
                    {p.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── WHAT SPEAKERS GET ──────────────────────────── */

function PullQuoteCarousel() {
  const [idx, setIdx] = useState(0);
  const q = SPEAKER_QUOTES[idx];
  const total = SPEAKER_QUOTES.length;

  return (
    <div
      className="relative flex flex-col items-start md:items-center mt-4 self-stretch"
      style={{
        padding: 'clamp(40px, 6vw, 64px) clamp(24px, 10vw, 144px)',
        gap: 32,
        borderRadius: 32,
        border: '1px solid rgba(249, 249, 249, 0.20)',
        background: 'transparent',
      }}
    >
      {/* Prev / Next — inside the card, vertical center, on the side rails */}
      <button
        type="button"
        aria-label="Previous quote"
        onClick={() => setIdx((i) => (i - 1 + total) % total)}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 items-center justify-center hover:bg-white/5 transition-colors"
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
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 items-center justify-center hover:bg-white/5 transition-colors"
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

      {/* Big red quotation mark */}
      <svg
        viewBox="0 0 64 50"
        aria-hidden="true"
        style={{
          width: 53.169,
          height: 48.741,
          aspectRatio: '12 / 11',
          color: '#eb3030',
        }}
      >
        <path
          fill="currentColor"
          d="M0 50V28C0 12 9 2 24 0l3 7c-7 2-12 8-12 14h12v29H0Zm37 0V28c0-16 9-26 24-28l3 7c-7 2-12 8-12 14h12v29H37Z"
        />
      </svg>

      <p
        className="display text-white text-left md:text-center max-w-[860px]"
        style={{
          fontSize: 'clamp(20px, 2.6vw, 32px)',
          fontWeight: 700,
          lineHeight: '140%',
          textTransform: 'uppercase',
          letterSpacing: '-0.005em',
        }}
      >
        {q.text}
      </p>

      <div className="flex items-center gap-3">
        <div
          aria-label={q.name}
          role="img"
          style={{
            width: 48,
            height: 48,
            borderRadius: 48,
            background: `url('${q.img}') #d3d3d3 0px -4.32px / 100% 150% no-repeat`,
          }}
        />
        <div className="flex flex-col items-start">
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

      {/* Bottom row: dashes (left) + mobile arrows (right). On md+ the
          arrows show on the sides instead so this row centers the dashes. */}
      <div className="flex items-center justify-between md:justify-center gap-4 self-stretch">
        <div className="flex items-center gap-1.5">
          {SPEAKER_QUOTES.map((_, i) => (
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

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => setIdx((i) => (i - 1 + total) % total)}
            className="flex items-center justify-center hover:bg-white/5 transition-colors"
            style={{
              padding: 12,
              gap: 8,
              borderRadius: 100,
              border: '1px solid rgba(249, 249, 249, 0.20)',
              background: 'transparent',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma-assets/arrow-left.svg" alt="" className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next quote"
            onClick={() => setIdx((i) => (i + 1) % total)}
            className="flex items-center justify-center hover:bg-white/5 transition-colors"
            style={{
              padding: 12,
              gap: 8,
              borderRadius: 100,
              border: '1px solid rgba(249, 249, 249, 0.20)',
              background: 'transparent',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma-assets/arrow-right.svg" alt="" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SpeakersGet() {
  return (
    <section className="bg-[#03060d]">
      <div className="container py-12 md:py-24 lg:py-[96px] flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2
            className="display uppercase text-white"
            style={{
              width: 691,
              maxWidth: '100%',
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              lineHeight: '140%',
              letterSpacing: '-1px',
            }}
          >
            <span className="inline md:block">What Speakers Get Here, </span>
            <span className="inline md:block">They Don&apos;t Get Elsewhere.</span>
          </h2>
          <p
            className="text-white/70 lg:whitespace-nowrap"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '170%',
            }}
          >
            Most SEO conferences hand you a name badge and a slot. This one is built around the speakers.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 hover:border-[var(--red)] transition-colors p-6 md:p-8 flex flex-col"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[548/289] bg-white/5">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 548px"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.65) 100%)',
                  }}
                />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <h4
                  className="display uppercase text-white"
                  style={{ fontSize: 20, fontWeight: 700, lineHeight: '120%' }}
                >
                  {b.title}
                </h4>
                <p
                  className="text-white/65"
                  style={{
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: '170%',
                  }}
                >
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <PullQuoteCarousel />

        <div className="flex justify-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/25 text-white hover:bg-white/5 transition-colors"
          >
            <span
              className="display uppercase tracking-[0.16em]"
              style={{ fontSize: 13, fontWeight: 600 }}
            >
              Apply to Speak for 2027
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── CRITERIA + APPLY FORM ─────────────────────────── */

function Criteria() {
  return (
    <section className="bg-[#03060d]">
      <div className="container py-12 md:py-24 lg:py-[96px] flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-3">
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
            How We Pick Speakers
          </span>
          <h2
            className="display uppercase text-white"
            style={{
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 32px)',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            What We Look For. What We Don&apos;t.
          </h2>
          <p
            className="max-w-[600px]"
            style={{
              color: '#F9F9F9',
              opacity: 0.8,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            Being on this stage is not a favor. It&apos;s a filter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: 32 }}>
          {/* Look for */}
          <div className="flex flex-col" style={{ gap: 20 }}>
            <div
              className="display uppercase"
              style={{
                alignSelf: 'stretch',
                color: '#118BAC',
                fontFamily: 'Unbounded, system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 600,
                lineHeight: '120%',
              }}
            >
              What We Look For
            </div>
            <div className="grid sm:grid-cols-2" style={{ gap: 16 }}>
              {LOOK_FOR.map((item) => (
                <div
                  key={item.n}
                  className="rounded-2xl flex flex-col items-center text-center"
                  style={{
                    border: '1px solid rgba(17, 139, 172, 0.45)',
                    background: 'transparent',
                    padding: '32px 24px',
                    gap: 16,
                    minHeight: 240,
                  }}
                >
                  <div
                    className="display"
                    style={{
                      color: '#118bac',
                      fontSize: 56,
                      fontWeight: 700,
                      lineHeight: '100%',
                    }}
                  >
                    {item.n}
                  </div>
                  <div
                    className="display uppercase text-white"
                    style={{
                      fontFamily: 'Unbounded, system-ui, sans-serif',
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: '130%',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-white/65"
                    style={{
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 400,
                      lineHeight: '160%',
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't want */}
          <div className="flex flex-col h-full" style={{ gap: 20 }}>
            <div
              className="display uppercase"
              style={{
                alignSelf: 'stretch',
                color: '#EB3030',
                fontFamily: 'Unbounded, system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 600,
                lineHeight: '120%',
              }}
            >
              What We Don&apos;t Want
            </div>
            <ul className="flex flex-col flex-1" style={{ gap: 16 }}>
              {DONT_WANT.map((item) => (
                <li
                  key={item.n}
                  className="flex items-center rounded-2xl self-stretch"
                  style={{
                    flex: '1 0 0',
                    gap: 16,
                    padding: 24,
                    border: '1px solid rgba(235, 48, 48, 0.45)',
                    background: 'rgba(235, 48, 48, 0.06)',
                  }}
                >
                  <span
                    className="grid place-items-center rounded-full text-white shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      background: '#eb3030',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {item.n}
                  </span>
                  <span
                    className="text-white"
                    style={{
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: '160%',
                    }}
                  >
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply form */}
        <div
          id="apply"
          className="mt-4 flex flex-col md:flex-row md:items-stretch self-stretch gap-16 md:gap-6"
          style={{
            padding: 'clamp(24px, 5vw, 64px)',
            justifyContent: 'space-between',
            borderRadius: 48,
            border: '1px solid rgba(249, 249, 249, 0.20)',
            background: '#03060D',
          }}
        >
          <div
            className="shrink-0 w-[297px] h-[297px] md:w-[505px] md:h-[517px] max-w-full"
            aria-hidden
            style={{
              borderRadius: 24,
              background:
                "linear-gradient(0deg, rgba(55, 79, 116, 0.55), rgba(55, 79, 116, 0.55)), url('/assets/jp-talk.png') 50% / cover no-repeat #d3d3d3",
            }}
          />
          <div className="flex flex-col gap-6 md:max-w-[560px] md:w-full md:flex-1">
            <div className="flex flex-col gap-4 md:gap-3">
              <span
                className="uppercase"
                style={{
                  color: '#eb3030',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                Become a Speaker
              </span>
              <h3
                className="display uppercase text-white"
                style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 800, lineHeight: '110%' }}
              >
                Apply to Speak (2027)
              </h3>
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
                Got a case study worth sharing? A tactic that moved the needle? Drop your name
                below. We read every application.
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire up to /api/speaker-apply or similar
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  required
                  className="text-[16px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] text-white"
                  style={{
                    flex: '1 1 0',
                    display: 'flex',
                    height: '64px',
                    padding: '22px 24px',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '20px',
                    border: '1px solid rgba(249, 249, 249, 0.10)',
                    background: 'transparent',
                  }}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="text-[16px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] text-white"
                  style={{
                    flex: '1 1 0',
                    display: 'flex',
                    height: '64px',
                    padding: '22px 24px',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '20px',
                    border: '1px solid rgba(249, 249, 249, 0.10)',
                    background: 'transparent',
                  }}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                required
                className="w-full text-[16px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] text-white"
                style={{
                  display: 'flex',
                  height: '64px',
                  padding: '22px 24px',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'stretch',
                  borderRadius: '20px',
                  border: '1px solid rgba(249, 249, 249, 0.10)',
                  background: 'transparent',
                }}
              />
              <button
                type="submit"
                className="display rounded-full gradient-cta uppercase"
                style={{
                  display: 'flex',
                  padding: '16px 24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px',
                  alignSelf: 'stretch',
                  width: '100%',
                  color: '#F9F9F9',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '150%',
                }}
              >
                SEND MESSAGE
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── FINAL CTA ───────────────────────────────── */

function FinalCta() {
  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div
          className="rounded-[28px] py-14 md:py-20 px-6 md:text-center"
          style={{
            background:
              'linear-gradient(160deg, #114555 0%, #0a3142 35%, #06222d 70%, #051820 100%)',
          }}
        >
          <h2 className="display text-[28px] md:text-[40px] font-semibold leading-[1.1] uppercase tracking-[-0.005em] max-w-[920px] md:mx-auto text-white">
            <span className="block">See Who&apos;s Speaking.</span>
            <span className="block">Get in the Room.</span>
          </h2>
          <p
            className="mt-5 max-w-[720px] md:max-w-none md:mx-auto self-stretch"
            style={{
              color: '#F9F9F9',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '160%',
            }}
          >
            600 seats. 40+ speakers. 30+ countries. Five days.
          </p>
          <Link
            href="/#pricing"
            className="mt-8 display inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] gradient-cta text-white"
          >
            GET TICKETS TODAY
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────── PAGE ────────────────────────────────── */

export default function Speakers5Page() {
  return (
    <main className="home5-root">
      <Nav linkBase="/" />
      <Hero />
      <Lineup />
      <Room2025 />
      <SpeakersGet />
      <Criteria />
      <FinalCta />
      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
