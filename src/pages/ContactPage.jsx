import ContactUsSection from "../components/ContactUsSection";

const ContactPage = () => {
  const mainBanner =
    "https://glareen.com/cdn/shop/files/Background_Contact.png?v=1744100653&width=1400";
  const mobileBanner =
    "https://glareen.com/cdn/shop/files/Background_Phone_Contact.png?v=1744100707&width=750";
  return (
    <div>
      <img
        src={mobileBanner}
        alt="collection-mobile-banner"
        className="w-full block md:hidden"
      />
      <img
        src={mainBanner}
        alt="collection-desktop-banner"
        className="w-full hidden md:block"
      />
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#343434] md:text-6xl">
          Contact
        </h1>

        <div className="space-y-2 text-left text-lg text-gray-600">
          <p className="font-semibold text-gray-900 text-4xl">
            Glareen PVT. LTD.
          </p>
          <p className="max-w-md mx-auto text-2xl leading-relaxed">
            Basaveshwaranagar, Bangalore, Bangalore North,
            <br />
            Karnataka, India, 560079
          </p>
          <p className="pt-4 text-2xl">
            <span className="font-medium text-gray-900">Email:</span>{" "}
            <a
              href="mailto:contact@glareen.com"
              className="text-blue-600 hover:underline"
            >
              contact@glareen.com
            </a>
          </p>
        </div>
      </div>
      <ContactUsSection />
    </div>
  );
};

export default ContactPage;
