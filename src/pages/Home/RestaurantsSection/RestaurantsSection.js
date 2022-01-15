import React from "react";

import BrowseRestaurantsWidget from "./BrowseRestaurantsWidget";

import "./restaurants-section.scss"

const RestaurantsSection = () => {
  return (
    <section className="restaurants-section">
      <BrowseRestaurantsWidget />
      <div></div>
      <div></div>
    </section>
  );
};

export default RestaurantsSection;
