'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
interface IModaltitle {
  children: ReactNode;
}
export const ModalTitle = ({ children }: IModaltitle) => {
  return (
    <Dialog.Title
      as={'h3'}
      className={
        'text-base font-bold uppercase leading-8 text-gray-700 border-b pt-5 pb-3 text-center border-b-gray-300'
      }
    >
      {children}
    </Dialog.Title>
  );
};

interface IMyModal {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
}
export default function MyModalTransition(props: IMyModal) {
  const { visible, onClose, children } = props;
  return (
    <>
      <Transition
        appear
        show={visible}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog as="div" className="relative z-20" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed top-[73px] left-0  w-screen h-screen inset-0 ">
            <div className={'right-0 h-full'}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300 transform transition"
                enterFrom="opacity-0 scale-95 translate-x-full"
                enterTo="opacity-100 scale-100  translate-x-0"
                leave="ease-in-out duration-300 transform transition"
                leaveFrom="opacity-100 scale-100 translate-x-0"
                leaveTo="opacity-0 scale-95 translate-x-full"
              >
                <Dialog.Panel className="relative w-1/2 left-1/2 h-full transform bg-white text-left align-middle shadow-xl transition-all">
                  {children}

                  <button
                    type="button"
                    className={
                      'absolute top-1 -left-12 rounded-full  text-gray-500 hover:text-white hover:bg-blue-tw1 bg-white p-3 z-[999]'
                    }
                    onClick={onClose}
                  >
                    <AiOutlineClose />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
