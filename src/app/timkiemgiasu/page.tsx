import Home from '@/components/Teacher/Home';
import React from 'react';
import Teacher from '@/components/Teacher/Teacher';
import SelectFilter from '@/components/Teacher/SelectFilter';
import { Metadata } from 'next';
import Footer from '@/components/Layout/Footer';
import { getFilter } from '@/services/fillter';

export const metadata: Metadata = {
  title: 'Tìm gia sư',
  description: 'Tìm thuê gia sư',
};
export default async function App(props: any) {
  const teachers = await getFilter(props?.searchParams);

  return (
    <>
      <Home>
        <SelectFilter />
        <div className={'relative py-5'}>
          <div
            className={
              ' before:absolute before:border-t-blue-tw before:border-t-2 before:top-9 before:w-[96%] before:z-0'
            }
          >
            <span className={'text-2xl bg-white px-3 relative z-10 uppercase'}>
              Kết quả tìm kiếm
            </span>
          </div>
          <Teacher teachers={teachers} />
        </div>
        <Footer />
      </Home>
    </>
  );
}
