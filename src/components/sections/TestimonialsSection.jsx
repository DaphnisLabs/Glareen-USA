import React, { useEffect, useState } from "react";

const TestimonialsSection = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  //testimonial slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-[#f6dfad]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0b1f1d] tracking-tight">
          Testimonial
        </h2>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl bg-white px-6 sm:px-10 py-10 sm:py-12 text-center">
            <p className="text-[#0b1f1d]/70 leading-relaxed text-base sm:text-lg">
              {testimonials[active].text}
            </p>

            <img
              src={testimonials[active].img}
              alt={testimonials[active].name}
              className="mx-auto mt-8 w-20 h-20 rounded-full object-cover"
            />

            <div className="mt-5 text-lg font-semibold text-[#0b1f1d]">
              {testimonials[active].name}
            </div>
            <div className="mt-1 text-[#0b1f1d]/60">
              {testimonials[active].location}
            </div>

            <div className="mt-4 flex justify-center gap-2 text-2xl">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <span key={i} className="text-[#d7a928]">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="mt-10 flex justify-center gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300
                ${active === i ? "bg-[#d7a928]" : "bg-[#cfcfcf]"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
