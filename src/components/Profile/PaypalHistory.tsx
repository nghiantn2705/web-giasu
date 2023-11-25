'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { IUserInfo } from '@/types/IUserInfo';
// import FormAccept from '@/components/Profile/FormAccept';
import { GetHistoryPaypal } from '@/services/paypal';
import { IHistoryPaypal } from '@/types/IPay';
import moment from 'moment';
interface IProps {
  infoUser: IUserInfo;
}
// interface IHistoryPaypal {
//   id: number;
//   idUser: string;
//   coin: string;
//   bank: string;
//   code: number;
//   status: string;
// }
export default function PaypalHistory({ infoUser }: IProps) {
  const [historyPaypal, sethistoryPaypal] = useState<
    IHistoryPaypal[] | undefined
  >(undefined);

  const formatNumber = (value: any) => {
    if (!value) return value;

    const number = parseInt(value.replace(/\./g, ''), 10); // Loại bỏ dấu chấm và chuyển đổi thành số nguyên
    const formattedValue = new Intl.NumberFormat('de-DE').format(number); // Định dạng số theo chuẩn 'de-DE' (có dấu chấm phân cách hàng nghìn)
    return formattedValue;
  };

  useEffect(() => {
    (async () => {
      const resHistoryPaypal = await GetHistoryPaypal({ id: infoUser?.id });
      sethistoryPaypal(resHistoryPaypal);
    })();
  }, [infoUser?.id]);
  // console.log(historyPaypal);
  return (
    <div
      className={
        'bg-white shadow rounded-lg p-6 relative w-full overflow-x-auto border-l-2'
      }
    >
      <h3
        className={
          'text-lg font-bold uppercase leading-8 text-gray-700 border-b pt-5 pb-3 text-center border-b-gray-300'
        }
      >
        {' '}
        Lịch sử nạp,hoàn trả tiền
      </h3>
      <table className={'w-full text-sm text-left text-gray-500 0'}>
        <thead
          className={'text-xs text-gray-700 uppercase bg-gray-50  border-b'}
        >
          <tr>
            <th className={'px-6 py-4 text-center '}>Ngân hàng</th>
            <th className={'px-6 py-4 text-center'}>Số tiền</th>
            <th className={'px-6 py-4 text-center'}>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {historyPaypal?.map((items: IHistoryPaypal) => {
            return (
              <tr
                className={'bg-white border-b hover:bg-gray-50 '}
                key={items?.id}
              >
                <td className={'px-6 py-4 text-center'}>
                  <div className={' text-center'}>
                    <p>{moment(items?.created_at).format('DD/MM/YYYY')}</p>
                  </div>
                </td>

                <td className="px-6 py-4 text-center">
                  <p>{formatNumber(items?.coin)}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className={'text-center text-red-400 font-bold'}>
                    <p>{items?.type}</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
