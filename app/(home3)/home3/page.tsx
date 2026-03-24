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
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] max-h-[900px] overflow-hidden">
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-6 lg:px-20 h-full flex items-center lg:items-end pb-0 lg:pb-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start md:items-center lg:items-end justify-between w-full md:text-center lg:text-left">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 md:items-center lg:items-start">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 md:gap-3 lg:gap-4">
              <span className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-[#4657db] text-white text-xs md:text-sm rounded">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                September 14-18, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-[#fd6f47] text-white text-xs md:text-sm rounded">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                The St. Regis Shenzhen
              </span>
            </div>

            {/* Title - uppercase like the screenshot */}
            <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-extrabold text-white leading-[1.05] uppercase tracking-tight">
              Shenzhen SEO<br />
              Conference
            </h1>
          </div>

          {/* Right column */}
          <div className="md:max-w-[480px] lg:max-w-[414px] flex flex-col gap-4 md:gap-5 lg:gap-6 md:items-center lg:items-end lg:text-right">
            <p className="text-white text-base md:text-lg leading-relaxed">
              Join the premier SEO event connecting Eastern and Western digital markets. 5 days of innovation in China&apos;s Silicon Valley.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-white text-[#020725] text-sm md:text-base rounded-lg hover:bg-gray-100 transition-colors w-fit"
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
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-lg p-5 md:p-6 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 justify-between lg:justify-between min-h-0 lg:min-h-[270px]">
              <span className="text-[48px] lg:text-[64px] font-extrabold text-[#4657db] leading-none lg:leading-[1.3] tracking-tight">{stat.value}</span>
              <div className="flex flex-col gap-0.5 lg:gap-1.5 text-right lg:text-left">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold text-[#020725] leading-[1.2] whitespace-pre-line">{stat.label}</span>
                <span className="text-sm md:text-base lg:text-lg text-[#020725]/60">{stat.sub}</span>
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
  const items = [
    {
      bg: 'bg-[#f5f5f5]',
      textColor: 'text-[#020725]',
      title: <>What the<br /><span className="pl-6">conference is</span></>,
      desc: 'A premier 5-day event bringing together Eastern and Western SEO professionals to share strategies, build partnerships, and explore the future of digital marketing.',
      image: '/assets/home3/info-what-image_4x.webp',
      alt: 'What the conference is',
    },
    {
      bg: 'bg-[#020725]',
      textColor: 'text-white',
      title: <>Who<br /><span className="pl-10">it&apos;s for</span></>,
      desc: 'SEO professionals, marketing leaders, agency owners, and digital strategists looking to expand their global reach and learn cross-border strategies.',
      image: '/assets/home3/info-who-image_4x.webp',
      alt: "Who it's for",
    },
    {
      bg: 'bg-[#f5f5f5]',
      textColor: 'text-[#020725]',
      title: <>Why Shenzhen<br /><span className="pl-10">matters</span></>,
      desc: "China's Silicon Valley and innovation capital — the perfect setting to bridge Eastern and Western digital markets and discover new opportunities.",
      image: '/assets/home3/info-why-image_4x.webp',
      alt: 'Why Shenzhen matters',
    },
  ];

  return (
    <section id="about" className="scroll-mt-20">
      {items.map((item, i) => (
        <div key={i} className={`${item.bg} relative overflow-hidden md:h-[230px]`}>
          <div className="max-w-[1440px] mx-auto relative h-full flex flex-col md:flex-row md:items-center px-5 md:px-6 lg:px-20 py-8 md:py-0">
            <div className="flex flex-col gap-3 md:gap-2 max-w-[55%] md:max-w-none lg:max-w-none">
              <h2 className={`text-[28px] md:text-[36px] lg:text-[56px] font-extrabold leading-[1.0] ${item.textColor} uppercase`}>
                {item.title}
              </h2>
              <p className={`text-sm md:text-sm lg:hidden ${item.textColor === 'text-white' ? 'text-white/70' : 'text-[#020725]/60'} leading-relaxed max-w-[300px]`}>
                {item.desc}
              </p>
            </div>
            {/* Mobile image */}
            <div className="relative w-full h-[200px] mt-4 rounded-lg overflow-hidden md:hidden">
              <Image src={item.image} alt={item.alt} fill className="object-cover object-top" />
            </div>
            {/* Tablet/Desktop image */}
            <div className="absolute right-6 lg:right-20 top-8 bottom-0 w-[280px] lg:w-[521px] hidden md:block">
              <div className="relative w-full h-full rounded-t-lg overflow-hidden">
                <Image src={item.image} alt={item.alt} fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─── Why Attend ─── */
function WhyAttendSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        {/* Desktop layout: Title column + 2 cards in top row */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {/* Title column */}
          <div className="flex flex-col justify-center gap-8 py-8">
            <h2 className="text-[34px] font-extrabold leading-[1.1] uppercase">
              Why Attend The Shenzhen SEO Conference?
            </h2>
            <p className="text-lg text-[#020725]">
              The only conference bridging Eastern and Western SEO strategies in China&apos;s innovation capita
            </p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Globe className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-[#020725]">East-West Insights</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">From around the world</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Users className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-[#020725]">Global Network</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Industry leaders & experts</p>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-8">
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Atom className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-[#020725]">Innovation Hub</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Sept 14-18, 2026</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11 text-[#fd6f47]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 22h20M22 22l6-6M22 22l6 6" />
              <path d="M16 22h20M30 22l6-6M30 22l6 6" />
            </svg>
            <h3 className="text-xl font-semibold text-[#020725]">Actionable Strategies</h3>
            <p className="text-base text-[#020725]/60 leading-relaxed">Global perspectives</p>
          </div>
          <div className="bg-[#4657db] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <Target className="w-11 h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white">Pick your tariff and join</h3>
            <p className="text-base text-white/80 leading-relaxed">Choose the option that suits the most.</p>
            <a href="#pricing" className="inline-flex items-center justify-center px-4 py-2.5 bg-[#020725] text-white text-sm rounded w-fit hover:bg-[#020725]/90 transition-colors">View pricing</a>
          </div>
        </div>

        {/* Mobile & Tablet layout */}
        <div className="lg:hidden">
          {/* Title */}
          <div className="flex flex-col justify-center gap-4 md:gap-6 py-4 md:py-6 mb-5 md:mb-6">
            <h2 className="text-[28px] md:text-[34px] font-extrabold leading-[1.1] uppercase">
              Why Attend The Shenzhen SEO Conference?
            </h2>
            <p className="text-base md:text-lg text-[#020725]">
              The only conference bridging Eastern and Western SEO strategies in China&apos;s innovation capita
            </p>
          </div>

          {/* 4 feature cards in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <Globe className="w-9 h-9 md:w-11 md:h-11 text-[#fd6f47]" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">East-West Insights</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-relaxed">From around the world</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <Users className="w-9 h-9 md:w-11 md:h-11 text-[#fd6f47]" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">Global Network</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-relaxed">Industry leaders & experts</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <Atom className="w-9 h-9 md:w-11 md:h-11 text-[#fd6f47]" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">Innovation Hub</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-relaxed">Sept 14-18, 2026</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <svg className="w-9 h-9 md:w-11 md:h-11 text-[#fd6f47]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 22h20M22 22l6-6M22 22l6 6" />
                <path d="M16 22h20M30 22l6-6M30 22l6 6" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">Actionable Strategies</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-relaxed">Global perspectives</p>
            </div>
          </div>

          {/* CTA Card: Blue - full width */}
          <div className="bg-[#4657db] rounded-lg pt-10 md:pt-12 pb-8 md:pb-10 px-6 md:px-8 flex flex-col gap-3 md:gap-5 mt-5 md:mt-6">
            <Target className="w-9 h-9 md:w-11 md:h-11 text-[#fd6f47]" strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold text-white">Pick your tariff and join</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">Choose the option that suits the most.</p>
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
      <div className="bg-[#020725] pt-12 md:pt-16 pb-44 md:pb-64">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-start md:items-center lg:items-end gap-6 md:gap-8">
            <div className="flex flex-col gap-5 md:gap-8 max-w-[410px] md:items-center lg:items-start md:text-center lg:text-left md:max-w-full lg:max-w-[410px]">
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-white leading-[1.0] uppercase">
                Meet Our<br />
                <span className="pl-6 md:pl-8">Speakers</span>
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed md:max-w-[400px] lg:max-w-none">
                These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker cards - overlapping into dark section */}
      <div className="-mt-32 md:-mt-44">
        <div ref={containerRef} className="flex gap-5 md:gap-8 overflow-x-auto pb-6 md:pb-8 scrollbar-hide max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 snap-x snap-mandatory">
          {featured.map((speaker, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[220px] lg:w-[305px] bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col snap-start">
              {/* Name & role at top */}
              <div className="px-5 md:px-6 pt-5 md:pt-6 pb-3 md:pb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[#020725]">{speaker.name}</h3>
                <p className="text-sm md:text-base text-[#020725]/70 whitespace-pre-line">{speaker.role}</p>
              </div>

              {/* Speaker image with decorative background */}
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/home3/speaker-graphic-default_4x.webp"
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
                <Link href="/speakers" className="px-4 py-2.5 bg-[#020725] text-white text-sm rounded hover:bg-[#020725]/90 transition-colors">
                  Learn More
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

        {/* Bottom controls for mobile */}
        <div className="flex items-center justify-center gap-3 mt-2 px-5 md:px-6 lg:px-20 max-w-[1280px] mx-auto">
          <button onClick={() => scroll('left')} className="w-11 h-11 md:w-12 md:h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#020725]/50" />
          </button>
          <Link
            href="/speakers"
            className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-[#020725] text-white text-sm md:text-base rounded-lg hover:bg-[#020725]/90 transition-colors"
          >
            View All
          </Link>
          <button onClick={() => scroll('right')} className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[#020725] flex items-center justify-center hover:bg-[#020725]/90 transition-colors">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Schedule ─── */
function ScheduleSection() {
  const scheduleRef = useRef<HTMLDivElement>(null);
  const days = [
    { date: 'September 14', day: 'DAY 1', weekday: 'Monday', tags: ['Workshop'], title: 'Workshops & City Tours', desc: "Specialized workshops and guided city tours for all attendees to explore Shenzhen's tech districts." },
    { date: 'September 15', day: 'DAY 2', weekday: 'Tuesday', tags: ['Workshop'], title: 'SEO Mastermind', desc: 'Intensive small-group mastermind sessions with industry SEO experts and peers.' },
    { date: 'September 16', day: 'DAY 3', weekday: 'Wednesday', tags: ['Conference'], title: 'Main Conference Day', desc: 'Full day of keynotes, field talks, lightning talks and opening/closing parties.' },
    { date: 'September 17', day: 'DAY 4', weekday: 'Thursday', tags: ['Workshop'], title: 'Main Conference Day', desc: 'Full day of keynotes, field talks, lightning talks and opening/closing parties.' },
    { date: 'September 18', day: 'DAY 5', weekday: 'Friday', tags: ['Networking', 'VIP Venue'], title: 'VIP Networking', desc: 'Exclusive networking event for VIP ticket holders with speakers and sponsors, in a different 5-star hotel (not the conference hotel).' },
  ];

  const scrollSchedule = (dir: 'left' | 'right') => {
    if (!scheduleRef.current) return;
    const amount = 320;
    scheduleRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="schedule" className="scroll-mt-20 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        {/* Centered header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
            5-Day Conference<br />Schedule
          </h2>
          <p className="text-base md:text-lg text-[#020725]/70 mb-5 md:mb-6">
            Five days of SEO excellence, networking,<br className="hidden sm:block" />
            and knowledge sharing in Shenzhen.
          </p>
          <a href="#schedule" className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-[#020725] text-white text-sm md:text-base rounded-lg hover:bg-[#020725]/90 transition-colors">
            Explore Agenda
          </a>
        </div>

        {/* Tablet: horizontal scroll cards */}
        <div className="lg:hidden">
          <div ref={scheduleRef} className="flex gap-4 md:gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {days.map((d, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] md:w-[300px] bg-[#f5f5f5] rounded-lg p-5 md:p-6 flex flex-col gap-3 snap-start">
                <div className="flex items-center justify-between">
                  <span className="text-[28px] md:text-[36px] font-extrabold leading-none uppercase">{d.day}</span>
                  <span className="inline-flex items-center justify-center px-3 py-1 md:py-1.5 bg-[#4657db] text-white text-xs md:text-sm rounded">
                    {d.date}
                  </span>
                </div>
                <span className="text-sm md:text-base text-[#020725]/70">{d.weekday}</span>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-2.5 py-1 text-xs rounded ${
                        tag === 'VIP Venue'
                          ? 'bg-[#020725] text-white'
                          : 'bg-white text-[#020725]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#020725]">{d.title}</h3>
                <p className="text-sm text-[#020725]/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <button onClick={() => scrollSchedule('left')} className="w-11 h-11 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#020725]/50" />
            </button>
            <button onClick={() => scrollSchedule('right')} className="w-11 h-11 rounded-lg bg-[#020725] flex items-center justify-center hover:bg-[#020725]/90 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop: vertical list */}
        <div className="hidden lg:flex flex-col divide-y divide-gray-200">
          {days.map((d, i) => (
            <div key={i} className="flex flex-row gap-24 py-10">
              {/* Left — date info */}
              <div className="flex flex-col items-start gap-3 min-w-[140px]">
                <span className="text-[40px] font-extrabold leading-none uppercase">{d.day}</span>
                <span className="inline-flex items-center justify-center px-3 py-1.5 bg-[#4657db] text-white text-sm rounded w-fit">
                  {d.date}
                </span>
              </div>

              {/* Right — content */}
              <div className="flex flex-col gap-4 max-w-[480px]">
                <span className="text-lg text-[#020725]/70">{d.weekday}</span>
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
    <section id="sponsors" className="scroll-mt-20 py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold uppercase text-center mb-8 md:mb-16">
          Partners &<br className="md:hidden" /> Sponsors
        </h2>
      </div>
      <div className="hidden md:flex items-center justify-center gap-16 lg:gap-20 px-6">
        {[
          { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 186, h: 140 },
          { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
          { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', w: 280, h: 80 },
          { src: '/assets/home3/logo-1one_4x.webp', alt: '1One', w: 160, h: 100 },
        ].map((logo, i) => (
          <div key={i} className="relative flex-shrink-0" style={{ width: logo.w, height: logo.h }}>
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
      {/* Mobile: 2-col grid */}
      <div className="grid grid-cols-2 gap-6 items-center justify-items-center px-8 md:hidden">
        {[
          { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 120, h: 90 },
          { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 130, h: 90 },
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
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-0 px-5 md:px-6 lg:px-20 py-10 md:py-16">
        {/* JP photo */}
        <div className="relative w-full md:w-[280px] lg:w-[460px] h-[360px] md:h-[420px] lg:h-[560px] flex-shrink-0 md:-ml-4 lg:-ml-10">
          <Image
            src="/assets/home3/jp-image_4x.webp"
            alt="J.P. Zhang"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col gap-5 md:gap-6 lg:gap-8 md:pl-6 lg:pl-10">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
            Why I Started<br />
            <span className="pl-6 md:pl-8">The Shenzhen</span><br />
            SEO Conference
          </h2>

          {/* Quote mark */}
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#4657db]" viewBox="0 0 40 40" fill="currentColor">
            <path d="M8 24c0-5.3 3.4-10.3 8-12l1 2c-3.8 2-5.4 5-5.8 8H16v10H6V24zm18 0c0-5.3 3.4-10.3 8-12l1 2c-3.8 2-5.4 5-5.8 8H34v10H24V24z" />
          </svg>

          <div className="flex flex-col gap-4 md:gap-5 max-w-[480px]">
            <p className="text-sm md:text-base text-[#020725] leading-relaxed">
              Hi, I&apos;m J.P. Zhang, host of the Shenzhen SEO Conference. After 15+ years in SEO, I&apos;ve seen what&apos;s possible when East and West learn from each other and collaborate.
            </p>
            <p className="text-sm md:text-base text-[#020725] leading-relaxed">
              This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China&apos;s fast-moving digital ecosystem.
            </p>
            <p className="text-sm md:text-base text-[#020725] leading-relaxed">
              My goal is simple: build a truly global SEO community. See you in Shenzhen!
            </p>
          </div>

          {/* Author */}
          <div className="flex flex-col gap-1.5 md:gap-2 mt-2 md:mt-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 md:w-9 md:h-9 bg-[#020725] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <span className="text-lg md:text-xl font-semibold text-[#020725]">J.P. Zhang</span>
            </div>
            <span className="text-xs md:text-sm text-[#020725]/60">Host of the Shenzhen SEO Conference</span>
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
    <section id="venues" className="scroll-mt-20 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        {/* Centered header */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-[28px] md:text-[40px] font-extrabold uppercase mb-3 md:mb-4">2026 Venues</h2>
          <p className="text-sm md:text-base text-[#020725]/70 max-w-lg mx-auto">
            Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 md:gap-4 mb-6 md:mb-8">
          {venues.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 lg:px-10 py-2.5 md:py-3.5 rounded transition-colors gap-1 md:gap-0 ${
                activeTab === i ? 'bg-[#4657db] text-white' : 'bg-[#f5f5f5] text-[#020725]'
              }`}
            >
              <span className="text-sm md:text-2xl font-semibold">{v.tabLabel}</span>
              <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-lg font-normal">
                <Calendar className="w-3.5 h-3.5 md:w-5 md:h-5" />
                {v.dates}
              </span>
            </button>
          ))}
        </div>

        {/* Venue card */}
        <div className="bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col lg:flex-row lg:h-[400px] [&>div:last-child]:rounded-none">
          {/* Left content */}
          <div className="flex-1 p-5 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6">
            <h3 className={`font-extrabold leading-[1.1] uppercase whitespace-pre-line ${activeTab === 0 ? 'text-2xl md:text-[40px]' : 'text-xl md:text-[32px]'}`}>{active.name}</h3>
            <p className="text-sm md:text-base text-[#020725]/70 max-w-[405px]">{active.desc}</p>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <a
                href={active.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:py-3 bg-[#020725] text-white text-sm rounded hover:bg-[#020725]/90 transition-colors text-center"
              >
                Visit the Website
              </a>
              <a
                href={active.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:py-3 bg-[#020725] text-white text-sm rounded hover:bg-[#020725]/90 transition-colors text-center"
              >
                View on Google Maps
              </a>
            </div>

            {/* Map embed */}
            {active.mapUrl && (
              <div className="w-full h-[180px] md:h-[200px] rounded-lg overflow-hidden mt-1 md:mt-2 lg:mr-6">
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
          <div className="relative w-full lg:w-[420px] h-[220px] md:h-[300px] lg:h-auto flex-shrink-0">
            <Image
              src={active.image}
              alt={active.name}
              fill
              className="object-cover"
            />
            {active.badges.length > 0 && (
              <>
                <span className="absolute top-0 right-[calc(100%-40px)] z-10 text-xs md:text-sm pl-3 md:pl-4 pr-8 md:pr-12 py-1.5 md:py-2 rounded-l whitespace-nowrap bg-[#020725] text-white" style={{ marginRight: '40px' }}>
                  Announced Soon
                </span>
                <span className="absolute top-[36px] md:top-[44px] z-10 text-xs md:text-sm pl-4 md:pl-6 pr-3 md:pr-4 py-1.5 md:py-2 rounded-l whitespace-nowrap bg-[#4657db] text-white" style={{ right: 'calc(100% - 1px)' }}>
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
    <section id="pricing" className="scroll-mt-20 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold uppercase text-center mb-8 md:mb-12">Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="flex flex-col">
              {/* Colored header strip with diagonal left edge */}
              <div className="relative h-[50px] md:h-[60px]">
                <div
                  className={`${tier.headerBg} absolute inset-0`}
                  style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
                <div className="relative z-10 h-full flex items-center pl-5 md:pl-6 pr-3 md:pr-0">
                  <h3 className="text-lg md:text-[28px] font-extrabold text-white uppercase">{tier.name}</h3>
                  {tier.badge && (
                    <span className={`px-2.5 md:px-3 py-0.5 md:py-1 bg-[#f5f5f5] text-[10px] md:text-xs font-normal ${tier.badgeColor} ml-auto`}>
                      {tier.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="bg-[#f5f5f5] rounded-b-lg px-5 md:px-6 py-6 md:py-8 flex-1 flex flex-col gap-6 md:gap-8">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[32px] md:text-[40px] font-extrabold text-[#020725]">{tier.price}</span>
                    {tier.original !== tier.price && (
                      <span className={`text-lg md:text-xl line-through ${tier.accentColor}`}>{tier.original}</span>
                    )}
                  </div>
                  <span className={`text-xs md:text-sm ${tier.accentColor}`}>Early bird price</span>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2.5 md:gap-3">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 md:gap-2.5">
                      {f.included ? (
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-[#020725] flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 md:w-5 md:h-5 text-[#020725]/30 flex-shrink-0" />
                      )}
                      <span className={`text-xs md:text-sm ${f.included ? 'text-[#020725]' : 'text-[#020725]/40'}`}>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex flex-col gap-2 md:gap-3">
                  <span className="text-xs md:text-sm text-[#020725]">{tier.bestFor}</span>
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
    <section className="bg-[#020725] py-10 md:py-16 overflow-hidden">
      {/* Scrolling ticker text — full width, overflows */}
      <div className="overflow-hidden mb-6 md:mb-10">
        <div className="ticker-scroll whitespace-nowrap">
          <span className="text-5xl md:text-[102px] font-extrabold uppercase tracking-tight">
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

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        {/* Video + testimonial */}
        <div className="flex flex-col lg:flex-row gap-5 md:gap-8 mb-10 md:mb-16">
          {/* Video */}
          <div className="relative flex-1 h-[220px] md:h-[300px] lg:h-[400px] rounded overflow-hidden bg-black">
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
          <div className="bg-[#4657db] rounded-lg p-6 md:p-8 lg:p-10 flex flex-col lg:w-[395px]">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[
            { val: '100', label: 'Data\nHeader', sub: 'Additional info' },
            { val: '100', label: 'Data\nHeader', sub: 'Additional info' },
            { val: '100', label: 'Data\nHeader', sub: 'Additional info' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 md:gap-4">
              <span className="text-[40px] md:text-[64px] font-extrabold text-[#4657db]">{s.val}</span>
              <div>
                <p className="text-lg md:text-2xl font-semibold text-white leading-snug whitespace-pre-line">{s.label}</p>
                <p className="text-sm md:text-base text-white/60">{s.sub}</p>
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
    <section className="py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden min-h-0 md:min-h-[320px] lg:min-h-[400px]">
          {/* Right — image with "WHERE SEO MEETS BUSINESS" (shown first on mobile only) */}
          <div className="relative w-full md:hidden h-[180px]">
            <Image
              src="/assets/home3/final-cta-bg-image-desktop_4x.webp"
              alt="Where SEO meets business"
              fill
              className="object-cover"
            />
          </div>

          {/* Left — dark card */}
          <div className="bg-[#020725] px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-16 flex flex-col justify-center gap-4 md:gap-5 lg:gap-6 md:w-[320px] lg:w-[380px] flex-shrink-0">
            <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-extrabold text-white leading-[1.0] uppercase">
              Join The<br />Conference
            </h3>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-[280px]">
              Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#4657db] text-white text-sm rounded w-fit hover:bg-[#4657db]/90 transition-colors"
            >
              Get Tickets
            </a>
          </div>

          {/* Right — image (tablet + desktop) */}
          <div className="relative flex-1 min-h-[300px] hidden md:block">
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
    <section id="faq" className="scroll-mt-20 bg-[#f5f5f5] py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold uppercase text-center mb-8 md:mb-12">FAQ</h2>

        <div className="flex flex-col gap-3 md:gap-5 max-w-[900px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg px-5 md:px-8 lg:px-10 py-4 md:py-6">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 md:gap-8"
              >
                <h3 className="text-sm md:text-xl font-semibold text-left leading-snug">{faq.question}</h3>
                <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                  {openIdx === i ? (
                    <X className="w-4 h-4 md:w-5 md:h-5 text-[#020725]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#020725]" />
                  )}
                </span>
              </button>
              {openIdx === i && (
                <p className="text-xs md:text-base text-[#020725]/70 mt-3 md:mt-4 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-[#020725] text-white text-sm rounded-lg hover:bg-[#020725]/90 transition-colors"
          >
            Explore Agenda
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
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <StatsSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <InfoSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <WhyAttendSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <SpeakersSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <ScheduleSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <SponsorsSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <FounderSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <VenuesSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <PricingSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <RecapSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <FinalCTASection />
      <div className="h-6 md:h-[30px] lg:h-[40px]" />
      <FAQSection />
    </div>
  );
}
