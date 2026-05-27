type Swatch = { name: string; hex: string };

export default function ColorSwatches({ colors }: { colors: Swatch[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map((c) => (
        <div key={c.name} className="text-center">
          <div
            className="w-16 h-16 border border-cream-200 shadow-sm"
            style={{ background: c.hex }}
            aria-label={c.name}
          />
          <div className="mt-2 text-xs uppercase tracking-wider text-forest-700">{c.name}</div>
        </div>
      ))}
    </div>
  );
}
