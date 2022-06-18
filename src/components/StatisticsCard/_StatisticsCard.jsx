import React from "react"

import IconUser from "../../assets/images/icon-users.svg"
import "./_statistics_card.styles.css"

export const StatisticsCard = ({ statistics }) => (
  <div className="d_map_statistics">
    <div className="d_map_statistics_title">Кто идет</div>
    <div className="d_map_users">
      <div className="d_map_number_users">
        <img src={IconUser} alt="icon user" width="18" height="18" />
        14
      </div>
      <div className="d_ce_scroll">
        <div className="d_ce_participant">
          <div className="d_ce_participant_avatar">Ф</div>
          <div className="d_ce_participant_title">
            Федор <br /> Достоевский
          </div>
        </div>
      </div>
    </div>
    <div className="d_map_statistics_list">
      {statistics.map(({ date, numberOfFriends, width }) => (
        <div className="d_map_statistics_list_item" style={{ width: `${width}%` }} key={numberOfFriends}>
          <div className="d_map_statistics_list_item_title">{date}</div>
          <div className="d_map_statistics_list_item_friends">{numberOfFriends} друзей</div>
        </div>
      ))}
    </div>
  </div>
)
