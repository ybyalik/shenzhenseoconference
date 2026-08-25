import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowUpRight, BackToTop, Footer, LinkedInIcon, Nav, XIcon, YouTubeIcon } from '../../_components/shared';
import { KEYNOTES, sameCategorySpeakers, speakerSlug, visibleSpeakers } from '@/lib/lineup';
import { bioParagraphs, bioText, PROFILE_BY_SLUG, SPEAKER_PROFILES, type ProfileSession } from '@/lib/speaker-profiles';

/* ─────────────────────────────────── ICONS ──────────────────────────────── */

function BackArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

const RED_LABEL = {
  color: '#EB3030',
  fontFamily: 'General Sans, system-ui, sans-serif',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.18em',
} as const;

const COUNTRY_CODES: Record<string, string> = {
  'united states': 'US', usa: 'US', 'united kingdom': 'GB', uk: 'GB', spain: 'ES', china: 'CN',
  denmark: 'DK', australia: 'AU', canada: 'CA', france: 'FR', switzerland: 'CH', japan: 'JP',
  'south korea': 'KR', germany: 'DE', russia: 'RU', luxembourg: 'LU', 'hong kong': 'HK',
  egypt: 'EG', italy: 'IT', estonia: 'EE', india: 'IN', indonesia: 'ID', qatar: 'QA',
  sweden: 'SE', thailand: 'TH', turkey: 'TR', belgium: 'BE', singapore: 'SG',
};

