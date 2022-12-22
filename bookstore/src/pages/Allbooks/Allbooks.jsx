import React, { useEffect, useState } from "react";
import "./Allbooks.css";
import Books from "../BookCard/Books";
import { GetAllBooks } from "../../Service/book.service";

const Allbooks = ({bookViewFn}) => {
  const [getBooks, setGetBooks] = useState([]);
  let books = [];
  const getAllBooks = async () => {
    let response = await GetAllBooks();
    books = response.data.data;
    setGetBooks(books);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <div className="display-all-books">
       
        {getBooks.map((book) => (
          <Books key={book._id} book={book} bookViewFn={bookViewFn} />
        ))}
      </div>
    </>
  );
};

export default Allbooks;