'use client';
import { useState } from 'react';
import Link from 'next/link';
import Placeholder from '../../components/Placeholder';
import QuoteForm from '../../components/QuoteForm';
import ColorSwatches from '../../components/ColorSwatches';
import Accordion from '../../components/Accordion';
import Carousel from '../../components/Carousel';

const canvasInfo = [
  'Anti fungus and algae treatment',
  'UV resistance 9',
  'Wind resistance force 9 Beaufort',
  'Full colour print on both sides possible',
  'Fire retardant B1, M2 – NF P 92-503',
  'Canvas look for authentic character',
  'Weight: 750 g/m²',
  'Colours: Sand / Platinum Grey / Taupe / Black / Red / White',
];

const colors = [
  { name: 'Sand', hex: '#e3d6bf' },
  { name: 'Platinum Grey', hex: '#c9c9c9' },
  { name: 'Taupe', hex: '#a89a85' },
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'Red', hex: '#9b2c2c' },
  { name: 'White', hex: '#f6f3ec' },
];

const whyQtents = [
  {
    title: 'Our Fabrics',
    text: 'The tent canvas we use comes from a premium technical textile manufacturer in Europe. Guaranteeing you the best possible quality.',
  },
  {
    title: '100% Waterproof',
    text: 'Due to the special coating and the lack of stitching and seams, our stretch tents are guaranteed to remain waterproof. Interim treatment is not necessary.',
  },
  {
    title: 'Fire Safe',
    text: 'All materials meet the required fire certificate B1 / M2. All our tents comply with NEN-EN 8020-41:2012.',
  },
  {
    title: 'UV Resistant',
    text: 'A special top coating prevents the tent canvas from discolouring or deteriorating, keeping every Qtent beautiful year after year.',
  },
  {
    title: 'Algae & Mold Proof',
    text: 'The canvas is impregnated inside and outside with a coating algae and mold cannot adhere to.',
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

// Configurator data: groups of standard sizes with sub-variants & full spec sheet
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
    label: '4.5 / 6 meter',
    variants: [
      { label: '4.5x4.5', size: '4.5×4.5 meter', seated: '8 persons', cocktail: '14 Persons', cinema: '20 Persons', surface: '20.25 m²', coating: 'single coated', weight: '15kg', packed: '50x50x100cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '4.5x7.5', size: '4.5×7.5 meter', seated: '14 persons', cocktail: '24 Persons', cinema: '34 Persons', surface: '33.75 m²', coating: 'single coated', weight: '22kg', packed: '50x50x120cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '6x6', size: '6×6 meter', seated: '16 persons', cocktail: '28 Persons', cinema: '40 Persons', surface: '36 m²', coating: 'single coated', weight: '26kg', packed: '55x55x120cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '6x10.5', size: '6×10.5 meter', seated: '28 persons', cocktail: '48 Persons', cinema: '68 Persons', surface: '63 m²', coating: 'single coated', weight: '40kg', packed: '60x60x130cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '6x15', size: '6×15 meter', seated: '40 persons', cocktail: '70 Persons', cinema: '98 Persons', surface: '90 m²', coating: 'single coated', weight: '55kg', packed: '60x60x150cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
    ],
  },
  {
    label: '7.5 / 9 meter',
    variants: [
      { label: '7.5x7.5', size: '7.5×7.5 meter', seated: '32 persons', cocktail: '56 Persons', cinema: '80 Persons', surface: '56.25 m²', coating: 'double coated', weight: '35kg', packed: '60x60x130cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '7.5x10.5', size: '7.5×10.5 meter', seated: '45 persons', cocktail: '78 Persons', cinema: '110 Persons', surface: '78.75 m²', coating: 'double coated', weight: '48kg', packed: '65x65x140cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '9x9', size: '9×9 meter', seated: '50 persons', cocktail: '90 Persons', cinema: '128 Persons', surface: '81 m²', coating: 'double coated', weight: '52kg', packed: '65x65x150cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '9x15', size: '9×15 meter', seated: '85 persons', cocktail: '148 Persons', cinema: '210 Persons', surface: '135 m²', coating: 'double coated', weight: '80kg', packed: '70x70x160cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
    ],
  },
  {
    label: '10.5 / 12 meter',
    variants: [
      { label: '10.5x10.5', size: '10.5×10.5 meter', seated: '64 persons', cocktail: '110 Persons', cinema: '156 Persons', surface: '110.25 m²', coating: 'double coated', weight: '70kg', packed: '70x70x160cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '12x12', size: '12×12 meter', seated: '90 persons', cocktail: '155 Persons', cinema: '220 Persons', surface: '144 m²', coating: 'double coated', weight: '95kg', packed: '75x75x170cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '12x18', size: '12×18 meter', seated: '140 persons', cocktail: '240 Persons', cinema: '340 Persons', surface: '216 m²', coating: 'double coated', weight: '140kg', packed: '80x80x180cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
    ],
  },
  {
    label: '15 / 18 Meter',
    variants: [
      { label: '15x15', size: '15×15 meter', seated: '130 persons', cocktail: '225 Persons', cinema: '320 Persons', surface: '225 m²', coating: 'heavy duty', weight: '150kg', packed: '80x80x190cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
      { label: '18x18', size: '18×18 meter', seated: '195 persons', cocktail: '335 Persons', cinema: '475 Persons', surface: '324 m²', coating: 'heavy duty', weight: '210kg', packed: '85x85x200cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
    ],
  },
  {
    label: '21 Meter',
    variants: [
      { label: '21x21', size: '21×21 meter', seated: '250 persons', cocktail: '440 Persons', cinema: '620 Persons', surface: '441 m²', coating: 'heavy duty', weight: '290kg', packed: '90x90x210cm', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
    ],
  },
  {
    label: 'Specials',
    variants: [
      { label: 'Custom', size: 'Made to measure', seated: 'Variable', cocktail: 'Variable', cinema: 'Variable', surface: 'Tailored', coating: 'Tailored', weight: 'Tailored', packed: 'Tailored', colours: 'Sand / Platinum Grey / Taupe / Black / Red / White' },
    ],
  },
];

const faqs = [
  { q: 'What does a stretch tent cost', a: 'Pricing depends on size, configuration and the length of your hire. We tailor each quote to your event. Share your details and we will respond promptly.' },
  { q: 'Can I also rent a stretch tent?', a: 'Yes. Both rental and sales are available across South-East Asia and Oceania. Speak with our team to find the right fit.' },
  { q: 'What is the material quality of a stretch tent', a: 'We use premium Qtents canvas (750 g/m²) with HF welded seams, UV resistance 9, fire certification B1 / M2 and a 5-year fabric warranty.' },
  { q: 'Are stretch tents suitable for events', a: 'Absolutely, weddings, festivals, corporate gatherings, terrace solutions and private celebrations. The sculptural form elevates every setting.' },
  { q: 'Can I order side walls for my stretch tent', a: 'Yes. Side walls, windows, doors and connector panels are available to customise weather protection and privacy.' },
];

export default function StretchNomadicBedouin() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">Stretch / Nomadic / Bedouin</h1>
            <p className="mt-4 font-display italic text-base sm:text-lg text-white/90">
              Contemporary, playful and sophisticated
            </p>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="section">
        <div className="container-x max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">Stretch / Nomadic / Bedouin</h2>
          <p className="mt-8 text-forest-700/85 leading-relaxed text-center">
            The stretch tent, rooted in African traditions, has evolved into a contemporary tent
            concept sought after in various settings. Our high-quality stretch tents are made from
            state-of-the-art fabric that enhances durability, providing optimal resistance to UV
            rays, wind, and waterproofing for varied weather conditions. Their open and flexible
            structure makes them versatile, perfect for gatherings like weddings, festivals, and
            terrace solutions. Stretch tents seamlessly enhance ambiance while offering elegant
            protection year-round, making them an exceptional choice for corporate events and
            private celebrations alike.
          </p>
        </div>
      </section>

      {/* Image gallery carousel */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x">
          <Carousel options={{ slidesToScroll: 1 }}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                <Placeholder label={`Stretch Tent ${i + 1}`} ratio="aspect-[4/3]" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Quality & Canvas Info */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl">Quality &amp; Durability</h2>
            <p className="mt-6 text-forest-700/85 leading-relaxed">
              We make a clear statement about quality with a{' '}
              <strong className="font-semibold">5-year warranty on our stretch tent fabrics,
              setting us apart from competitors</strong>. Choosing a Qtent stretchtent is a
              conscious decision for sustainability: the high-quality canvas lasts 8–13 years,
              making it a long-term investment you can rely on.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              What truly distinguishes a Qtents stretch tents goes beyond the fabric itself. With
              the patented High Frequency welded seams, every tent is built to withstand repeated
              use season after season. This ensures maximum durability, reusability, and elegance,
              whether for events, festivals, or stylish terrace solutions.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              Available in six beautiful colors – beige, taupe, white, black, light grey, and red –
              our stretch tents combine flexibility with modern design, offering both functional
              protection and aesthetic appeal.
            </p>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              Backed by a <strong className="font-semibold">5-year warranty</strong>, these tents
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
            <h3 className="mt-10 text-2xl font-display text-forest-800 text-center">Colors on stock</h3>
            <div className="mt-6 flex justify-center">
              <ColorSwatches colors={colors} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Qtents */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide max-w-3xl mx-auto leading-tight">
              Why Qtents is the best supplier for your stretch tent
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

      {/* Stretch Tent Configurator */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#D7C7A5]">
        <div className="container-x">
          <div className="text-center mb-10 text-cream-50">
            <h2 className="text-4xl sm:text-5xl text-cream-50">Stretch Tent Configurator</h2>
            <p className="mt-4 text-cream-50/90 italic font-display text-base sm:text-lg">
              Stretchtents can be made to any size you want. Here is a selection of standard sizes
            </p>
          </div>

          {/* Top level size group tabs */}
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

          {/* Sub-tabs (variants) */}
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
              Your queries about our tent answered here.
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
