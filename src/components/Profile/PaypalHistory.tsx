import React, { useEffect, useState } from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import { GetHistoryPaypal } from '@/services/paypal';
import { IHistoryPaypal } from '@/types/IPay';
import moment from 'moment';

interface IProps {
  infoUser: IUserInfo;
}

export default function PaypalHistory({ infoUser }: IProps) {
  const [historyPaypal, setHistoryPaypal] = useState<
    IHistoryPaypal[] | undefined
  >(undefined);

  const formatNumber = (value: any) => {
    if (!value) return value;

    const number = parseInt(value.replace(/\./g, ''), 10);
    const formattedValue = new Intl.NumberFormat('de-DE').format(number);
    return formattedValue;
  };

  useEffect(() => {
    const fetchHistoryPaypal = async () => {
      const resHistoryPaypal = await GetHistoryPaypal({ id: infoUser?.id });
      // Sắp xếp mảng theo thời gian giảm dần (mới nhất đầu tiên)
      const sortedHistoryPaypal = resHistoryPaypal.sort((a, b) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
      setHistoryPaypal(sortedHistoryPaypal);
    };

    fetchHistoryPaypal();
  }, [infoUser?.id]);

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
        Lịch sử giao dịch
      </h3>
      <table className={'w-full text-sm text-left text-gray-500'}>
        <thead
          className={'text-xs text-gray-700 uppercase bg-gray-50  border-b'}
        >
          <tr>
            <th className={'px-6 py-4 text-center '}>Ngày, giờ</th>
            <th className={'px-6 py-4 text-center'}>Số tiền</th>
            <th className={'px-6 py-4 text-center'}>Nội dung</th>
          </tr>
        </thead>
        <tbody>
          {historyPaypal?.map((item: IHistoryPaypal) => (
            <tr
              className={'bg-white border-b hover:bg-gray-50 '}
              key={item?.id}
            >
              <td className={'px-6 py-4 text-center'}>
                <div className={'text-center'}>
                  <p>
                    {moment(item?.created_at).format('DD/MM/YYYY, h:mm:ss a')}
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <p>{formatNumber(item?.coin)}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <div className={'text-center text-red-400 font-bold'}>
                  <p>{item?.type}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
