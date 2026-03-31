'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Check, X, ChevronRight, ChevronLeft } from 'lucide-react';
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
            <p className="text-white text-base md:text-lg leading-[1.3]">
              Join the premier SEO event connecting Eastern and Western digital markets. 5 days of innovation in China&apos;s Silicon Valley.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-white text-[#020725] text-sm md:text-base rounded leading-[1.2] hover:bg-[#fd6f47] hover:text-white transition-colors w-fit"
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
        <div key={i} className={`${item.bg} relative overflow-hidden group/info md:h-[230px] lg:hover:h-[380px] transition-all duration-500 ease-in-out`}>
          <div className="max-w-[1440px] mx-auto relative h-full flex flex-col md:flex-row md:items-center px-5 md:px-6 lg:px-20 py-8 md:py-0">
            <div className="flex flex-col gap-3 md:gap-2 max-w-[55%] md:max-w-none lg:max-w-none">
              <h2 className={`text-[28px] md:text-[36px] lg:text-[50px] font-extrabold leading-[1.0] ${item.textColor} uppercase`}>
                {item.title}
              </h2>
              <p className={`text-sm md:text-sm lg:text-lg lg:leading-[1.3] lg:max-w-[420px] lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover/info:max-h-[200px] lg:group-hover/info:opacity-100 lg:transition-all lg:duration-500 ${item.textColor === 'text-white' ? 'text-white/70' : 'text-[#020725]/60'} leading-relaxed max-w-[300px]`}>
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
            <h2 className="text-[40px] font-extrabold leading-[1.0] uppercase">
              Why Attend The Shenzhen SEO Conference?
            </h2>
            <p className="text-lg text-[#020725] leading-[1.3]">
              The only conference bridging Eastern and Western SEO strategies in China&apos;s innovation capita
            </p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
            <h3 className="text-xl font-semibold text-[#020725]">East-West Insights</h3>
            <p className="text-base text-[#020725]/60 leading-[1.3]">Learn strategies for Baidu, WeChat, Google, and global platforms from industry experts.</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path d="M22.082 4.01514C27.393 4.01514 31.699 8.32043 31.6992 13.6313L31.6865 14.1265C31.5557 16.7075 30.4058 19.0185 28.6328 20.6694H29.4482C32.8381 20.6695 35.5857 23.4183 35.5859 26.8081V39.9849H31.0029V26.8081C31.0027 25.9496 30.3068 25.2535 29.4482 25.2534H14.5527C13.6943 25.2536 12.9983 25.9497 12.998 26.8081V39.9849H8.41406V26.8081C8.41431 23.4184 11.163 20.6696 14.5527 20.6694H15.5322C13.6467 18.9136 12.4658 16.4109 12.4658 13.6313C12.466 8.32058 16.7713 4.01538 22.082 4.01514ZM22.082 8.59814C19.3026 8.59839 17.049 10.8519 17.0488 13.6313C17.0488 16.411 19.3025 18.6643 22.082 18.6646C24.8618 18.6646 27.1152 16.4111 27.1152 13.6313C27.115 10.8517 24.8617 8.59814 22.082 8.59814Z" fill="#FD6F47"/></svg>
            <h3 className="text-xl font-semibold text-[#020725]">Global Network</h3>
            <p className="text-base text-[#020725]/60 leading-[1.3]">Connect with SEO professionals from 30+ countries and build lasting partnerships.</p>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-8">
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M21.9991 8.50651C29.0493 3.73717 35.7675 2.20066 38.7833 5.21647L38.9679 5.41178C41.7327 8.51548 40.1611 15.0984 35.4923 21.9997C40.2617 29.0498 41.7988 35.7679 38.7833 38.7839L38.587 38.9684C35.4832 41.733 28.9004 40.1617 21.9991 35.4928C14.9495 40.2617 8.23179 41.7982 5.21592 38.7829C2.20067 35.7669 3.73685 29.0486 8.50596 21.9987C3.73773 14.9496 2.20109 8.23328 5.21592 5.21745C8.23159 2.20179 14.9493 3.73775 21.9991 8.50651ZM32.5538 25.8893C31.8214 26.7639 31.0437 27.6345 30.2218 28.4938L29.3683 29.3678C28.2271 30.509 27.0613 31.5724 25.8888 32.5544C27.4494 33.5161 28.9457 34.271 30.3214 34.8073C32.1539 35.5217 33.5644 35.7682 34.5108 35.7506C34.9663 35.7421 35.2442 35.6734 35.3888 35.6208C35.4587 35.5953 35.4979 35.5733 35.5157 35.5622C35.5316 35.5523 35.5389 35.5467 35.5421 35.5436C35.545 35.5407 35.5521 35.5331 35.5626 35.5163C35.5738 35.4983 35.5949 35.4589 35.6202 35.3893C35.6729 35.2448 35.7416 34.9669 35.7501 34.5114C35.7677 33.565 35.5211 32.1544 34.8067 30.3219C34.2704 28.9463 33.5156 27.45 32.5538 25.8893ZM11.4435 25.8893C10.4818 27.4498 9.72772 28.9465 9.19151 30.3219C8.4773 32.1542 8.23156 33.5641 8.24913 34.5104C8.25763 34.9659 8.32637 35.2437 8.37901 35.3883C8.40426 35.4577 8.42542 35.4972 8.43663 35.5153C8.44715 35.5321 8.45422 35.5397 8.45713 35.5426C8.46023 35.5457 8.46736 35.5521 8.4835 35.5622C8.50145 35.5733 8.54085 35.5944 8.61046 35.6198C8.75501 35.6724 9.03284 35.7411 9.48838 35.7497C10.4347 35.7673 11.8446 35.5215 13.6769 34.8073C15.0524 34.2711 16.5479 33.5151 18.1085 32.5534C17.2344 31.8213 16.3639 31.0438 15.505 30.2223L14.6319 29.3688C13.4905 28.2274 12.4256 27.0621 11.4435 25.8893ZM21.9991 14.1862C20.6252 15.2757 19.2379 16.506 17.8722 17.8717C16.5064 19.2375 15.2753 20.6247 14.1857 21.9987C15.2755 23.3732 16.5059 24.7614 17.8722 26.1276C19.2377 27.4931 20.6254 28.7228 21.9991 29.8122C23.3731 28.7226 24.7613 27.4933 26.1271 26.1276C27.4931 24.7616 28.7229 23.3729 29.8126 21.9987C28.7232 20.625 27.4925 19.2382 26.1271 17.8727C24.761 16.5067 23.3734 15.276 21.9991 14.1862ZM9.48936 8.24967C9.03358 8.25817 8.75504 8.3269 8.61046 8.37956C8.54066 8.40499 8.50135 8.42703 8.4835 8.43815C8.46733 8.44827 8.46019 8.45466 8.45713 8.45768C8.4541 8.46074 8.44772 8.46785 8.4376 8.48405C8.42649 8.50188 8.40448 8.54107 8.37901 8.611C8.32636 8.7556 8.25762 9.03417 8.24913 9.48991C8.23164 10.4363 8.47839 11.8455 9.19249 13.6774C9.72862 15.0527 10.4829 16.5488 11.4444 18.109C12.4261 16.9369 13.4901 15.7724 14.631 14.6315L15.505 13.777C16.3642 12.9552 17.234 12.1764 18.1085 11.444C16.5484 10.4827 15.052 9.72813 13.6769 9.19206C11.845 8.47804 10.4356 8.23216 9.48936 8.24967ZM34.5099 8.24967C33.5635 8.23216 32.1536 8.47782 30.3214 9.19206C28.946 9.72826 27.4501 10.4835 25.8898 11.445C27.0621 12.4268 28.2272 13.4905 29.3683 14.6315L30.2228 15.5055C31.0441 16.3643 31.8218 17.2341 32.5538 18.1081C33.5151 16.548 34.2706 15.0526 34.8067 13.6774C35.521 11.8451 35.7677 10.4353 35.7501 9.48893C35.7416 9.03315 35.6729 8.75461 35.6202 8.61003C35.5948 8.54022 35.5727 8.50087 35.5616 8.48307C35.5516 8.46703 35.5451 8.45975 35.5421 8.45671C35.5389 8.45361 35.5317 8.44717 35.5157 8.43717C35.4979 8.42605 35.4587 8.40404 35.3888 8.37858C35.2442 8.32593 34.9657 8.25817 34.5099 8.24967Z" fill="#FD6F47"/></svg>
            <h3 className="text-xl font-semibold text-[#020725]">Innovation Hub</h3>
            <p className="text-base text-[#020725]/60 leading-[1.3]">Experience Shenzhen&apos;s cutting-edge tech ecosystem and entrepreneurial spirit.</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path d="M27.499 21.9995L6.6416 40.3335H1.83398L1.87695 37.0542L19.0039 21.9995L1.87695 6.94482V3.6665H6.6416L27.499 21.9995ZM42.166 21.9995L21.3086 40.3335H16.499L16.5439 37.0542L33.6709 21.9995L16.5439 6.94482L16.499 3.6665H21.3086L42.166 21.9995Z" fill="#FD6F47"/></svg>
            <h3 className="text-xl font-semibold text-[#020725]">Actionable Strategies</h3>
            <p className="text-base text-[#020725]/60 leading-[1.3]">Walk away with proven tactics you can implement immediately for your business.</p>
          </div>
          <div className="bg-[#4657db] rounded-lg pt-[130px] pb-10 px-8 flex flex-col gap-5">
            <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path d="M24.1611 6.71582C31.1142 7.51097 36.6581 12.9404 37.6279 19.8389H40.334V24.1602H37.6279C36.6584 31.0589 31.1144 36.488 24.1611 37.2832V40.333H19.8398V37.1729C13.2589 36.0729 8.09286 30.7963 7.16016 24.1602H3.66699V19.8389H7.16113C8.09401 13.203 13.259 7.92701 19.8398 6.82715V3.66699H24.1611V6.71582ZM24.1611 13.0371H19.8398V11.5039C15.796 12.4847 12.6411 15.7391 11.8086 19.8389H13.0371V24.1602H11.8086C12.641 28.26 15.796 31.5141 19.8398 32.4951V30.9629H24.1611V32.6553C28.5791 31.928 32.0947 28.5227 32.9805 24.1602H30.9639V19.8389H32.9805C32.0946 15.4765 28.5791 12.0709 24.1611 11.3438V13.0371ZM24.54 24.1338H19.957V19.5508H24.54V24.1338Z" fill="#FD6F47"/></svg>
            <h3 className="text-xl font-semibold text-white">Pick your tariff and join</h3>
            <p className="text-base text-white/80 leading-[1.3]">Choose the option that suits the most.</p>
            <a href="#pricing" className="inline-flex items-center justify-center px-4 py-2.5 bg-[#020725] text-white text-sm lg:text-base rounded leading-[1.2] w-fit hover:bg-white hover:text-[#020725] transition-colors">View pricing</a>
          </div>
        </div>

        {/* Mobile & Tablet layout */}
        <div className="lg:hidden">
          {/* Title */}
          <div className="flex flex-col justify-center gap-4 md:gap-6 py-4 md:py-6 mb-5 md:mb-6">
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
              Why Attend The Shenzhen SEO Conference?
            </h2>
            <p className="text-base md:text-lg text-[#020725] leading-[1.3]">
              The only conference bridging Eastern and Western SEO strategies in China&apos;s innovation capita
            </p>
          </div>

          {/* 4 feature cards in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">East-West Insights</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">Learn strategies for Baidu, WeChat, Google, and global platforms from industry experts.</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M22.082 4.01514C27.393 4.01514 31.699 8.32043 31.6992 13.6313L31.6865 14.1265C31.5557 16.7075 30.4058 19.0185 28.6328 20.6694H29.4482C32.8381 20.6695 35.5857 23.4183 35.5859 26.8081V39.9849H31.0029V26.8081C31.0027 25.9496 30.3068 25.2535 29.4482 25.2534H14.5527C13.6943 25.2536 12.9983 25.9497 12.998 26.8081V39.9849H8.41406V26.8081C8.41431 23.4184 11.163 20.6696 14.5527 20.6694H15.5322C13.6467 18.9136 12.4658 16.4109 12.4658 13.6313C12.466 8.32058 16.7713 4.01538 22.082 4.01514ZM22.082 8.59814C19.3026 8.59839 17.049 10.8519 17.0488 13.6313C17.0488 16.411 19.3025 18.6643 22.082 18.6646C24.8618 18.6646 27.1152 16.4111 27.1152 13.6313C27.115 10.8517 24.8617 8.59814 22.082 8.59814Z" fill="#FD6F47"/></svg>
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">Global Network</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">Connect with SEO professionals from 30+ countries and build lasting partnerships.</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M21.9991 8.50651C29.0493 3.73717 35.7675 2.20066 38.7833 5.21647L38.9679 5.41178C41.7327 8.51548 40.1611 15.0984 35.4923 21.9997C40.2617 29.0498 41.7988 35.7679 38.7833 38.7839L38.587 38.9684C35.4832 41.733 28.9004 40.1617 21.9991 35.4928C14.9495 40.2617 8.23179 41.7982 5.21592 38.7829C2.20067 35.7669 3.73685 29.0486 8.50596 21.9987C3.73773 14.9496 2.20109 8.23328 5.21592 5.21745C8.23159 2.20179 14.9493 3.73775 21.9991 8.50651ZM32.5538 25.8893C31.8214 26.7639 31.0437 27.6345 30.2218 28.4938L29.3683 29.3678C28.2271 30.509 27.0613 31.5724 25.8888 32.5544C27.4494 33.5161 28.9457 34.271 30.3214 34.8073C32.1539 35.5217 33.5644 35.7682 34.5108 35.7506C34.9663 35.7421 35.2442 35.6734 35.3888 35.6208C35.4587 35.5953 35.4979 35.5733 35.5157 35.5622C35.5316 35.5523 35.5389 35.5467 35.5421 35.5436C35.545 35.5407 35.5521 35.5331 35.5626 35.5163C35.5738 35.4983 35.5949 35.4589 35.6202 35.3893C35.6729 35.2448 35.7416 34.9669 35.7501 34.5114C35.7677 33.565 35.5211 32.1544 34.8067 30.3219C34.2704 28.9463 33.5156 27.45 32.5538 25.8893ZM11.4435 25.8893C10.4818 27.4498 9.72772 28.9465 9.19151 30.3219C8.4773 32.1542 8.23156 33.5641 8.24913 34.5104C8.25763 34.9659 8.32637 35.2437 8.37901 35.3883C8.40426 35.4577 8.42542 35.4972 8.43663 35.5153C8.44715 35.5321 8.45422 35.5397 8.45713 35.5426C8.46023 35.5457 8.46736 35.5521 8.4835 35.5622C8.50145 35.5733 8.54085 35.5944 8.61046 35.6198C8.75501 35.6724 9.03284 35.7411 9.48838 35.7497C10.4347 35.7673 11.8446 35.5215 13.6769 34.8073C15.0524 34.2711 16.5479 33.5151 18.1085 32.5534C17.2344 31.8213 16.3639 31.0438 15.505 30.2223L14.6319 29.3688C13.4905 28.2274 12.4256 27.0621 11.4435 25.8893ZM21.9991 14.1862C20.6252 15.2757 19.2379 16.506 17.8722 17.8717C16.5064 19.2375 15.2753 20.6247 14.1857 21.9987C15.2755 23.3732 16.5059 24.7614 17.8722 26.1276C19.2377 27.4931 20.6254 28.7228 21.9991 29.8122C23.3731 28.7226 24.7613 27.4933 26.1271 26.1276C27.4931 24.7616 28.7229 23.3729 29.8126 21.9987C28.7232 20.625 27.4925 19.2382 26.1271 17.8727C24.761 16.5067 23.3734 15.276 21.9991 14.1862ZM9.48936 8.24967C9.03358 8.25817 8.75504 8.3269 8.61046 8.37956C8.54066 8.40499 8.50135 8.42703 8.4835 8.43815C8.46733 8.44827 8.46019 8.45466 8.45713 8.45768C8.4541 8.46074 8.44772 8.46785 8.4376 8.48405C8.42649 8.50188 8.40448 8.54107 8.37901 8.611C8.32636 8.7556 8.25762 9.03417 8.24913 9.48991C8.23164 10.4363 8.47839 11.8455 9.19249 13.6774C9.72862 15.0527 10.4829 16.5488 11.4444 18.109C12.4261 16.9369 13.4901 15.7724 14.631 14.6315L15.505 13.777C16.3642 12.9552 17.234 12.1764 18.1085 11.444C16.5484 10.4827 15.052 9.72813 13.6769 9.19206C11.845 8.47804 10.4356 8.23216 9.48936 8.24967ZM34.5099 8.24967C33.5635 8.23216 32.1536 8.47782 30.3214 9.19206C28.946 9.72826 27.4501 10.4835 25.8898 11.445C27.0621 12.4268 28.2272 13.4905 29.3683 14.6315L30.2228 15.5055C31.0441 16.3643 31.8218 17.2341 32.5538 18.1081C33.5151 16.548 34.2706 15.0526 34.8067 13.6774C35.521 11.8451 35.7677 10.4353 35.7501 9.48893C35.7416 9.03315 35.6729 8.75461 35.6202 8.61003C35.5948 8.54022 35.5727 8.50087 35.5616 8.48307C35.5516 8.46703 35.5451 8.45975 35.5421 8.45671C35.5389 8.45361 35.5317 8.44717 35.5157 8.43717C35.4979 8.42605 35.4587 8.40404 35.3888 8.37858C35.2442 8.32593 34.9657 8.25817 34.5099 8.24967Z" fill="#FD6F47"/></svg>
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">Innovation Hub</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">Experience Shenzhen&apos;s cutting-edge tech ecosystem and entrepreneurial spirit.</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg pt-10 md:pt-[100px] pb-8 md:pb-8 px-6 md:px-8 flex flex-col gap-3 md:gap-5">
              <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M27.499 21.9995L6.6416 40.3335H1.83398L1.87695 37.0542L19.0039 21.9995L1.87695 6.94482V3.6665H6.6416L27.499 21.9995ZM42.166 21.9995L21.3086 40.3335H16.499L16.5439 37.0542L33.6709 21.9995L16.5439 6.94482L16.499 3.6665H21.3086L42.166 21.9995Z" fill="#FD6F47"/></svg>
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">Actionable Strategies</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">Walk away with proven tactics you can implement immediately for your business.</p>
            </div>
          </div>

          {/* CTA Card: Blue - full width */}
          <div className="bg-[#4657db] rounded-lg pt-10 md:pt-12 pb-8 md:pb-10 px-6 md:px-8 flex flex-col gap-3 md:gap-5 mt-5 md:mt-6">
            <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M24.1611 6.71582C31.1142 7.51097 36.6581 12.9404 37.6279 19.8389H40.334V24.1602H37.6279C36.6584 31.0589 31.1144 36.488 24.1611 37.2832V40.333H19.8398V37.1729C13.2589 36.0729 8.09286 30.7963 7.16016 24.1602H3.66699V19.8389H7.16113C8.09401 13.203 13.259 7.92701 19.8398 6.82715V3.66699H24.1611V6.71582ZM24.1611 13.0371H19.8398V11.5039C15.796 12.4847 12.6411 15.7391 11.8086 19.8389H13.0371V24.1602H11.8086C12.641 28.26 15.796 31.5141 19.8398 32.4951V30.9629H24.1611V32.6553C28.5791 31.928 32.0947 28.5227 32.9805 24.1602H30.9639V19.8389H32.9805C32.0946 15.4765 28.5791 12.0709 24.1611 11.3438V13.0371ZM24.54 24.1338H19.957V19.5508H24.54V24.1338Z" fill="#FD6F47"/></svg>
            <h3 className="text-lg md:text-xl font-semibold text-white">Pick your tariff and join</h3>
            <p className="text-sm md:text-base text-white/80 leading-[1.3]">Choose the option that suits the most.</p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#020725] text-white text-sm md:text-base rounded leading-[1.2] w-fit hover:bg-white hover:text-[#020725] transition-colors"
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

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

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
          {/* Desktop: title+desc+button on left, arrows on right */}
          <div className="flex flex-col lg:flex-row justify-between items-start md:items-center lg:items-end gap-6 md:gap-8">
            <div className="flex flex-col gap-5 md:gap-8 max-w-[410px] md:items-center lg:items-start md:text-center lg:text-left md:max-w-full lg:max-w-[410px]">
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-white leading-[1.0] uppercase">
                Meet Our<br />
                <span className="pl-6 md:pl-8">Speakers</span>
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-[1.3] md:max-w-[400px] lg:max-w-none">
                These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
              </p>
              <Link
                href="/speakers"
                className="hidden lg:inline-flex items-center justify-center px-5 py-3 bg-white text-[#020725] text-base rounded leading-[1.2] hover:bg-[#fd6f47] hover:text-white transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Desktop arrows — right aligned */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => canScrollLeft && scroll('left')}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all group ${canScrollLeft ? 'bg-white cursor-pointer' : 'bg-[#6b7280]/40 cursor-default'}`}
              >
                <ChevronLeft className={`w-6 h-6 transition-colors ${canScrollLeft ? 'text-[#020725] group-hover:text-[#fd6f47]' : 'text-[#9ca3af]'}`} />
              </button>
              <button
                onClick={() => canScrollRight && scroll('right')}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all group ${canScrollRight ? 'bg-white cursor-pointer' : 'bg-[#6b7280]/40 cursor-default'}`}
              >
                <ChevronRight className={`w-6 h-6 transition-colors ${canScrollRight ? 'text-[#020725] group-hover:text-[#fd6f47]' : 'text-[#9ca3af]'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker cards - overlapping into dark section */}
      <div className="-mt-32 md:-mt-44">
        <div ref={containerRef} className="flex gap-5 md:gap-8 overflow-x-auto pb-6 md:pb-8 scrollbar-hide max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 snap-x snap-mandatory scroll-pl-5 md:scroll-pl-6 lg:scroll-pl-20">
          {featured.map((speaker, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[220px] lg:w-[305px] bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col snap-start group/speaker">
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
                <Link href="/speakers" className="px-4 py-2.5 bg-[#020725] text-white text-sm lg:text-base rounded leading-[1.2] hover:bg-[#4657db] transition-colors">
                  Learn More
                </Link>
                {speaker.linkedin && (
                  <span className="w-10 h-10 bg-[#4657db] rounded flex items-center justify-center flex-shrink-0 hover:bg-white transition-colors group/li">
                    <svg className="w-5 h-5 fill-white group-hover/li:fill-[#4657db] transition-colors" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/tablet controls — centered */}
        <div className="flex lg:hidden items-center justify-center gap-3 mt-2 px-5 md:px-6 max-w-[1280px] mx-auto">
          <button
            onClick={() => canScrollLeft && scroll('left')}
            className={`w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all group ${canScrollLeft ? 'border border-gray-300 bg-white cursor-pointer' : 'bg-[#6b7280]/40 cursor-default'}`}
          >
            <ChevronLeft className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${canScrollLeft ? 'text-[#020725] group-hover:text-[#fd6f47]' : 'text-[#9ca3af]'}`} />
          </button>
          <Link
            href="/speakers"
            className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-[#020725] text-white text-sm md:text-base rounded leading-[1.2] hover:bg-[#fd6f47] transition-colors"
          >
            View All
          </Link>
          <button
            onClick={() => canScrollRight && scroll('right')}
            className={`w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all group ${canScrollRight ? 'bg-[#020725] cursor-pointer' : 'bg-[#6b7280]/40 cursor-default'}`}
          >
            <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${canScrollRight ? 'text-white group-hover:text-[#fd6f47]' : 'text-[#9ca3af]'}`} />
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
          <p className="text-base md:text-lg text-[#020725]/70 leading-[1.3] mb-5 md:mb-6">
            Five days of SEO excellence, networking,<br className="hidden sm:block" />
            and knowledge sharing in Shenzhen.
          </p>
          <a href="#schedule" className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-[#020725] text-white text-sm md:text-base rounded leading-[1.2] hover:bg-[#4657db] transition-colors">
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
        <div className="hidden lg:flex flex-col">
          {days.map((d, i) => (
            <div key={i} className="group/day flex flex-row gap-24 py-10 px-10 -mx-10 rounded-lg hover:bg-[#4657db] transition-colors duration-300 relative overflow-hidden">
              {/* Left — date info */}
              <div className="flex flex-col items-start gap-3 min-w-[140px]">
                <span className="inline-flex items-center justify-center px-3 py-1.5 bg-[#4657db] group-hover/day:bg-white group-hover/day:text-[#4657db] text-white text-sm rounded w-fit transition-colors duration-300">
                  {d.date}
                </span>
                <span className="text-[40px] font-extrabold leading-none uppercase group-hover/day:text-white transition-colors duration-300">{d.day}</span>
                <span className="text-lg text-[#020725]/70 group-hover/day:text-white/80 transition-colors duration-300">{d.weekday}</span>
              </div>

              {/* Middle — content */}
              <div className="flex flex-col gap-4 max-w-[480px]">
                <div className="flex flex-wrap gap-3">
                  {d.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1.5 text-sm rounded transition-colors duration-300 ${
                        tag === 'VIP Venue'
                          ? 'bg-[#020725] text-white group-hover/day:bg-white group-hover/day:text-[#020725]'
                          : 'bg-[#f5f5f5] text-[#020725] group-hover/day:bg-white group-hover/day:text-[#020725]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[#020725] group-hover/day:text-white transition-colors duration-300">{d.title}</h3>
                <p className="text-base text-[#020725]/60 leading-relaxed group-hover/day:text-white/80 transition-colors duration-300">{d.desc}</p>
              </div>

              {/* Right — image (slides up on hover) */}
              <div className="absolute right-10 top-6 bottom-6 w-[280px] opacity-0 translate-y-8 group-hover/day:opacity-100 group-hover/day:translate-y-0 transition-all duration-500 ease-out rounded-lg overflow-hidden">
                <Image
                  src="/assets/home3/info-why-image_4x.webp"
                  alt={d.title}
                  fill
                  className="object-cover"
                />
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
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-16">
          Partners &<br className="md:hidden" /> Sponsors
        </h2>
      </div>
      {/* Scrolling logo ticker */}
      <div className="overflow-hidden">
        <div className="sponsor-ticker whitespace-nowrap flex items-center">
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center gap-16 lg:gap-20 px-8 lg:px-10 flex-shrink-0">
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Founder Story (JP Zhang) ─── */
function FounderSection() {
  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-0 pl-0 pr-5 md:pl-0 md:pr-6 lg:px-20 py-10 md:py-16">
        {/* JP photo — tablet & desktop only (left column) */}
        <div className="relative hidden md:block md:w-[280px] lg:w-[460px] h-[420px] lg:h-[560px] flex-shrink-0 lg:-ml-20">
          <Image
            src="/assets/home3/jp-image_4x.webp"
            alt="J.P. Zhang"
            fill
            className="object-contain object-bottom object-left"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col gap-5 md:gap-6 lg:gap-8 px-5 md:px-0 md:pl-6 lg:pl-10">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
            Why I Started<br />
            <span className="pl-6 md:pl-8">The Shenzhen</span><br />
            SEO Conference
          </h2>

          {/* Quote mark */}
          <svg className="w-10 h-9 md:w-[50px] md:h-[45px] lg:w-[61px] lg:h-[55px]" viewBox="0 0 61 55" fill="none">
            <path d="M24.0645 54.399L0.000139384 54.3322L0.0721156 28.4037C-0.0305131 24.6751 0.487613 21.1742 1.62649 17.9009C2.87835 14.628 4.58102 11.7518 6.73451 9.27221C8.888 6.79265 11.4357 4.76609 14.3775 3.19255C17.4326 1.50634 20.712 0.442142 24.2155 -5.03202e-05L24.1845 11.1848C19.8872 12.6416 16.9437 14.8365 15.3538 17.7696C13.7643 20.5896 12.9637 24.0898 12.9521 28.27L24.137 28.301L24.0645 54.399ZM60.1611 54.4993L36.0967 54.4325L36.1687 28.5039C36.0661 24.7753 36.5842 21.2744 37.7231 18.0011C38.9749 14.7282 40.6776 11.852 42.8311 9.37241C44.9846 6.89285 47.5323 4.86629 50.4741 3.29275C53.5292 1.60654 56.8086 0.542344 60.3121 0.100152L60.2811 11.285C55.9838 12.7418 53.0403 14.9367 51.4504 17.8698C49.8609 20.6899 49.0603 24.19 49.0487 28.3702L60.2336 28.4012L60.1611 54.4993Z" fill="#4657DB"/>
          </svg>

          <div className="flex flex-col gap-4 md:gap-5 max-w-[480px]">
            <p className="text-sm md:text-base lg:text-lg text-[#020725] leading-[1.3]">
              Hi, I&apos;m J.P. Zhang, host of the Shenzhen SEO Conference. After 15+ years in SEO, I&apos;ve seen what&apos;s possible when East and West learn from each other and collaborate.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#020725] leading-[1.3]">
              This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China&apos;s fast-moving digital ecosystem.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#020725] leading-[1.3]">
              My goal is simple: build a truly global SEO community. See you in Shenzhen!
            </p>
          </div>

          {/* Author */}
          <div className="flex flex-col gap-1.5 md:gap-2 mt-2 md:mt-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 md:w-9 md:h-9 bg-[#020725] rounded flex items-center justify-center flex-shrink-0 hover:bg-white transition-colors group/jpli">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-white group-hover/jpli:fill-[#020725] transition-colors" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <span className="text-lg md:text-xl font-semibold text-[#020725]">J.P. Zhang</span>
            </div>
            <span className="text-xs md:text-sm text-[#020725]">Host of the Shenzhen SEO Conference</span>
          </div>

        </div>
      </div>
      {/* JP photo — mobile only (below author info, centered) */}
      <div className="relative md:hidden w-full h-[360px]">
        <Image
          src="/assets/home3/jp-image_4x.webp"
          alt="J.P. Zhang"
          fill
          className="object-contain object-bottom object-center"
        />
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
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-3 md:mb-4">2026 Venues</h2>
          <p className="text-sm md:text-base lg:text-lg text-[#020725]/70 leading-[1.3] max-w-lg mx-auto">
            Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 md:gap-4 mb-6 md:mb-8">
          {venues.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-4 md:px-8 lg:px-10 py-2.5 md:py-3.5 rounded transition-colors gap-1 md:gap-0 ${
                activeTab === i ? 'bg-[#4657db] text-white' : 'bg-[#f5f5f5] text-[#020725] hover:bg-[#4657db] hover:text-white'
              }`}
            >
              <span className="text-sm md:text-2xl font-semibold text-center md:text-left">{v.tabLabel}</span>
              <span className="flex items-center gap-1.5 md:gap-2 text-xs md:text-lg font-normal">
                <Calendar className="w-3.5 h-3.5 md:w-5 md:h-5" />
                {v.dates}
              </span>
            </button>
          ))}
        </div>

        {/* Venue card */}
        <div className="bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col lg:flex-row lg:h-[440px] [&>div:last-child]:rounded-none">
          {/* Left content */}
          <div className="flex-1 p-5 md:p-8 lg:pt-14 lg:px-10 lg:pb-10 flex flex-col gap-4 md:gap-6">
            <h3 className={`font-extrabold leading-[1.1] uppercase whitespace-pre-line ${activeTab === 0 ? 'text-2xl md:text-[40px]' : 'text-xl md:text-[32px]'}`}>{active.name}</h3>
            <p className="text-sm md:text-base lg:text-lg text-[#020725]/70 leading-[1.3] max-w-[405px]">{active.desc}</p>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <a
                href={active.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:py-3 bg-[#020725] text-white text-sm lg:text-base rounded leading-[1.2] hover:bg-[#4657db] transition-colors text-center"
              >
                Visit the Website
              </a>
              <a
                href={active.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:py-3 bg-[#020725] text-white text-sm lg:text-base rounded leading-[1.2] hover:bg-[#4657db] transition-colors text-center"
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
          <div className="relative w-full lg:w-[420px] h-[280px] md:h-[300px] lg:h-auto flex-shrink-0 lg:my-10 lg:mr-10">
            <div className="relative w-full h-full lg:rounded-lg overflow-hidden">
              <Image
                src={active.image}
                alt={active.name}
                fill
                className="object-cover"
              />
            </div>
            {active.badges.length > 0 && (
              <>
                <span className="absolute top-[10px] right-[calc(100%-40px)] z-10 text-xs md:text-sm pl-3 md:pl-4 pr-8 md:pr-12 py-1.5 md:py-2 rounded-l whitespace-nowrap bg-[#020725] text-white" style={{ marginRight: '40px' }}>
                  Announced Soon
                </span>
                <span className="absolute top-[46px] md:top-[54px] z-10 text-xs md:text-sm pl-4 md:pl-6 pr-3 md:pr-4 py-1.5 md:py-2 rounded-l whitespace-nowrap bg-[#4657db] text-white" style={{ right: 'calc(100% - 1px)' }}>
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
      headerFill: '#020725',
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
      headerFill: '#fd6f47',
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
      headerFill: '#4657db',
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
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-12">Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="flex flex-col">
              {/* Colored header strip with SVG shape */}
              <div className="relative h-[50px] md:h-[70px] lg:h-[80px]">
                <svg className="absolute inset-0 w-full h-full md:hidden" viewBox="0 0 405 103" fill="none" preserveAspectRatio="none">
                  <path d="M405 103V0H25L0 50V103H405Z" fill={tier.headerFill} />
                </svg>
                <svg className="absolute inset-0 w-full h-full hidden md:block" viewBox="0 0 405 103" fill="none" preserveAspectRatio="none">
                  <path d="M405 103V0H41.6224L0 36V103H405Z" fill={tier.headerFill} />
                </svg>
                <div className="relative z-10 h-full flex items-center pl-5 md:pl-8 pr-0">
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
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-[#020725] text-white text-sm lg:text-base rounded leading-[1.2] w-fit hover:bg-[#4657db] transition-colors"
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
          <div className="relative flex-1 h-[220px] md:h-[300px] lg:h-auto rounded-lg overflow-hidden bg-black">
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
              <svg className="w-12 h-10 md:w-[60px] md:h-[54px] flex-shrink-0 mt-1" viewBox="0 0 61 55" fill="none">
                <path d="M24.0645 54.399L0.000139384 54.3322L0.0721156 28.4037C-0.0305131 24.6751 0.487613 21.1742 1.62649 17.9009C2.87835 14.628 4.58102 11.7518 6.73451 9.27221C8.888 6.79265 11.4357 4.76609 14.3775 3.19255C17.4326 1.50634 20.712 0.442142 24.2155 -5.03202e-05L24.1845 11.1848C19.8872 12.6416 16.9437 14.8365 15.3538 17.7696C13.7643 20.5896 12.9637 24.0898 12.9521 28.27L24.137 28.301L24.0645 54.399ZM60.1611 54.4993L36.0967 54.4325L36.1687 28.5039C36.0661 24.7753 36.5842 21.2744 37.7231 18.0011C38.9749 14.7282 40.6776 11.852 42.8311 9.37241C44.9846 6.89285 47.5323 4.86629 50.4741 3.29275C53.5292 1.60654 56.8086 0.542344 60.3121 0.100152L60.2811 11.285C55.9838 12.7418 53.0403 14.9367 51.4504 17.8698C49.8609 20.6899 49.0603 24.19 49.0487 28.3702L60.2336 28.4012L60.1611 54.4993Z" fill="#FD6F47"/>
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-white">Bill Wagner</h4>
                <p className="text-sm text-white/70">CEO, Semrush</p>
              </div>
            </div>

            {/* Quote text */}
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-[1.3] mt-8">
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
            <p className="text-xs md:text-sm lg:text-lg text-white/70 leading-[1.3] max-w-[280px]">
              Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#4657db] text-white text-sm lg:text-base rounded leading-[1.2] w-fit hover:bg-[#4657db]/90 transition-colors"
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-12">FAQ</h2>

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
                <p className="text-xs md:text-base lg:text-lg text-[#020725]/70 mt-3 md:mt-4 leading-[1.3]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 md:py-3.5 bg-[#020725] text-white text-sm md:text-base rounded leading-[1.2] hover:bg-[#4657db] transition-colors"
          >
            View All Questions & Answers
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
      <div className="h-10 md:h-[40px] lg:h-[60px]" />
      <SponsorsSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <FounderSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <VenuesSection />
      <div className="h-10 md:h-[40px] lg:h-[60px]" />
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
