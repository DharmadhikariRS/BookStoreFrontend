import React from "react";
import Box from "@mui/material/Box";
import BookImage from "../../images/smallBook.png";
import BookImageBack from "../../images/smallBook2.png";
import BookImage1 from "../../images/BookImage.jpeg";
import profilepic from "../../images/profile.png";
import "./Bookdisplay.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarIcon from "@mui/icons-material/Star";
import { height, margin } from "@mui/system";
import { addToCartAPI } from "../../Service/book.service";
import { useState } from "react";
import { getBooksFromCartAPI } from "../../Service/book.service";
import { removeFromCartAPI } from "../../Service/book.service";
export default function Bookdisplay({ book }) {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [bookCount, setBookCount] = useState(1);
  const addToCart = () => {
    addToCartAPI(book._id);
    setButtonToggle(true);
  };
  const addToCart1 = async (id) => {
    await addToCartAPI(id);
    setBookCount(bookCount + 1);
  };
  const removeFromCart = async (id) => {
    await removeFromCartAPI(id);
    setBookCount(bookCount - 1);
  };
  // console.log("id===", book._id);
  return (
    <Box className="Book-main-container">
      <Box className="Box-Image">
        <img className="Box-Image1" src={BookImage} alt="Book" />
        <img src={BookImageBack} alt="Book" />
      </Box>
      <Box className="Big-Image-container">
        <Card className="card-container">
          <CardContent className="img-content">
            <img src={BookImage1} alt="Book" className="img-size" />
          </CardContent>
        </Card>

        {/* <Box className="button-class">
          <Button variant="contained" className="buttons" onClick={addToCart}>
            Add To Bag
          </Button>
          <Button variant="contained" className="buttons button2">
            <FavoriteIcon className="favButton" />
            Wishlist
          </Button>
        </Box> */}
        <Box className="button-class">
          {!buttonToggle && (
            <Button
              variant="contained"
              className="buttons"
              onClick={() => addToCart()}
            >
              Add To Cart
            </Button>
          )}
          {buttonToggle && (
            <div className="btnsAndcount-bookview">
              <button
                className="quantity-button-bookview"
                onClick={() => {
                  removeFromCart(book._id);
                }}
              >
                -
              </button>
              {/* <span className="book-count-bookview">{book.quantity}</span> */}
              <span className="book-count-bookview">{bookCount}</span>
              <button
                className="quantity-button-bookview"
                onClick={() => {
                  addToCart1(book._id);
                }}
              >
                +
              </button>
            </div>
          )}
          <Button variant="contained" className="buttons button2">
            <FavoriteIcon className="favButton" />
            Wishlist
          </Button>
        </Box>
      </Box>

      <Box className="book-details-main">
        <Box className="book-name-class-display bookName">
          {book.bookName}
          {/* Sherlock Chronicles */}
        </Box>
        <Box className="book-name-class-display book-author-class-display">
          By {book.author}
          {/* By Steve Tribe */}
        </Box>

        <Box className="book-name-class-display book-ratingBox-display">
          <Box className="greenBox-display">
            4.5 <StarIcon fontSize="0.8rem" />
          </Box>
          <span className="ratingCount-display">(20)</span>
        </Box>
        <Box className="book-name-class-display priceBox-display">
          <span>Rs. {book.discountPrice} </span>
          <span className="priceBox1-display">Rs. {book.price}</span>
          {/* <span>Rs. 400 </span>
          <span className="priceBox1-display">Rs. 800 </span> */}
        </Box>
        <hr className="hr-class" />
        <Box className="book-name-class-display book-bullet-class-display">
          <RadioButtonUncheckedIcon className="bullet" />
          Book details
        </Box>
        <p className="book-name-class-display text-class">{book.description}</p>
        <hr className="hr-class" />
        <Box className="book-name-class-display feedback">
          Customer Feedback
        </Box>
        <Box className="book-name-class-display feedback-class">
          <span className="overall-ratring">Overall rating</span>
          <Box>
            <StarBorderPurple500OutlinedIcon />
            <StarBorderPurple500OutlinedIcon />
            <StarBorderPurple500OutlinedIcon />
            <StarBorderPurple500OutlinedIcon />
            <StarBorderPurple500OutlinedIcon />
          </Box>
          <textarea
            placeholder="write your review here"
            rows="4"
            cols="50"
            style={{ width: "100%", padding: "0", border: "0" }}
          ></textarea>
          <Box
            display="flex"
            justifyContent="flex-end"
            width="100%"
            paddingTop="1%"
          >
            <Button
              variant="contained"
              className="buttons"
              sx={{ width: "10%", backgroundColor: "blue !important" }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        <Box
          className="book-name-class-display"
          display="flex"
          alignItems="center"
        >
          <img
            src={profilepic}
            alt="profilePic"
            style={{ borderRadius: "50%", height: "80%" }}
          />
          <span style={{ fontSize: "60%", marginLeft: "1%" }}>Rio Disuza</span>
        </Box>
        <Box className="book-name-class-display">
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "grey" }} />
        </Box>
        <Box className="book-name-class-display text-class">
          <span>
            Excellent customer service. (EN) was very friendly, patient and
            helpful in helping us find what we were looking for.
          </span>
        </Box>
        <Box
          className="book-name-class-display"
          display="flex"
          alignItems="center"
        >
          <img
            src={profilepic}
            alt="profilePic"
            style={{ borderRadius: "50%", height: "80%" }}
          />
          <span style={{ fontSize: "60%", marginLeft: "1%" }}>Ranco priza</span>
        </Box>
        <Box className="book-name-class-display">
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "gold" }} />
          <StarOutlinedIcon sx={{ color: "grey" }} />
        </Box>
        <Box className="book-name-class-display text-class">
          <span>
            Excellent customer service. (EN) was very friendly, patient and
            helpful in helping us find what we were looking for.
          </span>
        </Box>
      </Box>
    </Box>
  );
}
