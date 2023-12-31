import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from './Components/Card';

const SecondCarousel = () => {
  return (
    <Swiper 
    slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
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