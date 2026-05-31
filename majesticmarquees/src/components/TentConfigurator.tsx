'use client';
import { useState } from 'react';
import Placeholder from './Placeholder';

type Size = {
  label: string;
  area: string;
  capacitySeated: string;
  capacityStanding: string;
  poles: string;
};

export default function TentConfigurator({
  title,
  sizes,
}: {
  title: string;
  sizes: Size[];
}) {
  const [active, setActive] = useState(0);
  const current = sizes[active];

  return (
    <div className="bg-cream-50 border border-cream-200">
      <div className="px-6 sm:px-10 py-8 border-b border-cream-200">
        <h3 className="text-3xl sm:text-4xl text-forest-800">{title}</h3>
        <p className="mt-3 text-forest-700/80">Compare sizes side-by-side to find the right fit.</p>
      </div>

      <div role="tablist" className="flex flex-wrap border-b border-cream-200">
        {sizes.map((s, i) => (
          <button
            key={s.label}
            role="tab"
            {...(active === i ? { 'aria-selected': 'true' } : { 'aria-selected': 'false' })}
            onClick={() => setActive(i)}
            className={`px-5 py-3 text-sm uppercase tracking-wider border-r border-cream-200 transition-colors ${
              active === i
                ? 'bg-white text-tan-500 border-b-2 border-b-tan-500 -mb-px'
                : 'text-forest-700 hover:text-tan-500'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="p-6 sm:p-10">
          <Placeholder label={`${current.label} Configuration`} ratio="aspect-[4/3]" />
        </div>
        <div className="p-6 sm:p-10 bg-white">
          <h4 className="text-2xl font-display text-forest-800">{current.label}</h4>
          <dl className="mt-6 divide-y divide-cream-200">
            {[
              ['Footprint', current.area],
              ['Seated Capacity', current.capacitySeated],
              ['Standing Capacity', current.capacityStanding],
              ['Poles', current.poles],
            ].map(([k, v]) => (
              <div key={k} className="py-3 flex justify-between gap-4">
                <dt className="text-xs uppercase tracking-wider text-forest-500">{k}</dt>
                <dd className="text-forest-800 text-sm text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
