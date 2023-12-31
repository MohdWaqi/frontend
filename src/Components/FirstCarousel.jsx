import React from 'react'
import image from "../assets/boy.svg";
import triangle from "../assets/polygon.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FirstCarousel = () => {
  return (
    <Swiper
        direction={'vertical'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="carouselPage">
        <div>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            scelerisque, nisl ut pretium semper, tortor nunc malesuada purus, in
            cursus nisi neque ac tellus.
          </p>
          <button className="btn">
            Know More <img src={triangle} />
          </button>
        </div>
        <img src={image} />
      </div></SwiperSlide>
        <SwiperSlide><div className="carouselPage">
        <div>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            scelerisque, nisl ut pretium semper, tortor nunc malesuada purus, in
            cursus nisi neque ac tellus.
          </p>
          <button className="btn">
            Know More <img src={triangle} />
          </button>
        </div>
        <img src={image} />
      </div></SwiperSlide>
        <SwiperSlide><div className="carouselPage">
        <div>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            scelerisque, nisl ut pretium semper, tortor nunc malesuada purus, in
            cursus nisi neque ac tellus.
          </p>
          <button className="btn">
            Know More <img src={triangle} />
          </button>
        </div>
        <img src={image} />
      </div></SwiperSlide>
      </Swiper>
  )
}

export default FirstCarousel