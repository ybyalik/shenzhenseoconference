import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
