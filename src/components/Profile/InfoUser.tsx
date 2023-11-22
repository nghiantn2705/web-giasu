'use client';

import React from 'react';
import Link from 'next/link';
import { IUserInfo } from '@/types/IUserInfo';
import { Image } from 'antd';
interface IProps {
  infoUser: IUserInfo;
}
const InfoUser = ({ infoUser }: IProps) => {
  const revert = infoUser?.Certificate;
  const certificateImages = JSON.parse(revert);

  return (
    <>
      {infoUser ? (
        <div className={'w-full'}>
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
                        {certificateImages.map(
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
