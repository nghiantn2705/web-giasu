/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Upload,
  Radio,
  RadioChangeEvent,
  DatePicker,
  Select,
  Checkbox,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAdreess, getAdreessId } from '@/services/get';
import moment from 'moment';
import { FieldType } from '@/types/Field';
import { IAddress, IDistrict } from '@/types/ILocation';
const page = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [address, setAddress] = useState<IAddress>();
  const [district, setDistrict] = useState<IDistrict>();
  let timeoutId: any;
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onSearchAddress = (value: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const res = await getAdreess(value);
      setAddress(res);
    }, 500);
  };
  const onChangeAddress = async (value: any) => {
    const res = await getAdreessId(value);
    setDistrict(res);
  };
  const options = address?.predictions?.map((item) => {
    return {
      value: item?.place_id,
      label: item?.description,
    };
  });

  const onFinish = async (values: any) => {
    console.log(values);
    values['date_of_birth'] = moment(values.date_of_birth).format('YYYY-MM-DD');
    const fileavata = values?.avatar?.map((item: any) => {
      return item?.originFileObj;
    });
    const formData = new FormData();
    for (let i = 0; i < fileavata.length; i++) {
      formData.append('avatar', fileavata[i]);
    }
    const addressUser: any =
      district?.result?.formatted_address + '' + district?.result?.name;
    const latitude: any = district?.result?.geometry?.location?.lat;
    const longitude: any = district?.result?.geometry?.location?.lng;
    formData.append('name', values.name);
    formData.append('address', addressUser);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('date_of_birth', values.date_of_birth);
    formData.append('email', values.email);
    formData.append('gender', values.gender);
    formData.append('password', values.password);
    formData.append('phone', values.phone);
    formData.append('role', '2');
    await RegisterUser(formData);
    toast.success('Đăng kí thành công !', {
      duration: 3000,
      position: 'top-right',
      icon: '✅',
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    });
    router.push('/auth/user');
  };
  return (
    <div className={'container drop-shadow border py-5 grid grid-cols-12'}>
      <div className={'col-span-7 pt-5 px-20'}>
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
            name="name"
            rules={[{ required: true, message: 'Họ và tên!' }]}
            className={'w-full'}
          >
            <Input className={'w-full'} placeholder="Họ và Tên" />
          </Form.Item>

          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
            className={'w-full'}
          >
            <Input className={'w-full'} placeholder="Email" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Hãy nhập mật khẩu của bạn!' }]}
          >
            <Input.Password className={'w-full'} placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item<FieldType>
            name="phone"
            rules={[{ required: true, message: 'Hãy số điện thoại!' }]}
            className={'w-full'}
          >
            <Input
              className={'w-full'}
              pattern="^[0-9]*$"
              maxLength={10}
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="address"
            rules={[{ required: true, message: 'Hãy điền nơi ở của bạn!' }]}
            className={'w-full'}
          >
            <Select
              className={'w-[400px]'}
              showSearch
              placeholder="Nhập địa chỉ ở của bạn"
              optionFilterProp="children"
              onChange={onChangeAddress}
              onSearch={onSearchAddress}
              filterOption={filterOption}
              options={options}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="gender"
            required
            rules={[{ required: true, message: 'Hãy chọn giới tính của bạn!' }]}
          >
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={'Nam'}>Nam</Radio>
              <Radio value={'Nữ'}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item<FieldType>
            name="date_of_birth"
            rules={[{ required: true, message: 'Hãy nhập ngày sinh của bạn!' }]}
          >
            <DatePicker format="YYYY-MM-DD" className={'w-full'} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Ảnh đại diện"
            name="avatar"
            getValueFromEvent={(event) => {
              return event?.fileList;
            }}
            valuePropName="fileList"
          >
            <Upload
              maxCount={1}
              beforeUpload={(file) => {
                return new Promise((resolve, rejects) => {
                  if (file.size > 900000) {
                    rejects('Ảnh quá dung lượng');
                  } else {
                    resolve('Thành công');
                  }
                });
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        'Bạn cần chấp nhận điều khoản để tiếp tục.',
                      ),
              },
            ]}
          >
            <Checkbox>Tôi đồng ý với các điều khoản và điều kiện</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
            <Button type="primary" htmlType="submit" className={'bg-blue-tw'}>
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
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
