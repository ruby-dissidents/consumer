import React from "react"
import { Link } from "react-router-dom"

import { MarkingCard, Preloader, StatisticsCard } from "../../components"
import { marking } from "../../constants"
import "./_marking_page.css"

const MarkingPage = () => (
  <Preloader>
    <div className="d_container d_mp_container">
      <MarkingCard
        author={marking.org}
        title={marking.eventName}
        description={`${marking.org} приглашает тебя на встречу «${marking.eventName}»`}
        color="#FF6F42"
      >
        <Link to="/time-slots" className="d_map_marking_card_link" children="Отметиться" />
      </MarkingCard>
      <StatisticsCard statistics={marking.statistics} users={marking.users} />
    </div>
  </Preloader>
)

export default MarkingPage
