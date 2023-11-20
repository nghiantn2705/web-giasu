import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import { GlobalContextProvider } from '@/contexts';
import Layout from '@/components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

const roboto = Roboto({ weight: ['500', '400', '700'], subsets: ['latin'] });
export const metadata: Metadata = {
  title: {
    default: 'Gia Sư Poly',
    template: `%s | Poly`,
  },
  icons: {
    icon: '_favicon.ico',
  },
  description: 'Tìm kiếm gia sư',
};
interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.css"
          rel="stylesheet"
        />
      </Head>
      <body className={roboto.className}>
        <GlobalContextProvider store={[]}>
          <Toaster />
          <Layout>
            <div className={'mt-[70px] min-h-content'}>{props.children}</div>
          </Layout>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
