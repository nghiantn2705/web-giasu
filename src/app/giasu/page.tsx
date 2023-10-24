'use client';

import Home from '@/components/Teacher/Home';
import React, { useEffect, useState } from 'react';
import { getDistrict, getSubject, getTeachers } from '../../../action/get';
import Teacher from '@/components/Teacher/Teacher';
import { Form, Formik } from 'formik';
import { Filters } from '@/components';
import { getFilter } from '@/services';
import { ITeachers } from '@/types/ITeachers';

export default function App() {
  const [teachers, setTeachers] = useState<[ITeachers]>();
  const [districts, setDistricts] = useState<any>();
  const [subject, setSubject] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await getTeachers();
        const resDistricts = await getDistrict();
        const resSubject = await getSubject();
        setTeachers(res);
        setDistricts(resDistricts);
        setSubject(resSubject);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);
  return (
    <>
      <Home>
        <Formik
          initialValues={{
            districts: '',
            subject: '',
          }}
          onSubmit={async (values) => {
            const res = await getFilter({ ...values });
            setTeachers(res);
          }}
        >
          <Form className={'flex justify-between'}>
            <div className={'grid grid-cols-2 gap-2 basis-9/12'}>
              <Filters
                data={districts}
                name={'districts'}
                textName={'Khu Vực'}
                classnames={'w-full border p-2 rounded-md'}
              />
              <Filters
                data={subject}
                name={'subject'}
                textName={'Môn học'}
                classnames={'w-full border p-2 rounded-md'}
              />
            </div>

            <button
              type={'submit'}
              className={
                'px-4 py-2 border rounded-md hover:text-white hover:bg-red-400'
              }
            >
              {' '}
              Tìm kiếm
            </button>
          </Form>
        </Formik>
        <Teacher teachers={teachers} />
      </Home>
    </>
  );
}
