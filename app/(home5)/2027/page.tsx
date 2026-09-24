'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Handshake, Lock, RotateCcw, Target } from 'lucide-react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';

/* ─────────────────────────────── CONSTANTS ───────────────────────────────── */

const CHECKOUT = 'https://luma.com/shenzhen-seo-conference-2027';

// 30 September 2026, 23:59 in Shenzhen (UTC+8). Everything about this page is
// pinned to this one moment: after it, Super Early Bird pricing is gone.
const SEB_ENDS = Date.parse('2026-09-30T15:59:00Z');

// Everything on this page that moves as tickets sell lives in these two
// blocks. Nothing else needs touching: the bonus bars, the per-tier counters
// and the seats-taken line are all worked out from these numbers.
//
// Bonus tiers are counted in attendees, not purchases, which is why a pair of
// five-person bundles pushed the "first 20" tier over the line.
const CLAIMED = { consult: 10, blanket: 20, school: 17, yearEnd: 17 };

// Sold per tier. Bundle seats come out of the 135-seat bundle pool, so they do
// not count against the individual ticket limits.
const SOLD = { standard: 8, deluxe: 5, vip: 1, bundle3: 0, bundle5: 2, bundle8: 0 };
const SEAT_CAP = 400;
const SEATS_TAKEN =
  SOLD.standard + SOLD.deluxe + SOLD.vip +
  SOLD.bundle3 * 3 + SOLD.bundle5 * 5 + SOLD.bundle8 * 8;

/* ───────────────────────────────── ICONS ─────────────────────────────────── */

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 13" className={className} fill="none" aria-hidden="true">
      <path
        d="M17 1L6 12L1 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ───────────────────────────────── SHARED ───────────────────────────────── */

/** Red kicker over a big uppercase heading, the pattern every section on the
 *  site already uses, so this page reads as part of it rather than a one-off. */
function SectionHead({
  kicker,
  title,
  dim,
  sub,
  center = true,
}: {
  kicker: string;
  title: string;
  dim?: string;
  sub?: string;
  center?: boolean;
}) {
  const align = center ? 'md:text-center' : '';
  return (
    <>
      <div
        className={`${align} text-[14px] font-bold leading-[150%] tracking-[0.05em] text-[#EB3030] uppercase mb-3`}
      >
        {kicker}
      </div>
      <h2
        className={`${align} display text-[28px] md:text-[36px] font-semibold uppercase leading-[120%] tracking-[-1px] md:tracking-normal text-[#F9F9F9]`}
      >
        <span>{title}</span>
        {dim && <span style={{ opacity: 0.3 }}> {dim}</span>}
      </h2>
      {sub && (
        <p
          className={`${align} mt-5 max-w-[720px] ${center ? 'md:mx-auto' : ''} text-[15px] md:text-[16px] text-white/70 leading-[1.6]`}
        >
          {sub}
        </p>
      )}
    </>
  );
}

function CtaButton({
  children,
  href = CHECKOUT,
  variant = 'red',
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'red' | 'outline';
  className?: string;
}) {
  const external = href.startsWith('http');
  const style =
    variant === 'red'
      ? 'gradient-cta text-white'
      : 'btn-outline-white backdrop-blur-sm';
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`display inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[12px] md:text-[13px] font-bold tracking-[0.18em] uppercase ${style} ${className}`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}

/* ────────────────────────────────── HERO ─────────────────────────────────── */

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/** The current time, or null until the component has mounted. Null on the
 *  first render on purpose: the server has no clock in the visitor's timezone,
 *  so drawing a countdown during the first paint guarantees a mismatch when
 *  React takes over in the browser. */
function useNow() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

