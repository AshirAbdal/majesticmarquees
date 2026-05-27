import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSortedPosts, type Post } from '../data/posts';

function formatLongDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatTime12h(time: string) {
  const [hStr, mStr] = time.split(':');
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  const period = h >= 12 ? 'pm' : 'am';
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

function formatCardMeta(p: Post) {
  const d = new Date(p.date);
  const day = d.getDate();
  const month = d.toLocaleString('en-GB', { month: 'long' });
  const year = d.getFullYear();
  return `${p.author} ${day} ${month} ${year} ${p.time}`;
}

function Hero({ post }: { post: Post }) {
  return (
    <section
      className="hero-blog relative h-screen min-h-[760px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${post.cover})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container-x h-full flex items-center">
        <div className="max-w-3xl py-16">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            {post.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
            {post.excerpt}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 3v4M16 3v4" />
              </svg>
              {formatLongDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {formatTime12h(post.time)}
            </span>
          </div>
          <Link to={`/${post.slug}`} className="btn-primary mt-8 inline-flex">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-cream-50 border border-cream-200 flex flex-col">
      <Link to={`/${post.slug}`} className="block aspect-[4/3] overflow-hidden bg-cream-100">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1 text-center">
        <h3 className="font-display text-xl text-tan-500 leading-snug">
          <Link to={`/${post.slug}`} className="hover:text-tan-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-xs italic text-forest-800/60">
          {formatCardMeta(post)}
        </p>
        <p className="mt-4 text-sm text-forest-800/80 flex-1">{post.excerpt}</p>
        <div className="mt-5">
          <Link
            to={`/${post.slug}`}
            className="text-sm italic underline underline-offset-2 text-forest-800 hover:text-tan-500"
          >
            Read More »
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const allPosts = useMemo(() => getSortedPosts(), []);
  const [query, setQuery] = useState('');

  const featured = allPosts[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allPosts;
    return allPosts.filter((p) =>
      [p.title, p.excerpt, p.category, p.author].some((s) =>
        s.toLowerCase().includes(q),
      ),
    );
  }, [allPosts, query]);

  return (
    <>
      <SEO
        title="Blog"
        description="Stories, planning tips and inspiration from Majestic Marquees & Tents."
      />

      {featured && <Hero post={featured} />}

      {/* Search */}
      <section className="bg-[#f5f1e8] pt-16 pb-10">
        <div className="container-x">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex w-full max-w-5xl items-stretch gap-0"
          >
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to start searching..."
              className="flex-1 bg-[#efe7d4] border border-cream-200 px-7 py-6 text-lg text-forest-800 placeholder-forest-800/40 focus:outline-none focus:border-tan-500"
            />
            <button
              type="submit"
              className="bg-tan-500 hover:bg-tan-600 text-white px-10 text-base tracking-wide transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-[#f5f1e8] pb-28">
        <div className="container-x">
          {filtered.length === 0 ? (
            <p className="text-center text-forest-800/70 py-20">
              No articles match &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
