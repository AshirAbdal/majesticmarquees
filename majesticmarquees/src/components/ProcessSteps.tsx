type Step = { title: string; text: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((s, i) => (
        <div key={s.title} className="text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-tan-500 text-white flex items-center justify-center font-display text-2xl">
            {i + 1}
          </div>
          <h4 className="mt-5 text-2xl">{s.title}</h4>
          <p className="mt-3 text-forest-700/80 leading-relaxed text-sm">{s.text}</p>
        </div>
      ))}
    </div>
  );
}
