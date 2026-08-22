'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';
import { KingswayCarousel } from '../_components/KingswayVideo';
import {
  KEYNOTES,
  WORKSHOPS,
  FIELD_TALKS,
  LIGHTNING_TALKS,
  VIP_NETWORKING as VIP_SPEAKERS,
  SIDE_EVENTS as SIDE_EVENT_SPEAKERS,
  type Speaker,
} from '@/lib/lineup';

/* ────────────────────────────────── TIERS ────────────────────────────────── */

type Tier = 'ALL' | 'FREE' | 'STANDARD' | 'DELUXE' | 'VIP';
const TIERS: Tier[] = ['ALL', 'FREE', 'STANDARD', 'DELUXE', 'VIP'];

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────────────────────────────── HERO ─────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/agenda-hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-[center_78%] opacity-70"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 50% at 15% 35%, rgba(120, 40, 100, 0.45) 0%, rgba(3, 6, 13, 0) 70%), radial-gradient(60% 60% at 85% 40%, rgba(17, 139, 172, 0.45) 0%, rgba(3, 6, 13, 0) 70%), linear-gradient(180deg, rgba(3, 6, 13, 0.55) 0%, rgba(3, 6, 13, 0.85) 70%, #03060D 100%)',
          }}
        />
      </div>

      <div className="container pt-[240px] md:pt-[150px] lg:pt-[170px] pb-8 md:pb-12 text-left md:text-center">
        {/* Date / venue */}
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start md:justify-center sm:gap-2 mb-8 md:mb-10">
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
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/70" aria-hidden />
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
          className="display uppercase text-left md:text-center text-[24px] leading-[140%] md:whitespace-nowrap md:text-[48px] md:leading-[150%]"
          style={{
            color: '#F9F9F9',
            fontWeight: 600,
          }}
        >
          <span
            className="block md:inline"
            style={{
              background: 'linear-gradient(90deg, #118BAC 0%, #FD4C4C 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Five days.
          </span>
          <span className="hidden md:inline"> </span>
          <span className="block md:inline">Pick your depth.</span>
        </h1>

        <p
          className="mt-6 md:mt-8 md:mx-auto max-w-[640px] text-left md:text-center"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '170%',
          }}
        >
          2 days of pre-conference events, plus 5 days of city tours, SEO masterminds, main
          stage talks, and VIP networking. Filter the schedule by your ticket tier.
        </p>

        <div className="mt-9 md:mt-12 flex justify-start md:justify-center">
          <Link
            href="/#pricing"
            className="display gradient-cta flex w-full md:w-auto md:inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
          >
            Get Tickets
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Wide venue image below the CTA */}
      <div className="container pb-12 md:pb-20">
        <div
          className="relative w-full md:w-4/5 mx-auto overflow-hidden"
          style={{ height: 288, borderRadius: 24 }}
        >
          <Image
            src="/assets/agenda-venue.webp"
            alt="The St. Regis Shenzhen main hall"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── TIER FILTER ─────────────────────────────── */

