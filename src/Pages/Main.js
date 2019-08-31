import React from 'react';
import './main.css';

import Header from '../Components/Header/index.js';
import GalleryContainer from '../Components/GalleryContainer/index.js';
/**mock */

const Main = () => {
  return (
  <>
    <header>
      <Header />
    </header>
    <GalleryContainer />
  </>
  );
};

export default Main;