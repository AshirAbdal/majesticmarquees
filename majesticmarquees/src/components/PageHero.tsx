import Placeholder from './Placeholder';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative">
      <Placeholder label="Hero Image" ratio="aspect-[16/7]" className="!min-h-[320px]" />
      <div className="container-x -mt-24 relative z-10">
        <div className="bg-cream-50 px-6 sm:px-12 py-12 sm:py-16 text-center max-w-4xl mx-auto shadow-sm">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-forest-700/80 max-w-prose mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
