'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';

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

const SAT_SEP_12_TALKS: [string, string][] = [
  ['Tanya Van Gastel', 'Winning AI Search: A 4-Step Guide for Chinese Companies'],
  ['Mudi Elsaid', 'AI Partner Discovery: Finding Qualified Affiliates & Influencers at Scale'],
  ['Jacky Lin', 'From AI Tools to B2B Growth Systems: Building Workflows That Actually Run'],
  ['Sacha Fournier', 'Winning in the West: Agentic Digital PR for Chinese Brands'],
  ['Vinayak Gupta & Sharoz Dawa', 'Build Your AI Workforce: a 24/7 Multi-agent Chief of Staff'],
];

const SAT_SEP_12_DETAILS = [
  { label: 'Time', value: '1:00 PM – 5:00 PM' },
  { label: 'Venue', value: 'To be announced (Nanshan or Futian area)' },
  {
    label: 'Note',
    value:
      'These events will be held off-site and will not take place at the main conference hotel.',
  },
  {
    label: 'Schedule',
    value: (
      <ul className="mt-2 flex flex-col gap-2 list-disc pl-5">
        {SAT_SEP_12_TALKS.map(([speaker, talk]) => (
          <li key={speaker}>
            <span className="font-semibold text-white">{speaker}:</span> {talk}
          </li>
        ))}
      </ul>
    ),
  },
];

const SUN_SEP_13_TALKS: [string, string][] = [
  [
    'Jamie I.F.',
    'How Chinese Brands Can Use Affiliates & Influencers To Grow AI Visibility & Revenue in USA',
  ],
  [
    'Tori Long',
    "S.P.A.C.E.: A Five-Dimension Framework for Exporters Who've Hit a Growth Ceiling",
  ],
  [
    'Ilman Akbar',
    'How to Talk So the C-Suites Will Listen: Lessons Learned from Teaching & Implementing SEO for 12+ Years',
  ],
  ['Jabez Reuben', 'Dominating LLMs, AiO & Google Rankings with Consensus'],
];

