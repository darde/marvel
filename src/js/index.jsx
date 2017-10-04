import React, { PropTypes } from 'react';
import { render } from 'react-dom';

const App = ({ name }) => (
  <div>
    Hello { name }
  </div>
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
App.propTypes = {
  name: PropTypes.string.isRequired,
};

render(
  <App name='Marvel' />,
  document.getElementById('app'),
);
