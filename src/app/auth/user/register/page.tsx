/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import imageAsset from '/public/iconos_alumnos.png';
import { RegisterUser } from '@/services';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { SignupSchemaUser } from '@/validate';
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
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
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
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
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
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
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
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
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
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
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
                    'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                  }
                />
                <button
                  type={'submit'}
                  className={
                    'border py-2 bg-blue-tw text-white rounded-xl hover:bg-white hover:text-blue-tw2'
                  }
                >
                  Đăng Ký
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default page;
