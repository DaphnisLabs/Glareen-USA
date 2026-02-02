import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: "dhoop-sticks",
    title: "DHOOP STICK",
    image: "https://glareen.com/cdn/shop/files/Group_719_2.png?v=1744018734",
  },
  {
    id: "dhoop-cones",
    title: "DHOOP CONE",
    image: "https://glareen.com/cdn/shop/files/Group_718_2.png?v=1744018763",
  },
  {
    id: "incense-sticks",
    title: "INCENSE STICK",
    image: "https://glareen.com/cdn/shop/files/Group_740.png?v=1744018804",
  },
];

const Collection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-10 mt-10">
      <div className="mx-auto px-4">
        <h1 className="text-center text-6xl my-6">Collections</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => navigate(`/collections/${col.id}`)}
              className="relative cursor-pointer group overflow-hidden"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-bold">{col.title}</h2>
                <p className="mt-2 text-sm text-yellow-400">SHOP NOW</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
