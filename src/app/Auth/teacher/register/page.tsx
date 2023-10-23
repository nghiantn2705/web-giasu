'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';
const page = () => {
  return (
    <div className={'container mx-auto py-5 shadow-lg'}>
      <h1 className={'text-3xl font-bold'}>Hoàn thành đơn đăng kí của bạn</h1>
      <div className="">
        <div className="h-px bg-slate-400 mt-4 "></div>
        <div className="mt-10">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
          >
            <Form className={'flex flex-col gap-5'}>
              <p className="font-bold mt-10">Tạo hồ sơ cá nhân </p>
              <div className="h-px bg-slate-400 mb-4"></div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Họ và tên:
                </label>
                <Field
                  type={'text'}
                  name={'name'}
                  placeholder={'Học và tên'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Email:
                </label>
                <Field
                  type={'text'}
                  name={'email'}
                  placeholder={'Email'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Số điện thoại:
                </label>
                <Field
                  type={'text'}
                  name={'phone'}
                  placeholder={'Số điện thoại'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>

              <div className="flex">
                <label htmlFor="subject" className={'w-34 mr-[70px]'}>
                  Thành phố/Quận/Huyện:
                </label>
                <Field
                  type={'text'}
                  name={'address'}
                  placeholder={'Nơi bạn đang ở'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Tên môn học:
                </label>
                <Field
                  type={'text'}
                  name={'subject'}
                  placeholder={'Tên môn học'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Lớp:
                </label>
                <Field
                  type={'text'}
                  name={'class'}
                  placeholder={'Dạy học sinh lớp'}
                  className={
                    'w-[900px] px-4 py-2 text-lg border border-black rounded-xl'
                  }
                />
              </div>
              <p className="font-bold">
                Nói ngắn gọn với những học sinh tiềm năng về những gì bạn dạy và
                những bài học của bạn như thế nào:
              </p>
              <div className="flex">
                <label htmlFor="subject" className={'w-32 mr-32'}>
                  Mô tả:
                </label>
                <Field
                  type={'text'}
                  name={'description'}
                  component={'textarea'}
                  rows={'6'}
                  placeholder={'Giới thiệu về bạn'}
                  className={
                    'w-[900px] px-4 py-2 text-lg  border border-black rounded-xl'
                  }
                />
              </div>

              <button
                type={'submit'}
                className={
                  'border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white w-[200px] mt-4 m-auto'
                }
              >
                Đăng ký
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default page;
