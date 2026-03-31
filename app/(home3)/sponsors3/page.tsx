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

/* ─── 2026 Sponsors Tiers ─── */
function Sponsors2026() {
  const tiers = [
    {
      name: 'Platinum',
      bg: 'bg-[#4657db]',
      cols: 2,
      logos: [
        { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 186, h: 140 },
        { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
      ],
    },
    {
      name: 'Golden',
      bg: 'bg-[#fd6f47]',
      cols: 4,
      logos: [
        { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 186, h: 140 },
        { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
        { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', w: 280, h: 80 },
        { src: '/assets/home3/logo-1one_4x.webp', alt: '1One', w: 160, h: 100 },
      ],
    },
    {
      name: 'Silver',
      bg: 'bg-[#020725]',
      cols: 4,
      logos: [
        { src: '/assets/home3/logo-ecomexperts_4x.webp', alt: 'EcomExperts', w: 186, h: 140 },
        { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
        { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', w: 280, h: 80 },
        { src: '/assets/home3/logo-playstack_4x.webp', alt: 'Playstack', w: 280, h: 80 },
        { src: '/assets/home3/logo-quickcreator_4x.webp', alt: 'QuickCreator', w: 200, h: 140 },
        { src: '/assets/home3/logo-1one_4x.webp', alt: '1One', w: 160, h: 100 },
      ],
    },
  ];

  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-12">
          2026 Sponsors
        </h2>

        <div className="flex flex-col gap-10 md:gap-14">
          {tiers.map((tier, i) => (
            <div key={i}>
              {/* Tier badge */}
              <div className={`${tier.bg} py-3 md:py-4 text-center mb-5 md:mb-6`}>
                <span className="text-lg md:text-2xl font-extrabold text-white uppercase tracking-wide">{tier.name}</span>
              </div>

              {/* Logo grid — slightly narrower than heading */}
              <div className={`px-4 md:px-8 grid gap-4 md:gap-5 grid-cols-2 ${tier.cols === 2 ? '' : 'md:grid-cols-4'}`}>
                {tier.logos.map((logo, j) => {
                  // Check if this is in the last row and the row is incomplete
                  const totalInLastRow = tier.logos.length % tier.cols;
                  const isLastRow = j >= tier.logos.length - (totalInLastRow || tier.cols);
                  const spanCols = totalInLastRow > 0 && isLastRow ? tier.cols / totalInLastRow : 1;

                  return (
                    <div
                      key={j}
                      className="bg-[#f5f5f5] rounded-lg flex items-center justify-center p-6 md:p-8 min-h-[120px] md:min-h-[160px]"
                      style={spanCols > 1 ? { gridColumn: `span ${spanCols}` } : undefined}
                    >
                      <div className="relative w-full max-w-[180px] h-[80px] md:h-[100px]">
                        <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                      </div>
                    </div>
                  );
                })}
              </div>
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
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex items-center gap-4 md:gap-6 min-h-[160px] md:min-h-[200px]">
            <span className="text-[48px] md:text-[64px] font-extrabold text-[#4657db] leading-none tracking-tight flex-shrink-0 w-[140px] md:w-[190px]">500+</span>
            <div>
              <span className="text-lg md:text-xl font-semibold text-[#020725] block leading-[1.2]">Attendees<br />Expected</span>
              <span className="text-sm md:text-base text-[#020725]/50">From around the world</span>
            </div>
          </div>

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

          <div className="bg-[#020725] rounded-lg p-6 md:p-8 flex items-center gap-4 md:gap-6 min-h-[160px] md:min-h-[200px]">
            <div className="flex-shrink-0 w-[140px] md:w-[190px]">
              <h3 className="text-lg md:text-xl font-semibold text-white leading-[1.2]">Typical Roles</h3>
              <span className="text-sm md:text-base text-white/50">of attendees include</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="px-4 py-2 bg-[#4657db] text-white text-sm rounded">SEO leads</span>
              <span className="px-4 py-2 bg-[#4657db] text-white text-sm rounded">Founders</span>
              <span className="px-4 py-2 bg-[#4657db] text-white text-sm rounded">Marketers</span>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex items-center gap-4 md:gap-6 min-h-[160px] md:min-h-[200px]">
            <span className="text-[48px] md:text-[64px] font-extrabold text-[#4657db] leading-none tracking-tight flex-shrink-0 w-[140px] md:w-[190px]">30+</span>
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
export default function Sponsors3() {
  return (
    <div className="font-[var(--font-sora)]">
      <SponsorsHero />
      <Sponsors2026 />
      <AudienceOverview />
      <Sponsors2025 />
    </div>
  );
}
