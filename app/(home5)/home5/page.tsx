'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const A = {
  heroBg: '/figma-assets/dfd8cb68f2097a3164c042d67b3231672354f49a.jpg',
  founderPortrait: '/figma-assets/4b74d4aeb017232f0cbf2605ea7ff274d76f858d.jpg',
  founderAvatar: '/figma-assets/jp-avatar.png',
  founderSignature: '/figma-assets/jp-signature.png',
  recap: '/figma-assets/de3b4552f3cbd3a8a34ebb172a16b1bf278b9bae.png',
  audInternational: '/figma-assets/7c46b04752f234637e502b81cc363e979777fb68.jpg',
  audChinese: '/figma-assets/09ff6550fd1fd1e5f699132475d75b82291fb6f1.jpg',
  why1: '/figma-assets/6e1365b901e58c47813d8a9a6c17f43ff4c0f557.png',
  why2: '/figma-assets/c180b122845d182aed2c6a1c3b0f9c898e707c2f.jpg',
  why3: '/figma-assets/ea9863f1c46347ee75ce39500df9c0b12b743af6.png',
  why4: '/figma-assets/1a227bbe08c421d3cc2d14d7b8c4b6b82263e2bc.jpg',
  spkA: '/figma-assets/a98cc2407eac3ef826ce296466a19c22b89a4777.jpg',
  spkB: '/figma-assets/4b767e80b2b757091a90554414ca31841996deeb.jpg',
  spkC: '/figma-assets/a1bad36616537f10b8dfb095a790d57f0a93de74.jpg',
  spkD: '/figma-assets/423641b5b8fba6de7b4b21cd2a4d1251130007c3.jpg',
  venueStRegis: '/figma-assets/688936701b4bc80748c25feedf98d48b907a3e4b.png',
  venueMgm: '/figma-assets/a9c3ff3d80ef6b361ff110539eb6262a02a3edd2.png',
  testimonial1: '/figma-assets/32b31077323cc00c521e68046604026524586096.jpg',
  testimonial2: '/figma-assets/5d3a381b1ca81cf042afc9c25229fa75dfb6885c.jpg',
  avMike: '/figma-assets/7a90223f2bdbdefbbf62ffc8e1abc252b472d417.jpg',
  avMads: '/figma-assets/e044c1d1ffbfde2851b2664f657b6ae145322c51.png',
  avZack: '/figma-assets/bca373271b6020b0151ad3f4590d216edf8d05a2.jpg',
};

const SPONSORS = {
  platinum: [
    { src: '/figma-assets/73b861094a7ce5e5553ff2eacca50af9313eddc6.png', alt: 'ecomeXperts', h: 96 },
    { src: '/figma-assets/9add4b1aed067330ac161c840fbecee2473b160e.png', alt: 'QuickCreator', h: 96 },
  ],
  gold: [
    { src: '/figma-assets/f0e3f8d61df36d854e27745af7d05b9bcc1aea5c.png', alt: 'WhitePress', h: 56 },
    { src: '/figma-assets/5d44f4aa95e3e0cb5f75f6e92517a822bb547d10.png', alt: 'GlobalSou', h: 56 },
    { src: '/figma-assets/e2be1f52c8341431f2e0142282b3bdefb0b34054.png', alt: 'Interamplify', h: 56 },
    { src: '/figma-assets/8728f57b7619192ecc39e1207b73dfd04124cab3.png', alt: 'eClickTech', h: 40 },
    { src: '/figma-assets/00951c792ee58aee59e616fc8b656d29d1d17c81.png', alt: 'Outreacher', h: 40 },
    { src: '/figma-assets/da2f1dfdedf0a1e4dca70567d4e2156988fba686.png', alt: 'TalkHeap', h: 48 },
    { src: '/figma-assets/4cc238343519de7f3aeb23fa02dc6007d491df82.png', alt: 'One', h: 32 },
  ],
  silver: [
    { src: '/figma-assets/ebdf03b1659fef7181556f677b8191fd318148e2.png', alt: 'Jademond', h: 48 },
    { src: '/figma-assets/8842dd91b89a6d7f26f78f6178e930f87bc16a6b.png', alt: 'CLOOM TECH', h: 44 },
    { src: '/figma-assets/f322340b321ddd2210efee3f4ed32b7517bf5764.png', alt: 'Pro SEO', h: 40 },
    { src: '/figma-assets/4339518ac99baca90b5adeac28a69ea6b35b60b3.png', alt: 'Now Shenzhen', h: 44 },
  ],
};

const NAV = [
  { label: 'HOME', href: '#top' },
  { label: 'SPEAKERS', href: '#speakers' },
  { label: 'AGENDA', href: '#agenda' },
  { label: 'SPONSORS', href: '#sponsors' },
  { label: 'VISIT SHENZHEN', href: '#visit' },
  { label: 'CONTACT', href: '#contact' },
];

