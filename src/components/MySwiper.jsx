import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MySwiper = ()=> {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="sld1">
          <img 
            src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sld2">
          <img
            src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sld3">
          <img
            src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sld4">
          <img
            src="https://preview.colorlib.com/theme/podca/images/person_4.jpg.webp"
            alt=""
          />
        </div>
      </SwiperSlide>
      ...{" "}
      <SwiperSlide>
        <div className="sld5">
          <img
            src="https://preview.colorlib.com/theme/podca/images/person_5.jpg.webp"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sld6">
          <img
            src="https://preview.colorlib.com/theme/podca/images/person_6.jpg.webp"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}