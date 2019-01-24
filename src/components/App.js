import React, { Component } from "react";
import { fetchCharacters } from "../services/characterService";
import uniqueId from "lodash.uniqueid";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      userQuery: "",
      isFetching: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetchCharacters().then(data => {
      const dataWithId = data.map(item => {
        return {
          ...item,
          id: uniqueId()
        };
      });

      this.setState({
        characters: dataWithId,
        isFetching: false
      });
    });
  }

  handleInputChange(event) {
    const currentQuery = event.currentTarget.value;
    this.setState({ userQuery: currentQuery });
  }

  filterByName() {
    const { characters, userQuery } = this.state;
    const filteredCharacters = characters.filter(character => {
      const characterName = character.name.toLowerCase();
      return !userQuery || characterName.includes(userQuery.toLowerCase());
    });
    return filteredCharacters;
  }

  render() {
    const { characters, userQuery, isFetching } = this.state;
    const filteredCharacters = this.filterByName();
    return (
      <div className="app">
        <Header
          userQuery={userQuery}
          handleInputChange={this.handleInputChange}
        />

        {isFetching ? (
          <Loader />
        ) : (
          <Main
            isFetching={isFetching}
            characters={characters}
            filteredCharacters={filteredCharacters}
          />
        )}
      </div>
    );
  }
}

export default App;
