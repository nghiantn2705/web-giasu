'use client';
import { useState } from 'react';

import MyModal, { ModalTitle } from '@/components/Modal';
import { Field, Form, Formik } from 'formik';

export default function MyDialog() {
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
          'mt-16 text center bg-red-400 w-[90%] h-14 rounded-md text-1xl font-bold leading-normal tracking-normal text-white  border-0 uppercase'
        }
      >
        Thuê
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'flex flex-col gap-5'}>
          <ModalTitle>
            <p
              className={
                'text-2xl text-center font-medium leading-6 text-gray-900 uppercase'
              }
            >
              {' '}
              Nhập thông tin thuê gia sư
            </p>
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
            <Form className={'flex flex-col gap-5'}>
              <div
                className={' grid grid-cols-2 gap-x-8 gap-y-4 max-w-screen-lg'}
              >
                <div className={'flex flex-col gap-2'}>
                  <label
                    htmlFor="Nhập họ và tên"
                    className={
                      'block text-xl font-medium leading-6 text-gray-900'
                    }
                  >
                    Nhập họ và tên :
                  </label>
                  <Field
                    placeholder="Nhập họ và tên"
                    name="name"
                    className="px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className={'flex flex-col gap-2'}>
                  <label
                    htmlFor="Nhập số điện thoại "
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Nhập số điện thoại :
                  </label>
                  <Field
                    placeholder="Nhập số điện thoại "
                    type="number"
                    name="contact"
                    className="px-3 w-[95%] h-[50px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className={'flex flex-col gap-2'}>
                  <label
                    htmlFor="Nhập địa chỉ"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Nhập địa chỉ :
                  </label>
                  <Field
                    placeholder="Nhập địa chỉ"
                    type="text"
                    name="address"
                    className="px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className={'flex flex-col gap-2'}>
                  <label
                    htmlFor="Học trường học sinh "
                    className={
                      'block text-xl font-medium leading-6 text-gray-900'
                    }
                  >
                    Học sinh trường :
                  </label>
                  <Field
                    placeholder={'Nhập trường học sinh '}
                    type={'text'}
                    name={'school'}
                    className={
                      'px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    }
                  />
                </div>
                <div className={'flex flex-col gap-2'}>
                  <p
                    className={
                      '  block text-xl font-medium leading-6 text-gray-900'
                    }
                  >
                    Chọn lớp học sinh :
                  </p>
                  <div className={'grid grid-cols-6 gap-2'}>
                    {[
                      ...Array(
                        'Lớp 1',
                        'Lớp 2',
                        'Lớp 3',
                        'Lớp 4',
                        'Lớp 5',
                        'Lớp 6',
                        'Lớp 7',
                        'Lớp 8',
                        'Lớp 9',
                        'Lớp 10',
                        'Lớp 11',
                        'Lớp 12',
                      ),
                    ].map((i) => {
                      return (
                        <label key={i}>
                          <Field
                            type={'checkbox'}
                            name={'class'}
                            value={`${i}`}
                            className={'m-1'}
                          />
                          {i}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className={'flex flex-col gap-2'}>
                  <p
                    className={
                      '  block text-xl font-medium leading-6 text-gray-900'
                    }
                  >
                    Chọn môn học :
                  </p>
                  <div className={'grid grid-cols-6 gap-2 content-center'}>
                    {[
                      ...Array(
                        'Toán',
                        'Lý',
                        'Hoá',
                        'Văn',
                        'Anh',
                        'Sinh',
                        'Sử',
                        'Địa',
                      ),
                    ].map((i) => {
                      return (
                        <label key={i}>
                          <Field
                            type={'checkbox'}
                            name={'subject'}
                            value={`${i}`}
                            className={'m-1'}
                          />
                          {i}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className={'flex flex-col gap-2'}>
                  {' '}
                  <label
                    htmlFor="Nhập họ và tên"
                    className={
                      'block text-xl font-medium leading-6 text-gray-900'
                    }
                  >
                    Thời gian học :
                  </label>
                  <div className="mt-2">
                    <Field
                      placeholder="Ví dụ: T2 - T4 - T6; 17h - 19h"
                      type={'text'}
                      name={'timeslot'}
                      className={
                        'px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      }
                    />
                  </div>
                </div>
                <div className={'flex flex-col gap-2'}>
                  <label
                    htmlFor="Nhập họ và tên"
                    className={
                      'block text-xl font-medium leading-6 text-gray-900'
                    }
                  >
                    Yêu cầu khác :
                  </label>
                  <div className="mt-2">
                    <textarea
                      name={'opinion'}
                      className={
                        'px-3 block w-[98%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      }
                    />
                  </div>
                </div>
              </div>

              <div className={'text-right'}>
                <button
                  type="submit"
                  className=" w-[140px] h-[50px]  rounded-md border border-transparent bg-red-400 px-4 py-2 text-sx font-medium text-slate-100 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Đăng kí
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </MyModal>
    </div>
  );
}
