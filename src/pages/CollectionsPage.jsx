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
      <img
        src={mobileBanner}
        alt="collection-mobile-banner"
        className="w-full block md:hidden"
      />
      <img
        src={banner}
        alt="collection-desktop-banner"
        className="w-full hidden md:block"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-5 place-items-center mt-10">
        {products.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
