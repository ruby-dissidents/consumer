import React from "react"
import { Outlet, useLocation } from "react-router-dom"

import { EventNavBar, MainNavBar } from "./Fragment"
import "./_page_wrapper.styles.css"

export const PageWrapper = () => {
  const { pathname } = useLocation()
  const currentNavBar = pathname !== "/time-slots" ? <MainNavBar /> : <EventNavBar />
  const outletHeight = pathname === "/time-slots" ? "100% - 122px" : "100vh - 107px"
  const backgroundColor = pathname === "/time-slots" ? "#F6F6F6" : "#ffff"

  return (
    <div className="d_container_fluid">
      <div className="d_container">{currentNavBar}</div>
      <div className="d_outlet" style={{ backgroundColor, height: `calc(${outletHeight})` }}>
        <Outlet />
      </div>
    </div>
  )
}
