import { MapPin, Plane, Train, Bed, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "./lazy-image";

export default function VenueInfo() {
  return (
    <section id="venue" className="py-20 bg-background" data-testid="section-venue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-venue-title">
              2026 Venue - To Be Announced
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-venue-description">
              Our 2026 venue location in Shenzhen is currently being finalized. We're working to secure another 
              world-class facility that will provide the perfect setting for our international SEO conference.
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>2025 Venue:</strong> The Ritz-Carlton, Shenzhen provided luxury accommodations and 
                world-class facilities in the heart of Shenzhen's financial district.
              </p>
            </div>
            

            <div className="mt-8">
              <Button 
                disabled
                className="bg-muted text-muted-foreground px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
                data-testid="button-book-hotel"
                aria-label="Hotel booking available once venue is announced"
              >
                <Bed className="mr-2 h-4 w-4" />
                Hotel Booking (Coming Soon)
              </Button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <LazyImage 
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Luxury hotel interior" 
              className="w-full h-96 object-cover"
              data-testid="img-venue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
