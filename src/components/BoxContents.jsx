const banners = [
  {
    id: 1,
    image: "/boxContents.png",
    alt: "Box Contents",
  },
];

const BoxContents = () => {
  return (
    <section className="px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
          What’s Inside the Box
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Everything you need, thoughtfully packed for you
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg">
          {banners.map((src, idx) => (
            <img
              key={src.id}
              src={src.image}
              alt={src.alt}
              className="w-full h-auto"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxContents;