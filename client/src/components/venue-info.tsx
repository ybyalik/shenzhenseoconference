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
              The Ritz-Carlton, Shenzhen
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-venue-description">
              Experience luxury in the heart of Shenzhen's financial district. The Ritz-Carlton provides 
              world-class facilities and breathtaking views of the city skyline.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start" data-testid="venue-location">
                <MapPin className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <div className="font-semibold">Prime Location</div>
                  <div className="text-muted-foreground">116 Fuhua Road, Futian District, Shenzhen</div>
                </div>
              </div>
              
              <div className="flex items-start" data-testid="venue-airport">
                <Plane className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <div className="font-semibold">Easy Access</div>
                  <div className="text-muted-foreground">20 minutes from Shenzhen Bao'an International Airport</div>
                </div>
              </div>
              
              <div className="flex items-start" data-testid="venue-metro">
                <Train className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <div className="font-semibold">Metro Connected</div>
                  <div className="text-muted-foreground">Direct access to Shenzhen's extensive metro system</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors mr-4 focus:ring-4 focus:ring-accent/20"
                data-testid="button-book-hotel"
                aria-label="Book hotel accommodation"
              >
                <Bed className="mr-2 h-4 w-4" />
                Book Hotel
              </Button>
              <Button 
                variant="outline"
                className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors focus:ring-4 focus:ring-muted/20"
                data-testid="button-view-map"
                aria-label="View venue location on map"
              >
                <Map className="mr-2 h-4 w-4" />
                View Map
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
