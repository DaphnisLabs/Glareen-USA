import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ComingSoon() {
  const dhoopConesImages = [
    "/dc1.jpg",
    "/dc2.jpg",
    "/dc3.jpg",
    "/dc4.jpg",
    "/dc5.jpg",
  ];

  const incenseStickImages = [
    "/ds1.jpg",
    "/ds2.jpg",
    "/ds3.jpg",
    "/ds4.jpg",
    "/ds5.jpg",
    "/ds6.jpg",
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#fdf7fa] via-[#f7eaf1] to-[#f1e1ea]" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f4d9e6] rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#e8c8d8] rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2f1325]"
        >
          Something Beautiful is Coming
        </motion.h2>

        <p className="mt-4 text-[#5a3a4a] max-w-2xl mx-auto text-base sm:text-lg">
          We’re crafting a new range of fragrances designed to elevate your
          daily rituals.
        </p>

        {/* Images */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Dhoop Cones */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#2f1325]/50 via-[#2f1325]/10 to-transparent z-10" />

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              className=" w-full rounded-xl"
            >
              {dhoopConesImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt="Dhoop Cones"
                    className="w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Incense Cones
              </h3>
              <p className="mt-2 text-white/80 text-sm">
                Elegance Rooted in Wood and Bloom
              </p>
              <span className="mt-4 inline-block text-[11px] tracking-widest uppercase text-white/70">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Incense Sticks */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#2f1325]/50 via-[#2f1325]/10 to-transparent z-10" />

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              className="w-full rounded-xl"
            >
              {incenseStickImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt="Incense Sticks"
                    className="w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Bambooless Incense Sticks
              </h3>
              <p className="mt-2 text-white/80 text-sm">
                Seasons Whisper Through Every Fragrance
              </p>
              <span className="mt-4 inline-block text-[11px] tracking-widest uppercase text-white/70">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
