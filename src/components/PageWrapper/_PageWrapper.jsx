import React from "react";
import {Outlet, useLocation} from "react-router-dom";

import "./_page_wrapper.styles.css"
import logo from "../../assets/images/logo_white.svg"

export const PageWrapper = () => {
  const {pathname} = useLocation()

  return (
    <div className="d_container">
      {pathname !== "/time-slots" ? (
        <div className="d_pw_navbar">
          <img src={logo} alt="hap"/>
        </div>
      ) : (
        <div className="d_pw_navbar">
          <div style={{display: "flex", flexDirection: "column"}}>
            <div className="d_pw_navbar_title">«Марафон Гарри Поттера»</div>
            <div className="d_pw_navbar_description">Укажи день и время когда тебе будет удобно</div>
          </div>
        </div>
      )}
      <div
        className="d_outlet"
        style={{height: pathname === "/time-slots" ? "calc(100% - 120px)" : "calc(100vh - 87px)"}}
      >
        <Outlet/>
      </div>
    </div>
  )
};
