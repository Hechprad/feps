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

/* USANDO API */

// import React, { useState, useEffect } from 'react'
// import { getBooks } from '../../API/Books'

// const GalleryContainer = () => {
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//      /* *******************************************************
//        de onde vem esse data ???? 
//        *************************** */
//     getBooks().then(({ data }) => {
//       setBooks(data);
//     }).catch((err) => {
//       console.log(err);
//     });
//   }, []);

//   return (
//     <div className="gallery-container">
//       {
//         books.map(book => <BookItem book={book} key={book.id} />)
//         }
//     </div>
//   );
// };

// export default GalleryContainer;