'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '../config/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur border-b border-cream-200">
      <div className="container-x flex items-center justify-between h-28">
        <a href={site.mainSiteUrl} className="flex items-center" aria-label="Home">
          <img src="/logo.png" alt="Majestic Marquees" className="h-24 w-auto object-contain" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm uppercase tracking-wider text-forest-800 hover:text-tan-500 transition-colors"
            >
              {n.label}
            </a>
          ))}
          <Link
            href="/"
            className="text-sm uppercase tracking-wider text-tan-500"
          >
            Blog
          </Link>
          <a
            href={`${site.mainSiteUrl}/contact-get-a-quote#contact-form`}
            className="btn-primary"
          >
            Inquire Today
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu Toggle"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-forest-800"
        >
          <span className="block w-6 h-px bg-forest-800 mb-1.5" />
          <span className="block w-6 h-px bg-forest-800 mb-1.5" />
          <span className="block w-6 h-px bg-forest-800" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream-200 bg-cream-50">
          <div className="container-x py-6 flex flex-col gap-2">
            {site.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-wider text-forest-800 py-2"
              >
                {n.label}
              </a>
            ))}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wider text-tan-500 py-2"
            >
              Blog
            </Link>
            <a
              href={`${site.mainSiteUrl}/contact-get-a-quote#contact-form`}
              onClick={() => setOpen(false)}
              className="btn-primary w-fit mt-2"
            >
              Inquire Today
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
