import Placeholder from './Placeholder';

type Field = { name: string; label: string; type?: string; textarea?: boolean };

const defaultFields: Field[] = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'message', label: 'Message', textarea: true },
];

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  fields?: Field[];
  submitLabel?: string;
  id?: string;
  /** Compact centered variant: just name + email + agreement checkbox + button on a tan background. */
  compact?: boolean;
  /** Full-bleed background image variant matching live site screenshot. */
  bgImage?: string;
};

export default function QuoteForm({
  eyebrow = 'Get a Quote',
  title = 'Personalized Quote',
  subtitle = 'Share a few details about your event and our team will respond with a tailored proposal.',
  fields = defaultFields,
  submitLabel = 'Send Inquiry',
  id,
  compact = false,
  bgImage,
}: Props) {
  if (bgImage) {
    return (
      <section
        id={id}
        className="relative py-20 sm:py-28"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative z-10 container-x max-w-5xl mx-auto">
          {/* heading block — left aligned */}
          <div className="mb-10">
            {eyebrow ? (
              <p className="text-cream-50/70 uppercase tracking-widest text-xs mb-3">{eyebrow}</p>
            ) : null}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight"
              style={{ color: '#ffffff' }}
            >
              {title}
            </h2>
            <p className="mt-5 text-white/80 max-w-3xl leading-relaxed text-base sm:text-lg">
              {subtitle}
            </p>
          </div>

          {/* form — centered, constrained width */}
          <form
            className="space-y-4 max-w-2xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="w-full bg-cream-50/95 border-0 rounded-lg px-6 py-4 text-sm text-forest-800 placeholder:text-forest-700/55 focus:outline-none focus:ring-2 focus:ring-tan-500"
            />

            {/* Email with icon */}
            <div className="relative">
              <span
                className="absolute left-5 top-1/2 -translate-y-1/2 text-forest-700/50 pointer-events-none"
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
                className="w-full bg-cream-50/95 border-0 rounded-lg pl-11 pr-6 py-4 text-sm text-forest-800 placeholder:text-forest-700/55 focus:outline-none focus:ring-2 focus:ring-tan-500"
              />
            </div>

            {/* Agreement checkbox */}
            <label className="flex items-start gap-3 pt-1 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                required
                className="mt-0.5 w-4 h-4 accent-tan-500 shrink-0"
              />
              <span className="text-white/85 text-sm leading-snug">
                By submitting this form, you agree to our{' '}
                <a href="/legal/terms" className="underline underline-offset-2 hover:text-cream-100">
                  Terms and Conditions
                </a>
                .
              </span>
            </label>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button type="submit" className="btn-primary px-14 py-3 text-sm">
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  if (compact) {
    return (
      <section id={id} className="section bg-[#d7c8a5] pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="container-x max-w-4xl mx-auto text-center">
          {eyebrow ? <p className="eyebrow mb-4 text-cream-50/80">{eyebrow}</p> : null}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-cream-50 font-display">{title}</h2>
          <p className="mt-6 text-cream-50/90 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

          <form
            className="mt-16 space-y-4 text-left max-w-xl mx-auto"
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
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-700/50" aria-hidden="true">
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

            <label className="flex items-start gap-3 justify-center pt-1">
              <input
                type="checkbox"
                name="agree"
                required
                className="mt-0.5 w-4 h-4 accent-tan-500"
              />
              <span className="text-cream-50/90 text-xs sm:text-sm">
                By requesting a quote, you agree to our Terms and Conditions.
              </span>
            </label>

            <div className="pt-3 text-center">
              <button type="submit" className="btn-primary px-10">
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="section">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h2 className="text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-6 text-forest-700/80 max-w-prose">{subtitle}</p>
          <div className="mt-8">
            <Placeholder label="Form Visual" ratio="aspect-[4/3]" />
          </div>
        </div>

        <form className="placeholder-form space-y-5" onSubmit={(e) => e.preventDefault()}>
          {fields.map((f) =>
            f.textarea ? (
              <label key={f.name} className="block">
                <span className="text-xs uppercase tracking-wider text-forest-700">{f.label}</span>
                <textarea name={f.name} rows={5} className="input mt-2" />
              </label>
            ) : (
              <label key={f.name} className="block">
                <span className="text-xs uppercase tracking-wider text-forest-700">{f.label}</span>
                <input type={f.type ?? 'text'} name={f.name} className="input mt-2" />
              </label>
            )
          )}
          <button type="submit" className="btn-primary w-full">{submitLabel}</button>
        </form>
      </div>
    </section>
  );
}
