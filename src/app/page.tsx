'use client';
import Banner from '@/components/Banner';
import { Navigation } from '@/components';
import { useEffect } from 'react';

const Home = () => {
  return (
    <div className={''}>
      <div className={'flex mt-[81px]'}>
        <Navigation />
        <main className={'max-w-[1280px] mx-auto py-5'}>
          <Banner />
        </main>
      </div>
    </div>
  );
};
