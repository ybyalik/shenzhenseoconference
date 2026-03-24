'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Globe, Users, Atom, ArrowRight, Target, Check, X, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { speakers } from '@/lib/speakers-data';
import Script from 'next/script';

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/shenzhen-seo-conference-min_1758443453925.webp"
          alt="Shenzhen skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 h-full flex items-end pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-end justify-between w-full">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-[#4657db] text-white text-sm rounded">
                <Calendar className="w-4 h-4" />
                September 14-18, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-[#fd6f47] text-white text-sm rounded">
                <MapPin className="w-4 h-4" />
                The St. Regis Shenzhen
              </span>
            </div>

            {/* Title - uppercase like the screenshot */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.05] uppercase tracking-tight">
              Shenzhen SEO<br />
              Conference<br />
              <span className="inline-flex items-center gap-3">
                {/* Double chevron icon */}
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className="inline-block">
                  <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 12 12) translate(-3 0)" />
                  <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 12 12) translate(3 0)" />
                </svg>
                2026
              </span>
            </h1>
          </div>

          {/* Right column */}
          <div className="lg:max-w-[414px] flex flex-col gap-6 lg:items-end lg:text-right">
            <p className="text-white text-lg leading-relaxed">
              Join the premier SEO event connecting Eastern and Western digital markets. 5 days of innovation in China&apos;s Silicon Valley.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-3.5 bg-white text-[#020725] text-base rounded-lg hover:bg-gray-100 transition-colors w-fit"
            >
              Get Early Bird Tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Cards ─── */
function StatsSection() {
  const stats = [
    { value: '500+', label: 'Attendees\nExpected', sub: 'From around the world' },
    { value: '40+', label: 'World-Class\nSpeakers', sub: 'Industry leaders & experts' },
    { value: '5', label: 'Days\nof Innovation', sub: 'Sept 14-18, 2026' },
    { value: '30+', label: 'Countries\nRepresented', sub: 'Global perspectives' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="flex flex-col sm:flex-row gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 bg-[#f5f5f5] rounded-lg p-6 flex flex-col justify-between min-h-[270px]">
              <span className="text-[64px] font-extrabold text-[#4657db] leading-[1.3] tracking-tight">{stat.value}</span>
              <div className="flex flex-col gap-1.5">
                <span className="text-2xl font-semibold text-[#020725] leading-[1.2] whitespace-pre-line">{stat.label}</span>
                <span className="text-lg text-[#020725]/60">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Info Cards (What / Who / Why) ─── */
function InfoSection() {
  return (
    <section id="about" className="scroll-mt-20">
      {/* Row 1 — What */}
      <div className="bg-[#f5f5f5] relative overflow-hidden h-[230px]">
        <div className="max-w-[1440px] mx-auto relative h-full flex items-center px-6 lg:px-20">
          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.0] text-[#020725] uppercase">
            What the<br />
            <span className="pl-6">conference is</span>
          </h2>
          <div className="absolute right-6 lg:right-20 top-8 bottom-0 w-[400px] lg:w-[521px] hidden md:block">
            <div className="relative w-full h-full rounded-t-lg overflow-hidden">
              <Image src="/assets/home3/info-what-image_4x.webp" alt="What the conference is" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 — Who */}
      <div className="bg-[#020725] relative overflow-hidden h-[230px]">
        <div className="max-w-[1440px] mx-auto relative h-full flex items-center px-6 lg:px-20">
          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.0] text-white uppercase">
            Who<br />
            <span className="pl-10">it&apos;s for</span>
          </h2>
          <div className="absolute right-6 lg:right-20 top-8 bottom-0 w-[400px] lg:w-[521px] hidden md:block">
            <div className="relative w-full h-full rounded-t-lg overflow-hidden">
              <Image src="/assets/home3/info-who-image_4x.webp" alt="Who it's for" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 — Why */}
      <div className="bg-[#f5f5f5] relative overflow-hidden h-[230px]">
        <div className="max-w-[1440px] mx-auto relative h-full flex items-center px-6 lg:px-20">
          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.0] text-[#020725] uppercase">
            Why Shenzhen<br />
            <span className="pl-10">matters</span>
          </h2>
          <div className="absolute right-6 lg:right-20 top-8 bottom-0 w-[400px] lg:w-[521px] hidden md:block">
            <div className="relative w-full h-full rounded-t-lg overflow-hidden">
              <Image src="/assets/home3/info-why-image_4x.webp" alt="Why Shenzhen matters" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Attend ─── */
function WhyAttendSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Top row: Title column + 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Title column */}
          <div className="flex flex-col justify-center gap-8 py-8">
            <h2 className="text-3xl md:text-[34px] font-extrabold leading-[1.1] uppercase">
              Why Attend The Shenzhen SEO Conference?
            </h2>
            <p className="text-lg text-[#020725]">
              The only conference bridging Eastern and Western SEO strategies in China&apos;s innovation capita
            </p>
          </div>

          {/* Card: East-West Insights */}
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Globe className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-[#020725]">East-West Insights</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Learn strategies for Baidu, WeChat, Google, and global platforms from industry experts.</p>
          </div>

          {/* Card: Global Network */}
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Users className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-[#020725]">Global Network</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Connect with SEO professionals from 30+ countries and build lasting partnerships.</p>
          </div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Card: Innovation Hub */}
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Atom className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-[#020725]">Innovation Hub</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Experience Shenzhen&apos;s cutting-edge tech ecosystem and entrepreneurial spirit.</p>
          </div>

          {/* Card: Actionable Strategies */}
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11 text-[#fd6f47]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 22h20M22 22l6-6M22 22l6 6" />
              <path d="M16 22h20M30 22l6-6M30 22l6 6" />
            </svg>
            <h3 className="text-xl font-semibold text-[#020725]">Actionable Strategies</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Walk away with proven tactics you can implement immediately for your business.</p>
          </div>

          {/* CTA Card: Blue */}
          <div className="bg-[#4657db] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Target className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white">Pick your tariff and join</h3>
            <p className="text-base text-white/80 leading-relaxed">Choose the option that suits the most.</p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#020725] text-white text-sm rounded w-fit hover:bg-[#020725]/90 transition-colors"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Speakers ─── */
function SpeakersSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const featured = [
    { name: 'Garry Illyes', role: 'Company,\nJob title', image: '/assets/home3/speaker-illes_4x.webp', linkedin: true },
    { name: 'Lily Ray', role: 'Company,\nJob title', image: '/assets/home3/speaker-ray_4x.webp', linkedin: false },
    { name: 'Eli Schwartz', role: 'Company,\nJob title', image: '/assets/home3/speaker-schwartz_4x.webp', linkedin: true },
    { name: 'Lars Lofgren', role: 'Company,\nJob title', image: '/assets/home3/speaker-lofgren_4x.webp', linkedin: false },
  ];

  const scroll = (dir: 'left' | 'right') => {
    if (!containerRef.current) return;
    const amount = 337;
    containerRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="speakers" className="scroll-mt-20 overflow-hidden">
      {/* Dark header */}
      <div className="bg-[#020725] pt-16 pb-64">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="flex flex-col gap-8 max-w-[410px]">
              <h2 className="text-[40px] font-extrabold text-white leading-[1.0] uppercase">
                Meet Our<br />
                <span className="pl-8">Speakers</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
              </p>
              <Link
                href="/speakers"
                className="inline-flex items-center justify-center px-5 py-3.5 bg-white text-[#020725] text-base rounded-lg w-fit hover:bg-gray-100 transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded-lg border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-6 h-6 text-white/50" />
              </button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded-lg bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-6 h-6 text-[#020725]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker cards - overlapping into dark section */}
      <div className="-mt-44">
        <div ref={containerRef} className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide max-w-[1280px] mx-auto px-6 lg:px-20">
          {featured.map((speaker, i) => (
            <div key={i} className="flex-shrink-0 w-[305px] bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col">
              {/* Name & role at top */}
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-2xl font-semibold text-[#020725]">{speaker.name}</h3>
                <p className="text-base text-[#020725]/70 whitespace-pre-line">{speaker.role}</p>
              </div>

              {/* Speaker image with decorative background */}
              <div className="relative h-[260px] overflow-hidden">
                {/* Decorative geometric dark shapes behind speaker */}
                <div className="absolute inset-0">
                  <Image
                    src="/assets/home3/speaker-graphic-default_4x.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Speaker photo */}
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
              <div className="px-6 py-5 flex gap-2">
                <Link href="/speakers" className="px-4 py-2.5 bg-[#020725] text-white text-sm rounded hover:bg-[#020725]/90 transition-colors">
                  Learn more
                </Link>
                {speaker.linkedin && (
                  <span className="w-10 h-10 bg-[#4657db] rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Schedule ─── */
function ScheduleSection() {
  const days = [
    { date: 'September 14', day: 'DAY 1', weekday: 'Monday', tags: ['Workshop'], title: 'Workshops & City Tours', desc: "Specialized workshops and guided city tours for all attendees to explore Shenzhen's tech districts." },
    { date: 'September 15', day: 'DAY 2', weekday: 'Tuesday', tags: ['Workshop'], title: 'SEO Mastermind', desc: 'Intensive small-group mastermind sessions with industry SEO experts and peers.' },
    { date: 'September 16', day: 'DAY 3', weekday: 'Wednesday', tags: ['Conference'], title: 'Main Conference Day', desc: 'Full day of keynotes, field talks, lightning talks and opening/closing parties.' },
    { date: 'September 17', day: 'DAY 4', weekday: 'Thursday', tags: ['Workshop'], title: 'Main Conference Day', desc: 'Full day of keynotes, field talks, lightning talks and opening/closing parties.' },
    { date: 'September 18', day: 'DAY 5', weekday: 'Friday', tags: ['Networking', 'VIP Venue'], title: 'VIP Networking', desc: 'Exclusive networking event for VIP ticket holders with speakers and sponsors, in a different 5-star hotel (not the conference hotel).' },
  ];

  return (
    <section id="schedule" className="scroll-mt-20 py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Centered header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-extrabold leading-[1.0] uppercase mb-6">
            5-Day Conference<br />Schedule
          </h2>
          <p className="text-lg text-[#020725]/70 mb-6">
            Five days of SEO excellence, networking,<br className="hidden sm:block" />
            and knowledge sharing in Shenzhen.
          </p>
          <a href="#schedule" className="inline-flex items-center justify-center px-5 py-3.5 bg-[#020725] text-white text-base rounded-lg hover:bg-[#020725]/90 transition-colors">
            Explore Agenda
          </a>
        </div>

        {/* Day rows */}
        <div className="flex flex-col divide-y divide-gray-200">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-6 lg:gap-24 py-10">
              {/* Left — date info */}
              <div className="flex flex-col gap-3 min-w-[140px]">
                <span className="inline-flex items-center justify-center px-3 py-1.5 bg-[#4657db] text-white text-sm rounded w-fit">
                  {d.date}
                </span>
                <span className="text-[40px] font-extrabold leading-none uppercase">{d.day}</span>
                <span className="text-lg text-[#020725]/70">{d.weekday}</span>
              </div>

              {/* Right — content */}
              <div className="flex flex-col gap-4 max-w-[480px]">
                <div className="flex flex-wrap gap-3">
                  {d.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1.5 text-sm rounded ${
                        tag === 'VIP Venue'
                          ? 'bg-[#020725] text-white'
                          : 'bg-[#f5f5f5] text-[#020725]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[#020725]">{d.title}</h3>
                <p className="text-base text-[#020725]/60 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Partners & Sponsors ─── */
function SponsorsSection() {
  return (
    <section id="sponsors" className="scroll-mt-20 py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-[40px] font-extrabold uppercase text-center mb-16">
          Partners & Sponsors
        </h2>
      </div>
      <div className="flex items-center justify-center gap-16 lg:gap-20 px-6">
        {[
          { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 186 , h: 140 },
          { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
          { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', w: 280, h: 80 },
          { src: '/assets/home3/logo-1one_4x.webp', alt: '1One', w: 160, h: 100 },
        ].map((logo, i) => (
          <div key={i} className="relative flex-shrink-0" style={{ width: logo.w, height: logo.h }}>
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Founder Story (JP Zhang) ─── */
function FounderSection() {
  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-0 px-6 lg:px-20 py-16">
        {/* JP photo */}
        <div className="relative w-full lg:w-[460px] h-[500px] lg:h-[560px] flex-shrink-0 -ml-6 lg:-ml-10">
          <Image
            src="/assets/home3/jp-image_4x.webp"
            alt="J.P. Zhang"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col gap-8 lg:pl-10">
          <h2 className="text-3xl md:text-[40px] font-extrabold leading-[1.0] uppercase">
            Why I Started<br />
            <span className="pl-8">The Shenzhen</span><br />
            SEO Conference
          </h2>

          {/* Quote mark */}
          <svg className="w-10 h-10 text-[#4657db]" viewBox="0 0 40 40" fill="currentColor">
            <path d="M8 24c0-5.3 3.4-10.3 8-12l1 2c-3.8 2-5.4 5-5.8 8H16v10H6V24zm18 0c0-5.3 3.4-10.3 8-12l1 2c-3.8 2-5.4 5-5.8 8H34v10H24V24z" />
          </svg>

          <div className="flex flex-col gap-5 max-w-[480px]">
            <p className="text-base text-[#020725] leading-relaxed">
              Hi, I&apos;m J.P. Zhang, host of the Shenzhen SEO Conference. After 15+ years in SEO, I&apos;ve seen what&apos;s possible when East and West learn from each other and collaborate.
            </p>
            <p className="text-base text-[#020725] leading-relaxed">
              This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China&apos;s fast-moving digital ecosystem.
            </p>
            <p className="text-base text-[#020725] leading-relaxed">
              My goal is simple: build a truly global SEO community. See you in Shenzhen!
            </p>
          </div>

          {/* Author */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 bg-[#020725] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <span className="text-xl font-semibold text-[#020725]">J.P. Zhang</span>
            </div>
            <span className="text-sm text-[#020725]/60">Host of the Shenzhen SEO Conference</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Venues ─── */
function VenuesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const venues = [
    {
      name: 'The St. Regis Shenzhen',
      dates: 'Sep 14-17',
      tabLabel: 'Main Event',
      desc: 'Luxury accommodations and world-class facilities in the heart of Shenzhen.',
      image: '/assets/home3/st-regis-image_4x.webp',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1!2d114.057!3d22.536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f40c0!2sThe+St.+Regis+Shenzhen!5e0!3m2!1sen!2scn!4v1',
      website: 'https://www.marriott.com/hotels/travel/szxrg-the-st-regis-shenzhen/',
      mapsLink: 'https://maps.google.com/?q=The+St.+Regis+Shenzhen',
      badges: [],
    },
    {
      name: 'A separate\n5 Star Hotel',
      dates: 'Sep 18',
      tabLabel: 'VIP Networking',
      desc: 'Exclusive 5-star venue for the VIP networking day.',
      image: '/assets/home3/venue-tba_4x.webp',
      mapUrl: '',
      website: '#',
      mapsLink: '#',
      badges: ['Announced Soon', 'Exclusive for VIP'],
    },
  ];

  const active = venues[activeTab];

  return (
    <section id="venues" className="scroll-mt-20 py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Centered header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[40px] font-extrabold uppercase mb-4">2026 Venues</h2>
          <p className="text-base text-[#020725]/70 max-w-lg mx-auto">
            Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-4 mb-8">
          {venues.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex items-center justify-between px-8 lg:px-10 py-3.5 rounded transition-colors ${
                activeTab === i ? 'bg-[#4657db] text-white' : 'bg-[#f5f5f5] text-[#020725]'
              }`}
            >
              <span className="text-lg md:text-2xl font-semibold">{v.tabLabel}</span>
              <span className="flex items-center gap-2 text-sm md:text-lg font-normal">
                <Calendar className="w-5 h-5" />
                {v.dates}
              </span>
            </button>
          ))}
        </div>

        {/* Venue card */}
        <div className="bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col lg:flex-row lg:h-[400px] [&>div:last-child]:rounded-none">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col gap-6">
            <h3 className={`font-extrabold leading-[1.1] uppercase whitespace-pre-line ${activeTab === 0 ? 'text-3xl md:text-[40px]' : 'text-2xl md:text-[32px]'}`}>{active.name}</h3>
            <p className="text-base text-[#020725]/70 max-w-[405px]">{active.desc}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={active.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#020725] text-white text-sm rounded hover:bg-[#020725]/90 transition-colors"
              >
                Visit the Website
              </a>
              <a
                href={active.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#020725] text-white text-sm rounded hover:bg-[#020725]/90 transition-colors"
              >
                View on Google Maps
              </a>
            </div>

            {/* Map embed */}
            {active.mapUrl && (
              <div className="w-full h-[200px] rounded-lg overflow-hidden mt-2 lg:mr-6">
                <iframe
                  src={active.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${active.name}`}
                />
              </div>
            )}
          </div>

          {/* Right image */}
          <div className="relative w-full lg:w-[420px] h-[300px] lg:h-auto flex-shrink-0">
            <Image
              src={active.image}
              alt={active.name}
              fill
              className="object-cover"
            />
            {active.badges.length > 0 && (
              <>
                <span className="absolute top-0 right-[calc(100%-40px)] z-10 text-sm pl-4 pr-12 py-2 rounded-l whitespace-nowrap bg-[#020725] text-white" style={{ marginRight: '40px' }}>
                  Announced Soon
                </span>
                <span className="absolute top-[44px] z-10 text-sm pl-6 pr-4 py-2 rounded-l whitespace-nowrap bg-[#4657db] text-white" style={{ right: 'calc(100% - 1px)' }}>
                  Exclusive for VIP
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function PricingSection() {
  const tiers = [
    {
      name: 'Standard',
      price: '$530',
      original: '$530',
      badge: null,
      headerBg: 'bg-[#020725]',
      accentColor: 'text-[#020725]',
      bestFor: 'Best for SEO Practitioners',
      features: [
        { text: 'Days 3-4 sessions', included: true },
        { text: 'Breakfast, lunch, dinner, and coffe', included: true },
        { text: 'Opening & closing parties', included: true },
        { text: 'Days 1-2 sessions', included: false },
        { text: 'Front-row seating', included: false },
        { text: 'Day 5 VIP networking activities', included: false },
        { text: '1 night stay at VIP Networking Hotel', included: false },
      ],
    },
    {
      name: 'Deluxe',
      price: '$795',
      original: '$900',
      badge: 'Most Popular',
      badgeColor: 'text-[#fd6f47]',
      headerBg: 'bg-[#fd6f47]',
      accentColor: 'text-[#fd6f47]',
      bestFor: 'Best for Marketing Manager/Directors',
      features: [
        { text: 'Days 3-4 sessions', included: true },
        { text: 'Breakfast, lunch, dinner, and coffe', included: true },
        { text: 'Opening & closing parties', included: true },
        { text: 'Days 1-2 sessions', included: true },
        { text: 'Front-row seating', included: true },
        { text: 'Day 5 VIP networking activities', included: false },
        { text: '1 night stay at VIP Networking Hotel', included: false },
      ],
    },
    {
      name: 'VIP',
      price: '$1590',
      original: '$1800',
      badge: 'Best Value',
      badgeColor: 'text-[#4657db]',
      headerBg: 'bg-[#4657db]',
      accentColor: 'text-[#4657db]',
      bestFor: 'Best for Executives/Founders',
      features: [
        { text: 'Days 3-4 sessions', included: true },
        { text: 'Breakfast, lunch, dinner, and coffe', included: true },
        { text: 'Opening & closing parties', included: true },
        { text: 'Days 1-2 sessions', included: true },
        { text: 'Front-row seating', included: true },
        { text: 'Day 5 VIP networking activities', included: true },
        { text: '1 night stay at VIP Networking Hotel', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-20 py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-[40px] font-extrabold uppercase text-center mb-12">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="flex flex-col">
              {/* Colored header strip with diagonal left edge */}
              <div className="relative h-[60px]">
                <div
                  className={`${tier.headerBg} absolute inset-0`}
                  style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
                <div className="relative z-10 h-full flex items-center pl-6 pr-0">
                  <h3 className="text-xl md:text-[28px] font-extrabold text-white uppercase">{tier.name}</h3>
                  {tier.badge && (
                    <span className={`px-3 py-1 bg-[#f5f5f5] text-xs font-normal ${tier.badgeColor} ml-auto`}>
                      {tier.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="bg-[#f5f5f5] rounded-b-lg px-6 py-8 flex-1 flex flex-col gap-8">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[40px] font-extrabold text-[#020725]">{tier.price}</span>
                    {tier.original !== tier.price && (
                      <span className={`text-xl line-through ${tier.accentColor}`}>{tier.original}</span>
                    )}
                  </div>
                  <span className={`text-sm ${tier.accentColor}`}>Early bird price</span>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      {f.included ? (
                        <Check className="w-5 h-5 text-[#020725] flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-[#020725]/30 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${f.included ? 'text-[#020725]' : 'text-[#020725]/40'}`}>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex flex-col gap-3">
                  <span className="text-sm text-[#020725]">{tier.bestFor}</span>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-[#020725] text-white text-sm rounded w-fit hover:bg-[#020725]/90 transition-colors"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 2025 Recap ─── */
function RecapSection() {
  return (
    <section className="bg-[#020725] py-16 overflow-hidden">
      {/* Scrolling ticker text — full width, overflows */}
      <div className="overflow-hidden mb-10">
        <div className="ticker-scroll whitespace-nowrap">
          <span className="text-7xl md:text-[102px] font-extrabold uppercase tracking-tight">
            <span className="text-[#4657db]">2025 </span>
            <span className="text-white">RECAP </span>
            <span className="text-[#4657db]">2025 </span>
            <span className="text-white">RECAP </span>
            <span className="text-[#4657db]">2025 </span>
            <span className="text-white">RECAP </span>
            <span className="text-[#4657db]">2025 </span>
            <span className="text-white">RECAP </span>
          </span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Video + testimonial */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Video */}
          <div className="relative flex-1 h-[300px] lg:h-[400px] rounded overflow-hidden bg-black">
            <div
              data-kingsway-player="ee8108f0c9"
              data-width="100%"
              data-height="100%"
              style={{
                aspectRatio: '16 / 9',
                backgroundImage: "url('https://static.kingswayvideo.com/w1o9d6ta/vod/ee8108f0c9/cover.jpg?imageMogr2/format/webp/thumbnail/!30p?t=1763977822290')",
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#000',
                width: '100%',
                height: '100%',
              }}
            />
            <Script
              src="https://websdk.kingswayvideo.com/vod-player/latest/vod-player.min.js"
              strategy="lazyOnload"
            />
          </div>

          {/* Testimonial card */}
          <div className="bg-[#4657db] rounded-lg p-8 lg:p-10 flex flex-col lg:w-[395px]">
            {/* Quote mark + author */}
            <div className="flex items-start gap-3 mb-auto">
              <svg className="w-8 h-8 text-[#fd6f47] flex-shrink-0 mt-1" viewBox="0 0 40 40" fill="currentColor">
                <path d="M8 24c0-5.3 3.4-10.3 8-12l1 2c-3.8 2-5.4 5-5.8 8H16v10H6V24zm18 0c0-5.3 3.4-10.3 8-12l1 2c-3.8 2-5.4 5-5.8 8H34v10H24V24z" />
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-white">Bill Wagner</h4>
                <p className="text-sm text-white/70">CEO, Semrush</p>
              </div>
            </div>

            {/* Quote text */}
            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed mt-8">
              This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China&apos;s fast-moving digital ecosystem.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { val: '100', label: 'Data Header', sub: 'Additional info' },
            { val: '100', label: 'Data Header', sub: 'Additional info' },
            { val: '100', label: 'Data Header', sub: 'Additional info' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <span className="text-5xl md:text-[64px] font-extrabold text-[#4657db]">{s.val}</span>
              <div>
                <p className="text-xl md:text-2xl font-semibold text-white leading-snug">{s.label}</p>
                <p className="text-base text-white/60">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTASection() {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden min-h-[400px]">
          {/* Left — dark card */}
          <div className="bg-[#020725] px-10 py-12 lg:py-16 flex flex-col justify-center gap-6 lg:w-[380px] flex-shrink-0">
            <h3 className="text-3xl md:text-[40px] font-extrabold text-white leading-[1.0] uppercase">
              Join The<br />Conference
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-[280px]">
              Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#4657db] text-white text-sm rounded w-fit hover:bg-[#4657db]/90 transition-colors"
            >
              Get Tickets
            </a>
          </div>

          {/* Right — image with "WHERE SEO MEETS BUSINESS" */}
          <div className="relative flex-1 min-h-[300px]">
            <Image
              src="/assets/home3/final-cta-bg-image-desktop_4x.webp"
              alt="Where SEO meets business"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  const faqs = [
    {
      question: 'How many attendees will there be, and who typically attends?',
      answer: "We expect around 600 attendees, including 300+ from China (mainly in-house SEO and marketing leaders from brands targeting global markets) and 200+ international attendees from agencies, Martech companies, and fractional SEO/marketing consultants.",
    },
    {
      question: 'How many attendees will there be, and who typically attends?',
      answer: "We expect around 600 attendees, including 300+ from China (mainly in-house SEO and marketing leaders from brands targeting global markets) and 200+ international attendees from agencies, Martech companies, and fractional SEO/marketing consultants.",
    },
    {
      question: 'How many attendees will there be, and who typically attends?',
      answer: "We expect around 600 attendees, including 300+ from China (mainly in-house SEO and marketing leaders from brands targeting global markets) and 200+ international attendees from agencies, Martech companies, and fractional SEO/marketing consultants.",
    },
    {
      question: 'How many attendees will there be, and who typically attends?',
      answer: "We expect around 600 attendees, including 300+ from China (mainly in-house SEO and marketing leaders from brands targeting global markets) and 200+ international attendees from agencies, Martech companies, and fractional SEO/marketing consultants.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-20 bg-[#f5f5f5] py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-[40px] font-extrabold uppercase text-center mb-12">FAQ</h2>

        <div className="flex flex-col gap-5 max-w-[900px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg px-8 lg:px-10 py-6">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-8"
              >
                <h3 className="text-lg md:text-xl font-semibold text-left leading-snug">{faq.question}</h3>
                <span className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  {openIdx === i ? (
                    <X className="w-5 h-5 text-[#020725]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[#020725]" />
                  )}
                </span>
              </button>
              {openIdx === i && (
                <p className="text-base text-[#020725]/70 mt-4 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3.5 bg-[#020725] text-white text-sm rounded-lg hover:bg-[#020725]/90 transition-colors"
          >
            View All Questions &amp; Answers
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home3() {
  return (
    <div className="font-[var(--font-sora)]">
      <HeroSection />
      <div className="h-[140px]" />
      <StatsSection />
      <div className="h-[140px]" />
      <InfoSection />
      <div className="h-[140px]" />
      <WhyAttendSection />
      <div className="h-[140px]" />
      <SpeakersSection />
      <div className="h-[140px]" />
      <ScheduleSection />
      <div className="h-[140px]" />
      <SponsorsSection />
      <div className="h-[140px]" />
      <FounderSection />
      <div className="h-[140px]" />
      <VenuesSection />
      <div className="h-[140px]" />
      <PricingSection />
      <div className="h-[140px]" />
      <RecapSection />
      <div className="h-[140px]" />
      <FinalCTASection />
      <div className="h-[40px]" />
      <FAQSection />
    </div>
  );
}
