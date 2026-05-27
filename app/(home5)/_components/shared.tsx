'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const NAV_ITEMS = [
  { label: 'HOME', anchor: '#top' },
  { label: 'SPEAKERS', anchor: '#speakers' },
  { label: 'AGENDA', anchor: '/agenda' },
  { label: 'SPONSORS', anchor: '#sponsors' },
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
      className={`fixed grid place-items-center w-12 h-12 rounded-full text-white shadow-lg z-40 right-4 bottom-4 lg:right-[50px] lg:bottom-[50px] btn-back-to-top ${
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
            <Link
              href={ticketsHref}
              className="display inline-flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold tracking-[0.18em] text-white gradient-cta"
            >
              GET TICKETS
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="lg:hidden grid place-items-center w-10 h-10 -mr-2 text-white"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
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
    </>
  );
}

export function Footer({ linkBase = '' }: { linkBase?: string } = {}) {
  const navLinks = [
    { label: 'HOME', anchor: '#top' },
    { label: 'SPEAKERS', anchor: '#speakers' },
    { label: 'SPONSORS', anchor: '#sponsors' },
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
            </ul>
          </div>

          <div>
            <div className="display text-[14px] font-semibold tracking-[0.2em] mb-5">MISC</div>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms & Conditions', href: '#' },
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
          <div>© 2026 ShenzhenSEOConference.com | All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
