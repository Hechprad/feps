import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";
import logoPng from "../../../Assets/imgs/logo-x.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={logoPng} alt="Logo Livraria 'X'" />
        <span>Livraria X</span>
      </div>
    </Link>
  );
};

export default Logo;
