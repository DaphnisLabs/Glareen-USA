import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, isBestSeller = false }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[320px] shadow-2xl rounded-md">
      <article
        onClick={() => navigate(`/products/${item.handle}`, { state: item })}
        className="bg-white rounded-md overflow-hidden cursor-pointer"
      >
        {/* Top Section */}
        <div className="relative p-5">
          {/* Bestseller */}
          {isBestSeller && (
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="text-orange-500 text-sm font-bold tracking-wide">
                🧸 BESTSELLER
              </span>
            </div>
          )}

          <div className="overflow-hidden rounded-md group my-5">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-80 h-50 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-5 pb-5">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 leading-snug">
            {item.title}
          </h3>

          {/* Price Row */}
          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <p className="text-lg font-bold text-black">
              ${item.price.toFixed(2)}
            </p>

            <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
              {item.compareAtPrice
                ? `${Math.round(((item.compareAtPrice - item.price) / item.compareAtPrice) * 100)}%`
                : "0%"}
            </span>

            <p className="text-gray-500 text-sm">
              MRP{" "}
              <span className="line-through">
                ${Number(item.compareAtPrice).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;


