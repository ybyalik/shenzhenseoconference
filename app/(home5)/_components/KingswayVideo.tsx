'use client';

import { useEffect } from 'react';
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

/**
 * The SDK scans for its containers exactly once, when the script runs, then sets
 * this flag on window and refuses to scan again.
 */
const SDK_INIT_FLAG = '__kingsway_video_list_extend_initialized_prod';

function KingswaySdk() {
  // Next navigates between pages without reloading the document, so by the time a
  // second page mounts the SDK has already run and flagged itself. Its one-shot
  // scan never sees the new page's container and the widget stays empty until a
  // manual refresh. There is no public re-init call, so clear the flag and run
  // the script again, which makes it rescan.
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;

    // Not yet initialised means this is a fresh document; the script's own
    // startup will handle the scan.
    if (!w[SDK_INIT_FLAG]) return;

    delete w[SDK_INIT_FLAG];

    const script = document.createElement('script');
    script.src = SDK_SRC;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <Script id="kingsway-video-widgets" src={SDK_SRC} strategy="afterInteractive" />;
}

/** Single on-page video. A different SDK from the list widgets above. */
const PLAYER_SDK_SRC = 'https://websdk.kingswayvideo.com/vod-player/latest/vod-player.min.js';

/** Same one-shot pattern as the list widgets, under a different name. */
const PLAYER_INIT_FLAG = '__KINGSWAY_EMBED_INIT_DONE__';

export function KingswayPlayer({
  playerId,
  poster,
  className = '',
  label,
}: {
  /** The vendor's player id, from the embed snippet. */
  playerId: string;
  /** Cover image shown before playback, from the vendor's CDN. */
  poster: string;
  className?: string;
  label?: string;
}) {
  // The player SDK scans for [data-kingsway-player] once and then sets a flag on
  // window. Next swaps pages without reloading, so arriving here by clicking a
  // link would leave the video unbuilt until a manual refresh. Clearing the flag
  // and running the script again makes it rescan. Same fix as the carousels.
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    if (!w[PLAYER_INIT_FLAG]) return;

    delete w[PLAYER_INIT_FLAG];

    const script = document.createElement('script');
    script.src = PLAYER_SDK_SRC;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div
        data-kingsway-player={playerId}
        data-width="100%"
        data-height="100%"
        aria-label={label}
        className={className}
        style={{
          aspectRatio: '16 / 9',
          backgroundImage: `url('${poster}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
        }}
      />
      <Script id="kingsway-vod-player" src={PLAYER_SDK_SRC} strategy="afterInteractive" />
    </>
  );
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
