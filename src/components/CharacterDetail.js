import React, { Component } from "react";
import PropTypes from "prop-types";

class CharacterDetail extends Component {
  render() {
    const {
      image,
      name,
      house,
      yearOfBirth,
      patronus,
      alive
    } = this.props.selectedCharacter;
    return (
      <div className="app__character-detail">
        <img className="character__image--detail" src={image} alt={name} />
        <h2 className="character__name--detail">{name}</h2>
        <ul className="character__info">
          <li className="character__info-item">{house}</li>
          <li className="character__info-item">{yearOfBirth}</li>
          <li className="character__info-item">{patronus}</li>
          <li className="character__info-item">{alive}</li>
        </ul>
        <p />
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  match: PropTypes.object,
  selectedCharacter: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;
