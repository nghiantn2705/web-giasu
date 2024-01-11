import { Image } from 'antd';
import AddCertificate from '@/components/ToggleSwitch/Target/AddCertificate';
import React from 'react';
import SelectCertificate from '@/components/ToggleSwitch/Target/SelectCertificate';

const Certificate = (props: any) => {
  const { infoUser } = props;
  const imageCertificate = JSON.parse(infoUser?.Certificate);
  // const imageCertificateAdd = JSON.parse();
  const imageCertificatePublic = JSON.parse(infoUser?.Certificate_public);
  console.log(infoUser);
  return (
    <>
      <div className={'w-full grid grid-cols-2 gap-4 py-2'}>
        <div
          className={
            'border py-2 px-4 rounded-xl drop-shadow-md bg-white h-[590px]'
          }
        >
          <h3 className={'text-lg font-bold'}>Kho ảnh chứng chỉ</h3>
          <div className={'flex flex-col gap-3 h-[535px] justify-between '}>
            <div className={'flex flex-col gap-4 mt-4 overflow-y-scroll'}>
              {imageCertificate?.map((items: string, index: number) => {
                return (
                  <div key={index} className={'flex gap-4 items-center'}>
                    <Image
                      src={items}
                      height={60}
                      width={60}
                      alt={'chứng chỉ'}
                    />
                    <div>
                      <span>Ảnh {index + 1}</span>
                    </div>
                  </div>
                );
              })}
              {infoUser?.add_certificate?.map((items: any, index: number) => {
                return (
                  <div key={index} className={'flex gap-4 '}>
                    <Image
                      src={items.path}
                      height={60}
                      width={60}
                      alt={'chứng chỉ'}
                      className={'opacity-70'}
                    />
                    <span className={'mt-2 text-[#888]'}>
                      Ảnh đang chờ admin duyệt
                    </span>
                  </div>
                );
              })}
            </div>
            <div className={'self-end'}>
              <AddCertificate infoUser={infoUser} />
            </div>
          </div>
        </div>
        <div
          className={
            'border py-2 px-4 rounded-xl drop-shadow-md bg-white h-[590px]'
          }
        >
          <h3 className={'text-lg font-bold'}>
            Ảnh chứng chỉ hiện ở trang chủ
          </h3>
          <div className={'flex flex-col gap-3  h-[535px] justify-between'}>
            <div
              className={'flex flex-col h-full gap-3 mt-4 overflow-y-scroll'}
            >
              {imageCertificatePublic?.map((items: string, index: number) => {
                return (
                  <div key={index} className={'flex gap-4 items-center'}>
                    <Image
                      src={items}
                      height={60}
                      width={60}
                      alt={'chứng chỉ'}
                    />
                    <span>Ảnh {index + 1}</span>
                  </div>
                );
              })}
            </div>
            <div className={'self-end'}>
              <SelectCertificate infoUser={infoUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Certificate;
