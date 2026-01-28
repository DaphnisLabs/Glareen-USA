import React from "react";

const ContactUsSection = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <form className="space-y-10">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <FloatingLineInput label="Name" name="name" />
            <FloatingLineInput label="Email *" name="email" type="email" />
          </div>

          {/* Row 2: Phone (full width) */}
          <FloatingLineInput label="Phone number" name="phone" type="tel" />

          {/* Row 3: Message box */}
          <div className="space-y-3">
            <label className="block text-sm sm:text-base text-white/90">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              className="w-full resize-none rounded-none border border-white/35 bg-transparent px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-white/70"
              placeholder=""
            />
          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center min-w-35 px-10 py-4 text-sm sm:text-base font-medium tracking-wide
                         bg-liner-to-r from-[#6f5b2a] via-[#b08a2a] to-[#d7a928]
                         text-white shadow-[0_10px_30px_rgba(215,169,40,0.12)]
                         hover:brightness-110 active:brightness-95 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;

const FloatingLineInput = ({ label, name, type = "text" }) => {
  return (
    <div className="group">
      <label className="block text-sm sm:text-base text-white/90 mb-3">
        {label}
      </label>

      <input
        type={type}
        name={name}
        className="w-full bg-transparent text-white placeholder:text-white/40
                   border-b border-white/60 pb-3 outline-none
                   focus:border-white transition"
        placeholder=""
      />
    </div>
  );
};
