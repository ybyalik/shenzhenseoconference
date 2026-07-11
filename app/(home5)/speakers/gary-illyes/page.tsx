'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, BackToTop, Footer, LinkedInIcon, Nav } from '../../_components/shared';
import { sameCategorySpeakers, speakerSlug } from '@/lib/lineup';

/* ─────────────────────────────── DATA (template) ─────────────────────────── */

const SPEAKER = {
  name: 'Gary Illyes',
  title: 'Analyst, Google Search',
  tag: 'Keynote',
  year: '2026',
  origin: 'Switzerland',
  sessionShort: 'Inside Google Search',
  stage: 'Tue Sep 15',
  img: '/assets/gary-illyes.jpg',
  linkedin: 'https://www.linkedin.com/in/garyillyes/',
  bio: 'Gary Illyes is a search relations at Google based in Hungary / USA. A recognized voice in the global search community, Gary has shaped how teams approach modern SEO, from technical foundations to the new realities of LLM-driven discovery. On the Shenzhen stage, expect direct, opinionated takes informed by real client work and a deep respect for what cross-border SEO actually demands in 2026.',
  session: {
    title: 'Inside Google Search Relations',
    day: 'Day 2 · Tue Sep 15 · 10:00am',
    where: 'The St. Regis Shenzhen (Main ballroom)',
    description:
      'Gary Illyes unpacks inside google search relations with concrete examples from real campaigns. Expect tactical frameworks you can apply Monday morning, not theory, not slides full of acronyms. Bring questions: every session ends with live Q&A and a hallway follow-up window.',
    // Google Calendar: Sep 15 2026, 10:00–11:00 Shenzhen time (UTC+8)
    calendarUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' +
      encodeURIComponent('Inside Google Search Relations — Shenzhen SEO Conference 2026') +
      '&dates=20260915T020000Z/20260915T030000Z&location=' +
      encodeURIComponent('The St. Regis Shenzhen') +
      '&details=' +
      encodeURIComponent('Session with Gary Illyes at the Shenzhen SEO Conference 2026.'),
  },
};

/* ─────────────────────────────────── ICONS ──────────────────────────────── */

function BackArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

/* ─────────────────────────────── SHARED BITS ────────────────────────────── */

const RED_LABEL = {
  color: 'var(--red)',
  fontFamily: 'General Sans, system-ui, sans-serif',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.16em',
} as const;

// Map full country names to ISO 3166-1 alpha-2 codes, then to flag emoji —
// matching how the Speakers page renders speaker country flags.
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
};

