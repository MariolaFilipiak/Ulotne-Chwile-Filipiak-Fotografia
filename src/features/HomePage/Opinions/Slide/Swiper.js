import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Swiper.css";

const text1 =
  "Serdecznie Polecamy! Rewelacyjne podejście do noworodka i wysokiej jakości zdjęcia. Jestem bardzo zadowolona z sesji z Synkiem. Pani Fotograf pełna profesjonalizmu oraz pasji do tego co robi, czego efektem są przepiękne, naturalne zdjęcia. Wspaniała pamiątka na całe życie ❤ Bardzo dziękujemy! 🙂-Natalia Nana Nana ";
const text2 =
  "Polecam sesja w miłej atmosferze pełen profesjonalizm.-Agnieszka Lekner";
const text3 =
  "Pani fotograf robi piękne zdjęcia. Ma ciekawe pomysly na nie.Dzięki niej mamy piękną pamiątkę z naszym synkiem.Szczerze polecam! 🙂-Urszula Stachniewicz ";
const text4 =
  "Sesja odbyła sie w cudownej, spokojnej atmosferze☺️ zdjęcia przepiękne, zdobią nasza ścianę i każdy się zachwyca. Pełen profesjonalizm i zaangażowanie 🙂 Polecam serdecznie.-Joanna Płuciennik";
const text5 =
  "Bardzo polecam Panią Mariole. Bardzo profesjonalny fotograf. Zdjęcia wykonane po mistrzowsku., a co najlepsze nie były pozowane, Pani Mariola potrafiła uchwycić każdy moment.-Justyna Kiliańska";

function createSlide() {
  return (
    <>
      <SwiperSlide>
        <p className="text">{text1}</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text">{text2}</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text">{text3}</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text">{text4}</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text">{text5}</p>
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
