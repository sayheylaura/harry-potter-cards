import React, { Component } from "react";
import { fetchCharacters } from "../services/characterService";
import uniqueId from "lodash.uniqueid";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      userQuery: "",
      userQueryHouse: "",
      isFetching: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleHouseChange = this.handleHouseChange.bind(this);
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

  handleHouseChange(event) {
    const currentHouseQuery = event.currentTarget.value;
    this.setState({userQueryHouse: currentHouseQuery});
  }

  filterByHouse() {
    const {characters, userQueryHouse} = this.state;

    let filteredCharacters;

    if(userQueryHouse === "no") {
      filteredCharacters = characters.filter(character => {
        return character.house === ""
      })
    } else {
      filteredCharacters = characters.filter(character => {
        const characterHouse = character.house.toLowerCase();
        if(!userQueryHouse || characterHouse.includes(userQueryHouse.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    }
    return filteredCharacters;
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
    const { characters, userQuery, isFetching, userQueryHouse } = this.state;
    const filteredCharacters = this.filterByHouse();
    return (
      <div className="app">
        <Header
          userQuery={userQuery}
          userQueryHouse={userQueryHouse}
          handleInputChange={this.handleInputChange}
          handleHouseChange={this.handleHouseChange}
        />

        <Main
          isFetching={isFetching}
          characters={characters}
          filteredCharacters={filteredCharacters}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
