import React, { Component } from 'react';
import './App.css';

export const Queries = {
  'Full Query': [1,4,7,10,13,16,19-23,27,29,32,37,41,43,46-60,63,66,69,72,74,77-92,95-116,118-147,152,155,158,161-179,183,187,191-246],
  'Minimal Query': [10,13,16,19,21,161,163,165,167,177],
  'Water-Specific Query': [10,13,16,19,21,60,72,86,90,116,161,163,165,167,177,183,194,223],
  'Forest-Specfic Query': [10,13,16,19,21,29,32,43,69,161,163,165,167,177,191,204],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: null,
    };
  }

  componentDidMount = () => {
    this.handlePreCreatedCheckboxClick('Full Query');
  }

  generateQuery = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    let selectedNumbers = [];
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      const cb = checkboxes[i];
      if (cb.checked === true) {
        selectedNumbers.push(cb.value);
      }
    };

    return `evolve&${ selectedNumbers.join(',') }`;
  }

  handlePreCreatedCheckboxClick = (query) => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      let cb = checkboxes[i];
      if(cb.id !== query) {
        cb.checked = false;
      }
    };

    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      let cb = checkboxes[i];
      if (Queries[query].includes(parseInt(cb.value))) {
        cb.checked = true;
      } else {
        cb.checked = false;
      }
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  handleManualCheckboxClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    for(let i = 0; i < Object.keys(Queries).length; i++) {
      checkboxes[i].checked = false;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  onSelectAllClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  onDeselectAllClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  renderPokemonSelection = () => {
    return (
      <ul className="QueryList">
        {this.renderPrecreatedQueryCheckboxes()}
        <hr/>
        <div className="SelectionButtons">
          <button id="selectAll" onClick={this.onSelectAllClick}>Select All</button>
          <button id="deselectAll" onClick={this.onDeselectAllClick}>De-select All</button>
        </div>
        {this.renderIndividualPokemonCheckboxes()}
      </ul>
    )
  }

  renderPrecreatedQueryCheckboxes = () => {
    return Object.keys(Queries).map((queryName) => {
      return (
        <li key={queryName}>
          <input
            type='checkbox'
            className="SelectionCheckbox"
            id={queryName}
            value={queryName}
            defaultChecked={queryName === 'Full Query'}
            onChange={this.handlePreCreatedCheckboxClick.bind(this, queryName)}
          />
          <label htmlFor={queryName}>{queryName}</label>
        </li>
      )
    })
  }

  renderIndividualPokemonCheckboxes = () => {
    return Object.keys(PokemonPairs).map((pokemonName) => {
      return (
        <li key={PokemonPairs[pokemonName]}>
          <input
            type='checkbox'
            className="SelectionCheckbox"
            id={pokemonName}
            value={PokemonPairs[pokemonName]}
            onChange={this.handleManualCheckboxClick}
          />
          <label htmlFor={pokemonName}>{pokemonName}</label>
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
            {this.state['currentQuery']}
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
export const PokemonPairs = {
  Bulbasaur: '1',
  Charmander : '4',
  Squirtle: '7',
  Caterpie: '10',
  Weedle: '13',
  Pidgey: '16',
  Rattata: '19',
  Spearow: '21',
  Ekans: '23',
  Pikachu: '25',
  Sandshrew: '27',
  'Nidoran♀': '29',
  'Nidoran♂': '32',
  Clefairy: '35',
  Vulpix: '37',
  Jigglypuff: '39',
  Zubat: '41',
  Oddish: '43',
  Paras: '46',
  Venonat: '48',
  Diglett: '50',
  Meowth: '52',
  Psyduck: '54',
  Mankey: '56',
  Growlithe: '58',
  Poliwag: '60',
  Abra: '63',
  Machop: '66',
  Bellsprout: '69',
  Tentacool: '72',
  Geodude: '74',
  Ponyta: '77',
  Slowpoke: '79',
  Magnemite: '81',
  Doduo: '84',
  Seel: '86',
  Grimer: '88',
  Shellder: '90',
  Gastly: '92',
  Drowzee: '96',
  Krabby: '98',
  Voltorb: '100',
  Exeggcute: '102',
  Cubone: '104',
  Koffing: '109',
  Rhyhorn: '111',
  Chansey: '113',
  Horsea: '116',
  Goldeen: '118',
  Staryu: '120',
  Eevee: '133',
  Omanyte: '138',
  Kabuto: '140',
  Dratini: '147',
  Chikorita: '152',
  Cyndaquil: '155',
  Totodile: '158',
  Sentret: '161',
  Hoothoot: '163',
  Ledyba: '165',
  Spinarak: '167',
  Chinchou: '170',
  Pichu: '172',
  Cleffa: '173',
  Igglybuff: '174',
  Togepi: '175',
  Natu: '177',
  Mareep: '179',
  Marill: '183',
  Hoppip: '187',
  Wooper: '194',
  Pineco: '204',
  Snubbull: '209',
  Teddiursa: '216',
  Slugma: '218',
  Swinub: '220',
  Remoraid: '223',
  Houndour: '228',
  Phanpy: '231',
  Smoochum: '238',
  Elekid: '239',
  Magby: '240',
  Larvitar: '246',
};