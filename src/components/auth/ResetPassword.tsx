'use client';

import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import imageAsset from '/public/banner-login.png';
import { useRouter } from 'next/navigation';
import { useStore } from '@/hook/use-store';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { resetPassword, SendMail } from '@/services/post';

const ResetPassword = () => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [userInfo] = useStore('userInfo');

  useEffect(() => {
    if (userInfo) {
      router.push('/giasu');
    }
  }, [router, userInfo]);

  return (
    <main className={'pt-8 min-h-[100vh-116px]'}>
      <div
        className={
          'container m-auto shadow-xl border border-t-4 border-t-blue-tw rounded-md py-8'
        }
      >
        <div className={'grid grid-cols-2 justify-items-center content-center'}>
          <div
            className={
              'w-full flex flex-col items-center justify-center border-r-2 border-blue-tw'
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

          <div className={'p-8 w-[80%]'}>
            <div className={'flex flex-col justify-center items-center'}>
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
                Vui lòng nhập mail của bạn để lấy lại mật khẩu
              </p>
            </div>
            <Formik
              initialValues={{ email: '' }}
              onSubmit={async (values) => {
                try {
                  const tokenData = await SendMail({
                    ...values,
                  });
                  setToken(tokenData.token);
                  toast.success('Vui lòng vào mail của bạn để xác nhận !', {
                    duration: 3000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                      primary: '#000',
                      secondary: '#fff',
                    },
                  });
                } catch (ex) {
                  toast.error('Vui lòng kiểm tra lại gmail !', {
                    duration: 3000,
                    position: 'top-right',
                  });
                }
              }}
            >
              <Form className={'grid grid-cols-8 gap-5 justify-between'}>
                <div className={'relative col-span-6 mt-2'}>
                  <Field
                    type={'email'}
                    name={'email'}
                    id="email"
                    placeholder={'Tên đăng nhập hoặc email'}
                    className={
                      'basis-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
                    }
                  />
                  <label
                    htmlFor="email"
                    className="w-full pointer-events-none absolute -top-1 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Nhập email của bạn
                  </label>
                </div>
                <button
                  type={'submit'}
                  className={
                    'col-span-2 border py-2 bg-blue-tw text-white hover:bg-blue-tw1 w-fit px-4'
                  }
                >
                  gửi mã
                </button>
              </Form>
            </Formik>
            <Formik
              initialValues={{ password: '' }}
              onSubmit={async (values) => {
                try {
                  const resValues = { ...values, token };
                  console.log(resValues);
                  const data = await resetPassword({ ...resValues });

                  toast.success('Đổi mật khẩu thành công !', {
                    duration: 3000,
                    position: 'top-right',
                    icon: '✅',
                    iconTheme: {
                      primary: '#000',
                      secondary: '#fff',
                    },
                  });
                } catch (ex) {
                  toast.error('Sai mã xác nhận', {
                    duration: 3000,
                    position: 'top-right',
                  });
                }
              }}
            >
              <Form className={' flex flex-col gap-5 mt-5'}>
                <div className={'relative mt-2'}>
                  <Field
                    type={'password'}
                    name={'password'}
                    id="password"
                    placeholder={'Tên đăng nhập hoặc email'}
                    className={
                      'peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
                    }
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute -top-1 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Mật khẩu mới
                  </label>
                </div>
                <button
                  type={'submit'}
                  className={
                    'border py-2 bg-blue-tw text-white hover:bg-blue-tw1 '
                  }
                >
                  Đổi mật khẩu
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
