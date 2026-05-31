import Carousel from './Carousel';
import Placeholder from './Placeholder';

type TestimonialItem = { quote: string; name: string; role: string };

const defaultItems: TestimonialItem[] = [
  { quote: 'The elegance and attention to detail elevated our event beyond expectations. The seamless service allowed us to fully enjoy our celebration.', name: 'Alice Johnson', role: 'Event Planner, The Luxe Venue' },
  { quote: 'They transformed our outdoor space into a breathtaking atmosphere, perfectly reflecting our vision.', name: 'Mark Spencer', role: 'Wedding Coordinator, Dream Weddings' },
  { quote: 'From start to finish, their professionalism shone through. Every detail was curated with care, leaving us with lasting memories.', name: 'Emily Chen', role: 'Creative Director, Elegant Gatherings' },
  { quote: 'Their ability to blend nature and luxury is simply unmatched. Our guests were in awe of the stunning setup and serene ambiance.', name: 'James Parker', role: 'Host, Exclusive Events Co.' },
];

export default function Testimonials({
  heading = 'What Clients Say',
  subheading,
  bgClassName = 'bg-[#d7c7a5]',
  items = defaultItems,
}: {
  heading?: string;
  subheading?: string;
  bgClassName?: string;
  items?: TestimonialItem[];
}) {
  return (
    <section className={`section py-24 sm:py-32 lg:py-40 ${bgClassName}`}>
      <div className="container-x text-center mb-12">
        <h2 className="text-4xl sm:text-5xl">{heading}</h2>
        <h3 className="mt-4 text-lg text-forest-700/80 italic font-display font-normal">{subheading ?? 'Our clients treasure the moments we create together.'}</h3>
      </div>
      <div className="container-x">
        <Carousel options={{ slidesToScroll: 1 }}>
          {items.map((t) => (
            <div key={t.name} className="shrink-0 grow-0 basis-full lg:basis-1/2 px-6">
              <figure className="h-full flex flex-col items-start text-left">
                <Placeholder label="" ratio="aspect-square" className="!w-24 !h-24 rounded-full" />
                <blockquote className="mt-6">
                  <p className="text-forest-700/80 italic">"{t.quote}"</p>
                </blockquote>
                <figcaption className="mt-6">
                  <h4 className="text-forest-800 font-display text-2xl font-normal">{t.name}</h4>
                  <h5 className="text-sm italic text-forest-700/70 mt-1 font-normal">{t.role}</h5>
                </figcaption>
              </figure>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
