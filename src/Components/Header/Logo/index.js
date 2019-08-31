import React from 'react';

import './logo.css';
import logoPng from '../../../Assets/imgs/logo-quixote.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoPng} alt="Logo Livraria Quixote" />
      <span>Livraria X</span>
    </div>
  );
};

export default Logo;