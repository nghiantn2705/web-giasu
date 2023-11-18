/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { RegisterTeacher } from '@/services';
import Image from 'next/image';
import MyModalRules from '../../rules/page';
import { Button, Form, TreeSelect, UploadFile } from 'antd';
import { getAddress } from '@/services/get';
interface Iprops {
  certificate: UploadFile[];
}
type FieldType = {
  name?: string;
  password?: string;
  email?: string;
  subject?: string[];
  avatar?: any;
  gender?: string;
  date_of_birth?: string;
  phone?: number;
  Citizen_card?: number;
  class_id?: string[];
  description?: string;
  time_tutor_id?: string[];
  current_role?: string;
  exp?: string;
  school_id?: string;
  salary_id?: string;
  DistrictID?: string[];
  address?: string;
  education_level?: string;
};
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adress, setAdress] = useState([]);
  const closeModal = () => {
    setIsOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    (async () => {
      try {
        const resAdress = await getAddress();
        setAdress(resAdress);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);
  console.log(
    adress?.map((item: any) => {
      return item;
    }),
  );
  const filteredLocationAddress = adress?.map((item: any) => {
    const newDistricts = item.districts?.map((district: any) => {
      const newWards = district?.wards.map((ward: any) => {
        return {
          value: ward.name,
          title: ward.name,
        };
      });
      return {
        value: district.code,
        title: district.name,
        children: newWards,
      };
    });
    return {
      value: item.code,
      title: item.name,
      children: newDistricts,
    };
  });
  const onFinish = async (values: Iprops) => {
    // const test = values?.certificate?.map((item) => {
    //   return item?.originFileObj;
    // });
    console.log(values);
    // try {
    //   const formData = new FormData();
    //   for (let i = 0; i < test.length; i++) {
    //     formData.append('Certificate[]', test[i]);
    //   }
    //   const res = await RegisterTeacher(formData);
    //   console.log(res);
    // } catch (ex) {
    //   console.log(ex);
    // }
  };
  return (
    <div className={'grid grid-cols-12 min-h-fit'}>
      <div className={'col-span-7 pt-5 pb-16  px-20'}>
        <div className={'flex flex-col items-center mb-5'}>
          <Image src={'/logo.png'} alt={''} width={100} height={100} />
          <h1 className={'text-2xl text-blue-tw'}>Chào mừng bạn đến với Gs7</h1>
          <p className={'text-gray-500'}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </p>
        </div>
        <Form
          layout="vertical"
          className={'w-full'}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          encType={'multipart/form-data'}
        >
          {/*<Form.Item*/}
          {/*  label="Bằng đại học"*/}
          {/*  name="certificate"*/}
          {/*  valuePropName="fileList"*/}
          {/*  getValueFromEvent={normFile}*/}
          {/*  rules={[{ required: true, message: 'Vui lòng tải lên ảnh!' }]}*/}
          {/*>*/}
          {/*  <Upload*/}
          {/*    customRequest={dummyRequest}*/}
          {/*    listType="picture"*/}
          {/*    maxCount={4}*/}
          {/*    fileList={fileList}*/}
          {/*    multiple*/}
          {/*  >*/}
          {/*    {fileList.length === 4 ? (*/}
          {/*      ''*/}
          {/*    ) : (*/}
          {/*      <Button icon={<UploadOutlined />}>Click to Upload</Button>*/}
          {/*    )}*/}
          {/*  </Upload>*/}
          {/*</Form.Item>*/}
          <Form.Item<FieldType>
            name="address"
            rules={[{ required: true, message: 'Hãy điền nơi ở của bạn!' }]}
            className={'w-full'}
          >
            <TreeSelect
              value={adress}
              key={Math.random()}
              showSearch
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="Nơi đang ở"
              allowClear
              multiple
              treeDefaultExpandAll
              treeData={filteredLocationAddress}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
            <Button type="primary" htmlType="submit" className={'bg-blue-tw'}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <MyModalRules visible={isOpen} onClose={closeModal}>
          <div>Trường</div>
        </MyModalRules>
      </div>
      <div
        className={
          'col-span-5 bg-banner-register bg-center bg-cover bg-no-repeat relative before:absolute before:top-0 before:w-full before:h-full before:bg-blue-tw1 before:opacity-30'
        }
      ></div>
    </div>
  );
};
export default page;
