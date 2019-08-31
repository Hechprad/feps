import React from 'react';
import './main.css';

import FixedMenu from '../Components/Header/FixedMenu/index.js';
import BookItem from '../Components/BookItem/';
/**mock */
import { books } from '../Mock/index.js';

const Main = () => {
  return (
  <>
    <header>
      <FixedMenu />
    </header>
    <div className="gallery-container">
      {books.map(book => <BookItem movie={book} key={book.id}/>)}
    </div>
  </>
  );
};

export default Main;