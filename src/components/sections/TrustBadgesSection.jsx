const TrustBadgesSection = ({ badges }) => {
    return (
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 items-center">
            {badges.map((b, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={b.img}
                  alt={b.title}
                  className="mx-auto w-40 h-40 md:w-44 md:h-44 object-contain"
                />
                <p className="mt-4 text-sm sm:text-base font-semibold text-gray-600">
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
  