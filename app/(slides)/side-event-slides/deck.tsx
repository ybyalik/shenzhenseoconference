'use client';

import Image from 'next/image';

/* ─────────────────────────────── SHARED PIECES ─────────────────────────────── */

export function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`uppercase ${center ? 'text-center' : ''}`}
      style={{
        color: 'var(--red)',
        fontFamily: 'General Sans, system-ui, sans-serif',
        fontSize: 'clamp(11px, 1.1vw, 16px)',
        fontWeight: 700,
        letterSpacing: '0.22em',
      }}
    >
      {children}
    </div>
  );
}

function Headline({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2
      className={`display ${center ? 'text-center mx-auto' : ''}`}
      style={{
        color: 'var(--fg)',
        fontSize: 'clamp(40px, 6.2vw, 104px)',
        fontWeight: 700,
        lineHeight: 0.98,
        letterSpacing: '-0.025em',
        textWrap: 'balance',
        maxWidth: center ? '18ch' : undefined,
      }}
    >
      {children}
    </h2>
  );
}

/** Label above, value below. Centred by default: a lone left-aligned column in a
 *  16:9 frame reads as a small block floating in a big empty room. */
function Stat({
  label,
  value,
  accent = false,
  center = true,
  size = 'lg',
}: {
  label: string;
  value: React.ReactNode;
  accent?: boolean;
  center?: boolean;
  /** 'md' for copy that supports a headline rather than carrying the slide. */
  size?: 'lg' | 'md';
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      <div
        className="uppercase"
        style={{
          color: 'var(--muted-2)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 'clamp(10px, 1vw, 14px)',
          fontWeight: 600,
          letterSpacing: '0.2em',
        }}
      >
        {label}
      </div>
      <div
        className="display mt-3"
        style={{
          color: accent ? 'var(--red)' : 'var(--fg)',
          fontSize: size === 'lg' ? 'clamp(28px, 4.2vw, 68px)' : 'clamp(18px, 2.1vw, 32px)',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.015em',
          textWrap: 'balance',
        }}
      >
        {value}
      </div>
    </div>
  );
}

// Bottom padding is larger: the counter and arrows sit over every slide.
const PAD = 'px-[5vw] pt-[6vh] pb-[12vh]';
const CENTER = `h-full flex flex-col items-center justify-center text-center ${PAD}`;

/* ──────────────────────────── REUSABLE SLIDE SHAPES ────────────────────────── */

