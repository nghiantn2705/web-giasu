'use client';

import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import imageAsset from '/public/banner-login.png';
import { useRouter } from 'next/navigation';
import { useStore } from '@/hook/use-store';
import { auth } from '@/services';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { setCookie } from 'cookies-next';

const SignInUser = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useStore('userInfo');
  useEffect(() => {
    if (userInfo) {
      router.push('/giasu');
    }
  }, []);
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
                Vui lòng đăng nhập tài khoản của phụ huynh
              </p>
            </div>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                try {
                  const data = await auth({
                    ...values,
                  });

                  if (data?.user && data?.user?.role == 'user') {
                    setUserInfo(data?.user);
                    setCookie('access_token', data?.access_token);
                    setCookie('refresh_token', data?.refresh_token);
                    window.localStorage.setItem(
                      'access_token',
                      data?.access_token,
                    );
                    toast.success('Đăng nhập thành công !', {
                      duration: 3000,
                      position: 'top-right',
                      icon: '✅',
                      iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                      },
                    });
                    // router.push('/');
                  } else {
                    toast.error(
                      'Vui lòng đăng nhập bằng tài khoản phụ huynh !',
                      {
                        duration: 3000,
                        position: 'top-right',
                      },
                    );
                  }
                } catch (ex) {
                  console.log(ex);
                }
              }}
            >
              <Form className={' flex flex-col gap-3'}>
                <div>
                  <Field
                    type={'email'}
                    name={'email'}
                    placeholder={'Tên đăng nhập hoặc email'}
                    className={
                      'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                    }
                  />
                </div>
                <div>
                  <Field
                    type={'password'}
                    name={'password'}
                    placeholder={'Nhập mật khẩu'}
                    className={
                      'w-full px-4 py-2 text-lg text-center border border-black rounded-xl'
                    }
                  />
                </div>

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
                    'border py-2 bg-blue-tw text-white rounded-xl hover:bg-blue-tw1 '
                  }
                >
                  Đăng nhập
                </button>
              </Form>
            </Formik>
            <p className={'text-center text-sm mt-3'}>
              Chưa có tài khoản ?{' '}
              <Link
                href={'/auth/user/register'}
                className={
                  'font-medium text-sm uppercase hover:underline hover:decoration-1 '
                }
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInUser;
