'use client';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const page = () => {
  return (
    <main className={'pt-8 min-h-[100vh-116px]'}>
      <div
        className={
          'container m-auto shadow-xl border border-t-4 border-t-green-400 rounded-md py-8'
        }
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <Form className={'grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'}>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'name'}
              >
                Tên
              </label>
              <Field
                type={'text'}
                name={'name'}
                placeholder={'Họ và tên'}
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              />
            </div>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'name'}
              >
                Email
              </label>
              <Field
                type={'email'}
                name={'email'}
                placeholder={'Tên đăng nhập hoặc email'}
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              />
            </div>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'sex'}
              >
                Giới tính
              </label>
              <Field
                as="select"
                name="sex"
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              >
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
              </Field>
            </div>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'name'}
              >
                Số điện thoại
              </label>
              <Field
                type={'text'}
                name={'phone'}
                placeholder={'Số điện thoại'}
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              />
            </div>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'name'}
              >
                Ảnh đại diện
              </label>
              <Field
                type={'file'}
                name={'avatar'}
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              />
            </div>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'name'}
              >
                Địa chỉ
              </label>
              <Field
                type={'text'}
                name={'address'}
                placeholder={'Nhập nơi thường trú'}
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              />
            </div>
            <div>
              <label
                className={'text-black dark:text-gray-200'}
                htmlFor={'name'}
              >
                Ngày sinh
              </label>
              <Field
                type={'date'}
                name={'phone'}
                placeholder={'Ngày sinh'}
                className={
                  'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                }
              />
            </div>
          </Form>
        </Formik>
        <p className={'text-center text-sm mt-3'}>
          <button
            className={
              'px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 '
            }
          >
            Lưu thông tin
          </button>
        </p>
      </div>
    </main>
  );
};

export default page;
