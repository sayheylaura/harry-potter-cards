import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./characterCard.scss";

class CharacterCard extends Component {
  render() {
    const { image, name, house } = this.props;
    return (
      <Fragment>
        <div className="character__image-wrapper">
          <img className="character__image" src={image} alt={name} />
        </div>
        <h2 className="character__name">{name}</h2>
        <p className="character__house">
          {house ? <span>{house}</span> : <span>No house</span>}
        </p>
      </Fragment>
    );
  }
}

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired
};

export default CharacterCard;
