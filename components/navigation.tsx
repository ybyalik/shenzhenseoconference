'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-primary/20 rounded">
              <img 
                src={isScrolled ? "/assets/logodark_1756775589088.png" : "/assets/logo-main_1756774330186.png"} 
                alt="Shenzhen SEO Conference" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-home"
              aria-label="Navigate to Home page"
            >
              Home
            </Link>
            <Link 
              href="/speakers/"
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-speakers"
              aria-label="Navigate to Speakers page"
            >
              Speakers
            </Link>
            <Link 
              href="/sponsors/"
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
            <Link 
              href="/plan-your-trip/"
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-plan-trip"
              aria-label="Navigate to Plan Your Trip page"
            >
              Plan Your Trip
            </Link>
            <Link 
              href="/contact/"
              className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-purple-200'
              }`}
              data-testid="nav-contact"
              aria-label="Navigate to Contact page"
            >
              Contact
            </Link>
            <Link href="/#tickets">
              <Button 
                className={`px-6 py-2 rounded-full font-medium transition-colors focus:ring-4 focus:ring-primary/20 ${
                  isScrolled 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'text-white hover:opacity-90'
                }`}
                style={!isScrolled ? { backgroundColor: '#ff007a' } : undefined}
                data-testid="button-buy-tickets"
                aria-label="Buy conference tickets"
              >
                Buy Tickets
              </Button>
            </Link>
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
          <div className="md:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block w-full text-left font-semibold text-gray-800 hover:text-primary transition-colors"
                data-testid="mobile-nav-home"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/speakers/"
                className="block w-full text-left font-semibold text-gray-800 hover:text-primary transition-colors"
                data-testid="mobile-nav-speakers"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Speakers
              </Link>
              <Link
                href="/sponsors/"
                className="block w-full text-left font-semibold text-gray-800 hover:text-primary transition-colors"
                data-testid="mobile-nav-sponsors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                href="/plan-your-trip/"
                className="block w-full text-left font-semibold text-gray-800 hover:text-primary transition-colors"
                data-testid="mobile-nav-plan-trip"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan Your Trip
              </Link>
              <Link
                href="/contact/"
                className="block w-full text-left font-semibold text-gray-800 hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/#tickets" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-primary text-primary-foreground"
                    data-testid="mobile-button-buy-tickets"
                  >
                    Buy Tickets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
