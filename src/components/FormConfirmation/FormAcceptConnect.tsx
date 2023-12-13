'use client';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { Form, Formik, Field, ErrorMessage } from 'formik';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';
import toast from 'react-hot-toast';

import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { putConnect } from '@/services/connect';

interface IJob {
  user: {
    id: number;
    idJob: number;
    idUser: string;
    idTeacher: string;
    noteUser: string;
    noteTeacher: string;
    confirmUser: number;
    confirmTeacher: number;
    status: number;
    userName: string;
  };
}

export default function FormAcceptConnect({ user }: IJob) {
  const [userInfo] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (parseInt(userInfo.coin) < 50000 || userInfo.coin == null) {
      toast.error('Vui lòng Nạp tiền !', {
        duration: 3000,
      });
    } else {
      setIsOpen(true);
    }
  };
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  const validationSchema = Yup.object({
    confirm_teacher: Yup.string().required('Vui lòng chọn Đồng ý hoặc Từ chối'),
    note_teacher: Yup.string().required('Vui lòng nhập chú thích'),
  });
  return (
    <div>
      <button
        onClick={openModal}
        className={
          'mt-5 mb-8 mx-auto text-center bg-blue-tw1 hover:bg-blue-tw w-[50%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  '
        }
      >
        Từ chối thuê
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={''}>
          <ModalTitle>Lý do từ chối</ModalTitle>
          <Formik
            className={''}
            onSubmit={async (values) => {
              values.confirm_teacher = 2;
              try {
                await putConnect({ ...values });
                toast.success('Từ chối thành công !', {
                  duration: 3000,
                  position: 'top-right',
                  icon: '✅',
                  iconTheme: {
                    primary: '#000',
                    secondary: '#fff',
                  },
                });
                setIsOpen(false);
                reloadPageAfterDelay();
              } catch (ex: any) {
                console.log(ex);
              }
            }}
            initialValues={{
              id: user?.id,
              confirm_teacher: 2,
            }}
            validationSchema={validationSchema}
          >
            <Form className={'min-w-[500px]'}>
              <div className={'flex flex-col gap-5 p-5'}>
                <label className={'relative'}>
                  <Field
                    name="note_teacher"
                    as={'textarea'}
                    className={
                      'p-3 rounded-md w-full outline-none border-2 border-gray-500 hover:border-black duration-200 peer focus:black bg-white'
                    }
                    rows={'4'}
                    // required={true}
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
                    'rounded-md border border-transparent bg-blue-tw1 text-sx font-medium text-slate-100 hover:bg-blue-tw px-2'
                  }
                  onClick={closeModal}
                >
                  Đồng ý
                </button>
                <button
                  type="button"
                  className={
                    ' rounded-md border border-gray-500 px-2 py-2 text-gray-500 text-sx font-medium hover:bg-blue-tw1 hover:text-white '
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
