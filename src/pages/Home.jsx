import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeBanner from "../components/HomeBanner";
import Collection from "../components/Collection";
import HomePromoCarousel from "../components/HomePromoCarousel";
import ProductCard from "../components/ProductCard";
import ProductShowcase from "../components/ProductShowcase";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import { TRUST_BADGES } from "../constants/trustBadges";
import TrustBadgesSection from "../components/sections/TrustBadgesSection";
import { productDataMap, trendingProducts } from "../constants";
import { getVisibleCollectionEntries } from "../constants/archive";
import ComingSoon from "../components/ComingSoon";
import ResponsibilitySection from "../components/ResponsibilitySection";
import BoxContents from "../components/BoxContents";

const Home = () => {
  const trendingScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  useEffect(() => {
    document.title = "Glareen USA";
  }, []);
  const TESTIMONIALS = [
    {
      text: "I’ve been burning Glareen Lavender Agarbatti Sticks every evening for weeks, and the calming floral scent never disappoints. Each stick offers a steady burn that fills my room with soothing aroma — perfect for unwinding after a busy day. Truly the best lavender incense I’ve tried!",
      name: "Mayank yadav",
      location: "Punjab",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.26_PM.jpg?v=1743525845",
      stars: 5,
    },
    {
      text: "As someone who loves unique, handcrafted items, I started gifting Glareen Attars to friends last Diwali—and they all asked for more! The Bloom Attar’s floral notes are exquisite, and the bamboo-less dhoop sticks add such a clean aroma to my yoga sessions. Highly recommend for anyone looking for premium, thoughtful gifts.",
      name: "Ankita jaiswal",
      location: "Delhi",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.28_PM.jpg?v=1743525532",
      stars: 5,
    },
    {
      text: "I’ve tried dozens of incense brands, but Glareen’s Sandalwood Dhoop Sticks are unmatched—the warm, earthy scent fills my living room with an instant sense of calm. I’ve been a repeat buyer for over a year now and always come back for their new fragrances. The burn time is incredible, and the eco-friendly packaging is a huge plus!",
      name: "Neha Gupta",
      location: "Bangalore",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.27_PM.jpg?v=1743525431",
      stars: 5,
    },
    {
      text: "I light the Monsoon Bliss Dhoop Sticks every evening to unwind after work. The refreshing scent of rain-soaked earth and lavender transports me straight to a spa—yet it’s all in my living room! It’s hands-down the best incense I’ve ever used.",
      name: "Ajay Singh",
      location: "Hyderabad",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.25_PM_1.jpg?v=1743525677",
      stars: 5,
    },
    {
      text: "Switching to Glareen’s Dhoop Cones was a game-changer for my meditation routine. The super-dense cones burn evenly, and the subtle, calming fragrance helps me focus. I’ve already repurchased twice this season—can’t imagine practicing without them!",
      name: "Preeti Panday",
      location: "Delhi",
      img: "https://glareen.com/cdn/shop/files/WhatsApp_Image_2025-04-01_at_9.37.26_PM_1.jpg?v=1743525745",
      stars: 5,
    },
  ];

  const visibleProductDataMap = getVisibleCollectionEntries(productDataMap);

  const visibleProductHandles = new Set(
    Object.values(visibleProductDataMap)
      .flat()
      .map((item) => item.handle),
  );

  const visibleTrendingProducts = trendingProducts.filter((item) =>
    visibleProductHandles.has(item.handle),
  );

  const visibleTestimonials = TESTIMONIALS.filter(
    (item) => !item.text.toLowerCase().includes("dhoop"),
  );

  const updateTrendingScrollState = () => {
    const el = trendingScrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 2);
  };

  const scrollTrendingLeft = () => {
    const el = trendingScrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollTrendingRight = () => {
    const el = trendingScrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateTrendingScrollState();
    }, 50);

    const handleResize = () => updateTrendingScrollState();

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleTrendingProducts.length]);

  return (
    <>
      <HomeBanner />

      <section className="flex flex-col justify-center items-center w-full px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-center mb-8">
          100% Natural Extraction
        </h1>

        <img
          src="https://cdn.shopify.com/s/files/1/0610/3072/7749/files/EXTRACTION.png?v=1744034159"
          alt="info-img"
          className="w-full max-w-5xl"
          loading="lazy"
          decoding="async"
        />
      </section>

      <Collection />
      <HomePromoCarousel />

      <section className="flex flex-col py-10">
        <h1 className="text-center text-[#343434] font-semibold text-3xl sm:text-5xl lg:text-6xl mb-6">
          Top Trending Products
        </h1>

        <div className="relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollTrendingLeft}
              aria-label="Scroll left"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5 text-gray-800" />
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={scrollTrendingRight}
              aria-label="Scroll right"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center hover:bg-white"
            >
              <ChevronRight className="h-5 w-5 text-gray-800" />
            </button>
          )}

          <div
            ref={trendingScrollRef}
            onScroll={updateTrendingScrollState}
            className="overflow-x-auto scroll-smooth touch-pan-x px-4 sm:px-6 md:px-10 pb-3 premium-scrollbar"
          >
            <div className="flex gap-4 sm:gap-5 py-2 w-max">
              {productDataMap["incense-sticks"].map((item) => (
                <ProductCard key={item.id} item={item} isBestSeller={true} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <ResponsibilitySection />
      <ProductShowcase />
      <BoxContents />
      <ComingSoon />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      {/* <TrustBadgesSection badges={TRUST_BADGES} /> */}
    </>
  );
};

export default Home;
