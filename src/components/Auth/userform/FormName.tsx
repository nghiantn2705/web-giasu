/* eslint-disable jsx-a11y/autocomplete-valid */
'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useFormState } from '../FormController';

type TFormValues = {
  Name: string;
  Password: string;
  Email: string;
  Address: string;
  Phone: string;
};
const FormName = () => {
  const { onHandleNext, setFormData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>();

  const onHandleFormSubmit = (data: TFormValues) => {
    console.log(data);
    setFormData((prev) => ({ ...prev, ...data }));
    onHandleNext();
  };
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
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onHandleFormSubmit)}
          >
            <div>
              <label
                htmlFor="Name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="Name"
                  type="text"
                  autoComplete="Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('Name')}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="Password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('Password')}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="Email"
                  type="email"
                  autoComplete="current-email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('Email')}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md">
                Tiếp theo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormName;
