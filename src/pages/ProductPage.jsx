import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import ProductAccordionSection from "../components/ProductAccordianSection";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
      setActiveImg(location.state?.images?.[0] || "");
      console.log("Product received:", location.state);
    }
  }, [location.state]);

  if (!product) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Images */}
          <section>
            <div className="w-full bg-white p-4">
              <img
                src={activeImg}
                alt="product"
                className="w-full h-105 md:h-130 object-contain"
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {product.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className={`shrink-0 border rounded-md p-2 bg-white transition ${activeImg === img ? "border-black" : "border-gray-200"
                    }`}
                >
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    className="w-20 h-16 object-contain"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* RIGHT: Info */}
          <section className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">12 reviews</span>
            </div>

            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <p className="text-2xl font-bold text-gray-900">
                ₹{Number(product.price).toFixed(2)}
              </p>

              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
                {product.compareAtPrice
                  ? `${Math.round(
                    ((product.compareAtPrice - product.price) /
                      product.compareAtPrice) *
                    100,
                  )}%`
                  : "0%"}
              </span>

              {product.compareAtPrice && (
                <p className="text-gray-500 text-sm">
                  MRP:{" "}
                  <span className="line-through">
                    ₹{Number(product.compareAtPrice).toFixed(2)}
                  </span>
                </p>
              )}

              <span className="text-gray-500 text-sm">Tax Included</span>
            </div>

            {product?.amazonUrl ? (
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-black text-white py-4 rounded-md tracking-[0.25em] uppercase text-sm hover:bg-black/90 transition text-center block"
              >
                Buy Now at Amazon
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-4 w-full bg-black/60 text-white py-4 rounded-md tracking-[0.25em] uppercase text-sm text-center block cursor-not-allowed"
              >
                Amazon link not set
              </button>
            )}


          </section>
        </div>

        <ProductAccordionSection />
      </div>
    </div>
  );
};

export default ProductPage;
