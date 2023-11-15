'use client';

import React, { useEffect, useState } from 'react';
import { IDisctrict } from '@/types/IDistrict';
import { useRouter } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBook, BsSearch } from 'react-icons/bs';
import { getDistrict, getSubject, getClass } from '@/services/get';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import queryString from 'query-string';
import { Formik, Form, Field } from 'formik';

const SelectFilter = () => {
  const [districts, setDistricts] = useState<IDisctrict[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [classes, setClass] = useState<IClass[]>();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const resDistricts = await getDistrict();
      const resSubject = await getSubject();
      const resClass = await getClass();
      setDistricts(resDistricts);
      setSubject(resSubject);
      setClass(resClass);
    })();
  }, []);

  return (
    <div className={'relative'}>
      <Formik
        onSubmit={(values) => {
          router.push(`/timkiemgiasu?${queryString.stringify(values)}`);
        }}
        initialValues={{ DistrictID: '' }}
      >
        <Form className={'grid grid-cols-3'}>
          <div className={'flex flex-col gap-5'}>
            <span className={'font-bold'}>Khu Vực :</span>
            <div className={'relative border-r'}>
              <AiOutlineHome
                className={'absolute text-2xl top-3 left-3 text-blue-tw'}
              />
              <Field
                as={'select'}
                className={'py-3 pl-10 w-full text-lg bg-gray-100'}
                name={'DistrictID'}
              >
                <option>Khu vực</option>
                {districts?.map((items: IDisctrict) => {
                  return (
                    <option key={items?.id} value={items?.id}>
                      {items?.name}
                    </option>
                  );
                })}
              </Field>
            </div>
          </div>
          <div className={'flex flex-col gap-5'}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={'font-bold '}>Môn học:</label>
            <div className={'relative border-r'}>
              <BsBook
                className={'absolute text-2xl top-3 left-3 text-blue-tw'}
              />
              <Field
                as={'select'}
                className={'py-3 pl-10 w-full text-lg bg-gray-100'}
                name={'subject'}
              >
                <option value={''}>Lớp</option>
                {subject?.map((items: ISubject) => {
                  return (
                    <option key={items?.id} value={items?.id}>
                      {items?.name}
                    </option>
                  );
                })}
              </Field>
            </div>
          </div>
          <div className={'flex flex-col gap-5'}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={'font-bold '}>Lớp:</label>
            <div className={'relative border-r'}>
              <BsBook
                className={'absolute text-2xl top-3 left-3 text-blue-tw'}
              />
              <Field
                as={'select'}
                className={'py-3 pl-10 w-full text-lg bg-gray-100'}
                name={'class'}
              >
                <option value={''}>Lớp học</option>
                {classes?.map((items: IClass) => {
                  return (
                    <option key={items?.id} value={items?.id}>
                      {items?.class}
                    </option>
                  );
                })}
              </Field>
            </div>
          </div>
          <button
            type={'submit'}
            className={
              'mt-8 py-2 px-4 flex items-center gap-2 border rounded-md bg-blue-tw1 text-white hover:bg-blue-tw'
            }
          >
            {' '}
            <BsSearch />
            Tìm kiếm
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SelectFilter;
