import { Facebook, Instagram, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          'url("https://glareen.com/cdn/shop/files/footer_1_8de28f49-6a63-4728-880e-765165f69420.png?v=1730218484")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Collections */}
          <FooterCol title="Collections">
            <FooterLink>Dhoop Sticks</FooterLink>
            <FooterLink>Incense Sticks</FooterLink>
            <FooterLink>Attar</FooterLink>
            <FooterLink>Dhoop cones</FooterLink>
          </FooterCol>

          {/* Information */}
          <FooterCol title="Information">
            <FooterLink>About Us</FooterLink>
            <FooterLink>Bulk Order Enquiry</FooterLink>
            <FooterLink>Distributor Enquiry</FooterLink>
            <FooterLink>Export Enquiry</FooterLink>
            <FooterLink>International Enquiry</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </FooterCol>

          {/* Policies */}
          <FooterCol title="Policies">
            <FooterLink>Contact Information</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Shipping Policy</FooterLink>
            <FooterLink>Return and refund policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
          </FooterCol>
        </div>

        {/* Divider */}
        <div className="mt-12 sm:mt-14 lg:mt-16 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center text-center">
          <img
            src="https://glareen.com/cdn/shop/files/small_-_transparent_170x_2x_6d027a98-ca48-4294-a695-10f907053051.png?v=1742877730&width=255"
            alt="logo"
            className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto"
          />

          <p className="mt-4 text-white/70 text-xs sm:text-sm">
            © 2026, Glareen
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={X} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterCol = ({ title, children }) => {
  return (
    <div className="text-left sm:text-left lg:text-left">
      <h3 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6">
        {title}
      </h3>
      <ul className="space-y-3 sm:space-y-4 text-white/85 text-sm sm:text-base">
        {children}
      </ul>
    </div>
  );
};

const FooterLink = ({ children }) => {
  return (
    <li className="cursor-pointer hover:text-white transition-colors">
      {children}
    </li>
  );
};

const SocialIcon = ({ Icon }) => {
  return (
    <button
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center
                 border border-white/20 hover:bg-white/10 transition"
      aria-label="social"
      type="button"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};
