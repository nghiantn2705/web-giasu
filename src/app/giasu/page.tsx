import Home from '@/components/Teacher/Home';
import React from 'react';
import Teacher from '@/components/Teacher/Teacher';
import { getFilter } from '@/services';
import { Metadata } from 'next';
import Footer from '@/components/Layout/Footer';
import SortRate from '@/components/Teacher/SortRate';
import { Navigation } from '@/components';

export const metadata: Metadata = {
  title: 'Thuê Gia Sư',
  description: 'Trang thuê gia sư',
};
export default async function App(props: any) {
  const teachers = await getFilter(props?.searchParams);
  console.log(teachers);
  return (
    <>
      <Home>
        <SortRate teachers={teachers} />
        <Teacher teachers={teachers} />
        <Footer />
      </Home>
    </>
  );
}
