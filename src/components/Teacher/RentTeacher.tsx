/* eslint-disable no-undef */
'use client';

import React, { Fragment, useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { Field, Form, Formik } from 'formik';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import toast from 'react-hot-toast';
import { getClass, getSubject } from '@/services/get';
import { postJob } from '@/services/job';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { useParams } from 'next/navigation';
import { getTeacherByid } from '@/services/teacher';
import { Dialog, Transition } from '@headlessui/react';

interface IProps {
  id: number;
  teacher: any;
}
export default function RentTeacher(props: IProps) {
  const [user] = useStore<ITeachers>('userInfo');
  const [subject, setSubject] = useState<ISubject[]>();
  const [subjectteacher, setSubjectTeacher] = useState<any>();
  const [classr, setClassr] = useState<IClass[]>();
  const [isOpen, setIsOpen] = useState(false);
  const { id: params } = useParams();

  const [isOpen2, setIsOpen2] = useState(false);
  function closeModal2() {
    setIsOpen2(false);
  }
  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClass = await getClass();
        const resTeacher = await getTeacherByid({ id: params });
        setSubject(resSubject);
        setClassr(resClass);
        setSubjectTeacher(resTeacher);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, [setSubject]);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (!user) {
      setIsOpen2(true);
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
            'mt-16 text-center bg-blue-tw1 hover:bg-blue-tw w-[90%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  uppercase'
          }
        >
          Thuê
        </button>
      ) : (
        ''
      )}
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2">
                    <p className="text-xl text-gray-500 text-center">
                      Vui lòng đăng nhập để Thuê
                    </p>
                  </div>

                  <div className="mt-4">
                    {/* <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                  >
                                    Got it, thanks!
                                  </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
