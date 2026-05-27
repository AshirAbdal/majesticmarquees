import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import Carousel from '../components/Carousel';

const cards = [
  { title: 'Elegant Marquee Hire (Indonesia)', text: 'Transform your event with exquisite marquees crafted for elegance and comfort. We help you create an enchanting atmosphere tailored to your vision.', cta: '— Coming Soon —', to: '#' },
  { title: 'Exclusive Sales (SE-Asia / Oceania)', text: 'We import the best quality tents from top manufacturers worldwide for seamless service and short delivery times.', cta: 'Get in Touch', to: '/our-tents' },
  { title: 'Superior Service', text: 'From replacement materials to first-time setup training, we strive to give you the best service we can offer.', cta: 'See Our Work', to: '/gallery' },
  { title: 'Custom Catering Options (Indonesia)', text: 'Delight your guests with tailored catering that blends elegance and flavor, crafted with fresh, seasonal ingredients.', cta: '— Coming Soon —', to: '#' },
  { title: 'Exclusive Venue Partnerships (Indonesia)', text: 'We collaborate with stunning venues that embody luxury, ensuring your event is perfectly set in an enchanting environment.', cta: '— Coming Soon —', to: '#' },
  { title: 'Tailored Event Support', text: 'From start to finish we provide personalized support, ensuring your event is flawless and filled with memorable moments.', cta: 'Contact Us', to: '/contact-get-a-quote' },
];

const tentImages = Array.from({ length: 12 });

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Luxury marquee and stretch tent hire." />

      {/* Hero */}
      <section className="relative bg-black">
        <div className="placeholder-img w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
          <div className="bg-cream-50 px-6 sm:px-12 py-12 sm:py-16 text-center max-w-2xl w-full shadow-xl">
            <p className="eyebrow mb-4">Elevate Your Experience</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Transforming Outdoor Events Into Lasting Memories
            </h1>
            <p className="mt-6 text-forest-700/80 leading-relaxed">
              Craft unforgettable moments in nature’s embrace. Our designs harmonize elegance and
              comfort, creating inviting atmospheres that breathe life into every celebration.
              Experience the art of outdoor luxury, where every detail speaks to our commitment to
              quality and craftsmanship. Let us help you add warmth and sophistication to your
              special occasion.
            </p>
            <div className="mt-8">
              <Link to="/our-tents" className="btn-primary">Explore Our Tents</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: overlapping image collage */}
          <div className="relative h-[520px] sm:h-[600px]">
            {/* Image 1 — bottom left, landscape-ish */}
            <div className="absolute left-0 bottom-0 w-[58%] aspect-[4/5] placeholder-img flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Story Image 1</span>
            </div>
            {/* Image 2 — top right, overlapping above */}
            <div className="absolute right-0 top-0 w-[50%] aspect-[3/4] placeholder-img flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Story Image 2</span>
            </div>
          </div>

          {/* Right: text + button */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">Our Story</h1>
            <p className="mt-8 text-forest-700/80 leading-relaxed">
              Majestic Marquees &amp; Tents specializes in creating luxurious outdoor spaces that
              shine with elegance. We partnered with manufacturers that offer the highest
              craftsmanship combined with a deep understanding of nature to offer products that
              transform every event into an extraordinary experience. From intimate weddings to
              grand celebrations, we prioritize a serene and exceptional service, tailoring each
              detail to our clients’ vision.
            </p>
            <p className="mt-4 text-forest-700/80 leading-relaxed">
              With a focus on quality and atmosphere, we seamlessly blend nature with sophisticated
              design, ensuring that your event is not just memorable, but truly enchanting.
            </p>
            <blockquote className="group mt-8 border-l-[8px] hover:border-l-[16px] border-tan-500 pl-6 italic text-forest-700 transition-[border-left-width] duration-300 ease-out">
              “Exceptional service, breathtaking environments — this is where luxury and nature
              harmoniously meet. Each occasion is enhanced by the grace and craftsmanship we
              provide, leaving a lasting impression on all who attend.”
              <div className="mt-3 not-italic text-sm uppercase tracking-wider text-forest-500">— Emily Carter</div>
            </blockquote>
            <div className="mt-8">
              <Link to="/contact-get-a-quote#contact-form" className="btn-primary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature card grid */}
      <section className="relative bg-[#e8e2d4]">
        {/* Background image */}
        <div className="absolute inset-0 placeholder-img flex items-center justify-center">
          <span className="text-forest-700/30 text-sm uppercase tracking-wider">Field Background</span>
        </div>
        {/* Cards overlay */}
        <div className="relative container-x py-24 sm:py-32 lg:py-40">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-tan-500/50 max-w-[1280px] mx-auto">
            {cards.map((c) => (
              <article
                key={c.title}
                className="bg-cream-100 px-5 py-5 lg:px-6 lg:py-6 flex flex-col items-center text-center min-h-[220px]"
              >
                {/* Star icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-tan-500 mb-5"
                  aria-hidden="true"
                >
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold text-forest-800 leading-snug">{c.title}</h3>
                <p className="mt-4 text-sm sm:text-base text-forest-700/80 leading-relaxed flex-1">{c.text}</p>
                <Link to={c.to} className="btn-outline mt-8 text-sm">
                  {c.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Our Tents carousel */}
      <section className="section bg-[#d7c8a5] pb-6 sm:pb-8">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="eyebrow mb-2">Explore Elegance</p>
            <h2 className="text-4xl sm:text-5xl">Our Tents</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <Carousel options={{ slidesToScroll: 1, loop: true }} showArrows={false}>
              {tentImages.map((_, i) => (
                <div key={i} className="shrink-0 grow-0 basis-full px-2">
                  <div className="placeholder-img w-full aspect-[16/10] min-h-[420px] sm:min-h-[520px] lg:min-h-[620px] flex items-center justify-center">
                    <span className="text-forest-700/40 text-sm uppercase tracking-wider">{`Tent ${i + 1}`}</span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="text-center mt-10">
            <Link to="/our-tents" className="btn-outline">View All Tents</Link>
          </div>
        </div>
      </section>

      <QuoteForm
        id="tailored-quote"
        compact
        eyebrow=""
        title="Request a Tailored Quote Today"
        subtitle="Discover how our exquisite outdoor settings can elevate your next event. Let us create an experience where elegance meets nature’s beauty."
        submitLabel="Request Quote"
      />
    </>
  );
}
