import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./cart.css";
import cartBook from "./mini-book-cart.png";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBooksFromCartAPI } from "../../Service/book.service";
import Customerdetails from "../CustomerDetails/Customerdetails";
import { addToCartAPI } from "../../Service/book.service";
import { removeFromCartAPI } from "../../Service/book.service";
const Cart = () => {
  // const location = useLocation();
  // console.log("data in cart", location.state.cartBooks);
  const [cartBooks, setcartBooks] = useState({});
  const [bookArray, setBookArray] = useState([]);
  const [addressDetails, setAddresssDetails] = useState(false);
  const customerDetails = () => {
    setAddresssDetails(true);
  };
  const getBooksFromCart = () => {
    getBooksFromCartAPI()
      .then((response) => {
        setBookArray(response.data.data.books);

        setcartBooks(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addToCart = async (id) => {
    await addToCartAPI(id);
    getBooksFromCart();
  };
  const removeFromCart = async (id) => {
    await removeFromCartAPI(id);
    getBooksFromCart();
  };

  useEffect(() => {
    getBooksFromCart();
  }, []);
  // console.log("books in cart ", cartBooks.data.data.data);

  return (
    <>
      <Header />
      <div className="cart-header">
        <span className="home-route">Home/ </span>
        <span>My cart (1)</span>
      </div>
      <div className="main-container-cart">
        <div className="first-div">
          <div className="mycart-location">
            <div className="cart-count change-display-left">
              <span className="Books">My cart </span>
              <span className="book-count" style={{ marginLeft: "0.5rem" }}>
                (1)
              </span>
            </div>
            <div className="select-location">
              <LocationOnIcon fontSize="small" sx={{ color: "#A03037" }} />
              <select className="sort-by-cartlocation">
                <option value="volvo">Use current location</option>
              </select>
            </div>
          </div>
          <div className="allCartBooks">
            {bookArray.map((book) => (
              <>
                <div className="book-details-cart">
                  <div className="change-display-left">
                    <img src={cartBook} alt="cart book" />
                  </div>
                  <div className="book-details">
                    {/* <div>Don't Make Me Think</div> */}
                    <div className="bookNameClass">{book.bookName}</div>
                    <div className="incart-author"> by {book.author}</div>
                    <div className="incart-price">
                      <span className="incart-price">Rs. 500 </span>
                      <span className="priceBox1-display incart-discount">
                        Rs. {book.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="quantity-buttons">
                  <div className="btnsAndcount-cart">
                    <button
                      className="quantity-button-cart"
                      onClick={() => {
                        removeFromCart(book._id);
                      }}
                    >
                      -
                    </button>
                    <span className="book-count-cart">{book.quantity}</span>
                    <button
                      className="quantity-button-cart"
                      onClick={() => addToCart(book._id)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button className="remove-btn">Remove</button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="placeorder-cart">
            <div className="order-btn-cart">Place order</div>
          </div>
        </div>
        {!addressDetails && (
          <div className="second-div">
            <div
              className="address-cart change-display-left"
              style={{ color: "#333232" }}
              onClick={customerDetails}
            >
              Address Details
            </div>
          </div>
        )}
        {addressDetails && <Customerdetails />}
        <div className="third-div">
          <div
            className="ordersummary-cart change-display-left "
            style={{ color: "#333232" }}
          >
            Order Summary
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
