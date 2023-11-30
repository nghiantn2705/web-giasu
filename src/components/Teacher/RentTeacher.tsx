/* eslint-disable no-undef */
'use client';

import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { FastField, Field, Form, Formik } from 'formik';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import toast from 'react-hot-toast';
import { getSubjectAndClass } from '@/services/get';
import { postJob } from '@/services/job';
import { useParams } from 'next/navigation';
import { ISubjectAndClass } from '@/types/ISubjectAndClass';

interface IProps {
  id: number;
  teacher: any;
}
export default function RentTeacher(props: IProps) {
  const [user] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  const { id: params } = useParams();
  const [subjectAndClass, setSubjectAndClass] = useState<ISubjectAndClass>();
  console.log(user);

  useEffect(() => {
    (async () => {
      try {
        const resSubjectAndClass = await getSubjectAndClass({ id: params });
        setSubjectAndClass(resSubjectAndClass);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, [params]);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (parseInt(user.coin) < 50000) {
      toast.error('Vui lòng Nạp tiền !', {
        duration: 3000,
      });
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div>
      {user?.role !== 'teacher' ? (
        <button
          onClick={openModal}
          className={
            'mt-5 mb-8 mx-auto text-center bg-blue-tw1 hover:bg-blue-tw w-[50%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  '
          }
        >
          Xác nhận thuê
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
              values.class = values.class.join(',');
              values.subject = values.subject.join(',');
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
                  <span>Người thuê</span>
                  <span>{user?.name}</span>
                </label>
                <div className={'grid grid-cols-2 gap-5'}>
                  <label className={'h-fit my-auto content-center'}>
                    Môn học{' '}
                  </label>
                  <FastField
                    as="select"
                    name="class"
                    multiple
                    className="w-full p-2 border border-gray-300 rounded-md appearance-none"
                  >
                    {subjectAndClass?.class_id?.map((i) => (
                      <option key={i?.id} value={`${i?.id}`}>
                        {i?.class}
                      </option>
                    ))}
                  </FastField>
                </div>
                <div className={'grid grid-cols-2 gap-5'}>
                  <label className={'h-fit my-auto content-center'}>
                    Môn học{' '}
                  </label>
                  <FastField
                    as="select"
                    name="subject"
                    multiple
                    className={'w-full p-2 border border-gray-300 rounded-md'}
                  >
                    {subjectAndClass?.subject?.map((item) => (
                      <option key={item?.id} value={`${item?.id}`}>
                        {item?.name}
                      </option>
                    ))}
                  </FastField>
                </div>
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
                    'rounded-md border border-gray-500 px-2 py-2 text-gray-500 text-sx font-medium hover:bg-red-600'
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
