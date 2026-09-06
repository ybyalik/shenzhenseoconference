'use client';

import Link from 'next/link';
import { useEffect, useState, type RefObject } from 'react';

import { NewsletterModal } from './newsletter-modal';

/** Tracks which carousel card is currently in view inside a scroll-snap container. */
export function useCarouselActive(trackRef: RefObject<HTMLDivElement | null>) {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.querySelectorAll<HTMLElement>('[data-card-idx]'));
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute('data-card-idx'));
            setActiveIdx(idx);
          }
        }
      },
      { root: track, threshold: 0.6 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [trackRef]);
  return activeIdx;
}

export function CarouselDots({ count, active }: { count: number; active: number }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-200 ${
            i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
          }`}
        />
      ))}
    </div>
  );
}

export const NAV_ITEMS = [
  { label: 'HOME', anchor: '#top' },
  { label: 'SPEAKERS', anchor: '/speakers' },
  { label: 'AGENDA', anchor: '/agenda' },
  { label: 'SPONSORS', anchor: '/sponsors' },
  { label: 'VISIT SHENZHEN', anchor: '/visit-shenzhen' },
  { label: 'CONTACT', anchor: '#contact' },
];

function resolveHref(anchor: string, linkBase: string) {
  return anchor.startsWith('/') ? anchor : `${linkBase}${anchor}`;
}

export function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 15 15" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M0.292893 13.0209C-0.0976309 13.4114 -0.0976309 14.0446 0.292893 14.4351C0.683418 14.8257 1.31658 14.8257 1.70711 14.4351L1 13.728L0.292893 13.0209ZM14.7279 1.00011C14.7279 0.447823 14.2802 0.000107554 13.7279 0.000107301L4.72792 0.000107427C4.17564 0.00010709 3.72792 0.447823 3.72792 1.00011C3.72792 1.55239 4.17564 2.00011 4.72792 2.00011L12.7279 2.00011L12.7279 10.0001C12.7279 10.5524 13.1756 11.0001 13.7279 11.0001C14.2802 11.0001 14.7279 10.5524 14.7279 10.0001L14.7279 1.00011ZM1 13.728L1.70711 14.4351L14.435 1.70721L13.7279 1.00011L13.0208 0.293001L0.292893 13.0209L1 13.728Z"
      />
    </svg>
  );
}

export function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M4 7h16M4 12h16M4 17h16"
      />
    </svg>
  );
}

export function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M6 6l12 12M18 6L6 18"
      />
    </svg>
  );
}
export function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7.5l8 5.5 8-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  );
}

export function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      />
    </svg>
  );
}

export function YouTubeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RedNoteIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <path d="M7.5 9h3.2M7.5 12h9M7.5 15h6" strokeLinecap="round" />
    </svg>
  );
}

export function WeChatIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.46 21.63L18.45 20.76L18.12 20.83C16.85 21.09 15.29 21.03 13.99 20.65C11.71 19.99 9.93 18.47 9.29 16.64C8.65 14.8 9.11 12.87 10.54 11.37C13.17 8.64 18.0 8.21 21.32 10.41C21.86 10.76 22.62 11.49 22.98 11.98C24.79 14.51 24.11 17.66 21.34 19.55L21.1 19.71L21.8 21.11C22.19 21.87 22.49 22.5 22.49 22.5C22.48 22.5 21.57 22.1 20.46 21.63ZM2.84 16.08C3.16 15.43 3.42 14.9 3.42 14.89C3.42 14.88 3.25 14.74 3.04 14.59C1.49 13.46 0.49 11.95 0.11 10.17C-0.01 9.62 -0.01 8.38 0.11 7.83C0.42 6.35 1.09 5.18 2.23 4.08C4.75 1.67 8.77 0.86 12.33 2.04C14.44 2.75 16.11 4.05 17.13 5.79C17.43 6.3 17.88 7.49 17.81 7.57C17.8 7.58 17.59 7.56 17.34 7.54C16.79 7.48 15.56 7.52 14.93 7.62C10.21 8.35 6.99 11.97 7.57 15.88C7.61 16.15 7.64 16.38 7.63 16.39C7.59 16.43 6.59 16.21 6.06 16.05C5.77 15.96 5.51 15.89 5.48 15.89C5.45 15.89 4.78 16.17 3.99 16.51C3.2 16.85 2.49 17.15 2.4 17.19C2.25 17.25 2.25 17.24 2.84 16.08ZM14.64 14.55C15.04 14.42 15.38 13.93 15.38 13.5C15.38 12.92 14.84 12.38 14.26 12.38C13.67 12.37 13.12 12.91 13.12 13.5C13.12 13.79 13.23 14.03 13.47 14.28C13.82 14.62 14.19 14.7 14.64 14.55ZM19.14 14.55C19.54 14.42 19.88 13.93 19.88 13.5C19.88 12.92 19.34 12.38 18.76 12.38C18.17 12.37 17.62 12.91 17.62 13.5C17.62 13.79 17.73 14.03 17.97 14.28C18.32 14.62 18.69 14.7 19.14 14.55ZM6.35 7.07C6.6 6.99 6.99 6.6 7.07 6.35C7.19 5.93 7.11 5.58 6.81 5.25C6.37 4.76 5.7 4.75 5.22 5.22C4.75 5.7 4.75 6.3 5.22 6.78C5.55 7.11 5.91 7.2 6.35 7.07ZM12.35 7.07C12.75 6.95 13.12 6.43 13.12 6.0C13.12 5.42 12.59 4.88 12.01 4.88C11.42 4.87 10.88 5.41 10.88 6.0C10.88 6.29 10.98 6.53 11.22 6.78C11.55 7.11 11.91 7.2 12.35 7.07Z" />
    </svg>
  );
}

/**
 * WeChat is a QR code rather than a link, so it opens a small popover instead of
 * navigating: hover on desktop, tap on touch devices. Escape and an outside
 * click close it, so it is not a trap on mobile.
 *
 * Wraps whatever trigger you pass as children, so the footer link and the
 * home-page contact line share one implementation and stay in step.
 */
export function WeChatQrPopover({
  children,
  className = '',
  placement = 'top',
}: {
  children: React.ReactNode;
  className?: string;
  /** 'top' suits the footer, where there is nothing below. 'bottom' suits
   *  mid-page triggers, so the panel doesn't cover the lines above it. */
  placement?: 'top' | 'bottom';
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest('[data-wechat-qr]')) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <div
      data-wechat-qr
      className={`relative ${className}`}
      // Gated to a real mouse. On touch the browser also fires an emulated
      // enter, which combined with a toggling click opened and instantly closed
      // the popover, so a tap appeared to do nothing.
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setOpen(false);
      }}
      onClick={() => setOpen(true)}
      onFocus={() => setOpen(true)}
    >
      {children}

      {open && (
        <div
          // The supplied graphic is about 3:1, so the code itself is only a
          // third of this width. Kept as wide as it can go without spilling
          // out of a phone screen.
          className={`absolute left-0 z-50 rounded-xl bg-white p-3 shadow-2xl ${
            placement === 'bottom' ? 'top-full mt-3' : 'bottom-full mb-3'
          }`}
          style={{ width: 'min(380px, 88vw)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/wechat-contact.webp"
            alt="WeChat QR code for the Shenzhen SEO Conference official account"
            className="w-full h-auto"
          />
          <p className="mt-2 text-[12px] leading-[150%] text-black/60">
            Scan the code, or search 深圳SEO大会 in WeChat.
          </p>
        </div>
      )}
    </div>
  );
}

function WeChatQrLink() {
  return (
    <WeChatQrPopover>
      <button
        type="button"
        className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.06em] text-white/75 hover:text-white cursor-pointer"
      >
        <WeChatIcon className="w-4 h-4" />
        WECHAT (微信)
      </button>
    </WeChatQrPopover>
  );
}

export function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44h-3.05v-3.49h3.05V9.41c0-3.02 1.79-4.68 4.53-4.68 1.31 0 2.69.23 2.69.23v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24c5.74-.92 10.13-5.91 10.13-11.93Z"
      />
    </svg>
  );
}

export function ArrowUpIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19V5M5 12l7-7 7 7"
      />
    </svg>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      setShow(pct >= 0.2);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        typeof window !== 'undefined' &&
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      className={`fixed grid place-items-center w-12 h-12 rounded-full text-white shadow-lg z-40 right-4 bottom-4 max-[420px]:bottom-[96px] lg:right-[50px] lg:bottom-[50px] btn-back-to-top ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ aspectRatio: '1 / 1' }}
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}

