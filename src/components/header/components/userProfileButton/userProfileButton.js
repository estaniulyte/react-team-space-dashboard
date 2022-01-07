import React, { useState } from "react";

import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";

import UserProfileWidget from "components/header/components/UserProfileWidget";

import "./user-profile-button.scss";

const UserProfileButton = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const handleShowOnClick = () => {
    if (isComponentVisible) setIsComponentVisible(false);
    else setIsComponentVisible(true);
  };

  const handleOnOutsideClick = () => {
    setIsComponentVisible(false);
  };

  return (
    <div
      className="user-profile-button"
      onClick={handleShowOnClick}
      onBlur={handleOnOutsideClick}
      onKeyDown={handleOnOutsideClick}
      role="button"
      tabIndex={0}
    >
      <img className="user-profile-button__image" src="https://i.pravatar.cc/40" alt="profile" />
      <HeartIcon className="user-profile-button__icon" />
      {isComponentVisible && <UserProfileWidget />}
    </div>
  );
};

export default UserProfileButton;
