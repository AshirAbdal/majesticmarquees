import Carousel from './Carousel';
import Placeholder from './Placeholder';

const items = [
  { quote: 'The elegance and attention to detail elevated our event beyond expectations. The seamless service allowed us to fully enjoy our celebration.', name: 'Alice Johnson', role: 'Event Planner, The Luxe Venue' },
  { quote: 'They transformed our outdoor space into a breathtaking atmosphere, perfectly reflecting our vision.', name: 'Mark Spencer', role: 'Wedding Coordinator, Dream Weddings' },
  { quote: 'From start to finish, their professionalism shone through. Every detail was curated with care, leaving us with lasting memories.', name: 'Emily Chen', role: 'Creative Director, Elegant Gatherings' },
  { quote: 'Their ability to blend nature and luxury is simply unmatched. Our guests were in awe of the stunning setup and serene ambiance.', name: 'James Parker', role: 'Host, Exclusive Events Co.' },
];

export default function Testimonials({
  heading = 'What Clients Say',
  subheading,
  bgClassName = 'bg-[#d7c7a5]',
}: {
  heading?: string;
  subheading?: string;
  bgClassName?: string;
}) {
  return (
    <section className={`section py-24 sm:py-32 lg:py-40 ${bgClassName}`}>
      <div className="container-x text-center mb-12">
        <h2 className="text-4xl sm:text-5xl">{heading}</h2>
        <p className="mt-4 text-lg text-forest-700/80 italic font-display">{subheading ?? 'Our clients treasure the moments we create together.'}</p>
      </div>
      <div className="container-x">
        <Carousel options={{ slidesToScroll: 1 }}>
          {items.map((t) => (
            <div key={t.name} className="shrink-0 grow-0 basis-full lg:basis-1/2 px-6">
              <figure className="h-full flex flex-col items-start text-left">
                <Placeholder label="" ratio="aspect-square" className="!w-24 !h-24 rounded-full" />
                <blockquote className="mt-6 text-forest-700/80 italic">“{t.quote}”</blockquote>
                <figcaption className="mt-6">
                  <div className="text-forest-800 font-display text-2xl">{t.name}</div>
                  <div className="text-sm italic text-forest-700/70 mt-1">{t.role}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
