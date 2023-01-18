import "./App.css";
import Signin from "./pages/signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./pages/Header/Header";
import Books from "./pages/BookCard/Books";
import Bookdisplay from "./pages/Bookdisplay/Bookdisplay";
import Routing from "./pages/Routing/Routing";
import Cart from "./pages/cart/Cart";
import Customerdetails from "./pages/CustomerDetails/Customerdetails";
import Wishlist from "./pages/Wishlist/Wishlist";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import Order from "./pages/Order/Order";
import Footer from "./pages/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="appInner">
        {/* <Signin />
      <Dashboard/>
      <Header/>
      <Books/>
      <Bookdisplay /> */}
        <Routing />
        {/* <Cart /> */}
        {/* <Customerdetails /> */}
        {/* <Wishlist /> */}
        {/* <OrderSummary /> */}
        {/* <Order /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
