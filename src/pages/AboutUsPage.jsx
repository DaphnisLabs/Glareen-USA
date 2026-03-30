import { useEffect } from "react";
import AboutUs from "../components/AboutUs";

const AboutUsPage = () => {
  useEffect(() => {
    document.title = "About Us - Glareen";
  }, []);
  return (
    <div className="w-full">
      <img
        src="https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Background_2.png?v=1744099035"
        alt="collection-desktop-banner"
      />
      {/* PAGE CONTENT */}
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
