import { useEffect } from "react";
import ContactUsSection from "../components/ContactUsSection";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - Glareen USA";
  }, []);

  const mainBanner =
    "https://glareen.com/cdn/shop/files/Background_Contact.png?v=1744100653&width=1400";
  const mobileBanner =
    "https://glareen.com/cdn/shop/files/Background_Phone_Contact.png?v=1744100707&width=750";

  return (
    <div className="bg-linear-to-b from-[#fffaf5] via-white to-[#fffaf5]">
      {/* Banner */}
      <section className="relative">
        <img
          src={mobileBanner}
          alt="contact-banner"
          className="w-full h-70 object-cover block md:hidden"
        />
        <img
          src={mainBanner}
          alt="contact-banner"
          className="w-full h-105 object-cover hidden md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Content */}
      <section className="relative z-10 -mt-10 md:-mt-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-[#f1e7dc] overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left */}
              <div className="p-8 md:p-12 bg-linear-to-br from-[#fffaf6] to-[#fff3e8] border-b md:border-b-0 md:border-r border-[#f1e7dc]">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#b07a4f] mb-3">
                  Contact Information
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] mb-5">
                  Glareen Pvt. Ltd.
                </h2>

                <p className="text-[#5f5f5f] text-base md:text-lg leading-8">
                  Basaveshwaranagar, Bangalore,
                  <br />
                  Bangalore North, Karnataka, India,
                  <br />
                  560079
                </p>
              </div>

              {/* Right */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-100">
                    <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">
                      Call / WhatsApp
                    </p>
                    <a
                      href="tel:+919663066482"
                      className="text-xl md:text-2xl font-medium text-[#1f1f1f] hover:text-[#b07a4f] transition-colors"
                    >
                      +91 9663066482
                    </a>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:market@glareen.com"
                      className="text-xl md:text-2xl font-medium text-[#1f1f1f] hover:text-[#b07a4f] transition-colors break-all"
                    >
                      market@glareen.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="pt-14 md:pt-20">
        <ContactUsSection />
      </div>
    </div>
  );
};

export default ContactPage;
