import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

export const Queries = {
  "Compact Full Query (doesn't allow modification)" : ['1','4','7','10','13','16','19-23','27','29','32','37','41','43','46-60','63','66','69','72','74','77-92','95-116','118-147','152','155','158','161-179','183','187','191-246','353','355'],
  'Full Query': ['1','4','7','10','13','16','19','21','23','27','29','32','37','41','43','46','48','68','50','52','54','56','58','60','63','66','69','72','74','77','79','81','84','86','88','90','92','96','98','100','102','104','109','111','113','116','118','120','133','138','140','147','152','155','158','161','163','165','167','170','172','173','174','175','177','179','183','187','194','204','209','216','218','220','223','228','231','238','239','240','246','353','355'],
  'Minimal Query': ['10','13','16','19','21','161','163','165','167','177'],
  'Water-Specific Query': ['10','13','16','19','21','60','72','86','90','116','161','163','165','167','177','183','194','223'],
  'Forest-Specfic Query': ['10','13','16','19','21','29','32','43','69','161','163','165','167','177','191','204'],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: null,
      value: null,
      copied: false,
    };
  }

  componentDidMount = () => {
    this.handlePreCreatedCheckboxClick(Object.keys(Queries)[0]);
  }

  generateQuery = (query = null) => {
    if (query) { return `evolve&${ Queries[query].join(',') }`; }

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
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
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      let cb = checkboxes[i];
      if(cb.id !== query) {
        cb.checked = false;
      }
    };

    // If the user clicked the compact full query, we disable all pokemon checkboxes
    // Otherwise, we enable them and check/uncheck them as appropriate for the query
    if (query === "Compact Full Query (doesn't allow modification)") {
      this.disableButtonsAndCheckboxes();
    } else {
      this.enableButtonsAndCheckboxes();
      for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
        let cb = checkboxes[i];
        if (Queries[query].includes(cb.value)) {
          cb.checked = true;
        } else {
          cb.checked = false;
        }
      };
    }

    this.setState({
      currentQuery: this.generateQuery(query),
    })
  }

  handleManualCheckboxClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for(let i = 0; i < Object.keys(Queries).length; i++) {
      checkboxes[i].checked = false;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  enableButtonsAndCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].disabled = false;
    }
    document.querySelector('button#selectAll').disabled = false;
    document.querySelector('button#deselectAll').disabled = false;
  }

  disableButtonsAndCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].disabled = true;
    }
    document.querySelector('button#selectAll').disabled = true;
    document.querySelector('button#deselectAll').disabled = true;
  }

  onSelectAllClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      checkboxes[i].checked = false;
    }

    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  onDeselectAllClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      checkboxes[i].checked = false;
    }

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
            defaultChecked={queryName === Object.keys(Queries)[0]}
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
          <h4>Inspired by <a href="https://www.reddit.com/r/TheSilphRoad/comments/6ztyu5/the_ultimate_mass_evolution_search_query/">this</a> Reddit thread.</h4>
          <div className="CurrentQuery">
            {this.state.currentQuery}
          </div>
          <CopyToClipboard
            text={this.state.currentQuery}
            onCopy={() => this.setState({copied: true})}
          >
            <button>Click to Copy</button>
          </CopyToClipboard>
          <div className="PokemonSelection">
            {this.renderPokemonSelection()}
          </div>
          <div>
            <h4>For comments or suggestion, message me <a href="https://www.reddit.com/user/mikeappell/">here.</a></h4>
            <h4>Built upon <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>. My code can be found <a href="https://github.com/mikeappell/pokemon_evolve_query_react">here</a>.</h4>
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
  Shuppet: '353',
  Duskull: '355',
};