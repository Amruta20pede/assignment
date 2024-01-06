import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import First_Modal_Card from './First_Modal_Card'
import Second_Modal_Card from './Second_Modal_Card'
import Third_Modal_Card from './Third_Modal_Card'
import './style.css';

const Card_Menu = () => {
  return (
    <div>
       <Swiper
       breakpoints={{
        576: {
          
          slidesPerView: 1
        },
        768: {
          
          slidesPerView: 2
        },
      }}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><First_Modal_Card/></SwiperSlide>
        <SwiperSlide><Second_Modal_Card/></SwiperSlide>
        <SwiperSlide><Third_Modal_Card/></SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Card_Menu;