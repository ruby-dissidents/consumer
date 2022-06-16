import React from "react"

import "./_statistics.styles.css"

export const Statistics = () => (
  <div className="d_s_statistics">
    <div className="d_s_statistics_title">Статистика по дням</div>
    <div className="d_s_statistics_scroll scroll">
      <div className="d_s_statistics_column">
        <div className="d_s_statistics_column_date">9 фев, пт</div>
        <div className="d_s_statistics_column_friends">14 друзей</div>
      </div>
    </div>
  </div>
)
