'use client';

import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div className={''}>
      <div className={'flex mt-[81px]'}>
        <main className={'max-w-[1280px] mx-auto py-5'}>
          <Banner />
        </main>
      </div>
    </div>
  );
}
