const TrustBadgesSection = ({ badges }) => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 items-start">
          {badges.map((b, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-45 h-45 md:w-50 md:h-50 flex items-center justify-center">
                <img
                  src={b.img}
                  alt={b.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <p className="mt-4 text-sm sm:text-base font-semibold text-gray-600 leading-snug">
                {b.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;