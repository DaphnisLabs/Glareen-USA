import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: "dhoop-sticks",
    title: "DHOOP STICKS",
    image: "https://glareen.com/cdn/shop/files/Group_719_2.png?v=1744018734",
  },
  {
    id: "dhoop-cones",
    title: "DHOOP CONES",
    image: "https://glareen.com/cdn/shop/files/Group_718_2.png?v=1744018763",
  },
  {
    id: "incense-sticks",
    title: "INCENSE STICKS",
    image: "https://glareen.com/cdn/shop/files/Group_740.png?v=1744018804",
  },
];

const Collection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-10 mt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-semibold my-6">
          Collections
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.map((col) => (
            <button
              key={col.id}
              onClick={() => navigate(`/collections/${col.id}`)}
              className="relative cursor-pointer group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
              type="button"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-55 sm:h-65 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
                  {col.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-yellow-300 tracking-widest">
                  SHOP NOW →
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
