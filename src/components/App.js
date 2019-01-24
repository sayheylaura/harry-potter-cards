import React, { Component } from 'react';
import { fetchCharacters } from '../services/characterService';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({ characters: data });
      })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Harry Potter Characters</h1>
        </header>

        <main className="app__main">
          <ul className="app__character-list">
            {characters.map(character => {
              const { image, name, house } = character;
              return (
                <li className="app__character-card">
                  <img className="character__image" src={image} alt={name}/>
                  <h2 className="character__name">{name}</h2>
                  <p className="character__house">{house}</p>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
