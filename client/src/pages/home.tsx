import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EventHighlights from "@/components/event-highlights";
import TicketForm from "@/components/ticket-form";
import SpeakerTeaser from "@/components/speaker-teaser";
import VenueInfo from "@/components/venue-info";
import FaqSection from "@/components/faq-section";
import StickyCTA from "@/components/sticky-cta";

import EventTimeline from "@/components/event-timeline";
import SponsorsCarousel from "@/components/sponsors-carousel";
import { Search, Inbox, Phone, MapPin, Twitter, Facebook, Linkedin, Users, Mic, Calendar, Globe } from "lucide-react";
import logoImage from "@assets/logo-main_1756774330186.png";
import darkLogoImage from "@assets/logodark_1756775589088.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <title>Shenzhen SEO Conference 2026 - Pre-Sale Tickets | Connect Eastern & Western Digital Markets</title>
      <meta 
        name="description" 
        content="Join 500+ SEO professionals at the premier international conference in Shenzhen. Early bird tickets now available for September 18-21, 2026. Bridge Eastern and Western digital marketing strategies." 
      />
      
      <Navigation />
      <HeroSection />
      <StickyCTA />
      
      {/* Interactive Stats */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 border-b border-border" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Global SEO Community</h2>
            <p className="text-muted-foreground">Experience the scale and impact of our international conference</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Attendees Stat */}
            <div className="group cursor-pointer" data-testid="stat-attendees">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">500+</div>
                <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Attendees Expected</div>
                <div className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">From around the world</div>
              </div>
            </div>
            
            {/* Speakers Stat */}
            <div className="group cursor-pointer" data-testid="stat-speakers">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">50+</div>
                <div className="text-sm font-medium text-purple-700 dark:text-purple-300">World-Class Speakers</div>
                <div className="text-xs text-purple-600/70 dark:text-purple-400/70 mt-1">Industry leaders & experts</div>
              </div>
            </div>
            
            {/* Days Stat */}
            <div className="group cursor-pointer" data-testid="stat-days">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-green-300 dark:hover:border-green-700">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">5</div>
                <div className="text-sm font-medium text-green-700 dark:text-green-300">Days of Innovation</div>
                <div className="text-xs text-green-600/70 dark:text-green-400/70 mt-1">Sept 17-21, 2026</div>
              </div>
            </div>
            
            {/* Countries Stat */}
            <div className="group cursor-pointer" data-testid="stat-countries">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-700">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">15+</div>
                <div className="text-sm font-medium text-orange-700 dark:text-orange-300">Countries Represented</div>
                <div className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-1">East meets West</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TicketForm />
      <EventHighlights />
      
      <EventTimeline />
      <SpeakerTeaser />
      <SponsorsCarousel />
      <VenueInfo />
      <FaqSection />

      {/* Final CTA */}
      <section className="py-20 gradient-bg text-white" data-testid="section-final-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-final-cta-title">
            Don't Miss This Opportunity
          </h2>
          <p className="text-xl mb-8 text-white/90" data-testid="text-final-cta-description">
            Join 500+ SEO professionals in Shenzhen for the ultimate East-West digital marketing experience.
          </p>

          <div className="mb-8 rounded-2xl overflow-hidden">
            <img 
              src="@assets/bg-feature1-1-min_1758249135011.webp" 
              alt="SEO conference audience and speaker interaction" 
              className="w-full h-64 object-cover opacity-80"
              data-testid="img-networking"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all transform hover:scale-105"
              onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-secure-pricing"
            >
              <Search className="inline mr-2 h-5 w-5" />
              Secure Early Bird Pricing
            </button>
          </div>

          <p className="text-sm text-white/80 mt-6" data-testid="text-countdown-footer">
            Early bird pricing ends in <span className="font-semibold">{Math.floor((new Date('2026-09-17T00:00:00').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={darkLogoImage} 
                  alt="Shenzhen SEO Conference" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-muted-foreground">
                Connecting Eastern and Western SEO markets through innovation and collaboration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors" data-testid="link-about">About</a></li>
                <li><a href="#speakers" className="hover:text-foreground transition-colors" data-testid="link-speakers">Speakers</a></li>
                <li><a href="#tickets" className="hover:text-foreground transition-colors" data-testid="link-tickets">Tickets</a></li>
                <li><a href="#venue" className="hover:text-foreground transition-colors" data-testid="link-venue">Venue</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center" data-testid="contact-email">
                  <Inbox className="mr-2 h-4 w-4" /> jp@shenzhenseoconference.com
                </li>
                <li className="flex items-center" data-testid="contact-location">
                  <MapPin className="mr-2 h-4 w-4" /> Shenzhen, China
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/shenzhenseoconf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter" aria-label="Follow us on X (Twitter)">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/shenzhenseoconference/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/shenzhen-seo-conference/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin" aria-label="Follow us on LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p data-testid="text-copyright">Copyright &copy; 2025 Shenzhen SEO Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
