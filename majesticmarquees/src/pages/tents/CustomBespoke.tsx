import SEO from '../../components/SEO';
import Placeholder from '../../components/Placeholder';
import Carousel from '../../components/Carousel';

export default function CustomBespoke() {
  return (
    <>
      <SEO title="Custom / Bespoke" />

      {/* Hero — left-aligned title overlay on background image */}
      <section className="relative">
        <div className="placeholder-img w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
                A Truly unique experience
              </h1>
              <p className="mt-3 font-display italic text-base sm:text-lg text-white/90">
                Our made to measure tents are exceptional in every detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-x text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Custom - Bespoke - Made to Measure
          </h2>
          <p className="mt-6 text-forest-700/85 leading-relaxed">
            The Canopy will be custom designed for you and made exactly to the 3D measurements of
            your location.
          </p>
        </div>
      </section>

      {/* Image gallery carousel */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x">
          <Carousel options={{ slidesToScroll: 1 }}>
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                <Placeholder label={`Bespoke ${i + 1}`} ratio="aspect-[4/3]" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 3D Architecture + Quote Card */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl">3D Architecture</h2>
            <p className="mt-6 text-forest-700/85 leading-relaxed">
              From Carports to exclusively engineered canopies for hospitality or municipal
              buildings.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              We create a completely 3D engineered canopy made to the exact measurements of the
              location.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              To create this 3D architecture we can make use of several different cloth types to
              serve the need of the specific location.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              Get in touch or book a discovery call to get more information regarding this product.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              We exclusively use high-quality roofs that are manufactured by QTents (
              <a
                href="https://www.qtents.com"
                className="text-tan-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.qtents.com
              </a>
              ), a top-level manufacturer renowned for their expertise and innovation, hailing from
              the Netherlands.
            </p>
          </div>

          {/* Right: quote form card with background image + dark overlay */}
          <div
            id="contact-form"
            className="relative overflow-hidden border border-forest-800/15"
          >
            {/* Background image placeholder */}
            <div className="placeholder-img absolute inset-0" aria-hidden="true">
              <span className="sr-only">Background</span>
            </div>
            {/* Overlay tint matching PDF (sandy/green wash) */}
            <div className="absolute inset-0 bg-forest-800/55" aria-hidden="true" />

            <div className="relative p-8 sm:p-12">
              <h2 className="text-4xl sm:text-5xl text-cream-50 font-display leading-tight">
                Request Your<br />Personalized Quote
              </h2>
              <p className="mt-6 text-cream-50/90 leading-relaxed max-w-md">
                If you’re excited to learn more about our innovative 3D architecture, we can’t wait
                to connect with you! Fill out the form below, and let’s embark on this inspiring
                journey together.
              </p>

              <form
                className="mt-8 space-y-4 max-w-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className="w-full bg-cream-50 border-0 rounded-md px-5 py-2.5 text-sm text-forest-800 placeholder:text-forest-700/50 focus:outline-none focus:ring-2 focus:ring-tan-500"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Email</span>
                  <div className="relative">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-700/50"
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <rect x="3" y="5" width="18" height="14" rx="1" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your best email address*"
                      required
                      className="w-full bg-cream-50 border-0 rounded-md pl-10 pr-5 py-2.5 text-sm text-forest-800 placeholder:text-forest-700/50 focus:outline-none focus:ring-2 focus:ring-tan-500"
                    />
                  </div>
                </label>

                <label className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    className="mt-0.5 w-4 h-4 accent-tan-500"
                  />
                  <span className="text-cream-50/90 text-xs sm:text-sm">
                    By submitting this form, you agree to our Terms and Conditions.
                  </span>
                </label>

                <div className="pt-3">
                  <button type="submit" className="btn-primary px-10">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
