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
          <Form>
            <Filters data={districts} name={'districts'} textName={'Khu Vực'} />
            <Filters data={subject} name={'subject'} textName={'Môn học'} />

            <button type={'submit'} className={'px-4 py-2 border'}>
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
