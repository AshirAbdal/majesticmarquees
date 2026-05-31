import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Blog | Majestic Marquees',
  description: 'Stories about luxury events, outdoor elegance, and extraordinary gatherings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
