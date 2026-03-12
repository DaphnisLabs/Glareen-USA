import { useEffect, useMemo, useState } from "react";

const banners = [
  {
    id: 1,
    image: "/banners/home/banner-1.png",
    alt: "Glareen promotional banner 1",
  },
  {
    id: 2,
    image: "/banners/home/banner-2.png",
    alt: "Glareen promotional banner 2",
  },
];

const HomePromoCarousel = () => {
  const safeBanners = useMemo(() => banners.filter(Boolean), []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (safeBanners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeBanners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [safeBanners.length]);

  if (!safeBanners.length) return null;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-[#ead7c3] bg-gradient-to-br from-[#fff8f1] via-[#f9eee2] to-[#f4e3d2] shadow-[0_18px_50px_rgba(88,52,24,0.10)]">
          <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-[#f3c79b]/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#d89d67]/20 blur-3xl" />

          <div className="relative">
            <div className="relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4.8] w-full overflow-hidden">
              {safeBanners.map((banner, index) => (
                <img
                  key={banner.id}
                  src={banner.image}
                  alt={banner.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-[#2d1d12]/15 via-transparent to-[#2d1d12]/10" />
            </div>

            {safeBanners.length > 1 && (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur-sm shadow-sm">
                {safeBanners.map((banner, index) => (
                  <button
                    key={banner.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to banner ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-8 bg-[#8f623f]"
                        : "w-2.5 bg-[#d7b79a] hover:bg-[#be9471]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePromoCarousel;