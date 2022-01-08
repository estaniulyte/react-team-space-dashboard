import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
// import Reservations from "pages/Reservations";
// import EatOut from "pages/EatOut";

const Reservations = React.lazy(() => import("pages/Reservations"));
const EatOut = React.lazy(() => import("pages/EatOut"));

const Router = () => (
  <Routes>
    <Route path="/react-team-space-dashboard/" element={<Home />}/>
    <Route path="/react-team-space-dashboard/reservations"
      element={
        <React.Suspense fallback={<>...</>}>
          <Reservations />
        </React.Suspense>
      }
    />
    <Route path="/react-team-space-dashboard/eat-out"
      element={
        <React.Suspense fallback={<>...</>}>
          <EatOut />
        </React.Suspense>
      }
    />
  </Routes>
);

export default Router;
