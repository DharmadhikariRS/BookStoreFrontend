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
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  mainContainerCard: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "flex-start !important",
    width: "15%",
    padding: "0px",
    margin: "1% 0",
    marginRight: "5%",
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    mainContainerCard: {
      width: "40%",
      marginRight: "6%",
    },
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    mainContainerCard: {
      width: "90%",
      marginRight: "6%",
    },
  },
});
function Books({ book, bookViewFn }) {
  const classes = useStyle();
  return (
    <Card
      className={classes.mainContainerCard}
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
