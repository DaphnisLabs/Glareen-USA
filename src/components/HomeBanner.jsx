import { bannerImages } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeBanner = () => {
  return (
    <section className="flex justify-center px-4 py-6">
      {/* Container to control width + centering */}
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full"
        >
          {bannerImages.map((src, idx) => (
            <SwiperSlide key={src} className="flex justify-center">
              <img
                src={src}
                alt={`Hero banner ${idx + 1}`}
                className="w-full h-auto" // ✅ keeps aspect ratio
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;
