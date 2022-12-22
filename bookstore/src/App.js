import "./App.css";
import Signin from "./pages/signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./pages/Header/Header";
import Books from "./pages/BookCard/Books";
import Bookdisplay from "./pages/Bookdisplay/Bookdisplay";
import Routing from "./pages/Routing/Routing";
import Cart from "./pages/cart/Cart";
import Customerdetails from "./pages/CustomerDetails/Customerdetails";
function App() {
  return (
    <div className="App">
      {/* <Signin />
      <Dashboard/>
      <Header/>
      <Books/>
      <Bookdisplay /> */}
      <Routing />
      {/* <Cart /> */}
      {/* <Customerdetails /> */}
    </div>
  );
}

export default App;
