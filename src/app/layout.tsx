import { Header } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gia Sư Poly',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div
          className={
            'container mt-[100px] md:mt-[59px] lg:border-x lg:shadow-x-md px-0'
          }
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
