'use client';
import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import {} from '@/services';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import FormAccept from '../FormConfirmation/FormAccept';
import { putJob } from '@/services/job';
import toast from 'react-hot-toast';
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

export default function FormRefuseProcedure({ user }: IJob) {
  const [isOpen, setIsOpen] = useState(false);
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
          'font-medium text-blue-6000 border py-2 px-4 hover:bg-blue-tw1 hover:text-white'
        }
      >
        Từ chối
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[800px]'}>
          <ModalTitle>Điều khoản thuê gia sư</ModalTitle>
          <div className={'text-xl px-10 py-5 font-bold'}>
            <p className={' px-5 pt-5'}>
              • Nếu gia sư không xác nhận thì sẽ đồng nghĩa với việc không có
              thông tin liên hệ của người thuê.
            </p>
          </div>
          <div className={'text-center'}>
            <FormAccept user={user} />
            {/* <Formik
              className={''}
              onSubmit={(values) => {
                // Đặt giá trị status là 1 trước khi gửi lên server
                values.status = 2;

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
                    reloadPageAfterDelay();
                  } catch (ex: any) {
                    console.log(ex);
                  }
                })();
              }}
              initialValues={{
                id: user?.id,
                status: 2,
                description: '',
              }}
            >
              <Form className={'min-w-[500px]'}>
                <div
                  className={
                    'flex gap-1 border-t border-t-gray-300 justify-end p-2'
                  }
                >
                  <button
                    type="submit"
                    className={
                      'mt-5 mb-8 mx-auto text-center bg-blue-tw1 hover:bg-blue-tw w-[50%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  '
                    }
                    onClick={closeModal}
                  >
                    <FormAccept user={user} />
                  </button>
                </div>
              </Form>
            </Formik> */}
          </div>
        </div>
      </MyModal>
    </div>
  );
}
