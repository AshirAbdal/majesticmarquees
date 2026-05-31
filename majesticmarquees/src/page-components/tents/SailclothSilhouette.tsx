'use client';
import { useState } from 'react';
import Link from 'next/link';
import Placeholder from '../../components/Placeholder';
import QuoteForm from '../../components/QuoteForm';
import Accordion from '../../components/Accordion';
import Carousel from '../../components/Carousel';

const canvasInfo = [
  '100% waterproof top coated',
  'Genuine sailcloth, no vinyl',
  'Extremely light and strong fabric with high tearing resistance due to the heavy duty polyester core',
  'Anti fungus and algae treatment',
  'UV resistance 9',
  'Wind resistance force 9 Beaufort',
  'Full colour print on both sides possible',
  'Fire retardant B1, M2 – NF P 92-503',
  'Canvas look for authentic character',
  'Weight: 400 g/m²',
  'Colour: ivory with darker reinforced details',
];

const whyQtents = [
  {
    title: 'Our Fabrics',
    text: 'High-quality materials that meet the strictest standards, with special treatment to prevent discolouration and quality loss.',
  },
  {
    title: '100% Waterproof',
    text: 'Due to the special coating and the lack of stitching and seams, our sailcloth tents are guaranteed to remain waterproof. Interim treatment is not necessary.',
  },
  {
    title: 'Fire Safe',
    text: 'All materials meet the required standards. Every Qtent has a fire certificate. B1 / M2 All our Sailcloth tents meet the European standard NEN-EN 8020-41:2012.',
  },
  {
    title: 'UV Resistant',
    text: 'A special top coating prevents the canvas from discolouring or deteriorating and remains beautiful year after year.',
  },
  {
    title: 'Algae & Mould Proof',
    text: 'Canvas impregnated on the inside and outside with a coating to which algae and mould cannot adhere.',
  },
  {
    title: 'Printing Possible',
    text: 'Canvas can be printed in full colour on both sides, ideal for maximum exposure or corporate identity.',
  },
  {
    title: 'Easy Setup',
    text: 'Designed to be set up easily, with clear instructions. Municipal permitting books can be provided on request.',
  },
];

// Configurator data: width groups with length variants & full spec sheet
type Variant = {
  label: string;
  size: string;
  seated: string;
  cocktail: string;
  cinema: string;
  surface: string;
  coating: string;
  weight: string;
  packed: string;
  colours: string;
};
type SizeGroup = { label: string; variants: Variant[] };

