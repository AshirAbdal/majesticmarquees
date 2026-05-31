import Link from 'next/link';
import Placeholder from '../components/Placeholder';
import Testimonials from '../components/Testimonials';

export default function About() {
  return (
    <>

      {/* Hero with overlaid text on background image */}
      <section className="relative">
        <div className="placeholder-img w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 bg-cream-50/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-forest-800 leading-tight">
              Discover our Elegance
            </h1>
            <p className="mt-8 text-forest-800/90 leading-relaxed max-w-3xl mx-auto">
              Explore the art of luxury outdoor events, where every detail is crafted to perfection.
              Our services bring together nature&rsquo;s beauty and refined design, creating
              unforgettable experiences that breathe elegance and warmth. Let us help you create a
              setting that reflects your vision and embodies quality.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl">Our Craft, Your Celebration</h2>
            <p className="mt-6 text-forest-700/80 leading-relaxed">
              Majestic Marquees &amp; Tents began with a simple vision: to transform outdoor spaces
              into extraordinary experiences. Our commitment to craftsmanship and elegance has
              guided us from our early days to now. Each event we curate reflects the beauty of
              nature intertwined with moments worth celebrating, ensuring that our clients receive
              not only the highest quality products but also the joy of personalized service.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">Tailored Outdoor Experiences</h2>
            <p className="mt-6 text-forest-700/80 leading-relaxed">
              We believe every event deserves its own unique touch. From the initial design to the
              final installation, our team meticulously crafts an atmosphere that not only reflects
              our clients’ vision but also harmonizes with the natural surroundings. With each
              bespoke marquee we create a space where elegance meets comfort.
            </p>
          </div>
        </div>
      </section>

      <Testimonials heading="What Our Clients Say" subheading="Trusted voices share their experiences with us." bgClassName="bg-[#d7c7a5]" />

      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#f5f1e8] border border-forest-800/20 p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <Placeholder label="" ratio="aspect-square" className="!w-28 !h-28 rounded-full bg-black" />
              <h2 className="mt-4 text-2xl sm:text-3xl font-display">Vincent Klinkenberg</h2>
            </div>
            <div className="mt-5 space-y-3 text-sm text-forest-700/80 leading-relaxed">
              <p>Hi, I am Vincent, the owner and founder of Majestic Marquees and Tents.</p>
              <p>I created this company after being the Head of Sales and Head of Business developement at QTents for 2,5 years.</p>
              <p>
                I noticed that to offer <strong className="text-forest-800">Superior Tents</strong> accompanied by{' '}
                <strong className="text-forest-800">Exceptional Service</strong> in SE-Asia and Oceania, the only logical solution was to re-locate from Europe to a central point in SE-Asia.
              </p>
              <p>This is why our current hub is located in Indonesia</p>
              <p>I am looking forward to meet you and, as our team continue to grows, to keep to our promise and deliver you.</p>
              <p className="italic">Superior Tents &amp; Exceptional Service</p>
            </div>
          </div>

          <div className="bg-[#f5f1e8] border border-forest-800/20 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl sm:text-3xl font-display">Let&rsquo;s Create Your Perfect Outdoor Event</h2>
            <p className="mt-5 text-sm text-forest-700/80 leading-relaxed max-w-md">
              Connect with us to explore how our elegant solutions can elevate your gathering into a serene experience.
            </p>
            <Link href="/contact-get-a-quote#contact-form" className="btn-primary mt-6">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
