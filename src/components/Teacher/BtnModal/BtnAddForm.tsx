'use client';

import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { Field, Form, Formik } from 'formik';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { Filters } from '@/components';
import { getSubject } from '../../../../action/get';
import { postForm } from '@/services';

interface IProps {
  id: number;
}
export default function MyDialog({ id }: IProps) {
  const [user] = useStore<ITeachers>('userInfo');
  const [subject, setSubject] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        setSubject(resSubject);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, [setSubject]);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button
        onClick={openModal}
        className={
          'mt-16 text center bg-red-400 w-[90%] h-12 rounded-md text-1xl font-bold leading-normal tracking-normal text-white  uppercase'
        }
      >
        Thuê
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[600px]'}>
          <ModalTitle>Thuê gia sư</ModalTitle>
          <Formik
            className={''}
            onSubmit={async (values) => {
              const res = await postForm({ ...values });
              console.log(res);
            }}
            initialValues={{
              idUser: 5,
              idTeacher: 1,
            }}
          >
            <Form className={'flex flex-col gap-5 pt-5 font-medium'}>
              <div className={'flex flex-col gap-5 px-5'}>
                <label className={'grid grid-cols-2'}>
                  <span>Gia sư</span>
                  <span>{user?.name}</span>
                </label>
                <label className={'grid grid-cols-2 '}>
                  <div className={'h-fit my-auto content-center'}>Môn học </div>
                  <Filters
                    data={subject}
                    name={'idSubject'}
                    textName={'Môn học'}
                    classnames={'py-2 px-4 border rounded-lg'}
                  />
                  {/*<div>*/}
                  {/*  {subject?.map((i: ISubject) => {*/}
                  {/*    return (*/}
                  {/*      <label key={i?.id}>*/}
                  {/*        <Field*/}
                  {/*          type={'checkbox'}*/}
                  {/*          name={'subject'}*/}
                  {/*          value={`${i?.id}`}*/}
                  {/*          className={'m-1'}*/}
                  {/*        />*/}
                  {/*        {i?.name}*/}
                  {/*      </label>*/}
                  {/*    );*/}
                  {/*  })}*/}
                  {/*</div>*/}
                </label>
              </div>
              <div
                className={
                  'flex gap-1 border-t border-t-gray-300 justify-end p-2'
                }
              >
                <button
                  type="submit"
                  className={
                    'rounded-md border border-transparent bg-red-400 text-sx font-medium text-slate-100 hover:bg-red-600 px-2'
                  }
                  onClick={closeModal}
                >
                  Đăng kí
                </button>
                <button
                  type="button"
                  className={
                    ' rounded-md border border-gray-500 px-2 py-2 text-gray-500 text-sx font-medium hover:bg-red-600 '
                  }
                  onClick={closeModal}
                >
                  Đóng
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </MyModal>
    </div>
  );
}
