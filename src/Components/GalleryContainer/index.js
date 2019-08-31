import React from 'react';
/** CSS */
import './galleryContainer.css'
import BookItem from '../BookItem/';
/**MOCK */
import { books } from '../../Mock/index.js';

const GalleryContainer = () => {
  return (
    <div className="gallery-container">
      {books.map(book => {return <BookItem book={book} key={book.id} />})}
    </div>
  );
};

export default GalleryContainer;