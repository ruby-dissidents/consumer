import { Fragment } from 'react';

import './_finish_page.styles.css';
import logo from '../../assets/images/logo.svg';
import iconFinish from '../../assets/images/icon-finish.svg';
import { EventCard } from '../../components';

const FinishPage = () => {
  return (
    <Fragment>
      <img src={logo} alt='Logo' className='logo' />
      <EventCard
        style={{ backgroundColor: '#9C88D1' }} children={
        <img
          src={iconFinish}
          alt='ok'
          width={172}
          height={172}
          style={{ margin: 'auto' }}
        />
      }
      />
    </Fragment>
  );
};

export default FinishPage;
