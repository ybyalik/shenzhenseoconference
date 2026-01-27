'use client';

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Play, MapPin, Calendar, Users, ChevronDown, Check, Star } from "lucide-react";
import { speakers } from "@/lib/speakers-data";
import Link from "next/link";
import Image from "next/image";

// Animated counter
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / 40;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

// Countdown timer
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-09-14T09:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-6">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
      ].map((item, i) => (
        <div key={i} className="countdown-box px-4 py-3 md:px-6 md:py-4 text-center min-w-[70px] md:min-w-[90px]">
          <div className="font-display text-3xl md:text-5xl text-white">{String(item.value).padStart(2, '0')}</div>
          <div className="font-body text-[10px] md:text-xs text-white/50 uppercase tracking-wider">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home2() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handlePlayClick = () => {
    videoRef.current?.play().catch(console.error);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/aweber-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setSubscribed(true);
    } catch (err) {
      console.error(err);
    }
    setIsSubmitting(false);
    setEmail("");
  };

  const featuredSpeakers = speakers.slice(0, 8);

  const schedule = [
    { day: "01", date: "Sept 14", title: "Workshops & City Tours", desc: "Hands-on sessions and explore Shenzhen's tech districts", color: "#a0cc3b" },
    { day: "02", date: "Sept 15", title: "SEO Mastermind", desc: "Intimate roundtables with industry leaders", color: "#00b4d8" },
    { day: "03", date: "Sept 16", title: "Main Conference Day 1", desc: "Keynotes, panels, and 500+ attendees", color: "#ca080e" },
    { day: "04", date: "Sept 17", title: "Main Conference Day 2", desc: "Advanced talks and closing party", color: "#f77f00" },
    { day: "05", date: "Sept 18", title: "VIP Networking", desc: "Exclusive 5-star venue access", color: "#9d4edd" },
  ];

  const tickets = [
    { name: "STANDARD", price: 390, original: 600, days: "2 Days", access: "Days 3-4", features: ["Main conference access", "All meals included", "Networking sessions", "Conference materials"] },
    { name: "DELUXE", price: 585, original: 900, days: "4 Days", access: "Days 1-4", features: ["Full 4-day access", "Front-row seating", "Workshop participation", "Mastermind sessions", "VIP lounge"], popular: true },
    { name: "VIP", price: 1170, original: 1800, days: "5 Days + Hotel", access: "All Days", features: ["Complete 5-day access", "1 night luxury hotel", "Speaker dinner access", "Private networking", "Priority everything"] },
  ];

  return (
    <div className="font-body overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/shenzhen-seo-conference-min_1758443453925.webp"
            alt="Shenzhen skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="gradient-overlay-hero absolute inset-0" />
        </div>

        {/* Decorative SVG shapes */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a0cc3b" />
                <stop offset="100%" stopColor="#00b4d8" />
              </linearGradient>
            </defs>
            <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
            <polygon points="100,30 170,70 170,130 100,170 30,130 30,70" fill="none" stroke="url(#grad1)" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#a0cc3b" strokeWidth="0.3" strokeDasharray="5,5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#a0cc3b" strokeWidth="0.2" />
          </svg>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#a0cc3b]/10 border border-[#a0cc3b]/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#a0cc3b] animate-pulse" />
              <span className="font-body text-sm text-[#a0cc3b] uppercase tracking-wider">September 14-18, 2026 • Shenzhen, China</span>
            </motion.div>

            {/* Main headline - large display type */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[140px] leading-[0.9] mb-8 tracking-tight"
            >
              <span className="block">WHERE</span>
              <span className="block text-gradient-lime">EAST</span>
              <span className="block">MEETS</span>
              <span className="block text-gradient-lime">WEST</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              5 transformative days bridging Eastern and Western SEO.
              Join 500+ marketers from 30+ countries in China's Silicon Valley.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                href="#tickets"
                className="group inline-flex items-center gap-3 px-8 py-5 bg-[#ca080e] text-white font-semibold uppercase tracking-wider hover:bg-[#a00610] transition-all duration-300 glow-red"
              >
                Get Early Bird Tickets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/speakers"
                className="inline-flex items-center gap-3 px-8 py-5 border-2 border-white/20 text-white font-semibold uppercase tracking-wider hover:border-[#a0cc3b] hover:text-[#a0cc3b] transition-all duration-300"
              >
                View All Speakers
              </Link>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-4">Conference starts in</p>
              <Countdown />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/30" />
        </motion.div>

        {/* Diagonal wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20 md:h-28">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#020f1a" />
          </svg>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <section className="bg-[#020f1a] py-6 overflow-hidden border-y border-white/5">
        <div className="ticker-scroll-left whitespace-nowrap flex items-center gap-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-4xl text-white/10">SHENZHEN</span>
              <Star className="w-4 h-4 text-[#a0cc3b]" />
              <span className="font-display text-4xl text-white/10">SEO CONFERENCE</span>
              <Star className="w-4 h-4 text-[#a0cc3b]" />
              <span className="font-display text-4xl text-white/10">2026</span>
              <Star className="w-4 h-4 text-[#a0cc3b]" />
              <span className="font-display text-4xl text-white/10">SEPT 14-18</span>
              <Star className="w-4 h-4 text-[#a0cc3b]" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section - Overlapping cards */}
      <section className="bg-[#020f1a] py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: 500, suffix: "+", label: "Attendees", sublabel: "Expected" },
              { value: 40, suffix: "+", label: "Speakers", sublabel: "World-class" },
              { value: 5, suffix: "", label: "Days", sublabel: "Of Innovation" },
              { value: 30, suffix: "+", label: "Countries", sublabel: "Represented" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#a0cc3b]/30 transition-all duration-500">
                  {/* Accent corner */}
                  <div className="absolute top-0 left-0 w-12 h-1 bg-[#a0cc3b]" />
                  <div className="absolute top-0 left-0 w-1 h-12 bg-[#a0cc3b]" />

                  <div className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-body text-sm text-[#a0cc3b] uppercase tracking-wider">{stat.label}</div>
                  <div className="font-body text-xs text-white/40">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Asymmetric layout */}
      <section className="bg-[#010a10] py-24 relative overflow-hidden">
        {/* Decorative diagonal line */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#a0cc3b] to-transparent transform -skew-x-12" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text - offset left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[#a0cc3b]" />
                <span className="font-body text-xs text-[#a0cc3b] uppercase tracking-[0.2em]">Experience</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-6">
                DISCOVER<br />
                <span className="text-[#a0cc3b]">SHENZHEN</span>
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Home to Huawei, Tencent, and DJI. China's Silicon Valley is the perfect
                backdrop for exploring digital innovation across Eastern and Western markets.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-[#a0cc3b]" />
                <span>Venue TBA • 5-star location guaranteed</span>
              </div>
            </motion.div>

            {/* Video - larger, offset right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="relative">
                {/* Video frame decoration */}
                <div className="absolute -inset-4 border border-[#a0cc3b]/20 -z-10" />
                <div className="absolute -inset-8 border border-[#a0cc3b]/10 -z-20 hidden md:block" />

                <div className="relative aspect-video bg-[#0a0a0a] overflow-hidden">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    poster="/assets/videocover_1763538391162.webp"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="https://yuryfiles.s3.ap-southeast-2.amazonaws.com/shenzhen2.mp4" type="video/mp4" />
                  </video>

                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/20 transition-colors"
                      onClick={handlePlayClick}
                    >
                      <div className="w-24 h-24 flex items-center justify-center bg-[#ca080e] hover:bg-[#a00610] transition-colors glow-red">
                        <Play className="w-10 h-10 text-white fill-current ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Attend - with diagonal clip */}
      <section className="relative bg-[#020f1a] py-24 overflow-hidden">
        {/* Top diagonal clip */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,60 L1440,0 L1440,60 Z" fill="#010a10" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#a0cc3b]" />
              <span className="font-body text-xs text-[#a0cc3b] uppercase tracking-[0.2em]">Why Attend</span>
              <div className="w-12 h-px bg-[#a0cc3b]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl">
              FOUR REASONS TO<br />
              <span className="text-[#a0cc3b]">BE THERE</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { num: "01", title: "East-West Insights", desc: "Master both Baidu/WeChat and Google/Meta ecosystems. The only conference covering both markets in depth.", color: "#a0cc3b" },
              { num: "02", title: "Global Network", desc: "Connect with 500+ professionals from 30+ countries. Build real relationships, not just LinkedIn connections.", color: "#00b4d8" },
              { num: "03", title: "Innovation Hub", desc: "Experience Shenzhen's legendary tech ecosystem firsthand. Factory tours, tech districts, behind-the-scenes access.", color: "#f77f00" },
              { num: "04", title: "Actionable Strategies", desc: "Leave with proven tactics you can implement immediately. No fluff, just results-driven insights.", color: "#9d4edd" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative hover-lift"
              >
                <div className="h-full p-8 md:p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                  {/* Large background number */}
                  <div
                    className="absolute -right-4 -top-8 font-display text-[180px] leading-none opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ color: item.color }}
                  >
                    {item.num}
                  </div>

                  <div className="relative z-10">
                    <div className="font-display text-lg mb-4" style={{ color: item.color }}>{item.num}</div>
                    <h3 className="font-display text-3xl md:text-4xl mb-4">{item.title}</h3>
                    <p className="font-body text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers - Editorial grid */}
      <section className="bg-[#010a10] py-24 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[#ca080e]" />
                <span className="font-body text-xs text-[#ca080e] uppercase tracking-[0.2em]">Featured Speakers</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl">
                LEARN FROM<br />
                <span className="text-[#ca080e]">THE BEST</span>
              </h2>
            </motion.div>

            <Link
              href="/speakers"
              className="group inline-flex items-center gap-3 font-body text-sm text-white/50 hover:text-[#a0cc3b] transition-colors uppercase tracking-wider"
            >
              View all 40+ speakers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredSpeakers.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`speaker-card group ${i === 0 || i === 5 ? 'md:row-span-2' : ''}`}
              >
                <div className={`relative ${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'} overflow-hidden bg-[#0a0a0a]`}>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020f1a] via-[#020f1a]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#a0cc3b] group-hover:w-full transition-all duration-500" />

                  {/* Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3 className="font-display text-xl md:text-2xl">{speaker.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule - Timeline */}
      <section className="bg-[#020f1a] py-24 relative overflow-hidden">
        {/* Decorative arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5">
          <svg width="300" height="100" viewBox="0 0 300 100">
            <path d="M0,50 L250,50 M220,20 L250,50 L220,80" stroke="#a0cc3b" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#a0cc3b]" />
              <span className="font-body text-xs text-[#a0cc3b] uppercase tracking-[0.2em]">The Experience</span>
              <div className="w-12 h-px bg-[#a0cc3b]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl">
              5 DAYS OF<br />
              <span className="text-[#a0cc3b]">TRANSFORMATION</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#a0cc3b] via-[#00b4d8] to-[#9d4edd]" />

            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 pb-12 last:pb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Day circle */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center border-2 z-10"
                  style={{ borderColor: item.color, backgroundColor: '#020f1a' }}
                >
                  <span className="font-display text-2xl" style={{ color: item.color }}>{item.day}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="inline-flex items-center gap-3 mb-2" style={{ color: item.color }}>
                    <Calendar className="w-4 h-4" />
                    <span className="font-body text-sm uppercase tracking-wider">{item.date}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mb-2">{item.title}</h3>
                  <p className="font-body text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section id="tickets" className="bg-[#010a10] py-24 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ca080e]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#ca080e]/10 border border-[#ca080e]/30 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ca080e] animate-pulse" />
              <span className="font-body text-sm text-[#ca080e] uppercase tracking-wider">Early Bird Pricing</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl mb-4">
              SECURE YOUR<br />
              <span className="text-[#a0cc3b]">SPOT</span>
            </h2>
            <p className="font-body text-white/50 max-w-lg mx-auto">
              Limited tickets at exclusive early bird prices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tickets.map((ticket, i) => (
              <motion.div
                key={ticket.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative hover-lift ${ticket.popular ? 'md:-mt-4' : ''}`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ca080e] font-body text-xs uppercase tracking-wider z-10">
                    Most Popular
                  </div>
                )}

                <div className={`h-full p-8 border transition-all duration-500 ${
                  ticket.popular
                    ? 'bg-gradient-to-b from-[#ca080e]/10 to-transparent border-[#ca080e]/50'
                    : 'bg-[#020f1a] border-white/10 hover:border-white/20'
                }`}>
                  {/* Ticket perforated line */}
                  <div className="ticket-edge absolute left-4 right-4 top-1/3 border-t border-dashed border-white/10" style={{ '--bg-color': ticket.popular ? '#0a0508' : '#020f1a' } as any} />

                  <div className="relative z-10">
                    <h3 className="font-display text-2xl mb-2">{ticket.name}</h3>
                    <p className="font-body text-sm text-white/40 mb-6">{ticket.days} • {ticket.access}</p>

                    <div className="flex items-baseline gap-3 mb-8">
                      <span className="font-body text-lg text-white/40 line-through">${ticket.original}</span>
                      <span className="font-display text-5xl text-[#a0cc3b]">${ticket.price}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {ticket.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 font-body text-sm text-white/60">
                          <Check className="w-4 h-4 text-[#a0cc3b] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-4 font-body font-semibold uppercase tracking-wider transition-all duration-300 ${
                      ticket.popular
                        ? 'bg-[#ca080e] text-white hover:bg-[#a00610] glow-red'
                        : 'border border-white/20 text-white hover:bg-white hover:text-[#020f1a]'
                    }`}>
                      Pre-Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#020f1a] py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a0cc3b]/30 to-transparent" />

        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              STAY IN THE <span className="text-[#a0cc3b]">LOOP</span>
            </h2>
            <p className="font-body text-white/50 mb-10">
              Get exclusive updates, speaker announcements, and early bird offers
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-3 text-[#a0cc3b]">
                <Check className="w-5 h-5" />
                <span className="font-body">You're on the list. Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#010a10] border border-white/10 text-white placeholder-white/30 font-body focus:outline-none focus:border-[#a0cc3b]/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#a0cc3b] text-[#020f1a] font-body font-semibold uppercase tracking-wider hover:bg-[#8ab52f] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#010a10] py-32 relative overflow-hidden">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display text-[20vw] text-white/[0.02] whitespace-nowrap">SHENZHEN 2026</span>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8">
              READY TO<br />
              <span className="text-[#a0cc3b]">LEVEL UP?</span>
            </h2>
            <p className="font-body text-lg text-white/50 mb-12 max-w-lg mx-auto">
              Join 500+ SEO professionals for 5 transformative days in Shenzhen.
              Early bird prices won't last.
            </p>
            <Link
              href="#tickets"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-[#ca080e] text-white font-display text-2xl uppercase tracking-wider hover:bg-[#a00610] transition-all duration-300 glow-red"
            >
              Get Your Tickets
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
