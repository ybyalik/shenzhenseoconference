import { MapPin, Plane, Train, Bed, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "./lazy-image";

export default function VenueInfo() {
  return (
    <section id="venue" className="py-20 bg-background" data-testid="section-venue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-venue-title">
              2026 Venues
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-venue-description">
              Experience the best of Shenzhen at two world-class venues, each offering a unique setting for our international SEO conference.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Main Event (Sep 14-17):</strong> The St. Regis Shenzhen - Luxury accommodations and world-class facilities in the heart of Shenzhen.
                </p>
              </div>
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>VIP Networking (Sep 18):</strong> A separate 5-star hotel to be announced soon - An exclusive beachfront setting for premium networking experiences.
                </p>
              </div>
            </div>


            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90"
                data-testid="button-book-hotel"
                aria-label="Book your hotel"
                asChild
              >
                <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1770202951216&key=GRP&app=resvlink&_branch_match_id=1547558325661285432&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5uYGRgZGlqaGRoZpadmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqka1zRlF%2BbioAAGSOcGAAAAA%3D" target="_blank" rel="noopener noreferrer">
                  <Bed className="mr-2 h-4 w-4" />
                  Book at The St. Regis Shenzhen
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <LazyImage
              src="/assets/the-st-regis-sz.jpg"
              alt="The St. Regis Shenzhen"
              className="w-full h-96 object-cover"
              data-testid="img-venue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