const sizeGroups: SizeGroup[] = [
  {
    label: '6 Meter',
    variants: [
      { label: '6x6', size: '6×6 meter', seated: '10 persons', cocktail: '16 Persons', cinema: '23 Persons', surface: '23 m²', coating: 'coated', weight: '10.8kg', packed: '50x50x100cm', colours: 'Ivory' },
      { label: '6x12', size: '6×12 meter', seated: '24 persons', cocktail: '38 Persons', cinema: '54 Persons', surface: '46 m²', coating: 'coated', weight: '18kg', packed: '55x55x120cm', colours: 'Ivory' },
      { label: '6x18', size: '6×18 meter', seated: '40 persons', cocktail: '64 Persons', cinema: '90 Persons', surface: '69 m²', coating: 'coated', weight: '26kg', packed: '60x60x130cm', colours: 'Ivory' },
      { label: '6x24', size: '6×24 meter', seated: '56 persons', cocktail: '90 Persons', cinema: '128 Persons', surface: '92 m²', coating: 'coated', weight: '34kg', packed: '60x60x140cm', colours: 'Ivory' },
      { label: '6x30', size: '6×30 meter', seated: '72 persons', cocktail: '115 Persons', cinema: '162 Persons', surface: '115 m²', coating: 'coated', weight: '42kg', packed: '60x60x150cm', colours: 'Ivory' },
    ],
  },
  {
    label: '8 Meter',
    variants: [
      { label: '8x8', size: '8×8 meter', seated: '20 persons', cocktail: '32 Persons', cinema: '45 Persons', surface: '40 m²', coating: 'coated', weight: '16kg', packed: '55x55x120cm', colours: 'Ivory' },
      { label: '8x16', size: '8×16 meter', seated: '46 persons', cocktail: '72 Persons', cinema: '100 Persons', surface: '80 m²', coating: 'coated', weight: '30kg', packed: '60x60x140cm', colours: 'Ivory' },
      { label: '8x24', size: '8×24 meter', seated: '72 persons', cocktail: '115 Persons', cinema: '160 Persons', surface: '120 m²', coating: 'coated', weight: '46kg', packed: '65x65x150cm', colours: 'Ivory' },
      { label: '8x32', size: '8×32 meter', seated: '98 persons', cocktail: '155 Persons', cinema: '220 Persons', surface: '160 m²', coating: 'coated', weight: '60kg', packed: '70x70x160cm', colours: 'Ivory' },
    ],
  },
  {
    label: '10 meter',
    variants: [
      { label: '10x10', size: '10×10 meter', seated: '35 persons', cocktail: '55 Persons', cinema: '78 Persons', surface: '63 m²', coating: 'coated', weight: '24kg', packed: '60x60x140cm', colours: 'Ivory' },
      { label: '10x20', size: '10×20 meter', seated: '80 persons', cocktail: '128 Persons', cinema: '180 Persons', surface: '126 m²', coating: 'coated', weight: '46kg', packed: '65x65x150cm', colours: 'Ivory' },
      { label: '10x30', size: '10×30 meter', seated: '125 persons', cocktail: '200 Persons', cinema: '280 Persons', surface: '188 m²', coating: 'coated', weight: '68kg', packed: '70x70x160cm', colours: 'Ivory' },
    ],
  },
  {
    label: '12 Meter',
    variants: [
      { label: '12x12', size: '12×12 meter', seated: '50 persons', cocktail: '80 Persons', cinema: '115 Persons', surface: '90 m²', coating: 'coated', weight: '34kg', packed: '65x65x150cm', colours: 'Ivory' },
      { label: '12x24', size: '12×24 meter', seated: '115 persons', cocktail: '184 Persons', cinema: '260 Persons', surface: '180 m²', coating: 'coated', weight: '64kg', packed: '70x70x160cm', colours: 'Ivory' },
      { label: '12x36', size: '12×36 meter', seated: '180 persons', cocktail: '290 Persons', cinema: '405 Persons', surface: '270 m²', coating: 'coated', weight: '95kg', packed: '75x75x170cm', colours: 'Ivory' },
    ],
  },
  {
    label: '14 Meter',
    variants: [
      { label: '14x14', size: '14×14 meter', seated: '70 persons', cocktail: '110 Persons', cinema: '160 Persons', surface: '126 m²', coating: 'coated', weight: '48kg', packed: '70x70x160cm', colours: 'Ivory' },
      { label: '14x28', size: '14×28 meter', seated: '160 persons', cocktail: '255 Persons', cinema: '360 Persons', surface: '252 m²', coating: 'coated', weight: '90kg', packed: '75x75x170cm', colours: 'Ivory' },
      { label: '14x42', size: '14×42 meter', seated: '250 persons', cocktail: '400 Persons', cinema: '560 Persons', surface: '378 m²', coating: 'coated', weight: '135kg', packed: '80x80x180cm', colours: 'Ivory' },
    ],
  },
  {
    label: '20 Meter',
    variants: [
      { label: '20x20', size: '20×20 meter', seated: '160 persons', cocktail: '250 Persons', cinema: '350 Persons', surface: '320 m²', coating: 'double coated', weight: '160kg', packed: '85x85x200cm', colours: 'Ivory' },
      { label: '20x40', size: '20×40 meter', seated: '360 persons', cocktail: '560 Persons', cinema: '780 Persons', surface: '640 m²', coating: 'double coated', weight: '300kg', packed: '90x90x210cm', colours: 'Ivory' },
    ],
  },
];

