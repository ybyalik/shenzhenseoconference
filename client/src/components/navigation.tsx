import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo-main_1756774330186.png";
import darkLogoImage from "@assets/logodark_1756775589088.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-background/80 backdrop-blur-lg border-b border-border'}`} data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center" data-testid="nav-logo">
            <img 
              src={isScrolled ? darkLogoImage : logoImage} 
              alt="Shenzhen SEO Conference" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-about"
              aria-label="Navigate to About section"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tickets')} 
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-tickets"
              aria-label="Navigate to Tickets section"
            >
              Tickets
            </button>
            <button 
              onClick={() => scrollToSection('venue')} 
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-venue"
              aria-label="Navigate to Venue section"
            >
              Venue
            </button>
            <Link 
              href="/sponsors"
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-sponsors"
              aria-label="Navigate to Sponsors page"
            >
              Sponsors
            </Link>
            <Button 
              onClick={() => scrollToSection('tickets')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:ring-4 focus:ring-primary/20"
              data-testid="button-early-access"
              aria-label="Get early access to conference tickets"
            >
              Get Early Access
            </Button>
          </div>
          
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t transition-colors ${
            isScrolled 
              ? 'bg-white border-gray-200' 
              : 'bg-background border-border'
          }`} data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className={`block w-full text-left font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white hover:text-purple-200'
                }`}
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('tickets')} 
                className={`block w-full text-left font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white hover:text-purple-200'
                }`}
                data-testid="mobile-nav-tickets"
              >
                Tickets
              </button>
              <button 
                onClick={() => scrollToSection('venue')} 
                className={`block w-full text-left font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white hover:text-purple-200'
                }`}
                data-testid="mobile-nav-venue"
              >
                Venue
              </button>
              <Link
                href="/sponsors"
                className={`block w-full text-left font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white hover:text-purple-200'
                }`}
                data-testid="mobile-nav-sponsors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sponsors
              </Link>
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
