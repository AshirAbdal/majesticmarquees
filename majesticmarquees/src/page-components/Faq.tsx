import Link from 'next/link';
import Accordion from '../components/Accordion';

const faqs = [
  { q: 'What services do you provide?', a: 'Marquee and stretch tent hire and sales, bespoke 3D-engineered canopies, plus full setup and styling support across South-East Asia and Oceania.' },
  { q: 'Can you assist with event planning?', a: 'Yes, from layout planning to vendor coordination, our team supports your event end to end with calm, professional service.' },
  { q: 'What is your booking process?', a: 'Share your event details, we send a tailored proposal, you confirm with a deposit to secure the date, and we handle the rest.' },
  { q: 'What are your payment options?', a: 'A deposit secures the date with the balance due closer to your event. Custom payment schedules can be arranged on request.' },
  { q: 'What areas do you service?', a: 'Headquartered in Bali, we operate across South-East Asia and Oceania. Reach out about your venue and we will confirm availability.' },
];

export default function Faq() {
  return (
    <>

      {/* Hero with overlaid text on background image */}
      <section className="relative">
        <div className="placeholder-img w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-white/90 text-sm uppercase tracking-widest font-display">
              Explore Our Expertise
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mt-4">
              Elevate Your Outdoor Experience
            </h1>
            <p className="mt-8 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Discover answers to your questions and explore how we transform outdoor events into
              extraordinary experiences. Our expertise and commitment to elegance ensure that every
              detail is meticulously crafted, inviting you to imagine the possibilities. Let's
              create something remarkable together.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact-get-a-quote#contact-form" className="btn-primary">Get Started</Link>
              <Link href="/our-tents" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f5f1e8]">
        <div className="container-x">
          <div className="mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-none text-forest-800">
              Your Questions Answered
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-display text-forest-800/90 leading-snug">
              Frequently Asked Questions about Our Services and Offerings
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-[#eee9df] p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl leading-tight">Still have questions for us?</h3>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-forest-700/90">
                We understand that planning your next outdoor event can raise various questions.
                We have compiled common inquiries from valued clients to help you navigate your
                choices seamlessly. If you still have questions, please reach out.
              </p>
              <Link href="/contact-get-a-quote#contact-form" className="btn-primary mt-8 inline-block">Get in Touch</Link>
            </div>
            <Accordion items={faqs} variant="lined" />
          </div>
        </div>
      </section>

      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[460px] sm:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
              alt="Decorated marquee at night"
              className="absolute left-[24%] top-0 w-[24%] h-[22%] object-cover"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80"
              alt="Large elegant outdoor marquee"
              className="absolute right-0 top-[4%] w-[46%] h-[46%] object-cover"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
              alt="Evening tent event setup"
              className="absolute left-0 bottom-0 w-[40%] h-[48%] object-cover"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80"
              alt="Small marquee exterior"
              className="absolute left-[46%] bottom-[2%] w-[24%] h-[18%] object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest-800">
              Ready to Elevate Your Event Experience?
            </h2>
            <p className="mt-6 text-forest-700/90 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Let&rsquo;s discuss how we can create an unforgettable atmosphere tailored to your vision.
              Reach out today for personalized support.
            </p>
            <div className="mt-10">
              <Link href="/contact-get-a-quote#contact-form" className="btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
