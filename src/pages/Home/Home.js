import React, { useState, useEffect } from "react";

import RestaurantsSection from "./RestaurantsSection";

import { restaurantsData } from 'assets/data/restaurants';
import { userData } from 'assets/data/userData';

import "./home.scss"

const Home = () => {
  const [userLikedReastaurants, setUserLikedReastaurants] = useState([]);

  useEffect(() => {
    if (userData && restaurantsData) {
      const likedRestaurantsIDs = userData[0].liked.restaurants;
      const likedRestaurantsIDsArray = likedRestaurantsIDs.map(
        ({ id }) => id
      );

      const likedRestaurants = restaurantsData.filter((restaurant) =>
        likedRestaurantsIDsArray.includes(restaurant.id)
      );
      setUserLikedReastaurants(likedRestaurants);
    }
  }, []);

  return (
    <main>
      <RestaurantsSection />
    </main>
  );
};

export default Home;

