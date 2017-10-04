import React from 'react';
import { render } from 'react-dom';
import Home from '../components/Home';

const App = () => (
  <div>
    <Home />
  </div>
);

render(
  <App name='Marvel' />,
  document.getElementById('app'),
);
