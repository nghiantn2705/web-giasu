/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import Image from 'next/image';
import { useState } from 'react';

import MyDialog from '@/components/ModalTutor/Modal';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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
                  SỐ NGƯỜI ĐÃ THUÊ:{' '}
                  <span className="text-red-400">566 người</span>
                </p>
              </div>
              <div className="basis-1/2">
                {' '}
                <p className="  text-[14px] font-semibold font-poppins text-stone-400 ">
                  TỶ LỆ HOÀN THÀNH: <span className="text-red-400">100%</span>
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
                className="mt-16 text center text-gray-100 bg-red-500 w-[90%] h-14 rounded-md text-1xl font-bold font-normal leading-normal tracking-normal text-zinc-950  border-0 uppercase"
              >
                Thuê gia sư
              </button>
            </div>

            <MyDialog isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </main>
    </div>
  );
}
