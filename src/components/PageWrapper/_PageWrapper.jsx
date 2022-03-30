import React from 'react';
import { Outlet } from 'react-router-dom';

import './_page_wrapper.styles.css';

export const PageWrapper = () => {
  return (
    <div className='container'>
      <Outlet />
    </div>
  );
};
