/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import MyDialog from '@/components/Teacher/RentTeacher';
import { Image } from 'antd';
import { useParams } from 'next/navigation';
import { SetStateAction, useEffect, useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '@/hook/use-store';
import { ITeachers } from '@/types/ITeachers';
import { ITeachersDetail } from '@/types/ITeachersDetail';
import Loading from '@/components/Layout/Loading';
import { postFeedback, getStart } from '@/services/feedback';
import FormRentProcedure from '@/components/ModailProcedure/FormRentProcedure';
import { getDirections } from '@/services/get';
import moment from 'moment';
import { toast } from 'react-toastify';
import FeedBack from '@/components/FeedBack/FeedBack';
interface IProps {
  teacher: ITeachers;
}

export default function Detail({ teacher }: IProps) {
  const [userInfo] = useStore<ITeachersDetail>('userInfo');

  const [starData, setStarData] = useState<{ avg: string }>();
  const [point1, setPoint] = useState(0);
  const [description1, setDescription] = useState('');
  const { id: params } = useParams();
  const [directions, setDirections] = useState<any>();
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  const values = {
    origin: [userInfo?.latitude, userInfo?.longitude],
    destination: [teacher?.latitude, teacher?.longitude],
  };
  values.origin = values.origin.join(',');
  values.destination = values.destination.join(',');

  useEffect(() => {
    (async () => {
      const resRating = await getStart({ id: params });
      setStarData(resRating);
    })();
  }, [params]);

  useEffect(() => {
    (async () => {
      if (userInfo) {
        const resDirections = await getDirections({ ...values });
        setDirections(resDirections);
      }
    })();
  }, []);
  console.log(teacher);
  const handleFeedbackChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };
  const handleRatingChange = (selectedRating: SetStateAction<number>) => {
    setPoint(selectedRating);
  };
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  const submitFeedback = async (e: any) => {
    e.preventDefault();

    if (!userInfo) {
      toast.error('Vui lòng đăng nhập để bình luận!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    if (!description1 || !point1) {
      toast.error('Vui lòng nhập đầy đủ thông tin phản hồi!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    try {
      const value = {
        description: description1,
        point: point1,
        id_sender: userInfo?.id,
        id_teacher: params,
      };
      await postFeedback({ ...value });
      toast.success('Gửi ý kiến thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      reloadPageAfterDelay();
    } catch (error) {
      toast.error('Có lỗi xảy ra trong quá trình bình luận.Vui lòng thử lại!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div>
      {teacher ? (
        <div className={'bg-gray-100'}>
          <main className={'container mx-auto py-8'}>
            <div className={'grid grid-cols-4 sm:grid-cols-12 gap-6 px-4'}>
              {/* avatar */}
              <div className={'col-span-4 sm:col-span-3 h-auto'}>
                <div className={'bg-white shadow rounded-lg p-6 h-full'}>
                  <Image
                    src={`${teacher?.avatar}`}
                    width={246}
                    height={260}
                    alt={'Picture of the author'}
                    className={'h-[200px] w-[200px] rounded-lg object-cover'}
                  />
                  <p
                    className={
                      'text-center mt-4 text-2xl font-bold text-stone-800'
                    }
                  >
                    {teacher?.name}
                  </p>
                  <p className={' text-center text-xs text-stone-400'}>
                    {directions ? (
                      <label className="">
                        (cách bạn:{' '}
                        {directions?.routes[0]?.legs[0]?.distance?.text})
                      </label>
                    ) : (
                      ''
                    )}
                  </p>
                  <p
                    className={
                      'mt-2 text-center text-green-600 text-xs font-serif'
                    }
                  >
                    Đang sẵn sàng
                  </p>
                  <p className={'py-2 text-center text-xs text-stone-400'}>
                    NGÀY THAM GIA:
                    <label className={'text-stone-950 font-bold'}>
                      {moment(teacher?.created_at).format('DD/MM/YYYY')}
                    </label>
                  </p>
                  <FormRentProcedure />

                  <div>
                    {teacher?.status_public == 1 ? (
                      <div>
                        <p className={'pt-5 text-center  text-xl font-serif'}>
                          Ảnh chứng chỉ
                        </p>
                        <div className={'text-center flex gap-2 mt-2'}>
                          {teacher?.Certificate_public?.map(
                            (item: string, index: number) => {
                              return (
                                <div key={index}>
                                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                  <Image
                                    height={80}
                                    width={80}
                                    src={`${item.path}`}
                                  />
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>

              {/*  */}
              <div className={'col-span-4 sm:col-span-9'}>
                <div className={'bg-white shadow rounded-lg p-6'}>
                  <p className={'text-3xl font-bold text-stone-800'}>
                    {teacher?.name}
                  </p>
                  {/* Nhận Dậy */}
                  <div className={' flex flex-row border-b py-3'}>
                    <div className={'basis-1/2'}>
                      <p className={'text-sm font-bold text-stone-400 '}>
                        SỐ NGƯỜI ĐÃ THUÊ
                      </p>
                      <span className={'text-blue-tw2'}>
                        {teacher?.renter} người
                      </span>
                    </div>
                    <div className={'basis-1/2'}>
                      <div
                        className={
                          'text-[14px] font-semibold font-poppins text-stone-400 '
                        }
                      >
                        <p className={'text-sm font-bold text-stone-400 '}>
                          Đánh giá
                        </p>
                        <div>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                              key={star}
                              icon={faStar}
                              className={`text ${
                                star <=
                                (starData && starData?.avg
                                  ? Math.floor(parseFloat(starData?.avg))
                                  : 0)
                                  ? 'text-amber-300'
                                  : 'gray-200'
                              } cursor-pointer`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  {/* Thông tin */}
                  <div className="py-4 border-b">
                    <div className={' grid gap-2 grid-cols-2'}>
                      <div>
                        <p className="text-xl font-bold">Nhận dạy:</p>
                        <div className="grid gap-2 grid-cols-8 py-3">
                          {teacher?.class_id.map((item, index: number) => (
                            <div
                              key={index}
                              className="col-span-2 text-shadow text-white font-semibold text-sm bg-blue-tw1 p-3 text-uppercase rounded-md text-center"
                            >
                              <p>{item?.class}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xl font-bold">Dạy môn:</p>
                        <div className="grid gap-2 grid-cols-6 py-3">
                          {teacher?.subject?.map((subject, index: number) => (
                            <div
                              key={index}
                              className="col-span-2 text-shadow text-white font-semibold text-sm bg-blue-tw1 p-3 text-uppercase rounded-md text-center"
                            >
                              <p>{subject.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'py-4 border-b'}>
                    <div className={'text-xl font-bold'}>
                      <p>Thông tin chi tiết:</p>
                    </div>

                    <div className={'pt-2 grid gap-30 grid-cols-10'}>
                      <div className={'col-span-5'}>
                        <div className={'pt-2 text-zinc-950 '}>
                          <label className={'font-bold'}>
                            {' '}
                            Năm tốt nghiệp :
                          </label>
                          <label> 2023</label>
                        </div>
                        {/* <div className="pt-2 text-zinc-950 ">
                          <label className="font-bold">
                            {' '}
                            Trình độ học vấn:{' '}
                          </label>{' '}
                          <label className="">
                            {teacher?.education_level?.map((items) => {
                              return items?.name;
                            })}
                          </label>
                        </div> */}
                        <div className={'pt-2 text-zinc-950 '}>
                          <label className={'font-bold'}>
                            {' '}
                            Trình độ học vấn :
                          </label>

                          <label className="">{teacher?.current_role} </label>
                        </div>
                        <div className={'pt-2 text-zinc-950 '}>
                          <label className={'font-bold'}> Trường học :</label>

                          <label className=""> {teacher?.school_id}</label>
                        </div>
                        {/* <div className={'pt-2  text-zinc-950 '}>
                          <label className={'font-bold'}> Hiện tại là :</label>

                          <label className=""> {teacher?.current_role}</label>
                        </div> */}
                      </div>
                      <div className={'col-span-5'}>
                        <div className="pt-2  text-zinc-950 ">
                          <label className="font-bold">Khu vực dạy : </label>

                          <label className=""> {teacher?.district}</label>
                        </div>
                        <div className={'pt-2  text-zinc-950 '}>
                          <label className={'font-bold'}>
                            Mức lương mong muốn :
                          </label>

                          <label className="">
                            {teacher?.salary_id
                              ? teacher.salary_id
                                  .map(
                                    (salary) =>
                                      (salary * 1)
                                        .toLocaleString('en-US', {
                                          minimumFractionDigits: 0,
                                          maximumFractionDigits: 0,
                                        })
                                        .replace(/,/g, '.') + 'đ',
                                  )
                                  .join(' đến ')
                              : ''}
                          </label>
                        </div>
                        <div className="pt-2 col-span-3 text-zinc-950 ">
                          <label className="font-bold"> Kinh nghiệm : </label>

                          <label className=""> {teacher?.exp}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'py-4 border-b'}>
                    <div className={'text-xl font-bold'}>
                      <p>Thông tin khác:</p>
                    </div>

                    <div className={'pt-2'}>
                      <div className={'pt-1 col-span-3 text-zinc-950 '}>
                        <label className={'font-bold'}>
                          Ghi chú của gia sư :
                        </label>

                        <label className=""> {teacher?.description}</label>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className={'mt-8 mx-auto px-4'}>
              <div className={'bg-white shadow rounded-lg p-6'}>
                <div className="text-center text-2xl font-bold">
                  <p>Đánh giá:</p>
                </div>
                <div className="mx-auto grid grid-cols-2 gap-5">
                  <div className="col-span-2 text-right">
                    <form className="text-right" onSubmit={submitFeedback}>
                      <div className="grid grid-cols-10 gap-6">
                        <div className="col-span-5 flex items-center gap-4">
                          {userInfo && (
                            <img
                              src={userInfo.avatar}
                              width={45}
                              height={45}
                              className="rounded-full border-2 border-gray-500 hover:bg-gray-200 cursor-pointer w-12 h-12 overflow-auto"
                              alt=""
                            />
                          )}
                          <span className={'text-lg'}>{userInfo?.name}</span>
                        </div>
                        <div className="col-span-5 text-right">
                          <label htmlFor="rating">Đánh giá sao:</label>
                          <div>
                            {[1, 2, 3, 4, 5].map((star, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                className={`text-${
                                  point1 >= star ? 'amber-300' : 'gray-500'
                                } cursor-pointer`}
                                onClick={() => {
                                  handleRatingChange(star);
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <br />

                      <textarea
                        className="w-full border border-gray-300 rounded p-2"
                        id="feedback"
                        value={description1}
                        onChange={handleFeedbackChange}
                        placeholder="Nhập ý kiến phản hồi..."
                      />
                      <br />
                      <button
                        className="text-right text-white bg-blue-tw1 rounded py-2 px-4"
                        type="submit"
                      >
                        Gửi ý kiến
                      </button>
                    </form>
                  </div>
                  <FeedBack idParams={Number(params)} pages={1} />
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
