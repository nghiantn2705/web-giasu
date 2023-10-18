import React, { useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Modal';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import RegisterUser from '@/components/Auth/Users/Register';

const SigninUser = () => {
  let [isOpenLogin, setIsOpenLogin] = useState(false);
  let [isOpenRegister, setOpenRegister] = useState(false);
  function closeModal() {
    setIsOpenLogin(false);
  }
  function openModal() {
    setIsOpenLogin(true);
  }
  function closeModalRegister() {
    setOpenRegister(false);
  }
  function openModalRegister() {
    setOpenRegister(true);
  }
  return (
    <div>
      <button onClick={openModal} type="button" className={'uppercase'}>
        Đăng Nhập/Đăng ký
      </button>
      <MyModal visible={isOpenLogin} onClose={closeModal}>
        <div className={'w-[400px]'}>
          <ModalTitle>
            <div
              className={'flex flex-col justify-center items-center mt-12 mb-5'}
            >
              <Image src={'/logo.png'} alt={''} width={50} height={100} />
              <h4 className={'mt-1 pb-1 text-xl font-semibold inline-block'}>
                Xin chào đến với GS7
              </h4>
              <p className="mb-4 text-center">
                Vui lòng đăng nhập tài khoản của phụ huynh
              </p>
            </div>
          </ModalTitle>
          <div className={'w-full'}>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => console.log(values)}
            >
              <Form className={'flex flex-col gap-5'}>
                <Field
                  type={'email'}
                  name={'email'}
                  placeholder={'Tên đăng nhập hoặc email'}
                  className={
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                  }
                />
                <Field
                  type={'password'}
                  name={'password'}
                  placeholder={'Nhập mật khẩu'}
                  className={
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                  }
                />
                <Link
                  href={'/'}
                  className={
                    'text-right text-sm text-gray-600 hover:text-black'
                  }
                >
                  Quên mật khẩu?
                </Link>
                <button
                  type={'submit'}
                  className={
                    'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white'
                  }
                >
                  Đăng nhập
                </button>
              </Form>
            </Formik>
            <button
              type={'button'}
              className={
                'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white w-full mt-5'
              }
            >
              Google
            </button>
          </div>
          <p className={'text-sm text-center my-5'}>
            Chưa có tài khoản? {''}
            <button
              type={'button'}
              onClick={() => {
                openModalRegister();
              }}
              className={
                'hover:text-blue-500 decoration-1 hover:underline hover:underline-offset-4'
              }
            >
              <RegisterUser
                visible={isOpenRegister}
                onClose={closeModalRegister}
              />
              Đăng ký
            </button>
          </p>
        </div>
      </MyModal>
    </div>
  );
};

export default SigninUser;
