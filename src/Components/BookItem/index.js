import React from 'react';
import './bookItem.css';

import SubtitleDetail from './SubtitleDetail/index.js';
/**props => { book } */
const BookItem = ({ book }) => {
  
  return (
    <div className="book-item">
      <img src={book.image} alt={book.title}/>
      <SubtitleDetail title={book.title} description={book.description}/>
    </div>
  );
};

export default BookItem;