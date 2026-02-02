import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  collectionBannerImages,
  mobileollectionBannerImages,
  productDataMap,
} from "../constants";

const CollectionsPage = () => {
  const { id } = useParams();

  const products = productDataMap[id] || [];
  const banner = collectionBannerImages[id];
  const mobileBanner = mobileollectionBannerImages[id];

  return (
    <div className="mb-10">
      {/* Banner */}
      {mobileBanner && (
        <img
          src={mobileBanner}
          alt="collection-mobile-banner"
          className="w-full block md:hidden"
        />
      )}
      {banner && (
        <img
          src={banner}
          alt="collection-desktop-banner"
          className="w-full hidden md:block"
        />
      )}

      {/* Products */}
      <div className="mx-5 mt-10">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products found in this collection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
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
