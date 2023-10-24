'use client';
import { useState } from 'react';

import MyModal, { ModalTitle } from '@/components/Modal';
import { Form, Formik } from 'formik';

export default function MyHistory() {
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
          'mt-16 text center bg-red-400 w-[20%] h-14 rounded-md text-1xl font-bold leading-normal tracking-normal text-white  border-0 uppercase'
        }
      >
        Thuê
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={''}>
          <ModalTitle>
            <h1 className="pt-10 text-3xl font-bold text-center">
              Lịch sử đăng kí gia sư
            </h1>
          </ModalTitle>
          <Formik
            className={''}
            onSubmit={(values) => console.log(values)}
            initialValues={{
              name: '',
              contact: '',
              address: '',
              school: '',
              class: '',
              subject: '',
              timeslot: '',
              opinion: '',
            }}
          >
            <Form className={'w-[1000px]'}>
              <main>
                <table
                  className={'mt-5 min-w-full bg-white rounded-lg shadow-lg'}
                >
                  <thead>
                    <tr className={'bg-red-400 text-white'}>
                      <th className={'py-3 px-6 text-left  '}>STT</th>
                      <th className={'py-3 px-6 text-left '}>Tên gia sư</th>
                      <th className={'py-3 px-6 text-center '}>
                        Thời gian thuê
                      </th>
                      <th className={'py-3 px-6 text-center '}>
                        Số điện thoại
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={'bg-gray-100'}>
                      <td className={'py-3 px-6'}>1</td>
                      <td className={'py-3 px-6'}>pham van tung</td>
                      <td className={'py-3 px-6 text-center'}>2h-10h</td>
                      <td className={'py-3 px-6 text-center'}>01479566311</td>
                    </tr>
                  
                  </tbody>
                </table>
              </main>
              <div className={'text-right'}></div>
            </Form>
          </Formik>
        </div>
      </MyModal>
    </div>
  );
}
