'use client';
import React, { useEffect, useState } from 'react';

import { Form, Formik, Field } from 'formik';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';
import toast from 'react-hot-toast';
import { putJob } from '@/services/job';
interface IJob {
  user: {
    id: number;
    idUser: string;
    idTeacher: string;
    idSubject: string;
    subject: string[];
    class: string[];
    teacherImage: string;
    status: number;
    description: string;
  };
}

export default function FormAccept({ user }: IJob) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  // const reloadPageAfterDelay = () => {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 3000);
  // };
  return (
    <div>
      <button
        onClick={openModal}
        className={
          'font-medium text-blue-6000 border py-2 px-4 hover:bg-blue-tw1 hover:text-white'
        }
      >
        Xác nhận
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={''}>
          <ModalTitle>Xác nhận thuê</ModalTitle>
          <Formik
            className={''}
            onSubmit={(values) => {
              console.log(values);
              (async () => {
                try {
                  await putJob({ ...values });
                  toast.success('Xác nhận thành công !', {
                    duration: 3000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                      primary: '#000',
                      secondary: '#fff',
                    },
                  });
                  // reloadPageAfterDelay();
                } catch (ex: any) {
                  console.log(ex);
                }
              })();
            }}
            initialValues={{
              id: user?.id,
              status: '',
              description: '',
            }}
          >
            <Form className={'min-w-[500px]'}>
              <div className={'flex flex-col gap-5 p-5'}>
                <label className={'grid grid-cols-2'}>
                  <span>Người thuê</span>
                  <span>{user?.idUser}</span>
                </label>
                <label className={'grid grid-cols-2'}>
                  <span>Môn học:</span>
                  <span>{user?.idSubject}</span>
                </label>
                <div className={'flex gap-3'}>
                  <label className={'flex gap-3'}>
                    <Field type="radio" name="status" value="1" />
                    Đồng ý
                  </label>
                  <label className={'flex gap-3'}>
                    <Field type="radio" name="status" value="2" />
                    Từ chối
                  </label>
                </div>
                <label className={'relative'}>
                  <Field
                    name="description"
                    as={'textarea'}
                    className={
                      'p-3 rounded-md w-full outline-none border-2 border-gray-500 hover:border-black duration-200 peer focus:black bg-white'
                    }
                    rows={'4'}
                    required={true}
                  />
                  <span
                    className={
                      'absolute left-0 top-2 px-2 text-lg peer-focus:text-black pointer-events-none duration-200 peer-focus:text-base peer-focus:-translate-y-5 bg-white ml-2 peer-valid:text-base peer-valid:-translate-y-5'
                    }
                  >
                    Chú thích
                  </span>
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
                  Đồng ý
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
