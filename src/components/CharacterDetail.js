import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import GoBack from "./GoBack";
import "./characterDetail.scss";

class CharacterDetail extends Component {
  render() {
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
            <Fragment>
              <img className="character__image--detail" src={image} alt={name} />
              <h2 className="character__name--detail">{name}</h2>
              <ul className="character__info">
                <li className="character__info-item">
                  House:{" "}
                  {house ? (
                    <span>{` ${house}`}</span>
                  ) : (
                      <span> no information available</span>
                    )}
                </li>
                <li className="character__info-item">
                  Year of birth:
                {yearOfBirth ? (
                    <span>{` ${yearOfBirth}`}</span>
                  ) : (
                      <span> no information available</span>
                    )}
                </li>
                <li className="character__info-item">
                  Patronus:
                {patronus ? (
                    <span>{` ${patronus}`}</span>
                  ) : (
                      <span> no information available</span>
                    )}
                </li>
                <li className="character__info-item">
                  Status:{" "}
                  {alive ? (
                    <span>alive</span>
                  ) : (
                      <span>
                        <i class="fas fa-skull" />
                      </span>
                    )}
                </li>
              </ul>
              <GoBack />
            </Fragment>
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
      house: PropTypes.string.isRequired,
      yearOfBirth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      patronus: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      alive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default CharacterDetail;
