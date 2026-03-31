'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/about2', label: 'About' },
  { href: '/speakers2', label: 'Speakers' },
  { href: '/agenda2', label: 'Agenda' },
  { href: '/sponsors2', label: 'Sponsors' },
  { href: '/plan-your-trip2', label: 'Visiting Shenzhen' },
  { href: '/faq2', label: 'FAQ' },
  { href: '/contact2', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2.5 md:p-4 lg:p-5">
      <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-sm px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between relative">
        <Link href="/home3" className="flex items-center flex-shrink-0">
          <div className="relative w-[120px] h-[32px] md:w-[150px] md:h-[40px]">
            <Image
              src="/assets/home3/conference-logo_4x.webp"
              alt="Shenzhen SEO Conference"
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-[#020725] hover:text-[#4657db] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/home3#pricing"
            className="text-xs md:text-sm lg:text-base font-normal px-3 md:px-5 py-2.5 md:py-3 bg-[#020725] text-white rounded leading-[1.2] hover:bg-[#4657db] transition-all"
          >
            Get Tickets
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center"
          >
            {menuOpen ? (
              <svg className="w-5 h-5 text-[#020725]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#020725]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden max-w-[1400px] mx-auto mt-2 bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#020725] hover:text-[#4657db] hover:bg-[#f5f5f5] transition-colors py-3 px-4 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
