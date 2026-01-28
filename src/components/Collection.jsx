const collections = [
  {
    title: "DHOOP STICK",
    image: "https://glareen.com/cdn/shop/files/Group_719_2.png?v=1744018734",
    link: "/collections/dhoop-stick",
  },
  {
    title: "DHOOP CONE",
    image: "https://glareen.com/cdn/shop/files/Group_718_2.png?v=1744018763",
    link: "/collections/dhoop-cone",
  },
  {
    title: "ATTAR",
    image: "https://glareen.com/cdn/shop/files/Group_740.png?v=1744018804",
    link: "/collections/attar",
  },
  {
    title: "INCENSE STICK",
    image:
      "https://glareen.com/cdn/shop/files/Group_739_0bf8951a-365d-4062-b246-3f9c3b1eb917.png?v=1744096206",
    link: "/collections/incense-stick",
  },
];

const Collection = () => {
  return (
    <section className="w-full bg-white py-10 mt-10">
      <div className="mx-auto px-4">
        <h1 className="text-center text-6xl my-6">Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CollectionCard item={collections[0]} className="md:col-span-1" />

          <CollectionCard item={collections[1]} className="md:col-span-1" />

          <CollectionCard
            item={collections[2]}
            className="md:col-span-1 md:row-span-2 h-105 md:h-full"
          />

          <CollectionCard
            item={collections[3]}
            className="md:col-span-2 h-65"
          />
        </div>
      </div>
    </section>
  );
};

export default Collection;

const CollectionCard = ({ item, className = "" }) => {
  return (
    <a
      href={item.link}
      className={`group relative overflow-hidden bg-black ${className}`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />

      {/* Text */}
      <div className="absolute top-4 right-4 text-right z-10">
        <h3 className="text-white font-extrabold tracking-wide text-lg md:text-xl">
          {item.title}
        </h3>
        <p className="text-yellow-400 text-xs font-semibold mt-1">SHOP NOW</p>
      </div>
    </a>
  );
};
