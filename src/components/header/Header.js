import React from "react";
import Logo from "assets/icons/logo-white.svg"
import NotificationsIcon from "assets/icons/notifications.svg"

import "./header.scss"
import Tabs from "./components/Tabs";
import UserProfileButton from "./components/UserProfileButton";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__tabs">
        <Tabs />
      </div>
      <div className="header__buttons">
        <button className="header__buttons__notifications">
          <img src={NotificationsIcon} alt="notifications icon" />
        </button>
        <UserProfileButton />
      </div>
    </header>
  )
}

export default Header;
