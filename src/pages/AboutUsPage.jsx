import AboutUs from "../components/AboutUs";

const AboutUsPage = () => {
  const heroBg =
    "https://cdn.shopify.com/s/files/1/0610/3072/7749/files/Background_2.png?v=1744099035"; 

  return (
    <div className="w-full">
        <img
            src={heroBg}
            alt="collection-desktop-banner"
            className="w-full hidden md:block"
        />     
      {/* PAGE CONTENT */}
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
