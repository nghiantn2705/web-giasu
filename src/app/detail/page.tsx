/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
export default function Home() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className={''}>
      <main className={'container mx-auto pt-10  '}>
        <div className=" grid gap-10 grid-cols-12 ">
          {/* avatar */}
          <div className=" pt-5 col-span-2">
            <Image
              src="/avatar-user.png"
              width={260}
              height={260}
              alt="Picture of the author"
            />

            <p className="mt-5 text-center text-green-600 text-2xl font-serif	font-sans">
              Đang sẵn sàng
            </p>
            <p className="mt-5 text-center text-xs text-stone-400">
              NGÀY THAM GIA:{' '}
              <label className="text-stone-950 font-bold">24/1/2021</label>
            </p>
          </div>
          {/*  */}
          <div className="pt-5 col-span-8 py-15">
            <p className="text-[30px] font-bold text-stone-800">Vũ Lê Tiến</p>
            {/* nhan day */}
            <div className=" flex flex-row border-b py-3">
              <div className="basis-1/2">
                <p className="  text-[14px] font-semibold font-poppins text-stone-400 ">
                  SỐ NGƯỜI ĐÃ THUÊ: <p className="text-red-400">566 người</p>
                </p>
              </div>
              <div className="basis-1/2">
                {' '}
                <p className="  text-[14px] font-semibold font-poppins text-stone-400 ">
                  TỶ LỆ HOÀN THÀNH: <p className="text-red-400">100%</p>
                </p>
              </div>
            </div>
            {/*  */}
            {/* thong tin */}
            <div className="py-4 border-b">
              <p className="text-xl font-bold">Nhận dạy:</p>
              <div className=" grid gap-2 grid-cols-8 py-3">
                <div className=" text-sm text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                  <p>Cấp 1</p>
                </div>
                <div className="text-sm text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                  <p>Cấp 2</p>
                </div>
                <div className="text-sm text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                  <p>Cấp 3</p>
                </div>
                <div className="text-sm text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                  <p>Ôn thi đại học</p>
                </div>
              </div>
            </div>
            <div className="py-4 border-b">
              <div className="text-xl font-bold">
                <p>Thông tin cá nhân:</p>
              </div>

              <div className="pt-2">
                <div className=" col-span-3 text-zinc-950 ">
                  <label className="font-bold">Năm sinh : </label>
                  <label>30/12/2003</label>
                </div>

                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold">Số điện thoại : </label>

                  <label>098761999</label>
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold">Khu vực : </label>

                  <label className="">
                    {' '}
                    phương canh , xuân phương , nam từ liêm , hà nội
                  </label>
                </div>
              </div>
            </div>
            <div className="py-4 border-b">
              <div className="text-xl font-bold">
                <p>Thông tin chi tiết:</p>
              </div>

              <div className="pt-2">
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Hiện tại: </label>{' '}
                  <label className="">Sinh viên</label>{' '}
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Trường học :</label>

                  <label className=""> Cao đẳng fpt</label>
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Chuyên ngành :</label>

                  <label className=""> ngôn ngữ anh</label>
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Năm tốt nghiệp :</label>

                  <label className=""> 2023</label>
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold">Khu vực dạy : </label>

                  <label className="">
                    {' '}
                    phương canh , xuân phương , nam từ liêm , hà nội
                  </label>
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Mức lương mong muốn : </label>

                  <label className=""> 50,000,000 đồng/tháng</label>
                </div>
                <div className="pt-2 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Kinh nghiệm : </label>

                  <label className="">
                    {' '}
                    có kinh nghiệm 1 năm trong việc giảng dạy và trợ giảng
                  </label>
                </div>
              </div>
            </div>
            <div className="py-4 border-b">
              <div className="text-xl font-bold">
                <p>Thông tin khác:</p>
              </div>

              <div className="pt-2">
                <div className="pt-1 col-span-3 text-zinc-950 ">
                  <label className="font-bold"> Ghi chú của gia sư : </label>

                  <label className="">
                    {' '}
                    Có thể dạy on , sẵn sàng tăng ca khi học sinh chưa hiểu bài
                  </label>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="mt-5 col-span-2"> 
          <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button 
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
          </div>
        </div>
      </main>
    </div>
  );
}
