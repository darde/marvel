import React from 'react';
import { render } from 'react-dom';
import Home from '../components/Home';

const App = () => (
  <div>
    <Home />
  </div>
);

render(
  <App name='Xunda' />,
  document.getElementById('app'),
);
