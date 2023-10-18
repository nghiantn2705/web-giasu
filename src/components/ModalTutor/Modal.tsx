import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function MyDialog({ isOpen, closeModal }: any) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[50%]   transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl text-center font-medium leading-6 text-gray-900 uppercase"
                >
                  Nhập thông tin thuê gia sư
                </Dialog.Title>
                <div className="pt-10 px-6">
                  <div className={' grid gap-5 grid-cols-10 '}>
                    <div className={'col-span-5 '}>
                      {' '}
                      <label
                        htmlFor="Nhập họ và tên"
                        className={
                          'block text-xl font-medium leading-6 text-gray-900'
                        }
                      >
                        Nhập họ và tên :
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Nhập họ và tên"
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className={'col-span-5 '}>
                      {' '}
                      <label
                        htmlFor="Nhập số điện thoại "
                        className="block text-xl font-medium leading-6 text-gray-900"
                      >
                        Nhập số điện thoại :
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Nhập số điện thoại "
                          type="number"
                          name="first-name"
                          id="first-name"
                          className="px-3 w-[95%] h-[50px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className={'col-span-5 '}>
                      {' '}
                      <label
                        htmlFor="Nhập địa chỉ"
                        className="block text-xl font-medium leading-6 text-gray-900"
                      >
                        Nhập địa chỉ :
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Nhập địa chỉ"
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className={'col-span-5 '}>
                      {' '}
                      <label
                        htmlFor="Học trường học sinh "
                        className="block text-xl font-medium leading-6 text-gray-900"
                      >
                        Học sinh trường :
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Nhập trường học sinh "
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className={'col-span-10 '}>
                      <div>
                        <p
                          className={
                            '  block text-xl font-medium leading-6 text-gray-900'
                          }
                        >
                          Chọn lớp học sinh :{' '}
                        </p>
                        <div className={'grid gap-2 grid-cols-10 '}>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Lớp 1
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Lớp 1
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Lớp 1
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Lớp 1
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Lớp 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'col-span-10 '}>
                      <div>
                        <p
                          className={
                            '  block text-xl font-medium leading-6 text-gray-900'
                          }
                        >
                          Chọn môn học :{' '}
                        </p>
                        <div className={'grid gap-2 grid-cols-10 '}>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Toan
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Ly
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Hoa
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              sinh
                            </label>
                          </div>
                          <div className={'p-5 col-span-2'}>
                            <label className={' text-sx'}>
                              <input type="checkbox" className={'p-5'} />
                              Lớp 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'col-span-5 '}>
                      <div>
                        <label
                          htmlFor="select"
                          className="'block text-xl font-medium leading-6 text-gray-900'"
                        >
                          Chọn số buổi:
                        </label>
                        <select
                          id="select"
                          name="select"
                          className="mt-2 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option className={'px-5 text-xm'}>
                            {' '}
                            -- Chọn số buổi --
                          </option>
                          <option className={'px-5'}> 1 buổi</option>
                        </select>
                      </div>
                    </div>
                    <div className={'col-span-5 '}>
                      {' '}
                      <label
                        htmlFor="Nhập họ và tên"
                        className={
                          'block text-xl font-medium leading-6 text-gray-900'
                        }
                      >
                        Thời gian học :
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Ví dụ: T2 - T4 - T6; 17h - 19h"
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="px-3 block w-[95%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className={'col-span-10 '}>
                      {' '}
                      <label
                        htmlFor="Nhập họ và tên"
                        className={
                          'block text-xl font-medium leading-6 text-gray-900'
                        }
                      >
                        Yêu cầu khác :
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="first-name"
                          id="first-name"
                          className="px-3 block w-[98%] h-[50px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 text-center ">
                  <button
                    type="button"
                    className=" w-[140px] h-[50px]  rounded-md border border-transparent bg-red-400 px-4 py-2 text-sx font-medium text-slate-100 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Đăng kí
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
