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
];

const EXPLORE = [
  { label: 'NEIGHBORHOODS', href: '#neighborhoods' },
  { label: 'FOOD', href: '#food' },
  { label: 'NATURE', href: '#nature' },
  { label: 'SIDE TRIPS', href: '#side-trips' },
];

const VISA_FREE_COUNTRIES = [
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇹', name: 'Austria' },
  { flag: '🇧🇪', name: 'Belgium' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇩🇰', name: 'Denmark' },
  { flag: '🇫🇮', name: 'Finland' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇮🇪', name: 'Ireland' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇳🇴', name: 'Norway' },
  { flag: '🇵🇱', name: 'Poland' },
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇸🇪', name: 'Sweden' },
  { flag: '🇨🇭', name: 'Switzerland' },
  { flag: '🇬🇧', name: 'United Kingdom' },
];

/* ────────────────────────────────── HERO ─────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#03060d]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/visit-hero.webp"
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
            SZX (primary) or HKG (30 min)
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
          China offers 30-day visa-free entry for passports from 54+ countries.
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
            Visa-Free Countries
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
                You likely qualify under China&apos;s{' '}
                <strong style={{ color: '#F9F9F9', fontWeight: 600 }}>
                  240-hour visa-free transit policy
                </strong>{' '}
                - legal as long as you transit through Shenzhen to a third country.
              </p>
              <p
                className="italic"
                style={{
                  color: '#F9F9F9',
                  opacity: 0.55,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '150%',
                }}
              >
                e.g. home → Shenzhen → another country → home
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
}: {
  img: string;
  heading: string;
  body: string;
  legLabel: string;
  legBody: string;
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
          Two airports. Pick the cheaper.
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
          <strong style={{ fontWeight: 600 }}>
            Shenzhen Bao&apos;an International (SZX)
          </strong>{' '}
          - primary airport. Direct flights from most Asian hubs (Tokyo, Seoul, Singapore,
          Bangkok, Dubai) and several international cities. 40 minutes by metro from downtown.
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          <AirportCard
            img="/assets/visit-szx.webp"
            heading="Shenzhen Bao'an International (SZX)"
            body="Primary airport. Direct flights from most Asian hubs (Tokyo, Seoul, Singapore, Bangkok, Dubai) and several international cities. 40 minutes by metro from downtown."
            legLabel="From SZX to St. Regis:"
            legBody="40 min by taxi · 50 min by Metro Line 11 (direct)."
          />
          <AirportCard
            img="/assets/visit-hkg.webp"
            heading="Hong Kong International (HKG)"
            body="Often cheaper from Europe and North America. 30 km away. The HK → SZ high-speed rail takes under 30 minutes, runs every 10 minutes, and crosses the border without switching trains."
            legLabel="From HKG to St. Regis:"
            legBody="1.5 hours total (rail + taxi)."
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
  img,
  mark,
  body,
  buttonLabel,
  buttonHref,
}: {
  img: string;
  mark: React.ReactNode;
  body: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <div className="payment-card rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-7 transition-colors duration-200">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[16px]">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover text-[14px] md:text-[16px] leading-[150%] md:leading-[160%]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="mt-6 md:mt-7">{mark}</div>
      <p
        className="mt-4 text-white/75"
        style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 400,
        }}
      >
        {body}
      </p>
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
          fontSize: 12,
          fontWeight: 600,
          lineHeight: '28px',
        }}
      >
        {buttonLabel}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function MiniInfoCard({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-8">
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
          The local currency is the Chinese Yuan (CNY / RMB). Cash is rarely used. Two apps
          handle almost every transaction:
        </p>

        <div className="mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          <PaymentAppCard
            img="/assets/visit-alipay.webp"
            mark={<AlipayMark />}
            body="The more foreigner-friendly of the two. Links to most international cards (Visa, Mastercard, Amex). Set up before you arrive."
            buttonLabel="Download Alipay"
            buttonHref="https://www.alipay.com/"
          />
          <PaymentAppCard
            img="/assets/visit-wechat.webp"
            mark={<WeChatPayMark />}
            body="Pairs with WeChat, which you'll use for messaging anyway. Also accepts international cards now."
            buttonLabel="Download WeChat Pay"
            buttonHref="https://pay.weixin.qq.com/"
          />
        </div>

        <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 md:grid-cols-2">
          <MiniInfoCard
            heading="Credit Cards"
            body="International cards work at major hotels, The St. Regis, and upscale malls. Not at most restaurants, taxis, or convenience stores. Assume cashless-app is the default."
          />
          <MiniInfoCard
            heading="ATMs"
            body="At the airport and major bank branches. Your home bank card usually works. Carry ~¥500 in cash as backup."
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
              Some Western platforms have limited access inside China. The working fix is a{' '}
              <strong style={{ fontWeight: 600 }}>paid connection service</strong> -
              10 minutes to set up, runs in the background. Free options are unreliable during
              peak hours.
            </p>

            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px] mt-8 max-w-[560px]">
              <Image
                src="/assets/visit-connection.webp"
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
              body="Set up WeChat before you arrive — it's how you'll communicate with everyone you meet here. International numbers work for registration."
              buttonLabel="Download WeChat"
              buttonHref="https://www.wechat.com/"
            />
            <StepCard
              num="02"
              heading="On arrival"
              body="International roaming works but is expensive. A local eSIM (Airalo or similar) for ~$20 covers 5 days with enough data."
              buttonLabel="Download Airalo"
              buttonHref="https://www.airalo.com/"
            />
            <StepCard
              num="03"
              heading="At the venue"
              body="The St. Regis provides Wi-Fi for all attendees. Conference Wi-Fi is configured with consistent international access on the conference SSID — you don't need to bring your own setup for on-site sessions."
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
  buttons: { label: string; href: string }[];
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
            All conference sessions and networking events run in English. Days 3 and 4
            include live EN &lt;&gt; CN interpretation on stage.
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
            Service staff at most hotels speak English. Taxi drivers and smaller restaurants
            usually don&apos;t. Screens and translation apps carry the day.
          </p>
          <p
            style={{
              color: '#F9F9F9',
              opacity: 0.7,
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: '150%',
            }}
          >
            Outside the venue, English is limited. Two fixes that actually work:
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
          <TranslateCard
            heading="Apple Translate"
            body="With Chinese downloaded offline. No connection needed"
            buttons={[
              {
                label: 'Apple Translate',
                href: 'https://apps.apple.com/app/translate/id1514844618',
              },
            ]}
          />
          <TranslateCard
            heading="Baidu Translate or DeepL"
            body="On your phone. Both work without issues"
            buttons={[
              { label: 'Baidu Translate', href: 'https://fanyi.baidu.com/' },
              { label: 'DeepL', href: 'https://www.deepl.com/translator' },
            ]}
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
    img: '/assets/visit-nanshan.webp',
    body: "Shenzhen's tech centre. Tencent HQ, Huawei's Bantian campus 30 min east, DJI's flagship store. Sky bars, co-working cafés, the bay. If you leave the conference after work, go here.",
  },
  {
    name: 'Futian',
    img: '/assets/visit-futian.webp',
    body: 'The financial district. Where the St. Regis is. Central, well-connected, walkable. Dinner options every 50 metres.',
  },
  {
    name: 'Luohu',
    img: '/assets/visit-luohu.webp',
    body: 'The original Shenzhen. Older, denser, more textured. Dongmen shopping street, the 1970s-built Luohu market, and the border crossing to Hong Kong.',
  },
  {
    name: 'Yantian',
    img: '/assets/visit-yantian.webp',
    body: 'The coastal district. White-sand beaches at Dapeng, hiking trails, cleaner air. Where the MGM (VIP networking hotel) is. 40 min from Futian.',
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
    name: 'Dim Sum',
    img: '/assets/visit-dimsum.webp',
    body: 'Guangdong is the home of dim sum. Go early (9 am on a weekend), sit at a big table, order by stamping a paper card. Lin Heung* and *Jade Garden* if you want the classic rooms.',
  },
  {
    name: 'Hot Pot',
    img: '/assets/visit-hotpot.webp',
    body: 'Multiple regional styles available. Sichuan (spicy), Cantonese (clear broth), Chaoshan (beef). Most restaurants run till midnight.',
  },
  {
    name: 'Huaqiangbei Street Food',
    img: '/assets/visit-streetfood.webp',
    body: 'The side alleys around Huaqiangbei electronics market run all night. Skewers, noodle bowls, baozi steamers, and the city\'s most honest street food. Bring an empty stomach.',
  },
  {
    name: 'Peking Duck',
    img: '/assets/visit-pekingduck.webp',
    body: 'Not local, but Shenzhen has the best non-Beijing branches of the classics: *Da Dong* and *Quanjude* both have Shenzhen locations in Futian.',
  },
];

function Food() {
  const [active, setActive] = useState(0);
  const activeMeal = MEALS[active];

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
          Four meals that are Shenzhen
        </h2>

        <div className="mt-10 md:mt-14 rounded-[32px] border border-white/10 bg-[#03060d] p-6 md:p-10">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-[16px]">
              <Image
                key={activeMeal.img}
                src={activeMeal.img}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="relative">
              {/* Continuous left rail — faint white pill running the full height */}
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0"
                style={{
                  width: 2,
                  borderRadius: 88,
                  background: '#F9F9F9',
                  opacity: 0.2,
                }}
              />
              <ul className="flex flex-col gap-7 md:gap-8 relative">
                {MEALS.map((meal, i) => {
                  const isActive = i === active;
                  return (
                    <li key={meal.name} className="relative">
                      {/* Teal overlay segment for the active item only */}
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute left-0 top-0 bottom-0"
                          style={{
                            width: 2,
                            borderRadius: 88,
                            background: '#118BAC',
                          }}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className="block w-full text-left pl-5"
                      >
                        <span
                          className="display uppercase block"
                          style={{
                            fontSize: 'clamp(20px, 2.4vw, 26px)',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            lineHeight: '120%',
                            color: isActive ? '#5DAEDB' : 'rgba(249, 249, 249, 0.35)',
                          }}
                        >
                          {meal.name}
                        </span>
                        {isActive && (
                          <span
                            className="mt-4 text-white/75 block text-[14px] md:text-[16px] leading-[150%] md:leading-[160%]"
                            style={{
                              fontFamily: 'General Sans, system-ui, sans-serif',
                              fontWeight: 400,
                            }}
                          >
                            {meal.body}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
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
    name: 'Dapeng Peninsula',
    img: '/assets/visit-dapeng.webp',
    body: 'White-sand beaches, crystal-clear water, rugged cliffs at the Cape of Good Hope. 45 min from Futian.',
  },
  {
    name: 'Wutong Mountain',
    img: '/assets/visit-wutong.webp',
    body: 'The tallest mountain in Shenzhen. Two-hour hike, panoramic bay views at the summit.',
  },
  {
    name: 'Nantou Ancient City',
    img: '/assets/visit-nantou.webp',
    body: '1,700-year-old Ming gates, traditional alleys. 20 min from Futian.',
  },
  {
    name: 'Hong Kong',
    img: '/assets/visit-hongkong.webp',
    body: 'Cross the border on the high-speed rail in under 30 minutes. Different currency, different SIM, same day trip.',
  },
];

function SideTripCard({ name, img, body }: { name: string; img: string; body: string }) {
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
