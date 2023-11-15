'use client';

import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { Field, Form, Formik } from 'formik';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { postPaypal, postSavePaypal } from '@/services/paypal';
import { IPay } from '@/types/IPay';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Paypal() {
  const [user] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  const [paypal, setPaypal] = useState<IPay>();
  const searchParam = useSearchParams();
  const vnpAmount = searchParam.get('vnp_Amount');
  const router = useRouter();

  useEffect(() => {
    if (paypal) {
      const deposit = { id: user?.id, coin: vnpAmount };
      (async () => {
        const resMessege = await postSavePaypal({ ...deposit });
        if (resMessege) {
          router.push('/profile');
        }
        toast.success(`${resMessege}`);
      })();
      if (paypal?.data) {
        window.location.assign(`${paypal?.data}`);
      }
    }
  }, [paypal?.data]);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {user?.role == 'teacher' ? (
        <button
          onClick={openModal}
          className={
            'w-full text-center p-2 mt-2 rounded-md bg-blue-tw text-white hover:bg-blue-tw1'
          }
        >
          Nạp Tiền
        </button>
      ) : (
        ''
      )}

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[600px]'}>
          <ModalTitle>Nạp tiền</ModalTitle>
          <Formik
            onSubmit={async (values) => {
              try {
                const resPaypal = await postPaypal({ ...values });
                setPaypal(resPaypal);
              } catch (ex) {
                console.log(ex);
              }
            }}
            initialValues={{
              total: '',
            }}
          >
            <Form
              className={'flex flex-col gap-5 p-5 justify-center font-medium'}
            >
              <div className={'flex flex-col gap-5 '}>
                <label className={'grid grid-cols-2'}>
                  <span>Số tiền muốn nạp</span>
                  <Field name={'total'} className={'m-1 border'} />
                </label>
              </div>
              <div className={'flex gap-3 justify-end'}>
                <button
                  type="submit"
                  className={
                    ' text-center py-2 px-4 mt-2 rounded-md bg-blue-tw text-white hover:bg-blue-tw1'
                  }
                  onClick={closeModal}
                >
                  Nạp tiền
                </button>
                <button
                  type="button"
                  className={
                    ' text-center py-2 px-4 mt-2 rounded-md bg-blue-tw text-white hover:bg-blue-tw1'
                  }
                  onClick={closeModal}
                >
                  Đóng
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </MyModal>
    </div>
  );
}
