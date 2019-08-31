import React from 'react';
import './fixedMenu.css';
import Button from '../../Button';
import Logo from '../../Header/Logo/index.js';

const FixedMenu = () => {
  return (
    <div className="fixed-menu">
      <Logo />
      <div>
        <Button>home</Button>
        <Button>adicionar livro</Button>
        <Button>contato</Button>
      </div>
    </div>
  );
};

export default FixedMenu;
