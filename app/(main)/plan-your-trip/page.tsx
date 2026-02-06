import type { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Mail, Plane, CreditCard, MessageCircle, Bus, Compass, AlertCircle, Languages, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: 'Plan Your Trip - Shenzhen SEO Conference 2026',
  description: 'Everything you need to know to plan your trip to the Shenzhen SEO Conference 2026. Visa requirements, travel information, accommodation, and local tips.',
  openGraph: {
    title: 'Plan Your Trip - Shenzhen SEO Conference 2026',
    description: 'Everything you need to know to plan your trip to Shenzhen for the SEO Conference 2026.',
    type: 'website',
  },
};

export default function PlanYourTrip() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="plan-trip-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-plan-trip-title">
            Plan Your Trip
          </h1>
          <p className="text-xl text-white/90" data-testid="text-plan-trip-subtitle">
            Plan Your Trip to the Shenzhen SEO Conference
          </p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground text-center" data-testid="text-intro">
          We're thrilled to welcome you to the Shenzhen SEO Conference. To make the most of your experience, we encourage you to plan ahead. From visa requirements to local tips, this guide will help ensure a smooth and stress-free trip to Shenzhen.
        </p>
      </section>

      <section className="py-12 bg-muted" data-testid="essential-info">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" data-testid="text-essential-title">
            <AlertCircle className="w-8 h-8 text-primary" />
            Essential Information
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card data-testid="card-dates">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Conference Dates</h3>
                <p className="text-muted-foreground">14-18 September, 2026</p>
              </CardContent>
            </Card>
            <Card data-testid="card-venue">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground text-sm">The St. Regis Shenzhen</p>
              </CardContent>
            </Card>
            <Card data-testid="card-contact">
              <CardContent className="p-6">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground break-words">support@shenzhenseoconference.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="visa-requirements">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-visa-title">
            <FileText className="w-8 h-8 text-primary" />
            Visa Requirements
          </h2>
          
          <p className="text-lg mb-6">
            If you hold a passport from one of the following countries, you can <strong>travel to China without a visa</strong> as long as your visit does not last longer than the visa-free period listed below:
          </p>

          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-lg">30 Days</h3>
              <p className="text-muted-foreground">Andorra, Argentina, Australia, Austria, Bahrain, Belgium, Brazil, Brunei, Bulgaria, Chile, Croatia, Cyprus, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Japan, Kuwait, Latvia, Liechtenstein, Luxembourg, Malta, Monaco, Montenegro, New Zealand, North Macedonia, Norway, Oman, Peru, Poland, Portugal, Romania, Russia, Saudi Arabia, Slovakia, Slovenia, Spain, Sweden, Switzerland, the Netherlands, the Republic of Korea, United Kingdom, Uruguay.</p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-lg">240-Hour Visa-Free Transit Policy</h3>
              <p className="mb-4">
                China also offers a <strong>240-hour visa-free transit</strong> policy for <a href="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html" className="text-primary underline" target="_blank" rel="noopener noreferrer">54 eligible countries</a> to stay in China for up to 10 days without a visa.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <p className="text-sm">
                <strong>Note:</strong> if you need a business invitation letter, our team is more than happy to provide one for you. Please <a href="/contact/" className="text-primary underline">contact us</a> with your personal information and we'll issue the letter promptly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted" data-testid="flights-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-flights-title">
            <Plane className="w-8 h-8 text-primary" />
            Flights and Airport Transfers
          </h2>
          
          <p className="mb-4">
            The nearest airport to Shenzhen is <strong>Shenzhen Bao'an International Airport (SZX)</strong>, which offers numerous domestic and international flights.
          </p>

          <p className="mb-4">
            For attendees who can visit China with a valid visa or visa-free, <strong>Hong Kong International Airport (HKG)</strong> can be a good option as it's only 30 kilometers away from Shenzhen.
          </p>
        </div>
      </section>

      <section className="py-16" data-testid="language-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-language-title">
            <Languages className="w-8 h-8 text-primary" />
            Language & Communication
          </h2>

          <p className="mb-4">
            While English is common at the venue and major hotels, local proficiency is generally limited. We recommend keeping a translation app handy and learning basic Mandarin phrases. If you're up for the challenge, check out this <a href="https://youtube.com/shorts/zEnh7VcuCNk?si=xdY467-9GZxXHqBO" className="text-primary underline" target="_blank" rel="nofollow noopener noreferrer">quick guide</a> to master the essentials and navigate Shenzhen with total confidence!
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted" data-testid="currency-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-currency-title">
            <CreditCard className="w-8 h-8 text-primary" />
            Currency & Payments
          </h2>

          <p className="mb-4">
            The local currency is the Chinese Yuan (CNY/RMB). While you'll find that hotels and large malls easily handle international credit cards, the real magic of Shenzhen lies in its world-leading digital economy.
          </p>

          <p className="mb-4">
            To truly live like a local and experience China's seamless, cashless society, we recommend setting up <a href="https://www.alipayplus.com/pay-in-the-chinese-mainland" className="text-primary underline" target="_blank" rel="noopener noreferrer">Alipay</a> or <a href="https://www.wechat.com/" className="text-primary underline" target="_blank" rel="noopener noreferrer">WeChat Pay</a> before you arrive. Credit cards (Visa, MasterCard) are not widely accepted except in hotels and shopping malls. ATMs are available for withdrawing Chinese Yuan for smaller transactions, but check with your bank about international fees.
          </p>
        </div>
      </section>
    </div>
  );
}
