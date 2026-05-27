const MAIN = (import.meta.env.VITE_MAIN_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://majesticmarquees.com';

export const site = {
  name: 'Majestic Marquees & Tents',
  tagline: 'Stories from the field',
  email: 'hello@majesticmarquees.com',
  blogUrl: 'https://blog.majesticmarquees.com/',
  mainSiteUrl: MAIN,
  // External links back to the main marketing site.
  nav: [
    { label: 'Majestic Marquees', href: `${MAIN}/` },
    { label: 'Our Tents', href: `${MAIN}/our-tents` },
    { label: 'Gallery', href: `${MAIN}/gallery` },
    { label: 'FAQ', href: `${MAIN}/faq` },
    { label: 'About', href: `${MAIN}/about` },
    { label: 'Contact / Get a Quote', href: `${MAIN}/contact-get-a-quote` },
  ],
};
