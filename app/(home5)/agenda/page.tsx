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
          className="object-cover object-center opacity-70"
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

      <div className="container pt-[200px] md:pt-[240px] lg:pt-[280px] pb-12 md:pb-20 text-left md:text-center">
        {/* Date / venue */}
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-2 mb-6 md:mb-8">
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
          <span className="w-1 h-1 rounded-full bg-white/70" aria-hidden />
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
          Workshops, masterminds, main stage, VIP networking. Filter by your ticket tier.
        </p>

        <div className="mt-8 md:mt-10 flex justify-start md:justify-center">
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
      <div className="container pb-16 md:pb-24">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 360, borderRadius: 24 }}
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
  title: string;
  body: string;
  badge: string;
};

const SIDE_EVENTS: SideEvent[] = [
  {
    dayLabel: 'Day 1 · Sat Sep 12',
    title: 'TBD',
    body:
      'Two afternoon side events before the conference starts. Free and open to anyone. No conference ticket required.',
    badge: 'Free · Open',
  },
  {
    dayLabel: 'Day 1 · Sun Sep 13',
    title: 'TBD',
    body:
      'Two afternoon side events before the conference starts. Free and open to anyone. No conference ticket required.',
    badge: 'Free · Open',
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
        <span className="order-1 md:order-2">
          <TierBadge label={event.badge} />
        </span>
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
      <h3
        className="display uppercase mt-3 text-[20px] md:text-[28px] leading-normal md:leading-[40px]"
        style={{
          color: '#F9F9F9',
          fontWeight: 700,
        }}
      >
        {event.title}
      </h3>
      <p
        className="mt-4 text-white/75 max-w-[820px]"
        style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '160%',
        }}
      >
        {event.body}
      </p>
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
          <a
            href="/#contact"
            className="display flex w-full md:w-auto md:inline-flex md:shrink-0 items-center justify-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 hover:border-white transition-colors self-start md:self-auto"
          >
            RSVP for Side Events
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div
          className="flex flex-col items-start self-stretch gap-10 md:gap-16"
        >
          {SIDE_EVENTS.map((e) => (
            <div key={e.dayLabel} className="w-full">
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
type TabSet = { label: string; items: AgendaItem[] };

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
      "Start the week hands-on. Morning workshops led by speakers. Afternoon tours into the city's working districts: Huaqiangbei electronics, Nanshan tech, the bay.",
    badge: 'Deluxe + VIP',
    tiers: ['DELUXE', 'VIP'],
    collapsible: true,
    defaultOpen: true,
    tabs: [
      {
        label: 'City Tours',
        items: [
          {
            time: '10:00–13:00',
            title: 'Morning Tours',
            body:
              'Huaqiangbei (electronics), Nanshan (tech), or Shekou Bay. Small groups, local guides.',
          },
          {
            time: '14:30–17:30',
            title: 'Afternoon Tours',
            body:
              '3-hour deep-dive workshops. Technical SEO audits, content strategy, cross-border market entry.',
          },
          {
            time: '19:00',
            title: 'Welcome Dinner',
            body: 'Open to all Day 1 attendees.',
          },
        ],
      },
      {
        label: 'Workshops',
        items: [
          {
            time: '10:00–13:00',
            title: 'Morning Workshops',
            body:
              'Speaker-led hands-on workshops. Technical SEO audits, content strategy, cross-border market entry.',
          },
          {
            time: '14:30–17:30',
            title: 'Afternoon Workshops',
            body: 'Continued deep work with speakers in small groups.',
          },
          {
            time: '19:00',
            title: 'Welcome Dinner',
            body: 'Open to all Day 1 attendees.',
          },
        ],
      },
    ],
  },
  {
    dayLabel: 'Day 2 · Tue Sep 15',
    title: 'SEO Masterminds',
    body: (
      <>
        Small-group problem-solving.{' '}
        <strong className="font-semibold" style={{ color: '#5DAEDB' }}>
          6-7 people per table
        </strong>
        , one expert leading each. Bring your actual work: site audits, ranking drops,
        market-entry questions.
      </>
    ),
    badge: 'Deluxe + VIP',
    tiers: ['DELUXE', 'VIP'],
    live: true,
    collapsible: true,
    defaultOpen: false,
    items: [
      {
        time: '09:30–12:30',
        title: 'Morning Mastermind',
        body: 'Three rounds, rotating tables. Each table led by a different expert.',
      },
      {
        time: '14:00–17:00',
        title: 'Afternoon Mastermind',
        body: 'Repeat with new tables. Bring your hardest open question.',
      },
      {
        time: '19:00',
        title: 'Speaker Dinner',
        body: 'Closed dinner with the mastermind leads.',
      },
    ],
  },
  {
    dayLabel: 'Day 3 · Wed Sep 16',
    title: (
      <>
        Main<br className="md:hidden" /> Conference ·<br className="md:hidden" /> Day 1
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
        title: '2 Keynotes + 4 Field Talks',
        body: '45 min keynotes, 30 min talks.',
      },
      {
        time: '12:30–13:45',
        title: 'Lunch',
        body: 'Full buffet. Interpreters on floor.',
      },
      {
        time: 'Afternoon',
        title: '2 Keynotes + 4 Talks + 6 Lightning',
        body: '10 min lightning rounds, rapid-fire.',
      },
      {
        time: '19:30',
        title: 'Opening Party',
        body: 'Rooftop bar, 80th floor.',
      },
    ],
  },
  {
    dayLabel: 'Day 4 · Thu Sep 17',
    title: (
      <>
        Main<br className="md:hidden" /> Conference ·<br className="md:hidden" /> Day 2
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
        title: '2 Keynotes + 4 Field Talks',
        body: 'Same format as Day 3.',
      },
      {
        time: '12:30–13:45',
        title: 'Lunch',
        body: 'Full buffet. Interpreters on floor.',
      },
      {
        time: 'Afternoon',
        title: '2 Keynotes + 4 Talks + 6 Lightning',
        body: '10 min lightning rounds, rapid-fire.',
      },
      {
        time: '19:30',
        title: 'Closing Party',
        body: 'All attendees.',
      },
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
    badge: 'VIP Only',
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
        time: 'Morning',
        title: 'Structured 1:1 Speed-Meetings',
        body: '15 min each, pre-matched by JP.',
      },
      {
        time: 'Afternoon',
        title: 'Small-Group Sessions',
        body: 'By topic or region.',
      },
      {
        time: 'Evening',
        title: 'Private Dinner',
        body: '',
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

      {isCollapsible && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="display mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 hover:border-white transition-colors"
        >
          {open ? 'Hide Schedule' : 'View Schedule'}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      {showItems && items.length > 0 && (
        <ul className="flex flex-col gap-7" style={{ marginTop: 40 }}>
          {items.map((item) => (
            <AgendaItemRow key={`${item.time}-${item.title}`} item={item} />
          ))}
        </ul>
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
