import { Link } from "wouter";
import { SiFacebook, SiX, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-6" data-testid="social-media-links">
            <a
              href="https://x.com/shenzhenseoconf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Follow us on X (Twitter)"
              data-testid="link-twitter"
            >
              <SiX className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/shenzhenseoconference/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Follow us on Facebook"
              data-testid="link-facebook"
            >
              <SiFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/shenzhen-seo-conference/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Follow us on LinkedIn"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-6 text-sm" data-testid="policy-links">
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/terms-conditions"
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="link-terms-conditions"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400" data-testid="copyright">
            <p>Copyright © 2025 ShenzhenSEOConference.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
