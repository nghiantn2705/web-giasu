import Home from '@/components/Teacher/Home';
import React from 'react';
import Teacher from '@/components/Teacher/Teacher';
import { Metadata } from 'next';
import Footer from '@/components/Layout/Footer';
import SortRate from '@/components/Teacher/SortRate';

import { getFilter } from '@/services/fillter';
import { getClass, getSubject } from '@/services/get';

export const metadata: Metadata = {
  title: 'Thuê Gia Sư',
  description: 'Trang thuê gia sư',
};
export default async function App(props: any) {
  const teachers = await getFilter(props?.searchParams);
  const subject = await getSubject();
  const classes = await getClass();
  return (
    <>
      <Home subject={subject} classes={classes}>
        <SortRate teachers={teachers} />
        <div className={'relative py-5'}>
          <div
            className={
              ' before:absolute before:border-t-blue-tw before:border-t-2 before:top-9 before:w-[96%] before:z-0'
            }
          >
            <span className={'text-2xl bg-white px-3 relative z-10 uppercase'}>
              Tất cả
            </span>
          </div>
          <Teacher teachers={teachers} />
        </div>
        <Footer />
      </Home>
    </>
  );
}
