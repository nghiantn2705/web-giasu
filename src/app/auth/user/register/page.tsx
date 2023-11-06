/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import { RegisterUser } from '@/services';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { SignupSchemaUser } from '@/validate';
const page = () => {
  const router = useRouter();
  return (
    <div className={'grid grid-cols-12 min-h-fit'}>
      <div className={'col-span-7 pt-5 pb-16  px-20'}>
        <div className={'flex flex-col items-center mb-5'}>
          <Image src={'/logo.png'} alt={''} width={100} height={100} />
          <h1 className={'text-2xl text-blue-tw'}>Chào mừng bạn đến với Gs7</h1>
          <p className={'text-gray-500'}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </p>
        </div>
        <Formik
          initialValues={{
            role: 2,
            name: '',
            email: '',
            phone: '',
            password: '',
            avatar: '',
            address: '',
          }}
          validationSchema={SignupSchemaUser}
          onSubmit={(values) => {
            (async () => {
              try {
                await RegisterUser({ ...values });
                toast.success('Đăng kí thành công !', {
                  duration: 3000,
                  position: 'top-right',
                  icon: '✅',
                  iconTheme: {
                    primary: '#000',
                    secondary: '#fff',
                  },
                });
                router.push('/auth/user');
              } catch (ex: any) {
                console.log(ex);
              }
            })();
          }}
        >
          {({ errors, touched }) => (
            <Form className={'flex flex-col gap-5 w-full'}>
              <Field
                type={'text'}
                name={'name'}
                placeholder={'Họ và tên'}
                className={
                  'w-full px-4 py-2 text-lg text-center border  border-gray-300'
                }
              />
              {errors.name && touched.name ? (
                <div className={'text-red-600 mt-2'}>{errors.name}</div>
              ) : null}
              <Field
                type={'email'}
                name={'email'}
                placeholder={'Email đăng nhập'}
                className={
                  'w-full px-4 py-2 text-lg text-center border  border-gray-300'
                }
              />
              {errors.email && touched.email ? (
                <div className={'text-red-600 mt-2'}>{errors.email}</div>
              ) : null}
              <Field
                type={'password'}
                name={'password'}
                placeholder={'Nhập mật khẩu'}
                className={
                  'w-full px-4 py-2 text-lg text-center border  border-gray-300'
                }
              />
              {errors.password && touched.password ? (
                <div className={'text-red-600 mt-2'}>{errors.password}</div>
              ) : null}
              <Field
                type={'text'}
                name={'address'}
                placeholder={'Địa chỉ của bạn'}
                className={
                  'w-full px-4 py-2 text-lg text-center border  border-gray-300'
                }
              />
              {errors.address && touched.address ? (
                <div className={'text-red-600 mt-2'}>{errors.address}</div>
              ) : null}
              <div className={'flex gap-3 items-center'}>
                <span>Giới tính :</span>
                <label className={'flex gap-3'}>
                  <Field type={'radio'} name={'gender'} value={'Nam'} />
                  Nam
                </label>
                <label className={'flex gap-3'}>
                  <Field type={'radio'} name={'gender'} value={'Nữ'} />
                  Nữ
                </label>
              </div>
              <Field
                type={'file'}
                name={'avatar'}
                placeholder={'Image'}
                className={
                  'relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 '
                }
              />
              {errors.avatar && touched.avatar ? (
                <div className={'text-red-600 mt-2'}>{errors.avatar}</div>
              ) : null}
              <Field
                type={'text'}
                name={'phone'}
                placeholder={'Số điện thoại'}
                className={
                  'w-full px-4 py-2 text-lg text-center border  border-gray-300'
                }
              />
              {errors.phone && touched.phone ? (
                <div className={'text-red-600 mt-2'}>{errors.phone}</div>
              ) : null}
              <Field
                type={'date'}
                name={'date_of_birth'}
                placeholder={'Image'}
                className={
                  'w-full px-4 py-2 text-lg text-center border  border-gray-300'
                }
              />
              <button
                type={'submit'}
                className={
                  'border py-2 bg-blue-tw text-white border-gray-300 hover:bg-blue-tw1'
                }
              >
                Đăng Ký
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className={
          'col-span-5 bg-banner-register bg-center bg-cover bg-no-repeat relative before:absolute before:top-0 before:w-full before:h-full before:bg-blue-tw1 before:opacity-30'
        }
      ></div>
    </div>
  );
};

export default page;
