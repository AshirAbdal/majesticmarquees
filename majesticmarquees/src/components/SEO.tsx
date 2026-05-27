import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }: { title: string; description?: string }) {
  return (
    <Helmet>
      <title>{title} — Majestic Marquees &amp; Tents</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
