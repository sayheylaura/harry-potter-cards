import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Loader from "./Loader";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import './main.scss';

class Main extends Component {
  render() {
    const { isFetching, characters, filteredCharacters } = this.props;
    return (
      <main className="app__main">

        {isFetching ? (
          <Loader />
        ) : (
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
                  return (
                    <CharacterDetail
                      match={props.match}
                      isFetching={isFetching}
                      characters={characters}
                    />
                  );
                }}
              />
            </Switch>
          )}
      </main>
    );
  }
}

Main.propTypes = {
  isFetching: PropTypes.bool.isRequired,
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
