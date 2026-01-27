import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyCTA from '@/components/sticky-cta'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClientProvider } from '@/components/providers/query-client-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 (September 14–18)',
  description: 'Join 500+ SEO professionals at the premier international conference in Shenzhen. Early bird tickets now available for September 14-18, 2026. Bridge Eastern and Western digital marketing strategies.',
  metadataBase: new URL('https://shenzhenseoconference.com'),
  openGraph: {
    title: 'Shenzhen SEO Conference 2026 (September 14–18)',
    description: 'Join 500+ SEO professionals at the premier international conference in Shenzhen. September 14-18, 2026.',
    type: 'website',
    url: 'https://shenzhenseoconference.com',
    siteName: 'Shenzhen SEO Conference',
    images: [
      {
        url: 'https://shenzhenseoconference.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shenzhen SEO Conference 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shenzhen SEO Conference 2026 (September 14–18)',
    description: 'Join 500+ SEO professionals at the premier international conference in Shenzhen. September 14-18, 2026.',
    images: ['https://shenzhenseoconference.com/og-image.jpg'],
  },
}

export default function MainLayout({
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
      <body className={inter.className}>
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
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
            <StickyCTA />
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
