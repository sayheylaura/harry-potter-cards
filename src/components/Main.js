import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class Main extends Component {
  render() {
    const { characters, filteredCharacters } = this.props;
    return (
      <main className="app__main">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CharacterList filteredCharacters={filteredCharacters} />
            )}
          />

          <Route
            path="/character/:id"
            render={props => {
              const detailId = this.props.match.params.id;
              const selectedCharacter = characters.find(
                character => character.id === parseInt(detailId)
              );
              return (
                <CharacterDetail
                  match={props.match}
                  selectedCharacter={selectedCharacter}
                />
              );
            }}
          />
        </Switch>
      </main>
    );
  }
}

Main.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
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
