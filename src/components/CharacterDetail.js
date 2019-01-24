import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

class CharacterDetail extends Component {
  render() {
    console.log(this.props);
    const { match, isFetching, characters } = this.props;
    const selectedId = match.params.id;
    const selectedCharacter = characters.find(
      character => character.id === selectedId
    );
    const {
      image,
      name,
      house,
      yearOfBirth,
      patronus,
      alive
    } = selectedCharacter;
    return (
      <div className="app__character-detail">
        {isFetching ? (
          <Loader />
        ) : (
          <div className="detail-wrapper">
            <img className="character__image--detail" src={image} alt={name} />
            <h2 className="character__name--detail">{name}</h2>
            <ul className="character__info">
              <li className="character__info-item">{house}</li>
              <li className="character__info-item">{yearOfBirth}</li>
              <li className="character__info-item">{patronus}</li>
              <li className="character__info-item">{alive}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CharacterDetail;
