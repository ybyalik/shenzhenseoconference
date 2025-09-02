import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What visa requirements are there for attending the conference?",
      answer: "Most international visitors will need a tourist visa (L visa) to enter China. We provide invitation letters to help with your visa application. Start the process early as it can take 2-4 weeks. Some countries have visa-free policies for short stays.",
    },
    {
      question: "Is the conference conducted in English?",
      answer: "Yes, the main conference is conducted entirely in English. We also provide real-time Chinese translation for key sessions. All presentation materials are available in both English and Chinese.",
    },
    {
      question: "What apps should I download before arriving in China?",
      answer: "Essential apps include: A reliable VPN for internet access, WeChat for communication and payments, Alipay for additional payment options, Baidu Maps for navigation, and Google Translate offline mode. We'll send a detailed 'Travel Prep Guide' to all attendees.",
    },
    {
      question: "What's your refund policy?",
      answer: "Full refund available until 60 days before the event. 50% refund available 30-60 days before. No refunds within 30 days of the event, but tickets are transferable. We also offer travel insurance options at checkout.",
    },
    {
      question: "Are there networking opportunities for international attendees?",
      answer: "Absolutely! We have dedicated international networking sessions, cultural exchange dinners, and organized city tours. Our mobile app includes networking features to connect with other attendees before and during the event.",
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
