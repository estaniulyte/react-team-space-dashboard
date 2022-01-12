import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
// import Reservations from "pages/Reservations";
// import EatOut from "pages/EatOut";

const Reservations = React.lazy(() => import("pages/Reservations"));
const EatOut = React.lazy(() => import("pages/EatOut"));

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/reservations"
      element={
        <React.Suspense fallback={<>...</>}>
          <Reservations />
        </React.Suspense>
      }
    />
    <Route path="/eat-out"
      element={
        <React.Suspense fallback={<>...</>}>
          <EatOut />
        </React.Suspense>
      }
    />
  </Routes>
);

export default Router;
