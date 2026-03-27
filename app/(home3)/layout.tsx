import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClientProvider } from '@/components/providers/query-client-provider'
import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import './home3/home3.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 | Where East Meets West',
  description: 'Join 500+ SEO professionals for 5 transformative days in Shenzhen. September 14-18, 2026. Bridge Eastern and Western digital marketing.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Home3RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NPXJ7HLK');`}
        </Script>
      </head>
      <body className={`${sora.variable} bg-white text-[#020725]`} style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPXJ7HLK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <QueryClientProvider>
          <TooltipProvider>
            {/* Navigation - floating white bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-2.5 md:p-4 lg:p-5">
              <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-sm px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
                <Link href="/home3" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                    <Image
                      src="/assets/logo-main_1756774330186.png"
                      alt="Shenzhen SEO Conference"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden sm:block leading-tight">
                    <span className="text-xs font-extrabold text-[#020725] uppercase tracking-wide">Shenzhen SEO</span>
                    <span className="block text-[10px] font-extrabold text-[#020725] uppercase tracking-wide">Conference</span>
                  </div>
                </Link>

                <div className="hidden lg:flex items-center gap-7">
                  <a href="#about" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">About</a>
                  <a href="#speakers" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">Speakers</a>
                  <a href="#schedule" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">Agenda</a>
                  <a href="#sponsors" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">Sponsors</a>
                  <a href="#venues" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">Visiting Shenzhen</a>
                  <a href="#faq" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">FAQ</a>
                  <Link href="/contact" className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#pricing"
                    className="text-xs md:text-sm lg:text-base font-normal px-3 md:px-5 py-2.5 md:py-3 bg-[#020725] text-white rounded leading-[1.2] hover:bg-[#4657db] transition-all"
                  >
                    Get Tickets
                  </a>
                  {/* Mobile hamburger */}
                  <button className="lg:hidden w-9 h-9 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#020725]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>

            <main>
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#f5f5f5] pt-10 md:pt-16 pb-6 md:pb-8">
              <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-8 md:mb-12">
                  <div className="max-w-sm">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                          src="/assets/logo-main_1756774330186.png"
                          alt="Shenzhen SEO Conference"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[10px] md:text-xs font-extrabold text-[#020725] uppercase tracking-wide">Shenzhen SEO</span>
                        <span className="block text-[8px] md:text-[10px] font-extrabold text-[#020725] uppercase tracking-wide">Conference</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-[#020725]/60 leading-relaxed mb-3 md:mb-4">
                      Connecting Eastern and Western SEO markets through innovation and collaboration.
                    </p>
                    <div className="flex items-center gap-2.5 md:gap-3">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#020725] flex items-center justify-center text-white hover:bg-[#4657db] transition-colors">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#020725] flex items-center justify-center text-white hover:bg-[#4657db] transition-colors">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#020725] flex items-center justify-center text-white hover:bg-[#4657db] transition-colors">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-3 md:mb-4">Quick Links</h4>
                      <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#020725]/60">
                        <li><Link href="/sponsors" className="hover:text-[#4657db] transition-colors">Sponsors</Link></li>
                        <li><Link href="/plan-your-trip" className="hover:text-[#4657db] transition-colors">Plan Your Trip</Link></li>
                        <li><Link href="/contact" className="hover:text-[#4657db] transition-colors">Contact</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-[#4657db] transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-conditions" className="hover:text-[#4657db] transition-colors">Terms & Conditions</Link></li>
                        <li><a href="#faq" className="hover:text-[#4657db] transition-colors">FAQ</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-3 md:mb-4">Contact</h4>
                      <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#020725]/60">
                        <li>support@shenzhenseocon<br className="md:hidden" />ference.com</li>
                        <li>Shenzhen, China</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-[10px] md:text-xs text-[#020725]/40">
                    Copyright &copy; {new Date().getFullYear()} ShenzhenSEOConference.com. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>

            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
