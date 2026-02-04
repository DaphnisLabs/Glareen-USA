import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, isBestSeller = false }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/products/${item.handle}`, { state: item });
  };

  const openAmazon = (e) => {
    e.stopPropagation();
    if (item.amazonUrl) window.open(item.amazonUrl, "_blank", "noopener,noreferrer");
  };

  const hasAmazon = !!item.amazonUrl;

  return (
    <article
      className="
        shrink-0
        w-65 sm:w-70 md:w-75
        rounded-xl bg-white shadow-lg hover:shadow-2xl transition
        overflow-hidden cursor-pointer
        flex flex-col
      "
      onClick={goToProduct}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && goToProduct()}
    >
      {/* Image area: fixed height so cards stay uniform */}
      <div className="relative p-4">
        {isBestSeller && (
          <div className="absolute left-4 top-4 text-orange-500 text-sm font-bold z-10">
            🏅 BESTSELLER 
          </div>
        )}

        <div className="rounded-lg overflow-hidden bg-white">
          <div className="h-45 sm:h-50 w-full flex items-center justify-center">
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        {/* Title fixed to 2 lines */}
        <h3 className="text-base sm:text-lg font-semibold leading-snug line-clamp-2 min-h-11">
          {item.title}
        </h3>

        {/* Price */}
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <p className="text-lg font-bold">${Number(item.price).toFixed(2)}</p>

          {item.compareAtPrice ? (
            <>
              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
                {Math.round(
                  ((item.compareAtPrice - item.price) / item.compareAtPrice) * 100
                )}
                %
              </span>
              <p className="text-gray-500 text-sm">
                MRP{" "}
                <span className="line-through">
                  ${Number(item.compareAtPrice).toFixed(2)}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {/* Button pinned at bottom */}
        <div className="mt-auto pt-4">
          {hasAmazon ? (
            <button
              onClick={openAmazon}
              className="w-full rounded-lg bg-black text-white py-3 font-medium hover:bg-black/90 transition"
            >
              Buy on Amazon
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToProduct();
              }}
              className="w-full rounded-lg bg-black text-white py-3 font-medium hover:bg-black/90 transition"
            >
              View Product
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
