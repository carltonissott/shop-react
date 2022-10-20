import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopNow from "./pages/ShopNow";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { useDispatch, useSelector } from "react-redux";
import Faq from "./pages/FAQ";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/shop-react" element={<HomePage />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="faq" element={<Faq/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
