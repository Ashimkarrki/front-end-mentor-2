import React from "react";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="content">
        <h1 className="header__tittle">A history of everything you copy</h1>
        <p className="header__content">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="header__button">
        <button className="header__button__download header__button__download__ios ">
          <h2>Download for iOS</h2>
        </button>
        <button className="header__button__download header__button__download__mac ">
          <h2>Download for Mac</h2>
        </button>
      </div>
    </header>
  );
};

export default Header;
