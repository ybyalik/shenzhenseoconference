'use client';

import Image from 'next/image';

import { Eyebrow, HostSlide, NameSlide, OriginSlide, type Slide } from '../side-event-slides/deck';
import { FullBleedStep, PAD, SplitStep, StageStep, StatementStep, StepHeading, StepRail } from './layouts';

const CENTER = `h-full flex flex-col items-center justify-center text-center ${PAD}`;

/**
 * Step 1 worked through on a real business: the conference itself. Uses the
 * same five slots as the template on the previous slide, so the audience sees
 * the blanks filled rather than a second, unrelated framework.
 */
function PositioningExample() {
  const sans = 'General Sans, system-ui, sans-serif';
  const slot = {
    color: 'var(--red)',
    fontFamily: sans,
    fontSize: 'clamp(9px, 0.9vw, 12px)',
    fontWeight: 700,
    letterSpacing: '0.2em',
  } as const;
  const body = {
    color: 'var(--muted)',
    fontFamily: sans,
    fontSize: 'clamp(11px, 1.1vw, 17px)',
    lineHeight: 1.5,
  } as const;
  const Slot = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <div className="uppercase">
        <span style={slot}>{label}</span>
      </div>
      <div className="mt-2" style={body}>
        {children}
      </div>
    </div>
  );
  const usps: [string, string][] = [
    ['East meets West', 'The largest SEO conference putting Eastern and Western professionals in one room, at scale.'],
    ['Entrepreneurship & partnership', 'Every speaker, partner and attendee is an active practitioner who believes in global partnerships.'],
    ['Shenzhen', 'China’s Silicon Valley of hardware, across two five-star venues: The St. Regis and MGM.'],
  ];
  return (
    <div className={`h-full flex flex-col justify-center ${PAD}`}>
      <div className="flex items-center gap-4">
        <span
          className="uppercase"
          style={{ color: 'var(--red)', fontFamily: sans, fontSize: 'clamp(10px, 1vw, 14px)', fontWeight: 700, letterSpacing: '0.2em' }}
        >
          Step 1 · worked example
        </span>
        <StepRail step={1} />
      </div>
      <h2
        className="display mt-3"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(26px, 3.5vw, 58px)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.025em',
        }}
      >
        Example: Shenzhen SEO Conference
      </h2>

      <div className="mt-[5vh] grid gap-x-[5vw] gap-y-[3.5vh] lg:grid-cols-2 items-start" style={{ maxWidth: 1500 }}>
        <div className="flex flex-col gap-[3.2vh]">
          <Slot label="We provide">
            A <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>5-day, English-only international SEO event</strong>{' '}
            in Shenzhen. Actionable talks, masterminds, city tours, and networking.
          </Slot>
          <Slot label="For">
            <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>600 SEO professionals and entrepreneurs.</strong>{' '}
            Chinese brands targeting global markets, and international brands entering China and the
            wider APAC market.
          </Slot>
          <Slot label="And save them">
            <span className="block">
              <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Chinese attendees:</strong> the cost and time of
              going abroad.
            </span>
            <span className="block mt-1">
              <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>International attendees:</strong> the risk of
              entering a new market.
            </span>
          </Slot>
        </div>

        <div className="flex flex-col gap-[3.2vh]">
          <Slot label="Unlike other SEO events">
            Most stay local, or go deep on one corner of search. Nobody is addressing the cross-border
            part.
          </Slot>
          <div>
            <div className="uppercase">
              <span style={slot}>We are different because</span>
            </div>
            <ul className="mt-3 flex flex-col gap-2.5">
              {usps.map(([title, text], n) => (
                <li key={title} className="grid grid-cols-[1.6rem_1fr] gap-x-3 items-baseline">
                  <span
                    className="display tabular-nums"
                    style={{ color: 'var(--red)', fontFamily: sans, fontSize: 'clamp(10px, 0.95vw, 13px)', fontWeight: 700, letterSpacing: '0.1em' }}
                  >
                    {String(n + 1).padStart(2, '0')}
                  </span>
                  <span style={body}>
                    <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>{title}.</strong> {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * The business model canvas worked through on the conference. The artwork
 * carries its own title and is dense, so the slide gives it nearly the whole
 * frame and keeps the chrome to one line.
 */
function CanvasExample() {
  return (
    <div className="h-full flex flex-col px-[3vw] pt-[4vh] pb-[9vh]">
      <div className="flex items-center gap-4 shrink-0">
        <span
          className="uppercase"
          style={{
            color: 'var(--red)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(10px, 1vw, 14px)',
            fontWeight: 700,
            letterSpacing: '0.2em',
          }}
        >
          Step 2 · worked example
        </span>
        <StepRail step={2} />
      </div>
      <div className="relative flex-1 min-h-0 mt-[2.5vh] dia-in">
        <Image
          src="/assets/dia-canvas-example.webp"
          alt="Business model canvas for the Shenzhen SEO Conference"
          fill
          className="object-contain object-top"
          sizes="94vw"
        />
      </div>
    </div>
  );
}

/**
 * Step 8 is the one the room came for, so it is a clean sequence rather than a
 * diagram: five moves down the left, and the honest caveat plus tomorrow's talk
 * on the right. The caveat is the reason the teaser belongs here at all.
 */
function SeoPlanStep() {
  const sans = 'General Sans, system-ui, sans-serif';
  const moves = [
    'Define SEO’s exact share of total customer acquisition',
    'Set the right SEO goals',
    'Create a strategy to achieve the SEO goals',
    'Break down the SEO strategy into an actionable plan',
    'Execute the SEO plan',
  ];
  return (
    <div className={`h-full flex flex-col justify-center ${PAD}`}>
      <StepHeading step={8} title="Build SEO strategy and execution plan" />

      <div className="mt-[5vh] grid gap-x-[5vw] gap-y-[4vh] lg:grid-cols-[1.1fr_1fr] items-start" style={{ maxWidth: 1500 }}>
        <ol className="flex flex-col gap-[2.2vh]">
          {moves.map((m, i) => (
            <li key={m} className="grid grid-cols-[2rem_1fr] gap-x-4 items-baseline">
              <span
                className="display tabular-nums"
                style={{ color: 'var(--red)', fontFamily: sans, fontSize: 'clamp(11px, 1.05vw, 15px)', fontWeight: 700, letterSpacing: '0.1em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                style={{ color: 'var(--fg)', fontFamily: sans, fontSize: 'clamp(13px, 1.35vw, 21px)', fontWeight: 500, lineHeight: 1.4 }}
              >
                {m}
              </span>
            </li>
          ))}
        </ol>

        <div
          className="rounded-2xl p-6 lg:p-7"
          style={{ border: '1px solid var(--line-2)', background: 'rgba(249,249,249,0.03)' }}
        >
          <p
            className="display"
            style={{ color: 'var(--fg)', fontSize: 'clamp(15px, 1.7vw, 27px)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.015em' }}
          >
            SEO results? They are{' '}
            <span style={{ color: 'var(--red)' }}>often out of our control.</span>
          </p>

          <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--line-2)' }}>
            <div
              className="uppercase"
              style={{ color: 'var(--red)', fontFamily: sans, fontSize: 'clamp(9px, 0.9vw, 12px)', fontWeight: 700, letterSpacing: '0.18em' }}
            >
              More on this tomorrow · Sunday side event
            </div>
            <div
              className="display mt-2.5"
              style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.5vw, 23px)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.01em' }}
            >
              The “SEO Happiness 😀” Formula
            </div>
            <div
              className="mt-1"
              style={{ color: 'var(--muted)', fontFamily: sans, fontSize: 'clamp(12px, 1.15vw, 18px)', fontWeight: 500 }}
            >
              3 steps to better results and less stress
            </div>
            <p
              className="mt-4"
              style={{ color: 'var(--muted-2)', fontFamily: sans, fontSize: 'clamp(11px, 1.05vw, 16px)', lineHeight: 1.5 }}
            >
              You will learn my SEO formulas, and exactly how to break SEO goals into actionable steps
              with measurable KPIs. Less stress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Closing slide: three ways to stay in touch, each as a scannable card. Cards
 * rather than a contact list because a room full of phones can act on a QR and
 * cannot act on a WeChat ID read off a screen.
 */
export function ContactCards() {
  const sans = 'General Sans, system-ui, sans-serif';
  const cards: [string, string, string][] = [
    ['Personal WeChat', '我的个人微信', '/assets/qr-wechat-personal.webp'],
    ['WeChat blog', '微信公众号', '/assets/qr-wechat-blog.webp'],
    ['LinkedIn', '我的个人领英', '/assets/qr-linkedin.webp'],
  ];
  return (
    <div className="grid grid-cols-3 gap-[2vw] w-full" style={{ maxWidth: 1100 }}>
      {cards.map(([en, zh, src], i) => (
        <div key={en} className={`flex flex-col items-center text-center st st-${i + 2}`}>
          <div className="rounded-2xl p-[1vw]" style={{ background: 'var(--fg)', lineHeight: 0 }}>
            {/* Unoptimised on purpose: resampling a QR can stop it scanning. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${en} QR code`}
              className="block"
              style={{ width: 'clamp(110px, 17vh, 210px)', height: 'auto', imageRendering: 'pixelated' }}
            />
          </div>
          <div
            className="display mt-4"
            style={{ color: 'var(--fg)', fontSize: 'clamp(12px, 1.3vw, 20px)', fontWeight: 700, letterSpacing: '-0.005em' }}
          >
            {en}
          </div>
          <div
            className="mt-1"
            style={{ color: 'var(--muted-2)', fontFamily: sans, fontSize: 'clamp(11px, 1.1vw, 16px)', fontWeight: 500 }}
          >
            {zh}
          </div>
        </div>
      ))}
    </div>
  );
}

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
    id: 'ns-name',
    notes:
      'My name causes some confusion, so let me clear it up first. My full name is Jiangpeng Zhang. Zhang is my family name, and in China the family name comes first. If you read my Chinese blog you know me as John. Everyone else calls me JP, because Jiangpeng is hard to say. Any of the three is fine.',
    body: <NameSlide />,
  },
  {
    id: 'ns-origin',
    notes:
      'A little about where I am actually from, because people often guess wrong. I am ninety-two percent made in China. I am thirty-eight, and three and a half of those years were spent studying, working and living in the US. The rest has been China, or travelling. Before twenty-seven I had never been abroad, and had never even been on a plane. I am a countryside boy from Hubei. I am not American-born Chinese, and I am not from Hong Kong, Singapore, Malaysia or Japan. English is my second language. When I arrived in the US in 2013 I struggled badly with accents, and one of my MBA classmates from India joked that I should start again with A to Z. So please lower your expectations for my English today. My Mandarin, on the other hand, is excellent.',
    body: <OriginSlide />,
  },
  {
    id: 'ns-host',
    notes:
      'A quick word on who is saying this. Sixteen years in SEO: in-house, agency side, and running my own affiliate sites. Today I run several brands, including this conference.',
    body: (
      <HostSlide
        summary="16 years in SEO."
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
        demoBrands={['JP Basketball', 'JP Humanizer', 'JP Power']}
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
    id: 'ns-step1-example',
    notes:
      'That is the template. Now let me fill it in with a real business, this conference. We provide a five-day, English-only international SEO event in Shenzhen: talks, masterminds, city tours and networking. For six hundred SEO professionals and entrepreneurs, connecting Chinese brands going global with international brands coming into China and APAC. It saves Chinese attendees the cost and the time of travelling abroad, and it saves international attendees the risk of walking blind into a new market. Unlike other SEO events, which stay local or go deep on one corner of search, we address the cross-border part. And we are different for three reasons: East meets West at scale, everybody in the room is an active practitioner with an entrepreneurial spirit, and the location, Shenzhen, across two five-star venues. Every one of you can write this same paragraph about your own business.',
    body: <PositioningExample />,
  },
  {
    id: 'ns-step2',
    notes:
      'Step two. The business model canvas is the engine underneath the strategy. Nine boxes: who you partner with, what you actually do, what you own, what you promise, how you keep customers, how you reach them, who they are, what it costs, and where the money comes from.',
    body: (
      <StageStep
        step={2}
        title="Draw business model"
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
    id: 'ns-step2-example',
    notes:
      'And here is that canvas filled in for this conference. Our key partners are the speakers, the venues and the industry communities. Key activities are curating speakers, running a five-day event, and acquiring the audience. Key resources are the content and the location itself. The value propositions differ by side: Chinese attendees get global strategies and reliable partners without flying; international attendees get de-risked APAC entry. Customer relationships are high touch, masterminds and dinners. Channels are direct marketing plus our speaker and partner networks. Segments are Chinese brands going out, international teams coming in, and sponsors. Costs are speakers, venue, staff and marketing. Revenue is tickets and sponsorship. Nine boxes, one page, and now you can see where every decision comes from.',
    body: <CanvasExample />,
  },
  {
    id: 'ns-step3',
    notes:
      'Step three. Validate product market fit using cheap, fast channels before you commit. Then define two or three ideal customer profiles precisely, based on pain points and buying motives. And define the negative ones too, the customers you actively do not want, the high-refund high-maintenance ones.',
    body: (
      <SplitStep
        step={3}
        side="right"
        title="Validate PMF & define ICPs (and non-ICPs)"
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
        title="Map customer journey"
        art="/assets/dia-loop-v2.webp"
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
        title="Create go-to-market strategy"
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
      'Step seven, the budget. And the order matters here too. First, set the target, the business goal, before you set the marketing spend. Second, analyse your competitors and your own context to confirm the posture: are you being aggressive, conservative, or holding at status quo? Third, estimate the actual headcount and financial cost for each node of the funnel, not one number for the whole thing. And fourth, run a scenario analysis, optimistic, pessimistic and realistic, and then plan for the worst case.',
    body: (
      <SplitStep
        step={7}
        side="right"
        title="Confirm marketing budget"
        art="/assets/dia-budget-chart.webp"
        points={[
          <>
            Set the <strong style={{ color: 'var(--fg)' }}>target</strong> (business goal) before you set the
            marketing spend.
          </>,
          'Analyse competitors and your current context to confirm the posture: aggressive, conservative, or status quo.',
          'Estimate the specific headcount and financial cost required at each node of the funnel.',
          'Run a scenario analysis (optimistic, pessimistic, realistic) and prepare for the worst case.',
        ]}
      />
    ),
  },
  {
    id: 'ns-step8',
    notes:
      'Step eight, and only now do we talk about SEO itself. Five moves. First, define exactly what share of total customer acquisition SEO is responsible for. Second, set the right SEO goals. Third, create a strategy to hit them. Fourth, break that strategy into an actionable plan. Fifth, execute it. Now, notice what is missing from that list: the results. SEO results are often out of our control, and pretending otherwise is where most of the stress comes from. That is the whole subject of my talk tomorrow at the Sunday side event, the SEO Happiness Formula. I will show you my formulas and exactly how to break SEO goals into steps with measurable KPIs, so you can judge your own work on what you actually control.',
    body: <SeoPlanStep />,
  },

  /* 9 — split, diagram on the right */
  {
    id: 'ns-step9',
    notes:
      'Step nine. A strategy is not a document you file, it is a system you keep adjusting. Minor reviews every quarter, a proper overhaul every six to nine months. Decide up front what your core KPIs are, what would trigger an early warning, and how often you iterate.',
    body: (
      <SplitStep
        step={9}
        side="right"
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
      'That is the nine steps. Questions? And if you want to stay in touch afterwards, there are three codes on the screen. The first is my personal WeChat. The second is my WeChat blog, the public account. The third is my LinkedIn. Scan whichever fits how you prefer to keep in contact.',
    body: (
      <div className={CENTER}>
        <Eyebrow center>Over to you</Eyebrow>
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
