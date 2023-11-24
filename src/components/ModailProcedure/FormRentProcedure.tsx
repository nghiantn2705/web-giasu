'use client';
import React, { Fragment, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { useParams } from 'next/navigation';
import RentTeacher from '../Teacher/RentTeacher';
import { Dialog, Transition } from '@headlessui/react';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { ITeachersDetail } from '@/types/ITeachersDetail';
interface IProps {
  id: number;
  teacher: any;
}

export default function FormRentProcedure(props: IProps) {
  const [userInfo] = useStore<ITeachersDetail>('userInfo');
  const [user] = useStore<ITeachers>('userInfo');
  const [teacher, setTeachers] = useState<ITeachers>();
  const [isOpen, setIsOpen] = useState(false);
  const { id: params } = useParams();
  const [isOpen2, setIsOpen2] = useState(false);
  function closeModal2() {
    setIsOpen2(false);
  }
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (!user) {
      setIsOpen2(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      {user?.role !== 'teacher' ? (
        <button
          onClick={openModal}
          className={
            'mt-16 text-center bg-blue-tw1 hover:bg-blue-tw w-[90%] h-12 rounded-md text-lg leading-normal tracking-normal text-white  uppercase'
          }
        >
          Thuê
        </button>
      ) : (
        ''
      )}
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                  ></Dialog.Title>
                  <div className="mt-2">
                    <p className="text-xl text-gray-500 text-center">
                      Vui lòng đăng nhập để Thuê
                    </p>
                  </div>

                  <div className="mt-4">
                    {/* <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                  >
                                    Got it, thanks!
                                  </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[800px]'}>
          <ModalTitle>Điều khoản thuê gia sư</ModalTitle>
          <div className={'text-xl px-10 py-5 font-bold'}>
            <p className={' px-5 py-5'}>
              {' '}
              • Người thuê bắt buộc phải có số dư trong tài khoản ít nhất
              <span className={'text-red-600'}> 50.000đ </span>thì mới có thể
              thực hiện việc thuê gia sư.
            </p>
            <p className={' px-5 py-5'}>
              • Trường hợp tài khoản không đủ số dư, người thuê cần tiến hành
              bước nạp tiền để tiếp tục việc thuê gia sư.
            </p>
            <p className={' px-5 pt-5'}>
              • Nếu người thuê không tiến hành bước nạp tiền thì sẽ đồng nghĩa
              với việc không có thông tin liên hệ của gia sư.
            </p>
          </div>

          <RentTeacher id={Number(params)} teacher={teacher} />
        </div>
      </MyModal>
    </div>
  );
}
