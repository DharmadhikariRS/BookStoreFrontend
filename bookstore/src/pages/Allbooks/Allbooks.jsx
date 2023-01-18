import React, { useEffect, useState } from "react";
import "./Allbooks.css";
import Books from "../BookCard/Books";
import { GetAllBooks } from "../../Service/book.service";
import { paginate } from "../Paging/PagingLogic";
import Paging from "../Paging/Paging";

const Allbooks = ({ bookViewFn, showSearchBook, searchBookName }) => {
  // const [getBooks, setGetBooks] = useState([]);
  // let books = [];
  // const getAllBooks = async () => {
  //   let response = await GetAllBooks();
  //   books = response.data.data;
  //   setGetBooks(books);
  // };

  // useEffect(() => {
  //   getAllBooks();
  // }, []);
  let pageSize = 5;
  const [getBooks, setGetBooks] = useState([]);
  const getAllBooks = async () => {
    let response = await GetAllBooks();
    setGetBooks(response.data.data);
  };

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  const books = paginate(getBooks, page, pageSize);
  console.log("state val in allbook", searchBookName);
  if (!showSearchBook) {
    console.log("state val in if", searchBookName);
    return (
      <>
        {/* <div className="display-all-books">
       
        {getBooks.map((book) => (
          <Books key={book._id} book={book} bookViewFn={bookViewFn} />
        ))}
      </div> */}
        <div className="display-all-books">
          {books.map((book) => (
            <Books key={book._id} book={book} bookViewFn={bookViewFn} />
          ))}
        </div>
        <Paging
          itemsCount={getBooks.length}
          pageSize={pageSize}
          handleChange={handleChange}
        />
      </>
    );
  } else {
    console.log("state val in else", searchBookName);
    return (
      <>
        <div className="display-all-books">
          {getBooks
            .filter((book) =>
              book.bookName.toLowerCase().includes(searchBookName.toLowerCase())
            )
            .map((book) => (
              <Books key={book._id} book={book} bookViewFn={bookViewFn} />
            ))}
        </div>
        <Paging
          itemsCount={getBooks.length}
          pageSize={pageSize}
          handleChange={handleChange}
        />
      </>
    );
  }
};

export default Allbooks;