const flagEmoji = (name: string) => {
  const cc = COUNTRY_CODES[name.trim().toLowerCase()];
  if (!cc) return name.trim();
  return String.fromCodePoint(...[...cc].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
};

const countryFlags = (country: string) =>
  country.split(/[&·]/).map((c) => flagEmoji(c)).join(' ');

/** Google Calendar link. Sessions run 20 to 45 minutes, so a 1 hour block is a
 *  sane default for a personal calendar; the exact running order is on /agenda. */
function calendarUrl(name: string, s: ProfileSession) {
  if (!s.start) return null;
  const end = s.start.replace(/T(\d{2})(\d{2})/, (_, h: string, m: string) =>
    `T${String((Number(h) + 1) % 24).padStart(2, '0')}${m}`,
  );
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${s.title} — Shenzhen SEO Conference 2026`,
    dates: `${s.start}/${end}`,
    location: s.where,
    details: `Session with ${name} at the Shenzhen SEO Conference 2026. Full agenda: https://shenzhenseoconference.com/agenda`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/* ────────────────────────────── ROUTING / SEO ───────────────────────────── */

export function generateStaticParams() {
  return SPEAKER_PROFILES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROFILE_BY_SLUG.get(slug);
  if (!p) return { title: 'Speaker Not Found' };

  const first = p.sessions[0];
  const flatBio = bioText(p.bio);
  const description = flatBio
    ? flatBio.slice(0, 155)
    : `${p.name}, ${p.title}, speaking at the Shenzhen SEO Conference 2026.`;

  return {
    title: `${p.name} — ${p.title} | Shenzhen SEO Conference 2026`,
    description,
    alternates: { canonical: `https://shenzhenseoconference.com/speakers/${p.slug}` },
    openGraph: {
      title: `${p.name} at the Shenzhen SEO Conference 2026`,
      description: first ? first.title : description,
      url: `https://shenzhenseoconference.com/speakers/${p.slug}`,
      images: [p.img],
      type: 'profile',
    },
  };
}

/* ──────────────────────────────────── PAGE ──────────────────────────────── */

export default async function SpeakerProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = PROFILE_BY_SLUG.get(slug);
  if (!s) notFound();

  // Prefer the shared lineup so the cards match the /speakers page exactly.
  // Hosts, VIP-networking and side-event speakers aren't in those four
  // categories, so fall back to everyone sharing a tag. Tags can be compound
  // ("VIP Networking & Side Event"), so compare the parts, not the whole string.
  const tagParts = (t: string) => t.split('&').map((x) => x.trim().toLowerCase());
  const myTags = tagParts(s.tag);
  const fromLineup = sameCategorySpeakers(s.name, 8);
  const sameTag = SPEAKER_PROFILES.filter(
    (p) => p.slug !== s.slug && tagParts(p.tag).some((t) => myTags.includes(t)),
  ).slice(0, 8);
  // The host is the only one-of-a-kind tag; send them to the keynotes rather
  // than leaving the page without onward links.
  const recommended =
    fromLineup.length > 0 ? fromLineup : sameTag.length > 0 ? sameTag : visibleSpeakers(KEYNOTES).slice(0, 8);
  const bio = bioParagraphs(s.bio);
  const btnBase =
    'display inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.18em] uppercase text-white';
  const iconBtn =
    'inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-opacity hover:opacity-85';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: s.name,
    jobTitle: s.title,
    image: `https://shenzhenseoconference.com${s.img}`,
    url: `https://shenzhenseoconference.com/speakers/${s.slug}`,
    ...(bio.length ? { description: bioText(s.bio) } : {}),
    sameAs: [s.linkedin, s.x, s.youtube].filter(Boolean),
    performerIn: s.sessions.map((sess) => ({
      '@type': 'Event',
      name: sess.title,
      location: { '@type': 'Place', name: sess.where },
      superEvent: { '@type': 'Event', name: 'Shenzhen SEO Conference 2026' },
    })),
  };

  return (
    <main className="bg-[#03060d] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Nav linkBase="/" />
      <div className="pt-[80px] lg:pt-[96px]" aria-hidden />

      {/* ── Speaker hero ── */}
      <section className="bg-[#03060d]">
        <div className="container pt-8 md:pt-12 pb-12 md:pb-16">
          <div className="flex items-center gap-3 uppercase mb-10 md:mb-14" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.06em' }}>
            <Link href="/speakers" className="inline-flex items-center gap-3 text-white/85 hover:text-white transition-colors">
              <BackArrow className="w-5 h-5" />
              All Speakers
            </Link>
            <span className="text-white/25">/</span>
            <span style={{ color: '#5DAEDB' }}>{s.name}</span>
          </div>

          {/* Fixed aspect, not stretch-to-row: speakers without a bio have a short
              text column, and a stretching photo would collapse to a thin band. */}
          <div className="grid gap-8 md:gap-12 lg:gap-14 md:grid-cols-[minmax(0,380px)_1fr] items-start">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <Image src={s.img} alt={s.name} fill priority className="object-cover object-center" sizes="(min-width: 768px) 42vw, 100vw" />
            </div>

            <div className="flex flex-col">
              <span className="uppercase" style={RED_LABEL}>
                {s.tag} · 2026
              </span>
              <h1 className="display text-white mt-3" style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, lineHeight: '100%', letterSpacing: '-0.02em' }}>
                {s.name}
              </h1>
              <p className="mt-4 text-white/70" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 20, fontWeight: 400, lineHeight: '150%' }}>
                {s.title}
              </p>

              {/* Divider only earns its place when something follows it. */}
              {(bio.length > 0 || s.linkedin || s.x || s.youtube) && (
                <div className="mt-8 md:mt-10 border-t border-white/10" />
              )}

              {bio.length > 0 && (
                <div className="mt-8 space-y-4 text-white/70" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: '175%' }}>
                  {bio.map((para, k) => (
                    <p key={k}>{para}</p>
                  ))}
                </div>
              )}

              {(s.linkedin || s.x || s.youtube) && (
                <div className="mt-8 md:mt-10 flex flex-row gap-3">
                  {s.linkedin && (
                    <a href={s.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} on LinkedIn`} title="LinkedIn" className={iconBtn} style={{ background: '#2563EB' }}>
                      <LinkedInIcon className="w-5 h-5" />
                    </a>
                  )}
                  {s.x && (
                    <a href={s.x} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} on X`} title="X" className={`${iconBtn} border border-white/25`} style={{ background: '#000000' }}>
                      <XIcon className="w-5 h-5" />
                    </a>
                  )}
                  {s.youtube && (
                    <a href={s.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} on YouTube`} title="YouTube" className={iconBtn} style={{ background: '#FF0000' }}>
                      <YouTubeIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Session(s) ── */}
      <section className="bg-[#03060d]">
        <div className="container py-12 md:py-16 flex flex-col gap-6 md:gap-8">
          {s.sessions.map((sess, i) => {
            const cal = calendarUrl(s.name, sess);
            // Most speakers have one talk and one shared description; a speaker
            // with two talks carries a description on each session instead.
            const desc = sess.description ?? (i === 0 ? s.description : []);
            return (
              <div
                key={`${sess.title}-${i}`}
                className="rounded-[32px] border border-white/10 p-7 md:p-12"
                style={{
                  background:
                    'radial-gradient(70% 80% at 100% 0%, rgba(235,48,48,0.10) 0%, transparent 55%), radial-gradient(60% 80% at 100% 100%, rgba(17,139,172,0.10) 0%, transparent 55%), #070c15',
                }}
              >
                <div className="grid gap-10 md:grid-cols-2 md:gap-14">
                  <div>
                    <span className="uppercase" style={RED_LABEL}>
                      {s.sessions.length > 1 ? `Session ${i + 1}` : 'Session'}
                    </span>
                    <h2 className="display text-white mt-4" style={{ fontSize: 'clamp(22px, 2.6vw, 34px)', fontWeight: 700, lineHeight: '112%', letterSpacing: '-0.01em' }}>
                      {sess.title}
                    </h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 p-5">
                        <div className="flex items-center gap-2 uppercase text-white/50" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em' }}>
                          <CalendarIcon className="w-4 h-4" />
                          When
                        </div>
                        <div className="display text-white mt-2.5" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.005em' }}>
                          {sess.when}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 p-5">
                        <div className="flex items-center gap-2 uppercase text-white/50" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em' }}>
                          <PinIcon className="w-4 h-4" />
                          Where
                        </div>
                        <div className="display text-white mt-2.5" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.005em' }}>
                          {sess.where}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {desc.length > 0 && (
                      <div className="space-y-4 text-white/60" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 15, fontWeight: 400, lineHeight: '175%' }}>
                        {desc.map((line, k) => (
                          <p key={k}>{line}</p>
                        ))}
                      </div>
                    )}
                    <div className="mt-8 md:mt-auto md:pt-8 flex flex-col sm:flex-row gap-4 md:justify-end">
                      {cal && (
                        <a href={cal} target="_blank" rel="noopener noreferrer" className={`${btnBase} gradient-cta keep-icon`}>
                          <CalendarIcon className="w-4 h-4" />
                          Add to Calendar
                        </a>
                      )}
                      <Link href="/agenda" className={`${btnBase} border border-white/40 hover:bg-white hover:text-[#03060d] transition-colors`}>
                        View Full Agenda
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── More speakers (same category, from the shared lineup) ── */}
      {recommended.length > 0 && (
        <section className="bg-[#03060d]">
          <div className="container py-12 md:py-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12">
              <div>
                <span className="uppercase" style={RED_LABEL}>
                  More Speakers
                </span>
                <h2 className="display uppercase text-white mt-3" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, lineHeight: '105%', letterSpacing: '-0.01em' }}>
                  Also on the lineup.
                </h2>
              </div>
              <Link
                href="/speakers"
                className="btn-outline-white display inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase text-white border border-white/40 self-start"
              >
                See All Speakers
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
              {recommended.map((m) => (
                <Link
                  key={m.name}
                  href={`/speakers/${speakerSlug(m.name)}`}
                  className="rounded-2xl bg-[#06101a]/60 p-4 md:p-6 border border-white/[0.06] hover:border-[var(--red)] transition-colors"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5">
                    <Image src={m.img} alt={m.name} fill className="object-cover" sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="mt-5 text-[18px] leading-none" title={m.country}>
                    {countryFlags(m.country)}
                  </div>
                  <div className="mt-2 text-[18px] font-bold text-white leading-tight">{m.name}</div>
                  {m.title && (
                    <div className="mt-1.5 text-[14px] text-white/55 leading-snug line-clamp-2" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
                      {m.title}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="bg-[#03060d] py-12 md:py-16">
        <div className="container">
          <div className="rounded-[28px] py-14 md:py-20 px-6 text-center" style={{ background: 'linear-gradient(160deg, #114555 0%, #0a3142 35%, #06222d 70%, #051820 100%)' }}>
            <h2 className="display uppercase text-white text-[28px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.005em] max-w-[920px] mx-auto">
              One Room. Five Days. September.
            </h2>
            <p className="mt-5 max-w-[720px] mx-auto text-white/85" style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '160%' }}>
              If the question is whether Shenzhen is worth the trip, the answer is yes. If the
              question is whether you should wait for 2027, the answer is no. Seats cap at 600.
            </p>
            <Link href="/#pricing" className="mt-8 display inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[12px] font-bold tracking-[0.18em] uppercase gradient-cta text-white">
              Get Tickets
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer linkBase="/" />
      <BackToTop />
    </main>
  );
}
