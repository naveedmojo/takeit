import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import PopularDeals from "./components/PopularDeals";
import BannerSlider from "./components/BannerSlider";
import TrustedClients from "./components/TrustedClients";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <Categories />
      <PopularDeals />
      <TrustedClients />
      <Footer />
    </div>
  );
}

export default App;
