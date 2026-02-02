import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, isBestSeller = false }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/products/${item.handle}`, { state: item });
  };

  return (
    <div
      className="w-[320px] shadow-2xl rounded-md cursor-pointer"
      onClick={goToProduct}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && goToProduct()}
    >
      <article className="bg-white rounded-md overflow-hidden">
        <div className="relative p-5">
          {isBestSeller && (
            <div className="absolute left-4 top-4 text-orange-500 text-sm font-bold">
              🧸 BESTSELLER
            </div>
          )}

          <div className="overflow-hidden rounded-md group my-5">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-80 h-50 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="px-5 pb-5">
          <h3 className="text-xl font-semibold">{item.title}</h3>

          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <p className="text-lg font-bold">${item.price.toFixed(2)}</p>

            {item.compareAtPrice && (
              <>
                <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
                  {Math.round(
                    ((item.compareAtPrice - item.price) /
                      item.compareAtPrice) *
                      100
                  )}
                  %
                </span>
                <p className="text-gray-500 text-sm">
                  MRP{" "}
                  <span className="line-through">
                    ${item.compareAtPrice.toFixed(2)}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
