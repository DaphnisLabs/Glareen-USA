import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#fdf7fa] via-[#f7eaf1] to-[#f1e1ea]" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f4d9e6] rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#e8c8d8] rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2f1325]"
        >
          Something Beautiful is Coming
        </motion.h2>

        <p className="mt-4 text-[#5a3a4a] max-w-2xl mx-auto text-base sm:text-lg">
          We’re crafting a new range of fragrances designed to elevate your
          daily rituals.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Dhoop Cones */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(87,31,67,0.12)]"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#2f1325]/40 via-transparent to-transparent z-10" />

            <img
              src="https://glareen.com/cdn/shop/files/Group_718_2.png?v=1744018763"
              alt="Dhoop Cones"
              className="w-full h-95 object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Dhoop Cones
              </h3>
              <p className="mt-2 text-white/80 text-sm">
                Rich, intense aromas crafted for deeper, longer-lasting
                ambiance.
              </p>
              <span className="mt-4 inline-block text-[11px] tracking-widest uppercase text-white/70">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Incense Sticks */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(87,31,67,0.12)]"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#2f1325]/40 via-transparent to-transparent z-10" />

            <img
              src="https://glareen.com/cdn/shop/files/Group_719_2.png?v=1744018734"
              alt="Incense Sticks"
              className="w-full h-95 object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Dhoop Sticks
              </h3>
              <p className="mt-2 text-white/80 text-sm">
                Subtle, soothing fragrances perfect for everyday calm and focus.
              </p>
              <span className="mt-4 inline-block text-[11px] tracking-widest uppercase text-white/70">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
