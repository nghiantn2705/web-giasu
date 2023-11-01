'use client';
import React, { useState } from 'react';
import { ITeachers } from '@/types/ITeachers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
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
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
          },
          1440: {
            width: 1440,
            slidesPerView: 7,
          },
        }}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        slidesPerView={7}
        spaceBetween={15}
      >
        {teachers?.map((items, index) => {
          return (
            <SwiperSlide key={index + 1}>
              <div
                className={
                  'rounded-xl bg-white  shadow hover:shadow-md duration-200 my-2 p-1 border hover:border-gray-300 '
                }
              >
                <div className={'relative'}>
                  <picture className={'w-auto relative h-[160px]'}>
                    <img
                      src={items?.avatar}
                      width={160}
                      height={160}
                      alt=""
                      className={'w-[200px] mx-auto rounded-t-xl '}
                    />
                    <div
                      className={
                        'absolute bottom-0 left-0 w-full flex h-[40px] justify-end custom-tw px-2 py-1'
                      }
                    >
                      <p className={'self-end flex gap-1 text-white'}>
                        <AiOutlineStar className={'self-center'} />4
                      </p>
                    </div>
                  </picture>
                  <div
                    className={
                      'absolute top-2 end-2  p-2 rounded-full bg-white'
                    }
                  >
                    <a
                      href={'/'}
                      className={
                        'bg-white text-black  focus:text-red-600 hover:text-red-600 '
                      }
                    >
                      <BsFillHeartFill />
                    </a>
                  </div>
                </div>

                <div className={'px-3 py-2'}>
                  <div className={'text-center '}>
                    <a
                      href={'/'}
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
