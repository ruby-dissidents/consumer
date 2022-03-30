import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import iconRight from '../../assets/images/icon-right-arrow.svg';
import './_time_slots.styles.css';

const TimeSlots = () => {
  const [isActive, setIsActive] = useState(true);

  function onEvent() {
    setIsActive(!isActive);
  }

  return (
    <Fragment>
      <div className='header'>
        <Link to='/'>
          <img src={iconRight} alt='Go back' />
        </Link>
        Удобные слотыфыв
        <div />
      </div>
      <div className='list-day'>
        <button className={`day ${isActive ? 'active' : ''}`} onClick={() => onEvent()}>
          <div className='week-day'>Ср</div>
          <div className='time-slots'>
            <div className='time-slot' style={{ width: '100%' }} />
          </div>
          <div className='date'>30</div>
        </button>
        <button className={`day ${isActive ? '' : 'active'}`} onClick={() => onEvent()}>
          <div className='week-day'>Чт</div>
          <div className='time-slots'>
            <div className='time-slot' />
          </div>
          <div className='date'>31</div>
        </button>
      </div>
      <div className='card-slots'>
        {isActive ? (
          <div className='card'>
            06:00 – 00:00
            <input type='checkbox' id='scales' name='scales' />
          </div>
        ) : (
          <div className='card'>
            18:00 – 21:00
            <input type='checkbox' id='horns' name='horns' />
          </div>
        )}
      </div>
      <Link to='/generate' className='next'>Далее</Link>
    </Fragment>
  );
};

export default TimeSlots;
