import React from "react"

import "./_statistics.styles.css"

export const Statistics = ({ setIsOpenModalInvite, statistics }) => (
  <div className="d_s_statistics" onClick={setIsOpenModalInvite}>
    <div className="d_s_statistics_title">Статистика по дням</div>
    <div className="d_s_statistics_scroll scroll">
      {statistics.map(({ date, users, level }) => (
        <div className="d_s_statistics_column" style={{ height: `${level}` }} key={level}>
          <div className="d_s_statistics_column_date">{date}</div>
          <div className="d_s_statistics_column_friends">{users} друзей</div>
        </div>
      ))}
    </div>
  </div>
)
