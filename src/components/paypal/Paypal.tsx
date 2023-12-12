'use client';

import React, { useEffect, useState } from 'react';
import MyModal, { ModalTitle } from '@/components/Headless/Modal';
import { Field, Form, Formik } from 'formik';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { postPaypal, postSavePaypal } from '@/services/paypal';
import { IPay } from '@/types/IPay';
import { useRouter, useSearchParams } from 'next/navigation';
import { BiMoney } from 'react-icons/bi';

export default function Paypal() {
  const [user] = useStore<ITeachers>('userInfo');
  const [isOpen, setIsOpen] = useState(false);
  const [paypal, setPaypal] = useState<IPay>();
  const searchParam = useSearchParams();
  const vnpAmount = Number(searchParam.get('vnp_Amount'));
  const vnpOrderInfo = searchParam.get('vnp_OrderInfo');
  const vnpBankCode = searchParam.get('vnp_BankCode');
  const router = useRouter();

  const formatNumber = (value: any) => {
    if (!value) return value;

    const number = parseInt(value.replace(/\./g, ''), 10);
    const formattedValue = new Intl.NumberFormat('de-DE').format(number);
    return formattedValue;
  };
  const parseNumber = (value: any) => {
    return value.replace(/\./g, '');
  };
  useEffect(() => {
    if (vnpAmount && vnpOrderInfo && vnpBankCode) {
      const deposit = {
        userId: user?.id,
        coin: vnpAmount / 100,
        code: vnpOrderInfo,
        status: 'Thành công',
        bank: vnpBankCode,
      };
      (async () => {
        const resMessege = await postSavePaypal({ ...deposit });
        if (resMessege) {
          router.push('/profile/history-paypal');
        }
      })();
    }
    if (paypal?.data) {
      window.location.assign(`${paypal?.data}`);
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
      <button
        onClick={openModal}
        className={
          'flex items-center gap-2 hover:bg-gray-200 rounded-lg cursor-pointer px-3 py-2'
        }
      >
        <BiMoney />
        Nạp Tiền
      </button>

      <MyModal visible={isOpen} onClose={closeModal}>
        <div className={'w-[600px]'}>
          <ModalTitle>Nạp tiền</ModalTitle>
          <Formik
            onSubmit={async (values) => {
              const total = parseNumber(values.total);
              values.total = total;

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
            {({ setFieldValue }) => (
              <Form
                className={'flex flex-col gap-5 p-5 justify-center font-medium'}
              >
                <div className={'flex flex-col gap-5 '}>
                  <label className={'grid grid-cols-2'}>
                    <span>Số tiền muốn nạp</span>
                    <Field
                      name={'total'}
                      className={'m-1 border'}
                      onChange={(e: any) => {
                        const formattedValue = formatNumber(e.target.value);
                        setFieldValue('total', formattedValue);
                      }}
                    />
                  </label>
                </div>
                <div className={'flex gap-3 justify-end'}>
                  <button
                    type="submit"
                    className={
                      'text-center py-2 px-4 mt-2 rounded-md bg-blue-tw text-white hover:bg-blue-tw1'
                    }
                  >
                    Nạp tiền
                  </button>
                  <button
                    type="button"
                    className={
                      'text-center py-2 px-4 mt-2 rounded-md bg-blue-tw text-white hover:bg-blue-tw1'
                    }
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </MyModal>
    </div>
  );
}
