'use client';

import Image from 'next/image';
import Link from 'next/link';

import { DECKS } from './deck';
import { NINE_STEPS } from '../nine-steps/deck';
import { SEO_HAPPINESS } from '../seo-happiness/deck';

function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Picker for the four decks. Kept plain: it is the screen JP sees before
 *  going full-screen, never the one the room sees. */
export default function SideEventDecks() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto px-[6vw] py-[10vh]" style={{ maxWidth: 1200 }}>
        <Image
          src="/logo-white.webp"
          alt="Shenzhen SEO Conference"
          width={300}
          height={56}
          priority
          className="w-[min(34vw,260px)] h-auto"
        />
        <h1
          className="display mt-10"
          style={{ color: 'var(--fg)', fontSize: 'clamp(30px, 4.4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Side event decks
        </h1>
        <p
          className="mt-4 max-w-[60ch]"
          style={{ color: 'var(--muted)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 17, lineHeight: 1.7 }}
        >
          Four separate presentations. Open one, press <strong style={{ color: 'var(--fg)' }}>F</strong> for full screen,
          arrows to move, <strong style={{ color: 'var(--fg)' }}>S</strong> for your script.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            ...DECKS,
            {
              slug: '../nine-steps',
              day: 'Saturday 12 September',
              kind: 'Talk · 9 steps with AI',
              slides: NINE_STEPS,
            },
            {
              slug: '../seo-happiness',
              day: 'Sunday 13 September',
              kind: 'Talk · Engineering SEO happiness',
              slides: SEO_HAPPINESS,
            },
          ].map((d) => (
            <li key={d.slug}>
              <Link
                href={d.slug.startsWith('..') ? `/${d.slug.replace('../', '')}` : `/side-event-slides/${d.slug}`}
                className="group flex flex-col justify-between h-full rounded-2xl p-7 transition-colors"
                style={{ border: '1px solid var(--line-2)' }}
              >
                <div>
                  <div
                    className="uppercase"
                    style={{
                      color: 'var(--red)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                    }}
                  >
                    {d.day}
                  </div>
                  <div
                    className="display mt-3"
                    style={{ color: 'var(--fg)', fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 700, letterSpacing: '-0.015em' }}
                  >
                    {d.kind}
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span
                    style={{
                      color: 'var(--muted-2)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {d.slides.length} slides
                  </span>
                  <span
                    className="grid place-items-center w-10 h-10 rounded-full transition-colors"
                    style={{ border: '1px solid var(--line-2)', color: 'var(--fg)' }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
