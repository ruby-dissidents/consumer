import React from "react";
import {Outlet} from "react-router-dom";

import "./_page_wrapper_mob.styles.css";

export const PageWrapperMob = () => (
  <div className="container">
    <Outlet/>
  </div>
);
