import React from "react";

import "./_statistics_card.styles.css"

export const StatisticsCard = ({statistics}) => (
  <div className="d_map_statistics">
    <div className="d_map_statistics_title">Кто идет</div>
    <div className="d_map_statistics_list">
      {statistics.map(({date, numberOfFriends, width}) => (
        <div className="d_map_statistics_list_item" style={{width: `${width}%`}} key={numberOfFriends}>
          <div className="d_map_statistics_list_item_title">{date}</div>
          <div className="d_map_statistics_list_item_friends">{numberOfFriends} друзей</div>
        </div>
      ))}
    </div>
  </div>
);
