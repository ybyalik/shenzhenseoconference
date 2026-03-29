'use client';

import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'about',
    label: 'About the Conference',
    questions: [
      {
        q: 'How many attendees will there be, and who typically attends?',
        a: 'We expect around 600 attendees, including 300+ from China (mainly in-house SEO and marketing leaders from brands targeting global markets) and 200+ international attendees from agencies, Martech companies, and fractional SEO/marketing consultants.',
      },
      { q: 'What is the official language of the event?', a: '' },
      { q: "I'm from China and have limited English, will simultaneous translation be available?", a: '' },
      { q: 'Is the content focused on Western SEO (including traditional search and LLM platforms), China SEO, or both?', a: '' },
      { q: 'Is this conference suitable for beginners, or only experienced SEOs and marketers?', a: '' },
    ],
  },
  {
    id: 'tickets',
    label: 'Tickets & Attendance',
    questions: [
      { q: 'What is the ticket refund and transfer policy?', a: '' },
      { q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', a: '' },
    ],
  },
  {
    id: 'travel',
    label: 'Travel & Accommodation',
    questions: [
      { q: 'Do I need a visa to attend the conference in China?', a: '' },
      { q: 'Can you provide an official business invitation letter for visa applications?', a: '' },
      { q: 'Are discounted room rates available at the conference hotel for attendees?', a: '' },
    ],
  },
  {
    id: 'experience',
    label: 'Event Experience',
    questions: [
      { q: 'Will session recordings or presentation slides be shared after the event?', a: '' },
      { q: 'What is the dress code for the conference?', a: '' },
    ],
  },
];

const navItems = [...categories.map((c) => c.label), 'Still Got Questions'];

export default function FAQ2() {
  const [openIdx, setOpenIdx] = useState<string | null>('about-0');

  return (
    <div className="font-[var(--font-sora)]">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 text-center">
          <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
            FAQ
          </h1>
          <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[550px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div className="flex gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto pb-3 faq-scroll">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={i < categories.length ? `#${categories[i].id}` : '#still-got-questions'}
                className="px-4 py-2 text-sm bg-[#f5f5f5] text-[#020725] rounded hover:bg-[#4657db] hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div className="max-w-[900px] mx-auto flex flex-col gap-10 md:gap-14">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                <h3 className="text-lg md:text-xl font-semibold text-[#4657db] mb-4 md:mb-6">{cat.label}</h3>
                <div className="flex flex-col gap-3">
                  {cat.questions.map((faq, i) => {
                    const key = `${cat.id}-${i}`;
                    const isOpen = openIdx === key;

                    return (
                      <div key={i} className="bg-[#f5f5f5] px-5 md:px-8 py-4 md:py-5">
                        <button
                          onClick={() => setOpenIdx(isOpen ? null : key)}
                          className="w-full flex items-center justify-between gap-4 md:gap-8"
                        >
                          <h4 className="text-sm md:text-base font-semibold text-left leading-snug">{faq.q}</h4>
                          <span className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                            {isOpen ? (
                              <X className="w-4 h-4 md:w-5 md:h-5 text-[#020725]" />
                            ) : (
                              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#020725]" />
                            )}
                          </span>
                        </button>
                        {isOpen && faq.a && (
                          <p className="text-sm md:text-base text-[#020725]/70 mt-3 md:mt-4 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Got Questions */}
      <section id="still-got-questions" className="bg-[#f5f5f5] py-12 md:py-20 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase">
              Still Got Questions?
            </h2>
            <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[500px]">
              Reach out to us via our contact page.
            </p>
            <Link
              href="/contact2"
              className="inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-[#4657db] text-white text-base rounded leading-[1.2] hover:bg-[#4657db]/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
