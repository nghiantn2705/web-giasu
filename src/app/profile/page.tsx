'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
  return (
    <div className={'container mx-auto my-5 p-5 sm:flex mb-60 mt-20'}>
      <div className={'w-full md:w-3/12 md:mx-2'}>
        <div className={'bg-white p-3 border-t-4 border-green-400'}>
          <div className={'image overflow-hidden'}>
            <Image
              className={'h-auto w-full mx-auto'}
              width={0}
              height={0}
              src=""
              alt=""
            />
          </div>
          <h1 className={'text-gray-900 font-bold text-xl leading-8 my-1'}>
            Trường
          </h1>
          <p className={'text-sm text-gray-500 hover:text-gray-600 leading-6'}>
            bthg
          </p>
          <ul
            className={
              'bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'
            }
          >
            <li className={'flex items-center py-3'}>
              <span>Trạng thái</span>
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
              <span>Thành viên từ</span>
              <span className={'ml-auto'}>Nov 07, 2016</span>
            </li>
          </ul>
        </div>
        <div className={'my-4'}></div>
      </div>

      <div className={'w-full md:w-9/12 mx-2 h-64'}>
        <div className={'bg-white p-3 shadow-sm rounded-sm'}>
          <div
            className={
              'flex items-center space-x-2 font-semibold text-gray-900 leading-8'
            }
          >
            <span className={'text-green-500'}>
              <svg
                className={'h-5'}
                xmlns={'http://www.w3.org/2000/svg'}
                fill={'none'}
                viewBox={'0 0 24 24'}
                stroke={'currentColor'}
              >
                <path
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={'2'}
                  d={
                    'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  }
                />
              </svg>
            </span>
            <span className={'tracking-wide'}>Thông tin cá nhân</span>
          </div>
          <div className={'text-gray-700'}>
            <div className={'grid md:grid-cols-2 text-sm'}>
              <div className={'grid grid-cols-2'}>
                <div className={'px-4 py-2 font-semibold'}>Tên</div>
                <div className={'px-4 py-2'}>Trường</div>
              </div>
              <div className={'grid grid-cols-2'}>
                <div className={'px-4 py-2 font-semibold'}>Số điện thoại</div>
                <div className={'px-4 py-2'}>+11 998001001</div>
              </div>
              <div className={'grid grid-cols-2'}>
                <div className={'px-4 py-2 font-semibold'}>Địa chỉ</div>
                <div className={'px-4 py-2'}>Tây Mỗ</div>
              </div>
              <div className={'grid grid-cols-2'}>
                <div className={'px-4 py-2 font-semibold'}>
                  Số căn cước công dân
                </div>
                <div className={'px-4 py-2'}>000000000000</div>
              </div>
              <div className={'grid grid-cols-2'}>
                <div className={'px-4 py-2 font-semibold'}>Email.</div>
                <div className={'px-4 py-2'}>
                  <p className={'text-blue-800'}> jane@example.com</p>
                </div>
              </div>
              <div className={'grid grid-cols-2'}>
                <div className={'px-4 py-2 font-semibold'}>Ngày sinh</div>
                <div className={'px-4 py-2'}>Feb 06, 1998</div>
              </div>
            </div>
          </div>
          <button
            className={
              'block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'
            }
          >
            <Link href={'./customer_info'}>Chỉnh sửa thông tin cá nhân</Link>
          </button>
        </div>

        <div className={'my-4'}></div>

        <div className={'bg-white p-3 shadow-sm rounded-sm'}>
          <div className={'grid grid-cols-2'}>
            <div>
              <div
                className={
                  'flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'
                }
              >
                <span className={'text-green-500'}>
                  <svg
                    className={'h-5'}
                    xmlns={'http://www.w3.org/2000/svg'}
                    fill={'none'}
                    viewBox={'0 0 24 24'}
                    stroke={'currentColor'}
                  >
                    <path
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      strokeWidth={'2'}
                      d={
                        'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      }
                    />
                  </svg>
                </span>
                <span className={'tracking-wide'}>Kinh Nghiệm</span>
              </div>
              <ul className={'list-inside space-y-2'}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <div
                className={
                  'flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'
                }
              >
                <span className={'text-green-500'}>
                  <svg
                    className={'h-5'}
                    xmlns={'http://www.w3.org/2000/svg'}
                    fill={'none'}
                    viewBox={'0 0 24 24'}
                    stroke={'currentColor'}
                  >
                    <path fill={'#fff'} d={'M12 14l9-5-9-5-9 5 9 5z'} />
                    <path
                      fill={'#fff'}
                      d={
                        'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                      }
                    />
                    <path
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      strokeWidth={'2'}
                      d={
                        'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                      }
                    />
                  </svg>
                </span>
                <span className={'tracking-wide'}>Chứng chỉ/ Bằng cấp</span>
              </div>
              <ul className={'list-inside space-y-2'}>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
