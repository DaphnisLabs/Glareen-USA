const benefits = [
  {
    title: "Calming Atmosphere",
    description:
      "Creates a warm, peaceful and cozy environment that helps your home feel more relaxing and inviting.",
  },
  {
    title: "Perfect for Prayer & Meditation",
    description:
      "A beautiful companion for pooja, meditation, yoga, and quiet self-care rituals throughout the day.",
  },
  {
    title: "Mood Uplifting Aroma",
    description:
      "The gentle fragrance helps refresh the senses and brings a soothing touch to your everyday routine.",
  },
  {
    title: "Elegant Home Fragrance",
    description:
      "Adds a premium aromatic feel to bedrooms, living rooms, entryways, and sacred spaces.",
  },
  {
    title: "Daily Ritual Essential",
    description:
      "An easy way to make mornings and evenings feel more intentional, comforting, and special.",
  },
  {
    title: "Warm & Lasting Impression",
    description:
      "Leaves behind a soft, memorable fragrance that makes your space feel welcoming and serene.",
  },
];

const Collection = () => {
  return (
    <section className="w-full bg-white py-10 mt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-[#ead7c3] bg-gradient-to-br from-[#fff7ef] via-[#f8ecdf] to-[#f2e0cf] px-6 py-10 sm:px-8 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(88,52,24,0.10)]">
          <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-[#f3c79b]/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#d89d67]/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-2xl" />

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-[#d9b89a] bg-white/70 px-4 py-1 text-xs sm:text-sm font-medium tracking-[0.18em] text-[#8f623f] uppercase">
                Warmth • Peace • Fragrance
              </span>

              <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#3f2a1d]">
                Incense Sticks Benefits
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 text-[#6b4a34]">
                Bring home a comforting aroma that turns everyday moments into
                calming rituals. Designed to create a soothing ambience, incense
                sticks add warmth, elegance, and peace to your space.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#ead6c3] bg-white/75 p-5 sm:p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(88,52,24,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(88,52,24,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f2cfac] to-[#e7b685] text-lg shadow-sm">
                      ✨
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#432b1e]">
                      {item.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-7 text-[#6c4b37]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#e5cfbb] bg-white/60 px-5 py-4 text-center text-sm sm:text-base text-[#6b4a34] shadow-sm">
              Ideal for <span className="font-semibold text-[#4a2f20]">prayer</span>,
              <span className="font-semibold text-[#4a2f20]"> meditation</span>,
              <span className="font-semibold text-[#4a2f20]"> relaxation</span>,
              <span className="font-semibold text-[#4a2f20]"> gifting</span>, and
              everyday home fragrance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;