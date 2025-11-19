'use client';

import { useState, useRef } from "react";
import ParallaxIntro from "@/components/parallax-intro";
import HeroSection from "@/components/hero-section";
import FounderStory from "@/components/founder-story";
import EventHighlights from "@/components/event-highlights";
import TicketForm from "@/components/ticket-form";
import VenueInfo from "@/components/venue-info";
import FaqSection from "@/components/faq-section";
import EmailSubscriber from "@/components/email-subscriber";
import EventTimeline from "@/components/event-timeline";
import { Users, Mic, Calendar, Globe, Play } from "lucide-react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Video Section */}
      <section className="py-16 bg-background" data-testid="section-video">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-black" style={{ minHeight: '400px' }}>
            <video 
              ref={videoRef}
              className="w-full h-auto"
              controls
              preload="metadata"
              playsInline
              poster="/assets/videocover_1763538391162.webp"
              data-testid="video-shenzhen"
              aria-label="Shenzhen conference promotional video"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={() => console.log('Video metadata loaded')}
              onError={(e) => console.error('Video error:', e)}
              style={{ minHeight: '400px' }}
            >
              <source src="/shenzhen3_1763393585209.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity hover:bg-black/40"
                onClick={handlePlayClick}
                data-testid="video-overlay"
              >
                <div className="bg-white/90 rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-16 h-16 text-primary fill-current" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Interactive Stats */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 border-b border-border" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Global SEO Community</h2>
            <p className="text-muted-foreground">Experience the scale and impact of our international conference</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Attendees Stat */}
            <div className="group" data-testid="stat-attendees">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 border rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ borderColor: '#1A4AFF' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#1A4AFF' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors" style={{ color: '#1A4AFF' }}>500+</div>
                <div className="text-sm font-medium" style={{ color: '#1A4AFF' }}>Attendees Expected</div>
                <div className="text-xs opacity-70 mt-1" style={{ color: '#1A4AFF' }}>From around the world</div>
              </div>
            </div>
            
            {/* Speakers Stat */}
            <div className="group" data-testid="stat-speakers">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 border rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ borderColor: '#1A4AFF' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#1A4AFF' }}>
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors" style={{ color: '#1A4AFF' }}>40+</div>
                <div className="text-sm font-medium" style={{ color: '#1A4AFF' }}>World-Class Speakers</div>
                <div className="text-xs opacity-70 mt-1" style={{ color: '#1A4AFF' }}>Industry leaders & experts</div>
              </div>
            </div>
            
            {/* Days Stat */}
            <div className="group" data-testid="stat-days">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 border rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ borderColor: '#1A4AFF' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#1A4AFF' }}>
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors" style={{ color: '#1A4AFF' }}>5</div>
                <div className="text-sm font-medium" style={{ color: '#1A4AFF' }}>Days of Innovation</div>
                <div className="text-xs opacity-70 mt-1" style={{ color: '#1A4AFF' }}>Sept 17-21, 2026</div>
              </div>
            </div>
            
            {/* Countries Stat */}
            <div className="group" data-testid="stat-countries">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 border rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ borderColor: '#1A4AFF' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#1A4AFF' }}>
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors" style={{ color: '#1A4AFF' }}>30+</div>
                <div className="text-sm font-medium" style={{ color: '#1A4AFF' }}>Countries Represented</div>
                <div className="text-xs opacity-70 mt-1" style={{ color: '#1A4AFF' }}>Global perspectives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderStory />
      <EventHighlights />
      
      {/* Tickets Section */}
      <section id="tickets" className="bg-background py-20 border-t border-border" data-testid="section-tickets">
        <TicketForm />
      </section>

      <EventTimeline />
      <VenueInfo />
      <FaqSection />
      <EmailSubscriber />
    </div>
  );
}
