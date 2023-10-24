'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import imageAsset from '/public/security.png';
import Image from 'next/image';
const page = () => {
  return (
    <main className={'pt-8 min-h-[100vh-116px]'}>
      <div
        className={
          'container m-auto shadow-xl border border-t-4 border-t-green-400 rounded-md py-8'
        }
      >
        <div className={'grid grid-cols-2 justify-items-center content-center'}>
          <div className={'py-8 shadow-xl w-full'}>
            <div className={'flex flex-col justify-center items-center my-4'}>
              <Image src={'/logo.png'} alt={''} width={50} height={100} />
            </div>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              <Form className={'flex flex-col gap-5 mx-4'}>
                <Field
                  type={'email'}
                  name={'email'}
                  placeholder={'Email của bạn'}
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
                <Field
                  type={'password'}
                  name={'password'}
                  placeholder={'Nhập lại mật khẩu'}
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
                    'border py-2 bg-green-400 text-white rounded-xl hover:bg-green-600 hover:text-white'
                  }
                >
                  Thay đổi mật khẩu
                </button>
              </Form>
            </Formik>
          </div>
          <div
            className={
              'w-auto h-auto flex flex-col items-center justify-center pl-4 '
            }
          >
            <Image
              src={imageAsset}
              alt={''}
              width={0}
              height={0}
              sizes="100vw"
              className={'w-[500px]'}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
