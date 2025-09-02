import { useState, useEffect } from "react";
import { Ticket, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="sticky-cta">
      <Button
        onClick={scrollToTop}
        className="bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-background/90 h-12 w-12 rounded-full shadow-lg"
        data-testid="button-scroll-top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      
      <Button
        onClick={scrollToTickets}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full shadow-lg animate-pulse-gentle hover:scale-105 transition-transform"
        data-testid="button-sticky-tickets"
      >
        <Ticket className="mr-2 h-5 w-5" />
        Get Tickets
      </Button>
    </div>
  );
}