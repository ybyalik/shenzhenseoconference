'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ArrowUpRight } from './shared';

/**
 * Floating countdown to the first session (Day 1 workshops, 9:00 AM Shenzhen
 * time, which is UTC+8). Centred along the bottom of the viewport.
 *
 * It hides itself once the conference has finished, and can be dismissed; the
 * dismissal is remembered in this browser so it doesn't nag on every page.
 */
const EVENT_START = Date.parse('2026-09-14T01:00:00Z'); // 9:00 AM Sep 14, Shenzhen
const EVENT_END = Date.parse('2026-09-18T14:00:00Z'); // 10:00 PM Sep 18, Shenzhen
const DISMISS_KEY = 'szseo-countdown-dismissed';

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

export function CountdownBar() {
  // Rendered only after mount: the server has no idea what time it is in the
  // visitor's browser, so rendering a clock during SSR would mismatch.
  const [now, setNow] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setDismissed(false);
    }
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null || dismissed || now >= EVENT_END) return null;

  const live = now >= EVENT_START;
  const t = parts(EVENT_START - now);

  const close = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* private browsing: it just reappears next page, which is fine */
    }
  };

  const Unit = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center leading-none">
      <span
        className="display text-white text-[15px] md:text-[18px] font-bold tabular-nums"
        style={{ letterSpacing: '0.01em' }}
      >
        {value}
      </span>
      <span
        className="mt-1 uppercase text-white/45 text-[8px] md:text-[9px] font-semibold"
        style={{ fontFamily: 'General Sans, system-ui, sans-serif', letterSpacing: '0.12em' }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed z-40 left-1/2 -translate-x-1/2 bottom-3 max-[420px]:bottom-20 lg:bottom-[50px] max-w-[calc(100vw-1.5rem)]">
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
            {live ? 'Happening now' : 'Shenzhen SEO Conference 2026'}
          </span>

          {live ? (
            <span className="display text-white text-[14px] md:text-[16px] font-bold mt-1">
              Sep 14–18, Shenzhen
            </span>
          ) : (
            <div className="flex items-end gap-2.5 md:gap-3.5 mt-1.5">
              <Unit value={String(t.days)} label="Days" />
              <span className="text-white/25 text-[15px] md:text-[18px] leading-none -mt-1">:</span>
              <Unit value={pad(t.hours)} label="Hrs" />
              <span className="text-white/25 text-[15px] md:text-[18px] leading-none -mt-1">:</span>
              <Unit value={pad(t.mins)} label="Min" />
              <span className="text-white/25 text-[15px] md:text-[18px] leading-none -mt-1">:</span>
              <Unit value={pad(t.secs)} label="Sec" />
            </div>
          )}
        </div>

        <Link
          href="/#pricing"
          className="display shrink-0 hidden sm:inline-flex items-center justify-center gap-2 self-center rounded-full gradient-cta text-white text-[11px] font-bold uppercase px-5 py-3 whitespace-nowrap"
          style={{ letterSpacing: '0.16em' }}
        >
          Tickets
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <button
          type="button"
          onClick={close}
          aria-label="Hide the countdown"
          className="shrink-0 grid place-items-center w-7 h-7 rounded-full text-white/45 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
