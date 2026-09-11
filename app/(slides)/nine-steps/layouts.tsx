'use client';

import Image from 'next/image';

/* Layout kit for the talk. Nine steps in a row with an identical layout reads
   as a form to fill in, so each step gets a shape that suits its content:
   some full-bleed, some split left, some split right, some centre-stage. */

export const PAD = 'px-[5vw] pt-[6vh] pb-[12vh]';

/** Small rail of nine dots so the room always knows how far through we are. */
export function StepRail({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Step ${step} of 9`}>
      {Array.from({ length: 9 }, (_, i) => {
        const n = i + 1;
        const done = n < step;
        const now = n === step;
        return (
          <span
            key={n}
            className="rounded-full transition-all"
            style={{
              width: now ? 22 : 6,
              height: 6,
              background: now ? 'var(--red)' : done ? 'rgba(249,249,249,0.45)' : 'rgba(249,249,249,0.15)',
            }}
          />
        );
      })}
    </div>
  );
}

export function StepHeading({
  step,
  title,
  align = 'left',
  size = 'lg',
}: {
  step: number;
  title: string;
  align?: 'left' | 'center';
  size?: 'lg' | 'md';
}) {
  return (
    <div className={align === 'center' ? 'text-center flex flex-col items-center' : ''}>
      <div className={`flex items-center gap-4 st st-1 ${align === 'center' ? 'justify-center' : ''}`}>
        <span
          className="display"
          style={{ color: 'var(--red)', fontSize: 'clamp(12px, 1.2vw, 17px)', fontWeight: 700, letterSpacing: '0.2em' }}
        >
          STEP {step}
        </span>
        <StepRail step={step} />
      </div>
      <h2
        className="display mt-5 st st-2"
        style={{
          color: 'var(--fg)',
          fontSize: size === 'lg' ? 'clamp(28px, 3.6vw, 62px)' : 'clamp(22px, 2.6vw, 42px)',
          fontWeight: 700,
          lineHeight: 1.04,
          letterSpacing: '-0.03em',
          textWrap: 'balance',
          maxWidth: align === 'center' ? '20ch' : undefined,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export function Points({ items, columns = false }: { items: React.ReactNode[]; columns?: boolean }) {
  return (
    <ul className={columns ? 'grid gap-[2vw] md:grid-cols-3 text-left' : 'flex flex-col gap-[2.2vh]'}>
      {items.map((p, i) => (
        <li key={i} className={`grid grid-cols-[1.6rem_1fr] gap-3 items-baseline st st-${i + 3}`}>
          <span className="display" style={{ color: 'var(--red)', fontSize: 'clamp(11px, 1.05vw, 15px)', fontWeight: 700 }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span
            style={{
              color: 'var(--muted)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: columns ? 'clamp(11px, 1.15vw, 17px)' : 'clamp(13px, 1.4vw, 21px)',
              fontWeight: 400,
              lineHeight: 1.55,
            }}
          >
            {p}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Diagram fills the frame; the words sit in a soft panel over one corner. */
export function FullBleedStep({
  step,
  title,
  art,
  points,
  corner = 'bottom-left',
}: {
  step: number;
  title: string;
  art: string;
  points: React.ReactNode[];
  corner?: 'bottom-left' | 'top-left';
}) {
  return (
    <div className="relative h-full overflow-hidden">
      {/* The art used to span the full slide, and the scrim was supposed to
          keep the left readable. A bright diagram still pushed through it and
          collided with the headline, so the art is confined to the right side
          and the text column keeps the left to itself. */}
      <div className="absolute inset-y-[6vh] right-[2vw] left-[42%]">
        <Image src={art} alt="" fill priority className="object-contain dia-in" sizes="58vw" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            corner === 'top-left'
              ? 'linear-gradient(160deg, rgba(3,6,13,0.9) 0%, rgba(3,6,13,0.45) 38%, transparent 58%)'
              : 'linear-gradient(20deg, rgba(3,6,13,0.9) 0%, rgba(3,6,13,0.45) 38%, transparent 58%)',
        }}
      />
      <div
        className={`absolute inset-0 flex flex-col ${corner === 'top-left' ? 'justify-start pt-[9vh]' : 'justify-end pb-[15vh]'} px-[5vw]`}
      >
        <div style={{ maxWidth: 'min(46ch, 36vw)' }}>
          <StepHeading step={step} title={title} />
          <div className="mt-[4vh]">
            <Points items={points} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Words on one side, diagram on the other. Alternate the side between steps. */
export function SplitStep({
  step,
  title,
  points,
  art,
  diagram,
  side = 'right',
}: {
  step: number;
  title: string;
  points?: React.ReactNode[];
  art?: string;
  diagram?: React.ReactNode;
  side?: 'left' | 'right';
}) {
  const words = (
    <div className={`flex flex-col justify-center h-full ${PAD}`}>
      <StepHeading step={step} title={title} />
      {points && (
        <div className="mt-[4vh]">
          <Points items={points} />
        </div>
      )}
    </div>
  );
  const visual = art ? (
    <div className="relative hidden md:block dia-in">
      <Image src={art} alt="" fill className="object-contain" sizes="46vw" />
    </div>
  ) : (
    <div className={`hidden md:flex items-center justify-center dia-in ${PAD}`}>{diagram}</div>
  );

  return (
    <div className={`h-full grid md:grid-cols-2`}>
      {side === 'right' ? words : visual}
      {side === 'right' ? visual : words}
    </div>
  );
}

/** Diagram takes centre stage; the title sits above it and the points below. */
export function StageStep({
  step,
  title,
  art,
  points,
}: {
  step: number;
  title: string;
  art: string;
  points?: React.ReactNode[];
}) {
  return (
    <div className={`h-full flex flex-col items-center ${PAD}`}>
      <StepHeading step={step} title={title} align="center" size="md" />
      <div className="relative flex-1 min-h-0 w-full mt-[3vh] dia-in" style={{ maxWidth: 1250 }}>
        <Image src={art} alt="" fill className="object-contain" sizes="90vw" />
      </div>
      {points && (
        <div className="mt-[3vh] w-full" style={{ maxWidth: 1250 }}>
          <Points items={points} columns />
        </div>
      )}
    </div>
  );
}

/** A single sentence carrying the slide, with the diagram supporting beneath. */
export function StatementStep({
  step,
  title,
  statement,
  art,
}: {
  step: number;
  title: string;
  statement: React.ReactNode;
  art: string;
}) {
  return (
    <div className={`h-full grid md:grid-cols-[1.15fr_1fr] items-center ${PAD}`}>
      <div>
        <StepHeading step={step} title={title} size="md" />
        <p
          className="display mt-[5vh] st st-3"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(20px, 2.6vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            textWrap: 'balance',
            maxWidth: '20ch',
          }}
        >
          {statement}
        </p>
      </div>
      <div className="relative h-full min-h-[34vh] hidden md:block dia-in">
        <Image src={art} alt="" fill className="object-contain" sizes="46vw" />
      </div>
    </div>
  );
}
