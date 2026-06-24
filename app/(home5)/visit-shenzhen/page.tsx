'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { ArrowUpRight, BackToTop, Footer, Nav } from '../_components/shared';

/* ────────────────────────────────── DATA ─────────────────────────────────── */

const PLAN_THE_TRIP = [
  { label: 'VISA', href: '#visa' },
  { label: 'FLIGHTS', href: '#flights' },
  { label: 'PAYMENTS', href: '#payments' },
  { label: 'CONNECTION', href: '#connection' },
  { label: 'LANGUAGE', href: '#language' },
  { label: 'PACKING & WEATHER', href: '#packing' },
];

const EXPLORE = [
  { label: 'NEIGHBORHOODS', href: '#neighborhoods' },
  { label: 'FOOD', href: '#food' },
  { label: 'NATURE & SIDE TRIPS', href: '#nature' },
];

const VISA_FREE_COUNTRIES = [
  { flag: '🇦🇩', name: 'Andorra' },
  { flag: '🇦🇬', name: 'Antigua and Barbuda' },
  { flag: '🇦🇱', name: 'Albania' },
  { flag: '🇦🇲', name: 'Armenia' },
  { flag: '🇦🇷', name: 'Argentina' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇹', name: 'Austria' },
  { flag: '🇦🇿', name: 'Azerbaijan' },
  { flag: '🇧🇸', name: 'Bahamas' },
  { flag: '🇧🇭', name: 'Bahrain' },
  { flag: '🇧🇧', name: 'Barbados' },
  { flag: '🇧🇾', name: 'Belarus' },
  { flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
  { flag: '🇧🇪', name: 'Belgium' },
  { flag: '🇧🇷', name: 'Brazil' },
  { flag: '🇧🇳', name: 'Brunei' },
  { flag: '🇧🇬', name: 'Bulgaria' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇨🇱', name: 'Chile' },
  { flag: '🇭🇷', name: 'Croatia' },
  { flag: '🇨🇾', name: 'Cyprus' },
  { flag: '🇩🇰', name: 'Denmark' },
  { flag: '🇩🇲', name: 'Dominica' },
  { flag: '🇪🇨', name: 'Ecuador' },
  { flag: '🇪🇪', name: 'Estonia' },
  { flag: '🇫🇮', name: 'Finland' },
  { flag: '🇫🇯', name: 'Fiji' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇬🇪', name: 'Georgia' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇬🇷', name: 'Greece' },
  { flag: '🇬🇩', name: 'Grenada' },
  { flag: '🇭🇺', name: 'Hungary' },
  { flag: '🇮🇸', name: 'Iceland' },
  { flag: '🇮🇪', name: 'Ireland' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇰🇿', name: 'Kazakhstan' },
  { flag: '🇰🇼', name: 'Kuwait' },
  { flag: '🇱🇻', name: 'Latvia' },
  { flag: '🇱🇮', name: 'Liechtenstein' },
  { flag: '🇱🇺', name: 'Luxembourg' },
  { flag: '🇲🇹', name: 'Malta' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇲🇻', name: 'Maldives' },
  { flag: '🇲🇺', name: 'Mauritius' },
  { flag: '🇲🇳', name: 'Mongolia' },
  { flag: '🇲🇨', name: 'Monaco' },
  { flag: '🇲🇪', name: 'Montenegro' },
  { flag: '🇳🇱', name: 'The Netherlands' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇲🇰', name: 'North Macedonia' },
  { flag: '🇳🇴', name: 'Norway' },
  { flag: '🇴🇲', name: 'Oman' },
  { flag: '🇵🇪', name: 'Peru' },
  { flag: '🇵🇱', name: 'Poland' },
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇶🇦', name: 'Qatar' },
  { flag: '🇷🇴', name: 'Romania' },
  { flag: '🇷🇺', name: 'Russia' },
  { flag: '🇼🇸', name: 'Samoa' },
  { flag: '🇸🇲', name: 'San Marino' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇷🇸', name: 'Serbia' },
  { flag: '🇸🇨', name: 'Seychelles' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇸🇧', name: 'Solomon Islands' },
  { flag: '🇸🇰', name: 'Slovakia' },
  { flag: '🇸🇮', name: 'Slovenia' },
  { flag: '🇰🇷', name: 'South Korea' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇸🇷', name: 'Suriname' },
  { flag: '🇸🇪', name: 'Sweden' },
  { flag: '🇨🇭', name: 'Switzerland' },
  { flag: '🇹🇴', name: 'Tonga' },
  { flag: '🇹🇭', name: 'Thailand' },
  { flag: '🇦🇪', name: 'United Arab Emirates' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇺🇾', name: 'Uruguay' },
  { flag: '🇺🇿', name: 'Uzbekistan' },
];

const TRANSIT_COUNTRIES = [
  { flag: '🇨🇿', name: 'Czech Republic' },
  { flag: '🇮🇩', name: 'Indonesia' },
  { flag: '🇱🇹', name: 'Lithuania' },
  { flag: '🇲🇽', name: 'Mexico' },
  { flag: '🇺🇦', name: 'Ukraine' },
  { flag: '🇺🇸', name: 'United States' },
];

/* ────────────────────────────────── HERO ─────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/visit-shenzhen-hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-80 md:opacity-70"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.55) 0%, rgba(3, 6, 13, 0.92) 60%, #03060D 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 13, 0.45) 0%, rgba(3, 6, 13, 0.85) 60%, #03060D 100%)',
          }}
        />
      </div>

      <div className="container pt-[200px] md:pt-[260px] lg:pt-[320px] pb-12 md:pb-20">
        {/* Date / venue / airport badge */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 md:mb-8">
          <span
            className="text-white/85"
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
            SZX (primary) or HKG (1 hour) or CAN (2 hours)
          </span>
        </div>

        {/* Headline */}
        <h1
          className="display uppercase text-[26px] leading-[140%] md:text-[48px] md:leading-[150%]"
          style={{
            color: '#F9F9F9',
            fontWeight: 600,
          }}
        >
          <span className="block md:inline">Your first time in Shenzhen.</span>
          <span className="hidden md:inline"> </span>
          <span className="block md:inline">Everything you need.</span>
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-[640px] text-[14px] md:text-[18px]"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 500,
            lineHeight: '170%',
          }}
        >
          Visa, flights, payments, connection, and what to see while you&apos;re here.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── TABLE OF CONTENTS ───────────────────────────── */

function TocColumn({ heading, items }: { heading: string; items: { label: string; href: string }[] }) {
  return (
    <div className="pl-6 border-l border-[#EB3030]">
      <div
        className="display uppercase mb-5"
        style={{
          color: '#F9F9F9',
          textAlign: 'left',
          fontSize: 14,
          fontWeight: 600,
          lineHeight: '28px',
        }}
      >
        {heading}
      </div>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {items.map((it) => (
          <li key={it.label} className="shrink-0">
            <Link
              href={it.href}
              className="display uppercase inline-flex items-center justify-center whitespace-nowrap hover:text-[#EB3030] hover:border-[#EB3030] transition-colors text-[8px] md:text-[12px] px-3 md:px-4 py-2 md:py-3"
              style={{
                color: '#F9F9F9',
                textAlign: 'center',
                fontWeight: 600,
                lineHeight: 'normal',
                borderRadius: 24,
                border: '1px solid rgba(249, 249, 249, 0.20)',
              }}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableOfContents() {
  return (
    <section className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          Table of Contents
        </div>
        <h2
          className="display uppercase mb-10 md:mb-14 whitespace-nowrap text-[16px] md:text-[24px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
            lineHeight: '120%',
          }}
        >
          What you need to know
        </h2>

        <div className="grid gap-10 md:gap-14 md:grid-cols-2">
          <TocColumn heading="Plan the Trip" items={PLAN_THE_TRIP} />
          <TocColumn heading="Explore" items={EXPLORE} />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────── VISA ─────────────────────────────────── */

function Visa() {
  return (
    <section id="visa" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <h2
          className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px] font-semibold md:font-bold"
          style={{
            color: '#F9F9F9',
          }}
        >
          <span className="block md:inline">Visa.</span>
          <span className="hidden md:inline"> </span>
          <span className="block md:inline">Most passports:</span>
          <span className="hidden md:inline"> </span>
          <span className="block md:inline">None needed.</span>
        </h2>
        <p
          className="mt-4 max-w-[680px]"
          style={{
            color: '#F9F9F9',
            opacity: 0.6,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '150%',
          }}
        >
          China allows visa-free entry for 80 passports, typically for 30 days. Exceptions include
          Mauritius which is granted a 60-day stay, and Albania, Armenia, Bosnia and Herzegovina,
          and San Marino that qualify for 90 days.
        </p>

        {/* Country card */}
        <div
          className="mt-10 md:mt-12 flex flex-col items-start gap-6 md:gap-8 self-stretch p-6 md:p-12"
          style={{
            borderRadius: 40,
            border: '1px solid rgba(249, 249, 249, 0.20)',
          }}
        >
          <div
            className="uppercase"
            style={{
              color: '#118BAC',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '0.7px',
            }}
          >
            Visa-Free Countries (80)
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-5 w-full">
            {VISA_FREE_COUNTRIES.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-3 text-[14px] md:text-[18px]"
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                <span className="text-[20px] leading-none" aria-hidden>
                  {c.flag}
                </span>
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Transit card: 240-hour visa-free transit countries */}
        <div
          className="mt-8 md:mt-10 flex flex-col items-start gap-6 md:gap-8 self-stretch p-6 md:p-12"
          style={{
            borderRadius: 40,
            border: '1px solid rgba(249, 249, 249, 0.20)',
          }}
        >
          <div
            className="uppercase"
            style={{
              color: '#118BAC',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '0.7px',
            }}
          >
            240-Hour Visa-Free Transit (6 Countries)
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 w-full">
            {TRANSIT_COUNTRIES.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-3 text-[14px] md:text-[18px]"
                style={{
                  color: '#F9F9F9',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                <span className="text-[20px] leading-none" aria-hidden>
                  {c.flag}
                </span>
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Transit rules & routing */}
        <div className="mt-12 md:mt-16 flex flex-col gap-8 md:gap-10">
          <h3
            className="display uppercase text-[20px] md:text-[26px] leading-[130%]"
            style={{ color: '#F9F9F9', fontWeight: 700 }}
          >
            10-Day Visa-Free Transit Rules &amp; Routing
          </h3>

          {/* Two rule cards */}
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {[
              {
                label: 'General Transit Requirements',
                body: 'Enter and exit China from the same province. You must hold a confirmed onward flight to a third country (different from your original departure country) within 240 hours (10 days).',
              },
              {
                label: 'The Hong Kong Routing Rule',
                body: 'You cannot use this visa-free transit if arriving from Hong Kong by land or ferry. You must fly into an eligible mainland airport (e.g., Guangzhou) and travel to Shenzhen. Your exit flight must depart from Guangdong province.',
              },
            ].map((r) => (
              <div
                key={r.label}
                className="flex flex-col gap-4 p-6 md:p-7"
                style={{
                  borderRadius: 24,
                  border: '1px solid rgba(249, 249, 249, 0.12)',
                  background: '#0D1017',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid place-items-center shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 12,
                      background: 'rgba(17, 139, 172, 0.15)',
                      color: '#5DAEDB',
                      fontSize: 18,
                    }}
                  >
                    ⓘ
                  </span>
                  <span
                    className="display uppercase"
                    style={{
                      color: '#F9F9F9',
                      fontFamily: 'Unbounded, var(--font-unbounded), system-ui, sans-serif',
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: '130%',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {r.label}
                  </span>
                </div>
                <p
                  style={{
                    color: '#F9F9F9',
                    opacity: 0.7,
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 15,
                    fontWeight: 500,
                    lineHeight: '175%',
                  }}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          {/* Example itineraries */}
          <div className="flex flex-col gap-5">
            <h4
              className="display uppercase text-[16px] md:text-[18px]"
              style={{ color: '#F9F9F9', fontWeight: 700, letterSpacing: '0.02em' }}
            >
              Example Itineraries
            </h4>
            <div className="grid gap-4 md:gap-5 md:grid-cols-2">
              {[
                {
                  ok: true,
                  route: 'London ➔ Shenzhen ➔ Singapore',
                  note: 'Arrives and departs from the same province, continuing to a valid third country.',
                },
                {
                  ok: false,
                  route: 'London ➔ Shenzhen ➔ London',
                  note: 'Does not continue to a third country; returns to the country of origin.',
                },
                {
                  ok: false,
                  route: 'London ➔ Hong Kong ➔ Shenzhen (by land or ferry) ➔ Singapore',
                  note: 'You cannot enter mainland China via a land or ferry border crossing under this specific air transit scheme.',
                },
                {
                  ok: true,
                  route: 'London ➔ Hong Kong ➔ Guangzhou (by flight) ➔ Shenzhen ➔ Singapore',
                  note: 'Enters mainland China by flight, stays within Guangdong province, and flies out to a third country.',
                },
              ].map((it) => {
                const accent = it.ok ? '#2BB673' : '#EB3030';
                const segments = it.route.split('➔').map((s) => s.trim());
                return (
                  <div
                    key={it.route}
                    className="flex flex-col gap-4 p-6 md:p-7"
                    style={{
                      borderRadius: 24,
                      border: `1px solid ${it.ok ? 'rgba(43, 182, 115, 0.35)' : 'rgba(235, 48, 48, 0.35)'}`,
                      background: it.ok ? 'rgba(43, 182, 115, 0.06)' : 'rgba(235, 48, 48, 0.05)',
                    }}
                  >
                    <span
                      className="inline-flex items-center gap-2 self-start uppercase"
                      style={{
                        padding: '5px 12px',
                        borderRadius: 1000,
                        background: accent,
                        color: '#03060d',
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                      }}
                    >
                      <span aria-hidden>{it.ok ? '✓' : '✕'}</span>
                      {it.ok ? 'Valid' : 'Invalid'}
                    </span>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                      {segments.map((seg, i) => (
                        <span key={`${seg}-${i}`} className="inline-flex items-center gap-2">
                          <span
                            style={{
                              padding: '4px 12px',
                              borderRadius: 1000,
                              background: 'rgba(255, 255, 255, 0.06)',
                              border: '1px solid rgba(255, 255, 255, 0.10)',
                              color: '#F9F9F9',
                              fontFamily: 'General Sans, system-ui, sans-serif',
                              fontSize: 13,
                              fontWeight: 600,
                              lineHeight: '150%',
                            }}
                          >
                            {seg}
                          </span>
                          {i < segments.length - 1 && (
                            <span aria-hidden style={{ color: accent, fontSize: 14, fontWeight: 700 }}>
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    <p
                      style={{
                        color: '#F9F9F9',
                        opacity: 0.7,
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: '165%',
                      }}
                    >
                      {it.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Below the card: two callouts */}
        <div className="mt-10 md:mt-14 grid gap-8 md:gap-12 md:grid-cols-2">
          <div
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 self-stretch"
            style={{
              paddingLeft: 24,
              borderLeft: '2px solid #EB3030',
            }}
          >
            <div
              className="display uppercase shrink-0"
              style={{
                color: '#F9F9F9',
                fontFamily: 'Unbounded, var(--font-unbounded), system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                lineHeight: '160%',
              }}
            >
              Not on the list?
            </div>
            <div className="flex flex-col gap-3">
              <p
                style={{
                  color: '#F9F9F9',
                  opacity: 0.8,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '160%',
                }}
              >
                You will need to apply for a visa. We recommend a{' '}
                <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>Business Visa (M)</strong>, or
                a <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>Tourist Visa (L)</strong> if
                you plan to travel before or after the conference. Apply 1 to 2 months before your
                trip. Consult your local travel agency or government websites for details.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 self-stretch"
            style={{
              paddingLeft: 24,
              borderLeft: '2px solid #EB3030',
            }}
          >
            <div
              className="display uppercase shrink-0"
              style={{
                color: '#F9F9F9',
                fontFamily: 'Unbounded, var(--font-unbounded), system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                lineHeight: '160%',
              }}
            >
              Need an invitation letter?
            </div>
            <div className="flex flex-col gap-4 items-start">
              <p
                style={{
                  color: '#F9F9F9',
                  opacity: 0.8,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '160%',
                }}
              >
                We issue business invitation letters for visa applications that require one.
                3 business days turnaround.
              </p>
              <Link
                href="/#contact"
                className="btn-outline-white display flex w-full md:w-auto md:inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase"
              >
                Request Letter
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── FLIGHTS ─────────────────────────────────── */

function AirportCard({
  img,
  heading,
  body,
  legLabel,
  legBody,
  badge,
}: {
  img: string;
  heading: string;
  body: string;
  legLabel: string;
  legBody: string;
  badge?: string;
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-7">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[16px]">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        {badge ? (
          <span
            className="absolute top-3 left-3 display uppercase rounded-full"
            style={{
              background: '#118BAC',
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.06em',
              lineHeight: '150%',
              padding: '6px 14px',
            }}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <h3
        className="display uppercase mt-6 md:mt-7 text-[18px] md:text-[20px] leading-[140%] md:leading-[160%]"
        style={{
          color: '#F9F9F9',
          fontWeight: 700,
        }}
      >
        {heading}
      </h3>
      <p
        className="mt-4 text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
        style={{
          color: '#F9F9F9',
          opacity: 0.7,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
          // MOBILE_BODY_16
        }}
      >
        {body}
      </p>

      <div
        className="mt-6 flex flex-col items-start self-stretch"
        style={{
          paddingLeft: 16,
          gap: 4,
          borderLeft: '2px solid #EB3030',
        }}
      >
        <div
          className="display uppercase"
          style={{
            color: '#F9F9F9',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '160%',
          }}
        >
          {legLabel}
        </div>
        <p
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '160%',
          }}
        >
          {legBody}
        </p>
      </div>
    </div>
  );
}

function Flights() {
  return (
    <section id="flights" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          Flights
        </div>
        <h2
          className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          Three Airports, Pick the Best Rate
        </h2>
        <p
          className="mt-4 max-w-[820px]"
          style={{
            color: '#F9F9F9',
            opacity: 0.6,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '150%',
          }}
        >
          Shenzhen is incredibly well-connected. You have three major airport options to reach the
          conference venue, we recommend comparing all three to find the cheapest fare.
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-3">
          <AirportCard
            img="/assets/airport-szx.jpg"
            heading="Shenzhen Bao'an International Airport (SZX)"
            badge="Most convenient option"
            body="Shenzhen's main airport features direct flights from major global hubs. Ideal for the quickest commute directly to the venue."
            legLabel="To St. Regis Shenzhen:"
            legBody="40 minutes by taxi, or 50 minutes via Metro Line 11."
          />
          <AirportCard
            img="/assets/airport-hkg.jpg"
            heading="Hong Kong International Airport (HKG)"
            badge="Cheapest for Europe & America"
            body="A popular international route just 30 km away. Connects seamlessly to Shenzhen via a direct, 15-minute high-speed rail."
            legLabel="To St. Regis Shenzhen:"
            legBody="1.5 hours total (via high-speed train, ferry, or business van)."
          />
          <AirportCard
            img="/assets/airport-can.jpg"
            heading="Guangzhou Baiyun International Airport (CAN)"
            badge="Great backup for flight deals"
            body="A massive aviation hub often featuring the most competitive fares. Slightly further out, but easily accessible via transit."
            legLabel="To St. Regis Shenzhen:"
            legBody="2 hours total (via high-speed rail, plus a taxi or DiDi)."
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── PAYMENTS ────────────────────────────────── */

function AlipayMark() {
  return (
    <div className="flex items-center gap-3">
      <span
        className="grid place-items-center w-8 h-8 rounded-md text-white"
        style={{
          background: '#1677FF',
          fontFamily: 'PingFang SC, system-ui, sans-serif',
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1,
        }}
        aria-hidden
      >
        支
      </span>
      <span
        className="text-white"
        style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '-0.01em',
        }}
      >
        Alipay
      </span>
    </div>
  );
}

function WeChatPayMark() {
  return (
    <div className="flex items-center gap-3">
      <span
        className="grid place-items-center w-8 h-8 rounded-full text-white"
        style={{
          background: '#07C160',
          fontSize: 16,
          lineHeight: 1,
        }}
        aria-hidden
      >
        💬
      </span>
      <div className="leading-tight">
        <div
          className="text-white"
          style={{
            fontFamily: 'PingFang SC, system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: '120%',
          }}
        >
          微信支付
        </div>
        <div
          className="text-white/80"
          style={{
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            lineHeight: '120%',
          }}
        >
          WeChat Pay
        </div>
      </div>
    </div>
  );
}

function PaymentAppCard({
  mark,
  body,
  buttonLabel,
  buttonHref,
}: {
  mark: React.ReactNode;
  body: React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  const buttonStyle = {
    padding: '12px 32px',
    gap: 12,
    borderRadius: 1000,
    border: '1px solid #F9F9F9',
    color: '#F9F9F9',
    textAlign: 'center' as const,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '28px',
  };
  return (
    <div className="payment-card rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-7 transition-colors duration-200">
      <div>{mark}</div>
      <p
        className="mt-4 text-white/75"
        style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
        }}
      >
        {body}
      </p>
      {buttonLabel && buttonHref ? (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-white display mt-6 flex justify-center items-center self-stretch uppercase"
          style={buttonStyle}
        >
          {buttonLabel}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      ) : null}
    </div>
  );
}

function MiniInfoCard({ heading, body, icon }: { heading: string; body: string; icon?: string }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-8">
      <div className="flex items-center gap-3">
        {icon ? (
          <span
            aria-hidden
            className="grid place-items-center shrink-0"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: 'rgba(17, 139, 172, 0.15)',
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            {icon}
          </span>
        ) : null}
        <h3
          className="display uppercase text-[18px] md:text-[20px] leading-[140%] md:leading-[160%]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          {heading}
        </h3>
      </div>
      <p
        className="mt-4 text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
        style={{
          color: '#F9F9F9',
          opacity: 0.7,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
          // MOBILE_BODY_16
        }}
      >
        {body}
      </p>
    </div>
  );
}

function Payments() {
  return (
    <section id="payments" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="uppercase mb-4 text-[14px] md:text-[18px] tracking-[0.7px] md:tracking-[0.9px]"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          Payments
        </div>
        <h2
          className="display uppercase text-[28px] md:text-[36px] leading-[120%]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          <span className="block">China is cashless</span>
          <span className="block">Set up before you fly</span>
        </h2>
        <p
          className="mt-4 max-w-[820px] text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 400,
            // MOBILE_BODY_16
          }}
        >
          The local currency is the Chinese Yuan (CNY/RMB). Cash is rare. Two apps handle almost
          everything:
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          <PaymentAppCard
            mark={<AlipayMark />}
            body={
              <>
                The most foreigner-friendly option. Links to major international cards. Set it up
                before arriving via{' '}
                <a
                  href="https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-[var(--red)]"
                >
                  Google Play
                </a>{' '}
                or{' '}
                <a
                  href="https://apps.apple.com/us/app/alipay-simplify-your-life/id333206289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-[var(--red)]"
                >
                  App Store
                </a>{' '}
                (tutorial{' '}
                <a
                  href="https://youtu.be/dleZ1EaHgog?si=WqUn7O0SvYJ3jQli&t=70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-[var(--red)]"
                >
                  here
                </a>
                ).
              </>
            }
          />
          <PaymentAppCard
            mark={<WeChatPayMark />}
            body={
              <>
                Built into China&apos;s main messaging app and accepts international cards. Download
                WeChat{' '}
                <a
                  href="https://www.wechat.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-[var(--red)]"
                >
                  here
                </a>{' '}
                and follow{' '}
                <a
                  href="https://youtu.be/9zK4ZElfstc?si=4OjO8up9o63QHjjT&t=47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-[var(--red)]"
                >
                  this tutorial
                </a>{' '}
                for setup.
              </>
            }
          />
        </div>

        <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 md:grid-cols-2">
          <MiniInfoCard
            heading="Credit Cards"
            icon="💳"
            body="Works at major hotels (like The St. Regis) and upscale malls. Unlikely to work for taxis or daily dining."
          />
          <MiniInfoCard
            heading="ATMs"
            icon="🏧"
            body="Available at airports and major banks. Your home card should work. Keep ~¥500 in cash for emergencies."
          />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────── CONNECTION ───────────────────────────────── */

function StepCard({
  num,
  heading,
  body,
  buttonLabel,
  buttonHref,
}: {
  num: string;
  heading: string;
  body: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <div
      className="rounded-[24px] p-7 md:p-9"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(93, 174, 219, 0.4)',
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <h3
          className="display uppercase"
          style={{
            color: '#F9F9F9',
            fontSize: 20,
            fontWeight: 700,
            lineHeight: '120%',
          }}
        >
          {heading}
        </h3>
        <div
          className="display uppercase shrink-0"
          style={{
            color: '#118BAC',
            fontSize: 20,
            fontWeight: 700,
            lineHeight: '120%',
          }}
        >
          {num}
        </div>
      </div>
      <p
        className="mt-4"
        style={{
          color: '#F9F9F9',
          opacity: 0.7,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '170%',
        }}
      >
        {body}
      </p>
      {buttonLabel && buttonHref && (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-white display mt-6 flex justify-center items-center self-stretch uppercase"
          style={{
            padding: '12px 32px',
            gap: 12,
            borderRadius: 1000,
            border: '1px solid #F9F9F9',
            color: '#F9F9F9',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '28px',
          }}
        >
          {buttonLabel}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

function Connection() {
  return (
    <section id="connection" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-start">
          {/* Left column */}
          <div>
            <div
              className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
              style={{
                color: '#EB3030',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontWeight: 700,
                lineHeight: '150%',
              }}
            >
              Connection
            </div>
            <h2
              className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
            >
              <span className="block">Connect before</span>
              <span className="block">you land</span>
            </h2>
            <p
              className="mt-5 max-w-[520px]"
              style={{
                color: '#F9F9F9',
                opacity: 0.6,
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '150%',
              }}
            >
              Western platforms have limited access in China. A{' '}
              <strong style={{ fontWeight: 600 }}>paid connection service (VPN)</strong> is required
              for reliable access.
            </p>

            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px] mt-8 max-w-[560px]">
              <Image
                src="/assets/connect-before-land.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right column: steps */}
          <div className="flex flex-col gap-6 md:gap-8">
            <StepCard
              num="01"
              heading="Before you fly"
              body="Register for WeChat using your international number for seamless local communication."
            />
            <StepCard
              num="02"
              heading="On arrival"
              body="International roaming is expensive. Get a ~$20 local eSIM (e.g., Airalo) for 7 days of data."
            />
            <StepCard
              num="03"
              heading="At the venue"
              body="St. Regis provides conference Wi-Fi with consistent international access. No VPN is needed during sessions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── LANGUAGE ────────────────────────────────── */

function TranslateCard({
  heading,
  body,
  buttons,
}: {
  heading: string;
  body: string;
  buttons?: { label: string; href: string }[];
}) {
  return (
    <div
      className="flex flex-col items-start self-stretch"
      style={{
        padding: '28px 24px',
        gap: 24,
        borderRadius: 32,
        border: '1px solid #118BAC',
        background: '#0D1017',
        boxShadow: '0 12px 20px 0 rgba(0, 0, 0, 0.30)',
      }}
    >
      <h3
        className="display uppercase text-[18px] md:text-[20px] leading-[140%] md:leading-[160%]"
        style={{
          color: '#F9F9F9',
          fontWeight: 700,
        }}
      >
        {heading}
      </h3>
      <p
        className="text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
        style={{
          color: '#F9F9F9',
          opacity: 0.7,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
        }}
      >
        {body}
      </p>
      {buttons && buttons.length > 0 ? (
        <div className="flex flex-col gap-3 self-stretch">
          {buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white display flex justify-center items-center self-stretch uppercase"
              style={{
                padding: '12px 32px',
                gap: 12,
                borderRadius: 1000,
                border: '1px solid #F9F9F9',
                color: '#F9F9F9',
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 600,
                lineHeight: '28px',
              }}
            >
              {b.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Language() {
  return (
    <section id="language" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:gap-12 md:grid-cols-[7fr_5fr] items-start">
          <div>
            <div
              className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
              style={{
                color: '#EB3030',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontWeight: 700,
                lineHeight: '150%',
              }}
            >
              Language
            </div>
            <h2
              className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
            >
              <span className="block">English inside the venue</span>
              <span className="block">Minimal outside</span>
            </h2>
          </div>

          <p
            className="md:pt-2 md:text-right text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
            style={{
              color: '#F9F9F9',
              opacity: 0.8,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 400,
              // MOBILE_BODY_16
            }}
          >
            All conference sessions are in English (live EN &lt;&gt; CN interpretation provided on
            Days 3 and 4).
          </p>
        </div>

        <div
          className="mt-10 md:mt-14 flex flex-col items-start self-stretch max-w-[920px]"
          style={{
            padding: '8px 32px',
            gap: 16,
            borderLeft: '2px solid #118BAC',
          }}
        >
          <div
            className="uppercase"
            style={{
              color: '#118BAC',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: '0.7px',
            }}
          >
            Communication with staff
          </div>
          <p
            style={{
              color: '#F9F9F9',
              opacity: 0.7,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '150%',
            }}
          >
            Hotels speak English, taxis and smaller restaurants don&apos;t. Rely on these
            translation apps:
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
          <TranslateCard
            heading="Apple Translate"
            body="Download Chinese for offline, connection-free use."
          />
          <TranslateCard
            heading="Baidu Translate or DeepL"
            body="Both work seamlessly on your phone."
          />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────── NEIGHBORHOODS ────────────────────────────── */

const DISTRICTS = [
  {
    name: 'Nanshan',
    img: '/assets/district-nanshan.png',
    body: "Shenzhen's tech hub and Silicon Valley. Features Tencent HQ, DJI flagship store, sleek sky bars, and the Shenzhen Bay promenade. Ideal for networking with a tech-centric crowd.",
  },
  {
    name: 'Futian',
    img: '/assets/district-futian.jpg',
    body: "The city's modern financial center. Central, highly walkable, and hyper-connected by the metro. Perfect for business meetings, international dining, and premium shopping.",
  },
  {
    name: 'Luohu',
    img: '/assets/district-luohu.jpg',
    body: 'The historical core and home to our main conference venue, The St. Regis Shenzhen. Explore the bustling Dongmen shopping street, hunt for bargains, or cross into Hong Kong.',
  },
  {
    name: 'Yantian',
    img: '/assets/district-yantian.png',
    body: "A scenic 40-minute drive from the city center. Famous for lush trails and beaches. This coastal escape is where you'll find our VIP Networking venue, the MGM Shenzhen.",
  },
];

function DistrictCard({ name, img, body }: { name: string; img: string; body: string }) {
  return (
    <div className="payment-card rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-7 transition-colors duration-200 h-full flex flex-col">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px]">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <h3
        className="display uppercase mt-6 md:mt-7 text-[18px] md:text-[20px] leading-[140%] md:leading-[160%]"
        style={{
          color: '#F9F9F9',
          fontWeight: 700,
        }}
      >
        {name}
      </h3>
      <p
        className="mt-4 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]"
        style={{
          color: '#F9F9F9',
          opacity: 0.7,
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
        }}
      >
        {body}
      </p>
    </div>
  );
}

function Neighborhoods() {
  return (
    <section id="neighborhoods" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          Neighborhoods
        </div>
        <h2
          className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          Four main districts. Each a different city.
        </h2>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-2 auto-rows-fr">
          {DISTRICTS.map((d) => (
            <DistrictCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────── FOOD ─────────────────────────────────── */

const MEALS = [
  {
    name: 'Cantonese Dim Sum (广式早茶)',
    img: '/assets/food-dimsum.jpg',
    body: `The Guangdong classic. Shenzhen is in Guangdong province, making it a holy ground for traditional "morning tea." Sit at a big round table and order mountains of shrimp dumplings (har gow) and BBQ pork buns. You'll order exactly how the locals do: by scanning a QR code on your table via WeChat.`,
    whereLabel: 'Where to eat it:',
    where: 'Fanlou (蘩楼) or Diandude (点都德) for a bustling, ornate teahouse atmosphere and incredible food.',
  },
  {
    name: 'Coconut Chicken Hot Pot (椰子鸡)',
    img: '/assets/food-coconut-chicken.jpg',
    body: `The dish that defines modern Shenzhen. Invented right here in the city, the broth is made entirely from fresh, sweet coconut water. You boil tender chicken and bamboo fungus in the clear broth, then dip the meat in a mix of soy sauce, crushed sand ginger, fresh chili, and calamansi lime. It is light, sweet, and incredibly popular.`,
    whereLabel: 'Where to eat it:',
    where: 'Runyuan Siji (润园四季) or Siji Yelin (四季椰林) are the legendary local chains.',
  },
  {
    name: 'Chaoshan Beef Hot Pot (潮汕牛肉火锅)',
    img: '/assets/food-chaoshan-beef.jpg',
    body: `The ultimate meat-lover's dinner. Shenzhen has a massive population from the nearby Chaoshan region, and they brought their legendary beef hot pot with them. The focus here is entirely on the meat: freshly butchered, never frozen, and sliced incredibly thin. You dip the cuts into a clear, savory broth for exactly 8 to 12 seconds, then coat them in rich shacha (barbecue/satay) sauce.`,
    whereLabel: 'Where to eat it:',
    where: 'Baheli Haiji (八合里海记) is the undisputed king of Chaoshan hot pot in Shenzhen.',
  },
  {
    name: 'Sichuan Spicy & Sour Fish (酸菜鱼)',
    img: '/assets/food-sichuan-fish.png',
    body: `The spicy, addictive crowd favorite. This Sichuan dish has taken Shenzhen by storm. It features a massive bowl of incredibly tender, bone-free fish slices swimming in a rich broth made from pickled mustard greens (suancai), dried chilies, and numbing Sichuan peppercorns. It is sour, spicy, and fiercely appetizing.`,
    whereLabel: 'Where to eat it:',
    where: 'Tai Er (太二) is famous city-wide for this exact dish (and for their strict "no tables larger than four people" rule to keep the dining experience fast and focused).',
  },
  {
    name: 'Modern Tea & Bakeries (新式茶饮与烘焙)',
    img: '/assets/food-tea-bakeries.png',
    body: `The fuel of China's tech capital. Shenzhen is the epicenter of China's modern dessert and tea boom. You will see young professionals constantly holding elaborate aesthetic drinks or queuing up for freshly baked pastries.`,
    whereLabel: 'What to try:',
    where: `Grab a "Meat Floss Small Cake" (肉松小贝) from Bao Shi Fu (鲍师傅), a savory-sweet sponge cake coated in mayo and pork floss. For drinks, skip the basic bubble tea and try A Ma Handmake (阿嬷手作) for rich mochi drinks, or tea'stone for stunning, high-end traditional Chinese teas served with modern flair.`,
  },
];

function Food() {
  const [active, setActive] = useState(0);
  const meal = MEALS[active];
  const touchX = useRef<number | null>(null);

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + MEALS.length) % MEALS.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section id="food" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          Food
        </div>
        <h2
          className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          What Everyone is Actually Eating in Shenzhen
        </h2>
        <p
          className="mt-4 max-w-[820px] text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          As a melting pot, Shenzhen gathers the absolute best flavors from across China. From
          Cantonese morning tea to fiery Sichuan dishes, here is what to eat and where to find it.
        </p>

        <div
          className="mt-10 md:mt-14 rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-10"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="grid gap-6 md:gap-12 md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-[16px] bg-white/5">
              <Image
                key={meal.img}
                src={meal.img}
                alt={meal.name}
                fill
                className="object-cover animate-[fadeIn_0.4s_ease]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <span
                className="display"
                style={{
                  color: '#5DAEDB',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                {String(active + 1).padStart(2, '0')} / {String(MEALS.length).padStart(2, '0')}
              </span>
              <h3
                className="display uppercase mt-3 text-[22px] md:text-[28px] leading-[120%]"
                style={{ color: '#F9F9F9', fontWeight: 700, letterSpacing: '0.02em' }}
              >
                {meal.name}
              </h3>
              <p
                className="mt-5 text-[15px] md:text-[16px] leading-[175%]"
                style={{
                  color: '#F9F9F9',
                  opacity: 0.75,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {meal.body}
              </p>
              <p
                className="mt-4 text-[15px] md:text-[16px] leading-[160%]"
                style={{
                  color: '#F9F9F9',
                  opacity: 0.75,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                <strong style={{ color: '#5DAEDB', fontWeight: 600 }}>{meal.whereLabel}</strong>{' '}
                {meal.where}
              </p>

              {/* Controls */}
              <div className="mt-8 flex items-center gap-5">
                <button
                  type="button"
                  aria-label="Previous dish"
                  onClick={() => go(-1)}
                  className="grid place-items-center shrink-0 hover:bg-white/5 transition-colors"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 9999,
                    border: '1px solid rgba(249, 249, 249, 0.20)',
                    background: 'transparent',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/figma-assets/arrow-left.svg" alt="" className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next dish"
                  onClick={() => go(1)}
                  className="grid place-items-center shrink-0 hover:bg-white/5 transition-colors"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 9999,
                    border: '1px solid rgba(249, 249, 249, 0.20)',
                    background: 'transparent',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/figma-assets/arrow-right.svg" alt="" className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2 ml-1">
                  {MEALS.map((m, i) => (
                    <button
                      key={m.name}
                      type="button"
                      aria-label={`Go to ${m.name}`}
                      onClick={() => setActive(i)}
                      className="transition-all"
                      style={{
                        height: 8,
                        width: i === active ? 24 : 8,
                        borderRadius: 9999,
                        background: i === active ? '#118BAC' : 'rgba(249, 249, 249, 0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── NATURE & SIDE TRIPS ────────────────────────────── */

const SIDE_TRIPS = [
  {
    name: 'Dapeng Peninsula (大鹏半岛)',
    img: '/assets/trip-dapeng.jpg',
    body: `Beautifully rugged sea cliffs and white-sand beaches, known as Shenzhen's "Cape of Good Hope".`,
    getting: '50-minute drive.',
  },
  {
    name: 'Wutong Mountain (梧桐山)',
    img: '/assets/trip-wutong.jpg',
    body: "The city's tallest peak offers a challenging half-day hike with panoramic views of Shenzhen Bay and Hong Kong.",
    getting: '25-minute drive.',
  },
  {
    name: 'Nantou Ancient City (南头古城)',
    img: '/assets/trip-nantou.jpg',
    body: 'Walk through Ming Dynasty gates into a maze of 1,700-year-old traditional alleys filled with trendy cafés and boutiques.',
    getting: '40-minute drive or Metro Line 12.',
  },
  {
    name: 'Fairy Lake Botanical Garden (仙湖植物园)',
    img: '/assets/trip-fairy-lake.jpg',
    body: 'A misty lake sanctuary featuring bonsai gardens, a petrified forest, and the magnificent Hongfa Temple.',
    getting: '15-minute taxi or Metro Line 2.',
  },
  {
    name: 'Dafen Oil Painting Village (大芬油画村)',
    img: '/assets/trip-dafen.jpg',
    body: 'Formerly a replica art factory, now a quirky labyrinth of original studios, galleries, and coffee shops.',
    getting: '20-minute drive or short metro ride.',
  },
];

function SideTripCard({
  name,
  img,
  body,
  getting,
}: {
  name: string;
  img: string;
  body: string;
  getting: string;
}) {
  return (
    <div
      className="payment-card snap-start shrink-0 flex flex-col items-start"
      style={{
        width: 320,
        padding: 24,
        gap: 32,
        borderRadius: 24,
        border: '1px solid rgba(249, 249, 249, 0.15)',
      }}
    >
      <div
        className="relative self-stretch overflow-hidden"
        style={{
          height: 240,
          borderRadius: 16,
          background: '#d3d3d3',
        }}
      >
        <Image
          src={img}
          alt=""
          fill
          className="object-cover object-center"
          sizes="320px"
        />
      </div>
      <h3
        className="display uppercase text-[18px] md:text-[20px] leading-[140%] md:leading-[160%]"
        style={{
          color: '#F9F9F9',
          fontWeight: 700,
        }}
      >
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        <p
          className="text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
          style={{
            color: '#F9F9F9',
            opacity: 0.7,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          {body}
        </p>
        <p
          className="text-[14px] md:text-[16px] leading-[150%] md:leading-[160%]"
          style={{
            color: '#F9F9F9',
            opacity: 0.7,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          <strong style={{ color: '#5DAEDB', fontWeight: 600 }}>Getting there:</strong> {getting}
        </p>
      </div>
    </div>
  );
}

function NatureSideTrips() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>('[data-carousel-item]');
    const cardWidth = first ? first.getBoundingClientRect().width : 320;
    const gap = 24;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id="nature" className="bg-[#03060d]">
      <span id="side-trips" className="block -mt-24 pt-24" aria-hidden />
      <div className="container pb-16 md:pb-24">
        <div>
          <div
            className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
            style={{
              color: '#EB3030',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 700,
              lineHeight: '150%',
            }}
          >
            Nature &amp; Side Trips
          </div>
          <h2
            className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
            style={{
              color: '#F9F9F9',
              fontWeight: 700,
            }}
          >
            Beyond the city
          </h2>
          <p
            className="mt-4 max-w-[680px] text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
            style={{
              color: '#F9F9F9',
              opacity: 0.8,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Discover natural escapes and historic cultural hubs just outside the urban center.
          </p>
        </div>

        <div
          ref={trackRef}
          className="mt-10 md:mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 no-scrollbar"
          style={{ scrollPaddingLeft: '1rem' }}
        >
          {SIDE_TRIPS.map((t) => (
            <div key={t.name} data-carousel-item>
              <SideTripCard {...t} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="grid place-items-center hover:bg-white/5 transition-colors"
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              border: '1px solid rgba(249, 249, 249, 0.20)',
              background: 'transparent',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma-assets/arrow-left.svg" alt="" className="w-6 h-6" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="grid place-items-center hover:bg-white/5 transition-colors"
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              border: '1px solid rgba(249, 249, 249, 0.20)',
              background: 'transparent',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma-assets/arrow-right.svg" alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PACKING & WEATHER ────────────────────────────── */

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 1L6 12L1 7"
        stroke="#F9F9F9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIconSmall({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18"
        stroke="#F9F9F9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#F9F9F9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PackingWeather() {
  return (
    <section id="packing" className="bg-[#03060d]">
      <div className="container pb-16 md:pb-24">
        <div
          className="uppercase text-[12px] md:text-[14px] tracking-[0.6px] md:tracking-[0.7px] mb-4"
          style={{
            color: '#EB3030',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 700,
            lineHeight: '150%',
          }}
        >
          Packing &amp; Weather
        </div>
        <h2
          className="display uppercase text-[28px] md:text-[36px] leading-[120%] md:leading-[40px]"
          style={{
            color: '#F9F9F9',
            fontWeight: 700,
          }}
        >
          Mid-September in Shenzhen
        </h2>
        <p
          className="mt-4 max-w-[920px] text-[14px] md:text-[16px] leading-[170%] md:leading-[180%]"
          style={{
            color: '#F9F9F9',
            opacity: 0.8,
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontWeight: 400,
            // MOBILE_BODY_16
          }}
        >
          Late summer. <strong className="text-white font-semibold">28-33°C daytime.</strong>{' '}
          <strong className="text-white font-semibold">24-28°C evening.</strong>{' '}
          <strong className="text-white font-semibold">70-85% humidity.</strong> Typhoon
          season is tapering off, with occasional short rain. Rarely a full day washout.
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          {/* PACK card */}
          <div
            className="rounded-[24px] p-7 md:p-9"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(93, 174, 219, 0.45)',
            }}
          >
            <h3
              className="display uppercase mb-6"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 26px)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#5DAEDB',
              }}
            >
              Pack
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                'Light layers; A/C indoors is strong',
                'Compact umbrella',
                "Comfortable walking shoes (you'll average 15k steps/day)",
                'Power adapter (Type A/C/I, 220V)',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon className="shrink-0" />
                  <span
                    style={{
                      color: '#F9F9F9',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: '24px',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SKIP card */}
          <div className="rounded-[24px] p-7 md:p-9 border border-white/12 bg-white/[0.02]">
            <h3
              className="display uppercase mb-6"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 26px)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#EB3030',
              }}
            >
              Skip
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                'Heavy jackets',
                'Dress shoes beyond one pair (tech casual works everywhere, even at VIP night)',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <XIconSmall className="shrink-0" />
                  <span
                    style={{
                      color: '#F9F9F9',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: '24px',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
          className="rounded-[28px] px-6 py-16 md:py-24 text-left"
          style={{
            background:
              'linear-gradient(180deg, #0d3a4d 0%, #06222d 60%, #03161e 100%)',
          }}
        >
          <h2
            className="display uppercase max-w-[1000px]"
            style={{
              color: '#F9F9F9',
              textAlign: 'left',
              fontSize: 28,
              fontWeight: 500,
              lineHeight: '140%',
            }}
          >
            Questions we haven&apos;t answered?
          </h2>
          <p
            className="mt-5 max-w-[640px] text-left"
            style={{
              color: '#F9F9F9',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '160%',
            }}
          >
            Use the contact form. We read everything and reply within 48 hours.
          </p>
          <Link
            href="/#contact"
            className="display gradient-cta mt-8 flex w-full md:w-auto md:inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── PAGE ───────────────────────────────────── */

export default function VisitShenzhenPage() {
  return (
    <main className="home5-root">
      <Nav linkBase="/" current="VISIT SHENZHEN" />
      <Hero />
      <TableOfContents />
      <Visa />
      <Flights />
      <Payments />
      <Connection />
      <Language />
      <Neighborhoods />
      <Food />
      <NatureSideTrips />
      <PackingWeather />
      <FinalCta />
      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
