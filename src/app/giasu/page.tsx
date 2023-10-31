import Home from '@/components/Teacher/Home';
import React from 'react';
// import Teacher from '@/components/Teacher/Teacher';
// import { getFilter } from '@/services';
import SelectFilter from '@/components/Teacher/SelectFilter';
import { Metadata } from 'next';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Thuê Gia Sư',
  description: 'Trang thuê gia sư',
};
export default async function App(props: any) {
  console.log(props);
  // const teachers = await getFilter(props.searchParams);
  // console.log(teachers);

  return (
    <>
      <Home>
        <SelectFilter />
        {/* <Teacher teachers={teachers} /> */}
      </Home>
      <Footer />
    </>
  );
}
