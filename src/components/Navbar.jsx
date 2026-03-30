import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { isArchivedCollection } from "../constants/archive";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-white border-b border-black/10 shadow-md sticky top-0 z-50">
      <div className="py-4">
        <div className="flex items-center justify-between px-4 md:px-8">
          <Link to="/" onClick={closeMenu}>
            <img src='/logo.avif' alt="glareen-logo" className="h-14 object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-lg">
            {!isArchivedCollection("dhoop-sticks") && (
              <Link to="/collections/dhoop-sticks">Dhoop Sticks</Link>
            )}

            <Link to="/collections/incense-sticks">Incense Sticks</Link>

            {!isArchivedCollection("dhoop-cones") && (
              <Link to="/collections/dhoop-cones">Dhoop Cones</Link>
            )}

            <Link to="/bulk-enquiry">Bulk Enquiry</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          onClick={closeMenu}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <p className="font-semibold text-lg">Menu</p>
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col px-5 py-6 text-lg">
            <p className="text-sm text-gray-500 mb-3">Collections</p>

            <div className="flex flex-col">
              {!isArchivedCollection("dhoop-sticks") && (
                <Link
                  onClick={closeMenu}
                  to="/collections/dhoop-sticks"
                  className="py-3 border-b border-black/10"
                >
                  Dhoop Sticks
                </Link>
              )}

              <Link
                onClick={closeMenu}
                to="/collections/incense-sticks"
                className="py-3 border-b border-black/10"
              >
                Incense Sticks
              </Link>

              {!isArchivedCollection("dhoop-cones") && (
                <Link
                  onClick={closeMenu}
                  to="/collections/dhoop-cones"
                  className="py-3 border-b border-black/10"
                >
                  Dhoop Cones
                </Link>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-6 mb-3">Information</p>

            <div className="flex flex-col">
              <Link
                onClick={closeMenu}
                to="/bulk-enquiry"
                className="py-3 border-b border-black/10"
              >
                Bulk Enquiry
              </Link>
              <Link
                onClick={closeMenu}
                to="/about-us"
                className="py-3 border-b border-black/10"
              >
                About Us
              </Link>
              <Link
                onClick={closeMenu}
                to="/contact-us"
                className="py-3 border-b border-black/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;