import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { collectionSectionImages } from "../constants";

const featurePoints = [
  {
    id: "01",
    title: "Creates a calming atmosphere",
    description:
      "A soft, comforting aroma that brings warmth to your room and makes everyday spaces feel more peaceful and inviting.",
  },
  {
    id: "02",
    title: "Perfect for prayer & mindful rituals",
    description:
      "Designed to complement pooja, meditation, reflection, and quiet moments that deserve a more elevated ambience.",
  },
  {
    id: "03",
    title: "Leaves a refined lingering fragrance",
    description:
      "A graceful scent trail that feels premium, elegant, and memorable without overwhelming the space.",
  },
];

const ritualTags = [
  "Home Fragrance",
  "Prayer Ritual",
  "Meditation",
  "Everyday Luxury",
  "Gifting",
];

const Collection = () => {
  return (
    <section className="relative w-full overflow-hidden mt-10 bg-linear-to-br from-[#fcf6f9] via-[#f9eef4] to-[#f5e7ee] border-y border-[#eadde4]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-[#b86b91]/10 blur-3xl" />
        <div className="absolute top-1/3 -right-12 h-80 w-80 rounded-full bg-[#d7b067]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex w-fit items-center rounded-full border border-[#d8b46e] bg-white/75 px-4 py-1.5 text-[11px] sm:text-xs font-medium tracking-[0.22em] text-[#9a6d1f] uppercase backdrop-blur-sm">
              Warmth • Peace • Fragrance
            </span>

            <h1 className="mt-5 max-w-2xl text-3xl sm:text-5xl lg:text-[64px] lg:leading-[1.02] font-semibold tracking-[-0.04em] text-[#4f203f]">
              Bring warmth, calm and elegance into your space
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-8 text-[#6f5965]">
              More than fragrance, incense sticks create a mood. They turn
              ordinary moments into soothing rituals and give your home a
              refined sensory presence that feels both comforting and premium.
            </p>

            <div className="mt-10 max-w-2xl border-t border-[#e5d9df]">
              {featurePoints.map((point) => (
                <div
                  key={point.id}
                  className="grid grid-cols-[46px_1fr] sm:grid-cols-[56px_1fr] gap-4 py-6 border-b border-[#ebe1e6]"
                >
                  <div className="pt-1 text-xs sm:text-sm font-medium tracking-[0.18em] text-[#b17b95]">
                    {point.id}
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#4d233d]">
                      {point.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base leading-7 text-[#6e5864]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 max-w-2xl">
              {ritualTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#e5d8df] bg-white/85 px-4 py-2 text-xs sm:text-sm tracking-[0.08em] text-[#6f5665] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-105 sm:max-w-120 lg:max-w-130">
              {/* Glow Background */}
              <div className="absolute -inset-5 rounded-[36px] bg-linear-to-br from-[#f7eaf1] via-[#fdf7fa] to-[#f1e1ea] shadow-[0_24px_70px_rgba(87,31,67,0.10)]" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[30px] bg-[#f4e9ef] shadow-[0_20px_60px_rgba(87,31,67,0.14)]">
                {/* Swiper */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full h-105 sm:h-130 lg:h-150" // 🔥 taller height
                >
                  {collectionSectionImages.map((src) => (
                    <SwiperSlide key={src}>
                      <img
                        src={src}
                        alt="Glareen incense sticks"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Tag */}
                <div className="absolute left-5 top-5 z-20 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-[11px] font-medium tracking-[0.24em] text-white uppercase backdrop-blur-md">
                  A Daily Fragrance Ritual
                </div>
              </div>

              {/* 👇 Text BELOW image (no overlap) */}
              <div className="mt-5 rounded-3xl bg-white/70 backdrop-blur-md border border-[#f1e1ea] p-5 shadow-[0_10px_30px_rgba(87,31,67,0.08)]">
                <p className="text-sm sm:text-base leading-7 text-[#3a1f2e]">
                  Crafted to make everyday spaces feel calmer, warmer, and more
                  refined from the very first light.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#e8dde3] pt-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] sm:text-xs tracking-[0.24em] text-[#7b6270] uppercase">
            <span>Home Fragrance</span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[#c7a5b7]" />
            <span>Peaceful Rituals</span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[#c7a5b7]" />
            <span>Mindful Living</span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[#c7a5b7]" />
            <span>Elegant Gifting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
