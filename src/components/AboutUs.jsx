import React, { useEffect, useState } from "react";
import TestimonialsSection from "./sections/TestimonialsSection";
import TrustBadgesSection from "./sections/TrustBadgesSection";


const AboutUs = () => {
  const ABOUT_IMAGE =
    "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Awesome_Image.png?v=1744084005";
  const WHY_CARDS = [
    {
      title: "100% Natural",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/100_NATURAL.png?v=1742977326", 
    },
    {
      title: "Made in India",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Made_in_India.png?v=1742909754", 
    },
    {
      title: "COD Available",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Cod_above_499.png?v=1742909755", 
    },
  ];

  const TEAM = [
    {
      role: "CEO",
      name: "Parveen Kumar",
      meta: "18 yrs: Entrepreneurship, Software, Exports, B2B, D2C",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/about_us_dp.png?v=1746037897",
    },
    {
      role: "CBO",
      name: "Parul Singh",
      meta: "11 yrs: Entrepreneurship, Sales, B2B & D2C",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Picture_Ceremonies_1480_x_450_px__20241109_122750_0000_png.png?v=1744086723", 
    },
    {
      role: "COO",
      name: "Ronik Shah",
      meta: "11 yrs: Perfumery, Manufacturing, Operations",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Picture_Ceremonies_1480_x_450_px__20241109_122750_0001_png.png?v=1744086723", 
    },
    {
      role: "CMO",
      name: "Samanyu Chopra",
      meta: "13 yrs: Marketing, eComm, Content, D2C",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Samanyu_sir_dp.png?v=1746038594", 
    },
  ];

  const TESTIMONIALS = [
    {
      text:
        "I’ve been burning Glareen Lavender Agarbatti Sticks every evening for weeks, and the calming floral scent never disappoints. Each stick offers a steady burn that fills my room with soothing aroma — perfect for unwinding after a busy day. Truly the best lavender incense I’ve tried!",
      name: "Mayank yadav",
      location: "Punjab",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.26_PM.jpg?v=1743525845", 
      stars: 5,
    },
    {
      text:
        "As someone who loves unique, handcrafted items, I started gifting Glareen Attars to friends last Diwali—and they all asked for more! The Bloom Attar’s floral notes are exquisite, and the bamboo-less dhoop sticks add such a clean aroma to my yoga sessions. Highly recommend for anyone looking for premium, thoughtful gifts.",
      name: "Ankita jaiswal",
      location: "Delhi",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.28_PM.jpg?v=1743525532", 
      stars: 5,
    },
    {
      text:
        "I’ve tried dozens of incense brands, but Glareen’s Sandalwood Dhoop Sticks are unmatched—the warm, earthy scent fills my living room with an instant sense of calm. I’ve been a repeat buyer for over a year now and always come back for their new fragrances. The burn time is incredible, and the eco-friendly packaging is a huge plus!",
      name: "Neha Gupta",
      location: "Bangalore",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.27_PM.jpg?v=1743525431", 
      stars: 5,
    },
    {
        text:
          "I light the Monsoon Bliss Dhoop Sticks every evening to unwind after work. The refreshing scent of rain-soaked earth and lavender transports me straight to a spa—yet it’s all in my living room! It’s hands-down the best incense I’ve ever used.",
        name: "Ajay Singh",
        location: "Hyderabad",
        img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.25_PM_1.jpg?v=1743525677", 
        stars: 5,
      },
      {
        text:
          "Switching to Glareen’s Dhoop Cones was a game-changer for my meditation routine. The super-dense cones burn evenly, and the subtle, calming fragrance helps me focus. I’ve already repurchased twice this season—can’t imagine practicing without them!",
        name: "Preeti Panday",
        location: "Delhi",
        img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.26_PM_1.jpg?v=1743525745", 
        stars: 5,
      },
  ];

  const TRUST_BADGES = [
    {
      title: "Secure Checkout ✅",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Secure_Checkout.png?v=1742909754",
    },
    {
      title: "COD Above ₹499",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Cod_above_499.png?v=1742909755", 
    },
    {
      title: "Free Return If Damaged",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Free_Return_if_damaged.png?v=1742909753", 
    },
    {
      title: "Made In India",
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Made_in_India.png?v=1742909754", 
    },
  ];
  

  return (
    <div className="w-full">
      {/* ===== Welcome Section ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-30 py-12 md:py-25">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* image */}
            <div className="w-full">
              <div className="bg-white p-3 shadow-[0_10px_35px_rgba(0,0,0,0.12)] rounded-sm">
                <img
                  src={ABOUT_IMAGE}
                  alt="About Glareen"
                  className="w-full h-100% object-cover"
                />
              </div>
            </div>

            {/* text */}
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f1d] tracking-tight">
                Welcome to <span className="block mt-2">GLAREEN</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#1f2d2b]/80 max-w-xl">
              Glareen is a brand that blends tradition, quality, and empowerment. We craft premium bamboo-free dhoop sticks, incense, and attars for a calming, enriching experience. With a commitment to eco-friendly practices and skilled artisans—many of whom are women gaining economic independence —we’re proud to serve B2B and B2C customers. Find us on Amazon and Flipkart. Let’s bring peace, purity, and purpose into every space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="w-full bg-[#f6efdb]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0b1f1d] tracking-tight">
            Why choose Us.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CARDS.map((c, idx) => (
              <div key={idx} className="bg-white p-10 flex items-center justify-center">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-44 h-44 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
            {TEAM.map((m, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={m.img}
                  alt={m.name}
                  className="mx-auto w-44 h-44 rounded-full object-cover"
                />
                <div className="mt-6 text-sm tracking-widest text-[#0b1f1d]/70 uppercase">
                  {m.role}
                </div>
                <div className="mt-2 text-xl font-medium text-[#0b1f1d]">
                  {m.name}
                </div>
                <div className="mt-2 text-sm sm:text-base text-[#0b1f1d]/70">
                  {m.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={TESTIMONIALS} />

      <TrustBadgesSection badges={TRUST_BADGES} />

    </div>
  );
};

export default AboutUs;
