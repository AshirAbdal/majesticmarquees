import Link from 'next/link';
import { site } from '../config/site';

const linkCls =
  'uppercase tracking-[0.15em] text-sm text-forest-800/90 hover:text-tan-500 transition-colors';

export default function Footer() {
  return (
    <footer className="bg-[#f5f1e8] text-forest-800 pt-20 pb-10 border-t border-black">
      <div className="container-x pb-12 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="font-display text-2xl tracking-[0.18em] text-forest-800">
            MAJESTIC MARQUEES
          </h2>
          <p className="mt-6 uppercase tracking-[0.15em] text-sm text-forest-800/80">
            Superior Tents, Exceptional Service
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-4">
            <li><a href={`${site.mainSiteUrl}/our-tents`} className={linkCls}>Our Tents</a></li>
            <li><a href={`${site.mainSiteUrl}/gallery`} className={linkCls}>Gallery</a></li>
            <li><a href={`${site.mainSiteUrl}/contact-get-a-quote`} className={linkCls}>Contact / Get a Quote</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-4">
            <li><a href={`${site.mainSiteUrl}/about`} className={linkCls}>About</a></li>
            <li><a href={`${site.mainSiteUrl}/faq`} className={linkCls}>FAQ</a></li>
            <li><Link href="/" className={linkCls}>Blog</Link></li>
          </ul>
          <p className="mt-8 uppercase tracking-[0.15em] text-sm text-forest-800/90">
            Speak With Us
          </p>
          <a
            href="tel:+6282342464312"
            className="block mt-2 text-sm tracking-[0.05em] text-forest-800 hover:text-tan-500 transition-colors"
          >
            +62 823-4246-4312
          </a>
        </div>

        {/* Column 4 */}
        <div>
          <ul className="space-y-4">
            <li><a href={`${site.mainSiteUrl}/terms-conditions`} className={linkCls}>Terms and Condition</a></li>
            <li><a href={`${site.mainSiteUrl}/privacy-policy-2`} className={linkCls}>Privacy Policy</a></li>
            <li><a href={`${site.mainSiteUrl}/cookie-policy`} className={linkCls}>Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x">
        <div className="border-t border-forest-800/15" />
      </div>

      <div className="container-x py-8 flex items-center justify-center gap-8">
        <a
          href="https://www.facebook.com/MajesticMarqueesAndTents/"
          aria-label="Facebook"
          className="text-forest-800 hover:text-tan-500 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/majesticmarqueesandtents/"
          aria-label="LinkedIn"
          className="text-forest-800 hover:text-tan-500 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@MajesticMarqueesAndTents"
          aria-label="YouTube"
          className="text-forest-800 hover:text-tan-500 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/ptmajesticmarqueesandtents"
          aria-label="Instagram"
          className="text-forest-800 hover:text-tan-500 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>

      <div className="container-x pt-2 pb-2 text-center text-xs uppercase tracking-[0.18em] text-forest-800/80">
        © {new Date().getFullYear()} {site.name}. Superior Tents, Exceptional Service.
      </div>
    </footer>
  );
}
