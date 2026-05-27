import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" />
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container-x max-w-prose mx-auto">
          <p className="text-forest-700/80">
            Placeholder privacy policy content. We respect your privacy and only use
            data needed to respond to your inquiries.
          </p>
          <h2 className="mt-8 text-2xl">Information We Collect</h2>
          <p className="mt-3 text-forest-700/80">Details of data collected via forms and analytics.</p>
          <h2 className="mt-8 text-2xl">How We Use Information</h2>
          <p className="mt-3 text-forest-700/80">Purposes for which collected information is used.</p>
          <h2 className="mt-8 text-2xl">Your Rights</h2>
          <p className="mt-3 text-forest-700/80">Rights of access, rectification and deletion.</p>
        </div>
      </section>
    </>
  );
}
