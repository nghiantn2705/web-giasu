import Home from '@/components/Teacher/Home';
import React from 'react';
import Teacher from '@/components/Teacher/Teacher';
import { getFilter } from '@/services';
import SelectFilter from '@/components/Teacher/SelectFilter';
import { Metadata } from 'next';
import Footer from '@/components/Layout/Footer';
import SortRate from '@/components/Teacher/SortRate';

export const metadata: Metadata = {
  title: 'Tìm gia sư',
  description: 'Tìm thuê gia sư',
};
export default async function App(props: any) {
  const teachers = await getFilter(props.searchParams);

  return (
    <>
      <Home>
        <SelectFilter />
        <Teacher teachers={teachers} />
      </Home>
      <Footer />
    </>
  );
}
