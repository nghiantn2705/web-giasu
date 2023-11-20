'use client';

import * as React from 'react';
import { useState } from 'react';
import { getAdreess, getAdreessId } from '@/services/get';
import { Button, Form, Select } from 'antd';
import { FieldType } from '@/types/Field';

interface IAddress {
  predictions: [
    {
      place_id: string;
      description: string;
    },
  ];
}

interface IDistrict {
  result: {
    formatted_address: string;
    geometry: {
      location: {
        lat: string;
        lng: string;
      };
    };
  };
}
export default function App() {
  const [address, setAddress] = useState<IAddress>();
  const [district, setDistrict] = useState<IDistrict>();

  let timeoutId: any;
  const onSearch = (value: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const res = await getAdreess(value);
      setAddress(res);
    }, 500);
  };
  const onChange = async (value: string) => {
    const res = await getAdreessId(value);
    setDistrict(res);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const options = address?.predictions?.map((item) => {
    return {
      value: item?.place_id,
      label: item?.description,
    };
  });

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append('address', district?.result?.formatted_address);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div>
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
          <Select
            className={'w-[400px]'}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={options}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
          <Button type="primary" htmlType="submit" className={'bg-blue-tw'}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
