import HomeBanner from "../components/HomeBanner";
import Collection from "../components/Collection";
import ProductCard from "../components/ProductCard";
import TestimonialSection from "../components/TestimonialSection";
import { trendingProducts } from "../constants";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <div className="flex flex-col justify-center items-center w-full px-4">
        <h1 className="text-6xl my-16">100% Natural Extraction</h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0610/3072/7749/files/EXTRACTION.png?v=1744034159"
          alt="info-img"
          className="w-[90%]"
        />
      </div>
      <Collection />
      <section className="flex flex-col">
        <h1 className="text-center text-[#343434] font-normal text-6xl my-8">
          Top Trending Products
        </h1>
        <div className="overflow-x-auto scrollbar-hide scroll-smooth touch-pan-x">
          <div className="flex gap-5 px-6 md:px-12 py-2 w-max">
            {trendingProducts.map((item) => (
              <ProductCard item={item} isBestSeller={true} />
            ))}
          </div>
        </div>
      </section>
      <TestimonialSection />
    </>
  );
};

export default Home;
