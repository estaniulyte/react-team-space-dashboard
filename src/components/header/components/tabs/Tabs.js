import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import HomeIcon from "assets/icons/home.svg"
import BookmarkIcon from "assets/icons/bookmark.svg"
import CompassIcon from "assets/icons/compass.svg"

import "./tabs.scss";

const Tabs = () => {
  const [isActive, setIsActive] = useState(0);

  const tabItems = [
    {
      name: "Dashboard",
      link: "/react-team-space-dashboard",
      imgAlt: "Home icon",
      imgSrc: HomeIcon,
    },
    {
      name: "Reservations",
      link: "/react-team-space-dashboard/reservations",
      imgAlt: "Bookmark logo",
      imgSrc: BookmarkIcon,
    },
    {
      name: "Eat-out",
      link: "/react-team-space-dashboard/eat-out",
      imgAlt: "Compass logo",
      imgSrc: CompassIcon,
    },
  ];

  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {tabItems.map((item, i) => (
          <NavLink
            key={item.name}
            to={item.link}
            className="tabs__list__item"
          >
            <button
              onClick={() => setIsActive(i)}
              className={classNames("tabs__list__item", {
                "tabs__list__item--active": i === isActive,
              })}
            >
              <img src={item.imgSrc} alt={item.alt} />
               {item.name}
            </button>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