function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 3.75v1.5h6.69L3.22 13.22l1.06 1.06 7.97-7.97v6.69h1.5V3.75H4.5Z"
      />
    </svg>
  );
}

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

function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M4 7h16M4 12h16M4 17h16"
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
function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-[72px] md:h-[88px]">
        <Link href="/home5" className="flex items-center" aria-label="Shenzhen SEO Conference">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figma-assets/logo-szseo.png"
            alt="Shenzhen SEO Conference"
            className="h-[26px] md:h-[30px] w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[12px] font-semibold tracking-[0.18em] text-white/90 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="hidden md:inline-flex display items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] text-white gradient-cta"
        >
          GET TICKETS
          <ArrowUpRight className="w-3 h-3" />
        </a>
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden grid place-items-center w-10 h-10 -mr-2 text-white"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

/* ───────────────────────────── HERO (28:65) ───────────────────────────── */
function HeroTitleLine({
  label,
  word,
  colorClass,
}: {
  label: string;
  word: string;
  colorClass: string;
}) {
  return (
    <span className="flex items-baseline gap-3 md:gap-5">
      <span className="display text-[14px] md:text-[16px] font-medium tracking-[0.18em] text-white/85 translate-y-[-0.15em]">
        {label}
      </span>
      <span className={`display ${colorClass}`}>{word}</span>
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image src={A.heroBg} alt="" fill priority className="object-cover" sizes="100vw" />
        {/* 80% black overlay on the photo */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Soft fade into the page background at the bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,6,13,0) 70%, rgba(3,6,13,0.85) 92%, #03060d 100%)',
          }}
        />
      </div>
      <Nav />

      {/* Headline + right column */}
      <div className="container pt-[140px] md:pt-[300px] lg:pt-[340px] pb-12 md:pb-14">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* LEFT: title + date (date above on mobile, below on desktop) */}
          <div className="flex flex-col">
            <div className="order-1 lg:order-2 lg:mt-7 flex items-center gap-3 text-[13px] md:text-[14px] text-white/90 mb-5 lg:mb-0">
              <span className="font-bold">September 14–18, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/55" aria-hidden />
              <span className="font-medium">The St. Regis Shenzhen</span>
            </div>
            <h1 className="order-2 lg:order-1 display font-semibold uppercase leading-[1.02] tracking-[-0.005em] text-white text-[clamp(34px,6.2vw,72px)]">
              <span className="block">East Meets West</span>
              <HeroTitleLine label="IN" word="SEO" colorClass="text-[var(--teal-2)]" />
              <HeroTitleLine
                label="IN"
                word="Shenzhen, China"
                colorClass="gradient-text-brand"
              />
            </h1>
          </div>

          {/* RIGHT: description + CTA (filled red on mobile, outline on desktop) */}
          <div className="lg:max-w-[360px] lg:text-right flex flex-col lg:items-end gap-5 lg:gap-6">
            <p className="text-[15px] md:text-[16px] text-white leading-[1.55]">
              5 days of talks, workshops, masterminds, city tours, and the kind of network
              connections you don&apos;t make on LinkedIn
            </p>
            <a
              href="#pricing"
              className="lg:hidden display inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 rounded-full text-[13px] font-bold tracking-[0.18em] text-white gradient-cta"
            >
              GET TICKETS
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#pricing"
              className="hidden lg:inline-flex display items-center gap-2 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] text-white border border-white/55 bg-black/25 backdrop-blur-sm hover:bg-black/40"
            >
              GET TICKETS
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + quote/stats strip */}
      <div className="container">
        <div className="border-t border-white/15" />
      </div>
      <div className="container py-8 md:py-12">
        <div className="grid gap-7 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          {/* Quote */}
          <figure className="flex items-center gap-3 md:gap-4">
            <span className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/10 flex-none ring-2 ring-white/15">
              {/* Use first speaker portrait as Gary placeholder */}
              <Image
                src={A.spkA}
                alt="Gary Illyes"
                fill
                className="object-cover"
                sizes="48px"
              />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] md:text-[15px] italic text-white leading-[1.45]">
                &ldquo;Don&apos;t panic. Things change. They always do. Figure it out.&rdquo;
              </p>
              <figcaption className="mt-1.5 text-[11px] md:text-[13px] text-white/65 leading-snug">
                <span className="font-semibold text-white">Gary Illyes</span>
                <span className="mx-1.5 md:mx-2 text-white/30">|</span>
                <span>Search Relations, Google · Keynote Speaker</span>
              </figcaption>
            </div>
          </figure>

          {/* Stats */}
          <dl className="grid grid-cols-4 gap-4 md:flex md:items-end md:gap-10 lg:justify-end">
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
    <section className="bg-[#03060d] py-24 md:py-32">
      <div className="container">
        <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
          WHAT IS SZSEO?
        </div>
        <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em] mb-10 md:mb-12">
          A Letter From The Founder
        </h2>

        <div className="rounded-[28px] border border-white/10 bg-[#06101a]/40 p-6 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,440px)_1fr] items-start">
            {/* Portrait */}
            <div className="relative aspect-[440/640] w-full max-w-[440px] rounded-2xl overflow-hidden bg-white/5">
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
            <div className="relative">
              <QuoteGlyph className="w-10 h-8 md:w-11 md:h-9 text-[var(--red)] mb-5" />

              <div className="space-y-5 text-[15px] md:text-[16px] italic text-white/85 leading-[1.65] max-w-[560px]">
                <p>
                  In 2019 I ran a half-day SEO event in Shenzhen. 300 people, 95% Chinese. It
                  was good. Then COVID shut things down.
                </p>
                <p>
                  In 2025 I brought it back. Five days, 500 people, a third of the room flown
                  in from outside China. Speakers from Google. Agencies from Europe and
                  Australia. In-house teams from Chinese tech. All in one room — for the first
                  time.
                </p>
                <p>
                  Partnerships formed at coffee breaks. A UK YouTube agency walked in with no
                  Chinese clients and left with a clear ROI path. A German-Australian SEO
                  agency already working with 20+ Chinese brands going global — found new
                  partners before the closing party. Gary Illyes closed his keynote with
                  &ldquo;Don&apos;t panic. Figure it out.&rdquo; Every year since, people do
                  exactly that.
                </p>
                <p>
                  This year we&apos;re scaling to 600. Same hotel. Same idea. Bigger room.
                  More countries. Same filter — SEO entrepreneurs and practitioners
                  who&apos;ve done the work.
                </p>
                <p>If you&apos;ve been on the fence, come.</p>
              </div>

              {/* Signature */}
              <div className="mt-8 mb-10 max-w-[560px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={A.founderSignature}
                  alt="JP Zhang signature"
                  className="h-[88px] md:h-[110px] w-auto opacity-95"
                />
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 max-w-[560px]">
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
      </div>
    </section>
  );
}

