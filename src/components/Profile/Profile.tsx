'use client';

import React from 'react';
import { ITeachers } from '@/types/ITeachers';
import Image from 'next/image';

interface IProps {
  infoUser: ITeachers;
}
const Profile = ({ infoUser }: IProps) => {
  console.log(infoUser);
  return (
    <div className={'container m-auto my-5 p-5'}>
      <div className={'md:flex no-wrap md:-mx-2 shadow-lg'}>
        <div className={'w-full md:w-3/12 md:mx-2'}>
          <div className={'p-3 border-t-4 border-green-400'}>
            <div className={''}>
              <Image
                src={infoUser?.avatar}
                alt={''}
                width={290}
                height={290}
                className={'w-3/4 h-auto mx-auto'}
              />
            </div>
            <h1 className={'text-gray-900 font-bold text-xl leading-8 my-1'}>
              {infoUser?.name}
            </h1>
            <h3 className={'text-gray-600 font-lg text-semibold leading-6'}>
              {infoUser?.description}
            </h3>

            <ul
              className={
                'bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'
              }
            >
              <li className={'flex items-center py-3'}>
                <span>Status</span>
                <span className={'ml-auto'}>
                  <span
                    className={
                      'bg-green-500 py-1 px-2 rounded text-white text-sm'
                    }
                  >
                    Active
                  </span>
                </span>
              </li>
              <li className={'flex items-center py-3'}>
                <span>Member since</span>
                <span className={'ml-auto'}>Nov 07, 2016</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={'w-full md:w-9/12 mx-2'}>
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
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
              <span className="tracking-wide">Thông tin cơ bản</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Họ và tên</div>
                  <div className="px-4 py-2">{infoUser?.name}</div>
                </div>
                <div className={'grid grid-cols-2'}>
                  <div className="px-4 py-2 font-semibold">Khu vực dạy </div>
                  <div className="px-4 py-2">{infoUser?.District}</div>
                </div>
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
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      {infoUser?.email}
                    </a>
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
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span className="text-green-500">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Experience</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Education</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Masters Degree in Oxford
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Bachelors Degreen in LPU
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button className={'w-full md:w-9/12 mx-10'}>
              <a href={'/info'}>Cập nhật thông tin cá nhân</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