function TitleSlide({ line, sub }: { line: React.ReactNode; sub?: string }) {
  return (
    <div className="relative h-full overflow-hidden">
      {/* The backdrop drifts almost imperceptibly for the length of the slide,
          so the title card feels alive without pulling focus. */}
      <div className="absolute inset-0 t-drift">
        <Image src="/assets/slide-bg-title.webp" alt="" fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.55)' }} />

      {/* A soft breath of brand light behind the logo. */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 t-glow pointer-events-none"
        style={{
          width: 'min(70vw, 900px)',
          height: 'min(70vw, 900px)',
          background: 'radial-gradient(circle, rgba(17,139,172,0.28) 0%, rgba(235,48,48,0.12) 42%, transparent 68%)',
          filter: 'blur(20px)',
        }}
      />

      <div className={`relative ${CENTER}`}>
        <Image
          src="/logo-white.webp"
          alt="Shenzhen SEO Conference"
          width={480}
          height={89}
          priority
          className="w-[min(40vw,460px)] h-auto t-rise"
        />

        <h1
          className="display mt-[6vh] t-rise t-rise-2"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(38px, 5.6vw, 92px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            textWrap: 'balance',
          }}
        >
          {line}
        </h1>

        {/* The brand gradient, drawn as a rule that opens under the title. */}
        <div
          className="mt-[5vh] t-rule"
          style={{
            width: 'min(46vw, 480px)',
            height: 3,
            borderRadius: 3,
            background: 'linear-gradient(90deg, transparent 0%, var(--teal) 22%, var(--red) 78%, transparent 100%)',
          }}
        />

        {sub && (
          <p
            className="mt-7 t-rise t-rise-3"
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(16px, 1.9vw, 28px)',
              fontWeight: 500,
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Self-intro, part one: the name. Three names for one person confuses a mixed
 * room, so each gets its own column with the reason it exists rather than
 * being listed as aliases.
 */
export function NameSlide() {
  const names: [string, string][] = [
    ['John', 'What readers of my Chinese blog have called me for years.'],
    ['JP', 'For international friends, after one too many attempts at “Jiangpeng”.'],
    ['Zhang 章', 'My family name. In China it comes first.'],
  ];
  return (
    <div className={CENTER}>
      <Eyebrow center>Who is talking</Eyebrow>

      <h2
        className="display mt-5"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(44px, 7vw, 116px)',
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
        }}
      >
        章江鹏
      </h2>
      <div
        className="display mt-3"
        style={{
          color: 'var(--muted)',
          fontSize: 'clamp(20px, 2.6vw, 40px)',
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        Jiangpeng Zhang
      </div>

      <div className="mt-[6vh] grid gap-x-[3vw] gap-y-6 sm:grid-cols-3 w-full" style={{ maxWidth: 1100 }}>
        {names.map(([name, why]) => (
          <div key={name} className="text-center">
            <div
              className="display"
              style={{ color: 'var(--red)', fontSize: 'clamp(24px, 3vw, 46px)', fontWeight: 700, letterSpacing: '-0.015em' }}
            >
              {name}
            </div>
            <p
              className="mt-2.5 mx-auto"
              style={{
                color: 'var(--muted-2)',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 'clamp(12px, 1.15vw, 17px)',
                lineHeight: 1.5,
                maxWidth: '26ch',
              }}
            >
              {why}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Self-intro, part two: where he is actually from, and the English disclaimer.
 * It exists to set expectations early and get a laugh, so the joke is the
 * last thing on the slide rather than buried in the middle.
 */
export function OriginSlide() {
  const facts: [string, string][] = [
    ['38', 'years old'],
    ['3.5', 'of them in the US'],
    ['27', 'before my first flight'],
  ];
  return (
    <div className={`h-full flex flex-col justify-center ${PAD}`}>
      <Eyebrow>Before we start</Eyebrow>

      <h2
        className="display mt-4"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(36px, 5.4vw, 88px)',
          fontWeight: 700,
          lineHeight: 0.98,
          letterSpacing: '-0.025em',
        }}
      >
        92% <span style={{ color: 'var(--red)' }}>made in China</span>
      </h2>

      {/* Two columns under the headline: the facts on the left, the joke on the
          right. Stacked in one column they filled the left half and left the
          right half of a 16:9 frame empty. */}
      <div className="mt-[6vh] grid gap-x-[6vw] gap-y-[5vh] lg:grid-cols-2 items-start">
        <div>
          <div className="flex flex-wrap gap-x-[3.5vw] gap-y-5">
            {facts.map(([n, label]) => (
              <div key={label}>
                <div
                  className="display tabular-nums"
                  style={{ color: 'var(--fg)', fontSize: 'clamp(28px, 3.6vw, 58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  {n}
                </div>
                <div
                  className="uppercase mt-2"
                  style={{
                    color: 'var(--muted-2)',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 'clamp(9px, 0.9vw, 12px)',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-[4vh]"
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(13px, 1.35vw, 21px)',
              lineHeight: 1.6,
            }}
          >
            A countryside boy from Hubei. Not American-born, not Hong Kong, Singapore, Malaysia or
            Japan. English is my second language.
          </p>
        </div>

        <div className="pl-5" style={{ borderLeft: '2px solid rgba(235,48,48,0.5)' }}>
          <p
            className="display"
            style={{ color: 'var(--fg)', fontSize: 'clamp(17px, 2.1vw, 34px)', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.015em' }}
          >
            “JP, you should start with A to Z.”
          </p>
          <p
            className="mt-3"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(12px, 1.2vw, 18px)',
              lineHeight: 1.55,
            }}
          >
            My MBA classmate from India, 2013. So please lower your expectations for my English.
            My Mandarin is excellent.
          </p>
        </div>
      </div>
    </div>
  );
}

export function HostSlide({
  summary,
  roles,
  brands,
  demoBrands,
}: {
  /** The headline claim. The roles below are the breakdown of it. */
  summary: string;
  roles?: [string, string][];
  /** [English name, Chinese name]. Both, because the room is half and half. */
  brands: [string, string][];
  /** Invented brands used as examples during a talk. Off for the opening
   *  remarks, where he is hosting rather than demonstrating anything. */
  demoBrands?: string[];
}) {
  return (
    <div className="h-full grid md:grid-cols-[minmax(0,34%)_1fr]">
      <div className="relative hidden md:block">
        <Image
          src="/figma-assets/jp-portrait.png"
          alt="JP Zhang speaking on stage"
          fill
          priority
          className="object-cover object-center"
          sizes="34vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 50%, var(--bg) 100%)' }} />
      </div>

      <div className={`flex flex-col justify-center ${PAD}`}>
        <Eyebrow>Your host</Eyebrow>
        <h2
          className="display mt-4"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(34px, 4.4vw, 72px)',
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: '-0.025em',
          }}
        >
          John / JP Zhang
        </h2>

        {/* Experience: one claim, with the three places it came from nested
            beneath it so the hierarchy is obvious. */}
        <div className="mt-[5vh]">
          <div
            className="uppercase"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(9px, 0.9vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.2em',
            }}
          >
            Experience
          </div>
          <div
            className="display mt-2.5"
            style={{ color: 'var(--fg)', fontSize: 'clamp(19px, 2.3vw, 36px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.15 }}
          >
            {summary}
          </div>

          {roles && (
            <ul className="mt-5 pl-5 flex flex-col gap-3" style={{ borderLeft: '2px solid rgba(235,48,48,0.5)' }}>
              {roles.map(([k, v]) => (
                <li key={k} className="grid grid-cols-[5.5rem_1fr] gap-4 items-baseline">
                  <span
                    className="uppercase"
                    style={{
                      color: 'var(--red)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(9px, 0.85vw, 12px)',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      color: 'var(--muted)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(12px, 1.2vw, 18px)',
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* The brands he owns are a separate thing from the CV above, so they
            get a rule and their own treatment: one chip per brand. */}
        <div className="mt-[5vh] pt-[4vh]" style={{ borderTop: '1px solid var(--line-2)' }}>
          <div
            className="uppercase"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(9px, 0.9vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.2em',
            }}
          >
            Owned brands
          </div>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {brands.map(([en, zh]) => (
              <li
                key={en}
                className="rounded-full px-4 py-2 flex items-baseline gap-2"
                style={{
                  border: '1px solid var(--line-2)',
                  background: 'rgba(249,249,249,0.04)',
                }}
              >
                <span
                  className="display"
                  style={{
                    color: 'var(--fg)',
                    fontSize: 'clamp(12px, 1.25vw, 19px)',
                    fontWeight: 700,
                    letterSpacing: '-0.005em',
                  }}
                >
                  {en}
                </span>
                <span
                  style={{
                    color: 'var(--muted-2)',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 'clamp(10px, 1vw, 15px)',
                    fontWeight: 500,
                  }}
                >
                  {zh}
                </span>
              </li>
            ))}
          </ul>

          {demoBrands && (
            <div className="mt-4">
              <span
                className="uppercase"
                style={{
                  color: 'var(--muted-2)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(9px, 0.85vw, 12px)',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                }}
              >
                Made up for my talks ·{' '}
              </span>
              <span
                style={{
                  color: 'var(--muted)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(11px, 1.05vw, 16px)',
                  fontWeight: 500,
                }}
              >
                {demoBrands.join(' · ')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Mission / vision / values, over the generated East–West artwork. */
function DnaSlide() {
  // DNA, vision and values are three peers, so they share one size and weight.
  // The values get the brand gradient and a staggered entrance instead of extra
  // size, so they carry more energy without breaking that parity.
  const VALUES = ['Growth.', 'Entrepreneurship.', 'Partnership.'];
  const PILLARS: [string, React.ReactNode][] = [
    ['DNA', <>Connecting Eastern &amp; Western SEOs</>],
    ['Vision', 'China’s most international SEO conference'],
    [
      'Values',
      <span
        key="values"
        className="block"
        style={{
          backgroundImage: 'linear-gradient(150deg, #86dff7 0%, #f9f9f9 45%, #fd4c4c 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {VALUES.map((v, i) => (
          <span key={v} className={`block v-pop${i === 1 ? ' v-pop-2' : i === 2 ? ' v-pop-3' : ''}`}>
            {v}
          </span>
        ))}
      </span>,
    ],
  ];

  return (
    <div className="relative h-full">
      <Image src="/assets/slide-bg-bridge.webp" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.78)' }} />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(3,6,13,0.6) 0%, transparent 72%)' }}
      />

      <div className={`relative ${CENTER}`}>
        <Headline center>What is Shenzhen SEO Conference?</Headline>

        <div className="mt-[8vh] grid gap-[5vh] md:gap-[2.5vw] md:grid-cols-3 w-full" style={{ maxWidth: 1480 }}>
          {PILLARS.map(([label, value]) => (
            <div key={label} className="text-center">
              <div
                className="uppercase"
                style={{
                  color: 'var(--red)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(10px, 1vw, 14px)',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                }}
              >
                {label}
              </div>
              <div
                className="display mt-4"
                style={{
                  color: 'var(--fg)',
                  fontSize: 'clamp(17px, 2vw, 32px)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  textWrap: 'balance',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <p
          className="display mt-[8vh] flex flex-wrap items-baseline justify-center gap-x-3.5 gap-y-2"
          style={{ fontWeight: 700, letterSpacing: '-0.015em' }}
        >
          <span style={{ color: 'var(--muted-2)', fontSize: 'clamp(13px, 1.4vw, 20px)' }}>Goal</span>
          <span style={{ color: 'var(--red)', fontSize: 'clamp(24px, 3vw, 46px)', lineHeight: 1 }}>50%+</span>
          <span style={{ color: 'var(--fg)', fontSize: 'clamp(15px, 1.7vw, 27px)' }}>international attendees</span>
        </p>
      </div>
    </div>
  );
}

/** Told as a story rather than a comparison table: the barrier, the questions
 *  people actually asked, and what we built in response. */
function WhySlide({ extra }: { extra?: string }) {
  const ASKED = ['Can you make a cheaper one?', 'Is it really worth it?', 'How was it last year?'];

  return (
    <div className={CENTER}>
      <Eyebrow center>Why this event exists</Eyebrow>
      <Headline center>Five days already. Why add two afternoons?</Headline>

      <div className="mt-[7vh] w-full flex flex-col items-center gap-[5vh]" style={{ maxWidth: 1250 }}>
        {/* 1. The barrier */}
        <div className="text-center">
          <div
            className="uppercase"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(10px, 1vw, 13px)',
              fontWeight: 600,
              letterSpacing: '0.2em',
            }}
          >
            The barrier
          </div>
          <p
            className="display mt-3 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1"
            style={{ color: 'var(--fg)', fontSize: 'clamp(17px, 2vw, 32px)', fontWeight: 700, letterSpacing: '-0.015em' }}
          >
            <span>Weekdays</span>
            <span style={{ color: 'var(--muted-2)' }}>·</span>
            <span>$600 minimum</span>
            <span style={{ color: 'var(--muted-2)' }}>·</span>
            <span>Time off and travel</span>
          </p>
        </div>

        {/* 2. What people actually asked. The quotes are the story. */}
        <div className="w-full">
          <div
            className="uppercase text-center"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(10px, 1vw, 13px)',
              fontWeight: 600,
              letterSpacing: '0.2em',
            }}
          >
            So people kept asking
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {ASKED.map((q) => (
              <li
                key={q}
                className="rounded-2xl px-5 py-6 flex items-center justify-center text-center"
                style={{ border: '1px solid var(--line-2)', background: 'rgba(249,249,249,0.03)' }}
              >
                <span
                  className="display"
                  style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.55vw, 24px)', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.25 }}
                >
                  <span style={{ color: 'var(--red)' }}>“</span>
                  {q}
                  <span style={{ color: 'var(--red)' }}>”</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. The answer */}
        <p
          className="display text-center"
          style={{ color: 'var(--fg)', fontSize: 'clamp(19px, 2.4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', textWrap: 'balance' }}
        >
          So we built a <span style={{ color: 'var(--red)' }}>free sample</span> of it.
        </p>

        {extra && (
          <p
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(13px, 1.4vw, 20px)',
              fontWeight: 500,
            }}
          >
            {extra}
          </p>
        )}
      </div>
    </div>
  );
}

/** One dot per application: 40 made the main stage, the rest are why we are here. */
/**
 * Builds in three beats, because the whole point is the question he asks the
 * room before the answer is on screen:
 *   0 · the dots alone. "What does this mean?"
 *   1 · the two numbers behind them.
 *   2 · what we did about it, which is why this side event exists.
 *
 * Everything is rendered at every step and hidden with opacity, never
 * unmounted: mounting it late would reflow the slide under the audience.
 */
function SurpriseSlide({ step = 3 }: { step?: number }) {
  const reveal = (at: number) => ({
    opacity: step >= at ? 1 : 0,
    transition: 'opacity 420ms ease-out',
  });
  return (
    <div className={CENTER}>
      <Eyebrow center>The surprise</Eyebrow>

      <div style={reveal(1)}>
        <Headline center>150+ applied for 40 slots</Headline>
      </div>

      <div className="mt-[6vh] flex flex-wrap justify-center gap-[0.6vw]" style={{ maxWidth: 1150 }}>
        {Array.from({ length: 150 }).map((_, n) => (
          <span
            key={n}
            className="rounded-full shrink-0"
            style={{
              width: 'clamp(8px, 1.05vw, 17px)',
              height: 'clamp(8px, 1.05vw, 17px)',
              background: n < 40 ? 'var(--fg)' : 'rgba(235,48,48,0.85)',
            }}
          />
        ))}
      </div>

      <div className="mt-[6vh] flex flex-wrap justify-center gap-x-[6vw] gap-y-[3vh]" style={reveal(1)}>
        {[
          { n: '40', label: 'Main stage slots', accent: false },
          { n: '150+', label: 'Speakers applied', accent: true },
        ].map((g) => (
          <div key={g.label} className="text-center">
            <span
              className="display block"
              style={{ color: g.accent ? 'var(--red)' : 'var(--fg)', fontSize: 'clamp(26px, 3vw, 48px)', fontWeight: 700, lineHeight: 1 }}
            >
              {g.n}
            </span>
            <span
              className="uppercase block mt-2"
              style={{ color: 'var(--muted-2)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 'clamp(10px, 1vw, 13px)', fontWeight: 600, letterSpacing: '0.18em' }}
            >
              {g.label}
            </span>
          </div>
        ))}
      </div>

      {/* The point of the slide: what we did about it, and that the change of
          venue is a change of vibe, not of purpose. */}
      <div style={reveal(2)}>
        <p
          className="display mt-[6vh]"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(19px, 2.4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textWrap: 'balance',
          }}
        >
          So we built <span style={{ color: 'var(--red)' }}>two casual afternoons</span> for the rest.
        </p>
        <p
          className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          style={{
            color: 'var(--muted)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(13px, 1.45vw, 21px)',
            fontWeight: 500,
          }}
        >
          <span>Main stage: formal, business.</span>
          <span style={{ color: 'var(--muted-2)' }}>·</span>
          <span>Side event: casual.</span>
          <span style={{ color: 'var(--muted-2)' }}>·</span>
          <span style={{ color: 'var(--fg)', fontWeight: 700 }}>Same goal: East meets West.</span>
        </p>
      </div>
    </div>
  );
}

type Speaker = { name: string; img: string; topic: string; country: string };

// 2-letter code -> flag emoji. UK is GB in the standard.
const FLAG: Record<string, string> = {
  Belgium: 'BE', China: 'CN', Germany: 'DE', UK: 'GB', India: 'IN', Indonesia: 'ID', USA: 'US',
};
const flag = (country: string) =>
  country
    .split('&')
    .map((c) => FLAG[c.trim()])
    .filter(Boolean)
    .map((cc) => String.fromCodePoint(...[...cc].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65)))
    .join(' ');

function LineupSlide({ speakers }: { speakers: Speaker[] }) {
  return (
    <div className={CENTER}>
      {/* Deliberately small: the speakers are the slide, not the word "lineup". */}
      <h2
        className="display"
        style={{ color: 'var(--fg)', fontSize: 'clamp(20px, 2.4vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em' }}
      >
        Today’s lineup
      </h2>
      <ol
        className="mt-[5vh] grid gap-[2vw] w-full text-left"
        style={{ gridTemplateColumns: `repeat(${Math.min(speakers.length, 5)}, minmax(0, 1fr))`, maxWidth: 1500 }}
      >
        {speakers.map((sp, i) => (
          <li key={sp.name}>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden" style={{ background: 'rgba(249,249,249,0.05)' }}>
              <Image src={sp.img} alt={sp.name} fill className="object-cover" sizes="20vw" />
            </div>
            <div className="mt-4 flex items-center gap-2.5">
              <span
                className="display"
                style={{ color: 'var(--red)', fontSize: 'clamp(11px, 1.05vw, 15px)', fontWeight: 700, letterSpacing: '0.08em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 'clamp(14px, 1.4vw, 22px)', lineHeight: 1 }} title={sp.country}>
                {flag(sp.country)}
              </span>
            </div>
            <div
              className="display mt-1.5"
              style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.55vw, 24px)', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              {sp.name}
            </div>
            <div
              className="mt-2"
              style={{ color: 'var(--muted)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 'clamp(10px, 1vw, 14px)', lineHeight: 1.45 }}
            >
              {sp.topic}
            </div>
          </li>
        ))}
      </ol>
      <p
        className="display mt-[6vh]"
        style={{ color: 'var(--fg)', fontSize: 'clamp(22px, 2.8vw, 44px)', fontWeight: 700, letterSpacing: '-0.015em' }}
      >
        Network. Learn. <span style={{ color: 'var(--red)' }}>Connect.</span>
      </p>
    </div>
  );
}

/** A single statement carried by three stacked lines. */
function StatementSlide({
  eyebrow,
  lines,
  photo,
  art,
}: {
  eyebrow: string;
  lines: { text: React.ReactNode; muted?: boolean }[];
  /** Dimmed full-bleed photograph behind the words. */
  photo?: string;
  /** Illustration standing beside the words rather than behind them. */
  art?: string;
}) {
  const words = (
    <>
      <Eyebrow center>{eyebrow}</Eyebrow>
      <div className="mt-[6vh] flex flex-col gap-[3.5vh]">
        {lines.map((l, i) => (
          <div
            key={i}
            className="display"
            style={{
              color: l.muted ? 'var(--muted)' : 'var(--fg)',
              fontSize: l.muted ? 'clamp(17px, 2.2vw, 34px)' : 'clamp(34px, 5vw, 82px)',
              fontWeight: 700,
              lineHeight: l.muted ? 1.3 : 1.02,
              letterSpacing: '-0.025em',
              textWrap: 'balance',
              maxWidth: l.muted ? '26ch' : undefined,
            }}
          >
            {l.text}
          </div>
        ))}
      </div>
    </>
  );

  if (art) {
    return (
      <div className="h-full grid md:grid-cols-[1fr_minmax(0,38%)]">
        <div className={CENTER}>{words}</div>
        <div className="relative hidden md:block">
          <Image src={art} alt="" fill className="object-cover object-center" sizes="38vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, var(--bg) 0%, transparent 38%)' }} />
        </div>
      </div>
    );
  }

  if (photo) {
    return (
      <div className="relative h-full">
        <Image src={photo} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.78)' }} />
        <div className={`relative ${CENTER}`}>{words}</div>
      </div>
    );
  }

  return <div className={CENTER}>{words}</div>;
}

/** The five conference days, as five columns rather than a bulleted list. */
const FIVE_DAYS = [
  { d: 'Day 1', t: 'Workshops & city tours' },
  { d: 'Day 2', t: 'SEO masterminds' },
  { d: 'Day 3', t: 'Main conference' },
  { d: 'Day 4', t: 'Main conference' },
  { d: 'Day 5', t: 'VIP networking' },
];

function FiveDaySlide({ pillars }: { pillars: [string, string] }) {
  return (
    <div className={CENTER}>
      <Eyebrow center>The main event</Eyebrow>
      <Headline center>A five-day experience</Headline>
      <ol className="mt-[7vh] grid grid-cols-5 gap-[1.5vw] w-full" style={{ maxWidth: 1400 }}>
        {FIVE_DAYS.map((day, i) => (
          <li
            key={day.d}
            className="rounded-2xl px-[1.4vw] py-[3.5vh] text-center"
            style={{
              border: '1px solid var(--line-2)',
              // The two main-conference days are the heart of it, so they carry
              // the accent while the rest stay quiet.
              background: i === 2 || i === 3 ? 'rgba(235,48,48,0.07)' : 'transparent',
              borderColor: i === 2 || i === 3 ? 'rgba(235,48,48,0.4)' : 'var(--line-2)',
            }}
          >
            <div
              className="display"
              style={{
                color: i === 2 || i === 3 ? 'var(--red)' : 'var(--muted-2)',
                fontSize: 'clamp(11px, 1.05vw, 15px)',
                fontWeight: 700,
                letterSpacing: '0.14em',
              }}
            >
              {day.d.toUpperCase()}
            </div>
            <div
              className="display mt-4"
              style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.5vw, 23px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              {day.t}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-[6vh] flex flex-wrap justify-center gap-x-[5vw] gap-y-[2vh]">
        {pillars.map((t) => (
          <span
            key={t}
            className="display"
            style={{ color: 'var(--fg)', fontSize: 'clamp(16px, 1.9vw, 30px)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Who the main conference is for. Shown as a grid of days by tier, because
 *  "Days 3–4" as a line of text does not answer "what do I actually get". */
function TiersSlide() {
  const DAYS = [
    { n: '1', label: 'Workshops & city tours' },
    { n: '2', label: 'SEO masterminds' },
    { n: '3', label: 'Main conference' },
    { n: '4', label: 'Main conference' },
    { n: '5', label: 'VIP networking' },
  ];
  const TIERS = [
    { name: 'Standard', price: '$600', who: 'SEO practitioners', has: [false, false, true, true, false] },
    { name: 'Deluxe', price: '$900', who: 'Marketing directors, agency leads', has: [true, true, true, true, false], featured: true },
    { name: 'VIP', price: '$1,800', who: 'Executives and founders', has: [true, true, true, true, true] },
  ];

  const label = {
    fontFamily: 'General Sans, system-ui, sans-serif',
    fontSize: 'clamp(9px, 0.85vw, 12px)',
    fontWeight: 600,
    letterSpacing: '0.16em',
  } as const;

  return (
    <div className={CENTER}>
      <Eyebrow center>Who it’s for</Eyebrow>
      <h2
        className="display mt-4"
        style={{ color: 'var(--fg)', fontSize: 'clamp(22px, 2.8vw, 46px)', fontWeight: 700, letterSpacing: '-0.025em' }}
      >
        What each ticket gets you
      </h2>

      <div className="mt-[6vh] w-full text-left" style={{ maxWidth: 1400 }}>
        {/* Column headers: the five days */}
        <div className="grid gap-2" style={{ gridTemplateColumns: '11rem repeat(5, minmax(0, 1fr))' }}>
          <div />
          {DAYS.map((d) => (
            <div key={d.n} className="text-center pb-3">
              <div className="uppercase" style={{ ...label, color: 'var(--muted-2)' }}>
                Day {d.n}
              </div>
              <div
                className="mt-1.5"
                style={{
                  color: 'var(--muted)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(9px, 0.9vw, 13px)',
                  lineHeight: 1.3,
                }}
              >
                {d.label}
              </div>
            </div>
          ))}
        </div>

        {/* One row per tier; a filled bar means that day is included */}
        {TIERS.map((t) => (
          <div
            key={t.name}
            className="grid gap-2 items-center py-[2vh]"
            style={{ gridTemplateColumns: '11rem repeat(5, minmax(0, 1fr))', borderTop: '1px solid var(--line-2)' }}
          >
            <div>
              <div className="uppercase" style={{ ...label, color: t.featured ? 'var(--red)' : 'var(--muted-2)' }}>
                {t.name}
              </div>
              <div
                className="display mt-1.5"
                style={{ color: 'var(--fg)', fontSize: 'clamp(20px, 2.3vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                {t.price}
              </div>
              <div
                className="mt-1.5"
                style={{ color: 'var(--muted-2)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 'clamp(9px, 0.9vw, 13px)', lineHeight: 1.35 }}
              >
                {t.who}
              </div>
            </div>
            {t.has.map((included, i) => (
              <div
                key={i}
                className="rounded-lg"
                style={{
                  height: 'clamp(28px, 4.5vh, 46px)',
                  background: included
                    ? t.featured
                      ? 'linear-gradient(135deg, #eb3030 0%, #fd4c4c 100%)'
                      : 'rgba(249,249,249,0.9)'
                    : 'transparent',
                  border: included ? 'none' : '1px dashed rgba(249,249,249,0.16)',
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Closing call to action: the QR is the whole point, so it gets the space. */
function CtaSlide({
  eyebrow,
  headline,
  footer,
}: {
  eyebrow: string;
  headline: string;
  footer?: string;
}) {
  return (
    <div className={CENTER}>
      <Eyebrow center>{eyebrow}</Eyebrow>
      <Headline center>{headline}</Headline>
      <div
        className="mt-[6vh] rounded-3xl p-[2.2vw]"
        style={{ background: 'var(--fg)', lineHeight: 0 }}
      >
        {/* Unoptimised on purpose: a QR must not be resampled, and it is already
            dark-on-white so it needs no inversion. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/qr-conference.webp"
          alt="QR code linking to shenzhenseoconference.com"
          width={740}
          height={740}
          className="block"
          style={{ width: 'clamp(150px, 20vh, 300px)', height: 'auto', imageRendering: 'pixelated' }}
        />
      </div>
      <p
        className="display mt-[4vh]"
        style={{ color: 'var(--fg)', fontSize: 'clamp(16px, 1.9vw, 30px)', fontWeight: 700, letterSpacing: '-0.005em' }}
      >
        shenzhenseoconference.com
      </p>
      {footer && (
        <p
          className="display mt-[3vh]"
          style={{ color: 'var(--red)', fontSize: 'clamp(18px, 2.2vw, 34px)', fontWeight: 700, letterSpacing: '-0.01em' }}
        >
          {footer}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────── DATA ──────────────────────────────────── */

const DAY1_LINEUP: Speaker[] = [
  { name: 'Tanya Van Gastel', img: '/assets/tanya-van-gastel.webp', country: 'Belgium', topic: 'Winning AI search: a 4-step guide for Chinese companies' },
  { name: 'Magenta Qin', img: '/assets/magenta-qin.webp', country: 'China & Germany', topic: 'From JSON to Markdown: cutting the cost of AI-powered SEO analysis' },
  { name: 'Jacky Lin', img: '/assets/jacky-lin.webp', country: 'China', topic: 'From AI tools to B2B growth systems' },
  { name: 'Sacha Fournier', img: '/assets/sacha-fournier.jpg', country: 'UK', topic: 'Winning in the West: agentic digital PR for Chinese brands' },
  { name: 'Vinayak Gupta & Sharoz Dawa', img: '/assets/vinayak-gupta.webp', country: 'India', topic: 'Build your AI workforce: a 24/7 multi-agent chief of staff' },
];

const DAY2_LINEUP: Speaker[] = [
  { name: 'Jamie I.F.', img: '/assets/jamie-if.webp', country: 'UK', topic: 'Affiliates & influencers to grow AI visibility in the USA' },
  { name: 'Tori Long', img: '/assets/tori-long.webp', country: 'China', topic: 'S.P.A.C.E.: a framework for exporters at a growth ceiling' },
  { name: 'Ilman Akbar', img: '/assets/ilman-akbar.webp', country: 'Indonesia', topic: 'How to talk so the C-suite will listen' },
  { name: 'Jabez Reuben', img: '/assets/jabez-reuben.jpg', country: 'India', topic: 'Dominating LLMs, AiO & Google rankings with consensus' },
  { name: 'Secret Speaker', img: '/assets/speaker-placeholder.webp', country: '', topic: 'Revealed on the day' },
];

export type Slide = {
  id: string;
  notes: string;
  /** A function when the slide builds: it receives the current reveal step. */
  body: React.ReactNode | ((step: number) => React.ReactNode);
  /** How many reveals after the initial state. Omit for a slide shown whole. */
  steps?: number;
};
export type Deck = { slug: string; title: string; day: string; kind: string; slides: Slide[] };

const ALL: (Slide & { section: string })[] = [
  /* ───────────── Sat 12 Sep · Opening ───────────── */
  {
    id: 'd1-welcome',
    section: 'Sat 12 Sep · Opening',
    notes:
      'Hello everyone, and welcome! Thank you so much for taking the time out of your weekend to join us for this Shenzhen SEO Conference Side Event. My name is John, also known as JP Zhang, and I am absolutely thrilled to see all of you here today. Before we dive into the amazing sessions our guest speakers have prepared, I want to take a few minutes to introduce myself, share the story behind the main conference, and explain exactly why we created this free event.',
    body: <TitleSlide line="Side Event" />,
  },
  {
    id: 'd1-surprise',
    section: 'Sat 12 Sep · Opening',
    steps: 2,
    notes:
      'Let me start with a very happy problem. Before I tell you what this is, look at the screen. What do you think these dots mean? Don\u2019t try to count them, I\u2019ll tell you the number. [REVEAL] We planned for about 40 speakers on the main stage. We received more than 150 applications. [REVEAL] So many brilliant people we wanted to give a stage to, and no room for them. So we connected the dots. You want to learn without spending 600 dollars or taking time off work, and we have an abundance of speakers eager to share. That is exactly why this side event exists.',
    body: (step: number) => <SurpriseSlide step={step} />,
  },
  {
    id: 'd1-name',
    section: 'Sat 12 Sep · Opening',
    notes:
      'My name causes some confusion, so let me clear it up first. My full name is Jiangpeng Zhang. Zhang is my family name, and in China the family name comes first. If you read my Chinese blog you know me as John. Everyone else calls me JP, because Jiangpeng is hard to say. Any of the three is fine.',
    body: <NameSlide />,
  },
  {
    id: 'd1-origin',
    section: 'Sat 12 Sep · Opening',
    notes:
      'A little about where I am actually from, because people often guess wrong. I am ninety-two percent made in China. I am thirty-eight, and three and a half of those years were spent studying, working and living in the US. The rest has been China, or travelling. Before twenty-seven I had never been abroad, and had never even been on a plane. I am a countryside boy from Hubei. I am not American-born Chinese, and I am not from Hong Kong, Singapore, Malaysia or Japan. English is my second language. When I arrived in the US in 2013 I struggled badly with accents, and one of my MBA classmates from India joked that I should start again with A to Z. So please lower your expectations for my English today. My Mandarin, on the other hand, is excellent.',
    body: <OriginSlide />,
  },
  {
    id: 'd1-host',
    section: 'Sat 12 Sep · Opening',
    notes:
      'For those I haven’t met yet, here is a quick background on who I am. I’m a serial entrepreneur deeply rooted in this industry. I’ve been in the SEO game for 16 years, experiencing it from every angle—in-house at companies like Wondershare, working at a Silicon Valley agency, and running my own affiliate content sites. Today, I manage several brands, including my blog, our paid community, and of course, the Shenzhen SEO Conference.',
    body: (
      <HostSlide
        summary="16 years in SEO. I call myself an SEO entrepreneur and content creator."
        roles={[
          ['In-house', 'Wondershare, Shenzhen (2010) · Whova, San Diego (2016)'],
          ['Agency', 'Baunfire, San Jose (2014–2015)'],
          ['Affiliate', 'Self-employed (2012–13, 2017–now)'],
        ]}
        brands={[
          ['Shenzhen SEO Conference', '深圳SEO大会'],
          ['SEO Action Blog', '英文SEO实战派'],
          ['SEO Action School', 'SEO实战学院'],
          ['SEO Connector', 'SEO资源对接'],
        ]}
      />
    ),
  },
  {
    id: 'd1-dna',
    section: 'Sat 12 Sep · Opening',
    notes:
      'To understand this side event, you need to know what the main Shenzhen SEO Conference is all about. Our mission is to connect SEO practitioners and entrepreneurs from the East and the West. Our vision is to be the most international SEO conference right here in China. Everything we do is built on three core values: SEO & Organic Growth, SEO Entrepreneurship, and International Partnership. We curate our speakers and attendees based on these pillars. If you align with even just one of these, you are in the right place.',
    body: <DnaSlide />,
  },
  {
    id: 'd1-why',
    section: 'Sat 12 Sep · Opening',
    notes:
      'Let’s be completely honest about why this side event exists. Attending the main conference is a significant commitment. It takes place on weekdays, and the tickets are around $600. We know many of you are deeply curious about what overseas SEO professionals are doing, but you might be hesitating, wondering if the main event is worth the investment and time off work. We wanted to give you a risk-free weekend afternoon to experience our value firsthand. This event is 100% free, with zero sponsors and zero spam. We are absorbing the costs for the venue and organization because we want to present this exclusively to the right people. That is exactly why we required an application form—not to be elitist, but as a filter. As long as you filled it out seriously, you were approved. We wanted to ensure this room is filled with practitioners who genuinely care.',
    body: <WhySlide extra="Application-only, so the room is all practitioners." />,
  },
  {
    id: 'd1-lineup',
    section: 'Sat 12 Sep · Opening',
    notes:
      'Which brings us to today. We have a fantastic lineup of experts ready to share their first-hand strategies with you. My only goal today is for you to enjoy the experience, learn something new, and connect with each other. If you love the vibe today and feel like it’s a good fit, we would love to see you at the main Shenzhen SEO Conference. Let’s get started and welcome our first speaker to the stage!',
    body: <LineupSlide speakers={DAY1_LINEUP} />,
  },

  /* ───────────── Sat 12 Sep · Closing ───────────── */
  {
    id: 'd1c-thanks',
    section: 'Sat 12 Sep · Closing',
    notes:
      'Thank you all for spending your Saturday afternoon with us. When we opened this event a few hours ago, I promised you a space with zero sponsors, zero spam, and 100% pure value. Looking at the conversations and the energy in this room today, I believe we delivered exactly that—a genuine exchange between East and West. But we are only halfway there. We have another incredible lineup of speakers tomorrow from 1:00 PM to 6:00 PM right here, and I highly encourage you to come back for part two.',
    body: (
      <StatementSlide
        photo="/assets/chinese-audience.webp"
        eyebrow="That’s a wrap on day one"
        lines={[
          { text: 'Thank you for today' },
          { text: 'We are only halfway there', muted: true },
        ]}
      />
    ),
  },
  {
    id: 'd1c-iceberg',
    section: 'Sat 12 Sep · Closing',
    notes:
      'What you experienced today is just the tip of the iceberg. Remember those 150+ speaker applications I mentioned at the beginning? Today was just a small glimpse into that talent pool. Everything you heard today ladders up to our three core values: SEO & Organic Growth, SEO Entrepreneurship, and International Partnership. If you found today’s strategies valuable, I want you to know that the depth of knowledge and the level of networking we dive into at the main conference goes infinitely deeper.',
    body: (
      <StatementSlide
        art="/assets/slide-bg-iceberg.webp"
        eyebrow="What you saw today"
        lines={[
          { text: <span style={{ color: 'var(--red)' }}>The tip of the iceberg</span> },
          { text: 'The main conference runs five days: more talks, more speakers, far more depth.', muted: true },
        ]}
      />
    ),
  },
  {
    id: 'd1c-fivedays',
    section: 'Sat 12 Sep · Closing',
    notes:
      'The main Shenzhen SEO Conference isn’t just a series of talks; it is a meticulously planned 5-day experience. Across those five days, we move beyond introductory concepts and dive straight into advanced, actionable systems used by top global practitioners. We facilitate deep, high-value networking events designed to build real international partnerships. It is a fully immersive environment built for serious SEOs and entrepreneurs.',
    body: <FiveDaySlide pillars={['Deep dives & advanced strategies', 'Global networking']} />,
  },
  {
    id: 'd1c-tiers',
    section: 'Sat 12 Sep · Closing',
    notes:
      'There are three ways in. Standard is $600 and covers the two main conference days. Deluxe is $900 and adds the workshops, the city tours and the masterminds. VIP is $1,800 and adds the fifth day, the VIP networking day. Pick the one that matches how deep you want to go.',
    body: <TiersSlide />,
  },
  {
    id: 'd1c-cta',
    section: 'Sat 12 Sep · Closing',
    notes:
      'We know taking time off work and investing $600 for a ticket is a big commitment. That is exactly why we hosted this free side event—so you could test our standard and feel the atmosphere yourself. If today proved to you that we prioritize real signal over noise, then I can confidently say the 5-day main event is an investment that will return its value many times over. The QR code on the screen has all the details for the main conference. Scan it, look at the full agenda, and if you are ready to step into that room, we would be honored to welcome you. Have a great evening, and I will see you all back here tomorrow at 1:00 PM!',
    body: <CtaSlide eyebrow="Join the right room" headline="Invest in your growth" footer="See you tomorrow, 1:00 PM" />,
  },

  /* ───────────── Sun 13 Sep · Opening ───────────── */
  {
    id: 'd2-welcome',
    section: 'Sun 13 Sep · Opening',
    notes:
      'Hello everyone, and welcome to Day 2 of the Shenzhen SEO Conference Side Event! Whether you are joining us again after yesterday’s amazing sessions or you are here for the first time today, thank you for spending your Sunday afternoon with us. My name is John, or JP Zhang. Before we hand the stage over to today’s brand new lineup of speakers, I want to briefly share the story behind the main conference and why we created this space.',
    body: (
      <TitleSlide
        line={
          <>
            Side Event <span style={{ color: 'var(--red)' }}>Day 2</span>
          </>
        }
      />
    ),
  },
  {
    id: 'd2-surprise',
    section: 'Sun 13 Sep · Opening',
    notes:
      'Let me start with an incredible surprise. We initially planned for 40 speakers on the main stage, but we received over 150 applications from brilliant global experts. We couldn’t fit them all on the main stage, so we created this side event as a bridge. It allows domestic and international practitioners to share the same stage and exchange ideas directly.',
    steps: 2,
    body: (step: number) => <SurpriseSlide step={step} />,
  },
  {
    id: 'd2-name',
    section: 'Sun 13 Sep · Opening',
    notes:
      'My name causes some confusion, so let me clear it up first. My full name is Jiangpeng Zhang. Zhang is my family name, and in China the family name comes first. If you read my Chinese blog you know me as John. Everyone else calls me JP, because Jiangpeng is hard to say. Any of the three is fine.',
    body: <NameSlide />,
  },
  {
    id: 'd2-origin',
    section: 'Sun 13 Sep · Opening',
    notes:
      'A little about where I am actually from, because people often guess wrong. I am ninety-two percent made in China. I am thirty-eight, and three and a half of those years were spent studying, working and living in the US. The rest has been China, or travelling. Before twenty-seven I had never been abroad, and had never even been on a plane. I am a countryside boy from Hubei. I am not American-born Chinese, and I am not from Hong Kong, Singapore, Malaysia or Japan. English is my second language. When I arrived in the US in 2013 I struggled badly with accents, and one of my MBA classmates from India joked that I should start again with A to Z. So please lower your expectations for my English today. My Mandarin, on the other hand, is excellent.',
    body: <OriginSlide />,
  },
  {
    id: 'd2-host',
    section: 'Sun 13 Sep · Opening',
    notes:
      'For the new faces in the room, here is a quick background on who I am. I’m a serial entrepreneur deeply rooted in this industry. I’ve been in the SEO game for 16 years, experiencing it from every angle—in-house, working at a Silicon Valley agency, and running my own affiliate content sites. Today, I manage several brands, including my blog, our paid community, and the Shenzhen SEO Conference.',
    body: (
      <HostSlide
        summary="16 years in SEO. I call myself an SEO entrepreneur and content creator."
        roles={[
          ['In-house', 'Wondershare, Shenzhen (2010) · Whova, San Diego (2016)'],
          ['Agency', 'Baunfire, San Jose (2014–2015)'],
          ['Affiliate', 'Self-employed (2012–13, 2017–now)'],
        ]}
        brands={[
          ['Shenzhen SEO Conference', '深圳SEO大会'],
          ['SEO Action Blog', '英文SEO实战派'],
          ['SEO Action School', 'SEO实战学院'],
          ['SEO Connector', 'SEO资源对接'],
        ]}
      />
    ),
  },
  {
    id: 'd2-dna',
    section: 'Sun 13 Sep · Opening',
    notes:
      'Everything we do is driven by the DNA of the main Shenzhen SEO Conference. Our mission is to connect SEO practitioners and entrepreneurs from the East and the West. Our vision is to be the most international SEO conference in China. We build everything on three core values: SEO & Organic Growth, SEO Entrepreneurship, and International Partnership. If you align with these values, you belong in this community.',
    body: <DnaSlide />,
  },
  {
    id: 'd2-why',
    section: 'Sun 13 Sep · Opening',
    notes:
      'Attending the main conference is a significant commitment. It takes place on weekdays, and the tickets are around $600. We know many of you want to learn from overseas SEO professionals but might be hesitating to take time off work or make that investment. We wanted to give you a risk-free weekend to experience our standard firsthand. This event is 100% free, with zero sponsors and zero spam. We require an application simply to filter the room and ensure everyone here is a dedicated practitioner.',
    body: <WhySlide extra="A risk-free weekend to see the standard for yourself." />,
  },
  {
    id: 'd2-lineup',
    section: 'Sun 13 Sep · Opening',
    notes:
      'That brings us to our agenda for today, September 13th. We have a completely different, yet equally fantastic lineup of experts ready to share their strategies with you this afternoon. My goal for you is to learn, connect, and enjoy the vibe. If you find value today, we would love to see you at the main Shenzhen SEO Conference. Let’s get started and welcome our first speaker for Day 2 to the stage!',
    body: <LineupSlide speakers={DAY2_LINEUP} />,
  },

  /* ───────────── Sun 13 Sep · Closing ───────────── */
  {
    id: 'd2c-thanks',
    section: 'Sun 13 Sep · Closing',
    notes:
      'And just like that, our two-day side event comes to a close. Whether you were here for just today or spent your entire weekend with us, thank you. When we kicked this off, I promised you an environment with zero sponsors, zero spam, and pure, actionable value. Looking at the conversations sparked in this room between domestic and international practitioners, I am incredibly proud of what this community just built together over the last 48 hours.',
    body: (
      <StatementSlide
        photo="/assets/chinese-audience.webp"
        eyebrow="That’s a wrap"
        lines={[
          { text: 'Thank you for your weekend' },
          { text: 'Real connections. Real strategies.', muted: true },
        ]}
      />
    ),
  },
  {
    id: 'd2c-iceberg',
    section: 'Sun 13 Sep · Closing',
    notes:
      'We created this event because we had over 150 brilliant speaker applications and wanted to give you a risk-free taste of our standard. But I want to be very clear: what you experienced this weekend is just the tip of the iceberg. Every strategy you heard today ladders up to our three core values of Growth, Entrepreneurship, and Partnership. If you found these sessions valuable, the depth we reach at the main conference goes infinitely further.',
    body: (
      <StatementSlide
        art="/assets/slide-bg-iceberg.webp"
        eyebrow="What you saw this weekend"
        lines={[
          { text: <span style={{ color: 'var(--red)' }}>The tip of the iceberg</span> },
          { text: 'The main conference runs five days: more talks, more speakers, far more depth.', muted: true },
        ]}
      />
    ),
  },
  {
    id: 'd2c-fivedays',
    section: 'Sun 13 Sep · Closing',
    notes:
      'We know that asking you to take time off work during the week and invest $600 in a ticket is a massive commitment. That is exactly why we didn’t just ask you to trust us—we showed you. The main Shenzhen SEO Conference is not just a series of talks; it is a meticulously curated 5-day immersion. It is where we strip away the basics and dive straight into the advanced, highly guarded systems used by top global practitioners. It is designed to forge real, high-level international partnerships.',
    body: <FiveDaySlide pillars={['Advanced global systems', 'High-signal networking']} />,
  },
  {
    id: 'd2c-tiers',
    section: 'Sun 13 Sep · Closing',
    notes:
      'There are three ways in. Standard is $600 and covers the two main conference days. Deluxe is $900 and adds the workshops, the city tours and the masterminds. VIP is $1,800 and adds the fifth day, the VIP networking day. Pick the one that matches how deep you want to go.',
    body: <TiersSlide />,
  },
  {
    id: 'd2c-cta',
    section: 'Sun 13 Sep · Closing',
    notes:
      'If this weekend proved to you that we prioritize real signal over noise, then I can confidently say the main event is an investment that will pay dividends for your business and career. The QR code on the screen contains the full 5-day agenda and ticket access. Scan it, make the investment in your growth, and step into the main room with us. Thank you all once again for an incredible weekend, safe travels home, and I hope to see you at the main Shenzhen SEO Conference!',
    body: <CtaSlide eyebrow="Final call" headline="Step into the main room" footer="See you next week" />,
  },
];

function pick(section: string): Slide[] {
  return ALL.filter((s) => s.section === section).map(({ section: _section, ...rest }) => rest);
}

export const DECKS: Deck[] = [
  { slug: 'sat-opening', day: 'Saturday 12 September', kind: 'Opening remarks', title: 'Sat 12 Sep · Opening', slides: pick('Sat 12 Sep · Opening') },
  { slug: 'sat-closing', day: 'Saturday 12 September', kind: 'Closing remarks', title: 'Sat 12 Sep · Closing', slides: pick('Sat 12 Sep · Closing') },
  { slug: 'sun-opening', day: 'Sunday 13 September', kind: 'Opening remarks', title: 'Sun 13 Sep · Opening', slides: pick('Sun 13 Sep · Opening') },
  { slug: 'sun-closing', day: 'Sunday 13 September', kind: 'Closing remarks', title: 'Sun 13 Sep · Closing', slides: pick('Sun 13 Sep · Closing') },
];

export const DECK_BY_SLUG = Object.fromEntries(DECKS.map((d) => [d.slug, d]));
