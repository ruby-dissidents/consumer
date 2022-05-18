import {Fragment} from "react";

import logo from "../../assets/images/logo.svg";
import iconFinish from "../../assets/images/icon-finish.svg";
import {EventCardMob} from "../../components";
import "./_finish_page_mob.styles.css";

const FinishPageMob = () => {
  return (
    <Fragment>
      <img src={logo} alt="Logo" className="logo"/>
      <EventCardMob
        style={{backgroundColor: "#9C88D1"}} children={
        <img
          src={iconFinish}
          alt="ok"
          width={172}
          height={172}
          style={{margin: "auto"}}
        />
      }
      />
    </Fragment>
  );
};

export default FinishPageMob;
