import React from "react";

import BrowseRestaurantsWidget from "./BrowseRestaurantsWidget";

import "./restaurants-section.scss"

const RestaurantsSection = () => {
  return (
    <section className="restaurants-section">
      <BrowseRestaurantsWidget />
      <div>you</div>
      <div>here</div>
    </section>
  );
};

export default RestaurantsSection;
