'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import imageAsset from '/public/lienhe.jpg';
import { postContact } from '@/services/contac';
import { toast } from 'react-toastify';
import router from 'next/router';
import { useStore } from '@/hook/use-store';
import { ITeachersDetail } from '@/types/ITeachersDetail';
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userInfo] = useStore<ITeachersDetail>('userInfo');
  return (
    <div>
      <div className={'container my-24 pt-20 md:px-6  '}>
        <Image
          src={imageAsset}
          alt={''}
          width={0}
          height={0}
          sizes="100vw"
          className={
            ' h-[700px] md:h-[550px] object-cover absolute left-0 top-22  z-[-1]'
          }
        />
        <section className={'mt-40 mb-32 border-t-blue-tw relative z-10'}>
          <div className={'flex flex-wrap'}>
            <div
              className={
                'mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'
              }
            >
              <h2
                className={'text-3xl font-bold text-gray-800 leading-normal '}
              >
                Bạn cần hỗ trợ ?
              </h2>
              <p className={'pt-2 text-gray-700 my-2 text-xl'}>
                Chúng tôi mong muốn lắng nghe ý kiến của quý phụ huynh. Vui lòng
                gửi mọi yêu cầu thắc mắc theo thông tin bên phải, chúng tôi sẽ
                liên lạc với bạn sớm nhất có thể
              </p>
            </div>
            <div
              className={
                'mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'
              }
            >
              <Formik
                initialValues={{ name: null, phone: null, note: null }}
                onSubmit={async (values) => {
                  console.log(values);
                  (async () => {
                    try {
                      if (!userInfo) {
                        toast.error('Vui lòng đăng nhập', {
                          position: 'top-right',
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'light',
                        });
                        return;
                      }
                      if (
                        values.name == null ||
                        values.phone == null ||
                        values.note == null
                      ) {
                        toast.error('Vui lòng nhập đủ thông tin!', {
                          position: 'top-right',
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'light',
                        });
                      } else {
                        await postContact({ ...values });

                        toast.success('Gửi liên hệ thành công  !', {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'light',
                        });
                        router.push('/contact');
                      }
                    } catch (ex: any) {
                      console.log(ex);
                    }
                  })();
                }}
              >
                <Form className={'grid gap-4 grid-cols-2'}>
                  <div className={'col-span-1'}>
                    {/* <p className={'pl-2 text-lg text-gray-800'}>Họ tên</p> */}
                    <Field
                      type={'text'}
                      name={'name'}
                      placeholder={'Nhập họ tên'}
                      className={
                        'w-full  px-4 py-2 border focus:outline-none border-transparent bg-white text-gray-700 text-base rounded-md'
                      }
                    />
                  </div>
                  <div className={'col-span-1'}>
                    {/* <p className={'pl-2 text-sm text-gray-800'}>Họ tên</p> */}
                    <Field
                      type={'number'}
                      name={'phone'}
                      placeholder={'Số điện thoại của bạn'}
                      className={
                        'w-full  px-4 py-2 border  focus:outline-none border-transparent bg-white text-gray-700 text-base rounded-md '
                      }
                    />
                  </div>
                  <div className={'col-span-2 pt-5'}>
                    <Field
                      type={'text'}
                      as={'textarea'}
                      name={'note'}
                      placeholder={'Lời nhắn'}
                      className={
                        'col-span-2 w-full h-[90px] px-4 py-2 border  focus:outline-none border-transparent bg-white text-gray-700 text-base rounded-md '
                      }
                    />
                  </div>
                  <button
                    type={'submit'}
                    className={
                      ' border py-2 bg-blue-tw border-blue-400 text-white rounded-xl hover:bg-blue-tw1 '
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
      <div
        className={
          'pt-20 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto  w-[58%] '
        }
      >
        <div className={'md:border-r-4 border-indigo-600 col-span-1 md:pr-20'}>
          <p className={' text-2xl pb-5 font-bold text-black'}>
            {' '}
            CÔNG TY GS7 BELLA VIỆT NAM{' '}
          </p>
          <span className={' text-base font-bold text-black'}>GS7 </span>
          <span className={''}>
            là một trang tìm kiếm gia sư uy tín hàng đầu Việt Nam , với số lượng
            gia sư chất lượng , những chương trình giảng dạy uy tín
          </span>
        </div>
        <div className={' col-span-1'}>
          <p className={'pb-3 text-2xl font-bold text-black leading-normal'}>
            LIÊN HỆ VỚI CHÚNG TÔI
          </p>{' '}
          <p>Email: tungpv@gmail.vn</p>
          <p className={'py-2'}> CSKH: 19009999</p>
          <p> Thời gian làm việc: 8h - 21h (Thứ 2 - Thứ 7)</p>
        </div>
      </div>
    </div>
  );
};

export default page;
