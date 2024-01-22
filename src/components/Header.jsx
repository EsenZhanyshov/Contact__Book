import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <div className="header__logo"></div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
