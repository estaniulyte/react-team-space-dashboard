import React from "react";
import Logo from "assets/logo-white.svg"
import NotificationsIcon from "assets/notifications.svg"

import "./header.scss"
import Tabs from "./components/tabs";
import UserProfileButton from "./components/userProfileButton";

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
          <img src={NotificationsIcon} />
        </button>
        <UserProfileButton />
      </div>
    </header>
  )
}

export default Header;
