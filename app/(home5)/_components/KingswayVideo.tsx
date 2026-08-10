'use client';

import Script from 'next/script';

/**
 * Kingsway video widgets.
 *
 * The vendor snippet appends its own <script> to <head> on every render. Loading
 * it through next/script instead means Next handles it once per page and after
 * hydration, so the widget finds its container already in the DOM. The container
 * divs and their data attributes are exactly what the vendor expects.
 *
 * The SDK auto-initialises every [data-kingsway-video-list-extend] element on the
 * page, so a page using both widgets still only loads the script once.
 */
const SDK_SRC = 'https://websdk.kingswayvideo.com/video-widgets/latest/video-widgets.min.js';

function KingswaySdk() {
  return <Script id="kingsway-video-widgets" src={SDK_SRC} strategy="afterInteractive" />;
}

/**
 * Floating video that the SDK positions over the page. It has no section of its
 * own, so mount it once near the end of the page body.
 */
export function KingswayFloat({ listId }: { listId: string }) {
  return (
    <>
      <div
        data-kingsway-video-list-extend={listId}
        data-video-list-extend-type="float"
        data-width="100%"
      />
      <KingswaySdk />
    </>
  );
}

export function KingswayCarousel({
  listId,
  title,
}: {
  /** The vendor's video list id, from the embed snippet. */
  listId: string;
  title: string;
}) {
  return (
    <section className="bg-[#03060d]">
      <div className="container py-12 md:py-24 lg:py-[96px] flex flex-col gap-8 lg:gap-12">
        <h2
          className="display uppercase text-white"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '-2px',
          }}
        >
          {title}
        </h2>

        <div
          data-kingsway-video-list-extend={listId}
          data-video-list-extend-type="swiper"
          data-width="100%"
        />
      </div>

      <KingswaySdk />
    </section>
  );
}
