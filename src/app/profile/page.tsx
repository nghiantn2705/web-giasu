'use client';
import React from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { IUserInfo } from '@/types/IUserInfo';
import { FaUserEdit } from 'react-icons/fa';
import ActionSetting from '@/components/Profile/(setting)/ActionSetting';
import ConnectH from '@/components/Profile/(Connect)/ConnectH';
import InfoUser from '@/components/Profile/InfoUser';
import FeedBack from '@/components/FeedBack/FeedBack';

const App = () => {
  const [data] = useStore<IUserInfo>('userInfo');

  return (
    <div>
      {data ? (
        <Profile infoUser={data}>
          <div className={'grid grid-cols-3 gap-4'}>
            {data?.role == 3 ? (
              <div
                className={
                  'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
                }
              >
                <h3 className={'text-lg font-bold'}>Cài đặt hiển thị</h3>
                <ActionSetting infoUser={data} />
              </div>
            ) : (
              ''
            )}
            <div
              className={
                'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
              }
            >
              <div className={'flex justify-between items-center'}>
                <h3 className={'text-lg font-bold'}>Thông tin người dùng</h3>
                <FaUserEdit />
              </div>
              <InfoUser infoUser={data} />
            </div>
            <div
              className={
                'flex flex-col gap-4 border py-2 px-4 rounded-xl drop-shadow-md bg-white'
              }
            >
              <div className={'flex justify-between items-center'}>
                <h3 className={'text-lg font-bold'}>
                  {' '}
                  {data?.role == 2
                    ? 'Gia sư bạn đã thuê'
                    : 'Những người đã kết nối thành công'}
                </h3>
                <span className={'text-sm'}>Chi tiết</span>
              </div>
              <ConnectH infoUser={data} />
            </div>
            <div
              className={
                'col-span-3 flex flex-col border py-2 px-4 rounded-xl drop-shadow-md bg-white'
              }
            >
              <div className={'flex justify-between items-center'}>
                <h3 className={'text-lg font-bold'}>
                  {' '}
                  {data?.role == 2
                    ? 'Những đánh giá của bạn'
                    : 'Những đánh giá của người dùng'}
                </h3>
              </div>
              <FeedBack idParams={data?.id} userInfo={data} pages={2} />
            </div>
          </div>
        </Profile>
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
