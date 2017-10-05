import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

// for a full list of image variants visit
// https://developer.marvel.com/documentation/images
const IMAGE_VARIANT = {
  fantastic: 'portrait_fantastic',
  uncanny: 'portrait_uncanny',
  incredible: 'portrait_incredible',
};

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
    };
    this.toggleCharacterDetail = this.toggleCharacterDetail.bind(this);
  }

  toggleCharacterDetail() {
    console.log('show!');
    this.setState({
      showDetail: !this.state.showDetail,
    });
  }

  render() {
    return (
      <div className='character'>
        <button
          onClick={this.toggleCharacterDetail}
        >
          <figure>
            <img
              src={`${this.props.thumb.path}/${IMAGE_VARIANT.fantastic}.${this.props.thumb.extension}`}
              alt={this.props.name}
            />
            <figcaption>{this.props.name}</figcaption>
          </figure>
        </button>
        <div
          className={
            this.state.showDetail ?
            'character-detail character-detail--show' :
            'character-detail'
          }
        >
          <div className='character-detail-close-container'>
            <button
              onClick={this.toggleCharacterDetail}
            >
              CLOSE
            </button>
          </div>
          <div className='character-detail-thumb'>
            <figure>
              <img
                src={`${this.props.thumb.path}/${IMAGE_VARIANT.incredible}.${this.props.thumb.extension}`}
                alt={this.props.name}
              />
              <figcaption>{this.props.name}</figcaption>
            </figure>
          </div>
          <div className='character-detail-content'>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumb: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Character;
