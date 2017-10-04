import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name }) => (
  <div>{name}</div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Character;
