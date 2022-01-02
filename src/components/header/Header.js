import React from "react";
import Logo from "assets/logo-white.svg"

import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__tabs">
        Tabs
      </div>
      <div className="header__buttons">
        Buttons
      </div>
    </header>
  )
}

export default Header;
