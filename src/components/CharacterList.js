import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterList extends Component {
  render() {
    const { filteredCharacters } = this.props;
    return (
      <ul className="app__character-list">
        {filteredCharacters.map(character => {
          const { id, image, name, house } = character;
          return (
            <li className="app__character-card" key={id}>
              <img className="character__image" src={image} alt={name} />
              <h2 className="character__name">{name}</h2>
              <p className="character__house">{house}</p>
            </li>
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
}

export default CharacterList;