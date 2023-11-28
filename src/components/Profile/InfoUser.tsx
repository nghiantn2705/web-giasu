/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import Link from 'next/link';
import { IUserInfo } from '@/types/IUserInfo';
import { Image } from 'antd';
import { Field, Form, Formik } from 'formik';
import { editPassword } from '@/services/post';
import toast from 'react-hot-toast';
interface IProps {
  infoUser: IUserInfo;
}
const InfoUser = ({ infoUser }: IProps) => {
  const revert = infoUser?.Certificate;
  const certificateImages = JSON.parse(revert);

  return (
    <>
      {infoUser ? (
        <div className={'w-full bg-white shadow rounded-lg p-6'}>
          <div className={'bg-white p-3 '}>
            <div
              className={
                'flex items-center space-x-2 font-semibold text-gray-900 leading-8'
              }
            >
              <span className={'text-blue-tw2'}>
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide ">Thông tin cơ bản</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Họ và tên</div>
                  <div className="px-4 py-2">{infoUser?.name}</div>
                </div>
                {infoUser?.role == 'Teacher' ? (
                  <div className={'grid grid-cols-2'}>
                    <div className="px-4 py-2 font-semibold">Khu vực dạy </div>
                    <div className="px-4 py-2">{infoUser?.District}</div>
                  </div>
                ) : (
                  ''
                )}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Giới tính</div>
                  <div className="px-4 py-2">Nam</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Số Điện Thoại</div>
                  <div className="px-4 py-2">{infoUser?.phone}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    Địa chỉ thường chú
                  </div>
                  <div className="px-4 py-2">{infoUser?.address}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2 text-md">
                    <Link
                      className="text-blue-800"
                      href="mailto:jane@example.com"
                    >
                      {infoUser?.email}
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    Ngày/tháng/Năm sinh
                  </div>
                  <div className="px-4 py-2">25/07/2003</div>
                </div>
              </div>
            </div>
          </div>
          <div className={'flex justify-center'}>
            <Link
              className={
                'w-full  p-2 border bg-blue-tw text-center rounded-md hover:bg-blue-tw1 text-white'
              }
              href={'/profile/info'}
            >
              Cập nhật thông tin cá nhân
            </Link>
          </div>
          <div className={'bg-white p-3 '}>
            <div
              className={
                'flex items-center space-x-2 font-semibold text-gray-900 leading-8'
              }
            >
              <span className={'text-blue-tw2'}>
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide ">Đổi mật khẩu</span>
            </div>
            <div className="text-gray-700">
              <Formik
                initialValues={{ id: infoUser?.id }}
                onSubmit={async (values) => {
                  try {
                    const res = await editPassword({
                      ...values,
                    });
                    toast.success('Đổi mật khẩu thành công !', {
                      duration: 3000,
                      position: 'top-right',
                    });
                  } catch (ex) {
                    toast.error('Vui lòng kiểm tra password !', {
                      duration: 3000,
                      position: 'top-right',
                    });
                  }
                }}
              >
                <Form className={'flex flex-col gap-5 justify-between mt-4'}>
                  <div className={'relative col-span-6 mt-2'}>
                    <Field
                      type={'passwordlast'}
                      name={'passwordlast'}
                      id="passwordlast"
                      placeholder={'Tên đăng nhập hoặc email'}
                      className={
                        'basis-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
                      }
                    />
                    <label
                      htmlFor="passwordpasswordlast"
                      className="w-full pointer-events-none absolute -top-1 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Mật khẩu cũ của bạn
                    </label>
                  </div>
                  <div className={'relative col-span-6 mt-2'}>
                    <Field
                      type={'password'}
                      name={'password'}
                      id="password"
                      placeholder={'Tên đăng nhập hoặc email'}
                      className={
                        'basis-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
                      }
                    />
                    <label
                      htmlFor="password"
                      className="w-full pointer-events-none absolute -top-1 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Mật khẩu mới
                    </label>
                  </div>
                  <button
                    type={'submit'}
                    className={
                      'col-span-2 border py-2 bg-blue-tw text-white hover:bg-blue-tw1 w-fit px-4'
                    }
                  >
                    Đổi mật khẩu
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          {infoUser?.role == 'teacher' ? (
            <div className={'bg-white p-3 shadow-sm rounded-sm'}>
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="tracking-wide">Bằng đại học</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li className="text-teal-600">{infoUser?.school}</li>
                    <li className={'flex flex-col gap-4'}>
                      <span>Ảnh chứng chỉ</span>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <div className={'flex gap-4'}>
                        {certificateImages?.map(
                          (item: string, index: number) => {
                            return (
                              // eslint-disable-next-line jsx-a11y/alt-text
                              <Image
                                height={80}
                                width={80}
                                key={index}
                                src={`${item}`}
                              />
                            );
                          },
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default InfoUser;
