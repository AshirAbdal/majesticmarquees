const BLOG = (import.meta.env.VITE_BLOG_URL as string | undefined) || 'https://blog.majesticmarquees.com/';

export const site = {
  name: 'Majestic Marquees & Tents',
  tagline: 'Elevate Your Experience',
  email: 'hello@majesticmarquees.com',
  blogUrl: BLOG,
  nav: [
    { label: 'Majestic Marquees', to: '/' },
    {
      label: 'Our Tents',
      to: '/our-tents',
      children: [
        { label: 'Stretch / Nomadic / Bedouin', to: '/our-tents/stretch-nomadic-bedouin' },
        { label: 'Sailcloth / Silhouette', to: '/our-tents/sailcloth-silhouette' },
        { label: 'Custom / Bespoke', to: '/our-tents/custom-bespoke' },
      ],
    },
    { label: 'Gallery', to: '/gallery' },
    { label: 'FAQ', to: '/faq' },
    { label: 'About', to: '/about' },
    { label: 'Contact / Get a Quote', to: '/contact-get-a-quote' },
  ],
};
