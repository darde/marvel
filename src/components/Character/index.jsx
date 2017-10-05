import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

// for a full list of image variants visit
// https://developer.marvel.com/documentation/images
const IMAGE_VARIANT = {
  fantastic: 'portrait_fantastic',
  uncanny: 'portrait_uncanny',
  incredible: 'portrait_incredible',
};

const Character = ({ name, thumb }) => (
  <div className='character'>
    <figure>
      <img src={`${thumb.path}/${IMAGE_VARIANT.fantastic}.${thumb.extension}`} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Character;
