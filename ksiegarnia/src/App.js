// import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPromoComponent from "./Components/shopPromoComponent";
import ShopComponent from "./Components/shopComponent";
import Header from "./Components/header";
import ShoppingCartComponent from "./Components/shoppingCartComponent";
import LoginComponent from "./Components/login";
import RegisterComponent from "./Components/registerComponent";
import UserNameBarComponent from "./Components/userNameBarComponent";
import DotPay from "./Components/PaymentsComponent/DotPay";
import PayPal from "./Components/PaymentsComponent/PayPal";

import StripeContainer from "./Components/StripeContainer";

function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.PayPalKey}&currency=PLN`;
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header className="headerStyles" />
        <UserNameBarComponent />

        <Routes>
          <Route exact path="/bookstore" element={<ShopComponent />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/shopPromo" element={<ShopPromoComponent />} />
          <Route path="/shoppingCart" element={<ShoppingCartComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/stripePayment" element={<StripeContainer />} />
          <Route path="/dotPayPayment" element={<DotPay />} />
          <Route path="/payPalPayment" element={<PayPal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
