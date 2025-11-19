import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyCTA from '@/components/sticky-cta'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shenzhen SEO Conference 2026 - Pre-Sale Tickets | Connect Eastern & Western Digital Markets',
  description: 'Join 500+ SEO professionals at the premier international conference in Shenzhen. Early bird tickets now available for September 18-21, 2026. Bridge Eastern and Western digital marketing strategies.',
  openGraph: {
    title: 'Shenzhen SEO Conference 2026 - Pre-Sale Tickets',
    description: 'Join 500+ SEO professionals at the premier international conference in Shenzhen. September 18-21, 2026.',
    type: 'website',
    siteName: 'Shenzhen SEO Conference',
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
      </body>
    </html>
  )
}
