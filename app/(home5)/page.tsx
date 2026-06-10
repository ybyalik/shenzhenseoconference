'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BackToTop, Footer, Nav } from './_components/shared';

const A = {
  heroBg: '/figma-assets/herohome.jpg',
  founderPortrait: '/figma-assets/jp-portrait.png',
  founderAvatar: '/figma-assets/jp-avatar.webp',
  founderSignature: '/figma-assets/jp-signature.png',
  recap: '/assets/video-cover.webp',
  audInternational: '/figma-assets/audience-international.png',
  audChinese: '/figma-assets/audience-chinese.png',
  why1: '/figma-assets/6e1365b901e58c47813d8a9a6c17f43ff4c0f557.png',
  why2: '/figma-assets/c180b122845d182aed2c6a1c3b0f9c898e707c2f.jpg',
  why3: '/figma-assets/ea9863f1c46347ee75ce39500df9c0b12b743af6.png',
  why4: '/figma-assets/1a227bbe08c421d3cc2d14d7b8c4b6b82263e2bc.jpg',
  spkA: '/figma-assets/a98cc2407eac3ef826ce296466a19c22b89a4777.jpg',
  garyIllyes: '/assets/gary-illyes.webp',
  spkB: '/figma-assets/4b767e80b2b757091a90554414ca31841996deeb.jpg',
  spkC: '/figma-assets/a1bad36616537f10b8dfb095a790d57f0a93de74.jpg',
  spkD: '/figma-assets/423641b5b8fba6de7b4b21cd2a4d1251130007c3.jpg',
  venueStRegis: '/figma-assets/688936701b4bc80748c25feedf98d48b907a3e4b.png',
  venueMgm: '/figma-assets/mgm.png',
  testimonial1: '/figma-assets/32b31077323cc00c521e68046604026524586096.jpg',
  testimonial2: '/figma-assets/5d3a381b1ca81cf042afc9c25229fa75dfb6885c.jpg',
  avMike: '/figma-assets/Mike-Dee1.jpg',
  avMads: '/figma-assets/Mads-Singers1.jpg',
  avZack: '/figma-assets/Zack-Franklin1.jpg',
};

const SPONSORS = {
  platinum: [] as { src: string; alt: string; h: number }[],
  gold: [
    { src: '/figma-assets/sponsor-swishdm.png', alt: 'Swish DM', h: 56 },
    { src: '/figma-assets/sponsor-dynadot.png', alt: 'Dynadot', h: 48 },
  ],
  silver: [
    { src: '/figma-assets/73b861094a7ce5e5553ff2eacca50af9313eddc6.png', alt: 'ecomeXperts', h: 44 },
    { src: '/figma-assets/sponsor-convertbetter.png', alt: 'ConvertBetter', h: 44 },
    { src: '/figma-assets/8842dd91b89a6d7f26f78f6178e930f87bc16a6b.png', alt: 'CLOOM TECH', h: 44 },
  ],
};

function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M8 5v14l11-7z" />
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
        d="M3 6h18v12H3V6Zm0 0 9 7 9-7"
      />
    </svg>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 12 5 5L20 6"
      />
    </svg>
  );
}

function PlusIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.25 2.5h1.5v4.75H13.5v1.5H8.75V13.5h-1.5V8.75H2.5v-1.5h4.75V2.5Z"
      />
    </svg>
  );
}

function MapPinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0a5.5 5.5 0 0 0-5.5 5.5c0 4 5.5 10.5 5.5 10.5s5.5-6.5 5.5-10.5A5.5 5.5 0 0 0 8 0Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </svg>
  );
}

/** Tracks which carousel card is currently in view inside a scroll-snap container. */
function useCarouselActive(trackRef: React.RefObject<HTMLDivElement | null>) {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.querySelectorAll<HTMLElement>('[data-card-idx]'));
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute('data-card-idx'));
            setActiveIdx(idx);
          }
        }
      },
      { root: track, threshold: 0.6 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [trackRef]);
  return activeIdx;
}

