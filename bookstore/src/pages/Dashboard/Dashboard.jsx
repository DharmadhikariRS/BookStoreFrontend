import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DashboardCss from "../Dashboard/Dashboard.css";
import Allbooks from "../Allbooks/Allbooks";
import { useState } from "react";
import Bookdisplay from "../Bookdisplay/Bookdisplay";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  changeDisplay: {
    display: "inline-block",
  },
  changeDisplayRight: {
    marginRight: "6%",
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    changeDisplayRight: {
      marginRight: "14%",
    },
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    changeDisplayRight: {
      marginRight: "10%",
    },
  },
});
function Dashboard() {
  const [bookView, setBookView] = useState(false);
  const [book, setBook] = useState(null);
  const [searchBookName, setSearchBookName] = useState("");
  const [showSearchBook, setShowSearchBook] = useState(false);
  const navigate = useNavigate();
  const classes = useStyle();
  const searchToggle = () => {
    setShowSearchBook(true);
  };
  const bookViewFn = (data) => {
    console.log("data==", data);
    setBookView(true);
    setBook(data);
  };

  if (!bookView) {
    return (
      <>
        <Header
          setShowSearchBook={setShowSearchBook}
          searchBookName={searchBookName}
          setSearchBookName={setSearchBookName}
        />
        <div className="main-container">
          <div className="change-display change-display-left">
            <span className="Books">Books </span>
            <span className="book-count">(128 items)</span>
          </div>
          <div
            className={`${classes.changeDisplay} ${classes.changeDisplayRight}`}
          >
            <select className="sort-by">
              <option value="volvo">Sort by relevance</option>
            </select>
          </div>
        </div>
        <div className="AllbookClass">
          <Allbooks
            bookViewFn={bookViewFn}
            showSearchBook={showSearchBook}
            searchBookName={searchBookName}
          />
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className=" BookDetail">
          <div className="change-display change-display-left">
            <span
              className="Books"
              onClick={() => {
                setBookView(false);
                navigate("/dashboard");
              }}
            >
              Home/Books{" "}
            </span>
            <span className="book-count">(01)</span>
          </div>
        </div>
        <div className="AllbookClass">
          <Bookdisplay book={book} />
        </div>
      </>
    );
  }
}
export default Dashboard;
