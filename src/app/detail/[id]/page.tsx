/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import Image from 'next/image';
import MyDialog from '@/components/Teacher/RentTeacher';
import { getTeachesByid } from '../../../../action/getByID';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import { ITeachers1 } from '@/types/ITeachers1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '@/hook/use-store';

export default function Home(props: any) {
  const [data, setData] = useState<ITeachers1>();
  const { id: params } = useParams();
  const router = usePathname();
  const rsrouter = useRouter();
  useEffect(() => {
    const fetch = async () => {
      const res = await getTeachesByid(Number(params));
      setData(res);
    };
    fetch();
  }, [setData]);

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (selectedRating: SetStateAction<number>) => {
    setRating(selectedRating);
  };

  const handleFeedbackChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = () => {
    // Gửi dữ liệu đánh giá sao và ý kiến phản hồi lên máy chủ ở đây.
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Điều chỉnh phần này để gửi dữ liệu lên máy chủ của bạn.

    // Sau khi gửi dữ liệu, bạn có thể cập nhật giao diện người dùng hoặc thực hiện các xử lý khác tùy thuộc vào ứng dụng của bạn.
  };
  console.log(data);

  return (
    <div>
      {data ? (
        <div className={''}>
          <main className={'container mx-auto pt-10  '}>
            <div className={' grid gap-10 grid-cols-12 '}>
              {/* avatar */}
              <div className={' pt-5 col-span-2'}>
                <Image
                  src={`${data?.avatar}`}
                  width={260}
                  height={260}
                  alt={'Picture of the author'}
                />
                <p
                  className={
                    'mt-5 text-center text-green-600 text-2xl font-serif'
                  }
                >
                  Đang sẵn sàng
                </p>
                <p className={'mt-5 text-center text-xs text-stone-400'}>
                  NGÀY THAM GIA:
                  <label className={'text-stone-950 font-bold'}>
                    24/1/2021
                  </label>
                </p>
              </div>
              {/*  */}
              <div className={'pt-5 col-span-8 py-15'}>
                <p className={'text-[30px] font-bold text-stone-800'}>
                  {data?.name}
                </p>
                {/* Nhận Dậy */}
                <div className={' flex flex-row border-b py-3'}>
                  <div className={'basis-1/2'}>
                    <p
                      className={
                        'text-[14px] font-semibold font-poppins text-stone-400 '
                      }
                    >
                      SỐ NGƯỜI ĐÃ THUÊ:
                      <span className={'text-red-400'}>566 người</span>
                    </p>
                  </div>
                  <div className={'basis-1/2'}>
                    <p
                      className={
                        'text-[14px] font-semibold font-poppins text-stone-400 '
                      }
                    >
                      TỶ LỆ HOÀN THÀNH:
                      <span className={'text-red-400'}>100%</span>
                    </p>
                  </div>
                </div>
                {/*  */}
                {/* Thông tin */}
                <div className="py-4 border-b">
                  <div className={' grid gap-2 grid-cols-2'}>
                    <div>
                      <p className="text-xl font-bold">Nhận dạy:</p>
                      <div className=" grid gap-2 grid-cols-8 py-3">
                        <div className="col-span-2 text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                          <p>{data?.class_id}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold">Dạy môn:</p>
                      <div className=" grid gap-2 grid-cols-8 py-3">
                        <div className="col-span-2 text-shadow text-white font-semibold text-xs bg-opacity-75 bg-black p-3 text-uppercase rounded-md text-center">
                          <p>{data?.subject}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'py-4 border-b'}>
                  <div className={'text-xl font-bold'}>
                    <p>Thông tin cá nhân:</p>
                  </div>

                  <div className="pt-2">
                    {/* <div className=" col-span-3 text-zinc-950 ">
                      <label className="font-bold">Năm sinh : </label>
                      <label>30/12/2003</label>
                    </div> */}

                    <div className={'pt-2 col-span-3 text-zinc-950 '}>
                      <label className={'font-bold'}>Số điện thoại : </label>

                      <label>{data?.phone}</label>
                    </div>
                    <div className="pt-2 col-span-3 text-zinc-950 ">
                      <label className="font-bold">Khu vực : </label>

                      <label className=""> {data?.address}</label>
                    </div>
                  </div>
                </div>
                <div className={'py-4 border-b'}>
                  <div className={'text-xl font-bold'}>
                    <p>Thông tin chi tiết:</p>
                  </div>

                  <div className="pt-2">
                    <div className="pt-2 col-span-3 text-zinc-950 ">
                      <label className="font-bold"> Trình độ học vấn: </label>{' '}
                      <label className="">{data?.education_level}</label>{' '}
                    </div>
                    <div className={'pt-2 col-span-3 text-zinc-950 '}>
                      <label className={'font-bold'}> Trường học :</label>

                      <label className=""> {data?.school_id}</label>
                    </div>
                    <div className={'pt-2 col-span-3 text-zinc-950 '}>
                      <label className={'font-bold'}> Chuyên ngành :</label>

                      <label className=""> ngôn ngữ anh</label>
                    </div>
                    <div className={'pt-2 col-span-3 text-zinc-950 '}>
                      <label className={'font-bold'}> Năm tốt nghiệp :</label>
                      <label> 2023</label>
                    </div>
                    <div className="pt-2 col-span-3 text-zinc-950 ">
                      <label className="font-bold">Khu vực dạy : </label>

                      <label className=""> {data?.DistrictID}</label>
                    </div>
                    <div className="pt-2 col-span-3 text-zinc-950 ">
                      <label className="font-bold"> Thời gian dạy: </label>

                      <label className=""> {data?.time_tutor_id}</label>
                    </div>
                    <div className={'pt-2 col-span-3 text-zinc-950 '}>
                      <label className={'font-bold'}>
                        Mức lương mong muốn :
                      </label>

                      <label className=""> {data?.salary_id}</label>
                    </div>
                    <div className="pt-2 col-span-3 text-zinc-950 ">
                      <label className="font-bold"> Kinh nghiệm : </label>

                      <label className=""> {data?.description}</label>
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

                      <label className=""> {data?.description}</label>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              <div className={'mt-5 col-span-2'}>
                <MyDialog id={data?.id} />
              </div>
            </div>
            <div className={'mx-auto pt-10'}>
              <div>
                {props.userInfo && (
                  <Image
                    src={props.userInfo.avatar}
                    width={45}
                    height={45}
                    className="rounded-full shadow drop-shadow-2xl border border-black hover:bg-gray-200 cursor-pointer"
                    alt=""
                  />
                )}
                <label htmlFor="rating">Đánh giá sao:</label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={faStar}
                      className={`text-${
                        star <= rating ? 'text-amber-300' : 'gray'
                      }-500 cursor-pointer`}
                      onClick={() => {
                        handleRatingChange(star);
                      }}
                    />
                  ))}
                </div>
                <br />

                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  placeholder="Nhập ý kiến phản hồi..."
                />
                <br />

                <button onClick={submitFeedback}>Gửi ý kiến</button>
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
