'use client';
import React, { useState } from 'react';
import { ITeachers } from '@/types/ITeachers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface IProps {
  teachers: ITeachers[];
}
const SortRate = ({ teachers }: IProps) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={' py-5 rounded-xl relative'}>
      <div
        className={
          ' before:absolute before:border-t-blue-tw before:border-t-2 before:top-9 before:w-[96%] before:z-0'
        }
      >
        <span className={'text-2xl bg-white px-3 relative z-10 uppercase'}>
          Gia sư nổi bật
        </span>
      </div>

      {/*<div className={'absolute right-4 top-4 flex gap-2'}>*/}
      {/*  <button*/}
      {/*    className={*/}
      {/*      'border border-blue-tw rounded-md p-2 hover:bg-blue-tw1 hover:text-white'*/}
      {/*    }*/}
      {/*    ref={navigationPrevRef}*/}
      {/*  >*/}
      {/*    <AiOutlineArrowLeft className={'text-xl'} />*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    className={*/}
      {/*      ' border border-blue-tw rounded-md p-2 hover:bg-blue-tw1 hover:text-white'*/}
      {/*    }*/}
      {/*    ref={navigationNextRef}*/}
      {/*  >*/}
      {/*    <AiOutlineArrowRight className={'text-xl'} />*/}
      {/*  </button>*/}
      {/*</div>*/}

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
        {teachers?.map((items, index) => {
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
                        <AiOutlineStar className={'self-center'} />4
                      </p>
                    </div>
                  </picture>
                </div>

                <div className={'px-3 py-2'}>
                  <div className={'text-center '}>
                    <a
                      href={`/detail/${items?.id}`}
                      className={
                        ' hover:text-blue-tw font-medium ease-in-out duration-500'
                      }
                    >
                      {items?.name}
                    </a>
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
