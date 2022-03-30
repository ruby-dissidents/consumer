import { Fragment } from 'react';

import logo from '../../assets/images/logo.svg';
import { EventCard } from '../../components';
import './_main_page.styles.css';

const MainPage = () => {
  return (
    <Fragment>
      <img src={logo} alt='Logo' className='logo' />
      <EventCard />
    </Fragment>
  );
};

export default MainPage;
