import { useEffect, useMemo, useState } from "react";
import { Star, Leaf, Clock3, Sparkles, CloudRain, Flame, Droplets } from "lucide-react";
import ProductAccordionSection from "../components/ProductAccordianSection";
import TrustBadgesSection from "../components/sections/TrustBadgesSection";
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

  const productType = useMemo(() => {
    const h = (product?.handle || "").toLowerCase();
    if (h.includes("dhoop-cones")) return "dhoop-cones";
    if (h.includes("dhoop-sticks")) return "dhoop-sticks";
    return "incense-sticks";
  }, [product?.handle]);

  const HIGHLIGHTS = useMemo(() => {
    if (productType === "dhoop-sticks") {
      return [
        { icon: Leaf, label: "Natural Ingredients" },
        { icon: Clock3, label: "45+ Mins Of Burn Time" },
        { icon: Sparkles, label: "Clean & Consistent Burn" },
        { icon: CloudRain, label: "Weather Inspired" },
      ];
    }
    if (productType === "dhoop-cones") {
      return [
        { icon: Leaf, label: "Natural Ingredients" },
        { icon: Flame, label: "20–35 Mins Cone Burn" },
        { icon: Sparkles, label: "Rich, Concentrated Aroma" },
        { icon: Droplets, label: "Easy Ash Management" },
      ];
    }
    return [
      { icon: Leaf, label: "Natural Ingredients" },
      { icon: Clock3, label: "30–60 Mins Burn Time" },
      { icon: Sparkles, label: "Clean, Lasting Fragrance" },
      { icon: Droplets, label: "Perfect For Daily Rituals" },
    ];
  }, [productType]);

  const buildAccordionItems = (p) => {
    const acc = p?.accordion;
    if (!acc) return [];

    return [
      {
        title: "KEY BENEFITS",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            {(acc.keyBenefits || []).map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        ),
      },
      {
        title: "HOW TO USE",
        content: (
          <ol className="list-decimal pl-5 space-y-2">
            {(acc.howToUse || []).map((x, i) => <li key={i}>{x}</li>)}
          </ol>
        ),
      },
      {
        title: "FAQ'S",
        content: (
          <div className="space-y-4">
            {(acc.faqs || []).map((f, i) => (
              <div key={i}>
                <p className="font-semibold">Q: {f.q}</p>
                <p className="text-gray-700">A: {f.a}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "OTHER INFORMATION",
        content: (
          <div className="space-y-3">
            {(acc.otherInformation || "")
              .split("\n\n")
              .filter(Boolean)
              .map((para, i) => <p key={i}>{para}</p>)}
          </div>
        ),
      },
      {
        title: "ALL INGREDIENTS",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            {(acc.allIngredients || []).map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        ),
      },
    ];
  };

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

  if (!product) return <div className="p-10">Loading...</div>;

  return (
    <div className="w-full bg-white">
      <div className="bg-linear-to-b from-emerald-50/60 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <section className="animate-fadeInUp">
              <div className="w-full rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="rounded-xl bg-linear-to-br from-emerald-50 to-white p-4">
                  <img
                    src={activeImg}
                    alt="product"
                    className="w-full h-105 md:h-130 object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {product.images?.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`shrink-0 rounded-xl p-2 bg-white transition shadow-sm border ${
                      activeImg === img
                        ? "border-gray-900"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img src={img} alt={`thumb-${i}`} className="w-20 h-16 object-contain" />
                  </button>
                ))}
              </div>
            </section>

            {/* RIGHT */}
            <section className="space-y-6 animate-fadeInUp" style={{ animationDelay: "80ms" }}>
              <div className="rounded-2xl bg-white p-6 md:p-7 shadow-sm border border-gray-100">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {product.title}
                </h1>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">12 reviews</span>
                </div>

                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <p className="text-3xl font-extrabold text-gray-900">
                    ${Number(product.price).toFixed(2)}
                  </p>

                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {product.compareAtPrice
                      ? `${Math.round(
                          ((product.compareAtPrice - product.price) / product.compareAtPrice) *
                            100
                        )}%`
                      : "0%"}
                  </span>

                  {product.compareAtPrice && (
                    <p className="text-gray-500 text-sm">
                      MRP:{" "}
                      <span className="line-through">
                        ${Number(product.compareAtPrice).toFixed(2)}
                      </span>
                    </p>
                  )}

                  <span className="text-gray-500 text-sm">Tax Included</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                  <span className="tracking-wide text-gray-700 font-semibold">
                    LIMITED STOCK, ORDER NOW !
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {HIGHLIGHTS.map((h, idx) => {
                    const Icon = h.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex flex-col items-center text-center gap-2 rounded-xl p-3 hover:bg-emerald-50/60 transition"
                      >
                        <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center shadow-sm border border-emerald-200 group-hover:scale-105 transition-transform">
                          <Icon className="h-7 w-7 text-emerald-800" />
                        </div>
                        <p className="text-xs md:text-sm font-semibold text-gray-800 leading-snug">
                          {h.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  {product?.amazonUrl ? (
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white py-4 rounded-xl uppercase text-sm hover:bg-black/90 transition flex items-center justify-center gap-3 shadow-sm"
                    >
                      <span className="tracking-[0.25em] text-xl ">BUY NOW AT</span>
                      <img
                        src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png"
                        alt="Amazon"
                        className="h-6 w-auto object-contain"
                      />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full bg-black/60 text-white py-4 rounded-xl tracking-[0.25em] uppercase text-sm cursor-not-allowed"
                    >
                      Amazon link not set
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>

          <ProductAccordionSection items={buildAccordionItems(product)} />
          <TrustBadgesSection badges={TRUST_BADGES} />
        </div>
      </div>

      <style>
        {`
          .animate-fadeInUp { animation: fadeInUp 520ms ease both; }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ProductPage;
