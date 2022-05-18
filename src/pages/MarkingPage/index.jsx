import React from "react";

import {MarkingCard, StatisticsCard} from "../../components"
import {statistics} from "./_constants"
import {Link} from "react-router-dom";

const MarkingPage = () => (
  <div style={{height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
    <MarkingCard
      author="Катя Зырянова"
      title="«Марафон Гарри Поттера»"
      description="Катя Зырянова приглашает тебя на встречу «Марафон Гарри Поттера»"
      color="#FF6F42"
    >
      <Link to="/" className="d_map_marking_card_link">Отметиться</Link>
    </MarkingCard>
    <StatisticsCard statistics={statistics}/>
  </div>
);

export default MarkingPage;
