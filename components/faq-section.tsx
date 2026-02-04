import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How many attendees will there be, and who typically attends?",
      answer: (
        <>
          We expect around 600 attendees, including 300+ from China (mainly in-house SEO and marketing leaders from brands targeting global markets) and 200+ international attendees from agencies, Martech companies, and fractional SEO/marketing consultants.
        </>
      ),
    },
    {
      question: "What is the official language of the event?",
      answer: (
        <>
          English. All sessions will be conducted entirely in English. While the conference is held in China, it is positioned as a global event.
        </>
      ),
    },
    {
      question: "I'm from China and have limited English, will simultaneous translation be available?",
      answer: (
        <>
          <p className="mb-3">Yes. Simultaneous interpretation (English → Chinese) will be available in main conference days (Day 3 & Day 4), with headsets provided on-site.</p>
          <p>Please note that this service is only available on the main conference days (Day 3 & Day 4), and not available on Day 1, Day 2, or Day 5.</p>
        </>
      ),
    },
    {
      question: "Is the content focused on Western SEO (including traditional search and LLM platforms), China SEO, or both?",
      answer: (
        <>
          Both. Around 80% of the content will focus on Western SEO, while roughly 20% will cover China and the broader APAC search ecosystem.
        </>
      ),
    },
    {
      question: "Is this conference suitable for beginners, or only experienced SEOs and marketers?",
      answer: (
        <>
          This conference is best suited for SEOs and marketers with intermediate to advanced experience. If you are completely new to SEO, the sessions may be challenging. That said, if your primary goal is networking, you are still very welcome to attend.
        </>
      ),
    },
    {
      question: "What is the ticket refund and transfer policy?",
      answer: (
        <>
          <p className="mb-3"><strong>Refunds:</strong> Full refunds are available up to 30 days before the event. Within 30 days, refunds are generally not available. Please contact our support team if you need help.</p>
          <p className="mb-3"><strong>Transfers:</strong> Tickets are non-transferable. Attendee identity will be checked on-site. If needed, please request a refund (if eligible) and have the new attendee purchase a ticket.</p>
          <p><strong>On-site policy:</strong> Our on-site staff will verify tickets during the event. Attendees must hold a valid ticket registered in their own name to enter the venue.</p>
        </>
      ),
    },
    {
      question: "Do I need a visa to attend the conference in China?",
      answer: (
        <>
          It depends on your passport. Many Western countries are eligible for a 30-day visa-free entry, some can take advantage of the 10-day-free-transit policy, while others will need to apply for a visa. Please refer to our <a href="https://shenzhenseoconference.com/plan-your-trip" className="text-primary underline hover:text-primary/80">Plan Your Trip</a> page for details.
        </>
      ),
    },
    {
      question: "Can you provide an official business invitation letter for visa applications?",
      answer: (
        <>
          <p className="mb-3">Yes. We can provide an official business invitation letter. Please visit our <a href="https://shenzhenseoconference.com/contact" className="text-primary underline hover:text-primary/80">Contact</a> page, under Get in Touch, select "Request a Business Invitation Letter for Visa Application" and complete the form.</p>
          <p>We aim to issue the letter within 3 business days. If you have any special formatting requirements, please let us know when submitting the request.</p>
        </>
      ),
    },
    {
      question: "Are discounted room rates available at the conference hotel for attendees?",
      answer: (
        <>
          <p className="mb-3">Yes. We've partnered with The St. Regis Shenzhen to offer attendees a special booking link with 20-25% off standard rates compared to major booking platforms. Please contact support@shenzhenseoconference.com for how to access these rates.</p>
          <p>There are many other hotels nearby within walking distance or easy reach by public transport. However, we do not have partner rates or discounts with those hotels.</p>
        </>
      ),
    },
    {
      question: "Will you have an event app or networking groups?",
      answer: (
        <>
          <p className="mb-3">Yes. We've partnered with The St. Regis Shenzhen to offer attendees a special booking link with 20–25% off standard rates compared to major booking platforms.</p>
          <p>There are many other hotels nearby within walking distance or easy reach by public transport. However, we do not have partner rates or discounts with those hotels.</p>
        </>
      ),
    },
    {
      question: "Will session recordings or presentation slides be shared after the event?",
      answer: (
        <>
          <p className="mb-3"><strong>Slides:</strong> Presentation slides will be shared after the event for sessions where speakers grant permission.</p>
          <p><strong>Recordings:</strong> Session recordings will not be provided, and on-site recording by attendees is not permitted.</p>
        </>
      ),
    },
    {
      question: "What is the dress code for the conference?",
      answer: (
        <>
          SEOs like to be comfortable, and Shenzhen is generally business casual or tech casual. Dressing comfortably is perfectly fine.
        </>
      ),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-faq-description">
            Everything you need to know about attending the conference.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-border" data-testid={`card-faq-${index}`}>
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
                onClick={() => toggleFaq(index)}
                data-testid={`button-faq-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold" data-testid={`text-faq-question-${index}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`transform transition-transform h-5 w-5 flex-shrink-0 ml-4 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {openFaq === index && (
                <CardContent className="px-6 pb-6">
                  <div className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
