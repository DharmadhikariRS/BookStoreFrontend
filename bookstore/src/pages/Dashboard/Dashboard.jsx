import * as React from "react";
import Header from "../Header/Header";
import DashboardCss from "../Dashboard/Dashboard.css";
import Allbooks from "../Allbooks/Allbooks";
import { useState } from "react";
import Bookdisplay from "../Bookdisplay/Bookdisplay";

function Dashboard() {
  const [bookView, setBookView] = useState(false);
  const [book, setBook] = useState(null);

  const bookViewFn = (data) => {
    console.log("data==", data);

    setBookView(true);
    setBook(data);
  };

  // const bookDataFn=(data)=>{
  //   console.log('book==',data);

  //   console.log('bokkdetail',book);
  // }
  if (!bookView) {
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="change-display change-display-left">
            <span className="Books">Books </span>
            <span className="book-count">(128 items)</span>
          </div>
          <div className="change-display change-display-right">
            <select className="sort-by">
              <option value="volvo">Sort by relevance</option>
            </select>
          </div>
        </div>
        <div className="AllbookClass">
          <Allbooks bookViewFn={bookViewFn} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="main-container BookDetail">
          <div className="change-display change-display-left">
            <span className="Books">Home/Books </span>
            <span className="book-count">(01)</span>
          </div>
          {/* <div className="change-display change-display-right">
            <select className="sort-by">
              <option value="volvo">Sort by relevance</option>
            </select>
          </div> */}
        </div>
        <div className="AllbookClass">
          <Bookdisplay book={book} />
        </div>
      </>
    );
  }
}
export default Dashboard;
