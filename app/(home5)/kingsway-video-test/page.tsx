import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kingsway Video Test',
  robots: { index: false, follow: false },
};

export default function KingswayVideoTestPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#03060d',
        color: '#F9F9F9',
        padding: '56px 24px',
        fontFamily: 'General Sans, system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0 }}>Kingsway Video Test</h1>
          <p style={{ opacity: 0.6, marginTop: 8, fontSize: 14 }}>
            Internal test page (noindex). Kingsway Video widgets below.
          </p>
        </div>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, margin: 0 }}>
            Swiper widget · 25009
          </h2>
          <div data-kingsway-video-list-extend="25009" data-video-list-extend-type="swiper" data-width="100%" />
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, margin: 0 }}>
            Float widget · 25010
          </h2>
          <div data-kingsway-video-list-extend="25010" data-video-list-extend-type="float" data-width="100%" />
        </section>
      </div>

      {/* Kingsway Video SDK. Both snippets load the same script, so it is loaded once here;
          the SDK auto-initializes every [data-kingsway-video-list-extend] element on the page. */}
      <Script
        src="https://websdk.kingswayvideo.com/video-widgets/latest/video-widgets.min.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