const SUN_SEP_13_DETAILS = [
  { label: 'Time', value: '1:00 PM – 5:00 PM' },
  { label: 'Venue', value: 'To be announced (Nanshan or Futian area)' },
  {
    label: 'Note',
    value:
      'These events will be held off-site and will not take place at the main conference hotel.',
  },
  {
    label: 'Schedule',
    value: (
      <ul className="mt-2 flex flex-col gap-2 list-disc pl-5">
        {SUN_SEP_13_TALKS.map(([speaker, talk]) => (
          <li key={speaker}>
            <span className="font-semibold text-white">{speaker}:</span> {talk}
          </li>
        ))}
      </ul>
    ),
  },
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
              Two afternoon side events before the conference starts. Free and open to anyone.
              No conference ticket required.
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
type TabSet = { label: string; items: AgendaItem[]; note?: React.ReactNode };

// Renders a labelled group of talks (e.g. "Keynotes (40 mins each)") as a bulleted list.
function SessionGroup({ heading, talks }: { heading?: string; talks: [string, string][] }) {
  return (
    <div>
      {heading && (
        <div
          className="uppercase text-white/50 text-[11px] md:text-[12px]"
          style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontWeight: 600, letterSpacing: '0.12em' }}
        >
          {heading}
        </div>
      )}
      <ul className="mt-1.5 flex flex-col gap-1.5 list-disc pl-5">
        {talks.map(([speaker, talk]) => (
          <li key={speaker}>
            <span className="font-semibold text-white">{speaker}:</span> {talk}
          </li>
        ))}
      </ul>
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
  note?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
};

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
        items: [
          {
            time: '09:00 – 12:00',
            title: 'Morning Tours',
            body: 'Detailed itineraries coming soon',
          },
          {
            time: '12:30 – 14:00',
            title: 'Lunch',
            body: 'Served at the conference hotel',
          },
          {
            time: '14:30 – 17:30',
            title: 'Afternoon Tours',
            body: 'Detailed itineraries coming soon',
          },
          {
            time: '18:00 – 19:30',
            title: 'Networking Dinner',
            body: 'Served at the conference hotel',
          },
          {
            time: '19:30 – 22:00',
            title: 'Night Tours',
            body: 'Detailed itineraries coming soon',
          },
        ],
        note: (
          <p>
            <span className="font-semibold">Note:</span> We are also designing curated full-day
            tour options. Complete details and itinerary choices for all tracks will be announced
            soon.
          </p>
        ),
      },
      {
        label: 'Workshops',
        items: [
          {
            time: '09:00 – 12:00',
            title: 'Morning Workshops',
            body: (
              <>
                Two concurrent sessions; choose one.
                <ul className="mt-2 flex flex-col gap-2 list-disc pl-5">
                  <li>
                    <span className="font-semibold text-white">Jessica Malnik:</span> From Traffic
                    to Pipeline: Fixing the Messaging Gaps That Hurt Conversions
                  </li>
                  <li>
                    <span className="font-semibold text-white">Marc Moeller:</span> GEO: Why 90% of
                    Chinese B2B &amp; SaaS Brands Are Invisible &amp; Step-by-Step Solution
                  </li>
                </ul>
              </>
            ),
          },
          {
            time: '12:30 – 14:00',
            title: 'Lunch',
            body: 'Served at the conference hotel',
          },
          {
            time: '14:30 – 17:30',
            title: 'Afternoon Workshops',
            body: (
              <>
                Two concurrent sessions; choose one.
                <ul className="mt-2 flex flex-col gap-2 list-disc pl-5">
                  <li>
                    <span className="font-semibold text-white">Megan Gougeon:</span> Trust at Scale:
                    The YouTube Framework for Winning American Buyers
                  </li>
                  <li>
                    <span className="font-semibold text-white">Zack Franklin:</span> AI Automation at
                    Shenzhen Speed for SEO, Websites, and Ecom
                  </li>
                </ul>
              </>
            ),
          },
          {
            time: '18:00 – 19:30',
            title: 'Networking Dinner',
            body: 'Served at the conference hotel',
          },
        ],
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
    body: 'The main stage opens.',
    badge: 'All Tickets',
    tiers: ['STANDARD', 'DELUXE', 'VIP'],
    interpretation: true,
    collapsible: true,
    defaultOpen: true,
    items: [
      {
        time: 'Morning',
        title: 'Keynotes, Field Talks & Lightning Talks',
        body: (
          <div className="flex flex-col gap-3.5">
            <div>
              <span className="font-semibold text-white">JP Zhang:</span> Opening Remarks
            </div>
            <SessionGroup
              heading="Keynotes (40 mins each)"
              talks={[
                ['Gary Illyes', "Don't Panic. Search is Always Changing"],
                ['Lily Ray', 'How to Do GEO Without Destroying Your SEO: How Google is Cracking Down on GEO Spam'],
              ]}
            />
            <SessionGroup
              heading="Field Talks (20 mins each)"
              talks={[
                ['Doug Pierce', "Ranked Nowhere: The International SEO Mistakes of China's Biggest Global Brands"],
              ]}
            />
            <SessionGroup
              heading="Lightning Talks (8 mins each)"
              talks={[
                ['Begum Kaya', 'Pace Yourself: Staying Sharp When Everything Is Changing'],
                ['Sam Penny', 'SEO is Marketing: A Proven Framework to See the Big Picture & Unlock Growth'],
                ['Jonathan Kiekbusch', 'TBD'],
              ]}
            />
          </div>
        ),
      },
      { time: 'Lunch', title: 'Buffet Lunch', body: '' },
      {
        time: 'Afternoon',
        title: 'Keynotes, Field Talks & Lightning Talks',
        body: (
          <div className="flex flex-col gap-3.5">
            <SessionGroup
              heading="Keynote (40 minutes)"
              talks={[['Bernard Huang', 'AI Visibility Is Not SEO (And Pretending It Is Will Cost You)']]}
            />
            <SessionGroup
              heading="Field Talks (20 mins each)"
              talks={[
                ['Sebastien Edgar', 'Revenue-First SEO: Connecting Organic, Paid, Campaigns & CRO Into One Growth Engine'],
                ['Victor Huynh', "You Don't Have a B2B SEO Problem. You Have a Website Problem"],
                ['Nik Ranger', 'The Invisible Penalty: Detecting and Recovering from Algorithmic Suppression'],
                ['Loki Yan', 'An Actionable Deep Dive into E-E-A-T'],
                ['Max Kuch', 'From 6-Figure/Month Affiliate SEO to AI Solopreneur: Why I Switched Tracks and What I Learned'],
              ]}
            />
            <SessionGroup
              heading="Lightning Talks (8 mins each)"
              talks={[
                ['Divya Jain', 'Build an Audience, Not Just Traffic: Rethinking Organic ROI'],
                ['Max Hobbs', 'How a Cartoon Lion Changed Our Brand Forever'],
                ['Tom Qiao', 'The Power of Compounding - Why Every Business Needs A/B Testing'],
                ['Gabriele Kahlout', 'Detecting Google Updates Without Third-Party Tools: An Analytical Approach'],
                ['Mayi', "We Posted 3,000 Times on Reddit: Here's Exactly Why Only Some of Them Rank"],
                ['Apurva Bose', 'TBD'],
                ['Killian Kostiha', 'TBD'],
              ]}
            />
          </div>
        ),
      },
      { time: 'Evening', title: 'Opening Party', body: 'Light dinner included' },
    ],
  },
  {
    dayLabel: 'Day 4 · Thu Sep 17',
    title: (
      <>
        Main<br className="md:hidden" /> Conference
      </>
    ),
    body: 'Day two of the main stage. Same format as Day 3. More speakers. Closing party.',
    badge: 'All Tickets',
    tiers: ['STANDARD', 'DELUXE', 'VIP'],
    interpretation: true,
    collapsible: true,
    defaultOpen: true,
    items: [
      {
        time: 'Morning',
        title: 'Keynotes, Field Talks & Lightning Talks',
        body: (
          <div className="flex flex-col gap-3.5">
            <SessionGroup
              heading="Keynotes (40 mins each)"
              talks={[
                ['Eli Schwartz', 'The 3 Pillars of AEO'],
                ['Sasha Gusain', 'Radical Localisation: How Canva Blends Product, Brand, and Local Growth for Global Scale'],
              ]}
            />
            <SessionGroup
              heading="Field Talks (20 mins each)"
              talks={[
                ['Joshua Blyskal', 'The New Citation Economy: How ChatGPT, Google AI Mode, and Claude Pick Sources'],
              ]}
            />
            <SessionGroup
              heading="Lightning Talks (8 mins each)"
              talks={[
                ['Jine Wu', 'SEO is a Product Outcome, Not an SEO Outcome'],
                ['David Carrasco', "The Validation Gap: Why SEO Doesn't End When the User Clicks"],
                ['Tupa Lee', 'Ecommerce SEO Growth Roadmap: 10x Organic Traffic with Product-led Content & Community Backlinks'],
                ['Roger Yin', 'TBD'],
              ]}
            />
          </div>
        ),
      },
      { time: 'Lunch', title: 'Buffet Lunch', body: '' },
      {
        time: 'Afternoon',
        title: 'Keynotes, Field Talks & Lightning Talks',
        body: (
          <div className="flex flex-col gap-3.5">
            <SessionGroup
              heading="Keynotes (40 mins each)"
              talks={[
                ['Lars Lofgren', 'Narrative Manipulation: When Google, Reddit, and LLMs Become Weapons and How to Fight Back'],
              ]}
            />
            <SessionGroup
              heading="Field Talks (20 mins each)"
              talks={[
                ['Kun Tang', 'Cracking the China GEO Code: What DeepSeek, Doubao, and Yuanbao Really Cite'],
                ['Christina Song / Jiyoung Lee', 'Expand into Korea with Search: From Naver to AI'],
                ['Mao Kawana & Polina Kogan', 'The Unwritten Rules of Japanese SEO: From Search Behavior to Business Culture'],
                ['Owain Lloyd-Williams', 'How to Get SEO Moving Inside Large Organisations'],
                ['Nick Drew', 'What Happens When SEO Stops Working: Lessons from Gaining and Losing 80 Million Visitors'],
              ]}
            />
            <SessionGroup
              heading="Lightning Talks (8 mins each)"
              talks={[
                ['Andrea Abbondanza', 'Winning Italy: An AI Search Case Study for Chinese Brands'],
                ['Konstantin Sadekov', 'B2B SaaS Case Study: How Strategic Link Building Drives LLM Visibility'],
                ['Jodie Chan', 'Decoding China Web Performance for Marketers'],
                ['Helen Han', 'Automating Technical SEO: GROQ, Sanity CMS & Hreflang Management at Scale'],
                ['Wasin Mekkit', "AI Search Can't Render Your JavaScript-Heavy Website? SEO Can Fix That"],
                ['Ben Fang', 'AI Is Making B2B Trust Harder: How Embedded Video Turns SEO Pages into Proof Pages'],
                ['Johann Sathianathen', 'AI Agents for SEO: Automating Backlinks, Content, and 24/7 Optimization with Real Data'],
                ['Henry Dalziel', 'TBD'],
              ]}
            />
            <div>
              <span className="font-semibold text-white">JP Zhang:</span> Closing Remarks
            </div>
          </div>
        ),
      },
      { time: 'Evening', title: 'Closing Party', body: 'Light dinner included' },
    ],
  },
  {
    dayLabel: 'Day 5 · Fri Sep 18',
    title: 'VIP Networking',
    body: (
      <>
        Different venue. Different register. This is where the actual deals get signed.
        <br />
        <span className="italic text-white/65">
          ~100 people: VIP ticket holders, speakers, sponsors. Includes 1 night at MGM and
          all meals.
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
              <strong className="text-white font-semibold">Group size -</strong> ~100 people
              (VIP ticket holders, speakers, sponsors)
            </span>
            <span className="block mt-1">
              <strong className="text-white font-semibold">Included -</strong> 1 night stay
              at MGM, all meals, curated networking activities
            </span>
          </>
        ),
      },
      {
        time: '12:00 PM – 3:00 PM',
        title: 'The Transition, Lunch & Check-In',
        body:
          'Luxury coach transfer from The St. Regis to MGM Shenzhen (lunch provided), followed by check-in and local welcome tea.',
      },
      {
        time: '3:00 PM – 6:00 PM',
        title: 'The Strategic Exchange (Indoor)',
        body:
          'A high-energy, structured afternoon featuring expert talks and panels, with three rounds of speed roundtable networking.',
      },
      {
        time: '6:00 PM – 9:30 PM',
        title: 'The Beachfront Gala (MGM Lawn)',
        body:
          'Sunset cocktail hour with professional beachside portrait photography, followed by a curated, premium VIP dinner by the ocean.',
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

  const items: AgendaItem[] = day.tabs ? day.tabs[activeTab].items : day.items ?? [];
  const note: React.ReactNode = day.tabs ? day.tabs[activeTab].note : day.note;
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
      <EventApp />
      <FinalCta />
      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
