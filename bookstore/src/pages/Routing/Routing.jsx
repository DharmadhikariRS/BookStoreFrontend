import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Order from "../Order/Order";
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
