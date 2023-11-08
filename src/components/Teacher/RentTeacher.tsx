'use client';

import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { Field, Form, Formik } from 'formik';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import toast from 'react-hot-toast';
import { getClass, getSubject } from '@/services/get';
import { postJob } from '@/services/job';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';

interface IProps {
  id: number;
}
export default function RentTeacher(props: IProps) {
  const [user] = useStore<ITeachers>('userInfo');
  const [subject, setSubject] = useState<ISubject[]>();
  const [classr, setClassr] = useState<IClass[]>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClass = await getClass();
        setSubject(resSubject);
        setClassr(resClass);
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
      {user?.role == 'user' ? (
        <button
          onClick={openModal}
          className={
            'mt-16 text-center bg-blue-tw hover:bg-blue-tw1 w-[90%] h-12 rounded-md text-1xl leading-normal tracking-normal text-white  uppercase'
          }
        >
          Thuê
        </button>
      ) : (
        ''
      )}

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[600px]'}>
          <ModalTitle>Thuê gia sư</ModalTitle>
          <Formik
            className={''}
            onSubmit={async (values) => {
              const res = await postJob({ ...values });
              toast.success('Vui lòng đợi gia sư đồng ý !', {
                duration: 3000,
                position: 'top-right',
                icon: '✅',
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
              });
              console.log(res);
            }}
            initialValues={{
              idUser: user?.id,
              idTeacher: props?.id,
              class: [],
              subject: [],
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
                  <div>
                    {subject?.map((i: ISubject) => {
                      return (
                        <label key={i?.id}>
                          <Field
                            type={'checkbox'}
                            name={'subject'}
                            value={`${i?.id}`}
                            className={'m-1'}
                          />
                          {i?.name}
                        </label>
                      );
                    })}
                  </div>
                </label>
                <label className={'grid grid-cols-2 '}>
                  <div className={'h-fit my-auto content-center'}>Môn học </div>
                  <div>
                    {classr?.map((i: IClass) => {
                      return (
                        <label key={i?.id}>
                          <Field
                            type={'checkbox'}
                            name={'class'}
                            value={`${i?.id}`}
                            className={'m-1'}
                          />
                          {i?.class}
                        </label>
                      );
                    })}
                  </div>
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
