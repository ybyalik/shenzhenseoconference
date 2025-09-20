import { Calendar, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./countdown-timer";

export default function HeroSection() {
  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-16 min-h-screen gradient-bg relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 hero-bg opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4" data-testid="badge-early-bird">
              🎯 Super Early Bird Pre-Sale Now Open
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Shenzhen SEO<br />
            <span className="text-white/90">Conference 2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto" data-testid="text-hero-description">
            Join the premier international SEO event connecting Eastern and Western digital markets. 
            5 days of innovation in China's Silicon Valley.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center text-lg" data-testid="event-date">
              <Calendar className="mr-2 h-5 w-5" />
              September 17-21, 2026
            </div>
            <div className="flex items-center text-lg" data-testid="event-location">
              <MapPin className="mr-2 h-5 w-5" />
              Shenzhen, China (Venue TBD)
            </div>
          </div>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToTickets}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all transform hover:scale-105"
              data-testid="button-get-tickets"
            >
              <Search className="mr-2 h-5 w-5" />
              Get Super Early Bird Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
