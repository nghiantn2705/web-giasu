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
  message,
  TreeSelect,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { RegisterUser } from '@/services';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ISalary } from '@/types/ISalary';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';
import {
  getClass,
  getSalary,
  getSchool,
  getSubject,
  getTimeSlot,
  getLocation,
} from '@/services/get';
import MyModalRules from '../../rules/page';
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
    address?: string;
    education_level?: string;
  };
  const [fileList2, setFileList2] = useState([]);
  const [value, setValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const [location, setLocation] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const [classlevels, setClasslevels] = useState<IClass[]>();
  const [subject, setSubject] = useState<ISubject[]>();
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
    (async () => {
      try {
        await RegisterUser({ role: 3, ...values });
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
      } catch (ex: any) {
        console.log(ex);
      }
    })();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
  const filteredLocation = location?.map((item: any) => {
    const newDistricts = item.districts?.map((district: any) => {
      const newWards = district.wards?.map((ward: any) => {
        return {
          value: ward.name,
          title: ward.name,
        };
      });
      return {
        value: district.name,
        title: district.name,
        children: newWards,
      };
    });
    return {
      value: item.name,
      title: item.name,
      children: newDistricts,
    };
  });
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
        setSubject(resSubject);
        const resClasses = await getClass();
        setClasslevels(resClasses);
        const resSalary = await getSalary();
        setSalary(resSalary);
        const resTimeSlote = await getTimeSlot();
        setTimeSlot(resTimeSlote);
        const resSchool = await getSchool();
        setSchool(resSchool);
        const reslocation = await getLocation();
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
              name="name"
              rules={[{ required: true, message: 'Hãy điền họ và tên!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder={'Họ và Tên'} />
            </Form.Item>
            <Form.Item<FieldType>
              name="phone"
              rules={[{ required: true, message: 'Hãy số điện thoại!' }]}
              className={'w-full'}
            >
              <Input
                maxLength={10}
                className={'w-full'}
                placeholder={'Số điện thoại'}
                pattern="^[0-9]*$"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder={'Email'} />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
              ]}
            >
              <Input.Password
                className={'w-full'}
                placeholder={'Mật Khẩu'}
                minLength={8}
              />
            </Form.Item>
            <Form.Item<FieldType>
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
              name="address"
              rules={[
                { required: true, message: 'Hãy điền khu vực dạy của bạn!' },
              ]}
              className={'w-full'}
            >
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={value}
                dropdownStyle={{ maxHeight: 10000, overflow: 'auto' }}
                placeholder="Nơi ở"
                allowClear
                multiple
                treeDefaultExpandAll
                treeData={filteredLocation}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="date_of_birth"
              rules={[
                { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
              ]}
            >
              <DatePicker
                placeholder={'Ngày Sinh'}
                className={'w-full'}
                picker="date"
                format="DD/MM/YYYY"
              />
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
              name="Citizen_card"
              rules={[
                { required: true, message: 'Hãy điển số chứng minh nhân dân' },
              ]}
              className={'w-full'}
            >
              <Input
                maxLength={10}
                className={'w-full'}
                pattern="^[0-9]*$"
                placeholder="Số chứng minh nhân dân"
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="education_level"
              rules={[
                {
                  required: true,
                  message: 'Hãy điền trình độ học vấn của bạn!',
                },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Hiện đang là"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Đại học',
                    label: 'Đại học',
                  },
                  {
                    value: 'Cao đẳng',
                    label: 'Cao đẳng',
                  },
                  {
                    value: 'Trung cấp',
                    label: 'Trung cấp',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Bằng đại học"
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
              name="subject"
              rules={[{ required: true, message: 'Hãy chọn môn học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Môn học"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{ width: '100%' }}
                options={filteredOptions}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="time_tutor_id"
              rules={[{ required: true, message: 'Hãy chọn ca học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Ca dạy"
                value={selectedTimeSlot}
                onChange={setSelectedTimeSlot}
                style={{ width: '100%' }}
                options={filteredTimeSlot}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="class_id"
              rules={[{ required: true, message: 'Hãy chọn lớp học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Lớp học"
                value={selectedClasses}
                onChange={setSelectedClasses}
                style={{ width: '100%' }}
                options={filteredClasses}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="salary_id"
              rules={[
                { required: true, message: 'Hãy nhập mức lương của bạn!' },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Mức lương"
                optionFilterProp="children"
                options={filteredSalary}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="DistrictID"
              rules={[
                { required: true, message: 'Hãy điền khu vực dạy của bạn!' },
              ]}
              className={'w-full'}
            >
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={value}
                dropdownStyle={{ maxHeight: 10000, overflow: 'auto' }}
                placeholder="Khu vực dạy"
                allowClear
                multiple
                treeDefaultExpandAll
                treeData={filteredLocation}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="school_id"
              rules={[{ required: true, message: 'Hãy chọn trường đại học!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Trường đang và đã học"
                value={selectedSchool}
                onChange={setSelectedSchool}
                style={{ width: '100%' }}
                options={filteredSchool}
              />
            </Form.Item>
            <Form.Item<FieldType>
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
                placeholder="Hiện đang là"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Giảng viên',
                    label: 'Giảng viên',
                  },
                  {
                    value: 'Sinh Viên',
                    label: 'Sinh Viên',
                  },
                  {
                    value: 'Giáo viên',
                    label: 'Giáo viên',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="exp"
              rules={[
                { required: true, message: 'Hãy nhập kinh nghiệm của bạn!' },
              ]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Kinh nghiệm giảng dạy" />
            </Form.Item>
            <Form.Item<FieldType>
              name="description"
              rules={[{ required: true, message: 'Hãy điền mô tả về bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Mô tả về bạn" />
            </Form.Item>
          </div>
          <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
            <Button type="primary" htmlType="submit" className="bg-blue-tw">
              Submit
            </Button>
          </Form.Item>
          <span>
            {' '}
            Bạn hãy xem điều khoản sau đây
            <button onClick={openModal}>Xem tại đây</button>
          </span>
        </Form>
      </div>
      <MyModalRules visible={isOpen} onClose={closeModal}>
        <div>Trường</div>
      </MyModalRules>
      <div
        className={
          'col-span-5 bg-banner-register bg-center bg-cover bg-no-repeat relative before:absolute before:top-0 before:w-full before:h-full before:bg-blue-tw1 before:opacity-30'
        }
      ></div>
    </div>
  );
};

export default page;
