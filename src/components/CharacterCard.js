import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {

  render() {
    const { image, name, house } = this.props;
    return (
      <Fragment>
        <img className="character__image" src={image} alt={name} />
        <h2 className="character__name">{name}</h2>
        <p className="character__house">{house}</p>
      </Fragment>
    );
  }
}

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired
}

export default CharacterCard;