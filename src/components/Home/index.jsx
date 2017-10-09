import React from 'react';
import './styles.less';
import Characters from '../Characters';

const Home = () => (
  <div className='home'>
    <header>
      <h1>Marvel Universe</h1>
    </header>
    <Characters />
  </div>
);

export default Home;
