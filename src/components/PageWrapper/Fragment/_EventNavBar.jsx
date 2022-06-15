import React from "react"
import { Link } from "react-router-dom"

export const EventNavBar = () => (
  <div className="d_pw_navbar">
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="d_pw_navbar_title">«Марафон Гарри Поттера»</div>
      <div className="d_pw_navbar_description">
        Укажи день и время когда тебе будет удобно
      </div>
    </div>
    <Link to="/finish-marking" className="d_pw_navbar_link">
      Далее
    </Link>
  </div>
)
