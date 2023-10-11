import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
const Banner = () => {
  return (
    <div className={'h-[200px] z-0'}>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        autoplay={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className={'h-full rounded-xl'}
      >
        <SwiperSlide>
          <Image
            src={'/Banner-1.jpg'}
            alt={''}
            width={1280}
            height={200}
            className={'h-full w-auto'}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
