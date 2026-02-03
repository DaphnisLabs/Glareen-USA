import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item, isBestSeller = false }) => {
  const navigate = useNavigate();

  const goToProduct = (e) => {
    e.preventDefault(); // prevent Link default, we navigate via state
    navigate(`/products/${item.handle}`, { state: item });
  };

  return (
    <Link to={`/products/${item.handle}`} className="block w-full">
      <article
        className="w-full bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
        onClick={goToProduct}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && goToProduct(e)}
      >
        <div className="relative p-4">
          {isBestSeller && (
            <div className="absolute left-4 top-4 text-orange-500 text-sm font-bold">
              🧸 BESTSELLER
            </div>
          )}

          <div className="overflow-hidden rounded-lg group">
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full aspect-[4/3] object-contain bg-white transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="px-5 pb-5">
          <h3 className="text-lg sm:text-xl font-semibold leading-snug line-clamp-2">
            {item.title}
          </h3>

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
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
