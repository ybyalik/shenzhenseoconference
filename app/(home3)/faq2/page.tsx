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
      { q: 'What is the official language of the event?', a: 'English. All sessions will be conducted entirely in English. While the conference is held in China, it is positioned as a global event.' },
      { q: "I'm from China and have limited English, will simultaneous translation be available?", a: 'Yes. Simultaneous interpretation (English → Chinese) will be available in main conference days (Day 3 & Day 4), with headsets provided on-site.\nPlease note that this service is only available on the main conference days (Day 3 & Day 4), and not available on Day 1, Day 2, or Day 5.' },
      { q: 'Is the content focused on Western SEO (including traditional search and LLM platforms), China SEO, or both?', a: 'Both. Around 80% of the content will focus on Western SEO, while roughly 20% will cover China and the broader APAC search ecosystem.' },
      { q: 'Is this conference suitable for beginners, or only experienced SEOs and marketers?', a: 'This conference is best suited for SEOs and marketers with intermediate to advanced experience. If you are completely new to SEO, the sessions may be challenging. That said, if your primary goal is networking, you are still very welcome to attend.' },
    ],
  },
  {
    id: 'tickets',
    label: 'Tickets & Attendance',
    questions: [
      { q: 'What is the ticket refund and transfer policy?', a: 'Refunds: Full refunds are available up to 30 days before the event. Within 30 days, refunds are generally not available. Please contact our support team if you need help.\n\nTransfers: Tickets are non-transferable. Attendee identity will be checked on-site. If needed, please request a refund (if eligible) and have the new attendee purchase a ticket.\n\nOn-site policy: Our on-site staff will verify tickets during the event. Attendees must hold a valid ticket registered in their own name to enter the venue.' },
    ],
  },
  {
    id: 'travel',
    label: 'Travel & Accommodation',
    questions: [
      { q: 'Do I need a visa to attend the conference in China?', a: 'visa' },
      { q: 'Can you provide an official business invitation letter for visa applications?', a: 'invitation' },
      { q: 'Are discounted room rates available at the conference hotel for attendees?', a: 'hotel' },
    ],
  },
  {
    id: 'experience',
    label: 'Event Experience',
    questions: [
      { q: 'Will session recordings or presentation slides be shared after the event?', a: 'Slides: Presentation slides will be shared after the event for sessions where speakers grant permission.\nRecordings: Session recordings will not be provided, and on-site recording by attendees is not permitted.' },
      { q: 'What is the dress code for the conference?', a: 'SEOs like to be comfortable, and Shenzhen is generally business casual or tech casual. Dressing comfortably is perfectly fine.' },
    ],
  },
];

const richAnswers: Record<string, React.ReactNode> = {
  visa: <>It depends on your passport. Many Western countries are eligible for a 30-day visa-free entry, some can take advantage of the 10-day-free-transit policy, while others will need to apply for a visa. Please refer to our <a href="/plan-your-trip2" className="text-[#4657db] underline">Plan Your Trip page</a> for details.</>,
  invitation: <>Yes. We can provide an official business invitation letter. Please visit our <a href="/contact2" className="text-[#4657db] underline">Contact page</a>, under Get in Touch, select &quot;Request a Business Invitation Letter for Visa Application&quot; and complete the form.<br /><br />We aim to issue the letter within 3 business days. If you have any special formatting requirements, please let us know when submitting the request.</>,
  hotel: <>Yes. We&apos;ve partnered with The St. Regis Shenzhen to offer attendees a special booking link with 20-25% off standard rates compared to major booking platforms. Please contact <a href="mailto:support@shenzhenseoconference.com" className="text-[#4657db] underline">support@shenzhenseoconference.com</a> for how to access these rates.<br /><br />There are many other hotels nearby within walking distance or easy reach by public transport. However, we do not have partner rates or discounts with those hotels.</>,
};

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
                          <div className="text-sm md:text-base text-[#020725]/70 mt-3 md:mt-4 leading-relaxed whitespace-pre-line">{richAnswers[faq.a] || faq.a}</div>
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
              Reach out to us via our <Link href="/contact2" className="text-[#4657db] underline hover:text-[#4657db]/80 transition-colors">contact page</Link>.
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
