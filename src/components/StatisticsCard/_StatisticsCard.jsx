import React from "react"

import IconUser from "../../assets/images/icon-users.svg"
import "./_statistics_card.styles.css"
import { getRandomColor } from "../../constants"

export const StatisticsCard = ({ statistics, users }) => (
  <div className="d_map_statistics">
    <div className="d_map_statistics_title">Кто идет</div>
    <div className="d_map_users">
      <div className="d_map_number_users">
        <img src={IconUser} alt="icon user" width="18" height="18" />
        {users.length - 1}
      </div>
      <div className="d_ce_scroll">
        {users.map(
          (item, index) =>
            index !== 0 && (
              <div className="d_ce_participant" key={item.name}>
                <div className="d_ce_participant_avatar" style={getRandomColor()} children="Ф" />
                <div className="d_ce_participant_title">{item.name}</div>
              </div>
            )
        )}
      </div>
    </div>
    <div className="d_map_statistics_list">
      {statistics.map(({ fullDat, users, level }, index) => (
        <div className="d_map_statistics_list_item" style={{ width: `calc(${level} - 7%)` }} key={level}>
          <div className="d_map_statistics_list_item_title">{fullDat}</div>
          <div className="d_map_statistics_list_item_friends">{index <= 2 ? users - 1 : users} друзей</div>
        </div>
      ))}
    </div>
  </div>
)
