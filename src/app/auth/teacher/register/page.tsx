'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import imageAsset from '/public/banner-register.jpg';

const page = () => {
  return (
    <main className={'container pt-5'}>
      <h1 className="pt-10 text-3xl font-bold text-center">
        Đăng kí làm gia sư
      </h1>
      <div
        className={
          'mt-5 container m-auto shadow-xl border border-t-4 border-t-red-400 rounded-md py-8'
        }
      >
        <div className={' grid gap-4 grid-cols-10'}>
          <div
            className={
              'col-span-5 w-full flex  items-center justify-center border-r-2'
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
          <div className={'col-span-5'}>
            <div className="mt-10">
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
              >
                <Form className={''}>
                  <div className={' grid gap-5 grid-cols-10'}>
                    <div className="col-span-5">
                      <label htmlFor="subject">Họ và tên:</label>
                      <Field
                        type={'text'}
                        name={'name'}
                        placeholder={'Học và tên'}
                        className={
                          ' px-4 py-2 text-lg  border border-black rounded-xl'
                        }
                      />
                    </div>
                    <div className={'col-span-5'}>
                      <label htmlFor="subject">Email:</label>
                      <Field
                        type={'text'}
                        name={'email'}
                        placeholder={'Email'}
                        className={
                          ' px-4 py-2 text-lg  border border-black rounded-xl'
                        }
                      />
                    </div>

                    <div className={'col-span-5'}>
                      <label htmlFor="subject">Password:</label>
                      <Field
                        type={'password'}
                        name={'password'}
                        placeholder={'Nhập mật khẩu'}
                        className={
                          ' px-4 py-2 text-lg  border border-black rounded-xl'
                        }
                      />
                    </div>
                    <div className="col-span-5">
                      <label htmlFor="subject">Số điện thoại:</label>
                      <Field
                        type={'text'}
                        name={'phone'}
                        placeholder={'Số điện thoại'}
                        className={
                          ' px-4 py-2 text-lg  border border-black rounded-xl'
                        }
                      />
                    </div>
                    <div className="col-span-5">
                      <label htmlFor="subject" className={'w-34 mr-[70px]'}>
                        Thành phố/Quận/Huyện:
                      </label>
                      <Field
                        type={'text'}
                        name={'address'}
                        placeholder={'Nơi bạn đang ở'}
                        className={
                          ' px-4 py-2 text-lg  border border-black rounded-xl'
                        }
                      />
                    </div>
                    <div className="col-span-5">
                      <label htmlFor="subject">Tên môn học:</label>
                      <Field
                        type={'text'}
                        name={'subject'}
                        placeholder={'Tên môn học'}
                        className={
                          ' px-4 py-2 text-lg border border-black rounded-xl'
                        }
                      />
                    </div>
                    <div className="col-span-5">
                      <label htmlFor="subject">Lớp:</label>
                      <Field
                        type={'text'}
                        name={'class'}
                        placeholder={'Dạy học sinh lớp'}
                        className={
                          ' px-4 py-2 text-lg border border-black rounded-xl'
                        }
                      />
                    </div>
                    <div className="col-span-10">
                      <label htmlFor="subject">Mô tả:</label>
                      <Field
                        type={'text'}
                        name={'description'}
                        component={'textarea'}
                        rows={'6'}
                        placeholder={'Giới thiệu về bạn'}
                        className={
                          'w-[600px] px-4 py-2 text-lg  border border-black rounded-xl'
                        }
                      />
                    </div>
                  </div>
                  <button
                    type={'submit'}
                    className={
                      'text-center border py-2 bg-red-400 text-white rounded-xl hover:bg-red-600 hover:text-white w-[200px] mt-4'
                    }
                  >
                    Đăng ký
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
