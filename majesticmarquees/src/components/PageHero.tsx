type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** URL of the background image. Falls back to a solid colour if not provided. */
  bgImage?: string;
};

export default function PageHero({ eyebrow, title, subtitle, bgImage }: Props) {
  return (
    <section
      className="page-hero relative w-full h-[70vh] min-h-[420px] bg-cover bg-center flex items-center justify-center"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : { background: '#3a4a3a' }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 container-x text-center">
        {eyebrow && (
          <p className="page-hero-text font-display italic text-xl sm:text-2xl mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="page-hero-text font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-5xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        {subtitle && (
          <p className="page-hero-text mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
