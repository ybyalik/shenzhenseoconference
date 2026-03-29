'use client';

import Image from 'next/image';

/* ─── Our Story Hero ─── */
function OurStoryHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/shenzhen-seo-conference-min_1758443453925.webp"
          alt="Shenzhen SEO Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-6 lg:px-20 h-full flex items-end pb-12 md:pb-16 lg:pb-20">
        <div className="flex flex-col gap-4 md:gap-6 max-w-[500px]">
          <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-extrabold text-white leading-[1.05] uppercase tracking-tight">
            Our Story
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-[1.3]">
            Join the premier SEO event connecting Eastern and Western digital markets. 5 days of innovation in China&apos;s Silicon Valley.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Founder Story (JP Zhang) ─── */
function FounderSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-0 px-5 md:px-6 lg:px-20 py-10 md:py-16">
        {/* JP photo — tablet & desktop only (left column) */}
        <div className="relative hidden md:block md:w-[350px] lg:w-[500px] md:aspect-square flex-shrink-0 self-center">
          <Image
            src="/assets/home3/story-jp-image_4x.webp"
            alt="J.P. Zhang"
            fill
            className="object-cover"
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

          <div className="flex flex-col gap-4 md:gap-5 max-w-[620px]">
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

          {/* JP photo — mobile only (below author info) */}
          <div className="relative md:hidden w-full h-[360px] -ml-5">
            <Image
              src="/assets/home3/story-jp-image_4x.webp"
              alt="J.P. Zhang"
              fill
              className="object-contain object-bottom object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Shenzhen ─── */
function WhyShenzhenSection() {
  const cards = [
    {
      icon: (
        <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
      ),
      title: 'Header',
      desc: 'Additional text',
    },
    {
      icon: (
        <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
      ),
      title: 'Header',
      desc: 'Additional text',
    },
    {
      icon: (
        <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
      ),
      title: 'Header',
      desc: 'Additional text',
    },
    {
      icon: (
        <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none"><path d="M22.5098 3.66675C22.6624 3.66675 22.8141 3.67561 22.9648 3.69214C32.6413 4.19386 40.3336 12.1985 40.334 21.9998L40.3281 22.4734C40.0852 32.0582 32.4854 39.8147 22.9648 40.3083C22.8141 40.3249 22.6624 40.3337 22.5098 40.3337L22.3633 40.3298C22.2425 40.3322 22.1214 40.3337 22 40.3337L21.5273 40.3279C11.6207 40.077 3.66699 31.9668 3.66699 21.9998C3.66741 11.875 11.8752 3.66692 22 3.66675C22.1155 3.66675 22.2307 3.6695 22.3457 3.67163C22.4003 3.66948 22.4549 3.66675 22.5098 3.66675ZM18.5127 24.2927C18.7506 27.8449 19.5247 30.8727 20.5322 33.0066C21.4752 35.0034 22.2465 35.5506 22.5098 35.698C22.7727 35.5509 23.544 35.0041 24.4873 33.0066C25.4949 30.8727 26.269 27.8449 26.5068 24.2927H18.5127ZM8.44141 24.2927C9.19813 28.8009 12.1482 32.564 16.1572 34.449C14.9592 31.7076 14.1515 28.1906 13.9219 24.2927H8.44141ZM31.0967 24.2927C30.8864 27.8629 30.1932 31.114 29.1572 33.7419C32.4896 31.7064 34.8872 28.2926 35.5586 24.2927H31.0967ZM16.1562 9.55054C12.1473 11.4357 9.19791 15.2003 8.44141 19.7087H13.9219C14.1515 15.8101 14.9579 12.2921 16.1562 9.55054ZM22.5098 8.30151C22.247 8.44849 21.4756 8.99621 20.5322 10.9939C19.5246 13.1279 18.7506 16.1563 18.5127 19.7087H26.5068C26.269 16.1563 25.495 13.1279 24.4873 10.9939C23.5436 8.9955 22.7723 8.44826 22.5098 8.30151ZM29.1572 10.2576C30.1935 12.8858 30.8874 16.1377 31.0977 19.7087H35.5586C34.8874 15.7083 32.49 12.2933 29.1572 10.2576Z" fill="#FD6F47"/></svg>
      ),
      title: 'Header',
      desc: 'Additional text',
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Title — centered */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
              Why Shenzhen?
            </h2>
            <p className="text-base md:text-lg text-[#020725] leading-[1.3]">
              Additional text here
            </p>
          </div>

          {/* 4 cards in a row — icon top-right, text bottom-left */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {cards.map((card, i) => (
              <div key={i} className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <div className="flex justify-end">{card.icon}</div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg md:text-xl font-semibold text-[#020725]">{card.title}</h3>
                  <p className="text-sm md:text-base text-[#020725]/60 leading-[1.3]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Join The Conference CTA ─── */
function JoinCTASection() {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
            Join The Conference
          </h2>
          <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[500px]">
            Some additional text here
          </p>
          <a
            href="/home3#pricing"
            className="inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-[#4657db] text-white text-base rounded leading-[1.2] hover:bg-[#4657db]/90 transition-colors"
          >
            Get Early Bird Tickets
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function About2() {
  return (
    <div className="font-[var(--font-sora)]">
      <OurStoryHero />
      <FounderSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <WhyShenzhenSection />
      <div className="h-16 md:h-[80px] lg:h-[140px]" />
      <JoinCTASection />
    </div>
  );
}
