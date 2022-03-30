import React from 'react';
import { Link } from 'react-router-dom';

import './_name_page.styles.css';

const NamePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#040404',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 -16px',
        padding: '0 28px'
      }}
    >
      <div className='name-title'>Пожалуйста, <br /> представься</div>
      <input type='text' placeholder='Имя Фамилия' />
      <p className='input-description'>
        Представься так, чтобы тебя точно узнал организатор
      </p>
      <Link to='/finish' className='next-asd'>Завершить</Link>
    </div>
  );
};

export default NamePage;
