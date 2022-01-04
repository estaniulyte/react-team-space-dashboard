import React from "react";
import SettingsIcon from "assets/icons/settings.svg";
import LogOutIcon from "assets/icons/log-out.svg";

import "./user-profile-widget.scss";

const UserProfileWidget = () => {
  const dropdownItems = [
    {
      link: "/settings",
      imgSrc: SettingsIcon,
      imgAlt: "settings icon",
      itemName: "Settings",
    },
    {
      link: "/logout",
      imgSrc: LogOutIcon,
      imgAlt: "log out icon",
      itemName: "Log out",
    },
  ];

  return (
    <div className="user-profile-widget">
      <div className="user-profile-widget__content">
        {dropdownItems.map((item) => (
          <button
            className="user-profile-widget__button"
            to={item.link}
            key={item.link}
          >
            <img
              className="user-profile-widget__icon"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <span>{item.itemName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserProfileWidget;
