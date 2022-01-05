import React, { useState } from "react";
import HomeIcon from "assets/icons/home.svg"
import BookmarkIcon from "assets/icons/bookmark.svg"
import CompassIcon from "assets/icons/compass.svg"
import classNames from "classnames";

import "./tabs.scss";

const Tabs = () => {
  const [isActive, setIsActive] = useState(0);

  const tabItems = [
    {
      name: "Dashboard",
      link: "/",
      imgAlt: "Home icon",
      imgSrc: HomeIcon,
    },
    {
      name: "Reservations",
      link: "/reservations",
      imgAlt: "Bookmark logo",
      imgSrc: BookmarkIcon,
    },
    {
      name: "Eat-out",
      link: "/eat-out",
      imgAlt: "Compass logo",
      imgSrc: CompassIcon,
    },
  ];

  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {tabItems.map((item, i) => (
          <button className="tabs__list__item" key={item.link} onClick={() => setIsActive(i)}
            className={classNames("tabs__list__item", {
              "tabs__list__item--active": i == isActive,
            })}
          >
            <img src={item.imgSrc} alt={item.alt} />
            {item.name}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
