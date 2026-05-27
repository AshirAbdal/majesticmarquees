import { useState, useEffect, useCallback } from 'react';
import Placeholder from './Placeholder';

export default function GalleryGrid({ count = 16 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, i) => i);
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((o) => (o === null ? null : (o + 1) % items.length)), [items.length]);
  const prev = useCallback(() => setOpen((o) => (o === null ? null : (o - 1 + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            className="group block focus:outline-none"
            aria-label={`Open image ${i + 1}`}
          >
            <Placeholder label={`Event ${i + 1}`} ratio="aspect-square" className="group-hover:opacity-80 transition" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-forest-900/90 flex items-center justify-center p-6"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 text-cream-50 text-2xl"
          >×</button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 text-cream-50 text-3xl"
          >‹</button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Placeholder label={`Event ${open + 1}`} ratio="aspect-[4/3]" className="bg-cream-50" />
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 text-cream-50 text-3xl"
          >›</button>
        </div>
      )}
    </>
  );
}
