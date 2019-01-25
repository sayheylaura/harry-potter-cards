import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import './characterList.scss';

class CharacterList extends Component {
  render() {
    const { filteredCharacters } = this.props;
    return (
      <ul className="app__character-list">
        {filteredCharacters.map(character => {
          const { id, image, name, house } = character;
          return (
            <Link className="app__character-link" to={`/character/${id}`} key={id}>
              <li className="app__character-card">
                <CharacterCard image={image} name={name} house={house} />
              </li>
            </Link>
          );
        })}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  filteredCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CharacterList;
