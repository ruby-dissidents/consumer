import React from "react";
import {Outlet} from "react-router-dom";

import "./_page_wrapper.styles.css"
import logo from "../../assets/images/logo_white.svg"

export const PageWrapper = () => (
  <div className="d_container">
    <div className="d_pw_navbar">
      <img src={logo} alt="hap"/>
    </div>
    <div className="d_outlet">
      <Outlet/>
    </div>
  </div>
);
