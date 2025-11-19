import type { Metadata } from 'next';
import { Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { speakers } from "@/lib/speakers-data";

export const metadata: Metadata = {
  title: '2025 Speakers - Shenzhen SEO Conference 2026',
  description: 'Meet the expert speakers from the 2025 Shenzhen SEO Conference. Industry leaders sharing insights on international SEO, digital marketing, and cross-border strategies.',
  openGraph: {
    title: '2025 Speakers - Shenzhen SEO Conference 2026',
    description: 'Meet the expert speakers from the 2025 Shenzhen SEO Conference.',
    type: 'website',
  },
};

export default function Speakers() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="speakers-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-speakers-title">
            2025 Conference Speakers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-speakers-subtitle">
            Presenting the expert lineup from our 2025 conference. These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <Card className="p-6 mb-12 bg-gradient-to-r from-purple-600 to-blue-600 border-0" data-testid="card-join-2026">
            <div className="flex items-start gap-4 text-white">
              <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Join Us in 2026</h2>
                <p className="text-purple-100">
                  The 2026 Shenzhen SEO Conference is on the horizon with this year's speaker lineup soon to be announced. Secure your spot early and be part of the community shaping the future of international SEO.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} data-testid={`speaker-card-${index}`} className="group">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-sm text-gray-900 text-center line-clamp-2">
                      {speaker.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gray-50 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Be Part of 2026
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience world-class presentations, networking opportunities, and cutting-edge SEO insights at the 2026 Shenzhen SEO Conference. Pre-order your tickets today and join industry leaders from around the globe.
              </p>
              <a
                href="/#tickets"
                data-testid="link-tickets"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Pre-Order Tickets
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