/**
 * `linkBase` lets the same nav work from a sibling page (e.g. /speakers5).
 * Empty string keeps current home5 behavior (raw anchors). When set to
 * '/home5', anchors become '/home5#speakers' so they navigate cross-page.
 */
export function Nav({ linkBase = '', current }: { linkBase?: string; current?: string } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#top');
  const [scrolled, setScrolled] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  const ticketsHref = `${linkBase}#pricing`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#03060d] border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-[72px] lg:h-[88px]">
          <Link href="/" className="flex items-center" aria-label="Shenzhen SEO Conference">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.webp"
              alt="Shenzhen SEO Conference"
              className="h-[26px] lg:h-[30px] w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center" style={{ gap: '42px' }}>
            <nav className="flex items-center" style={{ gap: '32px' }}>
              {NAV_ITEMS.map((n) => {
                const isActive = current === n.label;
                return (
                  <Link
                    key={n.label}
                    href={resolveHref(n.anchor, linkBase)}
                    className={`${
                      isActive ? 'text-[#EB3030]' : 'text-[#F9F9F9] hover:text-[#EB3030]'
                    } transition-colors`}
                    style={{
                      fontFamily: 'General Sans, system-ui, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: '20px',
                      letterSpacing: '1px',
                    }}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-5">
              <button
                type="button"
                aria-label="Subscribe to our newsletter"
                title="Subscribe to our newsletter"
                onClick={() => setSubscribeOpen(true)}
                className="grid place-items-center w-9 h-9 rounded-full text-[#F9F9F9] hover:text-[#EB3030] transition-colors"
              >
                <EmailIcon className="w-[19px] h-[19px]" />
              </button>
              <Link
                href={ticketsHref}
                className="display inline-flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] text-white gradient-cta"
              >
                GET TICKETS
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              aria-label="Subscribe to our newsletter"
              onClick={() => setSubscribeOpen(true)}
              className="grid place-items-center w-10 h-10 text-white"
            >
              <EmailIcon className="w-[22px] h-[22px]" />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="grid place-items-center w-10 h-10 -mr-2 text-white"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col"
          style={{ background: '#03060D' }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-white/10">
            <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-white.webp"
                alt="Shenzhen SEO Conference"
                className="h-[26px] w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="grid place-items-center w-10 h-10 -mr-2 text-white"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="flex flex-col gap-7">
              {NAV_ITEMS.map((n) => {
                const href = resolveHref(n.anchor, linkBase);
                const isActive = current === n.label || activeHref === href;
                return (
                  <li key={n.label}>
                    <Link
                      href={href}
                      onClick={() => handleNavClick(href)}
                      className="display uppercase mobile-menu-link"
                      style={{
                        fontSize: '24px',
                        fontWeight: 500,
                        lineHeight: '21px',
                        letterSpacing: '1px',
                        color: isActive ? '#EB3030' : '#F9F9F9',
                      }}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="px-6 pb-8 pt-4">
            <Link
              href={ticketsHref}
              onClick={() => setMenuOpen(false)}
              className="display rounded-full gradient-cta uppercase"
              style={{
                display: 'flex',
                padding: '12px 32px',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'stretch',
              }}
            >
              <span
                style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '28px',
                }}
              >
                GET TICKETS
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0.292893 13.0209C-0.097631 13.4114 -0.097631 14.0446 0.292893 14.4351C0.683418 14.8257 1.31658 14.8257 1.70711 14.4351L1 13.728L0.292893 13.0209ZM14.7279 1.00011C14.7279 0.447822 14.2802 0.000106397 13.7279 0.000106144L4.72792 0.00010627C4.17564 0.000105933 3.72792 0.447821 3.72792 1.00011C3.72792 1.55239 4.17564 2.00011 4.72792 2.00011L12.7279 2.00011L12.7279 10.0001C12.7279 10.5524 13.1756 11.0001 13.7279 11.0001C14.2802 11.0001 14.7279 10.5524 14.7279 10.0001L14.7279 1.00011ZM1 13.728L1.70711 14.4351L14.435 1.70721L13.7279 1.00011L13.0208 0.293L0.292893 13.0209L1 13.728Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}

      <NewsletterModal open={subscribeOpen} onClose={() => setSubscribeOpen(false)} />
    </>
  );
}

export function Footer({ linkBase = '' }: { linkBase?: string } = {}) {
  const navLinks = [
    { label: 'HOME', anchor: '#top' },
    { label: 'SPEAKERS', anchor: '/speakers' },
    { label: 'AGENDA', anchor: '/agenda' },
    { label: 'SPONSORS', anchor: '/sponsors' },
    { label: 'VISIT SHENZHEN', anchor: '/visit-shenzhen' },
    { label: 'CONTACT', anchor: '#contact' },
  ];
  const ticketsHref = `${linkBase}#pricing`;

  return (
    <footer className="bg-[#06222d]">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-white.webp"
                alt="Shenzhen SEO Conference"
                className="h-[30px] w-auto"
              />
            </div>
            <p className="text-[16px] md:text-[18px] text-white/85 mb-6">
              Connecting Eastern and Western SEO
            </p>
            <Link
              href={ticketsHref}
              className="display inline-flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-semibold tracking-[0.16em] gradient-cta text-white"
            >
              GET YOUR TICKETS TODAY
              <ArrowUpRight className="w-4 h-4" />
            </Link>

          </div>

          <div>
            <div className="display text-[14px] font-semibold tracking-[0.2em] mb-5">NAVIGATE</div>
            <ul className="space-y-3">
              {navLinks.map((lnk) => (
                <li key={lnk.label}>
                  <Link
                    href={resolveHref(lnk.anchor, linkBase)}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.06em] text-white/75 hover:text-white"
                  >
                    {lnk.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="display text-[14px] font-semibold tracking-[0.2em] mb-5">FOLLOW</div>
            <ul className="space-y-3">
              {[
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/shenzhen-seo-conference/', Icon: LinkedInIcon },
                { label: 'X', href: 'https://x.com/shenzhenseoconf', Icon: XIcon },
                { label: 'FACEBOOK', href: 'https://www.facebook.com/shenzhenseoconference/', Icon: FacebookIcon },
                { label: 'INSTAGRAM', href: 'https://www.instagram.com/shenzhenseoconference', Icon: InstagramIcon },
                { label: 'YOUTUBE', href: 'https://youtube.com/@shenzhen-seo-conference', Icon: YouTubeIcon },
                { label: 'RED NOTE (小红书)', href: 'https://xhslink.cn/m/AEIahOL98cU', Icon: RedNoteIcon },
              ].map((lnk) => (
                <li key={lnk.label}>
                  <a
                    href={lnk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.06em] text-white/75 hover:text-white"
                  >
                    <lnk.Icon className="w-4 h-4" />
                    {lnk.label}
                  </a>
                </li>
              ))}
              <li>
                <WeChatQrLink />
              </li>
            </ul>
          </div>

          <div>
            <div className="display text-[14px] font-semibold tracking-[0.2em] mb-5">MISC</div>
            <ul className="space-y-3">
              {[
                { label: 'Press Kit', href: '/press' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
              ].map((lnk) => (
                <li key={lnk.label}>
                  <a
                    href={lnk.href}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.06em] text-white/75 hover:text-white"
                  >
                    {lnk.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-12 border-white/10" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-3 text-[14px] text-white/60">
          <div>© 2026 Shenzhen SEO Conference. Owned by Action Digital Publishing LLC (USA). Local Partner in China: 梦泰吉（武汉市）商务咨询有限责任公司</div>
        </div>
      </div>
    </footer>
  );
}
