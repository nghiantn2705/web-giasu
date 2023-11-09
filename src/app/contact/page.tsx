'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';

const page = () => {
  return (
    <div className={'container my-24 mt-56 md:px-6 '}>
      <section className={'mb-32 border-t-blue-tw'}>
        <div className={'flex flex-wrap'}>
          <div
            className={
              'mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'
            }
          >
            <h2 className={'mb-6 text-3xl font-bold'}>Liên hệ </h2>
            <p className={'mb-6 text-neutral-500 dark:text-neutral-300'}>
              Chúng tôi mong muốn lắng nghe ý kiến của quý phụ huynh. Vui lòng
              gửi mọi yêu cầu thắc mắc theo thông tin bên phải, chúng tôi sẽ
              liên lạc với bạn sớm nhất có thể
            </p>
            <p className={'mb-2 text-neutral-500 dark:text-neutral-300'}>
              New York, 94126, United States
            </p>
            <p className={'mb-2 text-neutral-500 dark:text-neutral-300'}>
              + 01 234 567 89
            </p>
            <p className={'mb-2 text-neutral-500 dark:text-neutral-300'}>
              info@gmail.com
            </p>
          </div>
          <div
            className={
              'mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'
            }
          >
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                console.log(values);

                // try {
                //   const data = await auth({
                //     ...values,
                //   });
                //   if (data?.user && data?.user?.role == 'teacher') {
                //     setUserInfo(data?.user);
                //     setCookie('access_token', data?.access_token);
                //     setCookie('refresh_token', data?.refresh_token);
                //     toast.success('Đăng nhập thành công !', {
                //       duration: 3000,
                //       position: 'top-right',
                //       icon: '✅',
                //       iconTheme: {
                //         primary: '#000',
                //         secondary: '#fff',
                //       },
                //     });
                //     router.push('/');
                //   } else {
                //     toast.error('Vui lòng đăng nhập bằng tài khoản gia sư !', {
                //       duration: 3000,
                //       position: 'top-right',
                //     });
                //   }
                // } catch (ex) {
                //   console.log(ex);
                // }
              }}
            >
              <Form className={' flex flex-col gap-3'}>
                <div>
                  <Field
                    type={'text'}
                    name={'Tên'}
                    placeholder={'Tên của bạn'}
                    className={
                      'w-full px-4 py-2 text-lg border border-black rounded-xl'
                    }
                  />
                </div>
                <div>
                  <Field
                    type={'email'}
                    name={'email'}
                    placeholder={'Email của bạn'}
                    className={
                      'w-full px-4 py-2 text-lg border border-black rounded-xl'
                    }
                  />
                </div>
                <div>
                  <Field
                    type={'text'}
                    as={'textarea'}
                    name={'description'}
                    placeholder={'Lời nhắn'}
                    className={
                      'w-full px-4 py-2 text-lg border border-black rounded-xl'
                    }
                  />
                </div>
                <button
                  type={'submit'}
                  className={
                    'border py-2 bg-blue-tw text-white rounded-xl hover:bg-blue-tw1 '
                  }
                >
                  Gửi
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
