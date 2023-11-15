'use client';
import Home from '@/components/Teacher/Home';
import React, { useEffect, useState } from 'react';
import Teacher from '@/components/Teacher/Teacher';
import SelectFilter from '@/components/Teacher/SelectFilter';
import Footer from '@/components/Layout/Footer';
import { getFilter } from '@/services/fillter';
import { getClass, getDistrict, getSubject } from '@/services/get';
import { IDisctrict } from '@/types/IDistrict';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { ITeachers } from '@/types/ITeachers';

export default function App(props: any) {
  const [teacher, setTeacher] = useState<ITeachers[]>();
  const [districts, setDistricts] = useState<IDisctrict[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [classer, setClasser] = useState<IClass[]>();
  useEffect(() => {
    (async () => {
      const teachers = await getFilter(props?.searchParams);
      const resDistricts = await getDistrict();
      const resSubject = await getSubject();
      const resClass = await getClass();
      setTeacher(teachers);
      setDistricts(resDistricts);
      setSubject(resSubject);
      setClasser(resClass);
    })();
  }, []);
  return (
    <>
      <Home>
        <SelectFilter
          district={districts}
          subject={subject}
          classer={classer}
        />
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
          {/*<Teacher teachers={teacher} />*/}
        </div>
        <Footer />
      </Home>
    </>
  );
}
