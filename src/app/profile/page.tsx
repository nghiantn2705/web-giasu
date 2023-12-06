'use client';
import React from 'react';
import { useStore } from '@/hook/use-store';
import Profile from '@/components/Profile/Profile';
import { IUserInfo } from '@/types/IUserInfo';
import { FaUserEdit } from 'react-icons/fa';
import ActionSetting from '@/components/Profile/(setting)/ActionSetting';
import ConnectH from '@/components/Profile/(Connect)/ConnectH';
import InfoUser from '@/components/Profile/InfoUser';

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
                <ActionSetting />
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
                    : 'Những người đã thuê bạn'}
                </h3>
                <span className={'text-sm'}>Xem thêm</span>
              </div>
              {/*<ConnectH />*/}
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
