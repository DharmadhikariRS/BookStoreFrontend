import React, { useState, useEffect } from "react";
// import {
//   getWishlistDetailsAPI,
//   removeFromCartAPI,
//   removeFromWishlistAPI,
// } from "../../services/cartservices";
import { getWishlistDetailsAPI } from "../../Service/book.service";
import { removeFromWishlistAPI } from "../../Service/book.service";
import Header from "../Header/Header";
import cartBook from "./mini-book-cart.png";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "./wishlist.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  mainContainerWishlist: {
    display: "flex",
    width: "65vw",
    marginLeft: "6%",
    marginTop: "2%",
    flexDirection: "column",
    gap: "15px",
    border: "1px solid #e4e4e4",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    mainContainerWishlist: {
      width: "84vw",
    },
  },
});
const Wishlist = () => {
  const [bookWislisted, setBookWislisted] = useState([]);
  const classes = useStyle();
  const navigate = useNavigate();
  const getWishlist = async () => {
    let response = await getWishlistDetailsAPI();
    console.log("Wishlisted", response);
    setBookWislisted(response.data.data.books);
  };

  const removeFromWishlist = async (id) => {
    await removeFromWishlistAPI(id);
    getWishlist();
  };
  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <div className="wishClass">
      <div className="footer-outsitei-div">
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
          <span>My Wishlist</span>
        </div>
        <div className={classes.mainContainerWishlist}>
          <div className="Wishlist-book-count">
            {" "}
            <span className="Wishlist-count-label">My Wishlist (02)</span>
          </div>
          <div className="All-Wishlist-books">
            {bookWislisted.map((book) => (
              <div key={book._id} className="Wishlist-single-div">
                <div className="book-details-Wishlist">
                  <div className="change-display-left">
                    <img src={cartBook} alt="cart book" />
                  </div>
                  <div className="Wishlist-book-details">
                    <div className="book-name-cart bookNameClass1">
                      {book.bookName}
                    </div>
                    <div className="incart-author"> by {book.author}</div>
                    <div className="incart-price">
                      <span className="incart-price">Rs.1500 </span>
                      <span className="priceBox1-display incart-discount">
                        Rs.{book.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="delete-icon-Wishlist"
                  onClick={() => {
                    removeFromWishlist(book._id);
                  }}
                >
                  <DeleteForeverOutlinedIcon sx={{ color: "grey" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
