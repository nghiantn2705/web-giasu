'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiTeacher } from 'react-icons/gi';
import { PiStudentFill } from 'react-icons/pi';
const Option = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src={'/logo.png'}
            alt={''}
            width={50}
            height={100}
            className={'mx-auto h-10 w-auto'}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Bạn muốn đăng kí với
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex text-justify">
            <Link
              href="/Auth"
              className="flex w-full justify-center items-center mr-1 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PiStudentFill className="mr-2" />
              <button type="submit">Học sinh</button>
            </Link>
            <Link
              href=""
              className="flex w-full justify-center items-center mr-1 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <GiTeacher className="mr-2" />
              <button type="submit">Giáo Viên / Gia sư</button>
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-between">
            <div className="">
              <Link
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                href="/Auth/Login"
              >
                <p>Quay lại</p>
              </Link>
            </div>
            <div className="">
              <Link
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                href=""
              >
                <p>Quên mật khẩu</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option;