function TierFilter({
  active,
  onChange,
}: {
  active: Tier;
  onChange: (t: Tier) => void;
}) {
  return (
    <div className="container pt-2 pb-10 md:pb-14">
      <div
        className="text-left md:text-center uppercase mb-5"
        style={{
          color: '#F9F9F9',
          opacity: 0.4,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 12,
          fontWeight: 700,
          lineHeight: '170%',
          letterSpacing: '0.48px',
        }}
      >
        Filter by Tier
      </div>
      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3">
        {TIERS.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              type="button"
              onClick={() => onChange(t)}
              className="display uppercase text-white text-[10px] md:text-[12px] font-bold tracking-[0.08em] md:tracking-[0.18em] transition-colors px-3 md:px-4 py-2 whitespace-nowrap"
              style={{
                borderRadius: 136,
                border: isActive ? 'none' : '1px solid rgba(249, 249, 249, 0.20)',
                background: isActive ? '#118BAC' : 'transparent',
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────── PRE-CONFERENCE SIDE EVENTS ──────────────────────── */

type SideEvent = {
  dayLabel: string;
  badge?: string;
  title?: string;
  details: { label: string; value: React.ReactNode }[];
};

// `speakers` are names resolved to headshot + title via the shared lineup (same as
// Day 3 / Day 4). `speakerText` is a plain fallback for non-people (e.g. TBD/TBC).
type SideEventRow = { time: string; title: string; speakers?: string[]; speakerText?: string; sub?: string };

function SideEventSchedule({ rows }: { rows: SideEventRow[] }) {
  return (
    <ul className="mt-3 flex flex-col">
      {rows.map((r) => (
        <li
          key={r.time}
          className="flex flex-col sm:flex-row sm:gap-4 py-4 border-t border-white/[0.08] first:border-t-0 first:pt-0"
        >
          <div
            className="shrink-0 sm:w-[150px] mb-1 sm:mb-0 text-[13px] md:text-[14px]"
            style={{ color: '#5DAEDB', fontWeight: 600 }}
          >
            {r.time}
          </div>
          <div className="min-w-0">
            <div className="text-[14px] md:text-[15px] font-semibold text-white leading-snug">{r.title}</div>
            {r.sub ? <div className="mt-1 text-[13px] text-white/45 leading-snug">{r.sub}</div> : null}
            {r.speakers ? <SpeakerLine names={r.speakers} /> : null}
            {r.speakerText ? <div className="mt-2 text-[13px] text-white/55">{r.speakerText}</div> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

const SAT_SEP_12_SCHEDULE: SideEventRow[] = [
  {
    time: '12:30 PM – 1:00 PM',
    title: 'Doors Open & Check-in',
    sub: 'Arrival, registration, and early afternoon networking.',
  },
  { time: '1:00 PM – 1:10 PM', title: 'Opening Remarks', speakers: ['JP/John Zhang'] },
  {
    time: '1:10 PM – 1:50 PM',
    title: 'Winning AI Search: A 4-Step Guide for Chinese Companies',
    speakers: ['Tanya Van Gastel'],
  },
  {
    time: '1:50 PM – 2:30 PM',
    title: 'From JSON to Markdown: Cutting the Cost of AI-Powered SEO Analysis by Up to 90%',
    speakers: ['Magenta Qin'],
  },
  { time: '2:30 PM – 2:50 PM', title: 'Casual Networking & Coffee Break' },
  {
    time: '2:50 PM – 3:30 PM',
    title: 'From AI Tools to B2B Growth Systems: Building Workflows That Actually Run',
    speakers: ['Jacky Lin'],
  },
  {
    time: '3:30 PM – 4:10 PM',
    title: 'Winning in the West: Agentic Digital PR for Chinese Brands',
    speakers: ['Sacha Fournier'],
  },
  { time: '4:10 PM – 4:30 PM', title: 'Casual Networking & Coffee Break' },
  {
    time: '4:30 PM – 5:10 PM',
    title: 'Build Your AI Workforce: A 24/7 Multi-agent Chief of Staff',
    speakers: ['Vinayak Gupta', 'Sharoz Dawa'],
  },
  { time: '5:10 PM – 5:20 PM', title: 'Closing Remarks', speakers: ['JP/John Zhang'] },
];

const SAT_SEP_12_DETAILS = [
  { label: 'Time', value: '12:30 PM – 5:20 PM' },
  { label: 'Venue', value: 'To Be Announced (Nanshan / Futian Area, off-site, not at the St. Regis)' },
  {
    label: 'Language',
    value:
      'English (Real-time, AI-powered live captions and translated subtitles will be displayed instantly on-screen so Chinese attendees can follow along seamlessly without any language barriers).',
  },
  { label: 'Schedule', value: <SideEventSchedule rows={SAT_SEP_12_SCHEDULE} /> },
];

const SUN_SEP_13_SCHEDULE: SideEventRow[] = [
  {
    time: '12:30 PM – 1:00 PM',
    title: 'Doors Open & Check-in',
    sub: 'Arrival, registration, and early afternoon networking.',
  },
  { time: '1:00 PM – 1:10 PM', title: 'Opening Remarks', speakers: ['JP/John Zhang'] },
  {
    time: '1:10 PM – 1:50 PM',
    title: 'How Chinese Brands Can Use Affiliates & Influencers To Grow AI Visibility & Revenue in USA',
    speakers: ['Jamie I.F.'],
  },
  {
    time: '1:50 PM – 2:30 PM',
    title: "S.P.A.C.E.: A Five-Dimension Framework for Exporters Who've Hit a Growth Ceiling",
    speakers: ['Tori Long'],
  },
  { time: '2:30 PM – 2:50 PM', title: 'Casual Networking & Coffee Break' },
  {
    time: '2:50 PM – 3:30 PM',
    title: 'How to Talk So the C-Suites Will Listen: Lessons Learned from Teaching & Implementing SEO for 12+ Years',
    speakers: ['Ilman Akbar'],
  },
  {
    time: '3:30 PM – 4:10 PM',
    title: 'Dominating LLMs, AiO & Google Rankings with Consensus',
    speakers: ['Jabez Reuben'],
  },
  { time: '4:10 PM – 4:20 PM', title: 'Side Event Wrap-up', speakers: ['JP/John Zhang'] },
  { time: '4:20 PM – 5:00 PM', title: 'Casual Networking' },
];

const SUN_SEP_13_DETAILS = [
  { label: 'Time', value: '12:30 PM – 5:00 PM' },
  { label: 'Venue', value: 'To Be Announced (Nanshan / Futian Area, off-site, not at the St. Regis)' },
  {
    label: 'Language',
    value:
      'English (Real-time, AI-powered live captions and translated subtitles will be displayed instantly on-screen so Chinese attendees can follow along seamlessly without any language barriers).',
  },
  { label: 'Schedule', value: <SideEventSchedule rows={SUN_SEP_13_SCHEDULE} /> },
];

const SIDE_EVENTS: SideEvent[] = [
  {
    dayLabel: 'Sat Sep 12',
    badge: 'Free · Open',
    details: SAT_SEP_12_DETAILS,
  },
  {
    dayLabel: 'Sun Sep 13',
    badge: 'Free · Open',
    details: SUN_SEP_13_DETAILS,
  },
  {
    dayLabel: 'Sun Sep 13',
    title: 'Pre-event Speaker Dinner',
    badge: 'Speakers Only',
    details: [
      { label: 'Time', value: '19:00 – 21:00' },
      { label: 'Venue', value: 'To be announced' },
    ],
  },
];

function TierBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-[10px] md:text-[11px] tracking-normal md:tracking-[0.18em] uppercase text-white whitespace-nowrap"
      style={{
        fontFamily: 'General Sans, system-ui, sans-serif',
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

function SideEventCard({ event }: { event: SideEvent }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-9">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-start md:justify-between md:flex-wrap">
        {event.badge && (
          <span className="order-1 md:order-2">
            <TierBadge label={event.badge} />
          </span>
        )}
        <div
          className="order-2 md:order-1 uppercase text-[14px] md:text-[16px] tracking-[0.7px] md:tracking-[0.8px]"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          {event.dayLabel}
        </div>
      </div>
      {event.title && (
        <h3
          className="display uppercase mt-3 text-[20px] md:text-[28px] leading-normal md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          {event.title}
        </h3>
      )}
      <dl className="mt-4 flex flex-col gap-2 max-w-[820px]">
        {event.details.map((d) => (
          <div
            key={d.label}
            className="text-white/75"
            style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '160%',
            }}
          >
            <span className="font-semibold text-white">{d.label}:</span> {d.value}
          </div>
        ))}
      </dl>
    </div>
  );
}

function PreConferenceSection() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-14 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2
              className="display uppercase text-[28px] md:text-[clamp(28px,5vw,48px)] leading-[120%] md:leading-[110%]"
              style={{
                color: '#F9F9F9',
                fontWeight: 700,
              }}
            >
              Pre-Conference Side Events
            </h2>
            <p
              className="mt-3 max-w-[820px]"
              style={{
                color: '#F9F9F9',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Two exclusive afternoon sessions before the main event kicks off. Free to attend with
              no conference ticket required, but registration approval is required. The application
              form will be released soon. Stay tuned!
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-start self-stretch gap-10 md:gap-16"
        >
          {SIDE_EVENTS.map((e, i) => (
            <div key={i} className="w-full">
              <SideEventCard event={e} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── CONFERENCE EVENTS ─────────────────────────── */

type AgendaItem = { time: string; title: string; body: React.ReactNode };
type TabSet = { label: string; items?: AgendaItem[]; content?: React.ReactNode; note?: React.ReactNode };

/* ─────────────────────── MAIN-STAGE TIMELINE (Day 3 & 4) ─────────────────────── */

type TalkType = 'Keynote' | 'Field Talk' | 'Lightning' | 'Remarks' | 'Workshop';
type ScheduleTalk = { title: string; type: TalkType; speakers: string[] };
type ScheduleRow =
  | { kind: 'section'; icon?: string; label: string }
  | { kind: 'break'; time: string; end: string; icon?: string; label: string }
  | { kind: 'slot'; time: string; end: string; talks: ScheduleTalk[] };

// Resolve a schedule speaker name to their headshot + role. Most come straight from
// the shared lineup; a few (host, and Kun Tang) aren't public speakers, and one name
// is spelled differently on the agenda than in the lineup.
const LINEUP_BY_NAME = new Map<string, Speaker>(
  [...KEYNOTES, ...WORKSHOPS, ...FIELD_TALKS, ...LIGHTNING_TALKS, ...VIP_SPEAKERS, ...SIDE_EVENT_SPEAKERS].map((s) => [
    s.name.toLowerCase(),
    s,
  ]),
);
const NAME_ALIASES: Record<string, string> = {
  'joshua blyskal': 'Josh Blyskal',
};
const EXTRA_SPEAKERS: Record<string, { title: string; img: string }> = {
  'jp/john zhang': { title: 'Host & Organizer', img: '/assets/JP-Zhang-5.jpg' },
};
function resolveSpeaker(name: string): { name: string; title: string; img: string } | null {
  const key = name.trim().toLowerCase();
  const lineup = LINEUP_BY_NAME.get(NAME_ALIASES[key]?.toLowerCase() ?? key);
  if (lineup) return { name, title: lineup.title, img: lineup.img };
  const extra = EXTRA_SPEAKERS[key];
  if (extra) return { name, title: extra.title, img: extra.img };
  return null;
}

const DAY3_SCHEDULE: ScheduleRow[] = [
  { kind: 'section', icon: '🌅', label: 'Morning · Search Shifts & GEO Realities' },
  { kind: 'slot', time: '9:30 AM', end: '9:40 AM', talks: [{ title: 'What is Shenzhen SEO Conference and Why I Restarted It', type: 'Remarks', speakers: ['JP/John Zhang'] }] },
  { kind: 'slot', time: '9:40 AM', end: '10:20 AM', talks: [{ title: "Don't Panic. Search is Always Changing", type: 'Keynote', speakers: ['Gary Illyes'] }] },
  { kind: 'slot', time: '10:20 AM', end: '10:40 AM', talks: [{ title: 'The Invisible Penalty: Detecting and Recovering from Algorithmic Suppression', type: 'Field Talk', speakers: ['Nik Ranger'] }] },
  {
    kind: 'slot',
    time: '10:40 AM',
    end: '11:00 AM',
    talks: [
      { title: 'SEO is Marketing: A Proven Framework to See the Big Picture & Unlock Growth', type: 'Lightning', speakers: ['Sam Penny'] },
      { title: 'SEO is a Product Outcome, Not an SEO Outcome', type: 'Lightning', speakers: ['Jine Wu'] },
    ],
  },
  { kind: 'break', time: '11:00 AM', end: '11:20 AM', icon: '☕', label: 'Morning Coffee Break' },
  { kind: 'slot', time: '11:20 AM', end: '12:00 PM', talks: [{ title: 'How to Do GEO Without Destroying Your SEO: How Google is Cracking Down on GEO Spam', type: 'Keynote', speakers: ['Lily Ray'] }] },
  { kind: 'slot', time: '12:00 PM', end: '12:20 PM', talks: [{ title: "Ranked Nowhere: The International SEO Mistakes of China's Biggest Global Brands", type: 'Field Talk', speakers: ['Doug Pierce'] }] },
  {
    kind: 'slot',
    time: '12:20 PM',
    end: '12:40 PM',
    talks: [
      { title: "The Validation Gap: Why SEO Doesn't End When the User Clicks", type: 'Lightning', speakers: ['David Carrasco'] },
      { title: 'Build an Audience, Not Just Traffic: Rethinking Organic ROI', type: 'Lightning', speakers: ['Divya Jain'] },
    ],
  },
  { kind: 'break', time: '12:40 PM', end: '2:00 PM', icon: '🍱', label: 'Lunch' },
  { kind: 'section', icon: '☀️', label: 'Afternoon · APAC Markets, Technical SEO & Links' },
  { kind: 'slot', time: '2:00 PM', end: '2:20 PM', talks: [{ title: 'Cracking the China GEO Code: What DeepSeek, Doubao, and Yuanbao Really Cite', type: 'Field Talk', speakers: ['Kun Tang'] }] },
  { kind: 'slot', time: '2:20 PM', end: '2:40 PM', talks: [{ title: 'The Unwritten Rules of Japanese SEO: From Search Behavior to Business Culture', type: 'Field Talk', speakers: ['Mao Kawana', 'Polina Kogan'] }] },
  { kind: 'slot', time: '2:40 PM', end: '3:00 PM', talks: [{ title: 'Expand into Korea with Search: From Naver to AI', type: 'Field Talk', speakers: ['Cristina Song', 'Jiyoung Lee'] }] },
  {
    kind: 'slot',
    time: '3:00 PM',
    end: '3:20 PM',
    talks: [
      { title: 'Winning Italy: An AI Search Case Study for Chinese Brands', type: 'Lightning', speakers: ['Andrea Abbondanza'] },
      { title: 'Decoding China Web Performance for Marketers', type: 'Lightning', speakers: ['Jodie Chan'] },
    ],
  },
  { kind: 'break', time: '3:20 PM', end: '3:50 PM', icon: '☕', label: 'Afternoon Coffee Break' },
  { kind: 'slot', time: '3:50 PM', end: '4:10 PM', talks: [{ title: 'An Actionable Deep Dive into E-E-A-T', type: 'Field Talk', speakers: ['Loki Yan'] }] },
  {
    kind: 'slot',
    time: '4:10 PM',
    end: '4:50 PM',
    talks: [
      { title: 'B2B SaaS Case Study: How Strategic Link Building Drives LLM Visibility', type: 'Lightning', speakers: ['Konstantin Sadekov'] },
      { title: 'How a $5K Digital PR Campaign Secured $80K Worth of Media Coverage (And Backlinks)', type: 'Lightning', speakers: ['Killian Kostiha'] },
      { title: "AI Search Can't Render Your JavaScript-Heavy Website? SEO Can Fix That", type: 'Lightning', speakers: ['Wasin Mekkit'] },
      { title: 'Automating Technical SEO: GROQ, Sanity CMS & Hreflang Management at Scale', type: 'Lightning', speakers: ['Helen Han'] },
    ],
  },
  { kind: 'slot', time: '4:50 PM', end: '5:10 PM', talks: [{ title: 'How I Automated 144 Ahrefs Blog Updates a Year with AI', type: 'Field Talk', speakers: ['Si Quan Ong'] }] },
  { kind: 'break', time: '7:00 PM', end: '10:30 PM', icon: '🎉', label: 'Opening Party · light dinner included' },
];

const DAY4_SCHEDULE: ScheduleRow[] = [
  { kind: 'section', icon: '🌅', label: 'Morning · AI SEO, Brand & Growth' },
  { kind: 'slot', time: '9:30 AM', end: '10:10 AM', talks: [{ title: 'The 3 Pillars of AEO', type: 'Keynote', speakers: ['Eli Schwartz'] }] },
  { kind: 'slot', time: '10:10 AM', end: '10:30 AM', talks: [{ title: 'The New Citation Economy: How ChatGPT, Google AI Mode, and Claude Pick Sources', type: 'Field Talk', speakers: ['Joshua Blyskal'] }] },
  {
    kind: 'slot',
    time: '10:30 AM',
    end: '11:00 AM',
    talks: [
      { title: 'Perception Engineering: How to Change What AI Says About Your Brand', type: 'Lightning', speakers: ['Jonathan Kiekbusch'] },
      { title: 'Mixed Signals: How Brand Inconsistencies Confuse AI Search', type: 'Lightning', speakers: ['Apurva Bose'] },
      { title: '10x Organic Traffic for Ecommerce with Product-led Content & Community Backlinks', type: 'Lightning', speakers: ['Tupa Lee'] },
    ],
  },
  { kind: 'break', time: '11:00 AM', end: '11:20 AM', icon: '☕', label: 'Morning Coffee Break' },
  { kind: 'slot', time: '11:20 AM', end: '12:00 PM', talks: [{ title: 'Radical Localisation: How Canva Blends Product, Brand, and Local Growth for Global Scale', type: 'Keynote', speakers: ['Sasha Gusain'] }] },
  { kind: 'slot', time: '12:00 PM', end: '12:20 PM', talks: [{ title: 'What Happens When SEO Stops Working - Lessons from Gaining and Losing 80 Million Visitors', type: 'Field Talk', speakers: ['Nick Drewe'] }] },
  {
    kind: 'slot',
    time: '12:20 PM',
    end: '12:50 PM',
    talks: [
      { title: 'How a Cartoon Lion Changed Our Brand Forever', type: 'Lightning', speakers: ['Max Hobbs'] },
      { title: 'Detecting Google Updates Without Third-Party Tools: An Analytical Approach', type: 'Lightning', speakers: ['Gabriele Kahlout'] },
      { title: "We Posted 3,000 Times on Reddit: Here's Exactly Why Only Some of Them Rank", type: 'Lightning', speakers: ['Mayi'] },
    ],
  },
  { kind: 'break', time: '12:50 PM', end: '2:00 PM', icon: '🍱', label: 'Lunch' },
  { kind: 'section', icon: '☀️', label: 'Afternoon · Enterprise SEO, AI Automation' },
  { kind: 'slot', time: '2:00 PM', end: '2:20 PM', talks: [{ title: 'Revenue-First SEO: Connecting Organic, Paid, Campaigns & CRO Into One Growth Engine', type: 'Field Talk', speakers: ['Sebastien Edgar'] }] },
  { kind: 'slot', time: '2:20 PM', end: '2:40 PM', talks: [{ title: "You Don't Have a B2B SEO Problem. You Have a Website Problem", type: 'Field Talk', speakers: ['Victor Huynh'] }] },
  {
    kind: 'slot',
    time: '2:40 PM',
    end: '3:00 PM',
    talks: [
      { title: 'Traffic Down, No Problem: We Did These Six Things and Tripled Our Revenue', type: 'Lightning', speakers: ['Roger Yin'] },
      { title: 'Protecting the Pages That Pay the Bills', type: 'Lightning', speakers: ['Henry Dalziel'] },
    ],
  },
  { kind: 'break', time: '3:00 PM', end: '3:20 PM', icon: '☕', label: 'Afternoon Coffee Break 1' },
  { kind: 'slot', time: '3:20 PM', end: '3:40 PM', talks: [{ title: 'How to Get SEO Moving Inside Large Organisations', type: 'Field Talk', speakers: ['Owain Lloyd-Williams'] }] },
  { kind: 'slot', time: '3:40 PM', end: '4:00 PM', talks: [{ title: 'From 6-Figure/Month Affiliate SEO to AI Solopreneur: Why I Switched Tracks and What I Learned', type: 'Field Talk', speakers: ['Max Kuch'] }] },
  {
    kind: 'slot',
    time: '4:00 PM',
    end: '4:20 PM',
    talks: [
      { title: 'AI Agents for SEO: Automating Backlinks, Content, and 24/7 Optimization with Real Data', type: 'Lightning', speakers: ['Johann Sathianathen'] },
      { title: 'AI Is Making B2B Trust Harder: How Embedded Video Turns SEO Pages into Proof Pages', type: 'Lightning', speakers: ['Ben Fang'] },
    ],
  },
  { kind: 'break', time: '4:20 PM', end: '4:40 PM', icon: '☕', label: 'Afternoon Coffee Break 2' },
  { kind: 'slot', time: '4:40 PM', end: '5:20 PM', talks: [{ title: 'Narrative Manipulation: When Google, Reddit, and LLMs Become Weapons and How to Fight Back', type: 'Keynote', speakers: ['Lars Lofgren'] }] },
  { kind: 'slot', time: '5:20 PM', end: '5:35 PM', talks: [{ title: 'From Courage to Freedom: What 16 Years in SEO Really Taught Me', type: 'Remarks', speakers: ['JP/John Zhang'] }] },
  { kind: 'break', time: '8:00 PM', end: '11:00 PM', icon: '🎉', label: 'Closing Party · light dinner included' },
];

const TYPE_STYLE: Record<TalkType, { bg: string; color: string }> = {
  Keynote: { bg: 'rgba(235, 48, 48, 0.14)', color: '#F19A9A' },
  'Field Talk': { bg: 'rgba(17, 139, 172, 0.18)', color: '#6FC1E0' },
  Lightning: { bg: 'rgba(224, 166, 75, 0.16)', color: '#E4BA6C' },
  Workshop: { bg: 'rgba(43, 182, 115, 0.16)', color: '#6FCF9A' },
  Remarks: { bg: 'rgba(249, 249, 249, 0.08)', color: 'rgba(249, 249, 249, 0.6)' },
};

function TypeBadge({ type }: { type: TalkType }) {
  const s = TYPE_STYLE[type];
  return (
    <span
      className="display uppercase shrink-0 rounded-full"
      style={{
        background: s.bg,
        color: s.color,
        fontFamily: 'General Sans, system-ui, sans-serif',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.08em',
        padding: '4px 9px',
        lineHeight: 1,
      }}
    >
      {type}
    </span>
  );
}

function SpeakerLine({ names }: { names: string[] }) {
  const people = names.map(resolveSpeaker).filter(Boolean) as { name: string; title: string; img: string }[];
  if (people.length === 0) return null;
  return (
    <div className="mt-2.5 flex items-center gap-x-4 gap-y-2 flex-wrap">
      {people.map((p) => (
        <span key={p.name} className="flex items-center gap-2 min-w-0">
          <span className="relative w-7 h-7 rounded-full overflow-hidden bg-white/10 shrink-0">
            <Image src={p.img} alt={p.name} fill className="object-cover" sizes="28px" />
          </span>
          <span className="text-[13px] leading-tight min-w-0" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
            <span className="font-semibold text-white">{p.name}</span>
            {p.title ? <span className="text-white/45"> · {p.title}</span> : null}
          </span>
        </span>
      ))}
    </div>
  );
}

function TimeCell({ time, end, muted = false }: { time: string; end?: string; muted?: boolean }) {
  return (
    <div className="shrink-0 md:w-[104px] mb-1.5 md:mb-0" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
      <div
        className="text-[13px] md:text-[14px]"
        style={{ color: muted ? 'rgba(249, 249, 249, 0.45)' : '#5DAEDB', fontWeight: 700, lineHeight: 'normal' }}
      >
        {time}
      </div>
      {end ? (
        <div
          className="text-[11px] md:text-[12px] mt-0.5"
          style={{ color: 'rgba(249, 249, 249, 0.4)', fontWeight: 500, lineHeight: 'normal' }}
        >
          → {end}
        </div>
      ) : null}
    </div>
  );
}

function DayTimeline({ schedule }: { schedule: ScheduleRow[] }) {
  return (
    <div className="mt-8 md:mt-10 flex flex-col">
      {schedule.map((row, i) => {
        if (row.kind === 'section') {
          return (
            <div
              key={`sec-${i}`}
              className="display uppercase pt-7 pb-3 first:pt-0"
              style={{ color: '#F9F9F9', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em' }}
            >
              {row.label}
            </div>
          );
        }
        if (row.kind === 'break') {
          return (
            <div
              key={`brk-${i}`}
              className="flex flex-col md:flex-row md:items-center py-3.5 border-t border-white/[0.08]"
            >
              <TimeCell time={row.time} end={row.end} muted />
              <div
                className="text-[13px] md:text-[14px]"
                style={{ color: 'rgba(249, 249, 249, 0.55)', fontFamily: 'General Sans, system-ui, sans-serif', fontWeight: 500 }}
              >
                {row.label}
              </div>
            </div>
          );
        }
        return (
          <div key={`slot-${i}`} className="flex flex-col md:flex-row md:items-start py-4 border-t border-white/[0.08]">
            <TimeCell time={row.time} end={row.end} />
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              {row.talks.map((t) => (
                <div key={t.title}>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[14px] md:text-[16px] font-semibold text-white leading-snug flex-1 min-w-0">
                      {t.title}
                    </span>
                    {t.type !== 'Remarks' && (
                      <span className="mt-0.5">
                        <TypeBadge type={t.type} />
                      </span>
                    )}
                  </div>
                  <SpeakerLine names={t.speakers} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

type ConferenceDay = {
  dayLabel: string;
  title: React.ReactNode;
  body: React.ReactNode;
  badge: string;
  tiers: Tier[];
  live?: boolean;
  interpretation?: boolean;
  tabs?: TabSet[];
  items?: AgendaItem[];
  schedule?: ScheduleRow[];
  note?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
};

// Day 1 workshops, shown in the same timeline format as Day 3 / Day 4.
const WORKSHOP_SCHEDULE: ScheduleRow[] = [
  { kind: 'section', label: 'Morning Workshops · Two run in parallel, choose one' },
  {
    kind: 'slot',
    time: '9:00 AM',
    end: '12:00 PM',
    talks: [
      { title: 'From Traffic to Pipeline: Fixing the Messaging Gaps That Hurt Conversions', type: 'Workshop', speakers: ['Jessica Malnik'] },
      { title: 'GEO: Why 90% of Chinese B2B & SaaS Brands Are Invisible & Step-by-Step Solution', type: 'Workshop', speakers: ['Marc Moeller'] },
    ],
  },
  { kind: 'break', time: '12:30 PM', end: '2:00 PM', label: 'Lunch · at the conference hotel' },
  { kind: 'section', label: 'Afternoon Workshops · Two run in parallel, choose one' },
  {
    kind: 'slot',
    time: '2:30 PM',
    end: '5:30 PM',
    talks: [
      { title: "SEO Meets CRO: Why Your Traffic Isn't Converting (& How to Fix It)", type: 'Workshop', speakers: ['Tom Qiao'] },
      { title: 'AI Automation at Shenzhen Speed for SEO, Websites, and Ecom', type: 'Workshop', speakers: ['Zack Franklin'] },
    ],
  },
  { kind: 'break', time: '6:00 PM', end: '7:30 PM', label: 'Networking Dinner · at the conference hotel' },
];

/* ─────────────────────── DAY 1 CITY TOUR MATRIX ─────────────────────── */

type TourOption = { title: string; cn?: string; summary: string; rain?: string };
type TourBand = { roman: string; label: string; time: string; blurb?: string; options: TourOption[] };

const TOUR_BANDS: TourBand[] = [
  {
    roman: 'I',
    label: 'Full-Day "Tech + Heritage" Hybrid Tracks',
    time: '10:00 – 19:30',
    blurb: 'Premium tracks combining high-level corporate visits with iconic city landmarks.',
    options: [
      {
        title: 'Digital Innovation & Coastal Skyline',
        cn: '企业参访与海岸天际线之旅',
        summary:
          "Premium tech campus visit (Insta360, Huawei, or Tencent), a coastal walk along Nanshan's world-class skyline with a live Meituan drone-delivery demo, and Nantou Ancient City with dinner.",
      },
      {
        title: 'The Creator Tech & Folk Custom Track',
        cn: '前沿科创与中华民俗之旅',
        summary:
          'Premium tech campus visit, then Splendid China and the Folk Culture Village for traditional architecture and minority ethnic customs, with dinner included.',
      },
    ],
  },
  {
    roman: 'II',
    label: 'Morning Specialist Tracks',
    time: '09:00 – 12:00',
    options: [
      {
        title: 'Cantonese Morning Tea Experience',
        cn: '粤式早茶与粤海文化体验',
        summary:
          'A local-led deep dive into the "Dim Sum" slow-life philosophy, with bilingual commentary on the evolution of Cantonese culinary culture.',
      },
      {
        title: 'Lianhua Mountain & Smart UAV Delivery',
        cn: '自然休闲：莲花山公园 + 无人机外卖',
        summary:
          "A gentle hike to Lianhua Mountain's summit for a panorama of the Futian CBD, with autonomous drones delivering refreshments to the hilltop kiosk.",
      },
    ],
  },
  {
    roman: 'III',
    label: 'Afternoon Specialist Tracks',
    time: '14:00 – 17:00',
    options: [
      { title: 'Tech Company Visit', cn: '科技企业商务参访', summary: 'To be confirmed.' },
      { title: 'Factory Tour', cn: '智能工厂制造考察', summary: 'To be confirmed.' },
      {
        title: 'Ancient Roots & National Calligraphy Workshop',
        cn: '古城寻根与国潮书法体验',
        summary:
          'A walking tour of 1,700-year-old Nantou Ancient City, followed by a hands-on brush-and-ink calligraphy masterclass in a private courtyard.',
      },
      {
        title: 'Coastal Landmarks & "Bay Glory"',
        cn: '滨海地标与"湾区之光"',
        summary:
          'Sunset views from the iconic 128-meter "Bay Glory" Ferris wheel at OH Bay, overlooking the Qianhai financial zone.',
      },
    ],
  },
  {
    roman: 'IV',
    label: 'Evening Nightlife & Leisure Tracks',
    time: '19:00 – 21:30',
    blurb: 'Built-in weather contingencies keep the evening seamless, rain or shine.',
    options: [
      {
        title: 'Tech-Skyline & Waterfront Relaxation',
        cn: '科技天际线与水岸休闲',
        summary: 'A scenic walk along the Shenzhen Bay Park boardwalk, then networking and nightlife at Sea World.',
        rain: 'Rainy-day pivot: the UpperHills indoor cultural corridor and its high-end loft streets.',
      },
      {
        title: 'Lingnan Water-town Aesthetics & Sensory Traditions',
        cn: '岭南水乡夜景与精神传统',
        summary: 'A heritage walk through OCT Harbour, with lakeside executive social lounges.',
        rain: 'Rainy-day pivot: a premium indoor tea salon paired with an incense-ceremony masterclass.',
      },
    ],
  },
];

const TOUR_NOTES: [string, string][] = [
  [
    'Corporate Security',
    'Tech campus visits (Tencent, Huawei, Insta360) require a full attendee manifest with passport or ID numbers, submitted at least 7 business days in advance.',
  ],
  [
    'Lunch Policy',
    'All full-day tours use a self-paid model at premium shopping centers, for maximum dining flexibility and choice.',
  ],
  [
    'Weather Policy',
    'All outdoor activities have pre-planned "Rainy Day Pivots" to indoor cultural or high-tech venues.',
  ],
];

function CityToursMatrix() {
  const sans = 'General Sans, system-ui, sans-serif';
  return (
    <div className="mt-2 flex flex-col gap-10 md:gap-12">
      <p style={{ color: '#F9F9F9', opacity: 0.75, fontFamily: sans, fontSize: 15, fontWeight: 500, lineHeight: '170%', maxWidth: 760 }}>
        A curated matrix of premium tour options blending Shenzhen&apos;s high-tech innovation, Lingnan cultural
        heritage, and coastal vistas, with a focus on executive networking. Pick whichever track fits your schedule.
      </p>

      {TOUR_BANDS.map((band) => (
        <div key={band.roman} className="flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className="display uppercase text-[14px] md:text-[16px]"
              style={{ color: '#F9F9F9', fontWeight: 700, letterSpacing: '0.04em' }}
            >
              {band.roman}. {band.label}
            </span>
            <span className="text-[12px] md:text-[13px]" style={{ color: '#5DAEDB', fontFamily: sans, fontWeight: 700 }}>
              {band.time}
            </span>
          </div>
          {band.blurb ? (
            <p style={{ color: '#F9F9F9', opacity: 0.6, fontFamily: sans, fontSize: 13, fontWeight: 500, lineHeight: '160%' }}>
              {band.blurb}
            </p>
          ) : null}
          <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
            {band.options.map((o, idx) => (
              <div
                key={o.title}
                className="flex flex-col gap-2 p-5 md:p-6"
                style={{ borderRadius: 20, border: '1px solid rgba(249, 249, 249, 0.1)', background: '#070c15' }}
              >
                <span
                  className="uppercase text-[11px]"
                  style={{ color: '#5DAEDB', fontFamily: sans, fontWeight: 700, letterSpacing: '0.12em' }}
                >
                  Option {idx + 1}
                </span>
                <span className="text-[15px] md:text-[16px] font-bold text-white leading-snug">{o.title}</span>
                {o.cn ? (
                  <span className="text-[13px]" style={{ color: 'rgba(249, 249, 249, 0.45)', fontFamily: sans, fontWeight: 500 }}>
                    {o.cn}
                  </span>
                ) : null}
                <p
                  className="mt-1 text-[14px]"
                  style={{ color: '#F9F9F9', opacity: 0.72, fontFamily: sans, fontWeight: 500, lineHeight: '165%' }}
                >
                  {o.summary}
                </p>
                {o.rain ? (
                  <p className="text-[13px]" style={{ color: '#6FC1E0', fontFamily: sans, fontWeight: 500, lineHeight: '160%' }}>
                    {o.rain}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-3 pt-2">
        <span
          className="display uppercase text-[13px] md:text-[14px]"
          style={{ color: '#F9F9F9', fontWeight: 700, letterSpacing: '0.06em' }}
        >
          Important Notes
        </span>
        <ul className="flex flex-col gap-2.5">
          {TOUR_NOTES.map(([label, text]) => (
            <li
              key={label}
              className="text-[13px]"
              style={{ color: '#F9F9F9', opacity: 0.6, fontFamily: sans, fontWeight: 500, lineHeight: '165%' }}
            >
              <strong style={{ color: 'rgba(249, 249, 249, 0.85)', fontWeight: 600 }}>{label}:</strong> {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Day 5 (VIP Networking) sub-schedules, rendered inside their block bodies.
const DAY5_EXCHANGE: SideEventRow[] = [
  { time: '3:00 PM – 3:05 PM', title: 'Opening Remarks', speakers: ['JP/John Zhang'] },
  {
    time: '3:05 PM – 3:25 PM',
    title: 'VIP Keynote: What Makes Buyers in Any Country, Say "Yes"',
    speakers: ['Nick White'],
  },
  {
    time: '3:25 PM – 3:55 PM',
    title: 'Speed Roundtable Networking #1',
    sub: 'Two rounds, 15 minutes each.',
  },
  { time: '3:55 PM – 4:15 PM', title: 'Coffee & Tea Break' },
  {
    time: '4:15 PM – 4:35 PM',
    title: 'Executive Insight: How Search Is Fragmented in China',
    speakers: ['Marcus Pentzek'],
  },
  {
    time: '4:35 PM – 5:05 PM',
    title: 'Speed Roundtable Networking #2',
    sub: 'Two rounds, 15 minutes each.',
  },
  { time: '5:05 PM – 5:20 PM', title: 'Premium Coffee & Tea Break' },
  {
    time: '5:20 PM – 5:40 PM',
    title: 'Agency Owners Panel: Chinese Manufacturing vs. Silicon Valley SaaS (An Agency Reality Check)',
    sub: 'Panel with Tom So & Tanya Van Gastel, moderated by JP / John Zhang. A raw operational look at what it really takes to close and retain high-ticket clients in Eastern manufacturing vs. Western SaaS.',
    speakers: ['Tom So', 'Tanya Van Gastel', 'JP/John Zhang'],
  },
  {
    time: '5:40 PM – 6:10 PM',
    title: 'Speed Roundtable Networking #3',
    sub: 'Two rounds, 15 minutes each.',
  },
  { time: '6:10 PM – 6:15 PM', title: 'Closing Remarks & Gala Briefing', speakers: ['JP/John Zhang'] },
];

const DAY5_GALA: SideEventRow[] = [
  {
    time: '6:30 PM – 7:00 PM',
    title: 'Sunset Golden Hour & Open Cocktails',
    sub: 'High-end open bar.',
  },
  { time: '7:00 PM – 9:30 PM', title: 'Beachfront VIP Dinner', sub: 'With live jazz band sets.' },
  {
    time: '9:30 PM',
    title: 'The Closing Toast',
    sub: 'Final celebratory champagne toast and official conclusion of the 5-day summit.',
  },
];

const CONFERENCE_DAYS: ConferenceDay[] = [
  {
    dayLabel: 'Day 1 · Mon Sep 14',
    title: (
      <>
        City Tours &amp;<br className="md:hidden" /> Workshops
      </>
    ),
    body:
      'Kick off the week at your own pace with workshops (tailored for Chinese attendees) or city tours (curated for international attendees). You can mix, match, and choose whichever exclusive experiences that best fit your schedule.',
    badge: 'Deluxe + VIP',
    tiers: ['DELUXE', 'VIP'],
    collapsible: true,
    defaultOpen: true,
    tabs: [
      {
        label: 'City Tours',
        content: <CityToursMatrix />,
      },
      {
        label: 'Workshops',
        content: <DayTimeline schedule={WORKSHOP_SCHEDULE} />,
        note: (
          <p>
            <span className="font-semibold">Note:</span> Workshop attendees are warmly welcome to
            join the evening Night Tours to network and mingle with our international attendees.
          </p>
        ),
      },
    ],
  },
  {
    dayLabel: 'Day 2 · Tue Sep 15',
    title: 'SEO Mastermind',
    body:
      'Connect with SEO professionals for a full day of peer-to-peer networking. Solve your biggest growth challenges and elevate your strategy. Mastermind groups are available in both English and Mandarin.',
    badge: 'Deluxe + VIP',
    tiers: ['DELUXE', 'VIP'],
    collapsible: true,
    defaultOpen: true,
    items: [
      { time: '10:00 – 10:30', title: 'Mastermind Rules & On-site Grouping', body: '' },
      { time: '10:30 – 12:30', title: 'Morning Mastermind Sessions', body: '' },
      { time: '12:30 – 14:00', title: 'Lunch Break', body: '' },
      { time: '14:00 – 17:00', title: 'Afternoon Mastermind Sessions', body: '' },
      { time: '19:00 – 21:00', title: 'Networking Dinner', body: '' },
    ],
    note: (
      <div className="flex flex-col gap-3">
        <div
          className="display uppercase text-[14px] md:text-[16px]"
          style={{ color: '#F9F9F9', fontWeight: 700 }}
        >
          Group Placement Note
        </div>
        <p>
          <span className="font-semibold">How Groups Are Formed:</span> Groups are limited to 6–7
          attendees and paired using a custom AI matching system based on your on-site survey.
        </p>
        <p>
          <span className="font-semibold">Important:</span> Because dynamic AI grouping takes place
          during the first 30 minutes, punctuality is highly recommended to ensure your optimal
          placement.
        </p>
      </div>
    ),
  },
  {
    dayLabel: 'Day 3 · Wed Sep 16',
    title: (
      <>
        Main<br className="md:hidden" /> Conference
      </>
    ),
    body: 'SEO Realities & Business Growth',
    badge: 'All Tickets',
    tiers: ['STANDARD', 'DELUXE', 'VIP'],
    interpretation: true,
    collapsible: true,
    defaultOpen: true,
    schedule: DAY3_SCHEDULE,
  },
  {
    dayLabel: 'Day 4 · Thu Sep 17',
    title: (
      <>
        Main<br className="md:hidden" /> Conference
      </>
    ),
    body: 'GEO, Automation, Global Scale',
    badge: 'All Tickets',
    tiers: ['STANDARD', 'DELUXE', 'VIP'],
    interpretation: true,
    collapsible: true,
    defaultOpen: true,
    schedule: DAY4_SCHEDULE,
  },
  {
    dayLabel: 'Day 5 · Fri Sep 18',
    title: 'VIP Networking',
    body: (
      <>
        Different venue. Different register. This is where the actual deals get signed.
        <br />
        <span className="italic text-white/65">
          Exclusive to VIP ticket holders and speakers. Includes a 1-night stay at MGM and all
          meals.
        </span>
      </>
    ),
    badge: 'Speakers + VIP',
    tiers: ['VIP'],
    collapsible: true,
    defaultOpen: true,
    items: [
      {
        time: 'Venue',
        title: 'MGM Shenzhen, Yantian District',
        body: (
          <>
            <span className="block">
              <strong className="text-white font-semibold">Access -</strong> exclusive to VIP
              ticket holders and speakers
            </span>
            <span className="block mt-1">
              <strong className="text-white font-semibold">Included -</strong> 1-night stay at
              MGM and all meals
            </span>
          </>
        ),
      },
      {
        time: '12:00 PM – 3:00 PM',
        title: 'The Transition & Check-In',
        body:
          'Luxury coach transfer from The St. Regis Shenzhen to MGM Shenzhen (lunch provided), followed by check-in and local welcome tea.',
      },
      {
        time: '3:00 PM – 6:15 PM',
        title: 'The Strategic Exchange (Indoor)',
        body: (
          <>
            A high-energy, structured afternoon featuring focused expert sessions, tactical
            industry debates, and three rounds of dedicated speed roundtable networking.
            <SideEventSchedule rows={DAY5_EXCHANGE} />
          </>
        ),
      },
      {
        time: '6:30 PM – 9:30 PM',
        title: 'The Beachfront Gala (MGM Lawn)',
        body: (
          <>
            An exclusive beachside evening shifting from formal conference metrics to relaxed,
            high-end luxury by the ocean waves.
            <SideEventSchedule rows={DAY5_GALA} />
          </>
        ),
      },
    ],
  },
];

function LiveBadge() {
  return (
    <span
      className="display inline-flex items-center gap-1.5 rounded-full text-white whitespace-nowrap"
      style={{
        background: '#EB3030',
        padding: '4px 10px',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
      }}
    >
      <span
        className="block rounded-full bg-white"
        style={{ width: 5, height: 5 }}
        aria-hidden
      />
      Live
    </span>
  );
}

function AgendaItemRow({ item }: { item: AgendaItem }) {
  return (
    <li
      className="flex flex-col md:flex-row md:items-start md:gap-4"
      style={{
        paddingLeft: 28,
        alignSelf: 'stretch',
        borderLeft: '4px solid #118BAC',
      }}
    >
      <div
        className="uppercase shrink-0 mb-2 md:mb-0 md:w-[240px] text-[12px] md:text-[14px]"
        style={{
          color: '#F9F9F9',
          opacity: 0.6,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 700,
          lineHeight: 'normal',
        }}
      >
        {item.time}
      </div>
      <div className="flex-1 min-w-0 md:max-w-none" style={{ maxWidth: '100%' }}>
        <div
          className="display uppercase text-[14px] md:text-[18px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          {item.title}
        </div>
        {item.body ? (
          <div
            className="mt-2 text-[12px] md:text-[14px] leading-[170%] md:leading-normal"
            style={{
              color: '#F9F9F9',
              opacity: 0.8,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            {item.body}
          </div>
        ) : null}
      </div>
    </li>
  );
}

function ConferenceDayCard({ day, activeTier }: { day: ConferenceDay; activeTier: Tier }) {
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(day.defaultOpen ?? true);
  const isCollapsible = day.collapsible ?? false;

  if (activeTier !== 'ALL' && !day.tiers.includes(activeTier)) return null;

  const items: AgendaItem[] = day.tabs ? day.tabs[activeTab].items ?? [] : day.items ?? [];
  const note: React.ReactNode = day.tabs ? day.tabs[activeTab].note : day.note;
  const content: React.ReactNode = day.tabs ? day.tabs[activeTab].content : undefined;
  const showItems = !isCollapsible || open;

  return (
    <div
      className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:px-9 md:pt-9"
      style={{ paddingBottom: 48 }}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex flex-col items-start gap-2">
          <div
            className="uppercase text-[12px] md:text-[16px] tracking-[0.6px] md:tracking-[0.8px]"
            style={{
              color: '#EB3030',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 700,
              lineHeight: '150%',
            }}
          >
            {day.dayLabel}
          </div>
          {day.live && <LiveBadge />}
        </div>
        <TierBadge label={day.badge} />
      </div>
      <h3
        className="display uppercase mt-3 text-[16px] md:text-[28px] leading-[160%] md:leading-[40px]"
        style={{
          color: '#F9F9F9',
          fontWeight: 700,
        }}
      >
        {day.title}
      </h3>
      <p
        className="mt-4 max-w-full md:max-w-[640px] text-[12px] md:text-[14px] leading-[170%] md:leading-[180%] md:opacity-70"
        style={{
          color: '#F9F9F9',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
          width: 640,
          maxWidth: '100%',
        }}
      >
        {day.body}
      </p>
      {day.interpretation && (
        <div
          className="mt-3 uppercase"
          style={{
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#5DAEDB',
          }}
        >
          EN &lt;&gt; CN Interpretation
        </div>
      )}

      {isCollapsible && (
        <div className="mt-6 block">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="display inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 hover:border-white transition-colors"
          >
            {open ? 'Hide Schedule' : 'View Schedule'}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}

      {day.tabs && day.tabs.length > 1 && (
        <div
          className="mt-7 inline-flex"
          style={{
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 104,
            border: '1px solid rgba(249, 249, 249, 0.20)',
          }}
        >
          {day.tabs.map((t, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className="display uppercase rounded-full px-4 md:px-5 py-2 transition-colors whitespace-nowrap text-[12px] md:text-[14px]"
                style={{
                  color: '#F9F9F9',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  background: isActive
                    ? 'linear-gradient(135deg, #eb3030 0%, #fd4c4c 100%)'
                    : 'transparent',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      )}

      {showItems && items.length > 0 && (
        <ul className="flex flex-col gap-7" style={{ marginTop: 40 }}>
          {items.map((item) => (
            <AgendaItemRow key={`${item.time}-${item.title}`} item={item} />
          ))}
        </ul>
      )}

      {showItems && day.schedule && <DayTimeline schedule={day.schedule} />}

      {showItems && content}

      {showItems && note && (
        <div
          className="text-[12px] md:text-[14px] leading-[170%]"
          style={{
            marginTop: 28,
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
}

function ConferenceEventsSection({ activeTier }: { activeTier: Tier }) {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <h2
          className="display uppercase text-[28px] md:text-[clamp(28px,5vw,48px)] leading-[120%] md:leading-[110%]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          Conference Events
        </h2>
        <p
          className="mt-3 max-w-[820px]"
          style={{
            color: '#F9F9F9',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '24px',
          }}
        >
          The five working days of the conference. Sessions are tagged by ticket tier; use the
          filter above to narrow the view to what you have access to.
        </p>

        <div
          className="mt-10 flex flex-col items-start self-stretch gap-10 md:gap-16"
        >
          {CONFERENCE_DAYS.map((d) => (
            <div key={d.dayLabel} className="w-full">
              <ConferenceDayCard day={d} activeTier={activeTier} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── EVENT APP ──────────────────────────────── */

function AppleLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.27 12.42c-.03-3.04 2.49-4.49 2.6-4.56-1.42-2.07-3.62-2.36-4.4-2.39-1.87-.19-3.65 1.1-4.6 1.1-.95 0-2.41-1.07-3.97-1.04-2.04.03-3.92 1.19-4.97 3.02-2.12 3.68-.54 9.12 1.52 12.11 1.01 1.46 2.21 3.1 3.78 3.04 1.52-.06 2.09-.98 3.93-.98 1.83 0 2.36.98 3.97.95 1.64-.03 2.68-1.49 3.69-2.95 1.16-1.69 1.64-3.33 1.66-3.41-.04-.02-3.19-1.22-3.21-4.89zM14.34 3.6c.83-1.01 1.39-2.42 1.24-3.82-1.19.05-2.65.79-3.51 1.79-.77.89-1.45 2.33-1.27 3.7 1.33.1 2.7-.67 3.54-1.67z"
      />
    </svg>
  );
}

function PlayStoreLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#34A853"
        d="M3.6 2.6 13 12 3.6 21.4c-.4-.3-.6-.8-.6-1.4V4c0-.6.2-1.1.6-1.4z"
      />
      <path fill="#FBBC04" d="M16.8 8.5 13 12l3.8 3.5L20.9 13c.7-.4.7-1.6 0-2L16.8 8.5z" />
      <path fill="#EA4335" d="M16.8 8.5 4.4 2.1c-.3-.2-.5-.2-.8-.1L13 12l3.8-3.5z" />
      <path fill="#4285F4" d="M16.8 15.5 13 12l-9.4 9.4c.3.1.5.1.8-.1l12.4-5.8z" />
    </svg>
  );
}

function PhoneMockup() {
  const slots = [
    { time: '09:30', label: 'Keynote · Gary Illyes' },
    { time: '10:30', label: 'Field talk · Lily Ray' },
    { time: '12:30', label: 'Lunch buffet' },
    { time: '14:00', label: 'Lightning · 6 talks' },
    { time: '19:30', label: 'Rooftop opening party' },
  ];

  return (
    <div className="relative mx-auto w-[240px] sm:w-[280px] md:w-[300px]">
      <div
        className="rounded-[44px] border-[6px] border-white/85 p-5 shadow-xl"
        style={{ background: '#0a0d14', aspectRatio: '9 / 19' }}
      >
        <div
          className="uppercase text-[#EB3030]"
          style={{
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.2em',
          }}
        >
          Wed Sep 16
        </div>
        <div
          className="display uppercase text-white mt-1.5"
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          Your Day
        </div>

        <ul className="mt-5 flex flex-col gap-3">
          {slots.map((s) => (
            <li key={s.time} className="flex items-center gap-3">
              <div
                className="display text-white/70 w-[44px] shrink-0"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                {s.time}
              </div>
              <div
                className="flex-1 rounded-full px-3 py-2 text-white/85 border border-white/15"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 11,
                  fontWeight: 500,
                  lineHeight: '120%',
                }}
              >
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EventApp() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-14">
          <div className="grid gap-10 md:gap-14 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <div
                className="uppercase text-[#EB3030] mb-4"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                }}
              >
                Event App
              </div>
              <h2
                className="display uppercase text-[24px] md:text-[clamp(28px,5vw,48px)] leading-[140%] md:leading-[110%] tracking-[-2px] md:tracking-[-1.5px]"
                style={{
                  color: '#F9F9F9',
                  fontWeight: 600,
                }}
              >
                <span className="block">Your agenda,</span>
                <span className="block">on your phone.</span>
              </h2>
              <p
                className="mt-5 max-w-[520px] text-white/75"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '160%',
                }}
              >
                Every session, speaker, and attendee in one app. Build your personal
                schedule, message other attendees, find the room, view your ticket QR.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="display flex w-full md:w-auto md:inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 hover:border-white transition-colors"
                >
                  <AppleLogo className="w-5 h-5" />
                  Download on iOS
                </a>
                <a
                  href="#"
                  className="display flex w-full md:w-auto md:inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 hover:border-white transition-colors"
                >
                  <PlayStoreLogo className="w-5 h-5" />
                  Download on Android
                </a>
              </div>

              <p
                className="mt-5 text-white/55"
                style={{
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '150%',
                }}
              >
                Live by August 2026. Every ticket holder gets access automatically.
              </p>
            </div>

            <div>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── FINAL CTA ───────────────────────────────── */

function FinalCta() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="rounded-[28px] px-6 py-16 md:py-24 text-center"
          style={{
            background:
              'linear-gradient(180deg, #0d3a4d 0%, #06222d 60%, #03161e 100%)',
          }}
        >
          <h2
            className="display uppercase mx-auto md:whitespace-nowrap text-[28px] md:text-[48px] leading-[140%]"
            style={{
              color: '#F9F9F9',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            <span className="block md:inline">See the tier.</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline">Get the ticket.</span>
          </h2>
          <p
            className="mt-5 mx-auto max-w-[820px] text-[14px] md:text-[18px]"
            style={{
              color: '#F9F9F9',
              textAlign: 'center',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '160%',
            }}
          >
            Standard gets you main stage. Deluxe adds workshops + masterminds. VIP adds
            Day 5.
          </p>
          <Link
            href="/#pricing"
            className="display gradient-cta mt-8 flex w-full md:w-auto md:inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
          >
            Get Tickets Today
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── PAGE ───────────────────────────────────── */

export default function AgendaPage() {
  const [tier, setTier] = useState<Tier>('ALL');

  return (
    <main className="home5-root">
      <Nav linkBase="/" current="AGENDA" />
      <Hero />
      <TierFilter active={tier} onChange={setTier} />
      <PreConferenceSection />
      <ConferenceEventsSection activeTier={tier} />
      <KingswayCarousel listId="25693" title="What Did Our Attendees Say About the Conference?" />
      <EventApp />
      <FinalCta />
      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
