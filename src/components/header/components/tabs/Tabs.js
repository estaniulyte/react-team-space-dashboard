import React from "react";

import "./tabs.scss";

const Tabs = () => {
  const tabItems = [
    {
      name: "Dashboard",
      link: "/",
      imgAlt: "Dashboard logo",
      imgSrc: "Dashboard",
    },
    {
      name: "Reservations",
      link: "/reservations",
      imgAlt: "Reservations logo",
      imgSrc: "Dashboard",
    },
    {
      name: "Eat-out",
      link: "/eat-out",
      imgAlt: "Eat put logo",
      imgSrc: "Dashboard",
    },
  ];

  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {tabItems.map((item) => (
          <li className="tabs__list__item" key={item.link}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