/** Counts down to the Super Early Bird deadline, in the hero. */
function Countdown() {
  const now = useNow();

  if (now === null) return <div className="h-[74px]" aria-hidden />;

  const left = Math.max(0, SEB_ENDS - now);
  if (left === 0) return null;

  const s = Math.floor(left / 1000);
  const units = [
    { v: Math.floor(s / 86400), label: 'Days' },
    { v: Math.floor((s % 86400) / 3600), label: 'Hours' },
    { v: Math.floor((s % 3600) / 60), label: 'Mins' },
    { v: s % 60, label: 'Secs' },
  ];

  return (
    // four equal columns rather than four fixed-width boxes: on a 360px phone
    // the fixed version was 14px wider than the card it sat in
    <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-xl border border-[var(--line-2)] bg-black/40 backdrop-blur-sm px-2 py-2 text-center min-w-0"
        >
          <div className="display text-[22px] md:text-[24px] font-semibold text-white leading-none tabular-nums">
            {pad(u.v)}
          </div>
          <div className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-white/50">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/figma-assets/herohome.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,6,13,0.35) 0%, rgba(3,6,13,0.88) 45%, #03060D 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,6,13,0.35) 0%, rgba(3,6,13,0.72) 55%, #03060D 100%)',
          }}
        />
      </div>

      <div className="container pt-[130px] md:pt-[170px] lg:pt-[210px] pb-14 md:pb-20">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* LEFT: the pitch */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--red)]/45 bg-[var(--red)]/10 px-4 py-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.16em] text-[#FD4C4C]">
              <Lock className="w-3.5 h-3.5" strokeWidth={2.2} />
              Strictly capped at 400 tickets
            </span>

            <h1 className="mt-6 display uppercase font-semibold tracking-[-0.01em] text-white">
              <span className="block text-[30px] md:text-[46px] lg:text-[52px] leading-[104%]">
                Shenzhen SEO
              </span>
              <span className="block text-[30px] md:text-[46px] lg:text-[52px] leading-[104%]">
                Conference 2027
              </span>
              {/* the gradient sits on this phrase alone: run across the whole
                  line and the pale middle of the teal-to-red ramp lands on a
                  word, which reads as washed out rather than as a gradient */}
              <span className="block mt-3 text-[20px] md:text-[27px] lg:text-[30px] leading-[120%]">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    // Not the teal-to-red brand ramp: across three words its
                    // midpoint lands a washed-out grey on "Early", the one word
                    // that has to carry. The red CTA gradient stays saturated
                    // the whole way and is just as much ours.
                    backgroundImage: 'linear-gradient(90deg, #EB3030 0%, #FD4C4C 100%)',
                  }}
                >
                  Super Early Bird
                </span>{' '}
                is open
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] md:text-[17px] text-white/75 leading-[1.7]">
              East meets West at scale. Six days connecting Eastern and Western SEO
              professionals and entrepreneurs, in the city that went from fishing village to
              global tech capital in forty years.
            </p>

            <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 max-w-[560px]">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">When</dt>
                <dd className="mt-1.5 text-[15px] md:text-[16px] font-semibold text-white">
                  19–24 September 2027
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">Where</dt>
                <dd className="mt-1.5 text-[15px] md:text-[16px] font-semibold text-white">
                  Shenzhen, China
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Three venues
                </dt>
                <dd className="mt-1.5 text-[15px] md:text-[16px] text-white/80 leading-[1.6]">
                  <span className="font-semibold text-white">St. Regis</span> main stage
                  <span className="text-white/35"> · </span>
                  <span className="font-semibold text-white">MGM</span> VIP networking
                  <span className="text-white/35"> · </span>
                  <span className="font-semibold text-white">TBC</span> side event
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT: the ask */}
          <div className="rounded-[24px] border border-[var(--line-2)] bg-[#06101a]/70 backdrop-blur-md p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#86DFF7] font-bold">
              Super Early Bird ends 30 September
            </div>
            <div className="mt-4">
              <Countdown />
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="display text-[40px] md:text-[46px] font-semibold text-white leading-none">
                30%
              </span>
              <span className="pb-1.5 text-[15px] text-white/70 leading-tight">
                off every ticket
                <br />
                and every bundle
              </span>
            </div>
            <CtaButton className="mt-7 w-full">Get your ticket</CtaButton>
            <p className="mt-4 text-[13px] text-white/50 leading-[1.6]">
              Fully refundable or transferable until 20 August 2027. No risk in deciding today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── GUARANTEES ──────────────────────────────── */

