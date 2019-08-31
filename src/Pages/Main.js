import React from 'react';
import './main.css';

import Header from '../Components/Header/index.js';
import BookItem from '../Components/BookItem/';
import Button from '../Components/Button/index.js';
/**mock */
import { books } from '../Mock/index.js';

const Main = () => {
  return (
  <>
    <header>
      <Header />
    </header>
    <div className="gallery-container">
      <Button>testetetstt</Button>
      {books.map(book => {return <BookItem book={book} key={book.id} />})}
    </div>
  </>
  );
};

export default Main;