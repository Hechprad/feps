import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';
import logoPng from '../../../Assets/imgs/logo-x.png';

const Logo = () => {
  return (
    <div className="logo">
      <Link to='/'><img src={logoPng} alt="Logo Livraria 'X'" /></Link>
      <span>Livraria X</span>
    </div>
  );
};

export default Logo;