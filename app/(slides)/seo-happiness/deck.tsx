'use client';

import Image from 'next/image';

import { Eyebrow, HostSlide, type Slide } from '../side-event-slides/deck';
import { ByRole, CENTER, GoalsCompare, Kicker, PAD, Statement } from './layouts';

export const SEO_HAPPINESS: Slide[] = [
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
              fontSize: 'clamp(38px, 5.8vw, 100px)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.035em',
              textWrap: 'balance',
              maxWidth: '15ch',
            }}
          >
<span style={{ color: 'var(--red)' }}>Stress-free</span> SEO
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
            Three steps to better results and a calmer life
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'hap-host',
    notes:
      'Sixteen years in SEO: in-house, agency side, and running my own affiliate sites. I have been unhappy in all three, which is partly why I care about this.',
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

  /* ── The hook: a live poll ── */
  {
    id: 'hap-poll',
    notes:
      'Two questions, hands up. First: who here is an SEO? Keep your hand up. Second: who here is happy? Look around the room. That gap is what this talk is about.',
    body: (
      <div className={CENTER}>
        <Kicker center>Hands up</Kicker>
        <div className="mt-[7vh] flex flex-col gap-[6vh] w-full" style={{ maxWidth: 1100 }}>
          {[
            { q: 'Are you an SEO?', n: '01', accent: false },
            { q: 'Are you happy?', n: '02', accent: true },
          ].map((row, i) => (
            <div key={row.n} className={`flex items-baseline justify-center gap-6 st st-${i + 1}`}>
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
    id: 'hap-equation',
    notes:
      'Here is the equation. SEO happiness is not a soft idea, it is two things multiplied together. Being good at SEO, and being happy. Most of us optimise one and neglect the other.',
    body: (
      <div className={CENTER}>
        <Kicker center>The equation</Kicker>
        <div className="mt-[7vh] flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {[
            { t: 'SEO happiness', c: 'var(--fg)' },
            { t: '=', c: 'var(--muted-2)' },
            { t: 'SEO', c: 'var(--teal-2)' },
            { t: '+', c: 'var(--muted-2)' },
            { t: 'Happiness', c: 'var(--red)' },
          ].map((part, i) => (
            <span
              key={part.t}
              className={`display st st-${i + 1}`}
              style={{ color: part.c, fontSize: 'clamp(26px, 4.4vw, 76px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
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
      'My definition has three parts. Supreme confidence that you will hit your SEO goals. Completely stress-free while doing it. And a better life outside the work. If you have all three, you can leave now. If not, here is the path.',
    body: (
      <div className={`h-full flex flex-col justify-center ${PAD}`}>
        <Kicker>My definition</Kicker>
        <h2
          className="display mt-5 st st-1"
          style={{ color: 'var(--fg)', fontSize: 'clamp(26px, 3.2vw, 52px)', fontWeight: 700, letterSpacing: '-0.028em', lineHeight: 1.05 }}
        >
          Three things, at the same time
        </h2>
        <div className="mt-[6vh] grid gap-5 md:grid-cols-3">
          {[
            ['01', 'Supreme confidence', 'You know you will hit your SEO goals.'],
            ['02', 'Completely stress-free', 'And you are not losing sleep getting there.'],
            ['03', 'A better life', 'Outside the work, not instead of it.'],
          ].map(([n, h, d], i) => (
            <div key={n} className={`st st-${i + 2}`}>
              <div
                className="display"
                style={{ color: 'var(--red)', fontSize: 'clamp(12px, 1.2vw, 17px)', fontWeight: 700, letterSpacing: '0.12em' }}
              >
                {n}
              </div>
              <div
                className="display mt-4"
                style={{ color: 'var(--fg)', fontSize: 'clamp(18px, 2.1vw, 34px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}
              >
                {h}
              </div>
              <p
                className="mt-3"
                style={{ color: 'var(--muted)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 'clamp(12px, 1.25vw, 18px)', lineHeight: 1.5 }}
              >
                {d}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[5vh] grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <p
            className="display st st-5"
            style={{ color: 'var(--fg)', fontSize: 'clamp(17px, 2vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Not there yet? <span style={{ color: 'var(--red)' }}>It can be engineered.</span>
          </p>
          <div className="relative hidden md:block dia-in" style={{ width: 'clamp(240px, 30vw, 460px)', height: 'clamp(90px, 16vh, 170px)' }}>
            <Image src="/assets/dia-definition.webp" alt="" fill className="object-contain object-right" sizes="30vw" />
          </div>
        </div>
      </div>
    ),
  },

  /* ── Step 1 ── */
  {
    id: 'hap-s1',
    notes:
      'Step one, positioning. If you cannot say who you are and who your ideal customer is, do not expect Google or an LLM to describe you accurately, and do not expect them to send you the right people. The machine cannot be clearer about you than you are.',
    body: (
      <Statement
        kicker="Step 1 · Positioning"
        art="/assets/dia-venn.webp"
        line={<>Who are you?</>}
        sub={
          <>
            If you do not know who you are and who your ICP is, do not expect Google or an LLM to describe you
            accurately, or to send you the right people. The same three C’s: customers, competitors, context.
          </>
        }
      />
    ),
  },
  {
    id: 'hap-s1-roles',
    notes:
      'This lands differently depending on your seat. In-house, run the three Cs exercise with your stakeholders so your specific value is on paper. Agency side, decide who you serve and who you turn away. Affiliate, know your edge and pick your lane ruthlessly.',
    body: (
      <ByRole
        kicker="Step 1 · By role"
        title="What positioning means in your seat"
        rows={[
          ['In-house SEO', 'Run the 3 C’s with your stakeholders, and prove your specific value on paper.'],
          ['Agency or owner', 'Decide exactly who you serve, and who you turn away.'],
          ['Affiliate', 'Know your edge, then pick your lane ruthlessly.'],
        ]}
      />
    ),
  },

  /* ── Step 2 ── */
  {
    id: 'hap-s2',
    notes:
      'Step two, goals. If you cannot articulate what you want, you will never get it. And most SEO goals are written in a way that guarantees unhappiness, because they are goals nobody can actually promise.',
    body: (
      <div className={`h-full flex flex-col items-center justify-center ${PAD}`}>
        <div className="text-center">
          <Kicker center>Step 2 · Goal-setting</Kicker>
          <h2
            className="display mt-5 st st-1"
            style={{ color: 'var(--fg)', fontSize: 'clamp(26px, 3.4vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            What do you actually want?
          </h2>
        </div>
        <div className="mt-[6vh] st st-2">
          <GoalsCompare
            bad={['“2x our organic traffic.”', '“Increase SEO sales by 100%.”']}
            good={[
              'Branded keywords rank #1, and AI overviews reflect positive sentiment.',
              'Recover from a core algorithm hit within 6 months.',
              'Increase indexed pages by 50%, from 1M to 1.5M.',
            ]}
          />
        </div>
        <div className="mt-[5vh] grid md:grid-cols-[auto_1fr] gap-8 items-center st st-3" style={{ maxWidth: 1150 }}>
          <div className="relative hidden md:block dia-in" style={{ width: 'clamp(120px, 15vw, 220px)', height: 'clamp(80px, 14vh, 150px)' }}>
            <Image src="/assets/dia-target.webp" alt="" fill className="object-contain" sizes="15vw" />
          </div>
          <p
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(12px, 1.35vw, 20px)',
              lineHeight: 1.6,
            }}
          >
            Nobody can guarantee traffic, and double the traffic is not double the sales. SEO sales are barely
            trackable now. The goals on the right are ones you can actually own.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'hap-s2-flow',
    notes:
      'And the order matters. Do not start with keywords. Start with the customer journey, then the marketing strategy, then the marketing goal, and only then work out what role SEO plays and what its goal should be.',
    body: (
      <Statement
        kicker="Step 2 · The order"
        art="/assets/dia-goalflow.webp"
        line={<>SEO’s goal comes last, not first.</>}
        sub={
          <>
            Customer journey, then marketing strategy, then the marketing goal. Only then do you work out what SEO is
            responsible for. Start at the keyword and you will set a goal you cannot defend.
          </>
        }
      />
    ),
  },
  {
    id: 'hap-s2-roles',
    notes:
      'By role again. In-house, tie the SEO goal to a revenue target so it survives budget season. Agency, this is expectation-setting with the client and a growth metric for you. Affiliate, you are an entrepreneur, so set goals across work, life and revenue, not just revenue.',
    body: (
      <ByRole
        kicker="Step 2 · By role"
        title="Whose number are you carrying?"
        rows={[
          ['In-house SEO', 'Tie the SEO goal to a company revenue target so it survives budget season.'],
          ['Agency or owner', 'Set client expectations, and set your own agency growth metric.'],
          ['Affiliate', 'You are an entrepreneur. Set goals for work, life and revenue.'],
        ]}
      />
    ),
  },

  /* ── Step 3 ── */
  {
    id: 'hap-s3',
    notes:
      'Step three, and this is the heart of it. Any marketing result is strategy, plus execution, plus luck and patience. There is a Chinese phrase for this: 尽人事，听天命. Do everything a person can do, then accept what heaven decides.',
    body: (
      <Statement
        kicker="Step 3 · Break down the result"
        art="/assets/dia-formula.webp"
        line={
          <>
            Control the inputs. <span style={{ color: 'var(--muted-2)' }}>Release the rest.</span>
          </>
        }
        sub={
          <>
            尽人事，听天命. Do everything a person can do, then accept what heaven decides. You control the strategy and
            the execution. You do not control the result, only your confidence in it.
          </>
        }
      />
    ),
  },
  {
    id: 'hap-s3-control',
    notes:
      'Here is why vague KPIs make you miserable. Traditional SEO is content, links, technical and user engagement, and you only really control the first three. New SEO adds rented land, which by definition you do not own. Organic traffic is rankings plus click-through plus demand generation, and you control one of those three. Leads and sales depend on a whole pipeline you do not run. If you are measured on the parts you cannot control, you will be unhappy no matter how good you are.',
    body: (
      <Statement
        kicker="Step 3 · The KPI trap"
        art="/assets/dia-control.webp"
        line={<>You are being measured on things you do not control.</>}
        sub={
          <>
            Traditional SEO is content, links, technical and engagement, and you own three of the four. New SEO adds
            rented land, which by definition is not yours. Traffic is rankings plus click-through plus demand
            generation. Sales depend on a pipeline you do not run.
          </>
        }
      />
    ),
  },

  /* ── Bonuses ── */
  {
    id: 'hap-b1',
    notes:
      'Bonus one, and this is the uncomfortable one. You are not actually looking for higher rankings or more AI visibility. You are looking for lower expectations. Buffett said the secret to happiness is having low expectations. Lower the SEO goal, lower the marketing goal, lower the business goal, and you will be measurably happier.',
    body: (
      <div className={CENTER}>
        <Kicker center>Bonus 1</Kicker>
        <blockquote
          className="display mt-[6vh] st st-1"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(28px, 4.4vw, 76px)',
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
        <cite
          className="mt-8 st st-2"
          style={{
            color: 'var(--muted-2)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(12px, 1.3vw, 19px)',
            fontWeight: 600,
            letterSpacing: '0.14em',
            fontStyle: 'normal',
            textTransform: 'uppercase',
          }}
        >
          Warren Buffett
        </cite>
        <p
          className="mt-[7vh] st st-3"
          style={{
            color: 'var(--muted)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(14px, 1.6vw, 24px)',
            maxWidth: '48ch',
            lineHeight: 1.6,
          }}
        >
          You are not looking for higher rankings. You are looking for lower expectations. Lower the SEO goal, the
          marketing goal and the business goal, and you will be measurably happier.
        </p>
      </div>
    ),
  },
  {
    id: 'hap-b2',
    notes:
      'Bonus two. 找对人很重要. Finding the right people matters more than anything else in this list. Whatever your role, keep improving your filter for who you hire, who you work with, and who you spend time around.',
    body: (
      <Statement
        kicker="Bonus 2"
        art="/assets/dia-people.webp"
        line={
          <>
            找对人很重要.<br />
            <span style={{ color: 'var(--muted)' }}>Find the right people.</span>
          </>
        }
        sub={
          <>
            The highest-leverage thing on this list. Whatever your role, keep sharpening the filter for who you hire,
            who you work with, and who you spend your time around.
          </>
        }
      />
    ),
  },
  {
    id: 'hap-b2-roles',
    notes:
      'In-house, get to conferences and build alliances with other departments, because SEO alone cannot ship anything. Agency, hire operators better than you. Affiliate, build a small network of peers who will show you real data, not case studies.',
    body: (
      <ByRole
        kicker="Bonus 2 · By role"
        title="Where to find them"
        rows={[
          ['In-house SEO', 'Get to conferences. Build alliances with other departments.'],
          ['Agency or owner', 'Hire operators who are better than you.'],
          ['Affiliate', 'Build a small circle of peers who share real data, not case studies.'],
        ]}
      />
    ),
  },

  /* ── Recap ── */
  {
    id: 'hap-recap',
    notes:
      'So: articulate your positioning, set goals you can actually own, break the result into the parts you control, lower your expectations, and surround yourself with the right people. That is the path.',
    body: (
      <div className="h-full grid md:grid-cols-[1.15fr_1fr]">
        <div className={`flex flex-col justify-center ${PAD}`}>
        <Kicker>The recap</Kicker>
        <h2
          className="display mt-5 st st-1"
          style={{ color: 'var(--fg)', fontSize: 'clamp(24px, 3vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}
        >
          The whole path, on one slide
        </h2>
        <ol className="mt-[4vh] flex flex-col">
          {[
            ['Step 1', 'Articulate your positioning.'],
            ['Step 2', 'Set SEO goals you can actually own.'],
            ['Step 3', 'Break results into what you control.'],
            ['Bonus 1', 'Lower your expectations.'],
            ['Bonus 2', 'Surround yourself with the right people.'],
          ].map(([label, text], i) => (
            <li
              key={label}
              className={`grid grid-cols-[5.5rem_1fr] gap-4 items-baseline py-[1.8vh] st st-${Math.min(i + 2, 5)}`}
              style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
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
                style={{ color: 'var(--fg)', fontSize: 'clamp(14px, 1.7vw, 27px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25 }}
              >
                {text}
              </span>
            </li>
          ))}
        </ol>
        </div>
        {/* The five points as a climb, so the recap reads as progress rather
            than as another list. */}
        <div className="relative hidden md:block dia-in">
          <Image src="/assets/dia-path.webp" alt="" fill className="object-contain" sizes="45vw" />
        </div>
      </div>
    ),
  },

  {
    id: 'hap-qa',
    notes:
      'That is it. Questions, and here is how to reach me. And if this was useful, the main conference in September goes a lot deeper.',
    body: (
      <div className="h-full grid md:grid-cols-[1.25fr_1fr]">
        <div className={`flex flex-col justify-center ${PAD}`}>
          <Kicker>Over to you</Kicker>
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
            style={{ color: 'var(--muted)', fontSize: 'clamp(11px, 1.15vw, 17px)', fontWeight: 700 }}
          >
            Scan for the main conference
          </span>
        </div>
      </div>
    ),
  },
];
