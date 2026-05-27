import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { getPostBySlug, getSortedPosts } from '../data/posts';
import NotFound from './NotFound';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const others = getSortedPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      <article className="section">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-tan-500">
            {post.category}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mt-4 max-w-3xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-forest-800/60">
            {formatDate(post.date)} · {post.author} · {post.readingMinutes} min read
          </p>

          {post.cover && (
            <div className="mt-10 aspect-[16/9] bg-cream-100 border border-cream-200 overflow-hidden">
              <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div
            className="prose-blog mt-12"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          <div className="mt-16 pt-8 border-t border-forest-800/15">
            <Link
              to="/"
              className="text-sm uppercase tracking-[0.15em] text-forest-800 hover:text-tan-500"
            >
              ← Back to the Journal
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="container-x pb-28">
          <h2 className="font-display text-3xl mb-10">Keep reading</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} to={`/${p.slug}`} className="group block">
                <div className="aspect-[4/3] bg-cream-100 border border-cream-200 overflow-hidden flex items-center justify-center text-forest-500/50 text-xs uppercase tracking-widest">
                  {p.category}
                </div>
                <h3 className="font-display text-xl mt-4 group-hover:text-tan-500 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-forest-800/60">
                  {formatDate(p.date)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
