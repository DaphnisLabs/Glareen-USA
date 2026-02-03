import { useEffect, useMemo, useState } from "react";
import { bannerImages } from "../constants";

const HomeBanner = () => {
  const [active, setActive] = useState(0);

  const nextIndex = useMemo(
    () => (active + 1) % bannerImages.length,
    [active]
  );

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % bannerImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh]">
        {bannerImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`banner-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
              ${active === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
            `}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        ))}

        {/* Preload next image */}
        <link rel="preload" as="image" href={bannerImages[nextIndex]} />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300
                ${active === i ? "bg-blue-500" : "bg-gray-500/50"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
