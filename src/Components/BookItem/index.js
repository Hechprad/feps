import React from "react";
import { Link } from "react-router-dom";
import "./bookItem.css";

import SubtitleDetail from "./SubtitleDetail/index.js";
/**props => { book } */
const BookItem = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="book-item">
        <img src={book.image} alt={book.title} />
        <SubtitleDetail title={book.title} description={book.description} />
      </div>
    </Link>
  );
};

export default BookItem;
