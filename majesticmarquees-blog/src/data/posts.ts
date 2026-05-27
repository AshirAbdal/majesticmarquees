export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  time: string; // e.g. '19:44'
  author: string;
  category: string;
  cover: string;
  readingMinutes: number;
  // Plain HTML body. Replace with MDX or a CMS later.
  bodyHtml: string;
};

export const posts: Post[] = [
  {
    slug: 'maximizing-roi-with-premium-event-structures-in-australia-and-new-zealand',
    title: 'Maximizing ROI with Premium Event Structures in Australia and New Zealand',
    excerpt:
      'Operating a professional marquee rental business in Australia and New Zealand is no longer just about supplying temporary shelter. The market demand for high-end corporate events is reshaping how operators invest, price and scale.',
    date: '2026-03-12',
    time: '19:44',
    author: 'Ravee',
    category: 'Industry',
    cover:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80',
    readingMinutes: 7,
    bodyHtml: `
      <p>Operating a professional marquee rental business in Australia and New Zealand is no longer just about supplying temporary shelter. The market demand for high-end corporate events, destination weddings and government activations has reshaped how operators invest, price and scale their inventory.</p>
      <h2>Why premium structures pay back faster</h2>
      <p>A sailcloth peak, an engineered clearspan or a custom stretch installation commands a daily rate two to four times that of a comparable standard frame tent — and the bookings clear earlier in the season.</p>
      <h2>Where the demand is</h2>
      <ul>
        <li>Vineyard and winery weddings in Margaret River, Hunter Valley and Marlborough.</li>
        <li>Corporate field activations in Sydney, Melbourne and Auckland.</li>
        <li>Government and sporting hospitality across both countries.</li>
      </ul>
      <h2>Operational discipline</h2>
      <p>ROI on premium kit is only realised when crews, logistics and storage are built around the product. Treat each structure as a long-lived asset, not a single-job purchase.</p>
      <blockquote>The operators winning the next decade are the ones who treat the marquee as architecture, not equipment.</blockquote>
    `,
  },
  {
    slug: 'choosing-the-right-tent-for-your-event',
    title: 'Choosing the Right Tent for Your Event',
    excerpt:
      'Stretch, sailcloth or bespoke — a practical guide to picking the structure that suits your venue, guest count and style.',
    date: '2026-02-18',
    time: '10:20',
    author: 'Majestic Marquees Studio',
    category: 'Planning',
    cover:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=80',
    readingMinutes: 6,
    bodyHtml: `
      <p>Selecting a tent is one of the most consequential decisions in the lifespan of an event. The structure shapes flow, ambience, lighting and the way guests remember the evening.</p>
      <h2>Stretch tents</h2>
      <p>Free-form, sculptural and at home over uneven terrain. Stretch tents work beautifully on beaches, in gardens and over pools.</p>
      <h2>Sailcloth & silhouette</h2>
      <p>Translucent peaks that glow at dusk. Sailcloth is our recommendation for romantic, candle-lit dinners.</p>
      <h2>Custom / bespoke</h2>
      <p>When the brief calls for something specific, we design and fabricate to suit.</p>
      <blockquote>The best tent is the one that disappears into the experience.</blockquote>
    `,
  },
  {
    slug: 'planning-a-bali-beach-wedding',
    title: 'Planning a Bali Beach Wedding: A Site-Visit Checklist',
    excerpt:
      'Wind direction, tide tables, access roads and power — the on-the-ground details that make or break a beachfront marquee.',
    date: '2026-01-28',
    time: '14:05',
    author: 'Production Team',
    category: 'Weddings',
    cover:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80',
    readingMinutes: 8,
    bodyHtml: `
      <p>A beach can look idyllic in photographs and still be hostile to a tent installation. Use this checklist on every site visit before a final quote goes out.</p>
      <h3>1. Wind & exposure</h3>
      <p>Identify the prevailing wind direction at the time of year of the event. Orient the long axis of the structure into the wind.</p>
      <h3>2. Tides and surface</h3>
      <p>Pull the tide tables for the event date and pull the structure back at least double the historical surge.</p>
      <h3>3. Access</h3>
      <p>Can our trucks reach the load-in point? If not, plan for hand-carry and add labour to the quote up front.</p>
      <h3>4. Power</h3>
      <p>Generator placement matters — both for noise during dinner and exhaust direction during service.</p>
    `,
  },
  {
    slug: 'lighting-a-marquee-after-dark',
    title: 'Lighting a Marquee After Dark',
    excerpt:
      'A layered lighting plan — ambient, task and feature — turns a daytime structure into an evening room.',
    date: '2025-12-15',
    time: '17:30',
    author: 'Design Studio',
    category: 'Design',
    cover:
      'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=2000&q=80',
    readingMinutes: 5,
    bodyHtml: `
      <p>The single biggest upgrade you can make to a marquee, after the structure itself, is the lighting plan. Layer three sources for depth.</p>
      <h2>Ambient</h2>
      <p>Warm string lights or paper lanterns spanning the ceiling. The base layer that establishes mood.</p>
      <h2>Task</h2>
      <p>Targeted light on the bar, the dance floor, the service stations.</p>
      <h2>Feature</h2>
      <p>Pin spots on centrepieces, uplights on poles, a glow along the perimeter to read the shape of the structure from outside.</p>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => {
    const ad = `${a.date}T${a.time}`;
    const bd = `${b.date}T${b.time}`;
    return ad < bd ? 1 : -1;
  });
}
