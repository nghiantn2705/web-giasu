import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { useRef, useEffect } from 'react';
import Register from './Register';
import Link from 'next/link';
import '../../css/auth.css';
type Props = {
  isVisible: boolean;
  onClose(): void;
};
function useMyCustomHook<T extends HTMLElement>(): any {
  const myRef = useRef<T>(null);

  // do something with the ref, e.g. adding event listeners

  return { ref: myRef };
}
const Signin = ({ isVisible, onClose }: Props) => {
  const [showRegister, setShowRegister] = useState(false);
  const { ref: myElementRef } = useMyCustomHook<HTMLDivElement>();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const refCurrent = myElementRef.current;
      if (refCurrent && !refCurrent?.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [myElementRef, onClose]);
  if (!isVisible) return null;
  return (
    <div
      className={
        'fixed inset-0 bg-opacity-25 first-line backdrop-blur-[2px] flex justify-center items-center'
      }
    >
      <div className={'w-[600px] flex flex-col'} ref={myElementRef}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white ">
          <button
            className="text-black text-2xl place-self-end "
            onClick={() => onClose()}
          >
            <AiOutlineClose />
          </button>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              src={'/favicon.jpg'}
              alt={''}
              width={50}
              height={40}
              className={'m-auto'}
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" name="remember" id="remember" />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm tex-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <h2 className="continue">Or continue with</h2>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="flex w-full mr-1 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  FaceBook
                </button>
                <button
                  type="submit"
                  className="flex w-full ml-1 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Google
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link
                href=""
                className={
                  'font-semibold leading-6 text-indigo-600 hover:text-indigo-500"'
                }
                onClick={() => setShowRegister(true)}
                replace
              >
                Resginter
              </Link>
              <Register
                isVisible={showRegister}
                onClose={() => setShowRegister(false)}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
