'use client';

import { useParams } from 'next/navigation';

import { DECK_BY_SLUG, type Deck } from '../../deck';
import { NINE_STEPS } from '../../../nine-steps/deck';
import { SEO_HAPPINESS } from '../../../seo-happiness/deck';

/**
 * Print view of a deck: every slide stacked on one page, each in a fixed
 * 1920 x 1080 frame, with no player controls and no entrance animations.
 * A slide that builds over several clicks is rendered at its final step, so
 * the export shows each slide the way the room last saw it.
 *
 * Exists for turning the decks into PDFs (scripts/export-decks.py prints it
 * with a headless browser). The two talk decks are registered here as well,
 * mirroring how their own pages hand them to the Player.
 */
const TALKS: Record<string, Deck> = {
  'nine-steps': {
    slug: 'nine-steps',
    day: 'Saturday 12 September',
    kind: 'Talk',
    title: 'Sat 12 Sep · 9 Steps',
    slides: NINE_STEPS,
  },
  'seo-happiness': {
    slug: 'seo-happiness',
    day: 'Sunday 13 September',
    kind: 'Talk',
    title: 'Sun 13 Sep · Stress-free SEO',
    slides: SEO_HAPPINESS,
  },
};

const W = 1920;
const H = 1080;

export default function PrintDeck() {
  const { slug } = useParams<{ slug: string }>();
  const deck: Deck | undefined = DECK_BY_SLUG[slug] ?? TALKS[slug];

  if (!deck) {
    return (
      <main style={{ padding: 40, color: 'var(--fg)', fontFamily: 'system-ui, sans-serif' }}>
        Unknown deck: {slug}
      </main>
    );
  }

  const total = String(deck.slides.length).padStart(2, '0');

  return (
    <main data-print-deck={deck.slug} style={{ background: 'var(--bg)', width: W }}>
      {deck.slides.map((slide, i) => (
        <section
          key={slide.id}
          data-print-slide={i + 1}
          style={{
            position: 'relative',
            width: W,
            height: H,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg)',
            // No break after the last slide, or the PDF gains a blank page.
            breakAfter: i < deck.slides.length - 1 ? 'page' : 'auto',
          }}
        >
          {/* Same wordmark the player puts on every slide. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.webp"
            alt=""
            style={{
              position: 'absolute',
              top: '3vh',
              right: '3vw',
              zIndex: 20,
              height: 22,
              width: 'auto',
              opacity: 0.75,
            }}
          />

          <div style={{ flex: 1, minHeight: 0 }}>
            {typeof slide.body === 'function' ? slide.body(slide.steps ?? 0) : slide.body}
          </div>

          {/* Slide counter and deck name, where the player shows them. */}
          <div
            style={{
              position: 'absolute',
              left: '3vw',
              bottom: 20,
              zIndex: 20,
              display: 'flex',
              alignItems: 'baseline',
              gap: 16,
            }}
          >
            <span
              className="display"
              style={{ color: 'var(--muted-2)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em' }}
            >
              {String(i + 1).padStart(2, '0')}
              <span style={{ opacity: 0.4 }}> / {total}</span>
            </span>
            <span
              className="uppercase"
              style={{
                color: 'var(--muted-2)',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.16em',
                opacity: 0.65,
              }}
            >
              {deck.title}
            </span>
          </div>
        </section>
      ))}

      <style jsx global>{`
        @page {
          size: ${W}px ${H}px;
          margin: 0;
        }
        html,
        body {
          margin: 0;
          background: var(--bg);
        }
        /* The decks' entrance animations are defined by the player, not here,
           so everything renders in its settled state. Belt and braces: */
        * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </main>
  );
}
