import Button from "components/Button";
import React from "react";
import { Link } from "react-router-dom";

import "./browse-restaurants-widget.scss"

const BrowseRestaurantsWidget = () => {
  return (
    <div className="widget">
      <h3 className="widget__header">View all your favourite lunch spots and more</h3>
      <Link to="/eat-out">
        <Button size="md" text="Browse list" />
      </Link>
    </div>
  );
};

export default BrowseRestaurantsWidget;
