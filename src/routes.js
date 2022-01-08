import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Reservations from "pages/Reservations";
import EatOut from "pages/EatOut";

const Router = () => (
  <Routes>
    <Route path="/react-team-space-dashboard/" element={<Home />}/>
    <Route path="/react-team-space-dashboard/reservations" element={<Reservations />} />
    <Route path="/react-team-space-dashboard/eat-out" element={<EatOut />} />
  </Routes>
);

export default Router;
