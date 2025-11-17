import Navigation from "@/components/navigation";
import StickyCTA from "@/components/sticky-cta";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Mail, Plane, CreditCard, MessageCircle, Bus, Compass, AlertCircle } from "lucide-react";

export default function PlanYourTrip() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Introduction */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground text-center" data-testid="text-intro">
          We're thrilled to welcome you to the Shenzhen SEO Conference. To make the most of your experience, we encourage you to plan ahead. From visa requirements to local tips, this guide will help ensure a smooth and stress-free trip to Shenzhen.
        </p>
      </section>

      {/* Essential Information */}
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
                <p className="text-muted-foreground">September 14-18, 2026</p>
              </CardContent>
            </Card>
            <Card data-testid="card-venue">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">To be announced at a later date</p>
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

      {/* Visa Requirements */}
      <section className="py-16" data-testid="visa-requirements">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" data-testid="text-visa-title">Visa Requirements</h2>
          
          <p className="text-lg mb-6">
            If you hold a passport from one of the following countries, you can <strong>travel to China without a visa</strong> as long as your visit does not last longer than the visa-free period listed below:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">90 days:</p>
              <p className="text-muted-foreground">Albania, Armenia, Bosnia and Herzegovina, San Marino</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">60 days:</p>
              <p className="text-muted-foreground">Mauritius</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">30 days (Permanent):</p>
              <p className="text-muted-foreground">Antigua and Barbuda, Bahamas, Barbados, Belarus, Fiji, Georgia, Grenada, Kazakhstan, Maldives, Mongolia, Qatar, Samoa, Serbia, Solomon Islands, Seychelles, Singapore, Suriname, Thailand, Tonga, United Arab Emirates</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">30 days (Temporary, until 31 December 2025):</p>
              <p className="text-muted-foreground">France, Germany, Italy, Netherlands, Spain, Malaysia, Switzerland, Ireland, Hungary, Austria, Belgium, Luxembourg, New Zealand, Australia, Poland, Portugal, Greece, Cyprus, Slovenia, Slovakia, Norway, Finland, Denmark, Iceland, Andorra, Monaco, Liechtenstein, Republic of Korea, Bulgaria, Romania, Croatia, Montenegro, North Macedonia, Malta, Estonia, Latvia, Japan, and Negara Brunei Darussalam</p>
            </div>
          </div>

          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-lg">240-Hour Visa-Free Transit Policy</h3>
              <p className="mb-4">
                China also offers a <strong>240-hour visa-free transit</strong> policy for <a href="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html" className="text-primary underline" target="_blank" rel="noopener noreferrer">54 eligible countries</a> to stay in China for up to 10 days without a visa.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Europe (40 countries):</strong> Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Monaco, Russia, the United Kingdom, Ireland, Cyprus, Bulgaria, Romania, Ukraine, Serbia, Croatia, Bosnia and Herzegovina, Montenegro, North Macedonia, Albania, Belarus, and Norway</li>
                <li><strong>America (6 countries):</strong> the United States of America, Canada, Brazil, Mexico, Argentina, and Chile</li>
                <li><strong>Oceania (2 countries):</strong> Australia and New Zealand</li>
                <li><strong>Asia (6 countries):</strong> Republic of Korea, Japan, Singapore, Brunei, United Arab Emirates, and Qatar</li>
              </ul>
              <p className="mt-4 text-sm">
                The applicant must hold interline passenger tickets or other documents with a specified date and seat to a third country (region) within 240 hours. Also make sure to <a href="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html" className="text-primary underline" target="_blank" rel="noopener noreferrer">check the list of allowed ports and areas</a> for visa-free transit travelers under this policy.
              </p>
            </CardContent>
          </Card>

          <p className="mb-4">
            <strong>Other passport holders require a visa to visit China</strong> for tourism or business purposes, please consult visa agencies in your country for more details.
          </p>

          <p className="mb-4">
            Learn more about <a href="https://en.wikipedia.org/wiki/Visa_policy_of_mainland_China" className="text-primary underline" target="_blank" rel="noopener noreferrer">visa policy of mainland China from this Wikipedia page</a>.
          </p>

          <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <p className="text-sm">
                <strong>Note:</strong> if you need a business invitation letter, our team is more than happy to provide one for you. Please <a href="https://shenzhenseoconference.com/contact/" className="text-primary underline" target="_blank" rel="noopener noreferrer">contact us</a> with your personal information and we'll issue the letter promptly. Ensure your passport has at least six months of validity and blank pages for the visa stamp.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Flights and Airport Transfers */}
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
            For attendees who can visit China with a valid visa or visa-free, <strong>Hong Kong International Airport (HKG)</strong> can be a good option as it's only 30 kilometers away from Shenzhen and you can <a href="https://www.travelchinaguide.com/cityguides/hong-kong-to-shenzhen.htm" className="text-primary underline" target="_blank" rel="noopener noreferrer">travel from Hong Kong to Shenzhen easily</a> with several transportation methods available.
          </p>

          <Card className="mb-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <p className="text-sm">
                <strong>Note:</strong> for attendees who want to take advantage of the 10-day free transit visa, try not to fly to Hong Kong and then enter Shenzhen by land (as your entry is probably going to be denied).
              </p>
            </CardContent>
          </Card>

          <p className="mb-4">
            <strong>Guangzhou Baiyun International Airport (CAN)</strong> is also a good option as it's 128 kilometers away from Shenzhen. If you plan to stay in China a bit longer, you can consider visiting The Canton Fair, also known as the China Import and Export Fair, which will be held in Guangzhou in October 2025.
          </p>

          <p>
            When booking your flight, consider arriving a day early to adjust to the time zone and explore the city. Upon arrival, you can easily reach the conference venue via the metro, which connects directly to the airport, or by using taxis or rideshare services like Didi. The metro is cost-effective and efficient, while taxis provide a more direct option—just ensure you have the venue address written in Chinese.
          </p>

          <p className="mt-4">
            For a stress-free journey, we recommend downloading a translation app and arranging your airport transfer in advance.
          </p>
        </div>
      </section>

      {/* Money and Payments */}
      <section className="py-16" data-testid="money-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-money-title">
            <CreditCard className="w-8 h-8 text-primary" />
            Money and Payments
          </h2>
          
          <p className="mb-4">
            In China, the official currency is the Chinese Yuan (CNY), also referred to as Renminbi (RMB).
          </p>

          <p className="mb-4">
            While credit cards are accepted in some establishments, digital payment platforms like WeChat Pay and Alipay are widely used and highly recommended for convenience. We advise setting up one of these apps before your trip (here's <a href="https://www.youtube.com/watch?v=nHkyOOcFEDE" className="text-primary underline" target="_blank" rel="noopener noreferrer">a useful YouTube tutorial</a>).
          </p>

          <p>
            Additionally, carrying some cash is useful for smaller vendors or places that may not accept digital payments. ATMs are readily available throughout the city, but ensure you use those that accept international cards, such as those at major banks like Bank of China or ICBC, to avoid any issues with withdrawals.
          </p>
        </div>
      </section>

      {/* Language and Communication */}
      <section className="py-16 bg-muted" data-testid="language-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-language-title">
            <MessageCircle className="w-8 h-8 text-primary" />
            Language and Communication
          </h2>
          
          <p className="mb-4">
            Mandarin is the primary language spoken, while English is less common, especially outside major hotels and tourist areas. To bridge the language gap, we recommend downloading translation apps for quick and accurate translations.
          </p>

          <p>
            Many Western websites and apps, such as Google and social media platforms, are restricted in China. To stay connected, be sure to download a reliable VPN before your arrival, as access to VPN services is also blocked within the country.
          </p>
        </div>
      </section>

      {/* Getting Around Shenzhen */}
      <section className="py-16" data-testid="getting-around-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-getting-around-title">
            <Bus className="w-8 h-8 text-primary" />
            Getting Around Shenzhen
          </h2>
          
          <p className="mb-4">
            Shenzhen boasts an efficient and extensive metro system, making it the most convenient way to navigate the city. We recommend purchasing a rechargeable metro card for seamless travel.
          </p>

          <p className="mb-4">
            For taxis and rideshares, Didi (China's equivalent of Uber) is widely used and can be easily accessed via its app. <a href="https://www.youtube.com/watch?v=AN-ff4hf6xs" className="text-primary underline" target="_blank" rel="noopener noreferrer">This YouTube video</a> shows detailed instructions. When hailing taxis, ensure your destination is written in Chinese to avoid miscommunication.
          </p>

          <p>
            Shenzhen is also a walkable city, with many attractions clustered in pedestrian-friendly areas. For shorter distances, consider using bike-sharing services like Mobike or HelloBike, which are popular and eco-friendly options for exploring the city.
          </p>
        </div>
      </section>

      {/* Things to Do in Shenzhen */}
      <section className="py-16 bg-muted" data-testid="things-to-do-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-things-to-do-title">
            <Compass className="w-8 h-8 text-primary" />
            Things to Do in Shenzhen
          </h2>
          
          <p>
            We highly recommend you consider our pre-event tours so you can network with other attendees while exploring Shenzhen. If you prefer to check out Shenzhen by yourself with your loved ones, there are also <a href="https://www.chinadiscovery.com/shenzhen-tours/shenzhen-attractions.html" className="text-primary underline" target="_blank" rel="noopener noreferrer">plenty of attractions to visit or things to do</a>.
          </p>
        </div>
      </section>

      {/* Local Tips and Etiquette */}
      <section className="py-16" data-testid="local-tips-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" data-testid="text-local-tips-title">Local Tips and Etiquette</h2>
          
          <p className="mb-4">
            First of all, tipping is not expected in China, as it is not part of the culture, so feel free to skip it at restaurants, taxis, or hotels.
          </p>

          <p className="mb-4">
            Shenzhen enjoys a subtropical climate, with warm temperatures year-round—average highs range from 20°C (68°F) in winter to 32°C (90°F) in summer. Lightweight clothing, sunscreen, and an umbrella are recommended.
          </p>

          <p>
            The city is also known for its safety, with low crime rates and a well-maintained environment. In case of emergencies, dial 110 for police, 120 for medical assistance, or 119 for fire services.
          </p>
        </div>
      </section>
      <StickyCTA />
    </div>
  );
}
