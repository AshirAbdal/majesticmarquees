import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <section className="section min-h-[60vh] flex items-center">
        <div className="container-x text-center">
          <p className="eyebrow mb-3">404</p>
          <h1 className="text-5xl">Page not found</h1>
          <p className="mt-4 text-forest-700/80">The page you're looking for doesn't exist.</p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">Back Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