function Guarantees() {
  const items = [
    {
      icon: RotateCcw,
      tint: 'text-[#86DFF7]',
      title: '100% refundable',
      body:
        'Change your mind and you get your money back, or hand the ticket to someone else. Both stay open until 20 August 2027.',
    },
    {
      icon: Target,
      tint: 'text-[#FD4C4C]',
      title: 'Hit-your-goal guarantee',
      body:
        'We ask what you came for. We help you put it into words, and we help you get it. Came and did not get there? Partial or full refund. Promise!',
    },
    {
      icon: Handshake,
      tint: 'text-[#86DFF7]',
      title: 'Partnership guarantee',
      body:
        'We want cross-border deals to happen. If one made at this conference goes wrong, we step in and help with the communication, for free.',
    },
  ];
  return (
    <section className="bg-[#03060d] py-14 lg:py-24">
      <div className="container">
        <SectionHead
          kicker="Zero risk"
          title="Buy with zero risk."
          dim="Our promises to you."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-[var(--line)] bg-[#06101a]/50 p-7 md:p-8"
            >
              <it.icon className={`w-9 h-9 ${it.tint}`} strokeWidth={1.6} />
              <h3 className="mt-5 display text-[18px] md:text-[20px] font-semibold text-white leading-[1.3]">
                {it.title}
              </h3>
              <p className="mt-3 text-[15px] text-white/65 leading-[1.65]">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── WHY NOW ────────────────────────────────── */

function WhyNow() {
  const reasons = [
    ['Strictly 400 seats', 'We only plan to sell 400 tickets. That is the whole room.'],
    [
      'The absolute lowest price',
      'Super Early Bird is 30% off. We may not even run a regular early bird this year.',
    ],
    ['Zero risk', 'Fully refundable or transferable until 20 August 2027.'],
    ['Tax benefits', 'Buy this year and it lands in your 2026 taxes.'],
    ['Travel savings', 'Booking a year out saves a lot on flights and hotels.'],
    ['365 days of networking',
      'You are in the 2027 attendee community (WeChat & WhatsApp) from today.'],
    ['Shape the agenda', 'Be first to help decide the 2027 topics and schedule.'],
    ['Lock in your growth', 'Commit to your own growth now, while it is still a decision and not a scramble.'],
  ];
  return (
    <section className="bg-[#020e19] py-14 lg:py-24">
      <div className="container">
        <SectionHead kicker="Why buy now" title="Eight honest reasons." />
        <div className="mt-12 grid gap-x-8 gap-y-2 md:grid-cols-2 max-w-[1040px] mx-auto">
          {reasons.map(([title, body], i) => (
            <div
              key={title}
              className={`flex gap-5 py-5 border-b border-[var(--line)] ${
                i >= reasons.length - 2 ? 'md:border-b-0' : ''
              } ${i === reasons.length - 1 ? 'border-b-0' : ''}`}
            >
              <span className="display text-[15px] font-semibold text-[var(--red)] tabular-nums pt-0.5 flex-none w-6">
                {pad(i + 1)}
              </span>
              <div>
                <h3 className="display text-[16px] md:text-[17px] font-semibold text-white leading-[1.35]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14px] md:text-[15px] text-white/60 leading-[1.6]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── BONUSES ────────────────────────────────── */

function Bonuses() {
  const items = [
    {
      total: 10,
      taken: CLAIMED.consult,
      who: 'All attendees',
      title: 'One hour, one to one, with JP',
      body: 'A private consultation on your SEO, your market entry, or your business. Worth $500, and it never expires.',
      tint: 'red' as const,
    },
    {
      total: 20,
      taken: CLAIMED.blanket,
      who: 'All attendees',
      title: 'The limited-edition conference blanket',
      body: 'The exact same merch our speakers get. Take the warmth of the conference home with you.',
      tint: 'teal' as const,
    },
    {
      total: 30,
      taken: CLAIMED.school,
      who: 'China attendees only',
      title: 'A year of SEO Action School (SEO实战学院)',
      body: 'Full membership for twelve months. Worth $399.',
      tint: 'red' as const,
    },
    {
      total: 50,
      taken: CLAIMED.yearEnd,
      who: 'China attendees only',
      title: 'A free ticket to the SEO Action Blog year-end event',
      body: '19–20 December 2026, Hangzhou. Worth up to $150.',
      tint: 'teal' as const,
    },
  ];
  return (
    <section className="bg-[#03060d] py-14 lg:py-24">
      <div className="container">
        <SectionHead
          kicker="Early bird bonuses"
          title="The faster you act,"
          dim="the more you get."
          sub="Four bonuses, each capped. They are handed out in the order tickets are bought, and when a tier fills it is gone."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 max-w-[1040px] mx-auto">
          {items.map((it) => {
            const left = Math.max(0, it.total - it.taken);
            const gone = left === 0;
            const pct = Math.round((it.taken / it.total) * 100);
            const accent = it.tint === 'red' ? 'var(--red)' : 'var(--teal-2)';
            return (
              <div
                key={it.title}
                className={`relative rounded-2xl border p-7 md:p-8 ${
                  gone
                    ? 'border-[var(--line)] bg-[#06101a]/30 opacity-55'
                    : 'border-[var(--line-2)] bg-[#06101a]/60'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="display text-[22px] md:text-[24px] font-semibold leading-none"
                      style={{ color: accent }}
                    >
                      First {it.total}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/45 font-bold">
                      {it.who}
                    </div>
                  </div>
                  <span
                    className={`flex-none rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] ${
                      gone
                        ? 'bg-white/10 text-white/50'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {gone ? 'All claimed' : `${left} left`}
                  </span>
                </div>

                <h3 className="mt-6 display text-[17px] md:text-[18px] font-semibold text-white leading-[1.35]">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-[14px] md:text-[15px] text-white/65 leading-[1.65]">
                  {it.body}
                </p>

                {/* progress: how much of this tier is already spoken for */}
                <div className="mt-6">
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-[width] duration-500"
                      style={{ width: `${pct}%`, background: accent }}
                    />
                  </div>
                  <div className="mt-2.5 text-[12px] text-white/45 tabular-nums">
                    {it.taken} of {it.total} claimed
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── PRICING ────────────────────────────────── */

type Tier = {
  name: string;
  price: string;
  was: string;
  forWho: string;
  bullets: string[];
  cap: number;
  sold: number;
  unit: 'tickets' | 'bundles';
  popular?: boolean;
};

const INDIVIDUAL: Tier[] = [
  {
    name: 'Standard',
    price: '$500',
    was: '$700',
    forWho: 'For SEO practitioners',
    bullets: ['The 2-day main conference'],
    cap: 150,
    sold: SOLD.standard,
    unit: 'tickets',
  },
  {
    name: 'Deluxe',
    price: '$750',
    was: '$1,050',
    forWho: 'For marketing directors and agency leads',
    bullets: ['Everything in Standard', '2 days of workshops', 'Mastermind and matchmaking'],
    cap: 90,
    sold: SOLD.deluxe,
    unit: 'tickets',
    popular: true,
  },
  {
    name: 'VIP',
    price: '$1,500',
    was: '$2,100',
    forWho: 'For executives and founders',
    bullets: [
      'Everything in Deluxe',
      'VIP closed-door day',
      'VIP dinner and airport transfer',
    ],
    cap: 25,
    sold: SOLD.vip,
    unit: 'tickets',
  },
];

const CORPORATE: Tier[] = [
  {
    name: '3-person',
    price: '$2,500',
    was: '$3,000',
    forWho: 'For a small team',
    bullets: ['1 VIP ticket', '1 Deluxe ticket', '1 Standard ticket'],
    cap: 15,
    sold: SOLD.bundle3,
    unit: 'bundles',
  },
  {
    name: '5-person',
    price: '$3,500',
    was: '$4,000',
    forWho: 'For a growing team',
    bullets: ['1 VIP ticket', '2 Deluxe tickets', '2 Standard tickets'],
    cap: 10,
    sold: SOLD.bundle5,
    unit: 'bundles',
    popular: true,
  },
  {
    name: '8-person',
    price: '$6,000',
    was: '$7,000',
    forWho: 'For a whole department',
    bullets: ['2 VIP tickets', '3 Deluxe tickets', '3 Standard tickets'],
    cap: 5,
    sold: SOLD.bundle8,
    unit: 'bundles',
  },
];

function TierCard({ t }: { t: Tier }) {
  return (
    <div
      className={`relative rounded-2xl p-7 border ${
        t.popular ? 'border-[var(--teal)]' : 'border-white/10'
      } bg-[#06101a]/40 flex flex-col`}
    >
      {t.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[var(--teal)] text-white">
          Most popular
        </span>
      )}
      <div className="display text-[18px] font-bold uppercase tracking-[0.04em] text-white">
        {t.name}
      </div>
      <div className="mt-4 flex items-end gap-3">
        <span
          className="display text-[32px] md:text-[40px] font-semibold leading-none text-white uppercase"
          style={{ opacity: 0.95 }}
        >
          {t.price}
        </span>
        <span className="display text-[15px] text-white line-through pb-1" style={{ opacity: 0.45 }}>
          {t.was}
        </span>
      </div>
      <div
        className="mt-2"
        style={{ color: '#F9F9F9', fontSize: '15px', fontWeight: 600, lineHeight: '160%', opacity: 0.6 }}
      >
        {t.forWho}
      </div>
      <ul className="mt-7 space-y-3 flex-1">
        {t.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3"
            style={{ color: '#F9F9F9', fontSize: '14px', fontWeight: 500, lineHeight: '160%', opacity: 0.75 }}
          >
            <CheckIcon className="w-[18px] h-[13px] mt-1.5 flex-none text-[var(--red)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#86DFF7]">
        <Lock className="w-3.5 h-3.5" strokeWidth={2.2} />
        {t.cap - t.sold} of {t.cap} {t.unit} left
      </div>
      <a
        href={CHECKOUT}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 display inline-flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase ${
          t.popular ? 'gradient-cta text-white' : 'btn-outline-white'
        }`}
      >
        Buy {t.name}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-14 lg:py-24 scroll-mt-24"
      style={{
        // the same dimmed brand gradient the 2026 pricing block uses
        background:
          'linear-gradient(180deg, #03060D 0%, rgba(3,6,13,0) 50%, #03060D 100%),' +
          'linear-gradient(0deg, rgba(3,6,13,0.65), rgba(3,6,13,0.65)),' +
          'linear-gradient(90deg, #118BAC 0%, #EB3030 100%)',
      }}
    >
      <div className="container">
        <SectionHead
          kicker="How much is it"
          title="Tickets and bundles."
          sub="The lowest price this conference will ever be. Every price below is 30% off the regular rate."
        />

        {/* Individual */}
        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="display text-[20px] md:text-[22px] font-semibold uppercase text-white">
            Individual tickets
          </h3>
          <span className="text-[14px] text-white/55">
            265 seats in total. For solo attendees, freelancers and small teams.
          </span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {INDIVIDUAL.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>

        {/* Corporate */}
        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="display text-[20px] md:text-[22px] font-semibold uppercase text-white">
            Corporate bundles
          </h3>
          <span className="text-[14px] text-white/55">
            135 seats in total. Everyone on a bundle books with the same company email domain.
          </span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {CORPORATE.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-10 max-w-[560px] mx-auto">
          <div className="flex items-baseline justify-between gap-4">
            <span className="display text-[15px] font-semibold text-white">
              {SEATS_TAKEN} of {SEAT_CAP} seats taken
            </span>
            <span className="text-[13px] text-white/50 tabular-nums">
              {SEAT_CAP - SEATS_TAKEN} still available
            </span>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--red)]"
              style={{ width: `${Math.max(1.5, (SEATS_TAKEN / SEAT_CAP) * 100)}%` }}
            />
          </div>
        </div>

        <p className="mt-8 text-[14px] text-white/55 text-center max-w-[760px] mx-auto leading-[1.6]">
          265 individual seats plus 135 in bundles is the 400 cap. Bringing ten or more from one
          company?{' '}
          <Link href="/#contact" className="underline text-white hover:text-[var(--red)]">
            Talk to us
          </Link>{' '}
          and we will build a custom package.
        </p>

      </div>
    </section>
  );
}

/* ──────────────────────────────── SCHEDULE ───────────────────────────────── */

function Schedule() {
  const days = [
    { day: 'Sun', date: '19 Sep', title: 'Free side event', note: 'Open to everyone.' },
    { day: 'Mon', date: '20 Sep', title: 'City tours + SEO workshops', note: 'Running in parallel, pick your track.' },
    { day: 'Tue', date: '21 Sep', title: 'SEO Mastermind + SEO Matchmaking', note: 'Mastermind in the morning, matchmaking after lunch.', accent: true },
    { day: 'Wed', date: '22 Sep', title: 'Main stage talks', note: 'St. Regis.', main: true },
    { day: 'Thu', date: '23 Sep', title: 'Main stage talks', note: 'St. Regis.', main: true },
    { day: 'Fri', date: '24 Sep', title: 'VIP networking', note: 'MGM. VIP tickets only.' },
  ];
  const trip = [
    { name: 'BrightonSEO', where: 'United States', when: '7–9 Sep', ours: false },
    { name: 'SaaS SEO Alliance', where: 'Dubai', when: '11–12 Sep', ours: false },
    { name: 'Shenzhen SEO Conference', where: 'China', when: '19–24 Sep', ours: true },
    { name: 'Search SEOul', where: 'South Korea', when: '28 Sep – 1 Oct', ours: false },
  ];
  return (
    <section className="bg-[#020e19] py-14 lg:py-24">
      <div className="container">
        <SectionHead
          kicker="The week"
          title="Six days."
          dim="Pick your depth."
          sub="19 to 24 September 2027. Your ticket tier decides how many of these days you can walk into."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* timeline */}
          <ol className="relative">
            <span
              className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--line-2)]"
              aria-hidden
            />
            {days.map((d) => (
              <li key={d.date} className="relative pl-9 pb-7 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2"
                  style={{
                    borderColor: d.main
                      ? 'var(--teal-2)'
                      : d.accent
                        ? 'var(--teal)'
                        : 'rgba(249,249,249,0.3)',
                    background: d.main ? 'var(--teal-2)' : '#020e19',
                  }}
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/45 tabular-nums">
                    {d.day} {d.date}
                  </span>
                </div>
                <h3
                  className="mt-1.5 display text-[17px] md:text-[19px] font-semibold leading-[1.3]"
                  style={{ color: d.main || d.accent ? '#86DFF7' : '#F9F9F9' }}
                >
                  {d.title}
                </h3>
                <p className="mt-1 text-[14px] text-white/55 leading-[1.6]">{d.note}</p>
              </li>
            ))}
          </ol>

          {/* the Asia trip */}
          <div className="rounded-2xl border border-[var(--line)] bg-[#06101a]/50 p-7 md:p-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#EB3030]">
              September 2027
            </div>
            <h3 className="mt-3 display text-[19px] md:text-[21px] font-semibold text-white leading-[1.3]">
              Where we sit in the calendar
            </h3>
            <ul className="mt-6 space-y-3">
              {trip.map((t) => (
                <li
                  key={t.name}
                  className={`flex items-baseline justify-between gap-4 rounded-xl px-4 py-3 ${
                    t.ours ? 'bg-[var(--red)]/12 border border-[var(--red)]/40' : 'bg-white/[0.03]'
                  }`}
                >
                  <div>
                    <div
                      className={`text-[14px] md:text-[15px] font-semibold ${
                        t.ours ? 'text-white' : 'text-white/75'
                      }`}
                    >
                      {t.name}
                    </div>
                    <div className="text-[13px] text-white/45">{t.where}</div>
                  </div>
                  <span
                    className={`flex-none text-[13px] tabular-nums ${
                      t.ours ? 'text-[#FD4C4C] font-semibold' : 'text-white/50'
                    }`}
                  >
                    {t.when}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-white/70 leading-[1.65]">
              Dubai, Shenzhen and Seoul inside three weeks. One trip covers all three.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── NUMBERS, VALUES, VISION ───────────────────────── */

function Numbers() {
  const stats = [
    ['7', 'Days', '5 main + 2 side'],
    ['4', 'Venues', ''],
    ['19', 'Sponsors', ''],
    ['53', 'Speakers', ''],
    ['481', 'Attendees', ''],
    ['49', 'Countries', ''],
    ['51%', 'Chinese attendees', ''],
  ];
  const values = [
    ['Growth', 'The ultimate goal of SEO, and the reason anyone gets on a plane.'],
    [
      'Entrepreneurship',
      'The spirit of Shenzhen. Built from nothing into a global tech hub in forty years.',
    ],
    [
      'Partnership',
      'The point of meeting in person. It connects people, and it is where trust actually happens.',
    ],
  ];
  return (
    <section className="bg-[#03060d] py-14 lg:py-24">
      <div className="container">
        <SectionHead
          kicker="2026 by the numbers"
          title="What this year"
          dim="actually looked like."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px rounded-2xl overflow-hidden bg-[var(--line)] border border-[var(--line)]">
          {stats.map(([n, label, note]) => (
            <div key={label} className="bg-[#03060d] px-4 py-7 text-center">
              <div className="display text-[30px] md:text-[34px] font-semibold text-white leading-none tabular-nums">
                {n}
              </div>
              <div className="mt-2.5 text-[12px] uppercase tracking-[0.12em] text-white/55 font-bold leading-[1.3]">
                {label}
              </div>
              {note && <div className="mt-1 text-[11px] text-white/35">{note}</div>}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-start">
          <div>
            <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#EB3030]">
              Our vision
            </div>
            <p className="mt-4 display text-[22px] md:text-[26px] font-semibold text-white leading-[1.3]">
              To become the most international SEO event in Asia.
            </p>
          </div>
          <div>
            <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#EB3030] mb-6">
              Our core values
            </div>
            <div className="space-y-5">
              {values.map(([name, body]) => (
                <div key={name} className="flex gap-5">
                  <span className="flex-none w-[3px] rounded-full bg-[var(--red)]" aria-hidden />
                  <div>
                    <h3 className="display text-[17px] font-semibold text-white">{name}</h3>
                    <p className="mt-1.5 text-[15px] text-white/65 leading-[1.65]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SPEAKERS ───────────────────────────────── */

function Speakers() {
  const names = [
    'Gary Illyes',
    'Aleyda Solis',
    'Mike King',
    'Steve Toth',
    'Dan Petrovic',
    'Kevin Indig',
    'Noah Learner',
    'Viola Eva',
    'Ross Hudgens',
    'Tom Capper',
    'Ray Grieselhuber',
    '昝辉 (Zac)',
  ];
  return (
    <section className="bg-[#020e19] py-14 lg:py-24">
      <div className="container">
        <SectionHead
          kicker="The lineup"
          title="The stage"
          dim="is setting."
          sub="78 world-class speakers have already said they are interested in returning for 2027. Here are twelve of them."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 max-w-[960px] mx-auto">
          {names.map((n) => (
            <span
              key={n}
              className="display rounded-full border border-[var(--line-2)] bg-white/[0.04] px-5 py-2.5 text-[14px] md:text-[15px] font-semibold text-white"
            >
              {n}
            </span>
          ))}
          <span className="display rounded-full border border-dashed border-[var(--line-2)] px-5 py-2.5 text-[14px] md:text-[15px] font-semibold text-white/45">
            and 60 more
          </span>
        </div>

        <div className="mt-14 rounded-2xl border border-[var(--line-2)] bg-[#06101a]/60 p-8 md:p-10 max-w-[900px] mx-auto md:flex md:items-center md:gap-10">
          <div className="flex-1">
            <h3 className="display text-[20px] md:text-[22px] font-semibold text-white leading-[1.3]">
              Want to speak in 2027?
            </h3>
            <p className="mt-3 text-[15px] text-white/65 leading-[1.65]">
              If you, or someone you know, wants to speak next year, put your name down now. We
              will let you know as soon as the speaker form is live.
            </p>
          </div>
          <CtaButton href="/speakers#apply" variant="outline" className="mt-6 md:mt-0 w-full md:w-auto flex-none">
            Apply to speak
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────── FAQ ──────────────────────────────────── */

function Faq() {
  const items: { q: string; a: React.ReactNode; defaultOpen?: boolean }[] = [
    {
      q: 'What exactly am I buying a year in advance?',
      a: 'A confirmed seat at the 2027 conference, 19 to 24 September, at 30% off the regular price. The dates and the main venue are locked. The agenda and the full speaker lineup are built over the coming year, and Super Early Bird buyers get a say in both.',
      defaultOpen: true,
    },
    {
      q: 'Can I get a refund, or give my ticket to someone else?',
      a: 'Both, right up to 20 August 2027. Refunds are returned to the card you paid with. Transfers just need the new attendee’s name and email. On top of that, our hit-your-goal guarantee means that if you come and do not get what you came for, you can still ask for a partial or full refund afterwards.',
    },
    {
      q: 'Who actually shows up?',
      a: 'Roughly half from China, in-house SEO and marketing leaders at brands selling into global markets. The rest international: agency owners, Martech founders, and fractional SEO consultants. In 2026 the room was 481 people from 49 countries.',
    },
    {
      q: 'Is this for SEO beginners?',
      a: 'Not really. The talks are aimed at intermediate to advanced practitioners. In-house marketing directors and growth leads are very welcome, even if they do not do the SEO work themselves.',
    },
    {
      q: 'What language are the sessions in?',
      a:
        'Every session runs in English, on the main stage and at the side event alike. ' +
        'Simultaneous English to Mandarin interpretation is provided for the main stage ' +
        'talks on 22 and 23 September. We are looking at extending it to the workshops ' +
        'and the free side event as well, and we will confirm that closer to the event.',
    },
    {
      q: 'Is the content Western SEO or China SEO?',
      a: 'Both, weighted about 90% Western and international SEO and 10% on the search and internet ecosystems inside China.',
    },
    {
      q: 'Do I need a visa?',
      a: (
        <>
          Citizens of 80 countries currently get visa-free entry for up to 90 days, and holders of
          some passports (including the USA) get 10-day free transit. If neither applies you will
          need a tourist or business visa, and we will send you a signed invitation letter.{' '}
          <Link href="/visit-shenzhen" className="underline text-white hover:text-[var(--red)]">
            Learn more
          </Link>
          .
        </>
      ),
    },
    {
      q: 'What are the rules on corporate bundles?',
      a: 'Everyone on a bundle registers with the same company email domain. Public addresses like Gmail or Hotmail are not accepted. Bundle tickets cannot be split or resold between companies. Bringing ten or more from one company? Contact us and we will build a custom package.',
    },
    {
      q: 'What happens when Super Early Bird ends?',
      a: 'Prices go up to the regular rate automatically on 30 September. We may not run a normal early bird at all this year, so this is likely the only discount there will be. Either way, total sales still stop at the ticket limits listed above.',
    },
  ];
  return (
    <section className="bg-[#03060d] py-14 lg:py-24">
      <div className="container">
        <SectionHead kicker="FAQ" title="Real questions." dim="Direct answers." />
        <div className="mt-12 max-w-[920px] mx-auto space-y-3">
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

/* ──────────────────────────────── FINAL CTA ──────────────────────────────── */

function FinalCta() {
  return (
    <section className="bg-[#03060d] pb-14 lg:pb-24">
      <div className="container">
        <div
          className="rounded-[28px] py-14 md:py-20 px-6 md:text-center"
          style={{
            background:
              'linear-gradient(160deg, #114555 0%, #0a3142 35%, #06222d 70%, #051820 100%)',
          }}
        >
          <h2 className="display text-[26px] md:text-[38px] font-semibold leading-[1.15] uppercase max-w-[900px] md:mx-auto text-white">
            <span className="block">Connecting Eastern and Western SEOs.</span>
            <span className="block">One room. Six days.</span>
          </h2>
          <p
            className="mt-5 max-w-[640px] md:mx-auto"
            style={{ color: '#F9F9F9', fontSize: '18px', fontWeight: 500, lineHeight: '160%' }}
          >
            400 seats, and the lowest price this conference will ever be.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-center">
            <CtaButton className="w-full sm:w-auto">Secure my 2027 ticket</CtaButton>
            <CtaButton href="#pricing" variant="outline" className="w-full sm:w-auto">
              See all tiers
            </CtaButton>
          </div>
          <p className="mt-6 text-[14px] text-white/55">
            Super Early Bird closes 30 September. Refundable until 20 August 2027.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── STICKY CTA ──────────────────────────────── */

// Dismissal lives in sessionStorage, not localStorage: it survives navigation
// and reloads but clears when the tab closes, so the bar stops nagging during
// one visit without hiding itself forever.
const STICKY_KEY = 'szseo-2027-cta-dismissed';

/** A floating buy bar that appears once the hero has scrolled away.
 *
 *  It is deliberately absent above the fold: the hero already has the same
 *  countdown and the same button, and stacking a second copy over them just
 *  covers the page. It hides itself once Super Early Bird closes.
 */
function StickyCta() {
  const now = useNow();
  const [pastHero, setPastHero] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(window.sessionStorage.getItem(STICKY_KEY) === '1');
    } catch {
      // private browsing: just show it
      setDismissed(false);
    }
  }, []);

  // Watching the hero itself rather than a pixel threshold, so the bar appears
  // at the right moment on a phone, a laptop and a 4K monitor alike.
  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  if (now === null || dismissed || !pastHero || now >= SEB_ENDS) return null;

  const s = Math.floor((SEB_ENDS - now) / 1000);
  const units: [string, string][] = [
    [pad(Math.floor(s / 86400)), 'Days'],
    [pad(Math.floor((s % 86400) / 3600)), 'Hrs'],
    [pad(Math.floor((s % 3600) / 60)), 'Min'],
    [pad(s % 60), 'Sec'],
  ];

  const close = () => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(STICKY_KEY, '1');
    } catch {
      /* private browsing: it comes back on the next page, which is fine */
    }
  };

  return (
    <div className="fixed z-40 left-1/2 -translate-x-1/2 bottom-3 lg:bottom-[50px] max-w-[calc(100vw-1.5rem)]">
      <div
        className="flex items-center gap-3 md:gap-4 rounded-2xl border border-white/15 pl-4 pr-2 py-2.5 md:pl-5 md:pr-3 md:py-3 shadow-2xl"
        style={{ background: 'rgba(6, 12, 21, 0.92)', backdropFilter: 'blur(10px)' }}
      >
        <div className="flex flex-col">
          <span
            className="uppercase text-[9px] md:text-[10px] font-bold whitespace-nowrap"
            style={{
              color: '#EB3030',
              fontFamily: 'General Sans, system-ui, sans-serif',
              letterSpacing: '0.16em',
            }}
          >
            Super Early Bird ends 30 September
          </span>
          <div className="flex items-end gap-2.5 md:gap-3.5 mt-1.5">
            {units.map(([value, label], i) => (
              <Fragment key={label}>
                {i > 0 && (
                  <span className="text-white/25 text-[15px] md:text-[18px] leading-none -mt-1">
                    :
                  </span>
                )}
                <span className="flex flex-col items-center leading-none">
                  <span
                    className="display text-white text-[15px] md:text-[18px] font-bold tabular-nums"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    {value}
                  </span>
                  <span
                    className="mt-1 uppercase text-white/45 text-[8px] md:text-[9px] font-semibold"
                    style={{
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {label}
                  </span>
                </span>
              </Fragment>
            ))}
          </div>
        </div>

        <a
          href={CHECKOUT}
          target="_blank"
          rel="noopener noreferrer"
          className="display shrink-0 hidden sm:inline-flex items-center justify-center gap-2 self-center rounded-full gradient-cta text-white text-[11px] font-bold uppercase px-5 py-3 whitespace-nowrap"
          style={{ letterSpacing: '0.16em' }}
        >
          Get tickets
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <button
          type="button"
          onClick={close}
          aria-label="Hide the ticket bar"
          className="shrink-0 grid place-items-center w-7 h-7 rounded-full text-white/45 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ────────────────────────────────── PAGE ─────────────────────────────────── */

export default function Presale2027Page() {
  return (
    <main className="home5-root">
      <Nav linkBase="/" />
      <Hero />
      <Guarantees />
      <WhyNow />
      <Bonuses />
      <Pricing />
      <Schedule />
      <Numbers />
      <Speakers />
      <Faq />
      <FinalCta />
      <Footer linkBase="/" />
      <StickyCta />
      <BackToTop />
    </main>
  );
}
