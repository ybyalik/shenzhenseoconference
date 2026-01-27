import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClientProvider } from '@/components/providers/query-client-provider'
import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import './home2/home2.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 | Where East Meets West',
  description: 'Join 500+ SEO professionals for 5 transformative days in Shenzhen. September 14-18, 2026. Bridge Eastern and Western digital marketing.',
  keywords: ['SEO conference', 'Shenzhen', 'digital marketing', 'China SEO', 'international conference', 'Baidu SEO'],
  openGraph: {
    title: 'Shenzhen SEO Conference 2026',
    description: 'Where East Meets West. 5 days of groundbreaking SEO insights in China\'s Silicon Valley.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shenzhen SEO Conference 2026',
    description: 'Where East Meets West. 5 days of groundbreaking SEO insights.',
  },
}

export default function Home2RootLayout({
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
      <body className={`${bebas.variable} ${dmSans.variable} bg-[#020f1a] text-white`}>
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
            {/* Navigation - transparent over hero */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#020f1a] to-transparent">
              <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                <Link href="/home2" className="flex items-center gap-4">
                  <div className="relative w-14 h-14">
                    <Image
                      src="/assets/logo-main_1756774330186.png"
                      alt="Shenzhen SEO Conference"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden md:block">
                    <span className="font-display text-2xl tracking-wide">SHENZHEN SEO</span>
                    <span className="block text-xs text-[#a0cc3b] tracking-[0.3em] uppercase">Conference 2026</span>
                  </div>
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                  <Link href="/speakers" className="font-body text-sm text-white/70 hover:text-[#a0cc3b] transition-colors duration-300 uppercase tracking-wider">
                    Speakers
                  </Link>
                  <Link href="/sponsors" className="font-body text-sm text-white/70 hover:text-[#a0cc3b] transition-colors duration-300 uppercase tracking-wider">
                    Sponsors
                  </Link>
                  <Link href="/plan-your-trip" className="font-body text-sm text-white/70 hover:text-[#a0cc3b] transition-colors duration-300 uppercase tracking-wider">
                    Travel
                  </Link>
                  <Link href="/contact" className="font-body text-sm text-white/70 hover:text-[#a0cc3b] transition-colors duration-300 uppercase tracking-wider">
                    Contact
                  </Link>
                </div>

                <Link
                  href="#tickets"
                  className="font-body text-sm font-semibold px-8 py-4 bg-[#ca080e] text-white uppercase tracking-wider hover:bg-[#a00610] transition-all duration-300 glow-red"
                >
                  Get Tickets
                </Link>
              </div>
            </nav>

            <main className="min-h-screen">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#010a10] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
              {/* Decorative wave at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a0cc3b] to-transparent opacity-30" />

              <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16">
                        <Image
                          src="/assets/logo-main_1756774330186.png"
                          alt="Shenzhen SEO Conference"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="font-display text-3xl">SHENZHEN SEO</span>
                        <span className="block text-xs text-[#a0cc3b] tracking-[0.3em] uppercase">Conference 2026</span>
                      </div>
                    </div>
                    <p className="font-body text-white/50 text-sm leading-relaxed max-w-md mb-6">
                      The premier international SEO conference bridging Eastern and Western digital marketing strategies.
                      5 days of innovation in China's Silicon Valley.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span>September 14-18, 2026</span>
                      <span className="w-1 h-1 rounded-full bg-[#a0cc3b]" />
                      <span>Shenzhen, China</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display text-xl mb-6 text-[#a0cc3b]">NAVIGATE</h4>
                    <ul className="space-y-4 font-body text-sm">
                      <li><Link href="/speakers" className="text-white/50 hover:text-[#a0cc3b] transition-colors">Speakers</Link></li>
                      <li><Link href="/sponsors" className="text-white/50 hover:text-[#a0cc3b] transition-colors">Sponsors</Link></li>
                      <li><Link href="/plan-your-trip" className="text-white/50 hover:text-[#a0cc3b] transition-colors">Plan Your Trip</Link></li>
                      <li><Link href="/contact" className="text-white/50 hover:text-[#a0cc3b] transition-colors">Contact Us</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display text-xl mb-6 text-[#a0cc3b]">LEGAL</h4>
                    <ul className="space-y-4 font-body text-sm">
                      <li><Link href="/privacy-policy" className="text-white/50 hover:text-[#a0cc3b] transition-colors">Privacy Policy</Link></li>
                      <li><Link href="/terms-conditions" className="text-white/50 hover:text-[#a0cc3b] transition-colors">Terms & Conditions</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="font-body text-white/30 text-xs">
                    &copy; {new Date().getFullYear()} Shenzhen SEO Conference. All rights reserved.
                  </p>
                  <div className="flex items-center gap-6">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a0cc3b] hover:border-[#a0cc3b] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a0cc3b] hover:border-[#a0cc3b] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a0cc3b] hover:border-[#a0cc3b] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
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
