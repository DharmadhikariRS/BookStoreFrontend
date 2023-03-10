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
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import OrderSummary from "../OrderSummary/OrderSummary";
import Footer from "../Footer/Footer";
import { makeStyles } from "@mui/styles";
import { purchase } from "../../Service/book.service";

const useStyle = makeStyles({
  btnsAndcountCart: {
    display: "flex",
    width: " 16%",
  },
  bookCountCart: {
    display: "inline-block",
    border: "1px solid #dbdbdb",
    borderRadius: "1px",
    width: "60%",
    textAlign: "center",
  },
  mainContainerCart: {
    display: "flex",
    width: "65vw",
    marginLeft: "6%",
    marginTop: "2%",
    flexDirection: "column",
    gap: "15px",
    paddingBottom: " 5%",
  },
  placeorderCart: {
    marginLeft: " 81%",
    background: "#3371b5 0% 0% no-repeat padding-box",
    width: "14%",
    borderRadius: "4px",
  },
  orderBtnCart: {
    borderRadius: "2px",
    backgroundColor: "transparent",
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "0.7rem",
    margin: "4% 0",
  },
  cartCount: {
    display: "flex",
    alignItems: "center",
    marginLeft: "6%",
  },
  selectLocation: {
    display: "flex",
    alignItems: "center",
    border: " 1px solid #dcdcdc",
    marginRight: "3%",
  },
  removeBtn: {
    textAlign: "left",
    color: "#0a0102",
    border: " 1px solid white",
    fontSize: "15px",
    backgroundColor: "white",
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    btnsAndcountCart: {
      width: "20%",
    },
    bookCountCart: {
      width: "2rem",
    },
    mainContainerCart: {
      width: "76vw",
    },
    placeorderCart: {
      marginLeft: " 72%",
      width: "23%",
    },
    orderBtnCart: {
      fontSize: "0.7rem",
    },
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    cartCount: {
      marginLeft: "1%",
    },
    selectLocation: {
      marginRight: "0%",
    },
    removeBtn: {
      marginLeft: "30%",
    },
    placeorderCart: {
      marginLeft: " 44%",
      width: "54%",
    },
    orderBtnCart: {
      fontSize: "0.7rem",
    },
    mainContainerCart: {
      width: "70vw",
    },
  },
  ["@media only screen and (min-width: 900px) and (max-width: 1175px)"]: {},
});
const Cart = () => {
  // const location = useLocation();
  // console.log("data in cart", location.state.cartBooks);
  const [cartBooks, setcartBooks] = useState({});
  const [bookArray, setBookArray] = useState([]);
  const [addressDetails, setAddresssDetails] = useState(false);
  const [orderSummaryView, setOrderSummaryView] = useState(false);
  const classes = useStyle();
  const navigate = useNavigate();
  const customerDetails = () => {
    setAddresssDetails(true);
    // purchase(cartBooks.data.data._id);
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

  const OrderSummaryView = () => {
    setOrderSummaryView(true);
  };

  useEffect(() => {
    getBooksFromCart();
  }, []);
  console.log("cart booksss", cartBooks);
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div className="cart-header">
        <span
          className="home-route"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Home/{" "}
        </span>
        <span>My cart (1)</span>
      </div>
      <div className={classes.mainContainerCart}>
        <div className="first-div">
          <div className="mycart-location">
            <div className={classes.cartCount}>
              <span className="Books">My cart </span>
              <span className="book-count" style={{ marginLeft: "0.5rem" }}>
                (1)
              </span>
            </div>
            <div className={classes.selectLocation}>
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
                      <span className="priceBox1-display-cart incart-discount">
                        Rs. {book.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="quantity-buttons">
                  <div className={classes.btnsAndcountCart}>
                    <button
                      className="quantity-button-cart"
                      onClick={() => {
                        removeFromCart(book._id);
                      }}
                    >
                      -
                    </button>
                    <span className={classes.bookCountCart}>
                      {book.quantity}
                    </span>
                    <button
                      className="quantity-button-cart"
                      onClick={() => addToCart(book._id)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button className={classes.removeBtn}>Remove</button>
                  </div>
                </div>
              </>
            ))}
          </div>
          {!addressDetails && (
            <div className={classes.placeorderCart}>
              <div className={classes.orderBtnCart} onClick={customerDetails}>
                Place order
              </div>
            </div>
          )}
        </div>
        {!addressDetails && (
          <div className="second-div">
            <div
              className="address-cart change-display-left"
              style={{ color: "#333232" }}
            >
              Address Details
            </div>
          </div>
        )}
        {addressDetails && (
          <Customerdetails
            OrderSummaryView={OrderSummaryView}
            orderSummaryView={orderSummaryView}
          />
        )}

        {!orderSummaryView && (
          <div className="third-div">
            <div
              className="ordersummary-cart change-display-left "
              style={{ color: "#333232" }}
            >
              Order Summary
            </div>
          </div>
        )}

        {/* <OrderSummary /> */}
        {orderSummaryView && <OrderSummary cartBooks={cartBooks} />}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
