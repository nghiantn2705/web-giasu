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
import { IDisctrict } from '@/types/IDistrict';
import {
  getClass,
  getDistrict,
  getSalary,
  getSchool,
  getSubject,
  getTimeSlot,
} from '@/services/get';
import MyModalRules from '../../rules/page';
import moment from 'moment';
import { FieldType } from '@/types/Field';
const page = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const [classlevels, setClasslevels] = useState<IClass[]>();
  const [subject, setSubject] = useState<ISubject[]>();
  const [district, setDistrict] = useState<IDisctrict[]>();
  const [salary, setSalary] = useState<ISalary[]>();
  const [timeslot, setTimeSlot] = useState<ITimeSlot[]>();
  const [school, setSchool] = useState<ISchool[]>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string[]>([]);

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const filteredOptions = subject?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const filteredClasses = classlevels?.map((o) => ({
    label: o.class,
    value: o.id,
    key: o.id,
  }));

  const filteredSchool = school?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const filteredTimeSlot = timeslot?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const filteredSalary = salary?.map((o) => ({
    label: o.name,
    value: o.id,
    key: o.id,
  }));

  const filteredLocationAddress: any = [];

  district?.forEach((item) => {
    const newDistricts = item.district?.map((district) => {
      const newWards = district?.ward?.map((ward) => ({
        value: ward?.wardId,
        title: ward?.name,
      }));

      return {
        value: district?.districtId,
        title: district?.districtName,
        children: newWards || [],
      };
    });

    filteredLocationAddress.push({
      value: item?.provinceId,
      title: item?.provinceName,
      children: newDistricts || [],
    });
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

  useEffect(() => {
    (async () => {
      try {
        const resSubject = await getSubject();
        const resClasses = await getClass();
        const resDistrict = await getDistrict();
        const resSalary = await getSalary();
        const resTimeSlote = await getTimeSlot();
        const resSchool = await getSchool();
        setSubject(resSubject);
        setClasslevels(resClasses);
        setDistrict(resDistrict);
        setSalary(resSalary);
        setTimeSlot(resTimeSlote);
        setSchool(resSchool);
      } catch (ex: any) {
        console.log(ex.message);
      }
    })();
  }, []);
  const onFinish = async (values: any) => {
    values['date_of_birth'] = moment(values.date_of_birth).format('YYYY-MM-DD');
    const fileavata = values?.certificate?.map((item) => {
      return item?.originFileObj;
    });
    const file = values?.certificate?.map((item: any) => {
      return item?.originFileObj;
    });
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append('Certificate[]', file[i]);
    }
    for (let i = 0; i < fileavata.length; i++) {
      formData.append('avatar', fileavata[i]);
    }
    formData.append('name', values.name);
    formData.append('Citizen_card', values.Citizen_card);
    formData.append('DistrictID', values.DistrictID);
    formData.append('address', values.address);
    formData.append('class_id', values.class_id);
    formData.append('current_role', values.current_role);
    formData.append('date_of_birth', values.date_of_birth);
    formData.append('description', values.description);
    formData.append('education_level', values.education_level);
    formData.append('email', values.email);
    formData.append('exp', values.exp);
    formData.append('gender', values.gender);
    formData.append('password', values.password);
    formData.append('phone', values.phone);
    formData.append('salary_id', values.salary_id);
    formData.append('school_id', values.school_id);
    formData.append('subject', values.subject);
    formData.append('time_tutor_id', values.time_tutor_id);
    formData.append('role', '3');
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
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
    router.push('/auth/teacher');
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
          <div className={'grid grid-cols-2 gap-4'}>
            <Form.Item<FieldType>
              name="name"
              rules={[{ required: true, message: 'Họ và tên!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Họ và Tên" />
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
              name="email"
              rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
              ]}
            >
              <Input.Password className={'w-full'} placeholder="Mật khẩu" />
            </Form.Item>
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
              name="date_of_birth"
              rules={[
                { required: true, message: 'Hãy nhập ngày sinh của bạn!' },
              ]}
            >
              <DatePicker format="YYYY-MM-DD" className={'w-full'} />
            </Form.Item>
            <Form.Item<FieldType>
              name="Citizen_card"
              rules={[{ required: true, message: 'Hãy sô căn cước công dân!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Số căn cước công dân" />
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
                customRequest={(info: any) => {
                  setFileList([info?.file]);
                }}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Bằng đại học"
              name="certificate"
              valuePropName="fileList"
              getValueFromEvent={normFile}
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
            <Form.Item<FieldType>
              name="education_level"
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
                placeholder="Nhập trình độ học vấn"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'Đại học',
                    label: 'Đại học',
                    key: 1,
                  },
                  {
                    value: 'Cao đẳng',
                    label: 'Cao đẳng',
                    key: 2,
                  },
                  {
                    value: 'Trung cấp',
                    label: 'Trung cấp',
                    key: 3,
                  },
                ]}
              />
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
              rules={[{ required: true, message: 'Hãy chọn môn học bạn dạy!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Ca học"
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
                placeholder="Hiện tại đang là"
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
              name="salary_id"
              rules={[
                { required: true, message: 'Hãy nhập mức lương của bạn!' },
              ]}
              className={'w-full'}
            >
              <Select
                showSearch
                placeholder="Mức lương của bạn"
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
                key={Math.random()}
                value={filteredLocationAddress}
                showSearch
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Khu vực dạy"
                treeCheckable={false}
                allowClear
                multiple
                treeDefaultExpandAll
                treeData={filteredLocationAddress}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="school_id"
              rules={[{ required: true, message: 'Hãy chọn trường đại học!' }]}
            >
              <Select
                showSearch
                placeholder="Trường đang và đã học"
                optionFilterProp="children"
                options={filteredSchool}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="exp"
              rules={[
                { required: true, message: 'Hãy nhập kinh nghiệm của bạn!' },
              ]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Kinh nghiệm" />
            </Form.Item>
            <Form.Item<FieldType>
              name="description"
              rules={[{ required: true, message: 'Hãy điền mô tả về bạn!' }]}
              className={'w-full'}
            >
              <Input className={'w-full'} placeholder="Mô tả về bạn" />
            </Form.Item>
          </div>
          <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
            <Button type="primary" htmlType="submit" className={'bg-blue-tw'}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <span>
          {' '}
          Bạn xem điều khoản sau{' '}
          <button onClick={openModal}>Xem tại đây</button>
        </span>
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
