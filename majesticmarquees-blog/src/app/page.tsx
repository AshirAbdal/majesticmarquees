export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] flex flex-col items-center justify-center px-6 text-center">
      <img src="/logo.png" alt="Majestic Marquees" className="h-28 w-auto object-contain mb-10" />

      <p className="text-xs uppercase tracking-[0.25em] text-tan-500 mb-4 font-sans">
        Something beautiful is coming
      </p>

      <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-800 leading-tight mb-6">
        Coming Soon
      </h1>

      <p className="max-w-md text-forest-700/75 text-base sm:text-lg leading-relaxed font-sans">
        Our blog is launching soon. Stories about luxury events, outdoor elegance,
        and the art of extraordinary gatherings.
      </p>

      <div className="mt-12 h-px w-16 bg-tan-500 mx-auto" />

      <a
        href="https://www.majesticmarquees.com"
        className="mt-8 text-sm uppercase tracking-widest text-forest-700 hover:text-tan-500 transition-colors font-sans"
      >
        Visit Main Site
      </a>
    </div>
  );
}
