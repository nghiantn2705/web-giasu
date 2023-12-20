'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import FormAccept from '../FormConfirmation/FormAccept';
import { putJob } from '@/services/job';
import { toast } from 'react-toastify';
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

export default function FormConfirmProcedure({ user }: IJob) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
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
        <div className={'w-[800px]'}>
          <ModalTitle>Điều khoản thuê gia sư</ModalTitle>
          <div className={'text-xl px-10 py-5 font-bold'}>
            <p className={' px-5 py-5'}>
              {' '}
              • Gia sư bắt buộc phải có số dư trong tài khoản ít nhất{' '}
              <span className={'text-red-600'}> 50.000đ </span> thì mới có thể
              thực hiện việc xác nhận dạy.
            </p>
            <p className={' px-5 py-5'}>
              • Trường hợp tài khoản không đủ số dư, gia sư cần tiến hành bước
              nạp tiền để tiếp tục việc xác nhận dạy
            </p>
          </div>
          <div className={'text-center'}>
            <Formik
              className={''}
              onSubmit={(values) => {
                values.status = 1;
                (async () => {
                  try {
                    await putJob({ ...values });
                    toast.success('Xác nhận thành công !', {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                    reloadPageAfterDelay();
                  } catch (ex: any) {
                    toast.error(ex.message, {
                      position: 'top-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                  }
                })();
              }}
              initialValues={{
                id: user?.id,
                status: 1,
                description: '',
              }}
            >
              <Form className={'min-w-[500px]'}>
                <div className={'flex gap-1  justify-end p-2'}>
                  <button
                    type="submit"
                    className={
                      'mt-5 mb-8 mx-auto text-center bg-blue-tw1 hover:bg-blue-tw w-[50%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  '
                    }
                    onClick={closeModal}
                  >
                    Đồng ý
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </MyModal>
    </div>
  );
}
