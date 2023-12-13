'use client';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import toast from 'react-hot-toast';
import { putConnect } from '@/services/connect';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
interface IJob {
  user: {
    id: number;
    idJob: number;
    idUser: string;
    idTeacher: string;
    note_user: string;
    noteTeacher: string;
    confirm_user: number;
    confirmTeacher: number;
    status: number;
    teacherName: string;
  };
}

export default function FormAcceptConnectUser({ user }: IJob) {
  const [userInfo] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
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
    note_user: Yup.string().required('Vui lòng nhập chú thích'),
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
            onSubmit={(values) => {
              values.confirm_user = 2;
              console.log(values);
              (async () => {
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
                  closeModal();
                  reloadPageAfterDelay();
                } catch (ex: any) {
                  console.log(ex);
                }
              })();
            }}
            initialValues={{
              id: user?.id,
              confirm_user: 2,
              note_user: '',
            }}
            validationSchema={validationSchema}
          >
            <Form className={'min-w-[500px]'}>
              <div className={'flex flex-col gap-5 p-5'}>
                <ErrorMessage
                  name="note_user"
                  component="div"
                  className="text-red-500"
                />
                <label className={'relative'}>
                  <Field
                    name="note_user"
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
                    'rounded-md border border-transparent bg-blue-tw1 text-sx font-medium text-slate-100 hover:bg-blue-tw px-2'
                  }
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
