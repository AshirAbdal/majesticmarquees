import type { Metadata } from 'next';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Majestic Marquees & Tents',
  description: 'Luxury marquee and stretch tent hire for weddings, events and bespoke outdoor occasions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
