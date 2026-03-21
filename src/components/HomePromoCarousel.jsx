const banners = [
  {
    id: 1,
    image: "/banners/home/banner-.png",
    alt: "Glareen promotional banner 1",
  },
];

const HomePromoCarousel = () => {
  return (
    <section className="flex justify-center px-4 py-6">
      {/* Container to control width + centering */}
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg">
        {banners.map((src, idx) => (
          <img
            src={src.image}
            alt={`Hero banner ${idx + 1}`}
            className="w-full h-auto" // ✅ keeps aspect ratio
            loading={idx === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePromoCarousel;
