'use client';

import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react';
import { useStore } from '@/hook/use-store';
import toast from 'react-hot-toast';
import { editPassword } from '@/services/post';
import MyModalTransition from '@/components/Headless/ModalTransition';
import { MdOutlinePassword } from 'react-icons/md';
import { ITeachersDetail } from '@/types/ITeachersDetail';
const InfoUser = () => {
  const [userInfo] = useStore<ITeachersDetail>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        onClick={openModal}
        className={
          'flex items-center gap-2 border bg-white drop-shadow-md hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
        }
      >
        <MdOutlinePassword />
        Đổi mật khẩu
      </button>
      <MyModalTransition visible={isOpen} onClose={closeModal}>
        <div className={'p-8'}>
          <h3 className={'text-lg font-bold'}>Đổi mật khẩu</h3>
          <Formik
            initialValues={{ id: userInfo?.id }}
            onSubmit={async (values) => {
              try {
                const res = await editPassword({
                  ...values,
                });
                toast.success('Đổi mật khẩu thành công !', {
                  duration: 3000,
                  position: 'top-right',
                });
              } catch (ex) {
                toast.error('Vui lòng kiểm tra password !', {
                  duration: 3000,
                  position: 'top-right',
                });
              }
            }}
          >
            <Form className={'flex flex-col gap-5 justify-between py-4'}>
              <div className={'flex flex-col gap-2'}>
                <label htmlFor={'passwordold'}>Email</label>
                <Field
                  name={'email'}
                  id="email"
                  value={userInfo?.email}
                  className={'border p-2 rounded-md bg-slate-200 text-gray-500'}
                  readonly
                />
              </div>
              <div className={'flex flex-col gap-2'}>
                <label htmlFor={'passwordold'}>Mật khẩu cũ</label>
                <Field
                  name={'passwordlast'}
                  id="passwordlast"
                  placeholder={'Tên đăng nhập hoặc email'}
                  className={'border p-2 rounded-md'}
                />
              </div>
              <div className={'flex flex-col gap-2 '}>
                <label htmlFor={'passwordlast'}>Mật khẩu mới</label>
                <Field
                  type={'password'}
                  name={'password'}
                  id="password"
                  placeholder={'Tên đăng nhập hoặc email'}
                  className={'border p-2 rounded-md'}
                />
              </div>
              <div className={'flex flex-col gap-2 '}>
                <label htmlFor={'passwordlast'}>Nhập lại mật khẩu mới</label>
                <Field
                  type={'password'}
                  name={'password'}
                  id="password"
                  placeholder={'Tên đăng nhập hoặc email'}
                  className={'border p-2 rounded-md'}
                />
              </div>
              <button
                type={'submit'}
                className={
                  'col-span-2 border py-2 bg-blue-tw text-white hover:bg-blue-tw1 w-fit px-4'
                }
              >
                Đổi mật khẩu
              </button>
            </Form>
          </Formik>
        </div>
      </MyModalTransition>
    </>
  );
};

export default InfoUser;
