import Link from "next/link";
import { Twitter, Facebook, Linkedin, Inbox, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-primary/20 rounded">
                <img 
                  src="/assets/logodark_1756775589088.png" 
                  alt="Shenzhen SEO Conference" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Connecting Eastern and Western SEO markets through innovation and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="/sponsors/" className="hover:text-foreground transition-colors" data-testid="link-sponsors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/plan-your-trip/" className="hover:text-foreground transition-colors" data-testid="link-plan-trip">
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-foreground transition-colors" data-testid="link-contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-foreground transition-colors" data-testid="link-privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions/" className="hover:text-foreground transition-colors" data-testid="link-terms-conditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start sm:items-center" data-testid="contact-email">
                <Inbox className="mr-2 h-4 w-4 flex-shrink-0 mt-0.5 sm:mt-0" /> 
                <span className="break-all">support@shenzhenseoconference.com</span>
              </li>
              <li className="flex items-center" data-testid="contact-location">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" /> Shenzhen, China
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/shenzhenseoconf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter" aria-label="Follow us on X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/shenzhenseoconference/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/shenzhen-seo-conference/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin" aria-label="Follow us on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p data-testid="text-copyright">Copyright &copy; 2025 ShenzhenSEOConference.com. All rights reserved.</p>
          <p className="mt-2">
            Developed by <a href="https://bridgethegap.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-developer">BridgeTheGap.ai</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
