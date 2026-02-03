import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  collectionBannerImages,
  mobileollectionBannerImages,
  productDataMap,
} from "../constants";

const CollectionsPage = () => {
  const { id } = useParams();

  const products = useMemo(() => productDataMap?.[id] || [], [id]);
  const banner = collectionBannerImages?.[id];
  const mobileBanner = mobileollectionBannerImages?.[id];

  const isValidCollection = Object.prototype.hasOwnProperty.call(
    productDataMap,
    id
  );

  return (
    <div className="w-full overflow-x-hidden pb-14">
      {/* ===== Banner ===== */}
      <div className="w-full">
        {mobileBanner && (
          <img
            src={mobileBanner}
            alt="collection-mobile-banner"
            className="w-full block md:hidden"
            loading="eager"
            decoding="async"
          />
        )}
        {banner && (
          <img
            src={banner}
            alt="collection-desktop-banner"
            className="w-full hidden md:block"
            loading="eager"
            decoding="async"
          />
        )}
      </div>

      {/* ===== Products ===== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        {!isValidCollection ? (
          <div className="text-center py-16">
            <p className="text-lg font-medium text-gray-800">
              Invalid collection:{" "}
              <span className="font-mono text-gray-600">{id}</span>
            </p>
            <p className="text-gray-500 mt-2">
              Please choose a collection from the menu.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 rounded-md bg-black text-white hover:bg-black/90 transition"
            >
              Go to Home
            </Link>
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500 text-base sm:text-lg py-16">
            No products found in this collection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionsPage;
