import React, { Component } from 'react';
import { fetchCharacters } from '../services/characterService';
import uniqueId from 'lodash.uniqueid';
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
        const dataWithId = data
          .map(item => {
            return {
              ...item,
              id: uniqueId()
            }
          })

        this.setState({ characters: dataWithId });
      })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Harry Potter Characters</h1>

          <form className="app__form">
            <label htmlFor="character-name" className="character-name__label">
            Write your favourite character's name!
              <input type="text" name="character-name" id="character-name" className="character-name__input" placeholder="Ex. Sirius Black" />
            </label>
          </form>
        </header>

        <main className="app__main">
          <ul className="app__character-list">
            {characters.map(character => {
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
        </main>
      </div>
    );
  }
}

export default App;
