import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Swiper.css";
import photo1 from "../../../common/Images/silde3.jpg";
import photo2 from "../../../common/Images/silde2.jpg";
import photo3 from "../../../common/Images/silde1.jpg";

function createSlide() {
  return (
    <>
      <SwiperSlide>
        <img className="img" src={photo1}/>
      </SwiperSlide>
      <SwiperSlide>
      <img className="img" src={photo2}/>
      </SwiperSlide>
      <SwiperSlide>
      <img className="img" src={photo3}/>
      </SwiperSlide>
    </>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
    </Swiper>
  );
};
