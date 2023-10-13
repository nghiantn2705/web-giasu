import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={'h-[200px] z-0 '}>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
        spaceBetween={50}
        slidesPerView={1}
        className={'h-full rounded-xl'}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div className={'flex justify-center items-center h-full'}>
            <Image
              src={'/banner-1.jpg'}
              alt={''}
              width={1080}
              height={200}
              className={'h-full w-auto'}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'flex justify-center items-center h-full'}>
            <Image
              src={'/banner-2.jpg'}
              alt={''}
              width={1080}
              height={100}
              className={'h-full w-auto'}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'flex justify-center items-center h-full'}>
            <Image
              src={'/banner-4.png'}
              alt={''}
              width={1080}
              height={100}
              className={'h-full w-auto'}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
