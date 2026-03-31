'use client';

import Image from 'next/image';

/* ─── Hero ─── */
function PlanHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 text-center">
        <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
          Plan Your Trip
        </h1>
        <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[550px] mx-auto">
          We&apos;re thrilled to welcome you to the Shenzhen SEO Conference. To make the most of your experience, we encourage you to plan ahead. From visa requirements to local tips, this guide will help ensure a smooth and stress-free trip to Shenzhen.
        </p>
      </div>
    </section>
  );
}

/* ─── Explore Shenzhen ─── */
function ExploreShenzhen() {
  const cards = [
    {
      title: 'The Silicon\nValley of China',
      titleColor: 'text-white',
      cardBg: 'bg-[#020725]',
      image: '/assets/home3/visiting-cards-image-1_4x.webp',
      points: [
        { heading: 'Global Tech Epicenter:', desc: "The world's densest ecosystem for AI, robotics, and rapid software-to-hardware prototyping." },
        { heading: 'Industry Titans:', desc: 'Home to Tencent, DJI, and Huawei, anchored by the legendary energy of the Huaqiangbei electronics district.' },
      ],
    },
    {
      title: 'Urban Bay to\nSubtropical Riviera',
      titleColor: 'text-[#020725]',
      cardBg: 'bg-white',
      image: '/assets/home3/visiting-cards-image-4_4x.webp',
      points: [
        { heading: 'Coastal Contrast:', desc: "A dramatic transition from Nanshan's skyscrapers to the pristine white-sand beaches of the Dapeng Peninsula." },
        { heading: 'World-Class Shoreline:', desc: 'Discover hidden coves, crystal-clear waters, and the rugged cliffs of the city\'s eastern "Cape of Good Hope."' },
      ],
    },
    {
      title: 'The Ancient\nWalled Cities',
      titleColor: 'text-[#020725]',
      cardBg: 'bg-white',
      image: '/assets/home3/visiting-cards-image-3_4x.webp',
      points: [
        { heading: 'Historical Friction:', desc: '1,700-year-old Ming Dynasty gates at Nantou and Dapeng standing in the shadow of modern glass towers.' },
        { heading: 'Cultural Soul:', desc: 'A maze of traditional alleys, ancestral temples, and urban villages hidden beneath the high-tech exterior.' },
      ],
    },
    {
      title: 'Mountains, Mangroves\n& Urban Forests',
      titleColor: 'text-white',
      cardBg: 'bg-[#4657db]',
      image: '/assets/home3/visiting-cards-image-2_4x.webp',
      points: [
        { heading: 'The Garden City:', desc: 'Protected mangrove wetlands and lush urban forests serving as a serene sanctuary within the metropolis.' },
        { heading: 'Elevated Corridors:', desc: 'Mountain-to-sea hiking trails offering panoramic skyline views rising directly out of the tropical canopy.' },
      ],
    },
  ];

  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase text-center mb-8 md:mb-12">
          Explore Shenzhen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <div key={i} className={`${card.cardBg} rounded-lg overflow-hidden border border-gray-200`}>
              {/* Title + Image */}
              <div className="p-5 md:p-6">
                <h3 className={`text-xl md:text-2xl font-extrabold leading-[1.1] uppercase whitespace-pre-line mb-4 ${card.titleColor}`}>
                  {card.title}
                </h3>
                <div className="relative w-full h-[180px] md:h-[220px] rounded overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
              </div>

              {/* Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 md:px-6 pb-5 md:pb-6">
                {card.points.map((point, j) => (
                  <div key={j}>
                    <h4 className={`text-sm font-semibold mb-1 ${card.cardBg === 'bg-white' ? 'text-[#020725]' : 'text-white'}`}>
                      {point.heading}
                    </h4>
                    <p className={`text-xs leading-[1.4] ${card.cardBg === 'bg-white' ? 'text-[#020725]/60' : 'text-white/60'}`}>
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Info Cards ─── */
function InfoCards() {
  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col gap-3">
            <svg className="w-8 h-8" viewBox="0 0 44 44" fill="none"><path d="M19.5688 7.07715H24.896V3.66406H29.48V7.07715H39.6079V40.3369H4.39209V7.07715H14.9849V3.66406H19.5688V7.07715ZM8.9751 35.7539H35.0249V23.7969H8.9751V35.7539ZM8.9751 19.2129H35.0249V11.6602H29.48V15.5576H24.896V11.6602H19.5688V15.5576H14.9849V11.6602H8.9751V19.2129Z" fill="#FD6F47"/></svg>
            <h3 className="text-lg font-semibold text-[#020725]">Conference Dates</h3>
            <p className="text-sm text-[#020725]/60">14-18 September, 2026</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col gap-3">
            <svg className="w-8 h-8" viewBox="0 0 44 44" fill="none"><path d="M16.7494 7.33398L6.24878 11.1005V36.5532L16.7494 32.9008M16.7494 7.33398V32.9008M16.7494 7.33398L27.7067 11.1005M16.7494 32.9008L27.7067 36.6674M27.7067 11.1005V36.6674M27.7067 11.1005L37.7512 7.39105V32.9008L27.7067 36.6674" stroke="#FD6F47" strokeWidth="4.58333"/></svg>
            <h3 className="text-lg font-semibold text-[#020725]">Venue</h3>
            <p className="text-sm text-[#020725]/60">The St. Regis Shenzhen</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col gap-3">
            <svg className="w-8 h-8" viewBox="0 0 44 44" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M39.6079 36.5977H4.39209V7.40234H39.6079V36.5977ZM8.9751 32.0137H35.0249V16.0674L23.52 26.2549L20.4438 26.2207L8.9751 15.6016V32.0137ZM22.0347 21.4473L32.7212 11.9854H11.8149L22.0347 21.4473Z" fill="#FD6F47"/></svg>
            <h3 className="text-lg font-semibold text-[#020725]">Contact</h3>
            <p className="text-sm text-[#020725]/60 break-all"><a href="mailto:support@shenzhenseoconference.com" className="hover:text-[#4657db] transition-colors">support@shenzhenseoconference.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Travel Info Sections ─── */
function TravelInfo() {
  return (
    <>
      {/* Visa Requirements */}
      <section className="bg-[#f5f5f5] py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
              Visa Requirements
            </h2>
            <p className="text-sm md:text-base text-[#020725] leading-[1.5] mb-6 md:mb-8">
              If you hold a passport from one of the following countries, you <strong>can travel to China without a visa</strong> as long as your visit does not last longer than the visa-free period listed below:
            </p>

            <div className="flex flex-col gap-4 md:gap-5">
              <div className="bg-white p-5 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-[#020725] mb-2">30 Days</h3>
                <p className="text-xs md:text-sm text-[#020725]/70 leading-[1.5]">
                  Andorra, Argentina, Australia, Austria, Bahrain, Belgium, Brazil, Brunei, Bulgaria, Chile, Croatia, Cyprus, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Japan, Kuwait, Latvia, Liechtenstein, Luxembourg, Malta, Monaco, Montenegro, New Zealand, North Macedonia, Norway, Oman, Peru, Poland, Portugal, Romania, Russia, Saudi Arabia, Slovakia, Slovenia, Spain, Sweden, Switzerland, the Netherlands, the Republic of Korea, United Kingdom, Uruguay.
                </p>
              </div>

              <div className="bg-white p-5 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-[#020725] mb-2">240-Hour Visa-Free Transit Policy</h3>
                <p className="text-xs md:text-sm text-[#020725]/70 leading-[1.5]">
                  China also offers a 240-hour visa-free transit policy for <a href="#" className="text-[#4657db] underline">54 eligible countries</a> to stay in China for up to 10 days without a visa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flights and Airport Transfers */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
              Flights and Airport Transfers
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-[#020725] leading-[1.5]">
                The nearest airport to Shenzhen is <strong>Shenzhen Bao&apos;an International Airport (SZX)</strong>, which offers numerous domestic and international flights.
              </p>
              <p className="text-sm md:text-base text-[#020725] leading-[1.5]">
                For attendees who can visit China with a valid visa or visa-free, <strong>Hong Kong International Airport (HKG)</strong> can be a good option as it&apos;s only 30 kilometers away from Shenzhen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language & Communication */}
      <section className="bg-[#f5f5f5] py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
              Language & Communication
            </h2>
            <p className="text-sm md:text-base text-[#020725] leading-[1.5]">
              While English is common at the venue and major hotels, local proficiency is generally limited. We recommend keeping a translation app handy and learning basic Mandarin phrases. If you&apos;re up for the challenge, check out this <a href="#" className="text-[#4657db] underline">quick guide</a> to master the essentials and navigate Shenzhen with total confidence!
            </p>
          </div>
        </div>
      </section>

      {/* Currency & Payments */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
              Currency & Payments
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-[#020725] leading-[1.5]">
                The local currency is the Chinese Yuan (CNY/RMB). While you&apos;ll find that hotels and large malls easily handle international credit cards, the real magic of Shenzhen lies in its world-leading digital economy.
              </p>
              <p className="text-sm md:text-base text-[#020725] leading-[1.5]">
                To truly live like a local and experience China&apos;s seamless, cashless society, we recommend setting up <a href="#" className="text-[#4657db] underline">Alipay</a> or <a href="#" className="text-[#4657db] underline">WeChat Pay</a> before you arrive. Credit cards (Visa, MasterCard) are not widely accepted except in hotels and shopping malls. ATMs are available for withdrawing Chinese Yuan for smaller transactions, but check with your bank about international fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Main Page ─── */
export default function PlanYourTrip2() {
  return (
    <div className="font-[var(--font-sora)]">
      <PlanHero />
      <ExploreShenzhen />
      <InfoCards />
      <TravelInfo />
    </div>
  );
}
