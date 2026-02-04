import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item, isBestSeller = false }) => {
  const navigate = useNavigate();

  const goToProduct = (e) => {
    e.preventDefault();
    navigate(`/products/${item.handle}`, { state: item });
  };

  return (
    <Link
      to={`/products/${item.handle}`}
      className="block w-full min-w-0" 
    >
      <article
        className="
          w-full min-w-0 bg-white rounded-xl shadow-lg overflow-hidden
          cursor-pointer hover:shadow-2xl transition
          flex flex-col
        "
        onClick={goToProduct}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && goToProduct(e)}
      >
        {/* Image area (fixed height so cards become uniform) */}
        <div className="relative p-3 sm:p-4">
          {isBestSeller && (
            <div className="absolute left-3 top-3 sm:left-4 sm:top-4 text-orange-500 text-xs sm:text-sm font-bold z-10">
              🧸 BESTSELLER
            </div>
          )}

          <div className="overflow-hidden rounded-lg bg-white">
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full h-40 sm:h-48 object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Content area (uniform height) */}
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col flex-1">
          <h3 className="text-sm sm:text-lg font-semibold leading-snug line-clamp-2 min-h-10">
            {item.title}
          </h3>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <p className="text-base sm:text-lg font-bold">
              ${Number(item.price).toFixed(2)}
            </p>

            {item.compareAtPrice ? (
              <>
                <span className="bg-green-600 text-white text-xs sm:text-sm font-bold px-2.5 py-1 rounded">
                  {Math.round(
                    ((item.compareAtPrice - item.price) / item.compareAtPrice) *
                      100
                  )}
                  %
                </span>

                <p className="text-gray-500 text-xs sm:text-sm">
                  MRP{" "}
                  <span className="line-through">
                    ${Number(item.compareAtPrice).toFixed(2)}
                  </span>
                </p>
              </>
            ) : null}
          </div>

          {/* Button pinned to bottom */}
          <div className="mt-auto pt-4">
            {item.amazonUrl ? (
              <a
                href={item.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block w-full text-center bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-black/90 transition"
              >
                Buy on Amazon
              </a>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${item.handle}`, { state: item });
                }}
                className="w-full text-center bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-black/90 transition"
              >
                View Product
              </button>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
