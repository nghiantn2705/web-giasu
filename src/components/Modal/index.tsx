import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface IModaltitle {
  children: ReactNode;
}
export const ModalTitle = ({ children }: IModaltitle) => {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
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
export default function MyModal(props: IMyModal) {
  const { visible, onClose, children } = props;
  return (
    <>
      <Transition appear show={visible} as={Fragment}>
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

          <div className="fixed top-16 left-0  w-screen h-screen inset-0 ">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  {children}

                  <button
                    type="button"
                    className={
                      'absolute top-2 right-3 rounded-full border py-1 px-3 hover:bg-red-400 hover:text-white'
                    }
                    onClick={onClose}
                  >
                    X
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
