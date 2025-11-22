import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import NotFoundPage from "../Components/NotFoundPage";
import ShowItem from "../Components/ShowItem";
import ScrollToTop from "../Components/ScrollToTop";
import ProductListing from "../Components/ProductListing";
import AuthModal from "../Components/AuthModal";
import Account from "../Account/Account";
import PrivacyPolicy from "../PolicyPages/PrivacyPolicy";
import AboutUs from "../PolicyPages/AboutUs";
import ContactUs from "../PolicyPages/ContactUs";
import ReturnPolicy from "../PolicyPages/ReturnPolicy";

function Layout({ clone, setClone, toggleClone }) {
  return (
    <div className="w-full h-full mt-17">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home clone={clone} setClone={setClone} toggleClone={toggleClone} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/showitem/:id" element={<ShowItem />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/authmodal" element={<AuthModal />} />
        <Route path="/account" element={<Account />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />

      </Routes>
    </div>
  );
}

export default Layout;
