'use client';
import React from 'react';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import imageAsset from '/public/iconos_alumnos.png';
const page = () => {
  return (
    <div className=" mt-28 mb-20 w-[1200px] m-auto ">
      <div className=" flex justify-center ">
        <div className=" w-[600px] mb-10 mt-10 ml-24">
          <div className="pl-[60px] ">
            <div
              className={'flex flex-col justify-center items-center mt-2 mb-5'}
            >
              <Image
                src={'/logo.png'}
                alt={''}
                width={50}
                height={100}
                className={'h-auto w-auto'}
              />
              <h4 className={'mt-1 pb-1 text-xl font-semibold inline-block'}>
                Xin chào đến với GS7
              </h4>
              <p className="mb-4 text-center">
                Vui lòng đăng ký tài khoản của phụ huynh
              </p>
            </div>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => console.log(values)}
            >
              <Form className={'flex flex-col gap-5'}>
                <Field
                  type={'text'}
                  name={'name'}
                  placeholder={'Tên đăng nhập'}
                  className={
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                  }
                />
                <Field
                  type={'email'}
                  name={'email'}
                  placeholder={'Email đăng nhập'}
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
                  type={'text'}
                  name={'adress'}
                  placeholder={'Địa chỉ của bạn'}
                  className={
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                  }
                />
                <button
                  type={'submit'}
                  className={
                    'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white'
                  }
                >
                  Đăng Ký
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="w-[600px] ml-20 mb-10 mt-32">
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
      </div>
    </div>
  );
};

export default page;
