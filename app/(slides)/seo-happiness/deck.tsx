'use client';

import Image from 'next/image';

import { Eyebrow, HostSlide, NameSlide, OriginSlide, type Slide } from '../side-event-slides/deck';
import { ContactCards } from '../nine-steps/deck';
import { ByRole, CENTER, GoalsCompare, Kicker, PAD, Proverb, Statement } from './layouts';

/** Small red section label, used where a slide has more than one block. */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="uppercase"
      style={{
        color: 'var(--red)',
        fontFamily: 'General Sans, system-ui, sans-serif',
        fontSize: 'clamp(9px, 0.9vw, 12px)',
        fontWeight: 700,
        letterSpacing: '0.2em',
      }}
    >
      {children}
    </div>
  );
}

const GOAL_GREEN = '#3FBF7F';

/**
 * Six goals, three bad then three good, revealed in two beats so the room sits
 * with the bad ones before the answers arrive. Every row is rendered at both
 * beats and hidden with opacity, so the table does not resize mid-explanation.
 */
function GoalsTable({ step = 1 }: { step?: number }) {
  const sans = 'General Sans, system-ui, sans-serif';
  const rows: { goal: string; good: boolean; why: string }[] = [
    { goal: '“2x our organic traffic”', good: false, why: 'Traffic isn’t guaranteed, and double the traffic is not double the sales.' },
    { goal: '“Double SEO-driven sales”', good: false, why: 'Attribution is too hard, especially in B2B. SEO facilitates, it rarely closes.' },
    { goal: '“Top 3 rankings in 30 days”', good: false, why: 'Unrealistic timeline. We don’t control Google’s algorithm.' },
    { goal: '“Rank 20 branded keywords #1, and positive LLM sentiment within 3 months, then hold it”', good: true, why: 'High business impact. Measurable, and it breaks down into clear action items.' },
    { goal: '“Recover from the August 2026 core update hit in 9 months”', good: true, why: 'Clear objective, realistic timeframe, easy to benchmark.' },
    { goal: '“Increase indexed pages by 50% by the end of this quarter”', good: true, why: 'Specific, time-bound, and actionable.' },
  ];
  const cols = 'grid-cols-[minmax(0,1.05fr)_5.5rem_minmax(0,1.15fr)]';
  const head = {
    color: 'var(--muted-2)',
    fontFamily: sans,
    fontSize: 'clamp(9px, 0.9vw, 12px)',
    fontWeight: 700,
    letterSpacing: '0.18em',
  } as const;

  return (
    <div className={`h-full flex flex-col justify-center ${PAD}`}>
      <h2
        className="display st st-1"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(20px, 2.6vw, 42px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.028em',
        }}
      >
        Setting SEO goals (the good vs the bad)
      </h2>

      <div className="mt-[6vh]">
        <div className={`grid ${cols} gap-x-[2.5vw] pb-2.5`} style={{ borderBottom: '1px solid var(--line-2)' }}>
          <div className="uppercase" style={head}>The goal</div>
          <div className="uppercase" style={head}>Status</div>
          <div className="uppercase" style={head}>The reason why</div>
        </div>

        {rows.map((r, i) => (
          <div
            key={r.goal}
            className={`grid ${cols} gap-x-[2.5vw] items-baseline py-[1.6vh]`}
            style={{
              borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(249,249,249,0.06)',
              // Bad rows are there from the start; the good ones arrive on the
              // second beat, but hold their space so nothing shifts.
              opacity: r.good && step < 1 ? 0 : 1,
              transition: 'opacity 420ms ease-out',
            }}
          >
            <div
              className="display"
              style={{
                color: r.good ? GOAL_GREEN : 'var(--red)',
                fontSize: 'clamp(12px, 1.3vw, 20px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {r.goal}
            </div>
            <div
              style={{
                color: r.good ? GOAL_GREEN : 'var(--red)',
                fontFamily: sans,
                fontSize: 'clamp(11px, 1.15vw, 17px)',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              {r.good ? '✅ Good' : '❌ Bad'}
            </div>
            <div
              style={{
                color: 'var(--muted)',
                fontFamily: sans,
                fontSize: 'clamp(11px, 1.15vw, 17px)',
                lineHeight: 1.45,
              }}
            >
              {r.why}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Shared title for the three step-3 execution slides. */
function S3Title({ main = 'Step 3: Controlling Your Inputs (How to Actually Do It)', sub }: { main?: string; sub?: string }) {
  return (
    <>
      <h2
        className="display st st-1"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(18px, 2.3vw, 37px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.028em',
          textWrap: 'balance',
        }}
      >
        {main}
      </h2>
      {sub && (
        <div className="mt-3">
          <SectionLabel>{sub}</SectionLabel>
        </div>
      )}
    </>
  );
}

/** A note under an execution list: the part he says out loud, on screen. */
function SlideNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[3vh] pl-4" style={{ borderLeft: '2px solid rgba(235,48,48,0.45)' }}>
      <p
        style={{
          color: 'var(--muted-2)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 'clamp(10px, 1.05vw, 16px)',
          lineHeight: 1.5,
        }}
      >
        {children}
      </p>
    </div>
  );
}

/**
 * One numbered input in an execution breakdown. The number sits in its own
 * tinted chip and the label is set apart from the detail, so six of these read
 * as six steps rather than as a paragraph with digits in it.
 */
function InputRow({ n, k, children }: { n: number; k: string; children: React.ReactNode }) {
  return (
    <li
      className="grid grid-cols-[2.4rem_1fr] gap-x-4 items-baseline py-[1.4vh]"
      style={{ borderTop: n === 1 ? 'none' : '1px solid rgba(249,249,249,0.07)' }}
    >
      <span
        className="display tabular-nums text-center rounded-md"
        style={{
          color: 'var(--red)',
          background: 'rgba(235,48,48,0.10)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 'clamp(11px, 1.15vw, 17px)',
          fontWeight: 700,
          letterSpacing: '0.06em',
          padding: '0.25em 0',
        }}
      >
        {String(n).padStart(2, '0')}
      </span>
      <span
        style={{
          color: 'var(--muted)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 'clamp(13px, 1.42vw, 23px)',
          lineHeight: 1.45,
        }}
      >
        <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>{k}</strong> {children}
      </span>
    </li>
  );
}

/** The goal line that heads each execution breakdown. */
function GoalLine({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="display mt-[4.5vh] st st-2"
      style={{ color: 'var(--fg)', fontSize: 'clamp(13px, 1.5vw, 24px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}
    >
      <span style={{ color: 'var(--red)' }}>Goal:</span> {children}
    </p>
  );
}

export const SEO_HAPPINESS: Slide[] = [
  {
    id: 'hap-poll',
    steps: 1,
    notes:
      'Before anything else, two questions, hands up. First: who here is an SEO? Keep your hand up. [REVEAL] Second, and keep it up only if this is true too: who here is happy? Look around the room. That gap, between the hands that stayed up and the hands that went down, is what this whole talk is about.',
    body: (step: number) => (
      <div className={CENTER}>
        <Kicker center>Hands up</Kicker>
        {/* Both rows are always rendered and the second is hidden with opacity,
            so the first question does not jump up the slide when the second
            arrives. */}
        <div className="mt-[7vh] flex flex-col gap-[6vh] w-full" style={{ maxWidth: 1100 }}>
          {[
            { q: 'Are you an SEO?', n: '01', accent: false },
            { q: 'Are you happy?', n: '02', accent: true },
          ].map((row, i) => (
            <div
              key={row.n}
              className={`flex items-baseline justify-center gap-6 ${i === 0 ? 'st st-1' : ''}`}
              style={i === 0 ? undefined : { opacity: step >= 1 ? 1 : 0, transition: 'opacity 420ms ease-out' }}
            >
              <span
                className="display"
                style={{ color: 'var(--muted-2)', fontSize: 'clamp(14px, 1.5vw, 22px)', fontWeight: 700, letterSpacing: '0.1em' }}
              >
                {row.n}
              </span>
              <span
                className="display"
                style={{
                  color: row.accent ? 'var(--red)' : 'var(--fg)',
                  fontSize: 'clamp(34px, 5.4vw, 92px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                }}
              >
                {row.q}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'hap-title',
    notes:
      'Good afternoon. I want to talk about something we do not talk about at SEO conferences, which is whether doing this work actually makes you happy. And I am going to argue that happiness in SEO is not luck, it is engineered, in three steps.',
    body: (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 t-drift">
          <Image src="/assets/slide-bg-title.webp" alt="" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.62)' }} />
        <div className={`relative ${CENTER}`}>
          <Eyebrow center>Sunday 13 September</Eyebrow>
          <h1
            className="display mt-6 t-rise"
            style={{
              color: 'var(--fg)',
              // Smaller than a two-word title would be: this one is a full
              // phrase and has to hold on two lines without crowding the rule.
              fontSize: 'clamp(30px, 4.4vw, 76px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
              maxWidth: '20ch',
            }}
          >
            {/* The quoted phrase must not break: left to wrap freely it split
                after "Happiness" and stranded the emoji and closing quote at
                the start of line two. */}
            The{' '}
            <span style={{ color: 'var(--red)', whiteSpace: 'nowrap' }}>“SEO Happiness 😀”</span>{' '}
            Formula
          </h1>
          <div
            className="mt-[5vh] t-rule"
            style={{
              width: 'min(42vw, 440px)',
              height: 3,
              borderRadius: 3,
              background: 'linear-gradient(90deg, transparent 0%, var(--teal) 22%, var(--red) 78%, transparent 100%)',
            }}
          />
          <p
            className="mt-[5vh] t-rise t-rise-3"
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(15px, 1.8vw, 27px)',
              fontWeight: 500,
            }}
          >
            3 steps to better results and less stress
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-name',
    notes:
      'My name causes some confusion, so let me clear it up first. My full name is Jiangpeng Zhang. Zhang is my family name, and in China the family name comes first. If you read my Chinese blog you know me as John. Everyone else calls me JP, because Jiangpeng is hard to say. Any of the three is fine.',
    body: <NameSlide />,
  },
  {
    id: 'hap-origin',
    notes:
      'A little about where I am actually from, because people often guess wrong. I am ninety-two percent made in China. I am thirty-eight, and three and a half of those years were spent studying, working and living in the US. The rest has been China, or travelling. Before twenty-seven I had never been abroad, and had never even been on a plane. I am a countryside boy from Hubei. I am not American-born Chinese, and I am not from Hong Kong, Singapore, Malaysia or Japan. English is my second language. When I arrived in the US in 2013 I struggled badly with accents, and one of my MBA classmates from India joked that I should start again with A to Z. So please lower your expectations for my English today. My Mandarin, on the other hand, is excellent.',
    body: <OriginSlide />,
  },
  {
    id: 'hap-host',
    notes:
      'Sixteen years in SEO: in-house, agency side, and running my own affiliate sites. I have been unhappy in all three, which is partly why I care about this.',
    body: (
      <HostSlide
        summary="16 years in SEO."
        roles={[
          ['In-house', 'Wondershare, Shenzhen (2010–2011) · Whova, San Diego (2016)'],
          ['Agency', 'Baunfire, San Jose (2014–2015)'],
          ['Affiliate SEO', 'Self-employed (2012–2013, 2017–now)'],
        ]}
        brands={[
          ['Shenzhen SEO Conference', '深圳SEO大会'],
          ['SEO Action Blog', '英文SEO实战派'],
          ['SEO Action School', 'SEO实战学院'],
          ['SEO Connector', 'SEO资源对接'],
        ]}
        demoBrands={['JP Basketball', 'JP Humanizer', 'JP Power']}
      />
    ),
  },

  /* ── The hook: a live poll ── */

  {
    id: 'hap-equation',
    notes:
      'Here is the formula. SEO happiness is not a soft idea, it is two things multiplied together. Being good at SEO, and being happy. Most of us optimise one and neglect the other.',
    body: (
      <div className={CENTER}>
        <Kicker center>The formula</Kicker>
        {/* Sized to hold on one line: at the old size it broke after the ×,
            which stranded the operator away from what it multiplies. */}
        <div className="mt-[7vh] flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
          {[
            { t: 'SEO happiness', c: 'var(--fg)' },
            { t: '=', c: 'var(--muted-2)' },
            { t: 'SEO', c: 'var(--teal-2)' },
            { t: '×', c: 'var(--muted-2)' },
            { t: 'Happiness', c: 'var(--red)' },
          ].map((part, i) => (
            <span
              key={part.t}
              className={`display st st-${i + 1}`}
              style={{ color: part.c, fontSize: 'clamp(22px, 3.4vw, 58px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              {part.t}
            </span>
          ))}
        </div>
        <p
          className="mt-[7vh] st st-5"
          style={{
            color: 'var(--muted)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(14px, 1.6vw, 24px)',
            fontWeight: 400,
            maxWidth: '44ch',
            lineHeight: 1.6,
          }}
        >
          Most of us spend the whole career optimising the left half and never touching the right.
        </p>
      </div>
    ),
  },

  {
    id: 'hap-definition',
    notes:
      'So here is my definition, and it is three things at once, not one. SEO happiness equals confidence, plus stress-free, plus a better life. One: having supreme confidence in achieving your SEO goals. Two: remaining completely stress-free while you do it. Three: living a better lifestyle. You need all three at the same time. If you already have all three, you can leave now and enjoy your Sunday. If not, the good news is that it can be engineered, and that is what the rest of this talk is about.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <Kicker>My definition</Kicker>

        {/* The three terms are named here rather than numbered, so the numbers
            appear once, on the cards, instead of three times over. */}
        <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 st st-1">
          {[
            { t: 'SEO Happiness', c: 'var(--fg)' },
            { t: '=', c: 'var(--muted-2)' },
            { t: 'Confidence', c: 'var(--red)' },
            { t: '+', c: 'var(--muted-2)' },
            { t: 'Stress-Free', c: 'var(--red)' },
            { t: '+', c: 'var(--muted-2)' },
            { t: 'Better Life', c: 'var(--red)' },
          ].map((part, i) => (
            <span
              key={i}
              className="display"
              style={{ color: part.c, fontSize: 'clamp(18px, 2.5vw, 42px)', fontWeight: 700, letterSpacing: '-0.028em', lineHeight: 1.1 }}
            >
              {part.t}
            </span>
          ))}
        </div>

        {/* The artwork, the arrows and the sentences all share one width, and
            the three ring centres sit within a percent of equal thirds, so a
            plain 3-column grid lines each sentence up under its own ring. */}
        <div className="mt-[3.5vh] flex flex-col items-center">
          <div
            className="relative hidden md:block dia-in w-full"
            style={{ maxWidth: 'clamp(420px, 42vw, 700px)', aspectRatio: '1157 / 539' }}
          >
            <Image src="/assets/dia-definition-v3.webp" alt="" fill className="object-contain" sizes="55vw" />
          </div>

          <div className="w-full" style={{ maxWidth: 'clamp(420px, 42vw, 700px)' }}>
            <div className="hidden md:grid grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex justify-center">
                  <svg width="14" height="30" viewBox="0 0 14 30" aria-hidden="true">
                    <path
                      d="M7 0 V22 M2 17 L7 23 L12 17"
                      fill="none"
                      stroke="var(--red)"
                      strokeOpacity="0.65"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-x-5 md:grid-cols-3">
              {[
                'Having supreme confidence in achieving your SEO goals',
                'Remaining completely stress-free',
                'Living a better lifestyle',
              ].map((h, i) => (
                <div
                  key={h}
                  className={`display text-center st st-${i + 2}`}
                  style={{ color: 'var(--fg)', fontSize: 'clamp(13px, 1.45vw, 23px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25 }}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p
          className="display mt-[6vh] st st-5"
          style={{ color: 'var(--fg)', fontSize: 'clamp(15px, 1.8vw, 29px)', fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          🤔 Not there yet? <span style={{ color: 'var(--red)' }}>It can be engineered.</span> 👉
        </p>
      </div>
    ),
  },

  {
    id: 'hap-s1',
    notes:
      'Step one, positioning. Here is the core truth. If you do not know who you are, do not expect an LLM or Google to describe you accurately. And if you do not know who you really serve, your ICP, do not expect AI or your own sales team to close deals efficiently. The machine cannot be clearer about you than you are. So, two action items. First, use the same three C\u2019s, customers, competitors and context, to work out your unique business positioning. If you do not know how, go and ask Anu Ramani. Second, use the Truth/Trust Alignment Framework and learn how to turn AI into your salesman. If you do not know how, follow Steve Toth.',
    body: (
      <div className="h-full grid md:grid-cols-[1fr_minmax(0,40%)]">
        <div className={`flex flex-col justify-center ${PAD}`}>
          {/* One full title, not a kicker plus a headline: the sentence reads
              as a sentence and does not need splitting to carry weight. */}
          <h2
            className="display st st-1"
            style={{
              color: 'var(--fg)',
              // Sized to hold on one line beside the Venn.
              fontSize: 'clamp(18px, 2.25vw, 37px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.028em',
              whiteSpace: 'nowrap',
            }}
          >
            Step 1: Positioning (Who Are You?)
          </h2>

          <div className="mt-[4.5vh] st st-2">
            <SectionLabel>The core truth</SectionLabel>
            <ul className="mt-3 flex flex-col gap-2.5">
              {[
                <>
                  If you do not know <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>who you are</strong>,
                  don’t expect LLMs or Google to describe you accurately.
                </>,
                <>
                  If you don’t know <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>who you really serve</strong>{' '}
                  (ICP), don’t expect AI or your sales team to close deals efficiently.
                </>,
              ].map((t, i) => (
                <li key={i} className="pl-4" style={{ borderLeft: '2px solid rgba(235,48,48,0.45)' }}>
                  <span
                    style={{
                      color: 'var(--muted)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(12px, 1.25vw, 19px)',
                      lineHeight: 1.5,
                    }}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[4.5vh] st st-3">
            <SectionLabel>Action items</SectionLabel>
            <ul className="mt-3.5 flex flex-col gap-4">
              {[
                {
                  img: '/assets/speaker-anu-ramani.webp',
                  who: 'Anu Ramani',
                  verb: 'Ask',
                  text: (
                    <>
                      Use the same <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>3 C’s</strong> (customers,
                      competitors, context) to figure out your unique business positioning.
                    </>
                  ),
                },
                {
                  img: '/assets/speaker-steve-toth.webp',
                  who: 'Steve Toth',
                  verb: 'Follow',
                  text: (
                    <>
                      Use the <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Truth/Trust Alignment
                      Framework</strong> and learn how to turn AI into your salesman.
                    </>
                  ),
                },
              ].map((a) => (
                <li key={a.who} className="flex items-start gap-4">
                  <span
                    className="relative shrink-0 rounded-full overflow-hidden"
                    style={{
                      width: 'clamp(44px, 4.6vw, 76px)',
                      height: 'clamp(44px, 4.6vw, 76px)',
                      border: '2px solid rgba(235,48,48,0.55)',
                    }}
                  >
                    <Image src={a.img} alt={a.who} fill className="object-cover" sizes="80px" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className="block"
                      style={{
                        color: 'var(--muted)',
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 'clamp(12px, 1.25vw, 19px)',
                        lineHeight: 1.45,
                      }}
                    >
                      {a.text}
                    </span>
                    <span
                      className="block mt-1.5"
                      style={{
                        color: 'var(--muted-2)',
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 'clamp(11px, 1.1vw, 16px)',
                        lineHeight: 1.4,
                      }}
                    >
                      Don’t know how?{' '}
                      <strong style={{ color: 'var(--red)', fontWeight: 700 }}>
                        {a.verb} {a.who}.
                      </strong>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Margin, not padding: a `fill` image is positioned against the
            padding box, so padding would not have moved it at all. */}
        <div className="relative hidden md:block dia-in mr-[3vw]">
          <Image src="/assets/dia-venn.webp" alt="" fill className="object-contain" sizes="40vw" />
        </div>
      </div>
    ),
  },

  {
    id: 'hap-s1-roles',
    notes:
      'This lands differently depending on your seat. In-house, run the three Cs exercise with your stakeholders so your specific value is on paper. Agency side, decide who you serve and who you turn away. Affiliate, know your edge and pick your lane ruthlessly.',
    body: (
      <ByRole
        kicker="Step 1: Positioning (by role)"
        title="What positioning means in your seat"
        rows={[
          ['In-house SEO', 'Run the 3 C’s with your stakeholders, and prove your specific value on paper.'],
          ['SEO Agency/Consultants', 'Figure out exactly the kind of clients you want to serve (and who you don’t).'],
          ['Affiliate SEO', 'Know your unique strengths and select your niches wisely.'],
        ]}
        footer={
          <Proverb
            cn="三百六十行，行行出状元"
            en="Three hundred and sixty trades, and every one of them produces a champion."
          />
        }
      />
    ),
  },

  /* ── Step 2 ── */
  {
    id: 'hap-s2',
    notes:
      'Step two, goal setting. The core truth first: if you cannot articulate what you want, you will never get it. Now the methodology, and the order is the whole point. Start with the customer journey. From that, the marketing strategy. From that, the marketing goal. And only then do you work out what role SEO plays and what its goal should be. Two lessons from this. Never work backward, or you will get lost. And do not start with keyword research, because the SEO game has changed.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <h2
          className="display st st-1"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(22px, 2.8vw, 46px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.028em',
            textWrap: 'balance',
          }}
        >
          Step 2: Goal-Setting (What Do You Want?)
        </h2>

        <div className="mt-[4vh] st st-2 pl-4" style={{ borderLeft: '2px solid rgba(235,48,48,0.45)' }}>
          <SectionLabel>The core truth</SectionLabel>
          <p
            className="display mt-2"
            style={{ color: 'var(--fg)', fontSize: 'clamp(15px, 1.8vw, 29px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}
          >
            If you cannot articulate what you want, you will never get it.
          </p>
        </div>

        {/* The flow reads left to right, so it spans the full width and the
            lessons sit under it. The trimmed art is a 4.7:1 strip: the original
            carried so much empty margin that object-contain shrank it to a
            third of the space it was given. */}
        <div className="mt-[4vh] st st-3">
          <SectionLabel>The methodology</SectionLabel>
          <div className="relative mt-3 dia-in w-full" style={{ height: 'clamp(90px, 19vh, 210px)' }}>
            <Image
              src="/assets/dia-goalflow-v2.webp"
              alt="Customer journey, then marketing strategy, then marketing goal, then SEO’s role and goals"
              fill
              className="object-contain"
              sizes="92vw"
            />
          </div>
        </div>

        <div className="mt-[4vh] st st-4">
          <SectionLabel>Key lessons</SectionLabel>
          {/* Stacked, not side by side: in two columns the second lesson sat
              halfway across the slide, far from the first. */}
          <ul className="mt-3 flex flex-col gap-3" style={{ maxWidth: '80ch' }}>
            {[
              <>
                <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Never work backward.</strong> You will
                probably get lost.
              </>,
              <>
                <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Don’t start with keyword research.</strong>{' '}
                The SEO game has changed.
              </>,
            ].map((t, i) => (
              <li key={i} className="grid grid-cols-[1.6rem_1fr] gap-x-3 items-baseline">
                <span
                  className="display tabular-nums"
                  style={{ color: 'var(--red)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 'clamp(10px, 0.95vw, 13px)', fontWeight: 700, letterSpacing: '0.1em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    color: 'var(--muted)',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 'clamp(13px, 1.5vw, 24px)',
                    lineHeight: 1.5,
                  }}
                >
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-s2-goals',
    steps: 1,
    notes:
      'Let me make that concrete. Here are three goals I hear all the time, and all three of them are bad. Two times our organic traffic: traffic is not guaranteed, and double the traffic is not double the sales. Double SEO-driven sales: attribution is too hard, especially in B2B, and SEO facilitates a sale, it rarely closes one. Top three rankings in thirty days: unrealistic, and we do not control Google\u2019s algorithm. [REVEAL] Now three good ones. Number one for your brand plus positive LLM sentiment within three months, and hold it: high business impact, measurable, and it breaks down into clear actions. Recover from the August 2026 core update hit within nine months: clear objective, realistic timeframe, easy to benchmark. Grow indexed pages by fifty percent by the end of the quarter: specific, time-bound and actionable. Notice what the good ones have in common. Every one of them is something you can actually own.',
    body: (step: number) => <GoalsTable step={step} />,
  },

  {
    id: 'hap-s2-roles',
    notes:
      'By role again. In-house, tie the SEO goal to a revenue target so it survives budget season. Agency, this is expectation-setting with the client and a growth metric for you. Affiliate, you are an entrepreneur, so set goals across work, life and revenue, not just revenue.',
    body: (
      <ByRole
        kicker="Step 2: Goal-Setting (by role)"
        title="Whose number are you carrying?"
        rows={[
          ['In-house SEO', ['Align with marketing strategy and business priorities', 'Aim at brand visibility and pipeline impact', 'Not raw revenue']],
          ['SEO Agency/Consultants', ['Align with client expectations', 'Scope deliverables and retention metrics', 'Drive predictable agency growth']],
          ['Affiliate SEO', ['Set holistic targets', 'Revenue, growth and work-life balance', 'You are a true entrepreneur']],
        ]}
        footer={
          <Proverb
            cn="有的放矢，方能致远；无的放矢，终无所获。"
            en="Aim at a target and you can go far. Shoot without one and you get nothing."
          />
        }
      />
    ),
  },

  /* ── Step 3 ── */
  {
    id: 'hap-s3',
    notes:
      'Step three, and this is the heart of the talk. Any SEO result is good strategy, times good execution, times luck and patience. Look at what is on each side of that. You control the strategy: product-led content, topic selection, partner-led link building. You control the execution: producing the content, building the links, fixing the technical problems, running the CRO tests. You do not control luck and the algorithms, the core updates, what your competitors do, where the market moves. And you do not control time: Google\u2019s crawling schedule and indexing lag are not yours to set. So here is the takeaway. You do not control the final result. You only control the effort. Stop stressing over algorithm volatility and put everything into high-quality inputs and relentless execution.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <S3Title main="Step 3: Controlling Your Inputs (What Can You Do?)" />

        {/* The two terms you own are lit; the one you do not is greyed. The
            colours carry straight down into the two columns below. */}
        <div
          className="mt-[6vh] flex flex-wrap items-baseline gap-x-3 gap-y-2 st st-2 pl-5"
          style={{ borderLeft: '2px solid rgba(235,48,48,0.45)' }}
        >
          {[
            { t: 'SEO Result', c: 'var(--fg)' },
            { t: '=', c: 'var(--muted-2)' },
            { t: '(Good Strategy)', c: 'var(--teal-2)' },
            { t: '×', c: 'var(--muted-2)' },
            { t: '(Good Execution)', c: 'var(--teal-2)' },
            { t: '×', c: 'var(--muted-2)' },
            { t: '(Luck & Patience)', c: 'rgba(249, 249, 249, 0.32)' },
          ].map((part, i) => (
            <span
              key={i}
              className="display"
              style={{ color: part.c, fontSize: 'clamp(16px, 2.1vw, 35px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {part.t}
            </span>
          ))}
        </div>

        {/* Two panels rather than two text columns: the one you own is lit and
            solid, the one you don't is dimmed and dashed. The border carries
            the argument, so the words don't have to work as hard. */}
        <div className="mt-[6vh] grid gap-[2.5vw] md:grid-cols-2 st st-3">
          {[
            {
              label: 'What you control · your inputs',
              accent: 'var(--teal-2)',
              border: '1px solid rgba(134, 223, 247, 0.45)',
              bg: 'rgba(134, 223, 247, 0.05)',
              dim: false,
              items: [
                ['Strategy', 'Product-led content, topic selection, partner-led link building.'],
                ['Execution', 'Content production, link building, technical fixes, CRO testing.'],
              ] as [string, string][],
            },
            {
              label: 'What you don’t · external factors',
              accent: 'rgba(249, 249, 249, 0.45)',
              border: '1px dashed rgba(249, 249, 249, 0.22)',
              bg: 'transparent',
              dim: true,
              items: [
                ['Luck & algorithms', 'Core updates, competitor shifts, and market trends.'],
                ['Patience & time', 'Google’s crawling schedules and indexing lag.'],
              ] as [string, string][],
            },
          ].map((col) => (
            <div
              key={col.label}
              className="rounded-2xl p-6 lg:p-7"
              style={{ border: col.border, background: col.bg, opacity: col.dim ? 0.72 : 1 }}
            >
              <div
                className="uppercase"
                style={{
                  color: col.accent,
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(10px, 1vw, 14px)',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                }}
              >
                {col.label}
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {col.items.map(([k, v]) => (
                  <li key={k}>
                    <div
                      className="display"
                      style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.6vw, 25px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}
                    >
                      {k}
                    </div>
                    <p
                      className="mt-1"
                      style={{
                        color: 'var(--muted)',
                        fontFamily: 'General Sans, system-ui, sans-serif',
                        fontSize: 'clamp(12px, 1.3vw, 20px)',
                        lineHeight: 1.45,
                      }}
                    >
                      {v}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[6vh] pt-[3vh] st st-4" style={{ borderTop: '1px solid var(--line-2)' }}>
          <SectionLabel>Key takeaway</SectionLabel>
          <p
            className="display mt-2.5"
            style={{ color: 'var(--fg)', fontSize: 'clamp(15px, 1.75vw, 28px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}
          >
            You do not control the final result. You only control the{' '}
            <span style={{ color: 'var(--red)' }}>effort.</span>
          </p>
          <p
            className="mt-2"
            style={{
              color: 'var(--muted-2)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(11px, 1.2vw, 18px)',
              lineHeight: 1.5,
            }}
          >
            Stop stressing over algorithm volatility. Focus entirely on high-quality inputs and relentless
            execution.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-s3-formulas',
    notes:
      'So how do you actually do it? These are the formulas I use. Traditional SEO is content, times links, times technicals, times user engagement. The new SEO, or GEO, is all of that plus RLO, rented land optimisation. And RLO itself is platform content plus BRO, brand reputation optimisation. Every single term on the right hand side of those is an input. Every one of them is something you can go and do this week.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <S3Title sub="My SEO formulas" />
        {/* One row per formula, each on its own rule with the name set apart
            from the terms. Three bare lines floating in the middle of the
            frame left a third of the slide empty and nothing to look at. */}
        <div className="mt-[6vh] flex flex-col st st-2" style={{ maxWidth: 1500 }}>
          {[
            ['Traditional SEO', ['(Content)', '×', '(Links)', '×', '(Technicals)', '×', '(User Engagement)']],
            ['New SEO / GEO', ['Traditional SEO', '+', 'RLO (Rented Land Optimization)']],
            ['RLO', ['Platform Content', '+', 'BRO (Brand Reputation Optimization)']],
          ].map(([label, parts], row) => (
            <div
              key={label as string}
              className="py-[3vh]"
              style={{ borderTop: row === 0 ? 'none' : '1px solid var(--line-2)' }}
            >
              <div
                className="uppercase"
                style={{
                  color: 'var(--red)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(10px, 1vw, 14px)',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                }}
              >
                {label as string}
              </div>
              <div className="mt-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {(parts as string[]).map((t, i) => {
                  const op = t === '×' || t === '+';
                  const isNew = t.startsWith('RLO') || t.startsWith('BRO');
                  return (
                    <span
                      key={i}
                      className="display"
                      style={{
                        color: op ? 'var(--muted-2)' : isNew ? 'var(--red)' : 'var(--fg)',
                        fontSize: 'clamp(16px, 2.2vw, 38px)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-[4vh] st st-3"
          style={{
            color: 'var(--muted)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(13px, 1.4vw, 22px)',
            lineHeight: 1.5,
          }}
        >
          Every term on the right of those equals signs is an{' '}
          <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>input</strong>. Every one is something you can
          go and do this week.
        </p>
      </div>
    ),
  },

  {
    id: 'hap-s3-ex1',
    notes:
      'Let me make that concrete with a real goal. Rank number one for branded keywords with positive LLM sentiment, on a three month horizon. Start with a baseline audit so you know where you are. Content: refresh ten existing pages and publish twenty new ones. Links: twenty foundation links to the homepage, five niche-relevant links to product pages, and one digital PR campaign. Technicals: clear the Search Console errors and resolve every audit flag. RLO and BRO: two YouTube videos, three LinkedIn posts, five Reddit replies, three guest posts. Then check and iterate every thirty days. Here is the important part: you control the inputs every week, but you only review the output every thirty days. If nothing has shifted by month two, do not blame the algorithm. Tweak the inputs and execute again.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <S3Title sub="Execution breakdown · example 1" />
        <GoalLine>Rank #1 for branded keywords, with positive LLM sentiment, on a 3-month horizon.</GoalLine>
        {/* One column, 01 through 06 in order. Split across two it read as two
            unrelated lists and the numbers jumped around. */}
        <ul className="mt-[4vh] flex flex-col st st-3" style={{ maxWidth: 1560 }}>
          <InputRow n={1} k="Baseline audit.">Benchmark current branded rankings and LLM sentiment.</InputRow>
          <InputRow n={2} k="Content.">Refresh 10 existing pages, publish 20 new ones.</InputRow>
          <InputRow n={3} k="Links.">20 foundation links to the homepage, 5 niche-relevant to product pages, 1 digital PR campaign.</InputRow>
          <InputRow n={4} k="Technicals.">Clear GSC errors, resolve every Ahrefs and Semrush audit flag.</InputRow>
          <InputRow n={5} k="RLO &amp; BRO.">2 YouTube videos, 3 LinkedIn posts, 5 Reddit replies, 3 guest posts.</InputRow>
          <InputRow n={6} k="Check &amp; iterate.">Track branded rankings and LLM sentiment every 30 days, then adjust.</InputRow>
        </ul>
        <SlideNote>
          You control the inputs <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>every week</strong>, but
          you review the output <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>every 30 days</strong>. If
          sentiment or rankings haven’t shifted by month two, don’t blame the algorithm. Tweak your inputs and
          execute again.
        </SlideNote>
      </div>
    ),
  },

  {
    id: 'hap-s3-ex2',
    notes:
      'Second example. Recover from a Google core update within nine months. Diagnosis first: wait for the rollout to finish plus a week of stability, then use Search Console to find exactly which pages and queries you lost, and look at which competitors got re-rated above you. Content and E-E-A-T: delete twenty percent of the low quality pages, heavily update the twenty percent that used to get traffic and now do not, and publish five genuinely high quality pieces with proprietary data and real information gain. Technicals and UX: remove friction and make sure indexing is clean across Search and Discover. RLO and BRO: build the off-site presence so your brand keeps its trust and its leads while you wait. Then track against Google’s three to four month cycle. And understand this: a core update is not a penalty, it is a relative re-rating. You cannot hack a recovery overnight.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <S3Title sub="Execution breakdown · example 2" />
        <GoalLine>Recover from a Google core update within 9 months.</GoalLine>
        <ul className="mt-[4vh] flex flex-col st st-3" style={{ maxWidth: 1560 }}>
          <InputRow n={1} k="Diagnosis.">Wait for the rollout to finish, plus a week of stability. Use GSC to find the lost pages and queries, and see who was re-rated above you.</InputRow>
          <InputRow n={2} k="Content &amp; E-E-A-T.">Delete 20% of low-quality pages, heavily update the 20% that used to earn traffic, publish 5 pieces with proprietary data and real information gain.</InputRow>
          <InputRow n={3} k="Technicals &amp; UX.">Remove friction, and make indexing clean across Search and Discover.</InputRow>
          <InputRow n={4} k="RLO &amp; BRO.">Build off-site presence on LinkedIn, YouTube and Reddit to hold brand trust and leads while you wait.</InputRow>
          <InputRow n={5} k="Track the cycle.">Monitor GSC against Google’s 3–4 month rollout schedule and keep refining the inputs.</InputRow>
        </ul>
        <SlideNote>
          A core update isn’t a penalty, it’s a{' '}
          <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>relative re-rating</strong>. You can’t hack a
          recovery overnight. Improve your people-first content, diversify your traffic, and let the 3-to-9-month
          cycle (sometimes 12 to 18) do its job.
        </SlideNote>
      </div>
    ),
  },

  {
    id: 'hap-s3-roles',
    notes:
      'And by role. In-house, drive internal execution velocity and manage upward, so leadership judges your team by what you ship rather than by algorithm swings. Agency side, scope your contracts around strategy delivery and client implementation speed, never around guaranteed rankings. Affiliate, diversify traffic across the rented land channels, YouTube, Reddit, email, so you are building assets the algorithm cannot take from you. 尽人事，听天命. Do your best, and leave the rest to fate.',
    body: (
      <ByRole
        heading={<S3Title main="Step 3: Controlling Your Inputs (Tailored by Role)" />}
        intro="Ship the inputs, whatever seat you are in."
        rows={[
          ['In-house SEO', ['Drive internal execution velocity', 'Manage expectations upward', 'Be judged on what you ship, not algorithm swings']],
          ['SEO Agency/Consultants', ['Scope contracts around strategy delivery', 'And client implementation speed', 'Never around guaranteed rankings']],
          ['Affiliate SEO', ['Diversify across RLO channels', 'YouTube, Reddit, email', 'Build algorithm-proof assets']],
        ]}
        footer={
          <>
            <p
              className="display pb-[1.8vh]"
              style={{ color: 'var(--fg)', fontSize: 'clamp(13px, 1.5vw, 24px)', fontWeight: 700, letterSpacing: '-0.015em' }}
            >
              Measure your team on what you ship,{' '}
              <span style={{ color: 'var(--red)' }}>not on how Google responds today.</span>
            </p>
            <Proverb cn="尽人事，听天命" en="Do your best, and leave the rest to fate." />
          </>
        }
      />
    ),
  },

  {
    id: 'hap-checkin',
    steps: 1,
    notes:
      'Alright, three steps complete. Quick raise of hands. Who feels happy right now? Who feels confident? Who feels completely stress-free? [pause, scan the room, react to the hands] If your hand isn\u2019t up, don\u2019t worry. You are not alone.',
    body: (step: number) => (
      <div className={CENTER}>
        {/* Deliberately the same shape as the poll that opened the deck, so the
            room recognises it as the same question coming back. */}
        <Kicker center>Hands up, again</Kicker>
        <h2
          className="display mt-5 st st-1"
          style={{ color: 'var(--fg)', fontSize: 'clamp(28px, 4vw, 68px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          3 steps complete!
        </h2>
        <div className="mt-[6vh] flex flex-col gap-[3.5vh] w-full" style={{ maxWidth: 1100 }}>
          {[
            { q: 'Are you happy?', n: '01' },
            { q: 'Are you confident?', n: '02' },
            { q: 'Are you stress-free?', n: '03' },
          ].map((row, i) => (
            <div key={row.n} className={`flex items-baseline justify-center gap-6 st st-${i + 2}`}>
              <span
                className="display"
                style={{ color: 'var(--muted-2)', fontSize: 'clamp(12px, 1.3vw, 19px)', fontWeight: 700, letterSpacing: '0.1em' }}
              >
                {row.n}
              </span>
              <span
                className="display"
                style={{ color: 'var(--fg)', fontSize: 'clamp(24px, 3.6vw, 62px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                {row.q}
              </span>
            </div>
          ))}
        </div>
        {/* Held back a beat: he scans the room first, then reassures them. */}
        <p
          className="mt-[6vh]"
          style={{
            color: 'var(--muted-2)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(13px, 1.5vw, 23px)',
            fontWeight: 500,
            opacity: step >= 1 ? 1 : 0,
            transition: 'opacity 420ms ease-out',
          }}
        >
          If your hand isn’t up, don’t worry. You are not alone. 🤗
        </p>
      </div>
    ),
  },

  {
    id: 'hap-bridge',
    notes:
      'Here is why. Those three steps build a world-class SEO engine, and they get you eighty percent of your results. But execution alone will not protect your sanity. The last twenty percent, the gap between good results and actually being happy, is mindset. That is what the two bonuses are for. Execution drives your results; the right mindset gives you peace of mind.',
    body: (
      <div className={CENTER}>
        <Kicker center>Why there is more</Kicker>
        <h2
          className="display mt-5 st st-1"
          style={{ color: 'var(--fg)', fontSize: 'clamp(28px, 4vw, 68px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          Closing the <span style={{ color: 'var(--red)' }}>20%</span> Gap
        </h2>

        <div className="mt-[6vh] flex flex-col items-center gap-[2.5vh] w-full" style={{ maxWidth: 1250 }}>
          {[
            { what: '3 Steps', paren: '(System)', pct: '80%', tail: 'of your SEO results', hot: false },
            { what: '2 Bonuses', paren: '(Mindset)', pct: '100%', tail: 'of your SEO happiness', hot: true },
          ].map((row, i) => (
            <div key={row.pct} className="contents">
              <div className={`flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 st st-${i + 1}`}>
                <span
                  className="display"
                  style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.85vw, 31px)', fontWeight: 700, letterSpacing: '-0.025em' }}
                >
                  {row.what}
                </span>
                <span
                  className="display"
                  style={{ color: row.hot ? 'var(--red)' : 'var(--muted-2)', fontSize: 'clamp(14px, 1.85vw, 31px)', fontWeight: 700, letterSpacing: '-0.025em' }}
                >
                  {row.paren}
                </span>
                <span
                  className="display"
                  style={{ color: 'var(--muted-2)', fontSize: 'clamp(13px, 1.6vw, 27px)', fontWeight: 700 }}
                >
                  ⇒
                </span>
                <span
                  className="display tabular-nums"
                  style={{ color: 'var(--red)', fontSize: 'clamp(24px, 3.6vw, 62px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {row.pct}
                </span>
                <span
                  className="display"
                  style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.85vw, 31px)', fontWeight: 700, letterSpacing: '-0.025em' }}
                >
                  {row.tail}
                </span>
              </div>
              {i === 0 && (
                <span
                  className="display st st-2"
                  style={{ color: 'var(--muted-2)', fontSize: 'clamp(20px, 2.6vw, 44px)', fontWeight: 700, lineHeight: 1 }}
                >
                  +
                </span>
              )}
            </div>
          ))}
        </div>

        <p
          className="display mt-[6vh] st st-3"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(14px, 1.65vw, 27px)',
            fontWeight: 700,
            letterSpacing: '-0.015em',
            lineHeight: 1.4,
            maxWidth: '56ch',
          }}
        >
          💡 Execution drives your results.{' '}
          <span style={{ color: 'var(--red)' }}>The right mindset gives you peace of mind.</span>
        </p>
      </div>
    ),
  },

  {
    id: 'hap-b1',
    steps: 1,
    notes:
      'Bonus one, and this is the uncomfortable one. Read that quote. [pause] Who said it? Anyone? [let them guess] [REVEAL the photo] Warren Buffett. And he is right. You are not actually looking for higher rankings or more AI visibility. You are looking for lower expectations.',
    body: (step: number) => (
      <div className={CENTER}>
        <Kicker center>Bonus 1</Kicker>
        <blockquote
          className="display mt-[5vh] st st-1"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(26px, 4.2vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            textWrap: 'balance',
            maxWidth: '17ch',
          }}
        >
          <span style={{ color: 'var(--red)' }}>“</span>The secret to happiness is having low expectations.
          <span style={{ color: 'var(--red)' }}>”</span>
        </blockquote>

        {/* The portrait holds its space from the start, so the quote does not
            jump up the slide when the answer arrives. No name: the face is the
            punchline, and saying it out loud lands better than reading it. */}
        {/* The portrait and the name arrive together on the second beat, and
            hold their space from the first so the quote never moves. */}
        <div
          className="mt-[5vh] flex flex-col items-center"
          style={{ opacity: step >= 1 ? 1 : 0, transition: 'opacity 450ms ease-out' }}
        >
          <div
            className="rounded-full overflow-hidden relative"
            style={{
              width: 'clamp(120px, 20vh, 250px)',
              height: 'clamp(120px, 20vh, 250px)',
              border: '2px solid rgba(235,48,48,0.55)',
            }}
          >
            <Image src="/assets/warren-buffett-portrait.webp" alt="Warren Buffett" fill className="object-cover" sizes="260px" />
          </div>
          <div
            className="display mt-[2.5vh]"
            style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.7vw, 27px)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Warren Buffett{' '}
            <span style={{ color: 'var(--muted)' }}>「股神」巴菲特</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-b1-how',
    notes:
      'Happiness is not higher rankings or more traffic. It is closing the gap between what you expected and what is real. Why bother lowering expectations? Two reasons. It prevents burnout: unrealistic targets guarantee daily stress the moment an algorithm shifts. And it protects relationships: mismatched expectations ruin client and executive trust faster than bad rankings ever do. So how do you do it? Lower the SEO goal: stop chasing viral traffic spikes, focus on steady input execution. Lower the marketing goal: position SEO as a steady pipeline engine, not a silver bullet. And lower the business goal: base revenue forecasts on the worst-case algorithm scenario, not best-case guesswork.',
    body: (
      // Two columns, not four stacked bands. The argument lives on the left and
      // the action plan on the right, so the eye has two places to go instead
      // of four, and everything can run larger.
      <div className={`h-full grid lg:grid-cols-[1fr_1.05fr] gap-x-[5vw] gap-y-[4vh] items-center ${PAD}`}>
        <div>
          <h2
            className="display st st-1"
            style={{
              color: 'var(--fg)',
              fontSize: 'clamp(26px, 3.4vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.028em',
            }}
          >
            Lower Your Expectations
          </h2>
          <p
            className="display mt-[3vh] st st-2"
            style={{
              color: 'var(--fg)',
              fontSize: 'clamp(15px, 1.8vw, 29px)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1.35,
            }}
          >
            Happiness isn’t higher rankings or more traffic. It’s{' '}
            <span style={{ color: 'var(--red)' }}>closing the gap between expectations and reality</span>.
          </p>

          <div className="mt-[4.5vh] st st-3">
            <SectionLabel>Why lower them?</SectionLabel>
            <ul className="mt-3.5 flex flex-col gap-3">
              {[
                ['Prevent burnout.', 'Unrealistic targets guarantee daily stress the moment algorithms shift.'],
                ['Protect relationships.', 'Mismatched expectations ruin trust faster than bad rankings do.'],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="pl-4"
                  style={{ borderLeft: '2px solid rgba(235,48,48,0.4)' }}
                >
                  <span
                    style={{
                      color: 'var(--muted)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(12px, 1.35vw, 21px)',
                      lineHeight: 1.45,
                    }}
                  >
                    <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>{k}</strong> {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="st st-4">
          <SectionLabel>How to lower them · action plan</SectionLabel>
          <div className="mt-4 flex flex-col">
            {[
              ['The SEO goal', 'Stop chasing viral traffic spikes. Focus on steady input execution and baseline momentum.'],
              ['The marketing goal', 'Position SEO as a steady pipeline engine, not a quick-fix silver bullet.'],
              ['The business goal', 'Base revenue forecasts on worst-case algorithm scenarios, not best-case guesswork.'],
            ].map(([title, text], n) => (
              <div
                key={title}
                className="grid grid-cols-[2.4rem_1fr] gap-x-4 items-baseline py-[2vh]"
                style={{ borderTop: n === 0 ? 'none' : '1px solid rgba(249,249,249,0.08)' }}
              >
                <span
                  className="display tabular-nums text-center rounded-md"
                  style={{
                    color: 'var(--red)',
                    background: 'rgba(235,48,48,0.10)',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 'clamp(11px, 1.15vw, 17px)',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    padding: '0.25em 0',
                  }}
                >
                  {String(n + 1).padStart(2, '0')}
                </span>
                <div>
                  <div
                    className="display"
                    style={{ color: 'var(--fg)', fontSize: 'clamp(15px, 1.7vw, 27px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}
                  >
                    {title}
                  </div>
                  <p
                    className="mt-1.5"
                    style={{
                      color: 'var(--muted)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(12px, 1.3vw, 20px)',
                      lineHeight: 1.45,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-b2',
    notes:
      'Bonus two. The three steps give you the system: positioning, goals, inputs. But you do not have to carry the load alone. You can find the right people to handle the execution for you. If you are in-house, step outside your comfort zone. Get to events for fresh ideas and strategies, and to find talent and partners. If you run an agency, hire operators smarter than you. The right team gives you your business and your life back. And if you are an affiliate, escape the screen. Stop talking to AI in isolation. Join masterminds, travel, build a high-energy network. 独行快，众行远. Go fast alone, go far together.',
    body: (
      <ByRole
        title="Bonus #2: Surround Yourself with the Right People"
        rows={[
          ['In-house SEO', ['Step outside your comfort zone', 'Attend events for fresh ideas', 'Find talent and partners']],
          ['SEO Agency/Consultants', ['Hire operators smarter than you', 'The right team gives you your business back', 'And your life back']],
          ['Affiliate SEO', ['Escape the screen', 'Stop talking to AI in isolation', 'Join masterminds, travel, build a network']],
        ]}
        footer={
          <>
            <p
              className="display pb-[2.5vh]"
              style={{ color: 'var(--fg)', fontSize: 'clamp(13px, 1.5vw, 24px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.35 }}
            >
              💡 The 3-step system sets the foundation (positioning, goals, inputs).{' '}
              <span style={{ color: 'var(--red)' }}>Find the right people to handle the execution.</span>
            </p>
            <Proverb cn="独行快，众行远" en="Go fast alone, go far together." />
          </>
        }
      />
    ),
  },

  {
    id: 'hap-recap',
    steps: 7,
    notes:
      'So, the whole path. [REVEAL] Step one: articulate your positioning. [REVEAL] Step two: set SEO goals you can actually own. [REVEAL] Step three: break the result into the parts you control. [REVEAL] Bonus one: lower your expectations. [REVEAL] Bonus two: surround yourself with the right people. [REVEAL] Five moves, and they stack. Each one only works because the one before it is in place. [REVEAL] And that is the SEO Happiness Formula.',
    body: (step: number) => (
      <div className="h-full flex flex-col px-[5vw] pt-[6vh] pb-[11vh]">
        <div className="flex-1 min-h-0 grid md:grid-cols-[1.15fr_1fr] gap-[3vw] items-center">
          <div>
            <Kicker>The recap</Kicker>
            <h2
              className="display mt-4 st st-1"
              style={{ color: 'var(--fg)', fontSize: 'clamp(22px, 2.8vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              The whole path, on one slide
            </h2>
            {/* One click per point. Every row is rendered at every beat and
                hidden with opacity, so the list never grows under the audience
                and the rules between rows stay put. */}
            <ol className="mt-[3vh] flex flex-col">
              {[
                ['Step 1', 'Articulate your positioning.'],
                ['Step 2', 'Set SEO goals you can actually own.'],
                ['Step 3', 'Break results into what you control.'],
                ['Bonus 1', 'Lower your expectations.'],
                ['Bonus 2', 'Surround yourself with the right people.'],
              ].map(([label, text], i) => (
                <li
                  key={label}
                  className="grid grid-cols-[5.5rem_1fr] gap-4 items-baseline py-[1.5vh]"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                    opacity: step >= i + 1 ? 1 : 0,
                    transition: 'opacity 380ms ease-out',
                  }}
                >
                  <span
                    className="uppercase"
                    style={{
                      color: i > 2 ? 'var(--teal-2)' : 'var(--red)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(9px, 0.95vw, 13px)',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="display"
                    style={{ color: 'var(--fg)', fontSize: 'clamp(13px, 1.6vw, 25px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25 }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* The five points as a climb, so the recap reads as progress rather
              than as another list. Arrives once all five are on screen. */}
          {/* No `dia-in` here: that animation ends on opacity 1 with fill-mode
              both, and a running animation outranks an inline style, so it
              would force the ladder visible from the first beat. */}
          <div
            className="relative hidden md:block h-full"
            style={{ opacity: step >= 6 ? 1 : 0, transition: 'opacity 500ms ease-out' }}
          >
            <Image src="/assets/dia-path.webp" alt="" fill className="object-contain" sizes="45vw" />
          </div>
        </div>

        {/* The last beat: the talk's own title, said back to them. */}
        <div
          className="shrink-0 text-center pt-[2.5vh]"
          style={{
            borderTop: '1px solid var(--line-2)',
            opacity: step >= 7 ? 1 : 0,
            transition: 'opacity 500ms ease-out',
          }}
        >
          <span
            className="display"
            style={{ color: 'var(--fg)', fontSize: 'clamp(18px, 2.4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em' }}
          >
            The{' '}
            <span style={{ color: 'var(--red)', whiteSpace: 'nowrap' }}>“SEO Happiness 😀”</span> Formula
          </span>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-qa',
    notes:
      'That is it. Questions? And if you want to stay in touch afterwards, there are three codes on the screen. The first is my personal WeChat. The second is my WeChat blog, the public account. The third is my LinkedIn. Scan whichever fits how you prefer to keep in contact.',
    body: (
      <div className={CENTER}>
        <Kicker center>Over to you</Kicker>
        <h2
          className="display mt-4 st st-1"
          style={{ color: 'var(--fg)', fontSize: 'clamp(40px, 5.8vw, 104px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1 }}
        >
          Questions?
        </h2>
        <div className="mt-[6vh] flex justify-center w-full">
          <ContactCards />
        </div>
      </div>
    ),
  },
];