/* ───────────────────────────── 2025 RECAP (28:153) ───────────────────────────── */
function Recap() {
  return (
    <section className="bg-[#03060d] pb-24 md:pb-32">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden aspect-[1248/702] mx-auto bg-white/5">
          <Image
            src={A.recap}
            alt="2025 Recap video poster"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1280px"
          />
          {/* subtle bottom-only darken */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)',
            }}
          />

          <button
            type="button"
            className="absolute left-5 bottom-5 md:left-8 md:bottom-8 inline-flex items-center gap-3 text-white"
          >
            <span className="grid place-items-center w-10 h-10 rounded-full bg-[var(--teal)] ring-1 ring-white/30">
              <PlayIcon className="w-4 h-4 translate-x-[1px]" />
            </span>
            <span className="display text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase">
              Watch the 2025 Recap
            </span>
          </button>

          <div className="absolute right-5 bottom-5 md:right-8 md:bottom-8 text-right">
            <div className="display text-[40px] md:text-[52px] font-bold leading-none text-white">
              500+
            </div>
            <div className="mt-1 text-[11px] md:text-[12px] tracking-[0.22em] font-semibold text-white/80">
              ATTENDEES · 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── AUDIENCES (28:164) ───────────────────────────── */
function Audiences() {
  const intl = [
    {
      h: 'A way into the Chinese market',
      p: "Without a 6-month consultant hunt. Meet vendors, talents, and agencies you'd never find on the open internet.",
    },
    {
      h: 'Signal from China',
      p: "What's working on Baidu, WeChat, Xiaohongshu, Douyin, Zhihu. From people running real campaigns there now.",
    },
    {
      h: 'An excuse to come',
      p: 'Shenzhen is the most undersold city in Asia for Western entrepreneurs. You leave with a vendor list and a city you can build anywhere else.',
    },
    {
      h: 'Not for',
      p: 'SEO beginners. Anyone looking for a course.',
    },
  ];
  const cn = [
    {
      h: 'International frontline SEO experience without leaving the country',
      p: "Google, YouTube, LLMs, from operators who've run campaigns that worked.",
    },
    {
      h: 'A room full of China-outbound peers',
      p: 'Partners, suppliers, talent.',
    },
    {
      h: '300+ international SEOs in the same venue',
      p: 'Your outbound channel starts here.',
    },
    {
      h: 'Not for',
      p: 'SEO beginners. Anyone who wants theory over hands-on work.',
    },
  ];

  const cols = [
    {
      title: 'International Attendees',
      shortTitle: "Int'l Attendees",
      img: A.audInternational,
      lead: "You're in Europe, the US, Southeast Asia, Australia, New Zealand, or the Middle East. You run SEO campaigns, agencies, or in-house teams. You want:",
      items: intl,
    },
    {
      title: 'Chinese Attendees',
      shortTitle: 'Chinese Attendees',
      img: A.audChinese,
      lead: "You're running SEO in China. Agency clients, in-house projects, or global brand mandates. You want:",
      items: cn,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#03060d] py-24 md:py-32">
      <div className="container">
        {/* Centered eyebrow + heading */}
        <div className="text-center">
          <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
            WHO IS THIS FOR
          </div>
          <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em] mb-8 md:mb-16">
            Two Audiences, One Room
          </h2>
        </div>

        {/* Mobile-only tab bar */}
        <div className="flex gap-3 mb-8 md:hidden">
          {cols.map((col, idx) => (
            <button
              key={col.title}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex-1 display px-4 py-3 rounded-full text-[12px] font-bold tracking-[0.16em] uppercase ${
                activeTab === idx
                  ? 'gradient-cta text-white'
                  : 'border border-white/40 text-white bg-transparent'
              }`}
            >
              {col.shortTitle}
            </button>
          ))}
        </div>

        {/* Two columns with vertical divider on desktop */}
        <div className="grid gap-12 md:gap-0 md:grid-cols-2">
          {cols.map((col, idx) => (
            <div
              key={col.title}
              className={`${
                activeTab === idx ? 'block' : 'hidden'
              } md:block ${
                idx === 0
                  ? 'md:pr-8 lg:pr-12 md:border-r md:border-white/10'
                  : 'md:pl-8 lg:pl-12'
              }`}
            >
              <div className="relative aspect-[560/429] rounded-2xl overflow-hidden mb-7 bg-white/5">
                <Image
                  src={col.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <h3 className="display text-[22px] md:text-[24px] font-semibold mb-3 uppercase tracking-[-0.005em]">
                {col.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.6] mb-7 max-w-[520px]">
                {col.lead}
              </p>
              <ul className="space-y-5">
                {col.items.map((it) => {
                  const isNotFor = it.h === 'Not for';
                  if (isNotFor) {
                    return (
                      <li
                        key={it.h}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
                      >
                        <div className="text-[12px] md:text-[13px] tracking-[0.18em] uppercase font-bold mb-1.5 text-white">
                          {it.h}
                        </div>
                        <div className="text-[14px] md:text-[15px] text-white/70 leading-[1.55]">
                          {it.p}
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={it.h} className="pl-5 border-l-2 border-[var(--red)]">
                      <div className="text-[12px] md:text-[13px] tracking-[0.16em] uppercase font-bold mb-1.5 text-white">
                        {it.h}
                      </div>
                      <div className="text-[14px] md:text-[15px] text-white/70 leading-[1.55]">
                        {it.p}
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
      h: 'Ancient walled cities next to glass towers',
      p: '1,700-year-old Ming Dynasty gates at Nantou. Sub-tropical beaches at Dapeng. Mangrove wetlands inside the city limits.',
    },
    {
      img: A.why4,
      h: 'Your budget goes twice as far',
      p: '5-star hotels for less than a 3-star in London or New York.',
    },
  ];
  return (
    <section id="visit" className="bg-[#03060d] pb-24 md:pb-32">
      <div className="container">
        <div className="rounded-[28px] border border-white/10 bg-[#03060d] p-6 md:p-10 lg:p-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
                WHY SHENZHEN
              </div>
              <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em]">
                Come Expecting The Unknown
              </h2>
            </div>
            <a
              href="#"
              className="display inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] text-white border border-white/55 bg-black/20 backdrop-blur-sm hover:bg-black/40 self-start md:self-auto"
            >
              VISIT SHENZHEN
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <p className="text-[15px] md:text-[16px] text-white/85 leading-[1.6] max-w-[760px] mb-3">
            Most conferences ask you to fly to a city you&apos;ve already been to. This one
            doesn&apos;t.
          </p>
          <p className="text-[14px] md:text-[15px] text-white/65 leading-[1.6] max-w-[760px] mb-12 md:mb-14">
            Shenzhen is the fastest-moving city on earth that most Westerners have never set
            foot in. 18 million people. Average age 32. More patents filed here than anywhere
            else in China. Tencent, DJI, Huawei, BYD — all within a 30-minute drive.
          </p>
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
                    <div className="relative aspect-[544/280] rounded-xl overflow-hidden bg-white/5">
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
  const portraits = [A.spkA, A.spkB, A.spkC, A.spkD];
  const list = [
    { country: 'US', tag: 'Keynote', name: 'Gary Illyes', sub: 'Search Relations, Google' },
    { country: 'CA', tag: 'Keynote', name: 'Aleyda Solis', sub: 'International SEO Consultant · Founder, Orainti' },
    { country: 'US', tag: 'Keynote', name: 'Mads Singers', sub: 'Management Consultant · Runs his own SEO conf in Vietnam' },
    { country: 'CN', tag: '', name: 'Zack Franklin', sub: 'SEO agency owner · 9 years in Shenzhen' },
    { country: 'US', tag: '', name: 'Terry Kyle', sub: 'Founder, WPX.net' },
    { country: 'CN', tag: '', name: 'Stewart Vickers', sub: 'SEO Practitioner' },
    { country: 'AU', tag: '', name: 'Natalia Witczyk', sub: 'Technical SEO, Australia' },
    { country: 'UK', tag: '', name: 'Charles Floate', sub: 'SEO Consultant' },
    { country: 'US', tag: '', name: 'Greg Hellers', sub: 'SEO Practitioner' },
    { country: 'AU', tag: '', name: 'Lawrence Hitches', sub: 'SEO Practitioner' },
    { country: 'US', tag: '', name: 'Shane Dutka', sub: 'SEO Practitioner' },
    { country: 'CZ', tag: '', name: 'Sarah Pokorná', sub: 'WritePress' },
  ];

  const [showAll, setShowAll] = useState(false);
  const MOBILE_INITIAL = 3;

  return (
    <section id="speakers" className="bg-[#03060d] py-24 md:py-32">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end mb-12 md:mb-14">
          <div>
            <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
              WHO&apos;S SPEAKING
            </div>
            <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.02] tracking-[-0.005em] max-w-[820px]">
              <span className="block text-white">On Stage: Practitioners,</span>
              <span className="block text-white/30">Not Theorists.</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/75 leading-[1.55] max-w-[640px]">
              Every speaker has shipped real work. No theorists. No fluff.
            </p>
          </div>
          <a
            href="#"
            className="display inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] text-white border border-white/55 bg-black/20 backdrop-blur-sm hover:bg-black/40 self-start md:self-end"
          >
            SEE ALL SPEAKERS
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <ul className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((s, i) => (
            <li
              key={s.name}
              className={`${
                !showAll && i >= MOBILE_INITIAL ? 'hidden sm:block' : ''
              } rounded-2xl bg-[#06101a]/60 p-6 border border-white/[0.06] hover:border-[var(--red)] transition-colors`}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                <Image
                  src={portraits[i % portraits.length]}
                  alt={s.name}
                  fill
                  className="object-cover grayscale-[12%]"
                  sizes="(max-width: 768px) 100vw, 246px"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-[11px] font-semibold tracking-[0.2em] text-white/60">
                  {s.country}
                </div>
                {s.tag && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase bg-[var(--teal)] text-white">
                    {s.tag}
                  </span>
                )}
              </div>
              <div className="mt-3 text-[18px] md:text-[20px] font-bold text-white leading-tight">
                {s.name}
              </div>
              <div className="mt-1.5 text-[13px] md:text-[14px] text-white/55 leading-snug line-clamp-2">
                {s.sub}
              </div>
            </li>
          ))}
        </ul>

        {!showAll && list.length > MOBILE_INITIAL && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="display inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] text-white border border-white/55 bg-black/20 hover:bg-black/40"
            >
              LOAD MORE
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        )}
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
      desc: '4 keynotes. 8 field talks. 6 lightning rounds. Opening party at night.',
      tier: 'Standard',
      note: '',
    },
    {
      n: 'DAY 4',
      date: 'THURSDAY, SEP 17',
      title: 'Main Conference',
      desc: 'Same format. More speakers. Closing party.',
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
    <section id="agenda" className="bg-[#03060d] py-24 md:py-32 border-t border-white/10">
      <div className="container">
        <div className="mb-10 md:mb-12">
          <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
            WHAT&apos;S THE AGENDA
          </div>
          <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.02] tracking-[-0.005em] max-w-[820px]">
            <span className="text-white">Five Days,</span>{' '}
            <span className="text-white/30">Pick Your Depth</span>
          </h2>
        </div>

        {/* Pre-events banner */}
        <div className="mb-2 md:mb-3">
          <div className="display text-[14px] md:text-[16px] font-bold uppercase tracking-[0.16em] text-white">
            Pre-Events · Sat (Sep 12) + Sun (Sep 13) Afternoons
          </div>
          <p className="mt-2 text-[13px] md:text-[14px] text-white/55 leading-[1.55]">
            Two free side events open to everyone — no conference ticket required. (Details May
            2026)
          </p>
        </div>

        <ul className="mt-8 md:mt-10 space-y-4 md:space-y-0">
          {days.map((d) => (
            <li
              key={d.n}
              className="rounded-2xl border border-white/10 p-6 md:rounded-none md:border-0 md:border-t md:border-white/10 md:p-0 grid grid-cols-1 md:grid-cols-[180px_1fr_auto] md:items-center gap-4 md:gap-8 md:py-8"
            >
              {/* Mobile: top row weekday left + DAY N right; Desktop: stacked left column */}
              <div className="flex items-center justify-between md:block">
                <div className="order-2 md:order-1 display text-[20px] md:text-[24px] font-bold leading-none text-white">
                  {d.n}
                </div>
                <div className="order-1 md:order-2 md:mt-2 text-[13px] md:text-[16px] font-semibold tracking-[0.12em] text-[#86DFF7]">
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
      price: '$530',
      old: '$600',
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
      price: '$795',
      old: '$900',
      forWho: 'For marketing directors and agency leads.',
      tag: 'Most popular',
      bullets: [
        'Everything in Standard',
        'Workshops + SEO Masterminds, Days 1–2',
        'Front-row seating',
      ],
      cta: 'Buy Deluxe Ticket',
      popular: true,
    },
    {
      name: 'VIP',
      price: '$1,590',
      old: '$1,800',
      forWho: 'For executives and founders',
      tag: '',
      bullets: [
        'Everything in Deluxe',
        'Day 5 VIP networking at MGM',
        'One night stay at MGM included',
        'Private dinners with speakers',
      ],
      cta: 'Buy VIP Ticket',
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32"
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
        <div className="text-center">
          <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
            HOW MUCH IS THE TICKET
          </div>
          <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em]">
            Get Early Bird Tickets
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-[15px] md:text-[16px] text-white/70 leading-[1.6]">
            One night at The St. Regis costs more than a Standard ticket. You get 5 days, every
            meal, and two parties.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-7 border border-white/10 bg-[#06101a]/40"
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
                <span className="display text-[36px] md:text-[40px] font-bold leading-none text-white">
                  {t.price}
                </span>
                <span className="display text-[15px] text-white/40 line-through pb-1">
                  {t.old}
                </span>
              </div>
              <div className="mt-2 text-[14px] font-semibold text-white/80 leading-snug">
                {t.forWho}
              </div>
              <ul className="mt-7 space-y-3">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-white/80">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/figma-assets/check-red.png"
                      alt=""
                      className="w-4 h-4 mt-0.5 flex-none"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 display inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase ${
                  t.popular
                    ? 'gradient-cta text-white'
                    : 'border border-white/40 text-white hover:bg-white/5'
                }`}
              >
                {t.cta}
                <ArrowUpRight className="w-3 h-3" />
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
      addr: '5016 Shennan East Rd, Luohu District',
    },
    {
      tag: 'VIP Workshop Venue',
      name: 'MGM Shenzhen',
      days: 'Day 5 VIP Networking',
      img: A.venueMgm,
      desc: 'An intimate setting away from the main conference. Smaller room. Deeper conversations. One night included with your VIP ticket.',
      whyTitle: 'Why this one',
      why: 'The St. Regis gets you the main stage. MGM gets you the after-hours. Two venues, two registers — one public-facing and stage-lit, one private and close-in.',
      addr: '33 Yanmei Rd, Yantian District, Shenzhen, Guangdong 518000',
    },
  ];
  return (
    <section className="bg-[#03060d] py-24 md:py-32">
      <div className="container">
        <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
          WHERE IS THE EVENT HAPPENING
        </div>
        <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em] mb-5 max-w-[900px]">
          Two Venues. Both Picked On Purpose.
        </h2>
        <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.6] max-w-[820px] mb-12 md:mb-14">
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
                <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--red)] mb-2">
                  {v.tag}
                </div>
                <h3 className="display text-[22px] md:text-[24px] font-bold uppercase tracking-[-0.005em]">
                  {v.name}
                </h3>
                <div className="mt-1 mb-4 display text-[12px] font-semibold tracking-[0.18em] uppercase text-white/55">
                  {v.days}
                </div>
                <p className="text-[14px] md:text-[15px] text-white/75 leading-[1.6]">{v.desc}</p>
                <div className="mt-6">
                  <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--red)] mb-2">
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
      role: 'YouTube agency owner, UK',
      q: "The best conference he'd ever attended “in terms of clear business ROI” — and said he should have tapped this market years ago.",
    },
    {
      av: A.avMads,
      name: 'Mads Singers',
      role: 'Founder, Mads Singers Consulting · Runs his own SEO conference in Vietnam',
      q: '“Absolutely top-notch.” — on the organisation of the 2025 event.',
    },
    {
      av: A.avZack,
      name: 'Zack Franklin',
      role: 'SEO agency owner, 9 years in Shenzhen',
      q: '“There are very few opportunities for Western and Chinese to get together in one room in real life. It’s very unique.”',
    },
  ];
  return (
    <section className="bg-[#03060d] py-24 md:py-32 border-t border-white/10">
      <div className="container">
        <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
          WHAT DID THE PREVIOUS ATTENDEES SAY
        </div>
        <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em] mb-12 max-w-[900px] text-white">
          What 2025 Attendees Told Us.
        </h2>

        {/* Videos: carousel on mobile, 2-col grid on md+ */}
        <div className="md:hidden mb-8">
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
                  <div className="relative rounded-xl overflow-hidden aspect-[548/289] bg-white/5">
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
                      <span className="grid place-items-center w-12 h-12 rounded-full bg-[var(--teal)] ring-1 ring-white/30 text-white">
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
        <div className="hidden md:grid gap-5 md:grid-cols-2 mb-5">
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
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-[var(--teal)] ring-1 ring-white/30 text-white">
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

        {/* Quotes: carousel on mobile, 3-col grid on md+ */}
        <div className="md:hidden">
          <div
            ref={quotesRef}
            className="-mx-6 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            <div className="flex gap-4 pb-2">
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
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/15">
                      <Image
                        src={q.av}
                        alt={q.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
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
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/15">
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
      a: 'About 600. 300+ from China — in-house SEO and marketing leaders from global-market brands. 200+ international — agencies, Martech, fractional SEO consultants.',
      defaultOpen: true,
    },
    {
      q: 'What language are the sessions in?',
      a: 'English and Mandarin. Live translation provided in both directions for keynotes and main stage talks.',
    },
    {
      q: 'Is the content Western SEO or China SEO?',
      a: 'Both. The whole point of the event is the overlap. Half the talks are Google/YouTube/LLM-focused. Half are Baidu/WeChat/Xiaohongshu/Douyin.',
    },
    {
      q: 'Is this for SEO beginners?',
      a: 'No. Every attendee is expected to have shipped real SEO work. We don’t run intro sessions.',
    },
    { q: 'Refund policy.', a: 'Full refund up until the conference starts. No questions asked.' },
    {
      q: 'Can I transfer my ticket?',
      a: 'Yes — email support@shenzhenseoconference.com with the new attendee’s details.',
    },
    {
      q: 'Do I need a visa?',
      a: '54+ passports are visa-free for stays up to 30 days. If yours isn’t, you’ll need a tourist or business visa.',
    },
    {
      q: 'Can you send me a business invitation letter for the visa?',
      a: 'Yes. Tick the box on the contact form or email us — we’ll send a signed invitation letter within 3 business days.',
    },
    {
      q: 'Conference hotel rates.',
      a: 'St. Regis Shenzhen offers a 20–25% discount on standard rates for confirmed attendees. Booking link sent with your ticket.',
    },
    {
      q: 'Session recordings?',
      a: 'Keynotes and main-stage talks are recorded. Workshops and Masterminds are live-only.',
    },
    {
      q: 'Dress code?',
      a: 'Smart casual. The opening party is a touch dressier. Bring layers — Shenzhen is warm in September but the venues run cold.',
    },
  ];
  return (
    <section className="bg-[#03060d] py-24 md:py-32 border-t border-[var(--line)]">
      <div className="container">
        <div className="md:text-center text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
          FAQ
        </div>
        <h2 className="md:text-center display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em] mb-12 text-white">
          Real Questions. Direct Answers.
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
    <section className="bg-[#03060d] py-16 md:py-20">
      <div className="container">
        <div
          className="rounded-[28px] py-14 md:py-20 px-6 text-center"
          style={{
            background:
              'linear-gradient(160deg, #114555 0%, #0a3142 35%, #06222d 70%, #051820 100%)',
          }}
        >
          <h2 className="display text-[28px] md:text-[40px] font-semibold leading-[1.1] uppercase tracking-[-0.005em] max-w-[920px] mx-auto text-white">
            One Room. Five Days. September.
          </h2>
          <p className="mt-5 max-w-[720px] mx-auto text-[14px] md:text-[15px] text-white/75 leading-[1.6]">
            If the question is whether Shenzhen is worth the trip — the answer is yes.
            <br className="hidden md:block" /> If the question is whether you should wait for
            2027 — the answer is no. Seats cap at 600.
          </p>
          <a
            href="#pricing"
            className="mt-8 display inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] gradient-cta text-white"
          >
            GET TICKETS TODAY
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── SPONSORS (28:701) ───────────────────────────── */
function Sponsors() {
  const Row = ({
    title,
    items,
    max,
  }: {
    title: string;
    items: { src: string; alt: string; h: number }[];
    max: number;
  }) => (
    <div className="text-center">
      <h3 className="display text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-8 text-white/85">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-items-center sm:justify-center gap-x-8 sm:gap-x-14 md:gap-x-20 gap-y-10">
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
            }}
            className="opacity-85 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
  return (
    <section id="sponsors" className="bg-[#03060d] py-24 md:py-32 border-t border-white/10">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end mb-16 md:mb-20">
          <div>
            <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
              2026 PARTNERS
            </div>
            <h2 className="display text-[28px] md:text-[48px] font-semibold uppercase leading-[1.05] tracking-[-0.005em] text-white">
              Our Sponsors
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] text-white/65 leading-[1.6] max-w-[640px]">
              Thank you to the sponsors who made this event possible.
            </p>
          </div>
          <a
            href="#"
            className="display inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] text-white border border-white/55 bg-black/20 backdrop-blur-sm hover:bg-black/40 w-full md:w-auto md:self-end"
          >
            BECOME A 2026 SPONSOR
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-16 md:space-y-20">
          <Row title="Platinum Sponsors" items={SPONSORS.platinum} max={96} />
          <Row title="Gold Sponsors" items={SPONSORS.gold} max={56} />
          <Row title="Silver Sponsors" items={SPONSORS.silver} max={48} />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── CONTACT (28:745) ───────────────────────────── */
function Contact() {
  const [check, setCheck] = useState(false);
  return (
    <section id="contact" className="bg-[#03060d] py-16 md:py-24">
      <div className="container">
        <div className="rounded-[28px] p-8 md:p-12 lg:p-14 bg-[#06101a]/60 border border-white/10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-[18px] font-bold tracking-[0.16em] text-[var(--red)] mb-3">
                CONTACT
              </div>
              <h2 className="display text-[36px] md:text-[52px] font-bold uppercase leading-none tracking-[-0.005em] mb-5 text-white">
                Questions?
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.6] mb-8 max-w-[440px]">
                Tickets, invitation letters, inquiries — we read everything.
              </p>
              <ul className="space-y-3 text-[14px] md:text-[15px] text-white/85">
                <li className="flex items-center gap-3">
                  <MailIcon className="w-4 h-4 text-white/55 flex-none" />
                  <a
                    href="mailto:support@shenzhenseoconference.com"
                    className="hover:underline"
                  >
                    support@shenzhenseoconference.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="w-4 h-4 text-white/55 flex-none" />
                  <a
                    href="mailto:sponsor@shenzhenseoconference.com"
                    className="hover:underline"
                  >
                    sponsor@shenzhenseoconference.com
                  </a>
                </li>
              </ul>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#03060d] border border-white/15 text-[15px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#03060d] border border-white/15 text-[15px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)]"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full px-4 py-3.5 rounded-xl bg-[#03060d] border border-white/15 text-[15px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)]"
              />
              <label className="flex items-start gap-3 text-[13px] md:text-[14px] text-white/70 cursor-pointer select-none">
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
              <textarea
                placeholder="Message (Optional)"
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-[#03060d] border border-white/15 text-[15px] placeholder:text-white/45 focus:outline-none focus:border-[var(--teal)] resize-none"
              />
              <button
                type="submit"
                className="display w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[12px] font-bold tracking-[0.18em] gradient-cta text-white"
              >
                SEND MESSAGE
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── FOOTER (28:781) ───────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#06222d]">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-8 rounded-md gradient-brand" aria-hidden />
              <span className="text-[15px] font-semibold tracking-[0.18em] leading-tight">
                SHENZHEN
                <br />
                SEO CONFERENCE
              </span>
            </div>
            <p className="text-[16px] md:text-[18px] text-white/85 mb-6">
              Connecting Eastern and Western SEO
            </p>
            <a
              href="#pricing"
              className="display inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-semibold tracking-[0.16em] gradient-cta text-white"
            >
              GET YOUR TICKETS TODAY
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          {[
            {
              title: 'NAVIGATE',
              links: [
                ['HOME', '#top'],
                ['SPEAKERS', '#speakers'],
                ['SPONSORS', '#sponsors'],
                ['VISIT SHENZHEN', '#visit'],
                ['CONTACT', '#contact'],
              ],
            },
            {
              title: 'FOLLOW',
              links: [
                ['LINKEDIN', '#'],
                ['X', '#'],
                ['WE CHAT', '#'],
              ],
            },
            {
              title: 'MISC',
              links: [
                ['Privacy Policy', '#'],
                ['Terms & Conditions', '#'],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="display text-[14px] font-semibold tracking-[0.2em] mb-5">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[14px] font-semibold tracking-[0.06em] text-white/75 hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-12 border-white/10" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[14px] text-white/60">
          <div>support@shenzhenseoconference.com · Shenzhen, China</div>
          <div>© 2026 ShenzhenSEOConference.com | All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────── PAGE ───────────────────────────── */
export default function Home5Page() {
  return (
    <main className="home5-root">
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
    </main>
  );
}
