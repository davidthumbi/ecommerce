import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CheckOut from "./scenes/checkout/CheckOut";
import Confirmation from "./scenes/checkout/Confirmation";
import ChartMenu from "./scenes/global/ChartMenu";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home"
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Footer from "./scenes/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
}

function App() {
  return (
    <div className="app">
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout/" element={<CheckOut />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <ChartMenu />
        <Footer />
    </div>
  );
}

export default App;
