import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CollectionsPage from "./pages/CollectionsPage";
import ScrollToTop from "./components/ScrollToTop";
import BulkEnquiry from "./pages/BulkEnquiry";
import DistributorEnquiry from "./pages/DistributorEnquiry";
import ExportEnquiry from "./pages/ExportEnquiry";
import InternationalEnquiry from "./pages/InternationalEnquiry";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import Policy from "./pages/Policy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfService from "./pages/TermsOfService";


const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/collections/:id" element={<CollectionsPage />} />
        <Route path="/bulk-enquiry" element={<BulkEnquiry />} />
        <Route path="/distributor-enquiry" element={<DistributorEnquiry />} />
        <Route path="/export-enquiry" element={<ExportEnquiry />} />
        <Route path="/international-enquiry" element={<InternationalEnquiry />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
