import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Majestic Marquees',
  description: 'Admin panel for Majestic Marquees',
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
