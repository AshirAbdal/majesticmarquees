export default function SpecsTable({
  title = 'Canvas Information',
  rows,
}: {
  title?: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="bg-white border border-cream-200">
      <div className="px-6 py-4 border-b border-cream-200">
        <h3 className="text-xl font-display text-forest-800">{title}</h3>
      </div>
      <dl className="divide-y divide-cream-200">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-3 px-6 py-4 gap-4">
            <dt className="text-xs uppercase tracking-wider text-forest-500 col-span-1">{r.label}</dt>
            <dd className="col-span-2 text-forest-800">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
