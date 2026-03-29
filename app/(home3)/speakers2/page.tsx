'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const speakers = [
  { name: 'Garry Illyes', role: 'Company,\nJob title', image: '/assets/home3/speaker-illes_4x.webp', linkedin: true },
  { name: 'Lily Ray', role: 'Company,\nJob title', image: '/assets/home3/speaker-ray_4x.webp', linkedin: true },
  { name: 'Eli Schwartz', role: 'Company,\nJob title', image: '/assets/home3/speaker-schwartz_4x.webp', linkedin: true },
  { name: 'Lars Lofgren', role: 'Company,\nJob title', image: '/assets/home3/speaker-lofgren_4x.webp', linkedin: true },
];

const sections = [
  {
    title: (<>
      <span className="text-[#4657db]">Keynote</span><br />
      <span className="pl-4">Speakers</span>
    </>),
    speakers,
  },
  {
    title: (<>
      <span className="text-[#4657db]">Workshop</span><br />
      <span className="pl-4">Speakers</span>
    </>),
    speakers,
  },
  {
    title: (<>
      <span className="text-[#4657db]">Field Talk</span><br />
      <span className="pl-4 text-[#4657db]">& Lightning</span><br />
      <span className="text-[#4657db]">Talk</span> Speakers
    </>),
    speakers,
  },
];

/* ─── Speaker Card ─── */
function SpeakerCard({ speaker }: { speaker: typeof speakers[0] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col group/speaker">
      {/* Name & role at top */}
      <div className="px-5 md:px-6 pt-5 md:pt-6 pb-3 md:pb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-[#020725]">{speaker.name}</h3>
        <p className="text-sm md:text-base text-[#020725]/70 whitespace-pre-line">{speaker.role}</p>
      </div>

      {/* Speaker image with decorative background */}
      <div className="relative h-[220px] md:h-[260px] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-300 group-hover/speaker:opacity-0">
          <Image
            src="/assets/home3/speaker-graphic-default_4x.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/speaker:opacity-100">
          <Image
            src="/assets/home3/speaker-graphic-hover_4x.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="px-5 md:px-6 py-4 md:py-5 flex gap-2">
        <Link href="/speakers" className="px-4 py-2.5 bg-[#020725] text-white text-sm rounded leading-[1.2] hover:bg-[#4657db] transition-colors">
          Learn more
        </Link>
        {speaker.linkedin && (
          <span className="w-10 h-10 bg-[#4657db] rounded flex items-center justify-center flex-shrink-0 hover:bg-white transition-colors group/li cursor-pointer">
            <svg className="w-5 h-5 fill-white group-hover/li:fill-[#4657db] transition-colors" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function SpeakersHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 text-center">
        <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
          Meet Our Speakers
        </h1>
        <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[550px] mx-auto">
          These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
        </p>
      </div>
    </section>
  );
}

/* ─── Apply to Speak CTA ─── */
function ApplyToSpeak() {
  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-[#020725] mb-2">Join Us in 2026</h3>
            <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">
              Whether you&apos;re a seasoned pro or a rising star in digital marketing, we want to hear your insights. Submit your speaker proposal today and help us build the future of SEO.
            </p>
          </div>
          <Link
            href="/contact2"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#020725] text-white text-sm md:text-base rounded hover:bg-[#4657db] transition-colors w-fit flex-shrink-0"
          >
            Apply to Speak
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Speaker Scroll Row ─── */
function SpeakerScrollRow({ speakerList }: { speakerList: typeof speakers }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop: 4-col grid */}
      <div className="hidden xl:grid grid-cols-4 gap-6">
        {speakerList.map((speaker, j) => (
          <SpeakerCard key={j} speaker={speaker} />
        ))}
      </div>
      {/* Mobile/Tablet: horizontal scroll */}
      <div className="xl:hidden">
        <div ref={scrollRef} className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {speakerList.map((speaker, j) => (
            <div key={j} className="flex-shrink-0 w-[75vw] md:w-[30vw] snap-start">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
        {/* Arrows */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button onClick={() => scroll('left')} className="w-11 h-11 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-[#020725]/50" />
          </button>
          <button onClick={() => scroll('right')} className="w-11 h-11 rounded-lg bg-[#020725] flex items-center justify-center hover:bg-[#020725]/90 transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

/* ─── Speaker Sections ─── */
function SpeakerSections() {
  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="flex flex-col gap-16 md:gap-24">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-8 md:mb-10">
                {section.title}
              </h2>
              <SpeakerScrollRow speakerList={section.speakers} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Past Speakers 2025 ─── */
function PastSpeakers() {
  const pastSpeakers = [...speakers, ...speakers];

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-8 md:mb-10">
          <span className="text-[#4657db]">Past</span><br />
          <span className="pl-4">Speakers</span><br />
          <span className="text-[#4657db]">2025</span>
        </h2>

        <SpeakerScrollRow speakerList={pastSpeakers} />

        <div className="text-center mt-8 md:mt-10">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-[#020725] text-white text-sm md:text-base rounded hover:bg-[#4657db] transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Be Part of 2026 CTA ─── */
function BePartCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
            Be Part of 2026
          </h2>
          <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[500px]">
            Share your SEO expertise and breakthrough strategies with a global audience at the 2026 Shenzhen SEO Conference.
          </p>
          <Link
            href="/contact2"
            className="inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-[#4657db] text-white text-base rounded leading-[1.2] hover:bg-[#4657db]/90 transition-colors"
          >
            Apply to Speak
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Speakers2() {
  return (
    <div className="font-[var(--font-sora)]">
      <SpeakersHero />
      <ApplyToSpeak />
      <SpeakerSections />
      <PastSpeakers />
      <BePartCTA />
    </div>
  );
}
