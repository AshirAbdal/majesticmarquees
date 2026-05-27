# Majestic Marquees Blog

The blog site for Majestic Marquees & Tents. Deploys to
`https://blog.majesticmarquees.com/` as a separate React + Vite app sharing
the look-and-feel of the main marketing site.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output in `dist/` can be uploaded to the `blog.majesticmarquees.com`
sub-domain root (the build uses relative asset URLs).

## Notes

- The header / footer link back to the main marketing site at
  `https://majesticmarquees.com/`.
- Posts are defined inline in `src/data/posts.ts` — swap this for a CMS
  (Sanity / Strapi / MDX) when ready.
