import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import Accordion from '../components/Accordion';

const galleryImages = Array.from({ length: 8 }, (_, i) => i + 1);

const steps = [
  {
    title: 'Step 1: Consultation',
    text: 'We start with a personal consultation to understand your vision. Your unique ideas and preferences shape the planning process, ensuring every detail reflects your style.',
  },
  {
    title: 'Step 2: Design & Planning',
    text: "Next, our experts craft a tailored design that harmonizes with your event's surroundings. From layout to decor, every element is considered for a flawless atmosphere.",
  },
  {
    title: 'Step 3: Execution',
    text: 'Finally, our dedicated team brings your vision to life, overseeing all aspects of setup and execution. You can relax and enjoy your event, knowing we\u2019re there to ensure everything runs smoothly.',
  },
];

const faqs = [
  { q: 'What services do you provide?', a: 'We specialize in luxury outdoor marquee and stretch tent hire and sales, bespoke 3D-engineered canopies, and full styling support across South-East Asia and Oceania.' },
  { q: 'How can I request a quote?', a: 'Share your event details through our contact form and our team will respond with a tailored proposal within 1\u20132 business days.' },
  { q: 'Do you offer customized services?', a: 'Yes \u2014 every event is unique. We offer bespoke design, custom canopies, and tailored styling to match your vision.' },
  { q: 'What locations do you serve?', a: 'We are headquartered in Bali and operate across South-East Asia and Oceania. Reach out and we will confirm availability for your venue.' },
  { q: 'What is your cancellation policy?', a: 'Cancellation terms depend on event size and timing. Full details are shared in your booking agreement \u2014 please contact us for specifics.' },
];

export default function Gallery() {
  return (
    <>
      <SEO title="Gallery" />

      {/* Hero */}
      <section className="relative">
        <div className="placeholder-img w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x">
            <div className="max-w-2xl text-white">
              <p className="font-display italic text-base sm:text-lg">Crafting Unforgettable Moments</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
                Elegance Meets Nature&rsquo;s Beauty
              </h1>
              <p className="mt-6 text-white/95 leading-relaxed max-w-xl">
                Discover our exquisite outdoor setups that transform any celebration into a
                breathtaking experience. Allow nature&rsquo;s charm to enhance your special occasion.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="#event-showcase" className="btn-primary">View Gallery</Link>
                <Link
                  to="/contact-get-a-quote#contact-form"
                  className="btn border border-white text-white hover:bg-white hover:text-forest-800 rounded-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Showcase */}
      <section id="event-showcase" className="section bg-[#f5f1e8]">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="eyebrow mb-2">Moments in Nature</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-forest-800">Event Showcase</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {galleryImages.map((n) => (
              <div
                key={n}
                className="placeholder-img aspect-[4/5] w-full flex items-center justify-center"
              >
                <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image {n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        heading="What Our Clients Say"
        subheading="See why clients trust us for their most memorable events."
      />

      {/* Let's Create Your Perfect Event Together */}
      <section className="bg-[#d7c7a5] pt-0 pb-20 sm:pb-28">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-forest-800">
            Let&rsquo;s Create Your Perfect Event Together
          </h2>
          <div className="mt-8 mb-12">
            <Link to="/contact-get-a-quote#contact-form" className="btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="section bg-[#f5f1e8]">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12 mb-20">
          {/* Left side intentionally left empty / image placeholder space per PDF */}
          <div className="hidden lg:block">
            <div className="placeholder-img w-full aspect-[4/3.3] flex items-center justify-center">
              <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image</span>
            </div>
          </div>

          <ol className="space-y-12">
            {steps.map((s) => (
              <li key={s.title} className="flex gap-5">
                <span className="text-tan-500 shrink-0 mt-1" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18l-6.2 4 1.7-7.2L2 10l7.1-1.1L12 2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl text-forest-800">{s.title}</h3>
                  <p className="mt-3 text-forest-700/90 leading-relaxed max-w-prose">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#f5f1e8] pt-0">
        <div className="container-x">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-none text-forest-800">
              Your Questions Answered
            </h2>
            <p className="mt-4 text-base sm:text-lg text-forest-800/80 font-display">
              Explore our insights and clarifications about our services.
            </p>
          </div>
          <div className="border border-forest-800/40 p-6 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="placeholder-img w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/3] flex items-center justify-center">
                <span className="text-forest-700/40 text-xs uppercase tracking-wider">Image</span>
              </div>
              <Accordion items={faqs} variant="lined" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
