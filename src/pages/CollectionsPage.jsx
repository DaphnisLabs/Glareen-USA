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

  const isValidCollection = Object.prototype.hasOwnProperty.call(productDataMap, id);

  return (
    <div className="pb-12">
      {/* Banner */}
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

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 mt-8">
        {!isValidCollection ? (
          <div className="text-center py-14">
            <p className="text-lg text-gray-700 font-medium">
              Invalid collection: <span className="font-mono">{id}</span>
            </p>
            <p className="text-gray-500 mt-2">
              Please choose a collection from the menu.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 px-5 py-3 rounded-md bg-black text-white"
            >
              Go to Home
            </Link>
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500 text-base sm:text-lg py-14">
            No products found in this collection.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
