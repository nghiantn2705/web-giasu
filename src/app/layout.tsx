import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import { GlobalContextProvider } from '@/contexts';
import Layout from '@/components/Layout';
import { Toaster } from 'react-hot-toast';

const roboto = Roboto({ weight: '400', subsets: ['latin-ext'] });
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
      <body className={roboto.className}>
        <GlobalContextProvider store={[]}>
          <Toaster />
          <Layout>
            <div className={'mt-[67px] min-h-content'}>{props.children}</div>
          </Layout>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
