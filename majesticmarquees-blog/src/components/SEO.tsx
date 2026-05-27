import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
};

export default function SEO({ title, description, canonical }: Props) {
  const fullTitle = title
    ? `${title} — Majestic Marquees Blog`
    : 'Majestic Marquees Blog';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="article" />
    </Helmet>
  );
}
