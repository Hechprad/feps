import React from 'react';
import { Link } from 'react-router-dom';
import './fixedMenu.css';
import Button from '../../Button';
import Logo from '../../Header/Logo/index.js';

const FixedMenu = () => {
  return (
    <div className="fixed-menu">
      <Logo />
      <div className="menu-buttons">
        <Link to="/"><Button>home</Button></Link>
        <Link to="/book/new"><Button>adicionar livro</Button></Link>
        <Link to="/contato"><Button>contato</Button></Link>
      </div>
    </div>
  );
};

export default FixedMenu;
