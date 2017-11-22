import React, { Component } from 'react';
import './App.css';

export const PokemonPairs = {
  'bulbasaur': 1,
  'charmander': 4,
}

class App extends Component {
  generateCurrentQuery(pokemonNumbers) {
    const formattedNumbers = Object.values(PokemonPairs).join(',');
    return `evolve&${ formattedNumbers }`
  }

  getSelectedPokemon() {

  }

  renderPokemonSelection() {
    return (
      <ul className="PokemonList">
        {this.renderIndividualPokemonCheckboxes()}
      </ul>
    )
  }

  renderIndividualPokemonCheckboxes() {
    return Object.keys(PokemonPairs).map((name) => {
      return (
        <li>
          <input
            type='checkbox'
            className="SelectionCheckbox"
            id={name}
            key={PokemonPairs[name]}
            value={PokemonPairs[name]}
          />
          <label for={name}>{name}</label>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokemon Mass-Evolution Query Generator</h1>
        </div>
        <div className="Main-body">
          <div className="CurrentQuery">
            {this.generateCurrentQuery()}
          </div>
          <div className="PokemonSelection">
            {this.renderPokemonSelection()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
