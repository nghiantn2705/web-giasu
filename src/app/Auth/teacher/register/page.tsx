'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
const page = () => {
  return (
    <div className=" mt-40 mb-20 w-[1200px] m-auto shadow-xl ">
      <h1>Hoàn thành đơn đăng kí của bạn</h1>
      <div className="">
        <p>
          Nói ngắn gọn với những học sinh tiềm năng về những gì bạn dạy và những
          bài học của bạn như thế nào:
        </p>
        <div className=""></div>
        <div className="">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
          >
            <Form className={'flex flex-col gap-5'}>
              <div className="flex">
                <label htmlFor="subject" className={'w-28 mr-10'}>
                  Tên môn học
                </label>
                <Field
                  type={'text'}
                  name={'subject'}
                  placeholder={'Tên môn học'}
                  className={
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                  }
                />
              </div>
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
                className={'text-right text-sm text-gray-600 hover:text-black'}
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
  );
};

export default page;
