import { Link } from 'react-router-dom';

export default function CTASection({
  title = 'Ready to plan something unforgettable?',
  text = 'Tell us about your event and we will tailor a quote to match your vision.',
  to = '/contact-get-a-quote#contact-form',
  label = 'Get in Touch',
}: {
  title?: string;
  text?: string;
  to?: string;
  label?: string;
}) {
  return (
    <section className="section bg-forest-800 text-cream-100">
      <div className="container-x text-center">
        <h2 className="text-3xl sm:text-4xl text-cream-50">{title}</h2>
        <p className="mt-4 max-w-prose mx-auto text-cream-100/80">{text}</p>
        <div className="mt-8">
          <Link to={to} className="btn-primary">{label}</Link>
        </div>
      </div>
    </section>
  );
}
