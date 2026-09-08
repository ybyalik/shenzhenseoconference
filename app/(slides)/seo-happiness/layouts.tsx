'use client';

import Image from 'next/image';

/* Layout kit for the SEO Happiness talk. This one is more of an argument than
   a checklist, so it leans on statement slides and comparisons rather than a
   diagram on every page. */

export const PAD = 'px-[5vw] pt-[6vh] pb-[12vh]';
export const CENTER = `h-full flex flex-col items-center justify-center text-center ${PAD}`;

export function Kicker({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
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

/** A single line doing all the work. Used for the beats of the argument. */
export function Statement({
  kicker,
  line,
  sub,
  art,
}: {
  kicker: string;
  line: React.ReactNode;
  sub?: React.ReactNode;
  art?: string;
}) {
  const words = (
    <>
      <Kicker center={!art}>{kicker}</Kicker>
      <h2
        className="display mt-6 st st-1"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(32px, 4.8vw, 84px)',
          fontWeight: 700,
          lineHeight: 1.03,
          letterSpacing: '-0.03em',
          textWrap: 'balance',
          maxWidth: '18ch',
        }}
      >
        {line}
      </h2>
      {sub && (
        <p
          className="mt-[5vh] st st-2"
          style={{
            color: 'var(--muted)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 'clamp(14px, 1.6vw, 25px)',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '46ch',
          }}
        >
          {sub}
        </p>
      )}
    </>
  );

  if (art) {
    return (
      <div className="h-full grid md:grid-cols-[1fr_minmax(0,44%)]">
        <div className={`flex flex-col justify-center ${PAD}`}>{words}</div>
        <div className="relative hidden md:block dia-in">
          <Image src={art} alt="" fill className="object-contain" sizes="44vw" />
        </div>
      </div>
    );
  }
  return <div className={CENTER}>{words}</div>;
}

/** Three roles, three answers. The spine of this talk. */
/** One icon per role, reused on every by-role slide so the audience learns to
 *  find their own column instantly. */
const ROLE_ART: Record<string, string> = {
  'In-house SEO': '/assets/role-inhouse.webp',
  'Agency or owner': '/assets/role-agency.webp',
  Affiliate: '/assets/role-affiliate.webp',
};

export function ByRole({
  kicker,
  title,
  rows,
}: {
  kicker: string;
  title: string;
  rows: [string, string][];
}) {
  return (
    <div className={`h-full flex flex-col justify-center ${PAD}`}>
      <Kicker>{kicker}</Kicker>
      <h2
        className="display mt-5 st st-1"
        style={{ color: 'var(--fg)', fontSize: 'clamp(26px, 3.2vw, 52px)', fontWeight: 700, letterSpacing: '-0.028em', lineHeight: 1.05 }}
      >
        {title}
      </h2>
      <div className="mt-[6vh] grid gap-4 md:grid-cols-3">
        {rows.map(([role, action], i) => (
          <div
            key={role}
            className={`rounded-2xl p-6 st st-${i + 2}`}
            style={{
              border: `1px solid ${i === 1 ? 'rgba(235,48,48,0.4)' : 'var(--line-2)'}`,
              background: i === 1 ? 'rgba(235,48,48,0.05)' : 'rgba(249,249,249,0.03)',
            }}
          >
            {/* Served unoptimised on purpose: Next's image optimiser flattens
                the alpha channel on these at some widths, which puts a solid
                dark square behind the icon. They are tiny, so nothing is lost. */}
            {ROLE_ART[role] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={ROLE_ART[role]}
                alt=""
                className="block object-contain object-left"
                style={{ height: 'clamp(72px, 15vh, 150px)', width: 'auto' }}
              />
            )}
            <div
              className="uppercase mt-5"
              style={{
                color: i === 1 ? 'var(--red)' : 'var(--muted-2)',
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 'clamp(9px, 0.95vw, 13px)',
                fontWeight: 700,
                letterSpacing: '0.2em',
              }}
            >
              {role}
            </div>
            <p
              className="display mt-4"
              style={{
                color: 'var(--fg)',
                fontSize: 'clamp(14px, 1.5vw, 23px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Bad goals against good goals, so the difference is visible not described. */
export function GoalsCompare({ bad, good }: { bad: string[]; good: string[] }) {
  const Col = ({ label, items, bad: isBad }: { label: string; items: string[]; bad?: boolean }) => (
    <div>
      <div
        className="uppercase"
        style={{
          color: isBad ? 'var(--muted-2)' : 'var(--teal-2)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontSize: 'clamp(10px, 1vw, 14px)',
          fontWeight: 700,
          letterSpacing: '0.2em',
        }}
      >
        {label}
      </div>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((g) => (
          <li
            key={g}
            className="rounded-xl px-5 py-4"
            style={{
              border: `1px solid ${isBad ? 'var(--line-2)' : 'rgba(17,139,172,0.5)'}`,
              background: isBad ? 'transparent' : 'rgba(17,139,172,0.08)',
              color: isBad ? 'var(--muted-2)' : 'var(--fg)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(12px, 1.25vw, 19px)',
              fontWeight: 500,
              lineHeight: 1.4,
              textDecoration: isBad ? 'line-through' : 'none',
              textDecorationColor: 'rgba(235,48,48,0.7)',
            }}
          >
            {g}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="w-full grid gap-8 md:grid-cols-2" style={{ maxWidth: 1250 }}>
      <Col label="Goals that make you miserable" items={bad} bad />
      <Col label="Goals you can actually own" items={good} />
    </div>
  );
}