const faqs = [
  { q: 'What sizes of tents do you offer?', a: 'Sailcloth widths run from 6 m up to 20 m with double-row king poles, and lengths can be extended in modular bays.' },
  { q: 'What is the cost of a Sailcloth tent?', a: 'Pricing varies by size, configuration and accessories. Share your event details and we will tailor a quote.' },
  { q: 'How do I know which size sailcloth tent best suits my situation', a: 'Our team will help match guest counts, seating styles and venue constraints to the right footprint and accessories.' },
  { q: 'What is the quality of the material of a sailcloth tent?', a: 'Genuine 400 g/m² sailcloth (no vinyl) with a heavy-duty polyester core, top-coated for waterproofing, UV and fire resistance.' },
  { q: 'Where does the name Sailcloth originates from', a: 'The fabric and silhouette descend from traditional ship sails, pole-tensioned canvas that catches light and wind with sculptural elegance.' },
];

export default function SailclothSilhouette() {
  const [groupIdx, setGroupIdx] = useState(0);
  const [variantIdx, setVariantIdx] = useState(0);
  const group = sizeGroups[groupIdx];
  const variant = group.variants[Math.min(variantIdx, group.variants.length - 1)];

  return (
    <>

      {/* Hero — title overlaid on background image */}
      <section className="relative">
        <div className="placeholder-img w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
          <span className="text-forest-700/40 text-sm uppercase tracking-wider">Hero Background</span>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-x text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">Sailcloth / Silhoutte</h1>
            <p className="mt-4 font-display italic text-base sm:text-lg text-white/90">
              Elegance, Style and Sophistication
            </p>
          </div>
        </div>
      </section>

      {/* Intro tagline */}
      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <p className="text-forest-700/85 leading-relaxed">
            Elegance, style, and sophistication are all intricately woven together in the details,
            reflecting a deeper sense of artistry and grace.
          </p>
        </div>
      </section>

      {/* Image gallery carousel */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x">
          <Carousel options={{ slidesToScroll: 1 }}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                <Placeholder label={`Sailcloth ${i + 1}`} ratio="aspect-[4/3]" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Configurations & Canvas Info */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl">Configurations</h2>
            <p className="mt-6 text-forest-700/85 leading-relaxed">
              The Sailcloth / Silhouette tent can be purchased in several different widths and
              lengts.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              From the small and cosy 6 meter width to the big and majestic 20 meter width with a
              double row of kingpoles.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              All the tents have the same characteristics, they offer an exquisite outdoor setting
              with organic shapes, translucent fabric, and charming details like festive flags and
              wooden poles. Made from high-quality, waterproof coated sailcloth, they ensure{' '}
              <strong className="font-semibold">durability</strong> and protection against all
              weather conditions.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              Available in various standard sizes and large festival models, our tents feature
              adjustable side walls for year-round use while maintaining an open, airy feel. The
              reinforced seams and{' '}
              <strong className="font-semibold">lightweight</strong> yet tear-resistant fabric
              guarantee reliability, even in tough conditions.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              The Qtents Sailcloth tents come with closed or transparent sidewalls, offering a
              customizable solution for any event.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              Backed by a <strong className="font-semibold">2-year warranty</strong>, these tents
              combine style, strength and sustainability, creating an authentic, sophisticated
              atmosphere for memorable outdoor venues.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              For all these types of tents, we exclusively use high-quality roofs that are
              manufactured by QTents (
              <a href="https://www.qtents.com" className="text-tan-500 underline" target="_blank" rel="noopener noreferrer">
                www.qtents.com
              </a>
              ), a top-level manufacturer renowned for their expertise and innovation, hailing from
              the Netherlands.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">Canvas Information</h2>
            <ul className="mt-6 space-y-2 text-forest-700/85">
              {canvasInfo.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-tan-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-tan-500 shrink-0" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Qtents */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide max-w-3xl mx-auto leading-tight">
              Why a sailcloth tent from Qtents is the best choice
            </h2>
          </div>
          <div className="bg-[#efe7d5]/60 border border-forest-800/15 p-6 sm:p-10">
            <Carousel options={{ slidesToScroll: 1, align: 'start' }}>
              {whyQtents.map((f) => (
                <div key={f.title} className="shrink-0 grow-0 basis-full sm:basis-1/2 px-4 sm:px-8">
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-forest-700/85 leading-relaxed italic font-display max-w-md mx-auto">
                      {f.text}
                    </p>
                    <div className="mt-8 mx-auto w-24 h-24 rounded-full border border-forest-800/40" />
                    <h4 className="mt-6 text-2xl font-display text-forest-800">{f.title}</h4>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sailcloth Configurator */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#D7C7A5]">
        <div className="container-x">
          <div className="text-center mb-10 text-cream-50">
            <h2 className="text-4xl sm:text-5xl text-cream-50">Sailcloth Configurator</h2>
            <p className="mt-4 text-cream-50/90 italic font-display text-base sm:text-lg">
              See why clients trust us for their most memorable events.
            </p>
          </div>

          {/* Width group tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {sizeGroups.map((g, i) => (
              <button
                key={g.label}
                type="button"
                onClick={() => {
                  setGroupIdx(i);
                  setVariantIdx(0);
                }}
                className={`min-w-[120px] px-6 py-3 text-xs sm:text-sm transition-colors rounded-md ${
                  groupIdx === i
                    ? 'bg-[#a06a3f] text-cream-50 shadow-sm'
                    : 'bg-[#f5f0e3] text-forest-800/80 hover:bg-cream-50'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Length variant sub-tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {group.variants.map((v, i) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setVariantIdx(i)}
                className={`min-w-[100px] px-5 py-2.5 text-xs sm:text-sm transition-colors rounded-md ${
                  variantIdx === i
                    ? 'bg-[#c79a73] text-cream-50 shadow-sm'
                    : 'bg-[#f5f0e3] text-forest-800/80 hover:bg-cream-50'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* Two-column: spec table + image carousel */}
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 lg:gap-12 items-start">
            {/* Spec table */}
            <div>
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    ['Size', variant.size],
                    ['Seated', variant.seated],
                    ['Cocktail Standing', variant.cocktail],
                    ['Cinema Style', variant.cinema],
                    ['Surface', variant.surface],
                    ['Coating', variant.coating],
                    ['Weight', variant.weight],
                    ['Packed', variant.packed],
                    ['Colours', variant.colours],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <th
                        scope="row"
                        className="text-left font-normal text-forest-800 bg-[#efe5d0] border border-forest-800/40 px-5 sm:px-6 py-4 w-2/5 align-middle"
                      >
                        {k}
                      </th>
                      <td className="text-forest-800 bg-[#efe5d0] border border-forest-800/40 px-5 sm:px-6 py-4 align-middle">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Image carousel of selected variant */}
            <div>
              <Carousel
                options={{ slidesToScroll: 1 }}
                className="[&_button]:!text-white/90 [&_button:hover]:!text-white"
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="shrink-0 grow-0 basis-full px-2">
                    <div className="aspect-[4/3] w-full flex items-center justify-center text-forest-800/40 text-xs uppercase tracking-widest">
                      {`${variant.label} View ${i + 1}`}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote */}
      <QuoteForm
        id="contact-form"
        compact
        eyebrow=""
        title="Request Your Personalized Quote"
        subtitle="We would love to learn more about your upcoming event. Fill out the form below, and let’s start the conversation together."
        submitLabel="Send Inquiry"
      />

      {/* Common Questions */}
      <section className="section">
        <div className="container-x">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">Common Questions</h2>
            <p className="mt-4 text-forest-700/80 font-display italic text-base sm:text-lg">
              Your queries about tent rentals answered here.
            </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
            <div className="bg-[#efe7d5]/60 border border-forest-800/15 p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl">Need further assistance?</h3>
              <p className="mt-4 text-forest-700/85 leading-relaxed">
                We understand that planning an event comes with many questions. Whether it’s about
                our tents, setup services, or special requests, we’re here to help. Reach out with
                any questions you might have, and we’ll ensure you feel confident in your choices.
              </p>
              <Link
                href="/contact-get-a-quote#contact-form"
                className="btn-primary mt-8 inline-block"
              >
                Get in Touch
              </Link>
            </div>
            <Accordion items={faqs} variant="lined" />
          </div>
        </div>
      </section>
    </>
  );
}
