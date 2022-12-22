import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BooksCss from "../BookCard/Books.css";
import BookImage from "../../images/BookImage.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { fontSize } from "@mui/system";

function Books({ book, bookViewFn }) {
  return (
    <Card
      className="mainContainer-card"
      onClick={() => {
        bookViewFn(book);
      }}
    >
      <CardContent className="contentClass">
        <Box className="BookBox">
          <img src={BookImage} alt="Book not found" className="book-image" />
        </Box>
        <Box className="book-name-class">{book.bookName}</Box>
        <Box className="book-name-class book-author-class">
          By {book.author}
        </Box>
        <Box className="book-name-class book ratingBox">
          <Box className="greenBox">
            4.5 <StarIcon fontSize="1rem" />
          </Box>
          <span className="ratingCount">(20)</span>
        </Box>
        <Box className="book-name-class priceBox">
          <span>Rs. {book.discountPrice} </span>
          <span className="priceBox1">Rs. {book.price}</span>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Books;
