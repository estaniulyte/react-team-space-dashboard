import { NavLink } from "react-router-dom";

import HomeIcon from "assets/icons/home.svg"
import BookmarkIcon from "assets/icons/bookmark.svg"
import CompassIcon from "assets/icons/compass.svg"

import "./tabs.scss";

const Tabs = () => {
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
        {tabItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "tabs__list__item tabs__list__item--active"
                : "tabs__list__item"
            }
          >
              <img src={item.imgSrc} alt={item.alt} />
               {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
