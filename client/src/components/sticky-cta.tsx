import { useState, useEffect } from "react";
import { Ticket } from "lucide-react";
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
    const currentPath = window.location.pathname;
    if (currentPath === '/' || currentPath === '') {
      document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#tickets';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="sticky-cta">
      <Button
        onClick={scrollToTickets}
        className="text-white hover:opacity-90 px-6 py-3 rounded-full shadow-lg animate-pulse-gentle hover:scale-105 transition-transform"
        style={{ backgroundColor: '#ff007a' }}
        data-testid="button-sticky-tickets"
      >
        <Ticket className="mr-2 h-5 w-5" />
        Get Tickets
      </Button>
    </div>
  );
}