function CarouselDots({ count, active }: { count: number; active: number }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-200 ${
            i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
          }`}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────── NAV ───────────────────────────── */

/* ───────────────────────────── HERO (28:65) ───────────────────────────── */
function HeroTitleLine({
  label,
  word,
  gradient,
}: {
  label: string;
  word: string;
  /** CSS background value to clip to the word text. */
  gradient: string;
}) {
  return (
    <span className="flex items-baseline gap-2 md:gap-5">
      <span
        className="display text-[12px] md:text-[16px]"
        style={{
          color: '#F9F9F9',
          fontWeight: 600,
          lineHeight: '100%',
        }}
      >
        {label}
      </span>
      <span
        className="display text-[24px] md:text-[48px]"
        style={{
          fontWeight: 600,
          lineHeight: '100%',
          background: gradient,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        {word}
      </span>
    </span>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#03060d] min-h-screen md:min-h-0 flex flex-col"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={A.heroBg}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Mobile overlay: darker so the title reads cleanly */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.15) 5%, rgba(3, 6, 13, 0.85) 55%, #03060D 100%)',
          }}
        />
        {/* Desktop overlay: lighter so the skyline shows through */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0) 15%, rgba(3, 6, 13, 0.65) 60%, #03060D 100%)',
          }}
        />
      </div>
      {/* Headline + right column */}
      <div className="container pt-[200px] md:pt-[260px] lg:pt-[380px] xl:pt-[400px] 2xl:pt-[480px] pb-10 md:pb-16 2xl:pb-24">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* LEFT: title + date (date below H1 on desktop only; on mobile date is in RIGHT column under the paragraph) */}
          <div className="flex flex-col">
            <div className="hidden lg:flex order-2 lg:mt-7 items-center gap-3 text-[14px] text-white/90 lg:mb-0">
              <span className="font-bold">September 14–18, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/55" aria-hidden />
              <span className="font-medium">The St. Regis Shenzhen</span>
            </div>
            <h1
              className="order-1 display uppercase text-[24px] md:text-[48px] flex flex-col items-start gap-3"
              style={{
                color: '#F9F9F9',
                fontWeight: 600,
                lineHeight: '100%',
              }}
            >
              <span>East Meets West</span>
              <HeroTitleLine
                label="IN"
                word="SEO"
                gradient="linear-gradient(90deg, #128AAB 0%, #427E97 100%)"
              />
              <HeroTitleLine
                label="IN"
                word="Shenzhen"
                gradient="linear-gradient(90deg, #118BAC 0%, #FD4C4C 100%)"
              />
            </h1>
          </div>

          {/* RIGHT: description + CTA (filled red on mobile, outline on desktop) */}
          <div className="lg:max-w-[360px] lg:text-right flex flex-col lg:items-end gap-5 lg:gap-6">
            <p
              className="text-[16px] text-white leading-[1.7] lg:w-[500px] text-balance"
            >
              China&apos;s largest international SEO event. 5 days of English-only talks, city
              tours, masterminds, and connections you don&apos;t make on LinkedIn.
            </p>
            {/* Mobile-only date/venue under the paragraph */}
            <div className="flex lg:hidden items-center gap-3 text-[13px] text-white/90 my-4">
              <span className="font-bold">September 14–18, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/55" aria-hidden />
              <span className="font-medium">The St. Regis Shenzhen</span>
            </div>
            <a
              href="#pricing"
              className="hidden lg:inline-flex btn-outline-white display items-center gap-3 rounded-full text-[14px] font-semibold tracking-[0.18em] backdrop-blur-sm"
              style={{ padding: '12px 32px', lineHeight: '28px' }}
            >
              GET TICKETS
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile-only CTA */}
      <div className="lg:hidden mt-auto px-6">
        <a
          href="#pricing"
          className="display inline-flex items-center justify-center gap-3 w-full px-7 py-3.5 rounded-full text-[13px] font-bold tracking-[0.18em] text-white gradient-cta"
        >
          GET TICKETS
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile-only Gary quote below the CTA */}
      <div className="lg:hidden px-6 pt-10 pb-12">
        <figure className="flex items-center gap-4">
          <span
            className="relative rounded-full overflow-hidden bg-white/10 flex-none"
            style={{ width: '64px', aspectRatio: '1 / 1' }}
          >
            <Image
              src={A.garyIllyes}
              alt="Gary Illyes"
              fill
              className="object-cover"
              sizes="64px"
            />
          </span>
          <div className="min-w-0">
            <p
              style={{
                color: '#F9F9F9',
                fontSize: '13px',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: '150%',
              }}
            >
              &ldquo;Don&apos;t panic. Things change. They always do. Figure it out.&rdquo;
            </p>
            <figcaption className="mt-1.5">
              <span
                className="block"
                style={{
                  color: '#F9F9F9',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: '150%',
                  opacity: 0.6,
                }}
              >
                Gary Illyes
              </span>
              <span
                className="block"
                style={{
                  color: '#F9F9F9',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: '180%',
                  opacity: 0.6,
                }}
              >
                Search Relations, Google | 2025 Keynote Speaker
              </span>
            </figcaption>
          </div>
        </figure>
      </div>

      {/* Divider + quote/stats strip */}
      <div className="container hidden md:block">
        <div className="border-t border-white/15" />
      </div>
      <div className="container pt-12 md:pt-16 pb-8 md:pb-12">
        <div className="grid gap-7 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          {/* Quote — desktop only; the mobile copy lives inside the hero */}
          <figure className="hidden md:flex items-center gap-4">
            <span
              className="relative rounded-full overflow-hidden bg-white/10 flex-none"
              style={{ width: '88px', aspectRatio: '1 / 1' }}
            >
              <Image
                src={A.garyIllyes}
                alt="Gary Illyes"
                fill
                className="object-cover"
                sizes="88px"
              />
            </span>
            <div className="min-w-0">
              <p
                style={{
                  color: '#F9F9F9',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  lineHeight: '150%',
                }}
              >
                &ldquo;Don&apos;t panic. Things change. They always do. Figure it out.&rdquo;
              </p>
              <figcaption className="mt-1.5">
                <span
                  className="block"
                  style={{
                    color: '#F9F9F9',
                    fontSize: '12px',
                    fontWeight: 600,
                    lineHeight: '150%',
                    opacity: 0.6,
                  }}
                >
                  Gary Illyes
                </span>
                <span
                  className="block"
                  style={{
                    color: '#F9F9F9',
                    fontSize: '10px',
                    fontWeight: 500,
                    lineHeight: '200%',
                    opacity: 0.6,
                  }}
                >
                  Search Relations, Google | 2025 Keynote Speaker
                </span>
              </figcaption>
            </div>
          </figure>

          {/* Stats */}
          <dl
            className="grid grid-cols-4 gap-4 md:flex md:items-start md:gap-[42px] lg:justify-end self-stretch opacity-40 md:opacity-60"
          >
            {[
              ['600', 'SEATS'],
              ['40+', 'SPEAKERS'],
              ['30+', 'COUNTRIES'],
              ['5', 'DAYS'],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <dt className="display text-[28px] md:text-[32px] font-semibold leading-none text-[#f9f9f9]">
                  {n}
                </dt>
                <dd className="mt-2 text-[11px] md:text-[12px] font-semibold tracking-[0.22em] text-[#f9f9f9]">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FOUNDER LETTER (28:136) ───────────────────────────── */
function QuoteGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 44" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 44V25.6C0 18 1.7 11.6 5.1 6.5 8.5 1.4 13.7-.8 20.6 0v8.6c-3.3.4-5.8 1.7-7.5 4-1.7 2.3-2.6 5.5-2.7 9.7H22V44H0Zm34 0V25.6c0-7.6 1.7-14 5.1-19.1C42.5 1.4 47.7-.8 54.6 0v8.6c-3.3.4-5.8 1.7-7.5 4-1.7 2.3-2.6 5.5-2.7 9.7H56V44H34Z"
      />
    </svg>
  );
}

function FounderLetter() {
  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
          WHAT IS SZSEO?
        </div>
        <h2 className="display text-[28px] font-semibold uppercase leading-[1.2] self-stretch text-[#F9F9F9] mb-10 md:mb-12">
          The Story Behind <br className="md:hidden" />The Bridge
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center p-6 lg:p-12 gap-10 lg:gap-16 self-stretch rounded-[32px] border border-white/10 bg-[#03060d]">
            {/* Portrait */}
            <div className="relative aspect-[440/640] w-full lg:w-[440px] lg:flex-shrink-0 rounded-2xl overflow-hidden bg-white/5">
              <Image
                src={A.founderPortrait}
                alt="JP Zhang, Founder of Shenzhen SEO Conference"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
                priority={false}
              />
            </div>

            {/* Letter */}
            <div className="relative w-full lg:max-w-[560px] lg:flex-shrink-0">
              <QuoteGlyph className="w-10 h-8 md:w-11 md:h-9 text-[var(--red)] mb-5" />

              <div className="space-y-5 text-[14px] md:text-[16px] text-white/85 leading-[1.8] md:leading-[1.65] max-w-[560px]">
                <p>
                  In 2019, I hosted a half-day SEO event in Shenzhen for 300 people, featuring
                  international speakers like <strong className="font-bold text-white">Aleyda Solis</strong>. It worked, but then the world paused.
                </p>
                <p>
                  When we returned in 2025, the scale shifted: 4 days, 500 attendees, and a{' '}
                  <strong className="font-bold text-white">full English</strong> track on stage.{' '}
                  <strong className="font-bold text-white">35%</strong> of the room flew in from overseas.
                </p>
                <p>
                  For the first time in my 16-year SEO career, I saw Western SEO entrepreneurs
                  and professionals sitting directly beside peers from China, Japan, and South
                  Korea.
                </p>
                <p>
                  More importantly, they actually started{' '}
                  <strong className="font-bold text-white">working together</strong>. Seeing that bridge
                  finally built <strong className="font-bold text-white">between East and West</strong> has been the highlight of my career.
                </p>
                <p>
                  That is why we are back for 2026. We are moving to a larger venue for 600
                  people, but the filter remains the same:{' '}
                  <strong className="font-bold text-white">no fluff, just practitioners who have done the work</strong>.
                </p>
                <p>See you in Shenzhen!</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 max-w-[560px] mt-8">
                <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden bg-white/10 ring-2 ring-white/15">
                  <Image
                    src={A.founderAvatar}
                    alt="JP Zhang"
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-[15px] md:text-[16px] font-bold leading-tight">
                    JP/John Zhang
                  </div>
                  <div className="text-[13px] md:text-[14px] font-semibold text-white/60 leading-tight mt-0.5">
                    Founder, Shenzhen SEO Conference
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 2025 RECAP (28:153) ───────────────────────────── */
function Recap() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };

  return (
    <section className="bg-[#03060d] py-8 lg:py-24">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden aspect-[1248/702] mx-auto bg-white/5 lg:max-w-[80%]">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            playsInline
            controls={isPlaying}
            poster={A.recap}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            aria-label="Shenzhen SEO Conference 2025 recap video"
          >
            <source
              src="https://yuryfiles.s3.ap-southeast-2.amazonaws.com/shenzhen2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <>
              {/* subtle bottom-only darken */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)',
                }}
              />

              {/* full-card click target to start playback */}
              <button
                type="button"
                aria-label="Play 2025 Recap video"
                onClick={handlePlay}
                className="absolute inset-0"
              />

              {/* visible play affordance */}
              <div className="absolute left-5 bottom-5 md:left-8 md:bottom-8 inline-flex items-center gap-3 lg:gap-4 pointer-events-none">
                <span
                  className="flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 rounded-full"
                  style={{ background: '#118BAC' }}
                >
                  <PlayIcon className="w-4 h-4 lg:w-6 lg:h-6 text-white translate-x-[1px]" />
                </span>
                <span
                  className="display uppercase text-[8px] lg:text-[18px]"
                  style={{
                    color: '#F9F9F9',
                    fontWeight: 700,
                    lineHeight: '160%',
                  }}
                >
                  Watch the 2025 Recap
                </span>
              </div>

            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── AUDIENCES (28:164) ───────────────────────────── */
function Audiences() {
  const intl = [
    {
      h: 'China Entry & Strategy',
      p: "Skip the 6-month consultant hunt. Meet customers, partners, and talent you won't find online.",
    },
    {
      h: 'China Search & AI Ecosystem',
      p: 'Adapt your marketing strategy for China with actionable insights on Baidu, WeChat, and Douyin.',
    },
    {
      h: 'Discover Shenzhen',
      p: 'Explore the "Silicon Valley of Hardware" and see how it grew from a village to a global tech city in 40 years.',
    },
    {
      h: 'Not For',
      p: 'Anyone holding outdated stereotypes of China, non-English speakers, or those without a genuine desire to explore.',
    },
  ];
  const cn = [
    {
      h: 'SEO & Growth Strategy',
      p: 'Master Google, LLMs, YouTube, and more from world-class speakers and practitioners, right here in China.',
    },
    {
      h: 'International Partnerships',
      p: 'Meet talent and partners from overseas to uncover growth while optimizing operational costs.',
    },
    {
      h: 'Fresh Perspectives',
      p: 'Connect with global peers to discover high-level ideas and strategies worth compounding over time.',
    },
    {
      h: 'Not For',
      p: 'beginner SEO/marketers, short-term thinkers, or anyone practicing unethical marketing.',
    },
  ];

  const cols = [
    {
      title: 'International Attendees',
      shortTitle: "Int'l Attendes",
      icon: '/figma-assets/icon-globe.svg',
      img: A.audInternational,
      lead: 'Agency founders, fractional SEO/growth advisors, in-house marketers from global martech, and content creators.',
      items: intl,
    },
    {
      title: 'Chinese Attendees',
      shortTitle: 'Chinese Attendees',
      icon: '🇨🇳',
      img: A.audChinese,
      lead: 'Founders/CMOs and marketing/growth/SEO managers from B2B manufacturing, B2C/DTC brands, and AI/SaaS companies.',
      items: cn,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        {/* Centered on desktop, left-aligned on mobile */}
        <div className="md:text-center">
          <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
            WHO IS THIS FOR
          </div>
          <h2 className="display text-[28px] font-semibold uppercase leading-[1.2] self-stretch text-[#F9F9F9] mb-8 md:mb-16">
            Two Audiences, One Room
          </h2>
        </div>

        {/* Mobile-only tab bar */}
        <div className="flex gap-3 mb-8 md:hidden">
          {cols.map((col, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={col.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className="display"
                style={{
                  display: 'flex',
                  height: '80px',
                  padding: '12px',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flex: '1 0 0',
                  borderRadius: '16px',
                  border: isActive
                    ? '1px solid #EB3030'
                    : '1px solid rgba(249, 249, 249, 0.20)',
                  background: 'transparent',
                  transition: 'border-color 0.15s ease',
                }}
              >
                {col.icon.startsWith('/') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={col.icon} alt="" className="w-6 h-6" />
                ) : (
                  <span className="text-[20px] leading-none" aria-hidden>
                    {col.icon}
                  </span>
                )}
                <span
                  className="uppercase"
                  style={{
                    color: '#F9F9F9',
                    fontSize: '12px',
                    fontWeight: 800,
                    lineHeight: '150%',
                    letterSpacing: '1px',
                  }}
                >
                  {col.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Two columns: flex with 64px gap, each column flex-1 align-stretch */}
        <div
          className="flex flex-col md:flex-row md:items-start gap-12"
          style={{ alignSelf: 'stretch', columnGap: '64px' }}
        >
          {cols.map((col, idx) => (
            <div
              key={col.title}
              className={`${activeTab === idx ? 'flex' : 'hidden'} md:flex flex-col items-start`}
              style={{ flex: '1 0 0', alignSelf: 'stretch' }}
            >
              <div className="relative w-full aspect-[560/429] rounded-2xl overflow-hidden mb-7 bg-white/5">
                <Image
                  src={col.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <h3
                className="display uppercase mb-3"
                style={{
                  color: '#F9F9F9',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '120%',
                }}
              >
                {col.title}
              </h3>
              <p
                className="self-stretch mb-7 max-w-[520px]"
                style={{
                  color: '#F9F9F9',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '170%',
                  opacity: 0.8,
                }}
              >
                {col.lead}
              </p>
              <ul className="space-y-5">
                {col.items.map((it) => {
                  const isNotFor = it.h.toLowerCase().startsWith('not for');
                  if (isNotFor) {
                    return (
                      <li
                        key={it.h}
                        className="rounded-2xl border border-white/10 px-5 py-4"
                      >
                        <div
                          style={{
                            color: '#F9F9F9',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '170%',
                          }}
                        >
                          <span style={{ fontWeight: 700 }}>{it.h}:</span>{' '}
                          <span style={{ opacity: 0.7 }}>{it.p}</span>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={it.h} className="pl-5 border-l-2 border-[var(--red)]">
                      <div
                        style={{
                          color: '#F9F9F9',
                          fontSize: '16px',
                          fontWeight: 500,
                          lineHeight: '170%',
                        }}
                      >
                        <span style={{ fontWeight: 700 }}>{it.h}:</span>{' '}
                        <span style={{ opacity: 0.7 }}>{it.p}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── WHY SHENZHEN (28:210) ───────────────────────────── */
function WhyShenzhen() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeCard = useCarouselActive(trackRef);

  const cards = [
    {
      img: A.why1,
      h: 'Silicon Valley of hardware',
      p: 'Huaqiangbei — the electronics district where a hardware startup prototypes a product in a week, not a year.',
    },
    {
      img: A.why2,
      h: '1 hour from Hong Kong',
      p: 'High-speed rail from HK. Visa-free for 54+ passports.',
    },
    {
      img: A.why3,
      h: 'Ancient Walls Next To Glass Towers',
      p: '1,700-year-old Ming Dynasty gates at Nantou. Sub-tropical beaches at Dapeng. Mangrove wetlands inside the city limits.',
    },
    {
      img: A.why4,
      h: 'Your budget goes twice as far',
      p: '5-star hotels for less than a 3-star in London or New York.',
    },
  ];
  return (
    <section id="visit" className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="rounded-[28px] border border-white/10 bg-[#03060d] p-6 md:p-10 lg:p-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
                WHY SHENZHEN
              </div>
              <h2
                className="display uppercase self-stretch text-[28px] md:text-[36px]"
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'Unbounded, system-ui, sans-serif',
                  fontWeight: 600,
                  lineHeight: '120%',
                  letterSpacing: '-2px',
                }}
              >
                Come Expecting The Unknown
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:flex btn-outline-white display rounded-full backdrop-blur-sm self-start md:self-auto uppercase"
              style={{
                padding: '16px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '150%',
              }}
            >
              VISIT SHENZHEN
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <p
            className="self-stretch max-w-[760px] mb-3"
            style={{
              color: '#F9F9F9',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '160%',
              opacity: 0.8,
            }}
          >
            Most conferences ask you to fly to a city you&apos;ve already been to. This one
            doesn&apos;t.
          </p>
          <p
            className="self-stretch max-w-[760px] mb-5"
            style={{
              color: '#F9F9F9',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '160%',
              opacity: 0.8,
            }}
          >
            Shenzhen is the fastest-moving city on earth that most Westerners have never set
            foot in. 18 million people. Average age 32.
          </p>
          <p
            className="self-stretch max-w-[760px] mb-8 md:mb-14"
            style={{
              color: '#F9F9F9',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '160%',
              opacity: 0.8,
            }}
          >
            More patents filed here than anywhere else in China. Tencent, DJI, Huawei, BYD — all
            within a 30-minute drive.
          </p>
          <a
            href="#"
            className="md:hidden btn-outline-white display rounded-full backdrop-blur-sm uppercase mb-12 self-start inline-flex"
            style={{
              padding: '16px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '150%',
            }}
          >
            VISIT SHENZHEN
            <ArrowUpRight className="w-4 h-4" />
          </a>
          {/* Mobile: horizontal swipe carousel with snap */}
          <div className="md:hidden">
            <div
              ref={trackRef}
              className="-mx-6 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
            >
              <div className="flex gap-4 pb-2">
                {cards.map((c, i) => (
                  <article
                    key={c.h}
                    data-card-idx={i}
                    className="flex-none w-[85%] snap-start"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                      <Image
                        src={c.img}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="85vw"
                      />
                    </div>
                    <h3 className="display mt-4 text-[16px] font-bold uppercase tracking-[-0.005em]">
                      {c.h}
                    </h3>
                    <p className="mt-2.5 text-[14px] text-white/70 leading-[1.55]">{c.p}</p>
                  </article>
                ))}
              </div>
            </div>
            <CarouselDots count={cards.length} active={activeCard} />
          </div>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid gap-x-8 gap-y-10 md:grid-cols-2">
            {cards.map((c) => (
              <article key={c.h}>
                <div className="relative aspect-[544/280] rounded-xl overflow-hidden bg-white/5">
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 544px"
                  />
                </div>
                <h3 className="display mt-5 text-[18px] font-bold uppercase tracking-[-0.005em]">
                  {c.h}
                </h3>
                <p className="mt-2.5 text-[15px] text-white/70 leading-[1.55] max-w-[460px]">
                  {c.p}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── SPEAKERS (28:242) ───────────────────────────── */
function Speakers() {
  type Speaker = { country: string; name: string; sub: string; img: string; tag?: string };
  const list: Speaker[] = [
    { country: 'US', name: 'Lily Ray', sub: 'VP of SEO Strategy & Research, Amsive', img: '/assets/lily-ray.webp' },
    { country: 'CH', name: 'Gary Illyes', sub: 'Analyst, Google Search', img: '/assets/gary-illyes.webp' },
    { country: 'US', name: 'Eli Schwartz', sub: 'Author, Product-Led SEO', img: '/assets/eli-schwartz.webp' },
    { country: 'AU', name: 'Sasha Gusain', sub: 'Head of Logged Out Experience, Canva', img: '/assets/sasha-gusain.webp' },
    { country: 'US', name: 'Lars Lofgren', sub: 'Fractional VP of Marketing', img: '/assets/lars-lofgren.webp' },
    { country: 'US', name: 'Bernard Huang', sub: 'Co-founder, Clearscope', img: '/assets/bernard-huang.webp' },
    { country: 'AU', name: 'Nick Drewe', sub: 'Founder & CEO, Wethrift', img: '/assets/nick-drewe.webp' },
    { country: 'CA', name: 'Megan Gougeon', sub: 'Founder, Portable Professional', img: '/assets/megan-gougeon.webp' },
    { country: 'US', name: 'Josh Blyskal', sub: 'AI Strategy & Research, Profound', img: '/assets/josh-blyskal.webp' },
    { country: 'AU', name: 'Nik Ranger', sub: 'Senior Growth Consultant, Dejan', img: '/assets/Nik-Ranger_1763288552080.webp' },
    { country: 'UK', name: 'Owain Lloyd-Williams', sub: 'Independent SEO Consultant', img: '/assets/owain-lloyd-williams.webp' },
    { country: 'AU · CN', name: 'Loki Yan', sub: 'Co-founder, First Optimise (壹优化)', img: '/assets/loki-yan.webp' },
  ];

  // Turn a 2-letter country code into a flag emoji (UK -> GB). Combos like "AU · CN" -> two flags.
  const flagEmoji = (code: string) => {
    const cc = code.trim().toUpperCase() === 'UK' ? 'GB' : code.trim().toUpperCase();
    if (cc.length !== 2) return code;
    return String.fromCodePoint(...[...cc].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
  };
  const countryFlags = (country: string) =>
    country.split('·').map((c) => flagEmoji(c)).join(' ');

  return (
    <section id="speakers" className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end mb-12 md:mb-14">
          <div>
            <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
              WHO&apos;S SPEAKING
            </div>
            <h2
              className="display uppercase self-stretch max-w-[820px] text-[28px] md:text-[48px]"
              style={{
                color: '#F9F9F9',
                fontFamily: 'Unbounded, system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: '120%',
                letterSpacing: '-1px',
              }}
            >
              <span className="block">On Stage: Practitioners,</span>
              <span className="block" style={{ opacity: 0.3 }}>
                Not Theorists.
              </span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/75 leading-[1.55] max-w-[640px]">
              Every speaker has shipped real work. No theorists. No fluff.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex btn-outline-white display rounded-full backdrop-blur-sm self-start md:self-end uppercase w-fit"
            style={{
              padding: '16px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '150%',
            }}
          >
            SEE ALL SPEAKERS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <ul className="grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((s) => (
            <li
              key={s.name}
              className="rounded-2xl bg-[#06101a]/60 p-4 md:p-6 border border-white/[0.06] hover:border-[var(--red)] transition-colors"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  className="object-cover grayscale-[12%]"
                  sizes="(max-width: 768px) 50vw, 246px"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-[18px] leading-none">
                  {countryFlags(s.country)}
                </div>
                {s.tag && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase bg-[var(--teal)] text-white">
                    {s.tag}
                  </span>
                )}
              </div>
              <div className="mt-3 text-[16px] md:text-[20px] font-bold text-white leading-tight">
                {s.name}
              </div>
              <div className="mt-1.5 text-[12px] md:text-[14px] text-white/55 leading-snug line-clamp-2">
                {s.sub}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#"
            className="display btn-outline-white inline-flex rounded-full uppercase"
            style={{
              padding: '16px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '150%',
            }}
          >
            SEE ALL SPEAKERS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── AGENDA (28:359) ───────────────────────────── */
function Agenda() {
  const days = [
    {
      n: 'DAY 1',
      date: 'MONDAY, SEP 14',
      title: 'Workshops & City Tours',
      desc: "Hands-on in the morning. Shenzhen's tech districts in the afternoon.",
      tier: 'Deluxe + VIP',
      note: '',
    },
    {
      n: 'DAY 2',
      date: 'TUESDAY, SEP 15',
      title: 'SEO Masterminds',
      desc: '6–7 people per table. One expert at each. Bring your real problems.',
      tier: 'Deluxe + VIP',
      note: '',
    },
    {
      n: 'DAY 3',
      date: 'WEDNESDAY, SEP 16',
      title: 'Main Conference',
      desc: '2 Keynotes. 6 Field Talks. 9 Lightning Talks. Opening party at night.',
      tier: 'Standard',
      note: '',
    },
    {
      n: 'DAY 4',
      date: 'THURSDAY, SEP 17',
      title: 'Main Conference',
      desc: '2 Keynotes. 6 Field Talks. 9 Lightning Talks. Closing party.',
      tier: 'Standard',
      note: '',
    },
    {
      n: 'DAY 5',
      date: 'FRIDAY, SEP 18',
      title: 'VIP Networking',
      desc: 'Different hotel. Smaller group. Where the real deals get made.',
      tier: 'VIP only',
      note: 'Includes one night stay',
    },
  ];

  return (
    <section id="agenda" className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="mb-10 md:mb-12">
          <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
            WHAT&apos;S THE AGENDA
          </div>
          <h2
            className="display uppercase self-stretch max-w-[820px] text-[28px] md:text-[48px]"
            style={{
              color: '#F9F9F9',
              fontFamily: 'Unbounded, system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-2px',
            }}
          >
            <span className="block md:inline">Five Days,</span>{' '}
            <span className="block md:inline" style={{ opacity: 0.3 }}>Pick Your Depth</span>
          </h2>
        </div>

        {/* Side events banner */}
        <div className="mb-2 md:mb-3">
          <div className="display text-[18px] md:text-[16px] font-semibold uppercase tracking-[0.04em] md:tracking-[0.16em] text-white leading-[120%]">
            Side Events
          </div>
          <p className="mt-2 text-[13px] md:text-[14px] text-white/55 leading-[1.55]">
            Sat (Sep 12) + Sun (Sep 13) Afternoons
          </p>
          <p className="mt-2 text-[13px] md:text-[14px] text-white/55 leading-[1.55]">
            Two free side events open to everyone — no conference ticket required. Details TBD.
          </p>
        </div>

        <ul className="mt-8 md:mt-10 space-y-6 md:space-y-0">
          {days.map((d) => (
            <li
              key={d.n}
              className="rounded-2xl border border-white/15 p-6 md:rounded-none md:border md:border-white/10 md:border-x-0 md:border-b-0 md:p-0 grid grid-cols-1 md:grid-cols-[220px_1fr_auto] md:items-center gap-4 md:gap-8 md:py-8"
            >
              {/* Mobile: top row weekday left + DAY N right; Desktop: stacked left column */}
              <div className="flex items-center justify-between md:block">
                <div className="order-2 md:order-1 display text-[12px] md:text-[24px] font-semibold leading-[120%] text-white uppercase">
                  {d.n}
                </div>
                <div className="order-1 md:order-2 md:mt-2 text-[12px] md:text-[16px] font-semibold leading-[120%] tracking-normal md:tracking-[0.12em] uppercase text-[#86DFF7]">
                  {d.date}
                </div>
              </div>
              <div>
                <div className="display text-[20px] md:text-[24px] font-bold uppercase leading-tight tracking-[-0.005em]">
                  {d.title}
                  {d.note && (
                    <span className="ml-2 md:ml-3 text-[12px] md:text-[14px] font-medium italic text-white/55 normal-case">
                      ({d.note})
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[14px] md:text-[15px] text-white/65 leading-[1.55] max-w-[640px]">
                  {d.desc}
                </p>
              </div>
              <span className="justify-self-start md:justify-self-end inline-flex items-center px-4 py-2 rounded-full border border-white/40 text-[11px] font-bold tracking-[0.18em] uppercase text-white">
                {d.tier}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────────── PRICING (28:427) ───────────────────────────── */
function Pricing() {
  const tiers = [
    {
      name: 'Standard',
      price: '$600',
      old: '',
      forWho: 'For SEO Practitioners',
      tag: '',
      bullets: [
        'Main conference, Days 3–4',
        'Breakfast, lunch, dinner, coffee',
        'Opening + closing parties',
      ],
      cta: 'Buy Standard Ticket',
      popular: false,
    },
    {
      name: 'Deluxe',
      price: '$900',
      old: '',
      forWho: 'For marketing directors and agency leads',
      tag: 'Most popular',
      bullets: [
        'Everything in Standard',
        'Workshops / City Tours + SEO Masterminds, Days 1–2',
        'Front-row seating',
      ],
      cta: 'Buy Deluxe Ticket',
      popular: true,
    },
    {
      name: 'VIP',
      price: '$1,800',
      old: '',
      forWho: 'For executives and founders',
      tag: '',
      bullets: [
        'Everything in Deluxe',
        'Day 5 VIP networking at MGM',
        'One night stay at MGM included',
      ],
      cta: 'Buy VIP Ticket',
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-12 lg:py-24"
      style={{
        // Figma fill stack (top → bottom in panel = first → last in CSS):
        //   1) Linear: vertical fade-in/out  #03060D 0% → transparent 50% → #03060D 100%
        //      (lets top and bottom edges blend into adjacent sections seamlessly)
        //   2) #03060D at 65% (dim)
        //   3) Linear: horizontal brand  #118BAC 0% → #EB3030 100%
        background:
          'linear-gradient(180deg, #03060D 0%, rgba(3,6,13,0) 50%, #03060D 100%),' +
          'linear-gradient(0deg, rgba(3,6,13,0.65), rgba(3,6,13,0.65)),' +
          'linear-gradient(90deg, #118BAC 0%, #EB3030 100%)',
      }}
    >
      <div className="container">
        <div className="md:text-center">
          <div
            className="uppercase mb-3"
            style={{
              color: '#EB3030',
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '0.9px',
            }}
          >
            HOW MUCH IS IT
          </div>
          <h2 className="display text-[28px] font-semibold uppercase leading-[1.2] self-stretch text-[#F9F9F9]">
            Get Tickets
          </h2>
          <p className="md:mx-auto mt-5 max-w-[680px] md:max-w-none md:whitespace-nowrap text-[15px] md:text-[16px] text-white/70 leading-[1.6]">
            One night at The St. Regis costs more than a Standard ticket. You get 5 days, every
            meal, and two parties.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-7 border border-white/10"
            >
              {t.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[var(--teal)] text-white">
                  {t.tag}
                </span>
              )}
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
                <span
                  className="display text-[15px] text-white line-through pb-1"
                  style={{ opacity: 0.5 }}
                >
                  {t.old}
                </span>
              </div>
              <div
                className="mt-2"
                style={{
                  color: '#F9F9F9',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '160%',
                  opacity: 0.6,
                }}
              >
                {t.forWho}
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
              <a
                href="https://luma.com/shenzhen-seo-conference-2026"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`mt-8 display inline-flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase ${
                  t.popular ? 'gradient-cta text-white' : 'btn-outline-white'
                }`}
              >
                {t.cta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="display text-[14px] font-bold tracking-[0.18em] uppercase text-white">
            100% Full Refund Policy
          </div>
          <p className="mt-2 text-[14px] text-white/60 leading-[1.6] max-w-[640px] mx-auto">
            Get a complete refund if you cancel 30 days or more before the conference starts.
            <br className="hidden md:block" /> Risk-free ticket purchase with peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── VENUES (28:511) ───────────────────────────── */
function Venues() {
  const venues = [
    {
      tag: 'Main Conference Venue',
      name: 'The St. Regis Shenzhen',
      days: 'Days 1–4',
      img: A.venueStRegis,
      desc: 'The tallest hotel in Shenzhen. Panoramic views of the bay from the 80th-floor sky lobby. Professionally built for international conferences. 20–25% discounted room rates for attendees.',
      whyTitle: 'Why this one',
      why: "It's what a 5-star conference venue looks like when the city has unlimited ambition.",
      addr: '5016 Shennan E Rd, Luohu District, Shenzhen',
    },
    {
      tag: 'VIP Networking Venue',
      name: 'MGM Shenzhen',
      days: 'Day 5 VIP Networking',
      img: A.venueMgm,
      desc: 'An intimate setting away from the main conference. Smaller room. Deeper conversations. One night included with your VIP ticket.',
      whyTitle: 'Why this one',
      why: 'The St. Regis gets you the main stage. MGM gets you the after-hours. Two venues, two registers — one public-facing and stage-lit, one private and close-in.',
      addr: '33 Yanmei Rd, Yantian District, Shenzhen',
    },
  ];
  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
          WHERE IS THE EVENT HAPPENING
        </div>
        <h2
          className="display uppercase self-stretch mb-5 lg:whitespace-nowrap text-[28px] md:text-[48px]"
          style={{
            color: '#F9F9F9',
            fontFamily: 'Unbounded, system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '-2px',
          }}
        >
          <span>Two Venues. </span>
          <span style={{ opacity: 0.3 }}>Both Picked On Purpose.</span>
        </h2>
        <p
          className="max-w-[820px] mb-12 md:mb-14"
          style={{
            color: '#F9F9F9',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '150%',
            opacity: 0.6,
          }}
        >
          We personally vetted 29 five-star hotels. These two are what good looks like.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {venues.map((v) => (
            <article
              key={v.name}
              className="rounded-2xl border border-white/10 p-8"
            >
              <div className="relative aspect-[544/440] rounded-xl overflow-hidden bg-white/5">
                <Image
                  src={v.img}
                  alt={v.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 544px"
                />
              </div>
              <div className="pt-8">
                <div
                  className="inline-flex rounded-full border border-white/20 uppercase mb-3 w-fit"
                  style={{
                    display: 'flex',
                    padding: '8px 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#F9F9F9',
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: 'normal',
                  }}
                >
                  {v.tag}
                </div>
                <h3 className="display text-[22px] md:text-[24px] font-bold uppercase tracking-[-0.005em]">
                  {v.name}
                </h3>
                <div className="mt-1 mb-4 display text-[12px] font-semibold tracking-[0.18em] uppercase text-white/55">
                  {v.days}
                </div>
                <p className="text-[14px] md:text-[15px] text-white/75 leading-[1.6]">{v.desc}</p>
                <div
                  className="mt-6 self-stretch"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '8px',
                    paddingLeft: '24px',
                    borderLeft: '2px solid #EB3030',
                  }}
                >
                  <div
                    className="display uppercase"
                    style={{
                      color: '#F9F9F9',
                      fontSize: '14px',
                      fontWeight: 500,
                      lineHeight: '160%',
                    }}
                  >
                    {v.whyTitle}
                  </div>
                  <p className="text-[14px] text-white/65 leading-[1.55]">{v.why}</p>
                </div>
                <div className="mt-6 flex items-start gap-2 text-[13px] font-semibold text-white/85">
                  <MapPinIcon className="w-3.5 h-3.5 mt-[3px] text-[var(--red)] flex-none" />
                  <span>{v.addr}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── TESTIMONIALS (28:556) ───────────────────────────── */
function Testimonials() {
  const videosRef = useRef<HTMLDivElement | null>(null);
  const quotesRef = useRef<HTMLDivElement | null>(null);
  const activeVideo = useCarouselActive(videosRef);
  const activeQuote = useCarouselActive(quotesRef);

  const videos = [
    { img: A.testimonial1, name: 'Liam Bouchard', role: 'VP SEO, Amsive Digital' },
    { img: A.testimonial2, name: 'Liam Bouchard', role: 'VP SEO, Amsive Digital' },
  ];
  const quotes = [
    {
      av: A.avMike,
      name: 'Mike Dee',
      role: 'YouTube creator with over 1 million subscribers',
      q: "The best conference I'd ever attended in terms of clear business ROI…and we should have tapped this market years ago.",
    },
    {
      av: A.avMads,
      name: 'Mads Singers',
      role: 'Management Coach & Business Consultant',
      q: '“Absolutely top-notch.” — on the organisation of the 2025 event.',
    },
    {
      av: A.avZack,
      name: 'Zack Franklin',
      role: 'SEO agency owner, 9 years living in Shenzhen',
      q: 'There are very few opportunities for Western and Chinese to get together in one room in real life. It’s very unique.',
    },
  ];
  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
          WHAT DID THE PREVIOUS ATTENDEES SAY
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

        {/* Videos: hidden for now (both mobile + desktop) */}
        <div className="hidden mb-8">
          <div
            ref={videosRef}
            className="-mx-6 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            <div className="flex gap-4 pb-2">
              {videos.map((v, i) => (
                <div
                  key={i}
                  data-card-idx={i}
                  className="flex-none w-[85%] snap-start rounded-2xl border border-white/10 p-6"
                >
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-white/5">
                    <Image
                      src={v.img}
                      alt={v.name}
                      fill
                      className="object-cover"
                      sizes="85vw"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.65) 100%)',
                      }}
                    />
                    <button
                      className="absolute inset-0 grid place-items-center"
                      type="button"
                      aria-label="Play video"
                    >
                      <span className="grid place-items-center btn-play text-white">
                        <PlayIcon className="w-5 h-5 translate-x-[1px]" />
                      </span>
                    </button>
                  </div>
                  <div className="mt-5">
                    <div className="text-[15px] font-bold text-white">{v.name}</div>
                    <div className="text-[12px] text-white/70 mt-0.5">{v.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CarouselDots count={videos.length} active={activeVideo} />
        </div>
        <div className="hidden gap-5 md:grid-cols-2 mb-5">
          {videos.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 hover:border-[var(--red)] transition-colors p-8"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[548/289] bg-white/5">
                <Image
                  src={v.img}
                  alt={v.name}
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
                <button
                  className="absolute inset-0 grid place-items-center"
                  type="button"
                  aria-label="Play video"
                >
                  <span className="grid place-items-center btn-play text-white">
                    <PlayIcon className="w-5 h-5 translate-x-[1px]" />
                  </span>
                </button>
              </div>
              <div className="mt-5">
                <div className="text-[15px] font-bold text-white">{v.name}</div>
                <div className="text-[12px] text-white/70 mt-0.5">{v.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes: snap-x carousel on mobile, 3-col grid on md+ */}
        <div className="md:hidden">
          <div
            ref={quotesRef}
            className="-mx-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            <div className="flex gap-4 pb-2 px-8">
              {quotes.map((q, i) => (
                <figure
                  key={q.name}
                  data-card-idx={i}
                  className="flex-none w-[85%] snap-start rounded-2xl border border-white/10 p-6 bg-[#06101a]/40 flex flex-col"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/figma-assets/quote-red.png"
                    alt=""
                    className="w-9 h-auto mb-4"
                  />
                  <blockquote className="text-[15px] text-white/85 leading-[1.55] flex-1">
                    {q.q}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/15">
                      <Image src={q.av} alt={q.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white leading-tight">
                        {q.name}
                      </div>
                      <div className="text-[12px] text-white/55 leading-tight mt-0.5">
                        {q.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <CarouselDots count={quotes.length} active={activeQuote} />
        </div>
        <div className="hidden md:grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-white/10 p-6 md:p-7 bg-[#06101a]/40 flex flex-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figma-assets/quote-red.png"
                alt=""
                className="w-9 h-auto mb-4"
              />
              <blockquote className="text-[15px] md:text-[16px] text-white/85 leading-[1.55] flex-1">
                {q.q}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/15">
                  <Image src={q.av} alt={q.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white leading-tight">
                    {q.name}
                  </div>
                  <div className="text-[12px] text-white/55 leading-tight mt-0.5">
                    {q.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ (28:609) ───────────────────────────── */
function Faq() {
  const items = [
    {
      q: 'How many attendees? Who shows up?',
      a: 'We are expecting 600 people. 300+ from China (in-house SEO and marketing leaders from global-market brands). 200+ international (agencies, Martech, fractional SEO consultants).',
      defaultOpen: true,
    },
    {
      q: 'What language are the sessions in?',
      a: 'Sessions on Days 1–5 are 100% English. Simultaneous English-to-Mandarin translation is provided on Days 3 and 4. Please note that some pre-conference Side Event sessions may be conducted in Chinese.',
    },
    {
      q: 'Is the content Western SEO or China SEO?',
      a: 'Both. The agenda is strategically weighted: 90% focuses on Western/International SEO, while 10% covers the specific search and internet ecosystems within China.',
    },
    {
      q: 'Is this for SEO beginners?',
      a: 'Not really. The content is tailored for intermediate to advanced SEO practitioners. However, we welcome in-house marketing directors and growth managers who focus on high-level marketing strategy rather than SEO execution.',
    },
    { q: 'Refund policy.', a: 'Full refunds are available until 30 days before the conference. Within 30 days, refunds are generally not issued except in exceptional circumstances.' },
    {
      q: 'Can I transfer my ticket?',
      a: 'No. Tickets are non-transferable, and IDs will be verified at registration. If you are unable to attend, please contact our support team to discuss refund options.',
    },
    {
      q: 'Do I need a visa?',
      a: 'Citizens of 54+ countries currently enjoy visa-free entry for up to 30 days. Passport holders from some countries (including the USA) are eligible for 10-day free transit. If neither applies, you will need a tourist or business visa.',
    },
    {
      q: 'Can you send me a business invitation letter for the visa?',
      a: 'Yes. Tick the box on the contact form or email us — we’ll send a signed invitation letter within 3 business days.',
    },
    {
      q: 'Conference hotel rates.',
      a: (
        <>
          St. Regis Shenzhen offers a 20–25% discount on standard rates for confirmed attendees.
          Visit the special booking link{' '}
          <a
            href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1770202951216&key=GRP&app=resvlink&_branch_match_id=1547558325661285432&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5uYGRgZGlqaGRoZpadmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqka1zRlF%2B"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-[var(--red)]"
          >
            here
          </a>
          .
        </>
      ),
    },
    {
      q: 'Slides and session recordings?',
      a: 'Available presentation slides will be shared post-event. We do not provide session recordings, and on-site recording by attendees is strictly prohibited.',
    },
    {
      q: 'Dress code?',
      a: 'Smart casual. The opening party is a touch dressier. Bring layers — Shenzhen is warm in September but the venues run cold.',
    },
  ];
  return (
    <section className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="md:text-center text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
          FAQ
        </div>
        <h2 className="md:text-center display text-[28px] md:text-[36px] font-semibold uppercase leading-[120%] tracking-[-2px] md:tracking-normal self-stretch text-[#F9F9F9] mb-12">
          <span>Real Questions. </span>
          <span style={{ opacity: 0.3 }}>Direct Answers.</span>
        </h2>
        <div className="max-w-[920px] mx-auto space-y-3">
          {items.map((it, i) => (
            <details
              key={i}
              open={it.defaultOpen}
              className="group rounded-2xl border border-[var(--line)] bg-[#06101a]/50 px-6 md:px-7"
            >
              <summary className="flex items-center justify-between gap-4 py-5 md:py-6 text-[16px] md:text-[18px] font-semibold display">
                <span>{it.q}</span>
                <PlusIcon className="w-4 h-4 flex-none text-[var(--teal-2)] faq-icon" />
              </summary>
              <div className="pb-6 -mt-1 text-[15px] md:text-[16px] text-white/70 leading-[1.6]">
                {it.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FINAL CTA (28:692) ───────────────────────────── */
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
            <span className="block">One Room.</span>
            <span className="block md:inline"> Five Days.</span>
            <span className="block">September.</span>
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
            If the question is whether Shenzhen is worth the trip — the answer is yes.
          </p>
          <p
            className="mt-3 max-w-[720px] md:max-w-none md:mx-auto self-stretch"
            style={{
              color: '#F9F9F9',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '160%',
            }}
          >
            If the question is whether you should wait for 2027 — the answer is no. Seats cap
            at 600.
          </p>
          <a
            href="#pricing"
            className="mt-8 display flex w-full md:w-auto md:inline-flex rounded-full text-[12px] font-bold tracking-[0.18em] gradient-cta text-white"
            style={{
              padding: '16px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
            }}
          >
            GET TICKETS TODAY
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── SPONSORS (28:701) ───────────────────────────── */
function Sponsors() {
  // Tier-specific hover color filters. Default is dull/gray for all logos;
  // hover reveals a tier-tinted full-color version.
  //   platinum → full natural color (logos read as silver/chrome)
  //   gold     → warm gold sepia tint
  //   silver   → cool muted silver tint
  const Row = ({
    title,
    items,
    max,
    tier,
  }: {
    title: string;
    items: { src: string; alt: string; h: number }[];
    max: number;
    tier: 'platinum' | 'gold' | 'silver';
  }) => {
    // OPTION 2 — flatten every logo to a uniform silhouette before tinting,
    // so the hover color reads identically across all logos in a tier
    // regardless of source colors. Trade-off: internal color details (e.g.
    // ConvertBetter's green arrow) are lost.
    //   Step 1: brightness(0) → black silhouette
    //   Step 2: invert(1)     → white silhouette
    //   Step 3: tier tint     → applied on top of the white
    const baseFlatten = 'brightness(0) invert(1)';
    const defaultFilter = `${baseFlatten}`;
    const defaultOpacity = '0.5';
    const hoverFilter =
      tier === 'gold'
        ? // gold ~#D4AF37
          `${baseFlatten} sepia(1) saturate(4) hue-rotate(-5deg) brightness(0.95)`
        : tier === 'silver'
        ? // silver ~#C0C0C0
          `${baseFlatten} brightness(0.82)`
        : // platinum ~ near-white
          `${baseFlatten}`;
    const hoverOpacity = '1';

    return (
      <div className={`text-center sponsor-row sponsor-${tier}`}>
        <h3
          className="display uppercase mb-8"
          style={{
            color: '#F9F9F9',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '140%',
          }}
        >
          {title}
        </h3>
        <div className={`${items.length === 1 ? 'flex justify-center' : 'grid grid-cols-2'} sm:flex sm:flex-wrap items-center justify-items-center sm:justify-center gap-x-8 sm:gap-x-14 md:gap-x-20 gap-y-10`}>
          {items.map((s) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              style={{
                height: `${Math.min(s.h, max)}px`,
                width: 'auto',
                maxWidth: '160px',
                objectFit: 'contain',
                filter: defaultFilter,
                opacity: defaultOpacity,
                transition: 'filter 0.25s ease, opacity 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = hoverFilter;
                e.currentTarget.style.opacity = hoverOpacity;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = defaultFilter;
                e.currentTarget.style.opacity = defaultOpacity;
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="sponsors" className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end mb-16 md:mb-20">
          <div>
            <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
              2026 PARTNERS
            </div>
            <h2 className="display text-[28px] md:text-[36px] font-semibold uppercase leading-[120%] tracking-[-2px] md:tracking-normal self-stretch text-[#F9F9F9]">
              Our Sponsors
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] text-white/65 leading-[1.6] max-w-[640px]">
              Thank you to the sponsors who made this event possible.
            </p>
            {/* Mobile: button right after the subtitle */}
            <a
              href="#"
              className="md:hidden display btn-outline-white flex items-center justify-center gap-3 px-6 py-4 rounded-full uppercase whitespace-nowrap text-[14px] font-semibold leading-[150%] mt-6 self-stretch"
            >
              BECOME A 2026 SPONSOR
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          {/* Desktop: button to the right of the heading, bottom-aligned */}
          <a
            href="#"
            className="hidden md:inline-flex display btn-outline-white items-center justify-center gap-3 px-6 py-4 rounded-full uppercase whitespace-nowrap text-[14px] font-semibold leading-[150%] self-end"
          >
            BECOME A 2026 SPONSOR
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="space-y-16 md:space-y-20">
          {SPONSORS.platinum.length > 0 && (
            <Row title="Platinum Sponsors" items={SPONSORS.platinum} max={96} tier="platinum" />
          )}
          {SPONSORS.gold.length > 0 && (
            <Row title="Gold Sponsors" items={SPONSORS.gold} max={56} tier="gold" />
          )}
          {SPONSORS.silver.length > 0 && (
            <Row title="Silver Sponsors" items={SPONSORS.silver} max={48} tier="silver" />
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── CONTACT (28:745) ───────────────────────────── */

const CONTACT_INPUT_CLASS =
  'w-full text-[16px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] text-white';

const CONTACT_INPUT_STYLE: React.CSSProperties = {
  display: 'flex',
  height: '64px',
  padding: '22px 24px',
  alignItems: 'center',
  borderRadius: '20px',
  border: '1px solid rgba(249, 249, 249, 0.10)',
  background: 'transparent',
};

function ContactField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-white/85">{label}</span>
      {children}
    </div>
  );
}

function Contact() {
  const [check, setCheck] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    // Capture the form node before any await — React nullifies e.currentTarget
    // after the handler returns, so we can't read it later.
    const form = e.currentTarget;
    setStatus(null);
    setSubmitting(true);
    try {
      const fd = new FormData(form);
      const payload = {
        firstName: String(fd.get('firstName') ?? ''),
        lastName: String(fd.get('lastName') ?? ''),
        email: String(fd.get('email') ?? ''),
        requestInvitationLetter: check,
        nationality: String(fd.get('nationality') ?? ''),
        passportNo: String(fd.get('passportNo') ?? ''),
        passportIssuingOffice: String(fd.get('passportIssuingOffice') ?? ''),
        dateOfIssue: String(fd.get('dateOfIssue') ?? ''),
        passportExpiration: String(fd.get('passportExpiration') ?? ''),
        jobTitle: String(fd.get('jobTitle') ?? ''),
        durationOfStay: String(fd.get('durationOfStay') ?? ''),
        additionalMessage: String(fd.get('additionalMessage') ?? ''),
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || 'Submission failed. Please try again.');
      }
      setStatus({
        ok: true,
        message: check
          ? "We'll process your business invitation letter request and contact you soon."
          : "Thanks — we got your message and will reply soon.",
      });
      form.reset();
      setCheck(false);
    } catch (err) {
      setStatus({
        ok: false,
        message: err instanceof Error ? err.message : 'Submission failed. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#03060d] py-12 lg:py-24">
      <div className="container">
        <div
          className="self-stretch"
          style={{
            padding: 'clamp(24px, 5vw, 64px)',
            borderRadius: 48,
            border: '1px solid rgba(249, 249, 249, 0.20)',
            background: '#03060D',
          }}
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3">
                CONTACT
              </div>
              <h2 className="display text-[28px] md:text-[52px] font-semibold md:font-bold uppercase leading-[120%] md:leading-none tracking-[-2px] md:tracking-[-0.005em] mb-5 text-white">
                Questions?
              </h2>
              <p
                className="mb-8 max-w-[440px] text-[16px] md:text-[18px]"
                style={{
                  color: '#F9F9F9',
                  fontWeight: 500,
                  lineHeight: '160%',
                }}
              >
                Tickets, invitation letters, inquiries — we read everything.
              </p>
              <ul
                className="space-y-3 text-[14px] md:text-[18px]"
                style={{
                  color: '#F9F9F9',
                  fontWeight: 500,
                  lineHeight: '160%',
                }}
              >
                <li className="flex items-start gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/figma-assets/mail.svg" alt="" className="w-5 h-5 flex-none mt-1" />
                  <div className="flex flex-col">
                    <span className="text-white/55 text-[12px] font-semibold uppercase tracking-[0.12em]">
                      General Inquiries
                    </span>
                    <a
                      href="mailto:support@shenzhenseoconference.com"
                      className="hover:underline"
                    >
                      support@shenzhenseoconference.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/figma-assets/mail.svg" alt="" className="w-5 h-5 flex-none mt-1" />
                  <div className="flex flex-col">
                    <span className="text-white/55 text-[12px] font-semibold uppercase tracking-[0.12em]">
                      Sponsorship Inquiries
                    </span>
                    <a
                      href="mailto:sponsor@shenzhenseoconference.com"
                      className="hover:underline"
                    >
                      sponsor@shenzhenseoconference.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <ContactField label="First Name *">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    required
                    className={CONTACT_INPUT_CLASS}
                    style={CONTACT_INPUT_STYLE}
                  />
                </ContactField>
                <ContactField label="Last Name *">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className={CONTACT_INPUT_CLASS}
                    style={CONTACT_INPUT_STYLE}
                  />
                </ContactField>
              </div>
              <ContactField label="Email Address *">
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  required
                  className={CONTACT_INPUT_CLASS}
                  style={CONTACT_INPUT_STYLE}
                />
              </ContactField>
              <label
                className="flex items-start gap-3 cursor-pointer select-none"
                style={{
                  color: '#F9F9F9',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '150%',
                }}
              >
                <span
                  onClick={() => setCheck((v) => !v)}
                  role="checkbox"
                  aria-checked={check}
                  tabIndex={0}
                  className={`mt-0.5 grid place-items-center w-[18px] h-[18px] rounded-[4px] border ${
                    check ? 'bg-[var(--teal)] border-[var(--teal)]' : 'border-white/30'
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      setCheck((v) => !v);
                    }
                  }}
                >
                  {check && <CheckIcon className="w-3 h-3 text-white" />}
                </span>
                I need a business invitation letter for my visa.
              </label>

              {/* Conditional invitation-letter fields (mirror of /contact) */}
              {check && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ContactField label="Nationality *">
                      <input
                        type="text"
                        name="nationality"
                        required
                        placeholder="United States"
                        className={CONTACT_INPUT_CLASS}
                        style={CONTACT_INPUT_STYLE}
                      />
                    </ContactField>
                    <ContactField label="Passport No. *">
                      <input
                        type="text"
                        name="passportNo"
                        required
                        placeholder="123456789"
                        className={CONTACT_INPUT_CLASS}
                        style={CONTACT_INPUT_STYLE}
                      />
                    </ContactField>
                  </div>
                  <ContactField label="Passport Issuing Office *">
                    <input
                      type="text"
                      name="passportIssuingOffice"
                      required
                      placeholder="U.S. Department of State"
                      className={CONTACT_INPUT_CLASS}
                      style={CONTACT_INPUT_STYLE}
                    />
                  </ContactField>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ContactField label="Date of Issue *">
                      <input
                        type="date"
                        name="dateOfIssue"
                        required
                        className={`${CONTACT_INPUT_CLASS} [color-scheme:dark]`}
                        style={CONTACT_INPUT_STYLE}
                      />
                    </ContactField>
                    <ContactField label="Passport Expiration Date *">
                      <input
                        type="date"
                        name="passportExpiration"
                        required
                        className={`${CONTACT_INPUT_CLASS} [color-scheme:dark]`}
                        style={CONTACT_INPUT_STYLE}
                      />
                    </ContactField>
                  </div>
                  <ContactField label="Job Title *">
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      placeholder="e.g., SEO Manager at ABC Company"
                      className={CONTACT_INPUT_CLASS}
                      style={CONTACT_INPUT_STYLE}
                    />
                  </ContactField>
                  <ContactField label="Estimated Duration of Stay in China *">
                    <input
                      type="text"
                      name="durationOfStay"
                      required
                      placeholder="e.g., September 10-20, 2026 (11 days in total)"
                      className={CONTACT_INPUT_CLASS}
                      style={CONTACT_INPUT_STYLE}
                    />
                  </ContactField>
                </div>
              )}

              <ContactField label="Additional Message (Optional)">
                <textarea
                  name="additionalMessage"
                  placeholder="Any additional information or questions..."
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/15 text-[16px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] resize-none text-white"
                />
              </ContactField>

              {check && (
                <div className="space-y-2 text-[13px] leading-[160%] text-white/65">
                  <p className="text-white">Before submitting, please review all entered information carefully.</p>
                  <p>
                    <span className="text-white font-semibold">Processing Time:</span> We aim to
                    issue your invitation letter within 3 business days. (Please remember to check
                    your spam folder if you don&apos;t see it in your inbox).
                  </p>
                  <p>
                    <span className="text-white font-semibold">Standard Format:</span> Your
                    invitation letter will be generated based on our standard template (
                    <a
                      href="https://drive.google.com/file/d/1CHEkSDwcXSjzpJzCssbcf6Ft_NFjf1rF/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white hover:text-[var(--red)]"
                    >
                      example
                    </a>
                    ).
                  </p>
                  <p>
                    <span className="text-white font-semibold">Special Formats (e.g., India, Pakistan):</span>{' '}
                    If your country requires a specific invitation letter format or style, please
                    email your required template to us directly, and we will prepare it for you.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Accuracy & Liability:</span> We
                    cannot verify the correctness of your data. Please note that we are not
                    responsible for visa rejections resulting from incorrect information inputs.
                  </p>
                </div>
              )}

              {status && (
                <div
                  className={`text-[14px] leading-[150%] ${
                    status.ok ? 'text-[var(--teal-2)]' : 'text-[var(--red)]'
                  }`}
                >
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="display inline-flex w-full md:w-auto md:self-start rounded-full gradient-cta uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  padding: '16px 32px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '150%',
                }}
              >
                {submitting ? 'SENDING…' : 'SEND MESSAGE'}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────────── PAGE ───────────────────────────── */
export default function Home5Page() {
  return (
    <main className="home5-root">
      <Nav />
      <Hero />
      <FounderLetter />
      <Recap />
      <Audiences />
      <WhyShenzhen />
      <Speakers />
      <Agenda />
      <Pricing />
      <Venues />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Sponsors />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
