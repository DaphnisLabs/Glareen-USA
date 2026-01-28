import React, { useEffect, useState } from "react";
import { bannerImages } from "../constants";

const HomeBanner = () => {
  const [active, setActive] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % bannerImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-105 md:h-130 overflow-hidden">
      {/* Slides */}
      {bannerImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out
            ${active === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
          `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "contain",
            backgroundPosition: "right center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300
              ${active === i ? "bg-white scale-125" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
