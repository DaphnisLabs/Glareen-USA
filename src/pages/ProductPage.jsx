import { useEffect, useMemo, useRef, useState } from "react";
import { productDataMap } from "../constants";
import {
  Star,
  Leaf,
  Clock3,
  Sparkles,
  CloudRain,
  Flame,
  Droplets,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProductAccordionSection from "../components/ProductAccordianSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import ProductCard from "../components/ProductCard";
import { seedReviewsByHandle } from "../constants/reviewsSeed";
import { useLocation, useParams, Link, Navigate } from "react-router-dom";
import {
  getVisibleCollectionEntries,
  isArchivedCollection,
} from "../constants/archive";
const normalizeId = (id) => {
  const str = id.split('-').join(' ');
  return str.toUpperCase();
}
const ProductPage = () => {
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    document.title = `GLAREEN ${normalizeId(id)}`
  }, [])
  const [product, setProduct] = useState(null);
  const [isResolved, setIsResolved] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(null);
  const relatedScrollRef = useRef(null);

  const visibleProductDataMap = useMemo(
    () => getVisibleCollectionEntries(productDataMap),
    [],
  );

  const allProducts = useMemo(() => {
    return Object.values(visibleProductDataMap).flat();
  }, [visibleProductDataMap]);

  const archivedProductRequested = useMemo(() => {
    return Object.entries(productDataMap).some(
      ([collectionKey, items]) =>
        isArchivedCollection(collectionKey) &&
        items.some((item) => item.handle === id),
    );
  }, [id]);

  useEffect(() => {
    if (location.state) {
      const matchedEntryFromState = Object.entries(productDataMap).find(
        ([, items]) =>
          items.some((item) => item.handle === location.state.handle),
      );

      const stateCollectionKey = matchedEntryFromState
        ? matchedEntryFromState[0]
        : "";

      if (stateCollectionKey && isArchivedCollection(stateCollectionKey)) {
        setProduct(null);
        setActiveIndex(0);
        setIsResolved(true);
        return;
      }

      setProduct(location.state);
      setActiveIndex(0);
      setIsResolved(true);
      return;
    }

    const fallbackProduct = allProducts.find((item) => item.handle === id);

    if (fallbackProduct) {
      setProduct(fallbackProduct);
      setActiveIndex(0);
    } else {
      setProduct(null);
    }

    setIsResolved(true);
  }, [location.state, id, allProducts]);

  const productType = useMemo(() => {
    if (!product) return "incense-sticks";

    const matchedEntry = Object.entries(productDataMap).find(([, items]) =>
      items.some((item) => item.handle === product.handle),
    );

    const matchedKey = matchedEntry ? matchedEntry[0] : "incense-sticks";

    return isArchivedCollection(matchedKey) ? "incense-sticks" : matchedKey;
  }, [product]);

  const HIGHLIGHTS = [
    {
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Pure_natural_6c131db2-95db-4fc9-b834-3a973441ed90.png?v=1742909457",
      label: "Natural Ingredients",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Hand_crafted.png?v=1742909457",
      label: "Handcrafted",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Less_smoke.png?v=1742909457",
      label: "Less Smoke",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Charcoal_free.png?v=1742909457",
      label: "No Charcoal",
    },
  ];

  const reviews = useMemo(() => {
    return seedReviewsByHandle[product?.handle] || [];
  }, [product?.handle]);

  const reviewCount = reviews.length;

  const avgRating = useMemo(() => {
    if (!reviewCount) return 0;

    const total = reviews.reduce((sum, r) => {
      const val = Number(r.rating ?? r.stars ?? 0);
      return sum + (Number.isFinite(val) ? val : 0);
    }, 0);

    return total / reviewCount;
  }, [reviews, reviewCount]);

  const filledStars = Math.round(avgRating);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return (visibleProductDataMap[productType] || []).filter(
      (item) => item.handle !== product.handle,
    );
  }, [product, productType, visibleProductDataMap]);

  const buildAccordionItems = (p) => {
    const acc = p?.accordion;
    if (!acc) return [];

    return [
      {
        title: "KEY BENEFITS",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            {(acc.keyBenefits || []).map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        ),
      },
      {
        title: "HOW TO USE",
        content: (
          <ol className="list-decimal pl-5 space-y-2">
            {(acc.howToUse || []).map((x, i) => (
              <li key={i}>{x}</li>
            ))}
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
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        ),
      },
      {
        title: "ALL INGREDIENTS",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            {(acc.allIngredients || []).map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        ),
      },
    ];
  };

  const images = product?.images || [];
  const activeImg = images[activeIndex] || "";

  const goPrev = () => {
    if (images.length <= 1) return;
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (images.length <= 1) return;
    setActiveIndex((i) => (i + 1) % images.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? touchStartX.current;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(dx) < 50) return;

    if (dx < 0) goNext();
    else goPrev();
  };

  const scrollRelatedLeft = () => {
    if (!relatedScrollRef.current) return;
    relatedScrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRelatedRight = () => {
    if (!relatedScrollRef.current) return;
    relatedScrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  if (!isResolved) {
    return <div className="p-10">Loading...</div>;
  }

  if (!product && archivedProductRequested) {
    return <Navigate to="/collections/incense-sticks" replace />;
  }

  if (!product) {
    return (
      <div className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-10 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            The product you are looking for does not exist or the link may be
            incorrect.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 hover:bg-black/90 transition"
          >
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="bg-linear-to-b from-emerald-50/60 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <section className="animate-fadeInUp">
              <div className="w-full rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-100">
                <div
                  className="relative rounded-xl bg-linear-to-br from-emerald-50 to-white p-4"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                                   h-10 w-10 rounded-full bg-white/80 hover:bg-white
                                   border border-gray-200 shadow-sm flex items-center justify-center"
                      >
                        <ChevronLeft className="h-5 w-5 text-gray-800" />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                                   h-10 w-10 rounded-full bg-white/80 hover:bg-white
                                   border border-gray-200 shadow-sm flex items-center justify-center"
                      >
                        <ChevronRight className="h-5 w-5 text-gray-800" />
                      </button>
                    </>
                  )}

                  <img
                    src={activeImg}
                    alt="product"
                    draggable={false}
                    className="w-full h-105 md:h-130 object-contain select-none"
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 rounded-xl p-2 bg-white transition shadow-sm border ${
                      activeIndex === i
                        ? "border-gray-900"
                        : "border-gray-200 hover:border-gray-400"
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

            <section
              className="space-y-6 animate-fadeInUp"
              style={{ animationDelay: "80ms" }}
            >
              <div className="rounded-2xl bg-white p-6 md:p-7 shadow-sm border border-gray-100">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {product.title}
                </h1>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-5 h-5 ${
                          idx < filledStars
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-transparent text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {reviewCount} review{reviewCount === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <p className="text-3xl font-extrabold text-gray-900">
                    ${Number(product.price).toFixed(2)}
                  </p>

                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
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
                    return (
                      <div
                        key={idx}
                        className="group flex flex-col items-center text-center gap-2 rounded-xl p-3 hover:bg-emerald-50/60 transition"
                      >
                        <div className="h-18 w-18 rounded-full flex items-center justify-center shadow-sm border border-emerald-200 group-hover:scale-105 transition-transform">
                          <img src={h.img}/>
                        </div>
                        <p className="text-xs whitespace-nowrap text-gray-700 leading-snug">
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
                      <span className="tracking-[0.25em] text-xl">
                        BUY NOW AT
                      </span>
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
          <ReviewsSection
            productHandle={product.handle}
            seedReviews={reviews}
          />

          {relatedProducts.length > 0 && (
            <section className="pt-12 md:pt-16">
              <h2 className="text-center text-3xl md:text-5xl font-medium text-black mb-10">
                You May Also Like
              </h2>

              <div className="relative">
                <button
                  type="button"
                  onClick={scrollRelatedLeft}
                  aria-label="Scroll left"
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                             h-12 w-12 rounded-full bg-white/90 hover:bg-white
                             border border-gray-200 shadow-md items-center justify-center"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>

                <button
                  type="button"
                  onClick={scrollRelatedRight}
                  aria-label="Scroll right"
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                             h-12 w-12 rounded-full bg-white/90 hover:bg-white
                             border border-gray-200 shadow-md items-center justify-center"
                >
                  <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>

                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24 bg-linear-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24 bg-linear-to-l from-white to-transparent" />

                <div
                  ref={relatedScrollRef}
                  className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 md:px-12 scrollbar-hide"
                >
                  {relatedProducts.map((item, idx) => (
                    <div
                      key={item.id || item.handle || idx}
                      className="min-w-70 max-w-70 shrink-0"
                    >
                      <ProductCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      <style>
        {`
          .animate-fadeInUp { animation: fadeInUp 520ms ease both; }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default ProductPage;
