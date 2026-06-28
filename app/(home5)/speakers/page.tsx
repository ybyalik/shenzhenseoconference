'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';

/* ────────────────────── DATA (placeholder — swap with real list) ─────────────────── */

type Speaker = {
  name: string;
  country: string;
  title: string;
  img: string;
  tag?: string;
};

// Map full country names (as used in the speaker data) to ISO 3166-1 alpha-2 codes,
// then to flag emoji — matching how the home page renders speaker flags.
const COUNTRY_CODES: Record<string, string> = {
  'united states': 'US',
  usa: 'US',
  'united kingdom': 'GB',
  uk: 'GB',
  spain: 'ES',
  china: 'CN',
  denmark: 'DK',
  australia: 'AU',
  canada: 'CA',
  france: 'FR',
  switzerland: 'CH',
  japan: 'JP',
  germany: 'DE',
  russia: 'RU',
  luxembourg: 'LU',
  'hong kong': 'HK',
  egypt: 'EG',
  italy: 'IT',
  estonia: 'EE',
  india: 'IN',
  indonesia: 'ID',
  qatar: 'QA',
  sweden: 'SE',
  thailand: 'TH',
  turkey: 'TR',
  belgium: 'BE',
};

const flagEmoji = (name: string) => {
  const cc = COUNTRY_CODES[name.trim().toLowerCase()];
  if (!cc) return name.trim(); // fall back to text for anything unmapped
  return String.fromCodePoint(...[...cc].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
};

// Handles single countries and combos like "China & Australia" or "Egypt · Italy".
const countryFlags = (country: string) =>
  country
    .split(/[&·]/)
    .map((c) => flagEmoji(c))
    .join(' ');

// Real headshots we have available, used to populate the section grids below.
// Replace with the actual lineup as content lands.
const SPEAKER_POOL: Speaker[] = [
  { name: 'Gary Illyes', country: 'United States', title: 'Search Relations, Google', img: '/assets/gary-illyes.jpg' },
  { name: 'Lily Ray', country: 'United States', title: 'VP SEO Strategy & Research', img: '/assets/lily-ray.jpg' },
  { name: 'Eli Schwartz', country: 'United States', title: 'Growth Advisor, Author of Product-Led SEO', img: '/assets/eli-schwartz.jpg' },
  { name: 'Lars Lofgren', country: 'United States', title: 'CEO, Stone Press', img: '/assets/lars-lofgren.jpg' },
  { name: 'Aleyda Solis', country: 'Spain', title: 'Founder, Orainti', img: '/figma-assets/a98cc2407eac3ef826ce296466a19c22b89a4777.jpg' },
  { name: 'Bernard Huang', country: 'United States', title: 'Co-founder, Clearscope', img: '/assets/bernard-huang.jpg' },
  { name: 'Doug Pierce', country: 'United States', title: 'SEO Consultant', img: '/assets/doug-pierce.jpg' },
  { name: 'Loki Yan', country: 'China', title: 'SEO Practitioner', img: '/assets/loki-yan.jpg' },
  { name: 'Mads Singers', country: 'Denmark', title: 'Management Consultant', img: '/assets/mads-singers.jpg' },
  { name: 'Megan Gougeon', country: 'United States', title: 'SEO Strategist', img: '/assets/megan-gougeon-2026.jpg' },
  { name: 'Mike Dee', country: 'United States', title: 'SEO Consultant', img: '/assets/mike-dee.jpg' },
  { name: 'Nick Drewe', country: 'United Kingdom', title: 'Founder, WeThrift', img: '/assets/nick-drewe.jpg' },
  { name: 'Owain Lloyd-Williams', country: 'United Kingdom', title: 'SEO Practitioner', img: '/assets/owain-lloyd-williams.jpg' },
  { name: 'Victor Huynh', country: 'United States', title: 'SEO Consultant', img: '/assets/victor-huynh.jpg' },
  { name: 'Zack Franklin', country: 'United States', title: 'SEO agency owner, 7-figures', img: '/assets/zack-franklin.jpg' },
  { name: 'Gael Breton', country: 'France', title: 'Co-founder, Authority Hacker', img: '/figma-assets/4b767e80b2b757091a90554414ca31841996deeb.jpg' },
  { name: 'Charles Floate', country: 'United Kingdom', title: 'SEO Practitioner', img: '/figma-assets/a1bad36616537f10b8dfb095a790d57f0a93de74.jpg' },
];

function pickSpeakers(start: number, count: number): Speaker[] {
  return Array.from({ length: count }, (_, i) => SPEAKER_POOL[(start + i) % SPEAKER_POOL.length]);
}

const KEYNOTES: Speaker[] = [
  { name: 'Lily Ray', country: 'USA', title: 'VP of SEO Strategy & Research, Amsive', img: '/assets/lily-ray.jpg' },
  { name: 'Gary Illyes', country: 'Switzerland', title: 'Analyst, Google Search', img: '/assets/gary-illyes.jpg' },
  { name: 'Eli Schwartz', country: 'USA', title: 'Author, Product-Led SEO', img: '/assets/eli-schwartz.jpg' },
  { name: 'Sasha Gusain', country: 'Australia', title: 'Head of Logged Out Experience, Canva', img: '/assets/sasha-gusain.jpg' },
  { name: 'Lars Lofgren', country: 'USA', title: 'Fractional VP of Marketing', img: '/assets/lars-lofgren.jpg' },
  { name: 'Bernard Huang', country: 'USA', title: 'Co-founder, Clearscope', img: '/assets/bernard-huang.jpg' },
];
const WORKSHOPS: Speaker[] = [
  { name: 'Marc Moeller', country: 'Germany & Australia', title: 'Founder, Ecomexperts', img: '/assets/marc-moeller.jpg' },
  { name: 'Megan Gougeon', country: 'Canada', title: 'Founder, Portable Professional', img: '/assets/megan-gougeon-2026.jpg' },
  { name: 'Jessica Malnik', country: 'USA', title: 'Founder, Remote Work Tribe & Clarity Briefs', img: '/assets/jessica-malnik.jpeg' },
  { name: 'Zack Franklin', country: 'USA', title: 'Founder, SmartEcomSEO', img: '/assets/zack-franklin.jpg' },
];
const FIELD_TALKS: Speaker[] = [
  { name: 'Nick Drewe', country: 'Australia', title: 'Founder & CEO, Wethrift', img: '/assets/nick-drewe.jpg' },
  { name: 'Josh Blyskal', country: 'USA', title: 'AI Strategy & Research, Profound', img: '/assets/josh-blyskal.png' },
  { name: 'Nik Ranger', country: 'Australia', title: 'Senior Growth Consultant, Dejan', img: '/assets/nik-ranger-2026.jpg' },
  { name: 'Loki Yan', country: 'China & Australia', title: 'Co-founder, First Optimise (壹优化)', img: '/assets/loki-yan.jpg' },
  { name: 'Doug Pierce', country: 'USA', title: 'Founder, Cogney', img: '/assets/doug-pierce.jpg' },
  { name: 'Mao Kawana', country: 'Japan', title: 'Project Manager, Faber Company', img: '/assets/mao-kawana.jpg' },
  { name: 'Polina Kogan', country: 'Luxembourg & Russia', title: 'SEO Consultant, Ayudante', img: '/assets/polina-kogan.webp' },
  { name: 'Victor Huynh', country: 'USA', title: 'CEO & Head of Digital Strategy, Ready Artwork', img: '/assets/victor-huynh.jpg' },
  { name: 'Owain Lloyd-Williams', country: 'UK', title: 'Independent SEO Consultant', img: '/assets/owain-lloyd-williams.jpg' },
  { name: 'Sebastien Edgar', country: 'USA', title: 'Global VP of Digital Marketing, Liferay', img: '/assets/sebastien-edgar.jpg' },
  { name: 'Kun Tang', country: 'China', title: 'Founder and CEO, Jademond', img: '/assets/kun-tang.webp' },
];
const LIGHTNING_TALKS: Speaker[] = [
  { name: 'Apurva Bose', country: 'USA', title: 'VP of Operations & Strategy, Overtake Digital', img: '/assets/apurva-bose.jpg' },
  { name: 'Johann Sathianathen', country: 'USA', title: 'Co-founder, Cyndra AI', img: '/assets/johann-sathianathen.webp' },
  { name: 'Roger Yin', country: 'Canada', title: 'SEO Partner, HashMatrix', img: '/assets/roger-yin.jpg' },
  { name: 'Tom Qiao', country: 'Canada', title: 'Founder, Convert Better', img: '/assets/tom-qiao.jpg' },
  { name: 'Michael Wu', country: 'Canada', title: 'CEO, Page One Formula', img: '/assets/michael-wu.jpg' },
  { name: 'Begum Kaya', country: 'Turkey', title: 'Organic Growth Strategist, Omniscient Digital', img: '/assets/begum-kaya.webp' },
  { name: 'David Carrasco', country: 'Spain', title: 'Freelance SEO Consultant', img: '/assets/david-carrasco.jpg' },
  { name: 'Andrea Abbondanza', country: 'Italy', title: 'Founder, Abbondanza Marketing', img: '/assets/andrea-abbondanza.webp' },
  { name: 'Jonathan Kiekbusch', country: 'UK & Germany', title: 'Founder, SwishDM', img: '/assets/jonathan-kiekbusch.jpg' },
  { name: 'Max Hobbs', country: 'UK', title: 'Global Head of Marketing, LTL School', img: '/assets/max-hobbs.jpg' },
  { name: 'Konstantin Sadekov', country: 'Estonia', title: 'Founder & CEO, Ethical SEO', img: '/assets/konstantin-sadekov.jpg' },
  { name: 'Gabriele Kahlout', country: 'Qatar', title: 'Head of Audience Development, Al Jazeera', img: '/assets/gabriele-kahlout.jpg' },
  { name: 'Sam Penny', country: 'Australia', title: 'SEO Manager, Rest', img: '/assets/sam-penny.webp' },
  { name: 'Helen Han', country: 'China & Australia', title: 'Technical SEO Executive, Easygo', img: '/assets/helen-han.jpg' },
  { name: 'Jine Wu', country: 'China & Australia', title: 'SEO Operations Manager, REA Group', img: '/assets/jine-wu.jpg' },
  { name: 'Henry Dalziel', country: 'UK & Hong Kong', title: 'SEO Lead, Publicis Media', img: '/assets/henry-dalziel.webp' },
  { name: 'Killian Kostiha', country: 'France & Hong Kong', title: 'Founder, Get Clicks', img: '/assets/killian-kostiha.jpg' },
  { name: 'Jodie Chan', country: 'Hong Kong', title: 'SVP of Product & Strategic Partnerships, Chinafy', img: '/assets/jodie-chan.webp' },
  { name: 'Divya Jain', country: 'India', title: 'Global Head of Organic Growth & Brand, Edvoy', img: '/assets/divya-jain.jpg' },
  { name: 'Wasin Mekkit', country: 'Thailand', title: 'Data & Growth Analyst, Statrys', img: '/assets/wasin-mekkit.webp' },
  { name: 'Mayi', country: 'China', title: 'Founder & CEO, InnoHunts', img: '/assets/mayi.jpg' },
  { name: 'Ben Fang', country: 'China', title: 'CEO & Co-founder, Kingsway Video', img: '/assets/ben-fang.jpg' },
  { name: 'Tupa Lee', country: 'China', title: 'SEO & SEM Consultant', img: '/assets/tupa-lee.jpg' },
];
const VIP_NETWORKING: Speaker[] = [
  { name: 'Tanya Van Gastel', country: 'Belgium', title: 'Founder, Rankingonai.com', img: '/assets/tanya-van-gastel.webp' },
  { name: 'Marcus Pentzek', country: 'Germany & China', title: 'Partner & Director SEO, Jademond Digital', img: '/assets/marcus-pentzek.jpg' },
  { name: 'Tom So', country: 'China', title: 'Founder & CEO, MML Digital (慢慢来)', img: '/assets/tom-so.jpg' },
];
const SIDE_EVENTS: Speaker[] = [
  { name: 'Tanya Van Gastel', country: 'Belgium', title: 'Founder, Rankingonai.com', img: '/assets/tanya-van-gastel.webp' },
  { name: 'Mudi Elsaid', country: 'Egypt & Italy', title: 'Founder, Tasken.ai', img: '/assets/mudi-elsaid.jpg' },
  { name: 'Sacha Fournier', country: 'UK', title: 'Founder, JournoFinder.com', img: '/assets/sacha-fournier.jpg' },
  { name: 'Jamie I.F.', country: 'UK', title: 'Founder, AffiliateFinder.ai', img: '/assets/jamie-if.webp' },
  { name: 'Vinayak Gupta', country: 'India', title: 'Founder, Serpbays', img: '/assets/vinayak-gupta.webp' },
  { name: 'Sharoz Dawa', country: 'India', title: 'SEO Lead, Fynd', img: '/assets/sharoz-dawa.jpg' },
  { name: 'Jabez Reuben', country: 'India', title: 'Founder, The Blueprints', img: '/assets/jabez-reuben.jpg' },
  { name: 'Ilman Akbar', country: 'Indonesia', title: 'Founder & CEO, DailySEO ID & DLYS Consulting', img: '/assets/ilman-akbar.webp' },
  { name: 'Tori Long', country: 'China', title: 'Marketing Director, GWTime', img: '/assets/tori-long.webp' },
  { name: 'Jacky Lin', country: 'China', title: 'Founder, Wingfuture', img: '/assets/jacky-lin.webp' },
];

const WHO_TOOK_STAGE = [
  { name: 'Terry Kyle', title: 'Ex-eBay, WPX.net', img: '/figma-assets/jp-avatar.png' },
  { name: 'Stewart Vickers', title: 'SEO Practitioner', img: '/assets/stewart-vickers.jpg' },
  { name: 'Nathan Witczyk', title: 'Technical SEO Audits', img: '/assets/mads-singers.webp' },
  { name: 'Charles Floate', title: 'SEO Consultant', img: '/assets/zack-franklin.webp' },
  { name: 'Gary Illyes', title: 'Search Relations, Google', img: '/assets/gary-illyes.jpg' },
  { name: 'Lily Ray', title: 'VP SEO Strategy & Research', img: '/assets/lily-ray.jpg' },
  { name: 'Eli Schwartz', title: 'Growth Advisor', img: '/assets/eli-schwartz.jpg' },
  { name: 'Lars Lofgren', title: 'CEO, Stone Press', img: '/assets/lars-lofgren.jpg' },
  { name: 'Bernard Huang', title: 'Co-founder, Clearscope', img: '/assets/bernard-huang.jpg' },
  { name: 'Doug Pierce', title: 'SEO Consultant', img: '/assets/doug-pierce.jpg' },
  { name: 'Loki Yan', title: 'SEO Practitioner', img: '/assets/loki-yan.jpg' },
  { name: 'Mads Singers', title: 'Management Consultant', img: '/assets/mads-singers.jpg' },
  { name: 'Megan Gougeon', title: 'SEO Strategist', img: '/assets/megan-gougeon-2026.jpg' },
  { name: 'Mike Dee', title: 'SEO Consultant', img: '/assets/mike-dee.jpg' },
  { name: 'Nick Drewe', title: 'Founder, WeThrift', img: '/assets/nick-drewe.jpg' },
  { name: 'Victor Huynh', title: 'SEO Consultant', img: '/assets/victor-huynh.jpg' },
];

const BENEFITS = [
  {
    title: 'Full Logistics, Handled.',
    body: 'Invitation letters, airport pick-up and drop-off, hotel bookings. You land and focus on the talk and networking.',
    img: '/assets/full-logistics-handled.webp',
  },
  {
    title: '1 Full Day of Guided Shenzhen.',
    body: 'Huaqiangbei, Nantou walled city, tech companies, the bay, the factories. Not a tourist loop — the working city.',
    img: '/assets/guided-shenzhen.webp',
  },
  {
    title: "A Chinese Audience You Won't Find at Brighton or Pubcon.",
    body: "300+ in-house SEO decision makers from brands going global. They don't travel to London or San Diego.",
    img: '/assets/chinese-audience.webp',
  },
  {
    title: 'Speakers Talk, Then They Stay.',
    body: 'Most stay through the week. The actual conversations happen on Day 1, 2 and 5 (after the stage).',
    img: '/assets/speakers-talk.webp',
  },
];

const LOOK_FOR = [
  {
    n: 1,
    title: 'Organic Growth Insights',
    body:
      'Grounded, forward-looking perspectives on international search and cross-border digital ecosystems.',
  },
  {
    n: 2,
    title: 'Results-Driven Tactics',
    body:
      'Practical frameworks rooted in real-world execution, backed by technical workflows and data.',
  },
  {
    n: 3,
    title: 'Sharing, Not Selling',
    body:
      'An open-playbook approach focused on revealing your best strategic breakthroughs without holding back.',
  },
  {
    n: 4,
    title: 'Full-Week Immersion',
    body:
      'Immerse yourself in the community building genuine relationships rather than dropping in for a flight.',
  },
];

const DONT_WANT = [
  {
    n: 1,
    title: 'Theorists without Data',
    body:
      'High-level commentary, subjective opinions, or basic trend pieces that senior SEOs already know.',
  },
  {
    n: 2,
    title: 'Recycled or AI Decks',
    body:
      'Pre-packaged circuit talks or surface-level, AI-generated presentations lacking original human insight.',
  },
  {
    n: 3,
    title: 'Disguised Sales Pitches',
    body:
      'Commercial calls-to-action, service offers, or product pitches hidden inside educational slots.',
  },
  {
    n: 4,
    title: 'Closed-Minded Mindsets',
    body:
      'Cynicism toward East-West collaboration or a lack of genuine curiosity to explore the region.',
  },
];

const DAYS = [
  { label: 'Day 1 of 4', heading: 'Curated Shenzhen Tours', a: '/assets/day1a.png', b: '/assets/day1b.webp', c: '/assets/day1c.webp' },
  { label: 'Day 2 of 4', heading: 'Breakout Session & VIP Networking', a: '/assets/day2a.webp', b: '/assets/day2b.webp', c: '/assets/day2c.webp' },
  { label: 'Day 3 of 4', heading: 'Main Stage Talks', a: '/assets/day3a.webp', b: '/assets/day3b.webp', c: '/assets/day3c.webp' },
  { label: 'Day 4 of 4', heading: 'Main Stage Talks', a: '/assets/day4a.webp', b: '/assets/day4b.webp', c: '/assets/day4c.webp' },
];

const SPEAKER_QUOTES = [
  {
    text:
      'The clearest business ROI of any conference I have attended. I should have tapped this market years ago.',
    name: 'Mike Dee',
    role: '2025 Speaker',
    img: '/assets/mike-dee.jpg',
  },
  {
    text:
      'There are very few opportunities for Western and Chinese SEOs to be in the same room in real life. This one is unique.',
    name: 'Zack Franklin',
    role: '2025 Speaker',
    img: '/assets/zack-franklin.jpg',
  },
  {
    text:
      'I got to tour around a little bit and it kind of reminded me, this is like the US. Super developed. Very quiet, very organized.',
    name: 'Stewart Vickers (SEO Jesus)',
    role: '2025 Speaker',
    img: '/assets/stewart-vickers.jpg',
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
          sizes="(max-width: 768px) 50vw, 246px"
        />
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="text-[18px] leading-none" title={s.country}>
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
          src="/assets/speakers-hero.webp"
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

      <div className="container pt-[220px] md:pt-[260px] lg:pt-[340px] pb-12 md:pb-20">
        {/* Date / venue badge */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <span
            style={{
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '160%',
              opacity: 0.8,
            }}
          >
            September 14–18, 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-white" aria-hidden />
          <span
            style={{
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '150%',
              opacity: 0.67,
            }}
          >
            The St. Regis Shenzhen + MGM Shenzhen
          </span>
        </div>

        {/* Headline */}
        <h1
          className="display uppercase text-white text-[24px] leading-[140%] md:text-[clamp(40px,7vw,64px)] md:leading-[120%]"
          style={{ letterSpacing: '-0.01em', fontWeight: 600 }}
        >
          <span className="block">50+ Practitioners.</span>
          <span
            className="gradient-text-brand"
            style={{
              display: 'table',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #118BAC 0%, #FD4C4C 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            One Stage.
          </span>
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-[640px]"
          style={{
            color: '#F9F9F9',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '170%',
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
            style={{
              width: '100%',
              maxWidth: 768,
              color: 'var(--White, #F9F9F9)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              opacity: 0.8,
            }}
          >
            Each speaker is vetted for three things: a real case study, one concrete tactic
            attendees can run Monday morning, and willingness to take hard questions from the floor.
          </p>

          <div className="flex flex-col items-start self-stretch" style={{ gap: 48 }}>
            <LineupSection title="Keynotes" speakers={KEYNOTES} cols={3} />
            <LineupSection title="Workshops" speakers={WORKSHOPS} cols={4} />
            <LineupSection title="Field Talks" speakers={FIELD_TALKS} cols={4} />
            <LineupSection title="Lightning Talks" speakers={LIGHTNING_TALKS} cols={5} />
            <LineupSection title="VIP Networking" speakers={VIP_NETWORKING} cols={4} />
            <LineupSection title="Side Events" speakers={SIDE_EVENTS} cols={5} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LineupSection({
  title,
  speakers,
  cols,
}: {
  title: string;
  speakers: Speaker[];
  cols: 3 | 4 | 5;
}) {
  const gridClass =
    cols === 5
      ? 'grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
      : cols === 3
        ? 'grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
        : 'grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  return (
    <div className="flex flex-col gap-6 self-stretch">
      <h3
        className="display uppercase text-white"
        style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, lineHeight: '100%' }}
      >
        {title}
      </h3>
      <div className={gridClass}>
        {speakers.map((s, i) => (
          <SpeakerCard key={`${title}-${s.name}-${i}`} s={s} />
        ))}
      </div>
    </div>
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
            57 speakers, 500+ global practitioners, and 4 days at The Ritz-Carlton, Shenzhen.
            Here is a look back at the room, the energy, and the memories of 2025.
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
              {DAYS[day].heading}
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

        {/* Who took that stage — temporarily hidden */}
        {false && (
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
        )}
      </div>
    </section>
  );
}

/* ───────────────────────────── WHAT SPEAKERS GET ──────────────────────────── */

function PullQuoteCarousel() {
  return (
    <div className="grid gap-5 md:grid-cols-3 self-stretch mt-4">
      {SPEAKER_QUOTES.map((q) => (
        <div
          key={q.name}
          className="flex flex-col items-start"
          style={{
            padding: 'clamp(24px, 3vw, 32px)',
            gap: 24,
            borderRadius: 32,
            border: '1px solid rgba(249, 249, 249, 0.20)',
            background: 'transparent',
          }}
        >
          <svg
            viewBox="0 0 64 50"
            aria-hidden="true"
            style={{ width: 40, height: 36, color: '#eb3030' }}
          >
            <path
              fill="currentColor"
              d="M0 50V28C0 12 9 2 24 0l3 7c-7 2-12 8-12 14h12v29H0Zm37 0V28c0-16 9-26 24-28l3 7c-7 2-12 8-12 14h12v29H37Z"
            />
          </svg>

          <p
            className="display text-white"
            style={{
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '160%',
              letterSpacing: '-0.005em',
            }}
          >
            {q.text}
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <div
              aria-label={q.name}
              role="img"
              className="shrink-0"
              style={{
                width: 48,
                height: 48,
                borderRadius: 48,
                background: `url('${q.img}') #d3d3d3 50% 30% / cover no-repeat`,
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
        </div>
      ))}
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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSpeakerInterest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('submitting');
    try {
      const res = await fetch('/api/speaker-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

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

        <div className="grid lg:grid-cols-[3fr_2fr]" style={{ gap: 32 }}>
          {/* Look for */}
          <div className="flex flex-col self-stretch" style={{ gap: 20 }}>
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
            <div className="grid sm:grid-cols-2 flex-1 auto-rows-fr" style={{ gap: 16 }}>
              {LOOK_FOR.map((item) => (
                <div
                  key={item.n}
                  className="rounded-2xl flex flex-col items-center justify-center text-center"
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
          <div className="flex flex-col self-stretch" style={{ gap: 20 }}>
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
            <ul className="grid grid-cols-1 flex-1 self-stretch auto-rows-fr" style={{ gap: 16 }}>
              {DONT_WANT.map((item) => (
                <li
                  key={item.n}
                  className="flex items-center rounded-2xl self-stretch"
                  style={{
                    gap: 16,
                    padding: 24,
                    border: '1px solid rgba(235, 48, 48, 0.45)',
                    background: 'rgba(235, 48, 48, 0.06)',
                  }}
                >
                  <span
                    className="shrink-0 rounded-full"
                    aria-hidden
                    style={{
                      width: 10,
                      height: 10,
                      background: '#eb3030',
                    }}
                  />
                  <span className="sr-only">{item.n}.</span>
                  <div className="flex flex-col gap-2">
                    <span
                      className="display uppercase text-white"
                      style={{
                        fontFamily: 'Unbounded, system-ui, sans-serif',
                        fontSize: 16,
                        fontWeight: 700,
                        lineHeight: '130%',
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="text-white"
                      style={{
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: '160%',
                      }}
                    >
                      {item.body}
                    </span>
                  </div>
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
                "url('/assets/jp-talk.webp') 50% / cover no-repeat #d3d3d3",
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
                Call for Speakers
              </span>
              <h3
                className="display uppercase text-white"
                style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 800, lineHeight: '110%' }}
              >
                Interested in speaking in 2027?
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
                Fill out the form below, and you&rsquo;ll be notified as soon as the speaker
                pitch form is ready.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSpeakerInterest}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
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
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
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
              <input
                type="url"
                name="linkedin"
                placeholder="Your LinkedIn profile URL (optional)"
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
              <input
                type="email"
                name="email"
                placeholder="E-mail Address *"
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
                disabled={status === 'submitting'}
                className="display inline-flex w-full md:w-auto md:self-start rounded-full gradient-cta uppercase disabled:opacity-60"
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
                {status === 'submitting' ? 'Sending…' : 'Yes, Keep Me Updated'}
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <p
                  role="status"
                  className="text-[15px] leading-[150%] text-[var(--teal)]"
                  style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
                >
                  Thank you for your interest in speaking in 2027, we&rsquo;ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="status"
                  className="text-[15px] leading-[150%] text-[#eb3030]"
                  style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
                >
                  Something went wrong. Please try again or email amanda@shenzhenseoconference.com.
                </p>
              )}
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
