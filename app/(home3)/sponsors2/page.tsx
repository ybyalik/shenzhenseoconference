'use client';

import Image from 'next/image';
import Link from 'next/link';

/* ─── Hero ─── */
function SponsorsHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 text-center">
        <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
          Our Valued<br />Sponsors
        </h1>
        <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[500px] mx-auto mb-6 md:mb-8">
          Thank you to our sponsors who make this international SEO conference possible
        </p>
        <Link
          href="/contact2"
          className="inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-[#4657db] text-white text-base rounded leading-[1.2] hover:bg-[#4657db]/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

/* ─── Why Sponsor ─── */
function WhySponsor() {
  const cards = [
    {
      icon: (
        <Image src="/assets/home3/icon-flash_4x.webp" alt="Flash" width={44} height={44} />
      ),
      title: 'Pioneering Opportunity',
      desc: "Be part of history at China's first and largest international SEO conference, putting your brand directly in front of hundreds of decision-makers actively seeking innovative SEO tools, services, and solutions.",
    },
    {
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
      ),
      title: 'East-West Connection',
      desc: 'Network with 500+ SEO professionals from both Eastern and Western markets in one unique venue, connecting with decision-makers from top Chinese companies who need your solutions to grow their international presence.',
    },
    {
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none" stroke="#FD6F47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 32L18 18L26 24L36 10" />
          <path d="M28 10H36V18" />
        </svg>
      ),
      title: 'Exclusive Market Access',
      desc: "Tap into China's untapped market for SEO brands by connecting directly with businesses looking for solutions to expand globally, giving you unprecedented access to a high-growth market where your expertise is in high demand.",
    },
    {
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none"><path d="M22.082 4.01514C27.393 4.01514 31.699 8.32043 31.6992 13.6313L31.6865 14.1265C31.5557 16.7075 30.4058 19.0185 28.6328 20.6694H29.4482C32.8381 20.6695 35.5857 23.4183 35.5859 26.8081V39.9849H31.0029V26.8081C31.0027 25.9496 30.3068 25.2535 29.4482 25.2534H14.5527C13.6943 25.2536 12.9983 25.9497 12.998 26.8081V39.9849H8.41406V26.8081C8.41431 23.4184 11.163 20.6696 14.5527 20.6694H15.5322C13.6467 18.9136 12.4658 16.4109 12.4658 13.6313C12.466 8.32058 16.7713 4.01538 22.082 4.01514ZM22.082 8.59814C19.3026 8.59839 17.049 10.8519 17.0488 13.6313C17.0488 16.411 19.3025 18.6643 22.082 18.6646C24.8618 18.6646 27.1152 16.4111 27.1152 13.6313C27.115 10.8517 24.8617 8.59814 22.082 8.59814Z" fill="#FD6F47"/></svg>
      ),
      title: 'High-Impact Visibility',
      desc: 'Gain premium exposure among industry leaders shaping the future of global SEO, positioning your brand at the center of an exclusive networking hub where East meets West and meaningful partnerships are formed.',
    },
  ];

  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-12">
          Why Sponsor?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5">
              <div>{card.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-[#020725]">{card.title}</h3>
              <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Audience Overview ─── */
function AudienceOverview() {
  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-12">
          Audience Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* 500+ Attendees */}
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex items-center gap-4 md:gap-6 min-h-[160px] md:min-h-[200px]">
            <span className="text-[48px] md:text-[64px] font-extrabold text-[#4657db] leading-none tracking-tight">500+</span>
            <div>
              <span className="text-lg md:text-xl font-semibold text-[#020725] block leading-[1.2]">Attendees<br />Expected</span>
              <span className="text-sm md:text-base text-[#020725]/50">From around the world</span>
            </div>
          </div>

          {/* Agency vs In-house mix */}
          <div className="relative rounded-lg overflow-hidden min-h-[160px] md:min-h-[200px]">
            <Image
              src="/assets/home3/sponsors-mix-card-bg-image_4x.webp"
              alt="Agency vs In-house mix"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 p-6 md:p-8 flex items-center h-full">
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-[1.2]">Agency vs<br />In-house mix</h3>
            </div>
          </div>

          {/* Typical Roles */}
          <div className="bg-[#020725] rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 min-h-[160px] md:min-h-[200px]">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white leading-[1.2]">Typical Roles</h3>
              <span className="text-sm md:text-base text-white/50">of attendees include</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="px-4 py-2 bg-[#4657db] text-white text-sm rounded">SEO leads</span>
              <span className="px-4 py-2 bg-[#4657db] text-white text-sm rounded">Founders</span>
              <span className="px-4 py-2 bg-[#4657db] text-white text-sm rounded">Marketers</span>
            </div>
          </div>

          {/* 30+ Countries */}
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex items-center gap-4 md:gap-6 min-h-[160px] md:min-h-[200px]">
            <span className="text-[48px] md:text-[64px] font-extrabold text-[#4657db] leading-none tracking-tight">30+</span>
            <div>
              <span className="text-lg md:text-xl font-semibold text-[#020725] block leading-[1.2]">Countries<br />Represented</span>
              <span className="text-sm md:text-base text-[#020725]/50">Global perspectives</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Become a Sponsor Form ─── */
function BecomeASponsor() {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
            Become a Sponsor
          </h2>
          <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[550px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form className="max-w-[900px] mx-auto flex flex-col gap-5 md:gap-6 bg-white p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#020725]">Company Name*</label>
              <input
                type="text"
                placeholder="Your Company"
                className="px-4 py-3 bg-white border border-gray-200 rounded text-sm text-[#020725] placeholder:text-[#020725]/40 focus:outline-none focus:border-[#4657db] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#020725]">Contact Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-white border border-gray-200 rounded text-sm text-[#020725] placeholder:text-[#020725]/40 focus:outline-none focus:border-[#4657db] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#020725]">Email*</label>
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-white border border-gray-200 rounded text-sm text-[#020725] placeholder:text-[#020725]/40 focus:outline-none focus:border-[#4657db] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#020725]">Phone (Optional)</label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="px-4 py-3 bg-white border border-gray-200 rounded text-sm text-[#020725] placeholder:text-[#020725]/40 focus:outline-none focus:border-[#4657db] transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#020725]">Message (Optional)</label>
            <input
              type="text"
              placeholder="Your Message"
              className="px-4 py-3 bg-white border border-gray-200 rounded text-sm text-[#020725] placeholder:text-[#020725]/40 focus:outline-none focus:border-[#4657db] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#4657db] text-white text-base font-semibold rounded hover:bg-[#4657db]/90 transition-colors"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─── 2025 Sponsors ─── */
function Sponsors2025() {
  const logos = [
    { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 186, h: 140 },
    { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
    { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', w: 280, h: 80 },
    { src: '/assets/home3/logo-1one_4x.webp', alt: '1One', w: 160, h: 100 },
  ];

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
            2025 Sponsors
          </h2>
          <p className="text-base md:text-lg text-[#020725]/60 leading-[1.3] max-w-[500px] mx-auto">
            Thank you to our sponsors who make this international SEO conference possible
          </p>
        </div>
      </div>

      {/* Scrolling logo ticker */}
      <div className="overflow-hidden">
        <div className="sponsor-ticker whitespace-nowrap flex items-center">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="relative flex-shrink-0 mx-8 md:mx-12" style={{ width: logo.w, height: logo.h }}>
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Sponsors2() {
  return (
    <div className="font-[var(--font-sora)]">
      <SponsorsHero />
      <WhySponsor />
      <AudienceOverview />
      <BecomeASponsor />
      <Sponsors2025 />
    </div>
  );
}
