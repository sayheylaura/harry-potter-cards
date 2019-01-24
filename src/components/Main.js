import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterList from "./CharacterList";

class Main extends Component {
  render() {
    const { filteredCharacters } = this.props;
    return (
      <main className="app__main">
        <CharacterList filteredCharacters={filteredCharacters} />
      </main>
    );
  }
}

Main.propTypes = {
  filteredCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Main;