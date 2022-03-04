import React from "react";
import logo from "../img/header/logo.svg"
import {Link } from 'react-router-dom';

const Header = () => {
  return (  
    <header className="header">
      <div className="section">
        <div className="header__wrapper">
          <Link to="/" className="header__brand">
          <img src={logo} alt="" className="header__logo" />
          <p className="header__text">Поиск авиабилетов</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;