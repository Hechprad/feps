import React from "react";
import { Link } from "react-router-dom";
import "./bookItem.css";

import SubtitleDetail from "./SubtitleDetail/index.js";
/**props => { book } */
const BookItem = ({ book }) => {
  return (
      <Link to="/book/:id">
    <div className="book-item">
        <img src={book.image} alt={book.title} />
      {/* <link to="/book"> */}
      <SubtitleDetail title={book.title} description={book.description} />
      {/* </link> */}
    </div>
      </Link>
  );
};

export default BookItem;
