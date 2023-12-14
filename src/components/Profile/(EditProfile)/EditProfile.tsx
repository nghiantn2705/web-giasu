/* eslint-disable no-unused-vars */

import React, { FunctionComponent, useState } from 'react';
import { IUserInfo } from '@/types/IUserInfo';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { updateProfile } from '@/services/put';
import { getAdreess, getAdreessId } from '@/services/get';
import { IAddress, IDistrict } from '@/types/ILocation';
import { UploadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
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
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: any;
  const [address, setAddress] = useState<IAddress>();
  const [value, setValue] = useState('');
  const [district, setDistrict] = useState<IDistrict>();
  const [fileList, setFileList] = useState([]);
  const router = useRouter();
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
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  const onFinish = async (values: any) => {
    values['date_of_birth'] = dayjs(values.date_of_birth).format('YYYY-MM-DD');

    const fileavata = values?.avatar?.map((item: any) => {
      return item?.originFileObj;
    });
    const formData = new FormData();

    if (Array.isArray(fileavata) && fileavata.length > 0) {
      for (let i = 0; i < fileavata.length; i++) {
        formData.append('avatar', fileavata[i]);
      }
    }
    const address: any = district?.result?.formatted_address;
    const latitude: any = district?.result?.geometry?.location?.lat;
    const longitude: any = district?.result?.geometry?.location?.lng;
    const id: any = editProfile.id;
    const currentAddress = editProfile.address;
    const currentLatitude = editProfile.latitude;
    const currentLongitude = editProfile.longitude;
    if (address == undefined) {
      formData.append('address', currentAddress);
      formData.append('latitude', currentLatitude);
      formData.append('longitude', currentLongitude);
    } else {
      formData.append('address', address);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
    }
    formData.append('name', values.name);

    formData.append('date_of_birth', values.date_of_birth);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('gender', values.gender);
    formData.append('role', '2');

    await updateProfile(id, formData);
    toast.success('Cập nhập thành công !', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    reloadPageAfterDelay();
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
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
            className={'w-full'}
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
              date_of_birth: moment(editProfile.date_of_birth),
              gender: editProfile.gender,
            }}
          >
            <Form.Item<FieldType>
              name="name"
              rules={[{ required: true, message: 'Họ và tên!' }]}
              className={'w-full'}
            >
              <Input
                className={'w-full'}
                placeholder="Họ và Tên"
                value={editProfile.name}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: 'Hãy điền email của bạn!' }]}
              className={'w-full'}
            >
              <Input
                className={'w-full'}
                placeholder="Email"
                value={editProfile.email}
              />
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
                value={editProfile.phone}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="address"
              rules={[{ required: true, message: 'Hãy điền nơi ở của bạn!' }]}
              className={'w-full'}
            >
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
              name="date_of_birth"
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập ngày sinh của bạn!',
                },
              ]}
            >
              <DatePicker
                format="DD-MM-YYYY"
                className={'w-full'}
                value={dayjs(editProfile.date_of_birth, 'YYYY-MM-DD')}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="gender"
              required
              rules={[
                {
                  required: true,
                  message: 'Hãy chọn giới tính của bạn!',
                },
              ]}
            >
              <Radio.Group
                onChange={onChange}
                value={editProfile.gender}
                //   value={value}
              >
                <Radio value={'Nam'}>Nam</Radio>
                <Radio value={'Nữ'}>Nữ</Radio>
              </Radio.Group>
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
                fileList={
                  editProfile.avatar
                    ? [
                        {
                          uid: '-1',
                          name: 'Image',
                          status: 'done',
                          url: editProfile.avatar,
                        },
                      ]
                    : []
                }
                maxCount={1}
                // disabled
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

            <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
              <Button type="primary" htmlType="submit" className={'bg-blue-tw'}>
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
