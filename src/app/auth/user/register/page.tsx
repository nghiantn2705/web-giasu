'use client';
import React from 'react';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import imageAsset from '/public/iconos_alumnos.png';
import { RegisterUser } from '@/services';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className={'container mx-auto  shadow-md py-10'}>
      <div className={' grid grid-cols-3 place-items-center'}>
        <div className={''}>
          <div className={''}>
            <Image
              src={imageAsset}
              alt={''}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className={'col-span-2 w-[70%]'}>
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
            <p className={'mb-4 text-center'}>
              Vui lòng đăng ký tài khoản của phụ huynh
            </p>
          </div>
          <Formik
            initialValues={{ role: 2 }}
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
            <Form className={'flex flex-col gap-5 w-full'}>
              <Field
                type={'text'}
                name={'name'}
                placeholder={'Họ và tên'}
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
                name={'address'}
                placeholder={'Địa chỉ của bạn'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />

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
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              <Field
                type={'text'}
                name={'phone'}
                placeholder={'Số điện thoại'}
                className={
                  'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                }
              />
              <Field
                type={'date'}
                name={'date_of_birth'}
                placeholder={'Image'}
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
    </div>
  );
};

export default page;
