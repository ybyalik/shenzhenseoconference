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

function TitleSlide({ line, sub }: { line: React.ReactNode; sub: string }) {
  return (
    <div className="relative h-full">
      <Image src="/assets/slide-bg-title.webp" alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.55)' }} />
      <div className={`relative ${CENTER}`}>
        <Image
          src="/logo-white.webp"
          alt="Shenzhen SEO Conference"
          width={480}
          height={89}
          priority
          className="w-[min(40vw,460px)] h-auto"
        />
        <h1
          className="display mt-[6vh]"
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
        <p
          className="mt-7"
          style={{
            color: 'var(--muted)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(16px, 1.9vw, 28px)',
            fontWeight: 500,
          }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

function HostSlide({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <div className="h-full grid md:grid-cols-[minmax(0,36%)_1fr]">
      <div className="relative hidden md:block">
        <Image
          src="/figma-assets/jp-portrait.png"
          alt="JP Zhang speaking on stage"
          fill
          priority
          className="object-cover object-center"
          sizes="36vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 50%, var(--bg) 100%)' }} />
      </div>
      <div className={`flex flex-col justify-center ${PAD}`}>
        <Eyebrow>Your host</Eyebrow>
        <h2
          className="display mt-5"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(38px, 5vw, 82px)',
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: '-0.025em',
          }}
        >
          John / JP Zhang
        </h2>
        <dl className="mt-[5vh] flex flex-col">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className="grid grid-cols-[7.5rem_1fr] gap-6 items-baseline py-[1.6vh]"
              style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
            >
              <dt
                className="uppercase"
                style={{
                  color: 'var(--muted-2)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                  fontSize: 'clamp(9px, 0.9vw, 12px)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                }}
              >
                {k}
              </dt>
              <dd
                className="display"
                style={{
                  color: 'var(--fg)',
                  fontSize: 'clamp(15px, 1.75vw, 27px)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                }}
              >
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/** Mission / vision / values, over the generated East–West artwork. */
function DnaSlide() {
  return (
    <div className="relative h-full">
      <Image src="/assets/slide-bg-bridge.webp" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: 'rgba(3,6,13,0.62)' }} />
      <div className={`relative ${CENTER}`}>
        <Eyebrow center>Our DNA</Eyebrow>
        <Headline center>
          Connecting Eastern &amp;<br />Western SEOs
        </Headline>
        <div className="mt-[8vh] grid gap-[5vh] sm:grid-cols-2 w-full" style={{ maxWidth: 980 }}>
          <Stat size="md" label="Vision" value="China’s most international SEO conference" />
          <Stat size="md" label="Values" value="Growth. Entrepreneurship. Partnership." />
        </div>
      </div>
    </div>
  );
}

/** The barrier on the left, the way past it on the right. */
function WhySlide({ extra }: { extra?: string }) {
  const panels = [
    {
      tag: 'The main conference',
      accent: false,
      rows: [
        ['When', 'Weekdays'],
        ['Ticket', '$600'],
        ['So', 'Time off work, and a real spend'],
      ] as [string, string][],
    },
    {
      tag: 'This side event',
      accent: true,
      rows: [
        ['When', 'A weekend afternoon'],
        ['Ticket', 'Free'],
        ['So', 'No sponsors, no upsells, no spam'],
      ] as [string, string][],
    },
  ];
  return (
    <div className={CENTER}>
      <Eyebrow center>Why we do this</Eyebrow>
      <Headline center>Bridging the information gap</Headline>
      <div className="mt-[6vh] grid gap-6 md:grid-cols-2 w-full text-left" style={{ maxWidth: 1250 }}>
        {panels.map((panel) => (
          <div
            key={panel.tag}
            className="rounded-2xl p-[3vw] md:p-9"
            style={{
              border: `1px solid ${panel.accent ? 'rgba(235,48,48,0.45)' : 'var(--line-2)'}`,
              background: panel.accent ? 'rgba(235,48,48,0.06)' : 'transparent',
            }}
          >
            <div
              className="uppercase"
              style={{
                color: panel.accent ? 'var(--red)' : 'var(--muted-2)',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 'clamp(10px, 1vw, 14px)',
                fontWeight: 700,
                letterSpacing: '0.18em',
              }}
            >
              {panel.tag}
            </div>
            <dl className="mt-6 flex flex-col">
              {panel.rows.map(([k, v], i) => (
                <div
                  key={k}
                  className="grid grid-cols-[5.5rem_1fr] gap-5 items-baseline py-[1.4vh]"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
                >
                  <dt
                    className="uppercase"
                    style={{
                      color: 'var(--muted-2)',
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 'clamp(9px, 0.85vw, 12px)',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                    }}
                  >
                    {k}
                  </dt>
                  <dd
                    className="display"
                    style={{ color: 'var(--fg)', fontSize: 'clamp(16px, 1.85vw, 29px)', fontWeight: 700, letterSpacing: '-0.01em' }}
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      {extra && (
        <p
          className="mt-[5vh]"
          style={{
            color: 'var(--fg)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(16px, 1.8vw, 27px)',
            fontWeight: 500,
          }}
        >
          {extra}
        </p>
      )}
    </div>
  );
}

/** One dot per application: 40 made the main stage, the rest are why we are here. */
function SurpriseSlide() {
  return (
    <div className={CENTER}>
      <Eyebrow center>The surprise</Eyebrow>
      <Headline center>150+ applied for 40 slots</Headline>
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
      <div className="mt-[6vh] flex flex-wrap justify-center gap-x-[6vw] gap-y-[3vh]">
        {[
          { dot: 'var(--fg)', n: '40', label: 'Main stage slots', accent: false },
          { dot: 'rgba(235,48,48,0.85)', n: '110+', label: 'Couldn’t fit on it', accent: true },
        ].map((g) => (
          <div key={g.label} className="flex items-center gap-3.5">
            <span className="rounded-full shrink-0" style={{ width: 16, height: 16, background: g.dot }} />
            <span className="text-left">
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
            </span>
          </div>
        ))}
      </div>
      <p
        className="mt-[6vh]"
        style={{
          color: 'var(--fg)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 'clamp(17px, 2vw, 30px)',
          fontWeight: 500,
        }}
      >
        So we built a weekend stage for East–West exchange.
      </p>
    </div>
  );
}

type Speaker = { name: string; img: string; topic: string };

function LineupSlide({ date, speakers }: { date: string; speakers: Speaker[] }) {
  return (
    <div className={CENTER}>
      <Eyebrow center>Today · {date}</Eyebrow>
      <Headline center>Today’s lineup</Headline>
      <ol
        className="mt-[6vh] grid gap-[2vw] w-full text-left"
        style={{ gridTemplateColumns: `repeat(${Math.min(speakers.length, 5)}, minmax(0, 1fr))`, maxWidth: 1500 }}
      >
        {speakers.map((sp, i) => (
          <li key={sp.name}>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden" style={{ background: 'rgba(249,249,249,0.05)' }}>
              <Image src={sp.img} alt={sp.name} fill className="object-cover" sizes="20vw" />
            </div>
            <div className="display mt-4" style={{ color: 'var(--red)', fontSize: 'clamp(11px, 1.05vw, 15px)', fontWeight: 700, letterSpacing: '0.08em' }}>
              {String(i + 1).padStart(2, '0')}
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
}: {
  eyebrow: string;
  lines: { text: React.ReactNode; muted?: boolean }[];
}) {
  return (
    <div className={CENTER}>
      <Eyebrow center>{eyebrow}</Eyebrow>
      <div className="mt-[6vh] flex flex-col gap-[3.5vh]">
        {lines.map((l, i) => (
          <div
            key={i}
            className="display"
            style={{
              color: l.muted ? 'var(--muted)' : 'var(--fg)',
              fontSize: l.muted ? 'clamp(20px, 2.6vw, 42px)' : 'clamp(38px, 5.4vw, 88px)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              textWrap: 'balance',
            }}
          >
            {l.text}
          </div>
        ))}
      </div>
    </div>
  );
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
  { name: 'Tanya Van Gastel', img: '/assets/tanya-van-gastel.webp', topic: 'Winning AI search: a 4-step guide for Chinese companies' },
  { name: 'Magenta Qin', img: '/assets/magenta-qin.webp', topic: 'From JSON to Markdown: cutting the cost of AI-powered SEO analysis' },
  { name: 'Jacky Lin', img: '/assets/jacky-lin.webp', topic: 'From AI tools to B2B growth systems' },
  { name: 'Sacha Fournier', img: '/assets/sacha-fournier.jpg', topic: 'Winning in the West: agentic digital PR for Chinese brands' },
  { name: 'Vinayak Gupta & Sharoz Dawa', img: '/assets/vinayak-gupta.webp', topic: 'Build your AI workforce: a 24/7 multi-agent chief of staff' },
];

const DAY2_LINEUP: Speaker[] = [
  { name: 'Jamie I.F.', img: '/assets/jamie-if.webp', topic: 'Affiliates & influencers to grow AI visibility in the USA' },
  { name: 'Tori Long', img: '/assets/tori-long.webp', topic: 'S.P.A.C.E.: a framework for exporters at a growth ceiling' },
  { name: 'Ilman Akbar', img: '/assets/ilman-akbar.webp', topic: 'How to talk so the C-suite will listen' },
  { name: 'Jabez Reuben', img: '/assets/jabez-reuben.jpg', topic: 'Dominating LLMs, AiO & Google rankings with consensus' },
  { name: 'Secret Speaker', img: '/assets/speaker-placeholder.webp', topic: 'Revealed on the day' },
];

export type Slide = { id: string; section: string; notes: string; body: React.ReactNode };

export const SLIDES: Slide[] = [
  /* ───────────── Sat 12 Sep · Opening ───────────── */
  {
    id: 'd1-welcome',
    section: 'Sat 12 Sep · Opening',
    notes:
      'Hello everyone, and welcome! Thank you so much for taking the time out of your weekend to join us for this Shenzhen SEO Conference Side Event. My name is John, also known as JP Zhang, and I am absolutely thrilled to see all of you here today. Before we dive into the amazing sessions our guest speakers have prepared, I want to take a few minutes to introduce myself, share the story behind the main conference, and explain exactly why we created this free event.',
    body: <TitleSlide line="Side Event" sub="Hosted by John / JP Zhang" />,
  },
  {
    id: 'd1-host',
    section: 'Sat 12 Sep · Opening',
    notes:
      'For those I haven’t met yet, here is a quick background on who I am. I’m a serial entrepreneur deeply rooted in this industry. I’ve been in the SEO game for 16 years, experiencing it from every angle—in-house at companies like Wondershare, working at a Silicon Valley agency, and running my own affiliate content sites. Today, I manage several brands, including my blog, our paid community, and of course, the Shenzhen SEO Conference.',
    body: (
      <HostSlide
        rows={[
          ['Experience', '16 years in SEO, as a serial SEO entrepreneur'],
          ['In-house', 'Wondershare, Shenzhen (2010) · Whova, San Diego (2016)'],
          ['Agency', 'Baunfire, San Jose (2014–2015)'],
          ['Affiliate', 'Self-employed (2012–13, 2017–now)'],
          ['Brands', '英文SEO实战派 · SEO实战学院 · Shenzhen SEO Conf · SEO Connector'],
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
      'Let’s be completely honest about why this side event exists. Attending the main conference is a significant commitment. It takes place on weekdays, and the tickets are around $600. We know many of you are deeply curious about what overseas SEO professionals are doing, but you might be hesitating, wondering if the main event is worth the investment and time off work. We wanted to give you a risk-free weekend afternoon to experience our value firsthand. This event is 100% free, with zero sponsors, zero upsells, and zero spam. We are absorbing the costs for the venue and organization because we want to present this exclusively to the right people. That is exactly why we required an application form—not to be elitist, but as a filter. As long as you filled it out seriously, you were approved. We wanted to ensure this room is filled with practitioners who genuinely care.',
    body: <WhySlide extra="Application-only, so the room is all practitioners." />,
  },
  {
    id: 'd1-surprise',
    section: 'Sat 12 Sep · Opening',
    notes:
      'The second reason is a very happy problem we encountered this year. We initially planned for about 30 to 40 speakers on the main stage. Instead, we were overwhelmed by more than 150 speaker applications. There were so many incredible experts we desperately wanted to give a stage to, but we couldn’t fit them all, especially since we have to carefully balance the ratio of returning speakers. So, we connected the dots. You want to learn without spending $600 or taking time off work, and we have an abundance of brilliant speakers eager to share. This side event became the perfect bridge. It allows domestic and international practitioners to share the same stage, exchange ideas directly, and truly fulfill our mission. We hope you enjoy today’s sessions, and thank you for supporting this initiative.',
    body: <SurpriseSlide />,
  },
  {
    id: 'd1-lineup',
    section: 'Sat 12 Sep · Opening',
    notes:
      'Which brings us to today. We have a fantastic lineup of experts ready to share their first-hand strategies with you. My only goal today is for you to enjoy the experience, learn something new, and connect with each other. If you love the vibe today and feel like it’s a good fit, we would love to see you at the main Shenzhen SEO Conference. Let’s get started and welcome our first speaker to the stage!',
    body: <LineupSlide date="Saturday 12 September" speakers={DAY1_LINEUP} />,
  },

  /* ───────────── Sat 12 Sep · Closing ───────────── */
  {
    id: 'd1c-thanks',
    section: 'Sat 12 Sep · Closing',
    notes:
      'Thank you all for spending your Saturday afternoon with us. When we opened this event a few hours ago, I promised you a space with zero sponsors, zero upsells, and 100% pure value. Looking at the conversations and the energy in this room today, I believe we delivered exactly that—a genuine exchange between East and West. But we are only halfway there. We have another incredible lineup of speakers tomorrow from 1:00 PM to 6:00 PM right here, and I highly encourage you to come back for part two.',
    body: (
      <StatementSlide
        eyebrow="That’s a wrap on day one"
        lines={[
          { text: 'Thank you for today' },
          { text: 'We are only halfway there' },
          { text: 'See you tomorrow, 1:00 PM – 6:00 PM', muted: true },
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
        eyebrow="What you saw today"
        lines={[
          { text: <span style={{ color: 'var(--red)' }}>The tip of the iceberg</span> },
          { text: 'Growth. Entrepreneurship. Partnership.', muted: true },
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
    id: 'd1c-cta',
    section: 'Sat 12 Sep · Closing',
    notes:
      'We know taking time off work and investing $600 for a ticket is a big commitment. That is exactly why we hosted this free side event—so you could test our standard and feel the atmosphere yourself. If today proved to you that we prioritize real signal over noise, then I can confidently say the 5-day main event is an investment that will return its value many times over. The QR code on the screen has all the details for the main conference. Scan it, look at the full agenda, and if you are ready to step into that room, we would be honored to welcome you. Have a great evening, and I will see you all back here tomorrow at 1:00 PM!',
    body: <CtaSlide eyebrow="Join the right room" headline="Invest in your growth" />,
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
        sub="Hosted by John / JP Zhang"
      />
    ),
  },
  {
    id: 'd2-host',
    section: 'Sun 13 Sep · Opening',
    notes:
      'For the new faces in the room, here is a quick background on who I am. I’m a serial entrepreneur deeply rooted in this industry. I’ve been in the SEO game for 16 years, experiencing it from every angle—in-house, working at a Silicon Valley agency, and running my own affiliate content sites. Today, I manage several brands, including my blog, our paid community, and the Shenzhen SEO Conference.',
    body: (
      <HostSlide
        rows={[
          ['Experience', '16 years in SEO'],
          ['Brands', '英文SEO实战派 · SEO实战学院 · Shenzhen SEO Conf · SEO Connector'],
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
      'Attending the main conference is a significant commitment. It takes place on weekdays, and the tickets are around $600. We know many of you want to learn from overseas SEO professionals but might be hesitating to take time off work or make that investment. We wanted to give you a risk-free weekend to experience our standard firsthand. This event is 100% free, with zero sponsors, zero upsells, and zero spam. We require an application simply to filter the room and ensure everyone here is a dedicated practitioner.',
    body: <WhySlide extra="A risk-free weekend to see the standard for yourself." />,
  },
  {
    id: 'd2-surprise',
    section: 'Sun 13 Sep · Opening',
    notes:
      'The second reason we are here is because of an incredible surprise. We initially planned for 40 speakers on the main stage, but we received over 150 applications from brilliant global experts. We couldn’t fit them all on the main stage, so we created this side event as a bridge. It allows domestic and international practitioners to share the same stage and exchange ideas directly.',
    body: <SurpriseSlide />,
  },
  {
    id: 'd2-lineup',
    section: 'Sun 13 Sep · Opening',
    notes:
      'That brings us to our agenda for today, September 13th. We have a completely different, yet equally fantastic lineup of experts ready to share their strategies with you this afternoon. My goal for you is to learn, connect, and enjoy the vibe. If you find value today, we would love to see you at the main Shenzhen SEO Conference. Let’s get started and welcome our first speaker for Day 2 to the stage!',
    body: <LineupSlide date="Sunday 13 September" speakers={DAY2_LINEUP} />,
  },

  /* ───────────── Sun 13 Sep · Closing ───────────── */
  {
    id: 'd2c-thanks',
    section: 'Sun 13 Sep · Closing',
    notes:
      'And just like that, our two-day side event comes to a close. Whether you were here for just today or spent your entire weekend with us, thank you. When we kicked this off, I promised you an environment with zero sponsors, zero upsells, and pure, actionable value. Looking at the conversations sparked in this room between domestic and international practitioners, I am incredibly proud of what this community just built together over the last 48 hours.',
    body: (
      <StatementSlide
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
        eyebrow="What you saw this weekend"
        lines={[
          { text: <span style={{ color: 'var(--red)' }}>The tip of the iceberg</span> },
          { text: 'Growth. Entrepreneurship. Partnership.', muted: true },
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
    id: 'd2c-cta',
    section: 'Sun 13 Sep · Closing',
    notes:
      'If this weekend proved to you that we prioritize real signal over noise, then I can confidently say the main event is an investment that will pay dividends for your business and career. The QR code on the screen contains the full 5-day agenda and ticket access. Scan it, make the investment in your growth, and step into the main room with us. Thank you all once again for an incredible weekend, safe travels home, and I hope to see you at the main Shenzhen SEO Conference!',
    body: <CtaSlide eyebrow="Final call" headline="Step into the main room" footer="See you next week" />,
  },
];
