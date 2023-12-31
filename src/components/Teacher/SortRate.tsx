'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { AiOutlineStar } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { getTeacherStart } from '@/services/fillter';
import { ITeacherStart } from '@/types/ITeacherStart';

const SortRate = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [starData, setStarData] = useState<ITeacherStart[]>();

  useEffect(() => {
    const fetchData = async () => {
      const teacherStartg = await getTeacherStart();
      setStarData(teacherStartg);
    };

    fetchData();
  }, []);
  return (
    <div className={' py-5 rounded-xl relative'}>
      <div
        className={
          ' before:absolute before:border-t-blue-tw before:border-t-2 before:top-9 before:w-[96%] before:z-0'
        }
      >
        <span className={'text-2xl bg-white px-3 relative z-10 uppercase'}>
          Gia sư được đánh giá cao nhất
        </span>
      </div>

      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Pagination]}
        slidesPerView={5.5}
        spaceBetween={15}
        className={'w-full drop-shadow-lg'}
      >
        {starData?.map((items: ITeacherStart, index) => {
          return (
            <SwiperSlide key={index + 1} className={'mt-6 h-full'}>
              <div
                className={'rounded-xl bg-white pb-4 pt-[2p] px-[2px] border '}
              >
                <div className={'relative'}>
                  <picture
                    className={'relative block aspect-square overflow-hidden'}
                  >
                    <img
                      src={items?.avatar}
                      width={160}
                      height={160}
                      alt=""
                      className={
                        'absolute w-full h-full object-cover object-center rounded-t-lg'
                      }
                    />
                    <div
                      className={
                        'absolute bottom-0 left-0 w-full flex h-[40px] justify-end custom-tw px-3 py-1'
                      }
                    >
                      <p className={'self-end flex gap-1 text-white'}>
                        <AiOutlineStar className={'self-center'} />{' '}
                        <span> {items?.avg_point}</span>
                      </p>
                    </div>
                  </picture>
                </div>

                <div className={'px-3 py-2'}>
                  <div className={'text-center '}>
                    <Link
                      href={`/detail/${items?.id}`}
                      className={
                        ' hover:text-blue-tw font-medium ease-in-out duration-500'
                      }
                    >
                      {items?.name}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SortRate;
