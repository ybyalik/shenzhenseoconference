import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EventHighlights from "@/components/event-highlights";
import TicketForm from "@/components/ticket-form";
import SpeakerTeaser from "@/components/speaker-teaser";
import VenueInfo from "@/components/venue-info";
import FaqSection from "@/components/faq-section";
import { Search, Inbox, Phone, MapPin } from "lucide-react";

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
      
      {/* Quick Stats */}
      <section className="bg-card py-16 border-b border-border" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-attendees">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Attendees Expected</div>
            </div>
            <div data-testid="stat-speakers">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">World-Class Speakers</div>
            </div>
            <div data-testid="stat-days">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Days of Innovation</div>
            </div>
            <div data-testid="stat-countries">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      <TicketForm />
      <EventHighlights />
      <SpeakerTeaser />
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
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Professional networking event" 
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
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              data-testid="button-get-updates"
            >
              <Inbox className="inline mr-2 h-5 w-5" />
              Get Event Updates
            </button>
          </div>

          <p className="text-sm text-white/80 mt-6" data-testid="text-countdown-footer">
            Early bird pricing ends in <span className="font-semibold">150 days</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="text-primary text-2xl" />
                <span className="text-xl font-bold">Shenzhen SEO 2026</span>
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
                  <Inbox className="mr-2 h-4 w-4" /> info@shenzhenseo.com
                </li>
                <li className="flex items-center" data-testid="contact-phone">
                  <Phone className="mr-2 h-4 w-4" /> +86 755 2222 2222
                </li>
                <li className="flex items-center" data-testid="contact-location">
                  <MapPin className="mr-2 h-4 w-4" /> Shenzhen, China
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-youtube">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-wechat">
                  <i className="fab fa-weixin text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p data-testid="text-copyright">&copy; 2024 Shenzhen SEO Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
