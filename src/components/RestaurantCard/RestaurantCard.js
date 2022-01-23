import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "components/Button";

import "./restaurant-card.scss"

const RestaurantCard = ({
  restaurant: {
    id,
    name,
    checkIns,
    image,
    reviews,
    categories,
    openingHours,
    website,
    location,
    description,
  },
  fullCard = false,
  liked = false,
}) => {
  return (
    <div>
      Card
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
  fullCard: PropTypes.bool,
  liked: PropTypes.bool,
};

export default RestaurantCard;
