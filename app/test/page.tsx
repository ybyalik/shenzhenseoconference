import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
  title: 'Test Page',
}

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div data-kingsway-player="ee8108f0c9" data-width="100%" data-height="100%" style={{aspectRatio: '16 / 9', backgroundImage: 'url(\'https://static.kingswayvideo.com/w1o9d6ta/vod/ee8108f0c9/cover.jpg?imageMogr2/format/webp/thumbnail/!30p?t=1763977822290\')', backgroundSize: 'auto 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#000'}} />
      </div>
      <Script
        src="https://websdk.kingswayvideo.com/vod-player/latest/vod-player.min.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
