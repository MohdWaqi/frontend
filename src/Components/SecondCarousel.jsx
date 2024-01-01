import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/free-mode';
import Card from './Card';
import { FreeMode} from 'swiper/modules';
import { Screen } from '../Context/ScreenContext';

const SecondCarousel = () => {
  const {isMobile} = useContext(Screen)
  return (
    <Swiper 
    slidesPerView={isMobile?1:3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper">
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
  )
}

export default SecondCarousel