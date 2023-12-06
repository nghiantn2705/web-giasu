/* eslint-disable no-unused-vars */

import React, { FunctionComponent, useState } from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { updateProfile } from '@/services/put';
import { getAdreess, getAdreessId } from '@/services/get';
import { IAddress, IDistrict } from '@/types/ILocation';
import { UploadOutlined } from '@ant-design/icons';
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
  message,
} from 'antd';
import { FieldType } from '@/types/Field';
import moment from 'moment';
import MyModalTransition from '@/components/Headless/ModalTransition';
interface IProps {
  editProfile: IUserInfo;
}
const EditProfile = ({ editProfile }: IProps) => {
  let timeoutId: any;
  const [address, setAddress] = useState<IAddress>();
  const [value, setValue] = useState('');
  const [district, setDistrict] = useState<IDistrict>();
  const [fileList, setFileList] = useState([]);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const [formValues, setFormValues] = useState({
    name: editProfile.name,
    email: editProfile.email,
    phone: editProfile.phone,
    address: editProfile.address,
  });
  // const handleFileChange = ({ fileList }) => {
  //   setFileList(fileList);
  // };
  console.log(editProfile);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const onChangeAddress = async (value: any) => {
    const res = await getAdreessId(value);
    setDistrict(res);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onSearchAddress = (value: any) => {
    console.log(value);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const res = await getAdreess(value);
      setAddress(res);
    }, 1000);
  };
  const options = address?.predictions?.map((item) => {
    return {
      value: item?.place_id,
      label: item?.description,
    };
  });
  const onFinish = async (values: any) => {
    values['date_of_birth'] = moment(values.date_of_birth).format('YYYY-MM-DD');

    const fileavata = values?.avatar?.map((item: any) => {
      return item?.originFileObj;
    });
    const formData = new FormData();

    for (let i = 0; i < fileavata.length; i++) {
      formData.append('avatar', fileavata[i]);
    }

    const address: any = district?.result?.formatted_address;
    const latitude: any = district?.result?.geometry?.location?.lat;
    const longitude: any = district?.result?.geometry?.location?.lng;
    const id: any = editProfile.id;
    // const userData = {
    //   name: values.name,
    //   address: address,
    //   latitude: latitude,
    //   longitude: longitude,
    //   email: values.email,
    //   phone: values.phone,
    //   role: 'user',
    //   avatar: fileavata,
    // };
    formData.append('name', values.name);
    formData.append('address', address);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('date_of_birth', values.date_of_birth);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('role', 'user');

    if (address === undefined) {
      toast.error('Vui lòng nhập lại địa chỉ !', {
        position: 'top-right',
        duration: 3000,
      });
    } else {
      await updateProfile(id, formData);
      toast.success('Cập nhập thành công !', {
        duration: 3000,
        position: 'top-right',
        icon: '✅',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      });
      router.push('/profile');
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className={' mx-auto text-right hover:text-blue-tw text-sm '}
      >
        Xem thêm
      </button>
      <MyModalTransition visible={isOpen} onClose={closeModal}>
        <div className={'px-8 py-4 h-full'}>
          <h3 className={'text-lg font-bold mb-4'}>
            Chỉnh sửa thông tin người dùng
          </h3>
          <Form
            layout="vertical"
            className={'grid grid-cols-2 gap-4'}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            encType={'multipart/form-data'}
            initialValues={{
              file: null,
              name: editProfile.name,
              email: editProfile.email,
              phone: editProfile.phone,
              address: editProfile.address,
            }}
          >
            <Form.Item<FieldType>
              name="name"
              rules={[{ required: true, message: 'Họ và tên!' }]}
              className={'m-0 h-fit'}
            >
              <label htmlFor={'username'}>Họ và tên</label>
              <Input
                id={'username'}
                className={'w-full'}
                placeholder="Họ và Tên"
                value={editProfile.name}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
              className={'m-0 h-fit'}
            >
              <label htmlFor={'email'}>Email</label>
              <Input
                id={'email'}
                className={'w-full'}
                placeholder="Email"
                value={editProfile.email}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="phone"
              rules={[{ required: true, message: 'Hãy số điện thoại!' }]}
              className={'m-0'}
            >
              <label htmlFor={'phone'}>Số điện thoại</label>
              <Input
                className={'w-full rounded-none'}
                pattern="^[0-9]*$"
                maxLength={10}
                placeholder="Số điện thoại"
                value={editProfile.phone}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="address"
              rules={[{ required: true, message: 'Hãy điền nơi ở của bạn!' }]}
              className={'m-0'}
            >
              <label htmlFor={'phone'}>Địa chỉ</label>
              <Select
                value={editProfile.address}
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
              className={'m-0'}
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

            <Form.Item className={'col-span-2'}>
              <Button
                type="primary"
                htmlType="submit"
                className={'bg-blue-tw self-end'}
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </MyModalTransition>
    </div>
  );
};

export default EditProfile;
