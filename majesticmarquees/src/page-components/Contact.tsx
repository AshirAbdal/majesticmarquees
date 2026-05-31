'use client';
import Link from 'next/link';
import Placeholder from '../components/Placeholder';
import Testimonials from '../components/Testimonials';

const contactTestimonials = [
  { quote: 'The professionalism and attention to detail were exceptional. Every aspect of our event was handled with elegance and care.', name: 'Emily Johnson', role: 'Event Planner, Luxe Events' },
  { quote: 'A seamless experience from beginning to end! Their craftsmanship elevated our outdoor gathering to something truly memorable.', name: 'Marcus Lee', role: 'Venue Manager, Grand Hall' },
  { quote: 'They understood our vision and brought it to life beautifully. The service was calm yet efficient, making everything flow smoothly.', name: 'Sophie Martinez', role: 'Catering Director, Taste of Nature' },
  { quote: 'Every detail was perfect. The aesthetic fit our theme perfectly, and our guests were captivated by the atmosphere created by the setup.', name: 'John Davis', role: 'Creative Director, Luxe Weddings' },
];

export default function Contact() {
  return (
    <>

      {/* Hero with overlaid text + buttons */}
      <section className="relative">
        <div className="placeholder-img w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto text-cream-50">
            <p className="font-display italic text-lg sm:text-xl mb-6">Experience Elevated Luxury</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-cream-50 leading-tight">
              Indulge in Exceptional Outdoor Celebrations
            </h1>
            <p className="mt-8 text-cream-50/90 leading-relaxed max-w-2xl mx-auto">
              Transform your events into extraordinary experiences. Our bespoke outdoor setups blend
              craftsmanship with nature&rsquo;s beauty, creating unforgettable moments under the stars.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/our-tents" className="btn-primary">Discover More</Link>
              <a
                href="#contact-form"
                className="btn border border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-forest-800 rounded-sm"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-2">Connect With Us</p>
            <h2 className="text-4xl sm:text-5xl">Get in Touch</h2>
            <p className="mt-6 text-forest-700/80 leading-relaxed">
              We’re here to assist you in creating unforgettable moments. Reach out to discuss
              your vision, and let’s explore how we can bring it to life together.
            </p>
            <ul className="mt-8 space-y-4 text-forest-700">
              <li>
                <a href="https://api.leadconnectorhq.com/widget/booking/zDy1DyutNxQSN011ks7g" className="hover:text-tan-500">
                  📅 Book a 30 minute discovery meeting
                </a>
              </li>
              <li>
                <a href="mailto:Hello@MajesticMarquees.com" className="hover:text-tan-500">
                  ✉️ Hello@MajesticMarquees.com
                </a>
              </li>
              <li>
                <span>📍 Jalan Raya Kuta 32, Desa/Kelurahan Kuta, Kec. Kuta, Kab. Badung, Provinsi Bali 80361</span>
              </li>
              <li>
                <a href="https://wa.me/6282342464312" className="hover:text-tan-500">
                  💬 Message us on WhatsApp
                </a>
              </li>
            </ul>
            <ul className="mt-8 flex flex-wrap gap-4 text-sm text-forest-700">
              <li><a href="https://www.facebook.com/MajesticMarqueesAndTents/" className="hover:text-tan-500">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/majesticmarqueesandtents/" className="hover:text-tan-500">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@MajesticMarqueesAndTents" className="hover:text-tan-500">YouTube</a></li>
              <li><a href="https://www.instagram.com/ptmajesticmarqueesandtents" className="hover:text-tan-500">Instagram</a></li>
              <li><a href="https://g.page/r/CaQq7Kj2DzyQEAE/review" className="hover:text-tan-500">Google Reviews</a></li>
            </ul>
          </div>
          <Placeholder label="Map" ratio="aspect-[4/3]" />
        </div>
      </section>

      <section id="contact-form" className="section bg-[#f5f1e8]">
        <div className="container-x max-w-xl mx-auto">
          <div className="border border-forest-800/30 bg-[#f5f1e8] px-14 sm:px-24 py-20 sm:py-28">
            <h2 className="text-3xl sm:text-4xl text-center font-display">Get in Touch</h2>
            <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <label className="block">
              <span className="text-sm font-medium text-forest-800">Your Name <span className="text-tan-500">*</span></span>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full bg-[#f5f1e8] border border-forest-800/30 rounded-md px-4 py-2.5 text-sm text-forest-800 focus:outline-none focus:border-tan-500"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-forest-800">Your Email <span className="text-tan-500">*</span></span>
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-700/50" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="5" width="18" height="14" rx="1" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#f5f1e8] border border-forest-800/30 rounded-md pl-10 pr-4 py-2.5 text-sm text-forest-800 focus:outline-none focus:border-tan-500"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-forest-800">Your Message <span className="text-tan-500">*</span></span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full bg-[#f5f1e8] border border-forest-800/30 rounded-md px-4 py-2.5 text-sm text-forest-800 focus:outline-none focus:border-tan-500 resize-none"
              />
            </label>

            <button type="submit" className="btn-primary w-full">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <Testimonials
        heading="What Our Clients Say"
        subheading="Our clients appreciate our approach, discover their thoughts!"
        items={contactTestimonials}
      />

      {/* Let's Bring Your Vision to Life */}
      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: scattered image collage */}
          <div className="relative h-[520px] sm:h-[600px]">
            <div className="absolute left-[15%] top-0 w-[42%] aspect-[4/3] placeholder-img flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image 1</span>
            </div>
            <div className="absolute right-0 top-[12%] w-[55%] aspect-[4/3] placeholder-img flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image 2</span>
            </div>
            <div className="absolute left-0 bottom-0 w-[48%] aspect-[1/1] placeholder-img flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image 3</span>
            </div>
            <div className="absolute right-[10%] bottom-[5%] w-[35%] aspect-[4/3] placeholder-img flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image 4</span>
            </div>
          </div>

          {/* Right: heading + paragraph + button */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display">Let&rsquo;s Bring Your Vision to Life</h2>
            <p className="mt-8 text-forest-700/80 leading-relaxed max-w-prose">
              Now is the perfect moment to connect with us and discover how we make your event
              unforgettable.
            </p>
            <div className="mt-10">
              <Link href="#contact-form" className="btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
