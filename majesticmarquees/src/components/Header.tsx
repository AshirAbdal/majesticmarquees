'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '../config/site';

function NavItem({ href, label, end }: { href: string; label: string; end?: boolean }) {
  const pathname = usePathname();
  const isActive = end ? pathname === href : pathname?.startsWith(href) ?? false;
  return (
    <Link
      href={href}
      className={`text-sm uppercase tracking-wider transition-colors ${
        isActive ? 'text-tan-500' : 'text-forest-800 hover:text-tan-500'
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur border-b border-black">
      <div className="container-x flex items-center justify-between h-28">
        <Link href="/" className="flex items-center" aria-label="Home">
          <img src="/logo.png" alt="Majestic Marquees" className="h-24 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((n) => {
            const hasChildren = 'children' in n && Array.isArray(n.children) && n.children.length > 0;
            if (hasChildren) {
              const isActive = pathname?.startsWith(n.to) ?? false;
              return (
                <div key={n.to} className="relative group">
                  <Link
                    href={n.to}
                    className={`text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-1 ${
                      isActive ? 'text-tan-500' : 'text-forest-800 hover:text-tan-500'
                    }`}
                  >
                    {n.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" className="opacity-70">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    <div className="bg-cream-50 border border-cream-200 min-w-[260px] py-2 shadow-lg">
                      {n.children!.map((c) => {
                        const childActive = pathname === c.to;
                        return (
                          <Link
                            key={c.to}
                            href={c.to}
                            className={`block px-5 py-3 text-sm tracking-wider transition-colors ${
                              childActive ? 'text-tan-500' : 'text-forest-800 hover:text-tan-500'
                            }`}
                          >
                            {c.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <NavItem key={n.to} href={n.to} label={n.label} end={n.to === '/'} />
            );
          })}
          <a
            href={site.blogUrl}
            className="text-sm uppercase tracking-wider text-forest-800 hover:text-tan-500"
          >
            Blog
          </a>
          <Link href="/contact-get-a-quote#contact-form" className="btn-primary">
            Inquire Today
          </Link>
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
            {site.nav.map((n) => {
              const hasChildren = 'children' in n && Array.isArray(n.children) && n.children.length > 0;
              if (hasChildren) {
                const isOpen = mobileSub === n.to;
                return (
                  <div key={n.to} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={n.to}
                        onClick={() => setOpen(false)}
                        className="text-sm uppercase tracking-wider text-forest-800 py-2"
                      >
                        {n.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileSub(isOpen ? null : n.to)}
                        aria-label="Toggle submenu"
                        className="p-2 text-forest-800"
                      >
                        <svg width="12" height="8" viewBox="0 0 10 6" aria-hidden="true" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="pl-4 flex flex-col gap-2 pb-2">
                        {n.children!.map((c) => (
                          <Link
                            key={c.to}
                            href={c.to}
                            onClick={() => setOpen(false)}
                            className="text-sm tracking-wider text-forest-700 py-1"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-wider text-forest-800 py-2"
                >
                  {n.label}
                </Link>
              );
            })}
            <a href={site.blogUrl} className="text-sm uppercase tracking-wider text-forest-800 py-2">
              Blog
            </a>
            <Link
              href="/contact-get-a-quote#contact-form"
              onClick={() => setOpen(false)}
              className="btn-primary w-fit mt-2"
            >
              Inquire Today
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
