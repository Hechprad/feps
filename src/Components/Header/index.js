import React from 'react';
import './header.css';

import FixedMenu from './FixedMenu/index.js';
import Hero from './Hero/index.js';

const Header = () => {
  return (
    <div className="header">
      <FixedMenu />
      <Hero />
    </div>
  )
};

export default Header;