const flagEmoji = (name: string) => {
  const cc = COUNTRY_CODES[name.trim().toLowerCase()];
  if (!cc) return name.trim(); // fall back to text for anything unmapped
  return String.fromCodePoint(...[...cc].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
};

// Handles single countries and combos like "China & Australia".
const countryFlags = (country: string) =>
  country
    .split(/[&·]/)
    .map((c) => flagEmoji(c))
    .join(' ');

/* ─────────────────────────────────── PAGE ───────────────────────────────── */

export default function GaryIllyesProfile() {
  const s = SPEAKER;
  // Other speakers in the same category (auto — pulled from the shared lineup).
  const recommended = sameCategorySpeakers(s.name, 8);
  const btnBase =
    'display inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white';

  return (
    <main className="bg-[#03060d] min-h-screen">
      <Nav linkBase="/" />
      <div className="pt-[80px] lg:pt-[96px]" aria-hidden />
      {/* ── Speaker hero ── */}
      <section className="bg-[#03060d]">
        <div className="container pt-8 md:pt-12 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 uppercase mb-10 md:mb-14" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.06em' }}>
            <Link href="/speakers" className="inline-flex items-center gap-3 text-white/85 hover:text-white transition-colors">
              <BackArrow className="w-5 h-5" />
              All Speakers
            </Link>
            <span className="text-white/25">/</span>
            <span style={{ color: '#5DAEDB' }}>{s.name}</span>
          </div>

          <div className="grid gap-8 md:gap-12 lg:gap-14 md:grid-cols-[minmax(0,380px)_1fr] items-start md:items-stretch">
            {/* Photo card */}
            <div className="relative w-full aspect-[5/6] md:aspect-auto md:h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <Image
                src={s.img}
                alt={s.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
              <span
                className="absolute top-4 left-4 display uppercase rounded-full"
                style={{
                  background: 'var(--red)',
                  color: '#F9F9F9',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '6px 14px',
                }}
              >
                {s.tag}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <span className="uppercase" style={RED_LABEL}>
                Speaker · {s.year}
              </span>
              <h1
                className="display uppercase text-white mt-3"
                style={{ fontSize: 'clamp(34px, 5.5vw, 72px)', fontWeight: 700, lineHeight: '100%', letterSpacing: '-0.02em' }}
              >
                {s.name}
              </h1>
              <p
                className="mt-4 text-white/70"
                style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 20, fontWeight: 400, lineHeight: '150%' }}
              >
                {s.title}
              </p>

              {/* Meta row */}
              <div className="mt-8 md:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  ['Origin', s.origin],
                  ['Session', s.sessionShort],
                  ['Stage', s.stage],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="uppercase text-white/40" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em' }}>
                      {label}
                    </div>
                    <div className="display uppercase text-white mt-2" style={{ fontSize: 17, fontWeight: 700, letterSpacing: '0.01em' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 border-t border-white/10" />

              <p
                className="mt-8 text-white/70"
                style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: '175%' }}
              >
                {s.bio}
              </p>

              {/* Actions */}
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <a href={s.linkedin} target="_blank" rel="noopener noreferrer" className={btnBase} style={{ background: '#2563EB' }}>
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Session ── */}
      <section className="bg-[#03060d]">
        <div className="container py-12 md:py-16">
          <div
            className="rounded-[32px] border border-white/10 p-7 md:p-12"
            style={{
              background:
                'radial-gradient(70% 80% at 100% 0%, rgba(235,48,48,0.10) 0%, transparent 55%), radial-gradient(60% 80% at 100% 100%, rgba(17,139,172,0.10) 0%, transparent 55%), #070c15',
            }}
          >
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              {/* Left: title + when/where */}
              <div>
                <span className="uppercase" style={RED_LABEL}>
                  Session
                </span>
                <h2
                  className="display text-white mt-4"
                  style={{ fontSize: 'clamp(22px, 2.6vw, 34px)', fontWeight: 700, lineHeight: '112%', letterSpacing: '-0.01em' }}
                >
                  {s.session.title}
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-2 uppercase text-white/50" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em' }}>
                      <CalendarIcon className="w-4 h-4" />
                      When
                    </div>
                    <div className="display text-white mt-2.5" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.005em' }}>
                      {s.session.day}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-2 uppercase text-white/50" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em' }}>
                      <PinIcon className="w-4 h-4" />
                      Where
                    </div>
                    <div className="display text-white mt-2.5" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.005em' }}>
                      {s.session.where}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: description + actions */}
              <div className="flex flex-col">
                <div className="space-y-5 text-white/60" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 15, fontWeight: 400, lineHeight: '175%' }}>
                  <p>{s.session.description}</p>
                  <p>{s.session.description}</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-end">
                  <a href={s.session.calendarUrl} target="_blank" rel="noopener noreferrer" className={`${btnBase} gradient-cta`}>
                    <CalendarIcon className="w-4 h-4" />
                    Add to Calendar
                  </a>
                  <Link href="/agenda" className={`${btnBase} border border-white/40 hover:bg-white hover:text-[#03060d] transition-colors`}>
                    View Full Agenda
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More speakers (same category, auto from shared lineup) ── */}
      {recommended.length > 0 && (
      <section className="bg-[#03060d]">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12">
            <div>
              <span className="uppercase" style={RED_LABEL}>
                More Speakers
              </span>
              <h2 className="display uppercase text-white mt-3" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, lineHeight: '105%', letterSpacing: '-0.01em' }}>
                Also on the lineup.
              </h2>
            </div>
            <Link
              href="/speakers"
              className="btn-outline-white display inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 self-start"
            >
              See All Speakers
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((m) => (
              <Link
                key={m.name}
                href={`/speakers/${speakerSlug(m.name)}`}
                className="rounded-2xl bg-[#06101a]/60 p-4 md:p-6 border border-white/[0.06] hover:border-[var(--red)] transition-colors"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5">
                  <Image src={m.img} alt={m.name} fill className="object-cover" sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="mt-5 text-[18px] leading-none" title={m.country}>
                  {countryFlags(m.country)}
                </div>
                <div className="mt-2 text-[18px] font-bold text-white leading-tight">{m.name}</div>
                <div className="mt-1.5 text-[14px] text-white/55 leading-snug line-clamp-2" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
                  {m.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── Final CTA ── */}
      <section className="bg-[#03060d] py-12 md:py-16">
        <div className="container">
          <div
            className="rounded-[28px] py-14 md:py-20 px-6 text-center"
            style={{ background: 'linear-gradient(160deg, #114555 0%, #0a3142 35%, #06222d 70%, #051820 100%)' }}
          >
            <h2 className="display uppercase text-white text-[28px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.005em] max-w-[920px] mx-auto">
              One Room. Five Days. September.
            </h2>
            <p className="mt-5 max-w-[720px] mx-auto text-white/85" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '160%' }}>
              If the question is whether Shenzhen is worth the trip, the answer is yes. If the
              question is whether you should wait for 2027, the answer is no. Seats cap at 600.
            </p>
            <Link
              href="/#pricing"
              className="mt-8 display inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase gradient-cta text-white"
            >
              Get Tickets
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
