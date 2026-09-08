'use client';

import { useCallback, useEffect, useState } from 'react';

import type { Deck } from './deck';

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true" fill="none">
      <path
        d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Player({ deck }: { deck: Deck }) {
  const SLIDES = deck.slides;
  const [i, setI] = useState(0);
  const [notes, setNotes] = useState(false);
  const last = SLIDES.length - 1;

  const go = useCallback((n: number) => setI((v) => Math.min(last, Math.max(0, n))), [last]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          setI((v) => Math.min(last, v + 1));
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          setI((v) => Math.max(0, v - 1));
          break;
        case 'Home':
          setI(0);
          break;
        case 'End':
          setI(last);
          break;
        case 'f':
        case 'F':
          if (document.fullscreenElement) document.exitFullscreen();
          else document.documentElement.requestFullscreen?.();
          break;
        case 's':
        case 'S':
          setNotes((v) => !v);
          break;
        case 'Escape':
          setNotes(false);
          break;
        case 'Backspace':
          // Straight back to the deck picker mid-talk if the wrong one is open.
          window.location.href = '/side-event-slides';
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    // A deck fills the viewport, so nothing behind it should scroll.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [last]);

  const slide = SLIDES[i];

  return (
    <main className="fixed inset-0 flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Progress along the top, in the conference's own gradient. */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-20" style={{ background: 'var(--line)' }}>
        <div
          className="h-full transition-[width] duration-300 ease-out"
          style={{
            width: `${((i + 1) / SLIDES.length) * 100}%`,
            background: 'linear-gradient(90deg, var(--teal) 0%, var(--red) 100%)',
          }}
        />
      </div>

      <section key={slide.id} className="flex-1 min-h-0 slide-in">
        {slide.body}
      </section>

      {/* Controls sit on the slide rather than in it, so they stay out of the
          way of the content but are always reachable. */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[3vw] py-5 z-20">
        <div className="flex items-baseline gap-4 min-w-0">
          <span
            className="display tabular-nums shrink-0"
            style={{ color: 'var(--muted-2)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em' }}
          >
            {String(i + 1).padStart(2, '0')}
            <span style={{ opacity: 0.4 }}> / {String(SLIDES.length).padStart(2, '0')}</span>
          </span>
          {/* Which set of remarks this slide belongs to, so the deck stays
              legible now that it runs across several sections. */}
          <span
            className="uppercase truncate"
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

        <div className="flex items-center gap-2">
          <span
            className="hidden md:inline uppercase mr-3"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.16em',
            }}
          >
            ← → to move · F fullscreen · S notes · ⌫ all decks
          </span>
          <button
            type="button"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            aria-label="Previous slide"
            className="grid place-items-center w-10 h-10 rounded-full border transition-colors disabled:opacity-25"
            style={{ borderColor: 'var(--line-2)', color: 'var(--fg)' }}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            disabled={i === last}
            aria-label="Next slide"
            className="grid place-items-center w-10 h-10 rounded-full border transition-colors disabled:opacity-25"
            style={{ borderColor: 'var(--line-2)', color: 'var(--fg)' }}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      {/* Speaker script. Deliberately not part of the slide: it only appears
          when the presenter asks for it with S. */}
      {notes && (
        <aside
          className="absolute left-0 right-0 bottom-0 z-30 px-[4vw] pt-6 pb-20 border-t"
          style={{ background: 'rgba(3,6,13,0.97)', borderColor: 'var(--line-2)', maxHeight: '48vh', overflowY: 'auto' }}
        >
          <div className="flex items-center justify-between gap-4 mb-3">
            <span
              className="uppercase"
              style={{
                color: 'var(--red)',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
              }}
            >
              Speaker script
            </span>
            <button
              type="button"
              onClick={() => setNotes(false)}
              className="uppercase"
              style={{
                color: 'var(--muted-2)',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.16em',
              }}
            >
              Hide (S)
            </button>
          </div>
          <p
            style={{
              color: 'var(--fg)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(13px, 1.3vw, 17px)',
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: '90ch',
            }}
          >
            {slide.notes}
          </p>
        </aside>
      )}

      <style jsx global>{`
        .slide-in {
          animation: slideIn 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        /* Title slides: the backdrop drifts very slowly while the logo, title
           and rule arrive in sequence. Slow and staggered, so it reads as a
           title card settling rather than a transition effect. */
        .t-drift {
          animation: tDrift 22s ease-out both;
        }
        @keyframes tDrift {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
        .t-rise {
          animation: tRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .t-rise-2 {
          animation-delay: 0.22s;
        }
        .t-rise-3 {
          animation-delay: 0.42s;
        }
        @keyframes tRise {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .t-rule {
          transform-origin: center;
          animation: tRule 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
        }
        @keyframes tRule {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        /* A slow breath of light behind the mark. */
        .t-glow {
          animation: tGlow 9s ease-in-out infinite;
        }
        @keyframes tGlow {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* The three values land one after another, so they read as a beat
           rather than a static list. */
        .v-pop {
          animation: vPop 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .v-pop-2 {
          animation-delay: 0.13s;
        }
        .v-pop-3 {
          animation-delay: 0.26s;
        }
        @keyframes vPop {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        /* Generic staggered entrance, used to bring a slide's parts in one
           after another rather than all at once. */
        .st {
          animation: tRise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .st-1 { animation-delay: 0.05s; }
        .st-2 { animation-delay: 0.15s; }
        .st-3 { animation-delay: 0.25s; }
        .st-4 { animation-delay: 0.35s; }
        .st-5 { animation-delay: 0.45s; }

        /* Diagrams settle in with a slight scale so they feel placed. */
        .dia-in {
          animation: diaIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }
        @keyframes diaIn {
          from { opacity: 0; transform: scale(0.965); }
          to { opacity: 1; transform: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .slide-in,
          .st,
          .dia-in,
          .v-pop,
          .t-drift,
          .t-rise,
          .t-rule,
          .t-glow {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
