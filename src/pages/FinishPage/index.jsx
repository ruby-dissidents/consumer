import React from "react";

import {MarkingCard, StatisticsCard} from "../../components"
import {statistics} from "./_constants"
import iconFinish from "../../assets/images/icon-finish.svg";

const FinisPage = () => (
  <div style={{height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
    <MarkingCard
      author="Катя Зырянова"
      title="«Марафон Гарри Поттера»"
      description="Вы идете на встречу «Марафон Гарри Поттера»"
      color="#9C88D1"
    >
      <img
        src={iconFinish}
        alt="ok"
        width={235}
        height={235}
        style={{margin: "auto"}}
      />
    </MarkingCard>
    <StatisticsCard statistics={statistics}/>
  </div>
);

export default FinisPage;
