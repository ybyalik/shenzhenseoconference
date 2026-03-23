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
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/shenzhen-seo-conference-min_1758443453925.webp"
          alt="Shenzhen skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-20 h-full flex items-end pb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-end w-full">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1 px-2 py-1.5 bg-[#4657db] text-white text-sm rounded">
                <Calendar className="w-4 h-4" />
                September 14-18, 2026
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1.5 bg-[#fd6f47] text-white text-sm rounded">
                <MapPin className="w-4 h-4" />
                The St. Regis Shenzhen
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-[64px] font-extrabold text-white leading-[1.1]">
                Shenzhen SEO Conference
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-[51px] h-[49px] relative">
                  <Image
                    src="/assets/logo-main_1756774330186.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-5xl md:text-[64px] font-extrabold text-white">2026</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:max-w-[414px] flex flex-col gap-6">
            <p className="text-white text-lg leading-relaxed">
              Join the premier SEO event connecting Eastern and Western digital markets. 5 days of innovation in China&apos;s Silicon Valley.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-[18px] py-[14px] bg-white text-[#020725] text-base rounded hover:bg-gray-100 transition-colors w-fit"
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
    { value: '500+', label: 'Attendees Expected', sub: 'From around the world' },
    { value: '40+', label: 'World-Class Speakers', sub: 'Industry leaders & experts' },
    { value: '5', label: 'Days of Innovation', sub: 'Sept 14-18, 2026' },
    { value: '30+', label: 'Countries Represented', sub: 'Global perspectives' },
  ];

  return (
    <section className="bg-white py-0">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[75px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-lg p-6 flex flex-col gap-1.5">
              <span className="text-5xl md:text-[64px] font-extrabold text-[#4657db] leading-tight">{stat.value}</span>
              <div className="flex flex-col gap-1.5">
                <span className="text-xl md:text-2xl font-semibold text-[#020725] leading-snug">{stat.label}</span>
                <span className="text-base md:text-lg text-[#020725]">{stat.sub}</span>
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
  const cards = [
    {
      title: 'What the conference is',
      image: '/assets/home3/info-what-image_4x.webp',
      bg: 'bg-[#f5f5f5]',
      textColor: 'text-[#020725]',
    },
    {
      title: "Who it's for",
      image: '/assets/home3/info-who-image_4x.webp',
      bg: 'bg-[#020725]',
      textColor: 'text-white',
      desc1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      desc2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Why Shenzhen matters',
      image: '/assets/home3/info-why-image_4x.webp',
      bg: 'bg-[#f5f5f5]',
      textColor: 'text-[#020725]',
    },
  ];

  return (
    <section id="about" className="scroll-mt-20">
      {cards.map((card, i) => (
        <div key={i} className={`${card.bg} w-full`}>
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-10 gap-8">
            <h2 className={`text-4xl md:text-[56px] font-extrabold leading-tight ${card.textColor} max-w-[500px]`}>
              {card.title}
            </h2>
            <div className="w-full md:w-[521px] h-[250px] md:h-[352px] relative rounded-lg overflow-hidden flex-shrink-0">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
            </div>
            {card.desc1 && (
              <div className="max-w-[414px] flex flex-col gap-4">
                <p className={`text-lg ${card.textColor}`}>{card.desc1}</p>
                <p className={`text-lg ${card.textColor}`}>{card.desc2}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─── Why Attend ─── */
function WhyAttendSection() {
  const reasons = [
    { icon: Globe, title: 'East-West Insights', desc: 'Learn strategies for Baidu, WeChat, Google, and global platforms from industry experts.' },
    { icon: Users, title: 'Global Network', desc: 'Connect with SEO professionals from 30+ countries and build lasting partnerships.' },
    { icon: Atom, title: 'Innovation Hub', desc: "Experience Shenzhen's cutting-edge tech ecosystem and entrepreneurial spirit." },
    { icon: ArrowRight, title: 'Actionable Strategies', desc: 'Walk away with proven tactics you can implement immediately for your business.' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Left - title */}
          <div className="lg:max-w-[380px] flex flex-col gap-8">
            <h2 className="text-3xl md:text-[40px] font-extrabold leading-tight">
              Why Attend The Shenzhen SEO Conference?
            </h2>
            <p className="text-lg text-[#020725]">
              The only conference bridging Eastern and Western SEO strategies in China&apos;s innovation capital.
            </p>
          </div>

          {/* Right - top 2 cards */}
          <div className="flex-1 grid md:grid-cols-2 gap-8">
            {reasons.slice(0, 2).map((r, i) => (
              <div key={i} className="bg-[#f5f5f5] rounded-lg pt-[120px] pb-10 px-8 flex flex-col gap-5">
                <r.icon className="w-11 h-11 text-[#020725]" />
                <h3 className="text-2xl font-semibold">{r.title}</h3>
                <p className="text-lg text-[#020725]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {reasons.slice(2).map((r, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-lg pt-[120px] pb-10 px-8 flex flex-col gap-5">
              <r.icon className="w-11 h-11 text-[#020725]" />
              <h3 className="text-2xl font-semibold">{r.title}</h3>
              <p className="text-lg text-[#020725]">{r.desc}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="bg-[#4657db] rounded-lg pt-[120px] pb-10 px-8 flex flex-col gap-5">
            <Target className="w-11 h-11 text-white" />
            <h3 className="text-2xl font-semibold text-white">Pick your tariff and join</h3>
            <p className="text-lg text-white">Choose the option that suits the most.</p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-3 py-2.5 bg-[#020725] text-white text-base rounded w-fit hover:bg-[#020725]/90 transition-colors"
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
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const featured = [
    { name: 'Garry Illyes', role: 'Google, Search Analyst', image: '/assets/home3/speaker-illes_4x.webp' },
    { name: 'Lily Ray', role: 'Amsive Digital, VP of SEO', image: '/assets/home3/speaker-ray_4x.webp' },
    { name: 'Eli Schwartz', role: 'Growth Advisor', image: '/assets/home3/speaker-schwartz_4x.webp' },
    { name: 'Lars Lofgren', role: 'Stone Press, CEO', image: '/assets/home3/speaker-lofgren_4x.webp' },
  ];

  const scroll = (dir: 'left' | 'right') => {
    if (!containerRef.current) return;
    const amount = 337;
    containerRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="speakers" className="scroll-mt-20 overflow-hidden">
      {/* Dark header */}
      <div className="bg-[#020725] pt-20 pb-72">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex flex-col gap-8 max-w-[410px]">
              <h2 className="text-[40px] font-extrabold text-white leading-tight">
                Meet Our Speakers
              </h2>
              <p className="text-lg text-white">
                These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
              </p>
              <Link
                href="/speakers"
                className="inline-flex items-center justify-center px-[18px] py-[14px] bg-white text-[#020725] text-base rounded w-fit hover:bg-gray-100 transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded bg-white/50 flex items-center justify-center hover:bg-white transition-colors">
                <ChevronLeft className="w-6 h-6 text-[#020725]" />
              </button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-6 h-6 text-[#020725]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker cards - overlapping into dark section */}
      <div className="-mt-52 px-6 lg:px-20">
        <div ref={containerRef} className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide max-w-[1280px] mx-auto">
          {featured.map((speaker, i) => (
            <div key={i} className="flex-shrink-0 w-[305px] bg-[#f5f5f5] rounded-lg overflow-hidden">
              <div className="relative w-full aspect-square">
                <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[#020725]">{speaker.name}</h3>
                  <p className="text-base text-[#020725]">{speaker.role}</p>
                </div>
                <div className="flex gap-2">
                  <Link href="/speakers" className="px-3 py-2.5 bg-[#020725] text-white text-base rounded hover:bg-[#020725]/90 transition-colors">
                    Learn more
                  </Link>
                  <span className="w-10 h-10 bg-[#4657db] rounded flex items-center justify-center">
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                </div>
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
    { date: 'September 14', day: 'day 1', weekday: 'Monday', tag: 'Workshop', title: 'Workshops & City Tours', desc: "Specialized workshops and guided city tours for all attendees to explore Shenzhen's tech districts." },
    { date: 'September 15', day: 'day 2', weekday: 'Tuesday', tag: 'Workshop', title: 'SEO Mastermind', desc: 'Intensive small-group mastermind sessions with industry SEO experts and peers.' },
    { date: 'September 16', day: 'day 3', weekday: 'Wednesday', tag: 'Conference', title: 'Main Conference Day', desc: 'Full day of keynotes, field talks, lightning talks and opening/closing parties.' },
    { date: 'September 17', day: 'day 4', weekday: 'Thursday', tag: 'Workshop', title: 'Main Conference Day', desc: 'Full day of keynotes, field talks, lightning talks and opening/closing parties.' },
    { date: 'September 18', day: 'day 5', weekday: 'Friday', tag: 'Networking', title: 'VIP Networking', desc: 'Exclusive networking event for VIP ticket holders with speakers and sponsors, in a different 5-star hotel (not the conference hotel).' },
  ];

  return (
    <section id="schedule" className="scroll-mt-20 py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col gap-6 mb-16 max-w-[478px]">
          <h2 className="text-3xl md:text-[40px] font-extrabold leading-tight">5-Day Conference Schedule</h2>
          <p className="text-lg text-[#020725]">Five days of SEO excellence, networking, and knowledge sharing in Shenzhen.</p>
          <a href="#schedule" className="inline-flex items-center justify-center px-[18px] py-[14px] bg-[#020725] text-white text-base rounded w-fit hover:bg-[#020725]/90 transition-colors">
            Explore Agenda
          </a>
        </div>

        <div className="flex flex-col gap-5">
          {days.map((d, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[103px] px-10 lg:px-20 py-6">
              {/* Left - date */}
              <div className="flex flex-col gap-5 min-w-[131px]">
                <span className="inline-flex items-center justify-center px-3 py-2 bg-[#4657db] text-white text-sm rounded w-fit">
                  {d.date}
                </span>
                <span className="text-[40px] font-extrabold leading-none">{d.day}</span>
                <span className="text-lg">{d.weekday}</span>
              </div>

              {/* Right - content */}
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex gap-3">
                  <span className="px-3 py-2 bg-[#f5f5f5] text-[#020725] text-sm rounded">{d.tag}</span>
                  <span className="px-3 py-2 bg-[#020725] text-white text-sm rounded">VIP Venue</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold">{d.title}</h3>
                  <p className="text-lg text-[#020725]">{d.desc}</p>
                </div>
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-[40px] font-extrabold mb-16">PARTNERS & SPONSORS</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-[74px]">
          {[
            { src: '/assets/home3/logo-1one_4x.webp', alt: '1One', h: 'h-[80px]' },
            { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', h: 'h-[80px]' },
            { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', h: 'h-[54px]' },
            { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', h: 'h-[54px]' },
          ].map((logo, i) => (
            <div key={i} className={`relative ${logo.h} w-auto aspect-[3/1]`}>
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Founder Story (JP Zhang) ─── */
function FounderSection() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 px-6 lg:px-20 py-20">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-16 max-w-[683px]">
          <div>
            <h2 className="text-3xl md:text-[40px] font-extrabold leading-tight">
              Why I Started<br />the Shenzhen<br />SEO Conference
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-[#020725] leading-relaxed">
            Hi, I&apos;m J.P. Zhang, host of the Shenzhen SEO Conference. After 15+ years in SEO, I&apos;ve seen what&apos;s possible when East and West learn from each other and collaborate.
            <br /><br />
            This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China&apos;s fast-moving digital ecosystem. My goal is simple: build a truly global SEO community. See you in Shenzhen!
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-[#020725] rounded flex items-center justify-center">
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <span className="text-2xl font-semibold">J.P. Zhang</span>
            </div>
            <span className="text-lg text-[#020725]">Host of the Shenzhen SEO Conference</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-[605px] h-[400px] lg:h-[626px] flex-shrink-0">
          <Image
            src="/assets/home3/jp-image_4x.webp"
            alt="J.P. Zhang"
            fill
            className="object-cover rounded-lg"
          />
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
    },
    {
      name: 'VIP Networking Venue',
      dates: 'Sep 18',
      tabLabel: 'VIP Networking',
      desc: 'Exclusive 5-star venue for the VIP networking day.',
      image: '/assets/home3/venue-tba_4x.webp',
    },
  ];

  return (
    <section id="venues" className="scroll-mt-20 py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col gap-8 mb-16 max-w-[628px]">
          <h2 className="text-3xl md:text-[40px] font-extrabold">2026 Venues</h2>
          <p className="text-lg text-[#020725]">
            Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-8 mb-8">
          {venues.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex items-center justify-center gap-3 px-10 py-3 rounded text-xl md:text-2xl font-semibold transition-colors ${
                activeTab === i ? 'bg-[#4657db] text-white' : 'bg-[#f5f5f5] text-[#020725]'
              }`}
            >
              <span>{v.tabLabel}</span>
              <span className="flex items-center gap-2 text-base md:text-lg font-normal">
                <Calendar className="w-5 h-5" />
                {v.dates}
              </span>
            </button>
          ))}
        </div>

        {/* Venue card */}
        <div className="bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-[606px] h-[300px] lg:h-[513px] flex-shrink-0">
            <Image
              src={venues[activeTab].image}
              alt={venues[activeTab].name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center gap-8">
            <h3 className="text-3xl md:text-[40px] font-extrabold leading-tight">{venues[activeTab].name}</h3>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-[#020725]">{venues[activeTab].desc}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="px-[18px] py-[14px] bg-[#020725] text-white text-base rounded hover:bg-[#020725]/90 transition-colors">
                  Visit the Website
                </a>
                <a href="#" className="px-[18px] py-[14px] bg-[#020725] text-white text-base rounded hover:bg-[#020725]/90 transition-colors">
                  View on Google Maps
                </a>
              </div>
            </div>
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
      badgeColor: '',
      accentColor: 'text-[#020725]',
      bestFor: 'Best for SEO Practitioners',
      features: [
        { text: 'Days 3-4 sessions', included: true },
        { text: 'Breakfast, lunch, dinner, and coffee', included: true },
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
      accentColor: 'text-[#fd6f47]',
      bestFor: 'Best for Marketing Manager/Directors',
      features: [
        { text: 'Days 3-4 sessions', included: true },
        { text: 'Breakfast, lunch, dinner, and coffee', included: true },
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
      accentColor: 'text-[#4657db]',
      bestFor: 'Best for Executives/Founders',
      features: [
        { text: 'Days 3-4 sessions', included: true },
        { text: 'Breakfast, lunch, dinner, and coffee', included: true },
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
        <h2 className="text-3xl md:text-[40px] font-extrabold mb-12">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="flex flex-col">
              {/* Header */}
              <div className="py-6 flex items-center gap-4">
                <h3 className="text-3xl md:text-[40px] font-extrabold text-white">{tier.name}</h3>
                {tier.badge && (
                  <span className={`px-2 py-1.5 bg-[#f5f5f5] text-sm ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="bg-[#f5f5f5] rounded-lg p-6 flex-1 flex flex-col gap-10">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[40px] font-extrabold">{tier.price}</span>
                    {tier.original !== tier.price && (
                      <span className={`text-2xl line-through ${tier.accentColor}`}>{tier.original}</span>
                    )}
                  </div>
                  <span className={`text-lg ${tier.accentColor}`}>Early bird price</span>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      {f.included ? (
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                      <span className="text-lg text-[#020725]">{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex flex-col gap-3.5">
                  <span className="text-lg text-[#020725]">{tier.bestFor}</span>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-3 py-2.5 bg-[#020725] text-white text-base rounded w-fit hover:bg-[#020725]/90 transition-colors"
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
    <section className="bg-[#020725] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Stats placeholder row */}
        <div className="flex flex-wrap justify-center gap-20 mb-10">
          {[
            { val: '56', label: 'Speakers', sub: 'On stage' },
            { val: '600+', label: 'Attendees', sub: 'From 30+ countries' },
            { val: '5', label: 'Days', sub: 'Of content' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-5">
              <span className="text-5xl md:text-[64px] font-extrabold text-[#4657db]">{s.val}</span>
              <div>
                <p className="text-2xl font-semibold text-white">{s.label}</p>
                <p className="text-lg text-white">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling text */}
        <div className="overflow-hidden mb-10">
          <div className="ticker-scroll whitespace-nowrap">
            <span className="text-7xl md:text-[102px] font-extrabold text-white/10">
              2025 Recap 2025 Recap 2025 Recap 2025 Recap
            </span>
          </div>
        </div>

        {/* Video + testimonial */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative flex-1 h-[300px] lg:h-[480px] rounded overflow-hidden bg-black">
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
          <div className="bg-[#4657db] rounded p-8 lg:p-10 flex flex-col justify-between lg:w-[395px]">
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-2xl font-semibold text-white">Bill Wagner</h4>
                <p className="text-lg text-white">CEO, Semrush</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed mt-auto pt-12">
              &ldquo;This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China&apos;s fast-moving digital ecosystem.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTASection() {
  return (
    <section className="relative h-[519px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/home3/final-cta-bg-image-desktop_4x.webp"
          alt="Shenzhen cityscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-20 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Left text overlay */}
          <div className="text-[32px] font-extrabold text-[#020725] leading-tight">
            <p>where seo</p>
            <p>meets business</p>
          </div>

          {/* Right dark card */}
          <div className="bg-[#020725] p-10 lg:p-16 rounded flex flex-col gap-8 max-w-[481px] ml-auto">
            <div className="flex flex-col gap-4">
              <h3 className="text-[40px] font-extrabold text-white leading-tight">Join the Conference</h3>
              <p className="text-lg text-white">
                Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
              </p>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-3 py-2 bg-[#4657db] text-white text-base w-fit hover:bg-[#4657db]/90 transition-colors"
            >
              Get Tickets
            </a>
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
      question: 'What languages will the conference be in?',
      answer: 'The conference will primarily be in English with simultaneous Mandarin translation available for all sessions.',
    },
    {
      question: 'Do I need a visa to attend?',
      answer: 'Many countries have visa-free entry to Shenzhen for up to 144 hours. We will provide invitation letters for those who need them.',
    },
    {
      question: 'What is included in the ticket price?',
      answer: 'All tickets include meals (breakfast, lunch, dinner), conference materials, and access to opening and closing parties. Higher tiers include additional benefits.',
    },
  ];

  return (
    <section id="faq" className="scroll-mt-20 py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="bg-[#f5f5f5] rounded-lg p-10 lg:p-16">
          <h2 className="text-3xl md:text-[40px] font-extrabold mb-16">FAQ</h2>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg px-8 lg:px-10 py-6">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-left">{faq.question}</h3>
                  <span className="w-12 h-12 rounded bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    {openIdx === i ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openIdx === i && (
                  <p className="text-lg text-[#020725] mt-4 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[18px] py-[14px] bg-[#020725] text-white text-base rounded hover:bg-[#020725]/90 transition-colors"
            >
              View All Questions & Answers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home3() {
  return (
    <div className="font-[var(--font-sora)] pt-[72px]">
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
