'use client';
import React from 'react';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import imageAsset from '/public/banner-login.png';
const page = () => {
  return (
    <div className=" mt-40 mb-20 w-[1200px] m-auto shadow-xl ">
      <div className="flex justify-between">
        <Link href={'/'}>
          <button
            type={'button'}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-red-400 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Quay Lại
          </button>
        </Link>
        <Link href={''}>
          <button
            type={'button'}
            className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Đăng kí
          </button>
        </Link>
      </div>
      <div className="bg-red-400 w-full h-[13px]">{''}</div>
      <div className=" flex justify-center ">
        <div className="w-[600px] border-r-2 border-red-400 mb-10 mt-10">
          <div className="w-[450px] h-full ml-[60px]">
            <Image
              src={imageAsset}
              alt={''}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className=" w-[600px] border-l-2 border-red-400 mb-10 mt-10 mr-12">
          <div className="pl-[60px] ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
