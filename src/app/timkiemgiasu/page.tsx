'use client';
import Home from '@/components/Teacher/Home';
import React, { useEffect, useState } from 'react';
import Teacher from '@/components/Teacher/Teacher';
import SelectFilter from '@/components/Teacher/SelectFilter';
import Footer from '@/components/Layout/Footer';
import { getFilter } from '@/services/fillter';
import { ITeachers } from '@/types/ITeachers';

export default function App(props: any) {
  const [teacher, setTeacher] = useState<ITeachers[]>();
  useEffect(() => {
    (async () => {
      const teachers = await getFilter(props?.searchParams);
      setTeacher(teachers);
    })();
  }, []);
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
          {teacher ? <Teacher teachers={teacher} /> : ''}
        </div>
        <Footer />
      </Home>
    </>
  );
}
