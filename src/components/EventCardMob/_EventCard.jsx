import {Link} from "react-router-dom";

import "./_event_card_mob.styles.css";

export const EventCardMob = ({style, children}) => {
  return (
    <div className="event-card" style={{...style}}>
      <div className="organizer">
        <div className="letters">ОШ</div>
        Олеся Шевченко
      </div>
      <div className="title">
        «Марафон Гарри Поттера»
      </div>
      {!children ? (
        <Link to="/time-slots" className="button">Отметиться</Link>
      ) : children}
      <div className="footer">
        <span>Катя Зырянова</span> приглашает тебя на встречу <br/>
        <span>«Марафон Гарри Поттера»</span> <br/><br/>
        Укажите, когда вы свободны и сможете пойти
      </div>
    </div>
  );
};
