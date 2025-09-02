import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2" data-testid="nav-logo">
            <Search className="text-primary text-2xl" />
            <span className="text-xl font-bold">Shenzhen SEO 2026</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('speakers')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-speakers"
            >
              Speakers
            </button>
            <button 
              onClick={() => scrollToSection('tickets')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-tickets"
            >
              Tickets
            </button>
            <button 
              onClick={() => scrollToSection('venue')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-venue"
            >
              Venue
            </button>
            <Button 
              onClick={() => scrollToSection('tickets')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="button-early-access"
            >
              Get Early Access
            </Button>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('speakers')} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-speakers"
              >
                Speakers
              </button>
              <button 
                onClick={() => scrollToSection('tickets')} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-tickets"
              >
                Tickets
              </button>
              <button 
                onClick={() => scrollToSection('venue')} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-venue"
              >
                Venue
              </button>
              <Button 
                onClick={() => scrollToSection('tickets')}
                className="w-full bg-primary text-primary-foreground"
                data-testid="mobile-button-early-access"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
