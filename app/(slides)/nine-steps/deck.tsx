'use client';

import Image from 'next/image';

import { Eyebrow, HostSlide, type Slide } from '../side-event-slides/deck';
import { FullBleedStep, PAD, SplitStep, StageStep, StatementStep } from './layouts';

const CENTER = `h-full flex flex-col items-center justify-center text-center ${PAD}`;

export const NINE_STEPS: Slide[] = [
  {
    id: 'ns-title',
    notes:
      'Good afternoon. Over the next session I am going to show you how to build an SEO strategy and the execution plan behind it, in nine steps, and then we will do it live with AI on a brand none of us has seen before.',
    body: (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 t-drift">
          <Image src="/assets/slide-bg-title.webp" alt="" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.6)' }} />
        <div className={`relative ${CENTER}`}>
          <Eyebrow center>Live demo</Eyebrow>
          <h1
            className="display mt-6 t-rise"
            style={{
              color: 'var(--fg)',
              fontSize: 'clamp(34px, 5vw, 84px)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
              maxWidth: '20ch',
            }}
          >
            Build an SEO strategy &amp; execution plan in{' '}
            <span style={{ color: 'var(--red)' }}>9 steps</span> with AI
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
        </div>
      </div>
    ),
  },

  {
    id: 'ns-host',
    notes:
      'A quick word on who is saying this. Sixteen years in SEO: in-house, agency side, and running my own affiliate sites. Today I run several brands, including this conference.',
    body: (
      <HostSlide
        summary="16 years in SEO, as a serial SEO entrepreneur"
        roles={[
          ['In-house', 'Wondershare, Shenzhen (2010) · Whova, San Diego (2016)'],
          ['Agency', 'Baunfire, San Jose (2014–2015)'],
          ['Affiliate', 'Self-employed (2012–13, 2017–now)'],
        ]}
        brands={['英文SEO实战派', 'SEO实战学院', 'Shenzhen SEO Conf', 'SEO Connector']}
      />
    ),
  },

  /* 1 — full bleed, words in the bottom-left */
  {
    id: 'ns-step1',
    notes:
      'Step one. Before a single keyword, you have to be able to say what you do in one sentence. The sweet spot sits where three things overlap: what customers need, what competitors already offer, and what you are actually good at. Miss that intersection and you end up competing on price, because in the customer’s head you look identical to everyone else.',
    body: (
      <FullBleedStep
        step={1}
        title="Articulate business positioning"
        art="/assets/dia-venn.webp"
        corner="bottom-left"
        points={[
          <>
            The sweet spot is where <strong style={{ color: 'var(--fg)' }}>customers</strong>,{' '}
            <strong style={{ color: 'var(--fg)' }}>competitors</strong> and your own{' '}
            <strong style={{ color: 'var(--fg)' }}>context</strong> overlap.
          </>,
          <>
            “I provide <em>[product]</em> for <em>[who]</em>, and save them <em>[value]</em>. Unlike{' '}
            <em>[competitors]</em>, we are different because of <em>[reasons]</em>.”
          </>,
          'Miss it and you are in a price war, because clients see no difference between you and the rest.',
        ]}
      />
    ),
  },

  /* 2 — diagram centre stage, points beneath in columns */
  {
    id: 'ns-step2',
    notes:
      'Step two. The business model canvas is the engine underneath the strategy. Nine boxes: who you partner with, what you actually do, what you own, what you promise, how you keep customers, how you reach them, who they are, what it costs, and where the money comes from.',
    body: (
      <StageStep
        step={2}
        title="Draw the business model"
        art="/assets/dia-canvas.webp"
        points={[
          'One page, nine boxes. The foundational engine for everything downstream.',
          'Value propositions sit in the middle because everything else exists to deliver them.',
          'If a box is empty or vague, that is where the strategy breaks later.',
        ]}
      />
    ),
  },

  /* 3 — split, diagram on the LEFT */
  {
    id: 'ns-step3',
    notes:
      'Step three. Validate product market fit using cheap, fast channels before you commit. Then define two or three ideal customer profiles precisely, based on pain points and buying motives. And define the negative ones too, the customers you actively do not want, the high-refund high-maintenance ones.',
    body: (
      <SplitStep
        step={3}
        side="left"
        title="Validate PMF, then define who you say no to"
        art="/assets/dia-icp.webp"
        points={[
          'Test market response with low-cost, fast channels before committing budget.',
          '2–3 positive ICPs, defined by pain point, buying motive and scenario.',
          <>
            Then the part everyone skips: define your{' '}
            <strong style={{ color: 'var(--red)' }}>negative ICPs</strong> and turn them away on purpose.
          </>,
        ]}
      />
    ),
  },

  /* 4 — full bleed, words in the top-left */
  {
    id: 'ns-step4',
    notes:
      'Step four. B2C journeys are tidy. High-ticket B2B journeys are not, and no tool tracks them completely. The part that matters is the messy middle: people loop between exploring and evaluating, sometimes for months. Your job is to put the right proof in front of them at the exact friction points in that loop.',
    body: (
      <FullBleedStep
        step={4}
        title="Map the customer journey"
        art="/assets/dia-loop.webp"
        corner="top-left"
        points={[
          'B2C is simple. High-ticket B2B is complex and impossible to track end to end.',
          <>
            Live in the <strong style={{ color: 'var(--fg)' }}>messy middle</strong>: buyers loop between exploring and
            evaluating, sometimes for months.
          </>,
          'Match proof to each trust-friction point, not to each stage name.',
        ]}
      />
    ),
  },

  /* 5 — diagram centre stage again, but a taller one */
  {
    id: 'ns-step5',
    notes:
      'Step five. A website is not a traffic vessel, its job is to build trust and convert. Stop obsessing over one channel and connect everything, online and offline. Then run two tracks at once: fast channels like ads and outreach to validate quickly, slow channels like SEO and content to build a defensible position.',
    body: (
      <StageStep
        step={5}
        title="Assign every channel a role in the funnel"
        art="/assets/dia-funnel.webp"
        points={[
          'A website’s job is trust and conversion, not carrying traffic.',
          'Connect every touchpoint, online and offline. Abandon single-channel obsession.',
          'Fast channels validate. Slow channels defend. Run both.',
        ]}
      />
    ),
  },

  /* 6 — split, diagram on the RIGHT */
  {
    id: 'ns-step6',
    notes:
      'Step six. Control your own pace. Do not let a competitor or an outside consultant set your rhythm. Polish the conversion assets before you scale traffic into them, otherwise you are paying to send people to a leaky page. And do not make one channel manager carry the whole acquisition number.',
    body: (
      <SplitStep
        step={6}
        side="right"
        title="Create the go-to-market strategy"
        art="/assets/dia-phases.webp"
        points={[
          'Control the pace. Do not let competitors or consultants set your rhythm.',
          'Polish the conversion assets before you scale traffic into them.',
          <>
            Never make one channel manager carry the{' '}
            <strong style={{ color: 'var(--red)' }}>total acquisition KPI</strong> alone.
          </>,
        ]}
      />
    ),
  },

  /* 7 — one sentence carries it, diagram supports */
  {
    id: 'ns-step7',
    notes:
      'Step seven. Set the acquisition and growth target before you decide what to spend. Then choose your posture, aggressive, conservative or hold, based on what competitors are doing and what you can actually sustain. Then cost each node of the funnel honestly, in people and in money.',
    body: (
      <StatementStep
        step={7}
        title="Confirm the marketing budget"
        art="/assets/dia-budget.webp"
        statement={
          <>
            Set the target <span style={{ color: 'var(--red)' }}>before</span> you set the spend.
          </>
        }
      />
    ),
  },

  /* 8 — the equations, centre stage and large */
  {
    id: 'ns-step8',
    notes:
      'Step eight, and only now do we talk about SEO. Define what share of acquisition SEO is actually responsible for, then set phased goals, then break those into an execution plan. And notice the equation has changed: traditional SEO plus rented land optimization, which is content plus brand reputation on platforms you do not own.',
    body: (
      <StageStep
        step={8}
        title="Build the SEO strategy and execution plan"
        art="/assets/dia-seo.webp"
        points={[
          'Define SEO’s exact share of total acquisition before setting any goal.',
          'Break macro targets into a plan someone can run on Monday.',
          'The equation changed: the new SEO adds rented land on top of the traditional four.',
        ]}
      />
    ),
  },

  /* 9 — split, diagram on the LEFT, mirroring step 3 */
  {
    id: 'ns-step9',
    notes:
      'Step nine. A strategy is not a document you file, it is a system you keep adjusting. Minor reviews every quarter, a proper overhaul every six to nine months. Decide up front what your core KPIs are, what would trigger an early warning, and how often you iterate.',
    body: (
      <SplitStep
        step={9}
        side="left"
        title="Create a strategy review mechanism"
        art="/assets/dia-cycle.webp"
        points={[
          'A strategy is never a document. It is a system that keeps evolving.',
          'Minor reviews quarterly. A real overhaul every 6 to 9 months.',
          'Decide the KPIs, the warning triggers and the cadence up front, not later.',
        ]}
      />
    ),
  },

  {
    id: 'ns-demo',
    notes:
      'Now let us actually do it. I am going to take a B2B brand none of us has worked on, and run all nine steps live with AI, so you can see the workflow rather than just the output.',
    body: (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 t-drift">
          <Image src="/assets/slide-bg-bridge.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.74)' }} />
        <div className={`relative ${CENTER}`}>
          <Eyebrow center>Now, live</Eyebrow>
          <h2
            className="display mt-6 t-rise"
            style={{
              color: 'var(--fg)',
              fontSize: 'clamp(32px, 5vw, 86px)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
              maxWidth: '17ch',
            }}
          >
            All nine steps, on a brand we have never seen
          </h2>
          <p
            className="mt-[5vh] st st-3"
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(15px, 1.8vw, 28px)',
              fontWeight: 500,
            }}
          >
            Watch the workflow, not just the output.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'ns-qa',
    notes:
      'That is the nine steps. Questions, and here is how to reach me afterwards. And if this was useful, the main conference in September goes far deeper than one session can.',
    body: (
      <div className="h-full grid md:grid-cols-[1.25fr_1fr]">
        <div className={`flex flex-col justify-center ${PAD}`}>
          <Eyebrow>Over to you</Eyebrow>
          <h2
            className="display mt-5 st st-1"
            style={{ color: 'var(--fg)', fontSize: 'clamp(44px, 6.5vw, 118px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1 }}
          >
            Questions?
          </h2>
          <dl className="mt-[6vh] grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {[
              ['WeChat', 'ShenzhenSEOConf'],
              ['Email', 'support@shenzhenseoconference.com'],
              ['Blog', '英文SEO实战派'],
              ['Conference', 'shenzhenseoconference.com'],
            ].map(([label, value], i) => (
              <div key={label} className={`st st-${i + 2}`}>
                <dt
                  className="uppercase"
                  style={{
                    color: 'var(--red)',
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    fontSize: 'clamp(9px, 0.95vw, 13px)',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                  }}
                >
                  {label}
                </dt>
                <dd
                  className="display mt-2"
                  style={{
                    color: 'var(--fg)',
                    // Sized so the long email and domain each sit on one line
                    // rather than breaking mid-word.
                    fontSize: 'clamp(11px, 1.15vw, 17px)',
                    fontWeight: 700,
                    letterSpacing: '-0.005em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center gap-6 dia-in">
          <div className="rounded-3xl p-[1.6vw]" style={{ background: 'var(--fg)', lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/qr-conference.webp"
              alt="QR code linking to shenzhenseoconference.com"
              width={740}
              height={740}
              style={{ width: 'clamp(130px, 20vh, 250px)', height: 'auto', imageRendering: 'pixelated' }}
            />
          </div>
          <span
            className="display"
            style={{ color: 'var(--muted)', fontSize: 'clamp(11px, 1.15vw, 17px)', fontWeight: 700, letterSpacing: '0.02em' }}
          >
            Scan for the main conference
          </span>
        </div>
      </div>
    ),
  },
];
