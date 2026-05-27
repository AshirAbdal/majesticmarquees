import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy" />
      <PageHero title="Cookie Policy" />
      <section className="section">
        <div className="container-x max-w-prose mx-auto">
          <p className="text-forest-700/80">
            Placeholder cookie policy. We use cookies to improve site experience and
            analyze traffic.
          </p>
          <h2 className="mt-8 text-2xl">What Are Cookies</h2>
          <p className="mt-3 text-forest-700/80">Small text files stored on your device.</p>
          <h2 className="mt-8 text-2xl">Managing Cookies</h2>
          <p className="mt-3 text-forest-700/80">You can adjust cookie preferences via your browser settings.</p>
        </div>
      </section>
    </>
  );
}
