/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { RegisterTeacher } from '@/services';
import Image from 'next/image';
import MyModalRules from '../../rules/page';
import { Button, Form, TreeSelect, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getDistrict } from '@/services/get';
import { IDisctrict } from '@/types/IDistrict';
import { FieldType } from '@/types/Field';

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [district, setDistrict] = useState<IDisctrict[]>();
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const resDistrict = await getDistrict();
        setDistrict(resDistrict);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);

  const filteredLocationAddress: any = [];

  district?.forEach((item) => {
    const newDistricts = item.district?.map((district) => {
      const newWards = district?.ward?.map((ward) => ({
        value: ward?.wardId,
        title: ward?.name,
        key: ward?.wardId,
      }));

      return {
        value: district?.districtId,
        title: district?.districtName,
        key: district?.districtId,
        children: newWards || [],
      };
    });

    filteredLocationAddress.push({
      value: item?.provinceId,
      title: item?.provinceName,
      key: item?.provinceId,
      children: newDistricts || [],
    });
  });
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const dummyRequest = ({ onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const onFinish = async (values: any) => {
    console.log(values.address.length);

    try {
      const test = values?.certificate?.map((item: any) => {
        return item?.originFileObj;
      });
      const formData = new FormData();
      for (let i = 0; i < test.length; i++) {
        formData.append('Certificate[]', test[i]);
      }
      formData.append('district', values.address);

      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await RegisterTeacher(formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
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
          <Form.Item<FieldType>
            name="address"
            rules={[{ required: true, message: 'Hãy điền nơi ở của bạn!' }]}
            className={'w-full'}
          >
            <TreeSelect
              key={Math.random()}
              value={filteredLocationAddress}
              showSearch
              treeNodeFilterProp="title"
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="Khu vực dạy"
              allowClear
              multiple
              treeDefaultExpandAll
              treeData={filteredLocationAddress}
            />
          </Form.Item>
          <Form.Item
            label="Bằng đại học"
            name="certificate"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Vui lòng tải lên ảnh!' }]}
          >
            <Upload
              customRequest={dummyRequest}
              listType="picture"
              maxCount={4}
              fileList={fileList}
              multiple
            >
              {fileList.length === 4 ? (
                ''
              ) : (
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              )}
            </Upload>
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
