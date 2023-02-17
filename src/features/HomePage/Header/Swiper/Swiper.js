import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Swiper.css";

import photo2 from "../../../../common/Images/photo20.jpg";
import photo3 from "../../../../common/Images/photo9.jpg";
import photo4 from "../../../../common/Images/photo6.jpg";
import photo5 from "../../../../common/Images/photo3.jpg";
import photo6 from "../../../../common/Images/photo13.jpg";

function createSlide() {
  return (
    <>
      <SwiperSlide>
        <img className="img" src={photo2}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src={photo3}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src={photo4}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src={photo5}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src={photo6}></img>
      </SwiperSlide>
    </>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
    </Swiper>
  );
};
