'use client';

import { IUserInfo } from '@/types/IUserInfo';
import ModoalEditProfile from '../(EditProfile)/ModoalEditProfile';
import { useStore } from '@/hook/use-store';
import ModoalEditProfileTeacher from '../(EditProfile)/ModailEditProfileTeacher';
import Error404 from '@/components/Layout/Error404';
interface IProps {
  infoUser: IUserInfo;
}
export default function InfoProfile({ infoUser }: IProps) {
  const [data] = useStore<IUserInfo>('userInfo');
  return (
    <div>
      <div className="flex-auto">
        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
          <li className="flex gap-2 relative px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
            <strong className="text-slate-700">Họ và tên:</strong>
            {infoUser?.name}
          </li>
          <li className="flex gap-2  relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Số điện thoại:</strong>
            {infoUser?.phone}
          </li>
          <li className="flex gap-2 relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Email:</strong>
            {infoUser?.email}
          </li>
          <li className="flex gap-2 relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Địa chỉ:</strong>
            <span className={'max-w-[280px]'}>{infoUser?.address}</span>
          </li>
          <li className="flex justify-center gap-2 relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <span className={'max-w-[280px]'}>
              {/* {data ? <ModoalEditProfile editProfile={data} /> : <Error404 />} */}
              {data?.role == 'user' ? (
                <ModoalEditProfile editProfile={data} />
              ) : (
                <ModoalEditProfileTeacher editProfile={data} />
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
