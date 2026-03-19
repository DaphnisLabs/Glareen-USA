import { bannerImages } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeBanner = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-75 w-full aspect-video sm:h-150" // adjust ratio to match your banner images
      >
        {bannerImages.map((src, idx) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={`Hero banner ${idx + 1}`}
              className="h-full w-full"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
