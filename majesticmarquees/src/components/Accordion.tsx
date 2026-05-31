'use client';
import { useState, ReactNode } from 'react';

type Item = { q: string; a: ReactNode };

export default function Accordion({
  items,
  allowMultiple = false,
  variant = 'boxed',
}: {
  items: Item[];
  allowMultiple?: boolean;
  variant?: 'boxed' | 'lined';
}) {
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (i: number) => {
    setOpen((prev) => {
      const isOpen = prev.includes(i);
      if (allowMultiple) return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
      return isOpen ? [] : [i];
    });
  };

  const isLined = variant === 'lined';

  return (
    <div className={isLined ? 'space-y-0' : 'space-y-3'}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div
            key={i}
            className={isLined ? 'border-t border-forest-700/50 last:border-b last:border-forest-700/50' : 'bg-white border border-cream-200'}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className={isLined ? 'w-full flex justify-between items-center text-left py-5' : 'w-full flex justify-between items-center text-left px-6 py-5'}
            >
              <span className={isLined ? 'text-base sm:text-lg leading-tight font-display text-forest-800' : 'text-xl font-display text-forest-800'}>
                {it.q}
              </span>
              <span className={isLined ? 'text-forest-800 shrink-0 ml-4' : 'text-tan-500 text-2xl shrink-0 ml-4'}>
                {isLined ? (
                  <svg
                    className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    viewBox="0 0 10 10"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2 1 L8 5 L2 9 Z" />
                  </svg>
                ) : (
                  isOpen ? '−' : '+'
                )}
              </span>
            </button>
            {isOpen && (
              <div className={isLined ? 'pb-6 pr-10 text-sm sm:text-base leading-relaxed text-forest-700/90 max-w-[92%]' : 'px-6 pb-6 text-forest-700/80 leading-relaxed'}>
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
