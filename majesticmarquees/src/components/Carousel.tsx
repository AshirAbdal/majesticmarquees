import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode[];
  options?: Parameters<typeof useEmblaCarousel>[0];
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
};

export default function Carousel({ children, options, showDots = true, showArrows = true, className = '' }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', ...options });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={scrollPrev}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-forest-800/70 hover:text-forest-800 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={scrollNext}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-forest-800/70 hover:text-forest-800 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </>
      )}

      {showDots && snaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {snaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition ${
                selected === i ? 'bg-forest-700 w-6' : 'bg-forest-700/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
