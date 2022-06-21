import React from "react"

import iconFinish from "../../assets/images/icon-finish.svg"
import { MarkingCard, StatisticsCard } from "../../components"
import { marking } from "../../constants"

const FinisPage = () => (
  <div className="d_container d_mp_container">
    <MarkingCard
      author="Зимин Кирилл"
      title={`«${marking.eventName}»`}
      description={`Вы идете на встречу «${marking.eventName}»`}
      color="#9C88D1"
    >
      <img src={iconFinish} alt="ok" width={235} height={235} style={{ margin: "auto" }} />
    </MarkingCard>
    <StatisticsCard statistics={marking.statistics} users={marking.users} />
  </div>
)

export default FinisPage
