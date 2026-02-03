import { Link } from "react-router-dom";
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
            <FooterLink to="/collections/dhoop-sticks">Dhoop Sticks</FooterLink>
            <FooterLink to="/collections/incense-sticks">
              Incense Sticks
            </FooterLink>
            <FooterLink to="/collections/dhoop-cones">Dhoop cones</FooterLink>
          </FooterCol>

          {/* Information */}
          <FooterCol title="Information">
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/bulk-enquiry">Bulk Order Enquiry</FooterLink>


            <FooterLink to="/distributor-enquiry">Distributor Enquiry</FooterLink>
            <FooterLink to="/export-enquiry">Export Enquiry</FooterLink>
            <FooterLink to="/international-enquiry">International Enquiry</FooterLink>

            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </FooterCol>

          {/* Policies */}
          <FooterCol title="Policies">
            <FooterExternalLink href="https://glareen.com/pages/contact">
              Contact Information
            </FooterExternalLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/refund-policy">Return & refund Policy</FooterLink>
            <FooterLink to="/shipping-policy">Shipping Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms Of Service</FooterLink>
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
            <SocialLink
              Icon={Facebook}
              href="https://www.facebook.com/glareen.official/"
              label="Facebook"
            />
            <SocialLink
              Icon={Instagram}
              href="https://www.instagram.com/glareen.official/"
              label="Instagram"
            />
            <SocialLink
              Icon={Youtube}
              href="https://www.youtube.com/@Glareen"
              label="YouTube"
            />
            <SocialLink Icon={X} href="/" label="X" />
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

/** Internal route link */
const FooterLink = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-white transition-colors inline-block"
      >
        {children}
      </Link>
    </li>
  );
};

/** External link (policies, socials, etc.) */
const FooterExternalLink = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors inline-block"
      >
        {children}
      </a>
    </li>
  );
};

const SocialLink = ({ Icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center
                 border border-white/20 hover:bg-white/10 transition"
      aria-label={label}
      title={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};
