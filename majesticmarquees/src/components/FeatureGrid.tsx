import { ReactNode } from 'react';

type Item = { title: string; text?: string; icon?: ReactNode };

const defaultIcon = (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </svg>
);

export default function FeatureGrid({
  items,
  cols = 'sm:grid-cols-2 lg:grid-cols-3',
}: {
  items: Item[];
  cols?: string;
}) {
  return (
    <div className={`grid gap-6 ${cols}`}>
      {items.map((f) => (
        <div key={f.title} className="bg-white border border-cream-200 p-6 flex items-start gap-4">
          <div className="text-tan-500 shrink-0">{f.icon ?? defaultIcon}</div>
          <div>
            <h4 className="text-lg text-forest-800">{f.title}</h4>
            {f.text && <p className="mt-1 text-sm text-forest-700/80 leading-relaxed">{f.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
