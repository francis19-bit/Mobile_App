import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Styles/swip.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const swip = ({ foods }) => {
  // const filteredFoods = foods.filter((food) => food !== null);
  console.log("Foods in Swip Component:", foods);

  // {filteredFoods.map((food, index) => (
  //   <SwiperSlide key={index}>
  //     <img src={food.image_url} alt={`Food ${index + 1}`} />

  // const filteredFoods = foods
  //   .filter((data) => data !== null)
  //   .flatMap((data) =>
  //     data.map((item, index) => {
  //       return `<SwiperSlide>
  //   <img src=${item.strMeal} />
  // </SwiperSlide>`;
  //     })
  //   );

  const filteredFoods = foods.filter((food) => food !== null);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {filteredFoods.map((food, index) => (
          <SwiperSlide key={index}>
            <img src={food.strMeal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default swip;
