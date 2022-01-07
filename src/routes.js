import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Reservations from "pages/Reservations";
import EatOut from "pages/EatOut";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/eat-out" element={<EatOut />} />
  </Routes>
);

export default Router;
