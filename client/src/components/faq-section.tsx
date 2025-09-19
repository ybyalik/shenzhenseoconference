import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's your ticket refund policy?",
      answer: "We offer a full refund 30 days before the conference. If there are less than 30 days before the event begins and you are unable to attend, we are unable to issue refunds in general, however, we encourage you to reach out to our support team, we'll try to help you the best we can.",
    },
    {
      question: "What's the ratio of Chinese attendees versus Western attendees?",
      answer: "We expect to have 300 Chinese attendees and 200 Western attendees, so the ratio is 60% vs 40%. The actual number may slightly vary. However, we aim to make Shenzhen SEO Conference a truly international conference and will control the attendance diversity.",
    },
    {
      question: "Is the conference conducted in English, or will there be translation services?",
      answer: "All the talks will be 100% in English and there will be no translation services offered. All attendees (including Chinese attendees) are encouraged to have basic to professional English communication skills.",
    },
    {
      question: "Will there be sessions focused on Western markets?",
      answer: "Yes, even though this conference is located in Shenzhen, China. More than 70% of the sessions, talks and panel discussions are related to SEO and marketing for Western markets.",
    },
    {
      question: "Is it common for locals to speak English, or should I learn basic Mandarin phrases?",
      answer: "While Shenzhen is a major city in China with a growing number of English speakers, English proficiency among the general population remains limited. Most locals primarily use Mandarin or Cantonese, so learning basic Mandarin phrases (e.g., greetings, directions, and polite expressions) will be incredibly helpful for navigating the city, interacting with locals, and showing cultural respect. However, in hotels, major tourist areas, and at the conference venue, you'll likely find English-speaking staff or locals. Bringing a translation app can also bridge any language gaps.",
    },
    {
      question: "What is the local currency, and are credit cards widely accepted?",
      answer: "The local currency in Shenzhen is the Chinese Yuan (CNY), also called Renminbi (RMB). While cash is accepted, mobile payments like WeChat Pay and Alipay are the most widely used. Credit cards (Visa, MasterCard) are not widely accepted except in hotels and shopping malls, so it's best to set up mobile payment apps or carry some cash for smaller transactions. ATMs are available for withdrawing Chinese Yuan, but check with your bank about international fees.",
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
                    className={`transform transition-transform h-5 w-5 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              {openFaq === index && (
                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
