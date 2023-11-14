/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Upload,
  Radio,
  RadioChangeEvent,
  DatePicker,
  InputNumber,
  message,
  Checkbox,
} from 'antd';
import type { DatePickerProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import toast from 'react-hot-toast';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ISalary } from '@/types/ISalary';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';
import { IDisctrict } from '@/types/IDistrict';
import axios from 'axios';
import {
  getClass,
  getDistrict,
  getSalary,
  getSchool,
  getSubject,
  getTimeSlot,
  getLocation,
  getLocationDistric,
} from '@/services/get';
import Link from 'next/link';
const page = () => {
  const router = useRouter();
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
  };
  const [fileList2, setFileList2] = useState([]);
  const [value, setValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const [location, setLocation] = useState([]);
  const [classlevels, setClasslevels] = useState<IClass[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [district, setDistrict] = useState<IDisctrict[]>();
  const [salary, setSalary] = useState<ISalary[]>();
  const [timeslot, setTimeSlot] = useState<ITimeSlot[]>();
  const [school, setSchool] = useState<ISchool[]>();

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const onFinish = (values: any) => {
    console.log({ role: 3, ...values });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const callAPI = async (host: any) => {
    const response = await axios.get(host);
    return response;
  };
  callAPI('https://provinces.open-api.vn/api/?depth=1');
  const onChangeLocation = (api) => {
    return axios.get(api).then((response) => {});
  };
  const callApiWard = (api) => {
    return axios.get(api).then((response) => {});
  };
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string[]>([]);
  const filteredOptions = subject?.map((o) => ({
    label: o.name,
    value: o.id,
  }));
  const filteredClasses = classlevels?.map((o) => ({
    label: o.class,
    value: o.id,
  }));
  const filteredSchool = school?.map((o) => ({
    label: o.name,
    value: o.id,
  }));
  const filteredTimeSlot = timeslot?.map((o) => ({
    label: o.name,
    value: o.id,
  }));
  const filteredSalary = salary?.map((o) => ({
    label: o.name,
    value: o.id,
  }));

  const filteredLocation = location?.map((o) => ({
    label: o.name,
    value: o.code,
  }));
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

  const handleBeforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Bạn chỉ có thể tải lên file JPG/PNG!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Kích thước hình ảnh không được vượt quá 10MB!');
    }
    return isJpgOrPng && isLt10M;
  };

  const handleOnChange = ({ fileList2 }: any) => {
    setFileList2(fileList2);
  };
  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClasses = await getClass();
        const resDistrict = await getDistrict();
        const resSalary = await getSalary();
        const resTimeSlote = await getTimeSlot();
        const resSchool = await getSchool();
        const reslocation = await getLocation();

        setSubject(resSubject);
        setClasslevels(resClasses);
        setDistrict(resDistrict);
        setSalary(resSalary);
        setTimeSlot(resTimeSlote);
        setSchool(resSchool);
        setLocation(reslocation);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);

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
        >
          <div className={'grid grid-cols-2 gap-4'}>
            <Form.Item<FieldType>
              label="Họ và Tên "
              name="name"
              rules={[{ required: true, message: 'Hãy điền họ và tên!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Số điện thoại "
              name="phone"
              rules={[{ required: true, message: 'Hãy số điện thoại!' }]}
              className={'w-full'}
            >
              <InputNumber min={0} max={10} step={1} precision={0} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email "
              name="email"
              rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
              ]}
            >
              <Input.Password className={'w-full'} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Giới tính"
              name="gender"
              required
              rules={[
                { required: true, message: 'Hãy chọn giới tính của bạn!' },
              ]}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={'Nam'}>Nam</Radio>
                <Radio value={'Nữ'}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item<FieldType>
              label="Ngày sinh"
              name="date_of_birth"
              rules={[
                { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
              ]}
            >
              <DatePicker picker="date" format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Ảnh đại diện"
              name="avatar"
              getValueFromEvent={(event) => {
                return event?.fileList;
              }}
              valuePropName="fileList"
              rules={[
                { required: true, message: 'Hãy upload ảnh đại diện của bạn!' },
                {
                  validator(_, fileList) {
                    return new Promise((resolve, rejects) => {
                      if (fileList && fileList[0].size > 900000) {
                        rejects('Ảnh quá dung lượng');
                      } else {
                        resolve('Thành công');
                      }
                    });
                  },
                },
              ]}
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
                customRequest={(info: any) => {
                  setFileList([info.file]);
                }}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
                {fileList[0]?.name}
              </Upload>
            </Form.Item>
            <Form.Item<FieldType>
              label="Số căn cước công dân "
              name="Citizen_card"
              rules={[{ required: true, message: 'Hãy điền họ và tên!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} />
            </Form.Item>
            <Form.Item
              label="Ảnh"
              name="images"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Vui lòng tải lên ảnh!' }]}
            >
              <Upload
                name="avatar"
                beforeUpload={handleBeforeUpload}
                customRequest={dummyRequest}
                onChange={handleOnChange}
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
            <Form.Item<FieldType>
              label="Môn học"
              name="subject"
              rules={[{ required: true, message: 'Hãy chọn môn học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Nhập môn học"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{ width: '100%' }}
                options={filteredOptions}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Ca dạy"
              name="time_tutor_id"
              rules={[{ required: true, message: 'Hãy chọn môn học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Nhập ca học môn học"
                value={selectedTimeSlot}
                onChange={setSelectedTimeSlot}
                style={{ width: '100%' }}
                options={filteredTimeSlot}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Lớp học"
              name="class_id"
              rules={[{ required: true, message: 'Hãy chọn lớp học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Nhập môn học"
                value={selectedClasses}
                onChange={setSelectedClasses}
                style={{ width: '100%' }}
                options={filteredClasses}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Mô tả "
              name="description"
              rules={[{ required: true, message: 'Hãy điền mô tả về bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Hiện tại đang là"
              name="current_role"
              rules={[
                {
                  required: true,
                  message: 'Hãy điền vị trí công việc hiện tại của bạn!',
                },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Sinh Viên',
                    label: 'Sinh Viên',
                  },
                  {
                    value: 'Giảng Viên',
                    label: 'Giảng Viên',
                  },
                  {
                    value: 'Giáo viên',
                    label: 'Giáo viên',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Mức lương"
              name="salary_id"
              rules={[
                { required: true, message: 'Hãy nhập mức lương của bạn!' },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                options={filteredSalary}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Khu vực dạy"
              name="DistrictID"
              rules={[
                { required: true, message: 'Hãy điền khu vực dạy của bạn!' },
              ]}
              className={'w-full'}
            >
              <Select
                id="province"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                options={filteredLocation}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Đại học"
              name="school_id"
              rules={[{ required: true, message: 'Hãy chọn trường đại học!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Nhập môn học"
                value={selectedSchool}
                onChange={setSelectedSchool}
                style={{ width: '100%' }}
                options={filteredSchool}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Kinh Nghiệm"
              name="exp"
              rules={[
                { required: true, message: 'Hãy nhập kinh nghiệm của bạn!' },
              ]}
              className={'w-full'}
            >
              <Input className={'w-full'} />
            </Form.Item>
          </div>
          <Form.Item
            name="fieldA"
            valuePropName="checked"
            rules={[
              { required: true, message: 'Hãy ấn đồng ý và xem điều khoản!' },
            ]}
          >
            <Checkbox>
              {' '}
              Bạn đồng ý với điều khoản sau{' '}
              <Link href={'../rules/'}>Xem tại đây</Link>{' '}
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
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
