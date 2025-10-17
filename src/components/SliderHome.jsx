import img1 from "../img/premium_photo-1664202526559-e21e9c0fb46a.avif";
import img2 from "../img/premium_photo-1726837275299-d9729a012532.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderHome = () => {
  return (
    <div className="p-3 sm:p-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className="rounded-2xl w-full max-w-6xl"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="image 1"
            className="w-full h-[400px sm:h-[550px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img2}
            alt="image 2"
            className="w-full h-[400px] sm:h-[550px] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderHome;
