import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Not found" description="That page could not be found." />
      <section className="section">
        <div className="container-x text-center">
          <p className="eyebrow">404</p>
          <h1 className="font-display text-5xl mt-3">We can’t find that post.</h1>
          <p className="mt-5 text-forest-800/80">
            The article you were looking for may have been moved or unpublished.
          </p>
          <Link to="/" className="btn-primary mt-10 inline-flex">
            Back to the Journal
          </Link>
        </div>
      </section>
    </>
  );
}
