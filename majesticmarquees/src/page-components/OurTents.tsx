import Link from 'next/link';
import PageHero from '../components/PageHero';
import Carousel from '../components/Carousel';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import Accordion from '../components/Accordion';

const HERO_IMG =
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80';

const CAROUSEL_IMGS = [
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1467521261851-d8fc001c42a4?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=75',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=75',
];

const tents = [
  {
    name: 'Stretch / Nomadic / Bedouin',
    to: '/our-tents/stretch-nomadic-bedouin',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=75',
  },
  {
    name: 'Sailcloth / Silhouette',
    to: '/our-tents/sailcloth-silhouette',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=75',
  },
  {
    name: 'Custom / Made to Measure',
    to: '/our-tents/custom-bespoke',
    img: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=900&q=75',
  },
];

const steps = [
  { n: '01', title: 'Timeless Design', text: 'Our tents are crafted to provide an unforgettable ambiance that seamlessly complements every event theme.' },
  { n: '02', title: 'Premium Materials', text: 'Sustainable and luxurious fabrics ensure durability and style, creating a serene space for your gatherings.' },
  { n: '03', title: 'Exceptional Service', text: 'Our calm, professional team is dedicated to seamless execution so you can focus on what matters.' },
];

const faqs = [
  { q: 'What sizes of tents do you offer?', a: 'From 4.5 m stretch units to 20 m sailcloth structures with double rows of king poles, plus fully bespoke designs.' },
  { q: 'Can you customize the setup?', a: 'Yes, every event is tailored. We adapt configuration, accessories and styling to your venue and guest count.' },
  { q: 'What is included in the rental?', a: 'Setup, takedown and the structure itself. Lighting, walls and flooring are available as add-ons.' },
  { q: 'Is there a weather guarantee?', a: 'Our tents are engineered for variable weather. We pre-assess conditions and recommend appropriate configurations.' },
  { q: 'How far in advance should I book?', a: 'For peak season we recommend 3–6 months. Smaller events can often be accommodated on shorter timelines.' },
];

export default function OurTents() {
  return (
    <>

      <PageHero
        bgImage={HERO_IMG}
        eyebrow="Immerse yourself in the luxury of nature's serene beauty."
        title="Elevate Your Event Experience"
      />

      <section className="section pb-4">
        <div className="container-x text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl">Explore Our Tent Styles</h2>
          <p className="mt-4 text-lg text-forest-700/80 italic font-display">
            Discover elegant tents designed for unforgettable moments.
          </p>
        </div>
      </section>

      <section className="section pt-8 pb-16">
        <div className="container-x">
          <Carousel options={{ slidesToScroll: 1 }}>
            {CAROUSEL_IMGS.map((src, i) => (
              <div key={i} className="shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={`Tent showcase ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl">Tent Styles</h2>
            <p className="mt-6 text-forest-700/80 leading-relaxed">
              We currently offer three distinct types of tents that cater to a variety of needs
              and preferences. Click on a tent below to explore detailed information.
            </p>
            <ul className="mt-6 space-y-4 text-forest-700/80 leading-relaxed">
              <li>
                <Link href="/our-tents/stretch-nomadic-bedouin" className="text-tan-500 hover:text-tan-600 font-medium">Stretch / Nomadic / Bedouin</Link>
                <span>A playful option that combines traditional craftsmanship with modern design for an unforgettable experience.</span>
              </li>
              <li>
                <Link href="/our-tents/sailcloth-silhouette" className="text-tan-500 hover:text-tan-600 font-medium">Sailcloth / Silhouette</Link>
                <span>A unique and elegant choice designed to bring sophistication and style to any outdoor event.</span>
              </li>
              <li>
                <Link href="/our-tents/custom-bespoke" className="text-tan-500 hover:text-tan-600 font-medium">Custom / Bespoke / Made to Measure</Link>
                <span>We ensure that we can meet your specific requirements and vision for your event, venue or end-user.</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-forest-500">
              For all tents we exclusively use high-quality roofs manufactured by{' '}
              <a href="https://www.qtents.com" target="_blank" rel="noopener noreferrer" className="text-tan-500 hover:text-tan-600">QTents</a>
              {' '}a top-level Netherlands-based manufacturer renowned for expertise and innovation.
            </p>
          </div>

          <div className="grid gap-6">
            {tents.map((t) => (
              <Link key={t.to} href={t.to} className="group block bg-white border border-cream-200 hover:border-tan-500 transition-colors overflow-hidden">
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-xl">{t.name}</h3>
                  <span className="text-tan-500 group-hover:translate-x-1 transition-transform">&#8594;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow mb-2">Elevate Your Experience</p>
            <h2 className="text-4xl sm:text-5xl">Discover the Art of Exquisite Tents for Your Event</h2>
            <p className="mt-4 text-forest-700/80 leading-relaxed">
              Our tents blend natural elegance with top-tier craftsmanship. Experience the warmth
              of a well-curated atmosphere created by distinguished designs, perfect for any
              high-end occasion.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="bg-cream-50 p-8 border border-cream-200">
                <div className="font-display text-5xl text-tan-500">{s.n}</div>
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-forest-700/80 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials heading="What Our Clients Say" subheading="See why clients trust us for their most memorable events." />

      <QuoteForm
        id="contact-form"
        eyebrow=""
        title="Request Your Personalized Quote"
        subtitle="We would love to learn more about your upcoming event. Fill out the form below, and let's start the conversation together."
        submitLabel="Request Quote"
        bgImage="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-[#f5f1e8]">
        <div className="container-x">
          <div className="mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-none text-forest-800">Common Questions</h2>
            <p className="mt-4 text-lg sm:text-xl font-display text-forest-800/90 leading-snug">
              Your queries about tent rentals answered here.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-[#eee9df] p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl leading-tight">Need further assistance?</h3>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-forest-700/90">
                We understand that planning an event comes with many questions. Whether it's about
                our tents, setup services, or special requests, we're here to help. Reach out with
                any questions you might have, and we'll ensure you feel confident in your choices.
              </p>
              <Link href="/contact-get-a-quote#contact-form" className="btn-primary mt-8 inline-block">Get in Touch</Link>
            </div>
            <Accordion items={faqs} variant="lined" />
          </div>
        </div>
      </section>
    </>
  );
}
